// User login API for Cloudflare Pages Functions
export interface Env {
  DB: D1Database;
}

interface User {
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  created_at: string;
}

interface PagesContext<Env = any> {
  request: Request;
  env: Env;
  params: Record<string, string>;
  next(): Promise<Response>;
  waitUntil(promise: Promise<any>): void;
}

type PagesFunction<Env = any> = (context: PagesContext<Env>) => Response | Promise<Response>;

// Simple hash function for passwords (must match registration)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Generate simple JWT-like token (for demo purposes)
function generateToken(userId: number, email: string): string {
  const payload = {
    userId,
    email,
    exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  };
  return btoa(JSON.stringify(payload));
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  
  try {
    // Check if database is available
    if (!env.DB) {
      return new Response(JSON.stringify({ 
        error: '数据库服务暂时不可用' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Parse request body
    const body = await request.json() as {
      email: string;
      password: string;
    };
    
    // Validate required fields
    if (!body.email || !body.password) {
      return new Response(JSON.stringify({ 
        error: '请输入邮箱和密码' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Hash the provided password
    const passwordHash = await hashPassword(body.password);
    
    // Find user by email and password
    const user = await env.DB.prepare(`
      SELECT id, name, email, company, phone, created_at
      FROM users 
      WHERE email = ? AND password_hash = ?
    `).bind(body.email, passwordHash).first() as User | null;
    
    if (!user) {
      return new Response(JSON.stringify({ 
        error: '邮箱或密码错误' 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Generate authentication token
    const token = generateToken(user.id, user.email);
    
    // Return success response with user data and token
    return new Response(JSON.stringify({ 
      success: true,
      message: '登录成功',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        company: user.company,
        phone: user.phone,
        createdAt: user.created_at
      }
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (error: any) {
    console.error('Login error:', error);
    
    return new Response(JSON.stringify({ 
      error: error.message || '登录失败，请稍后重试' 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}; 