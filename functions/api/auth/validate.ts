// User token validation API for Cloudflare Pages Functions
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

// Validate JWT-like token
function validateToken(token: string): { userId: number; email: string } | null {
  try {
    const payload = JSON.parse(atob(token));
    if (payload.exp && Date.now() > payload.exp) {
      return null; // Token expired
    }
    return { userId: payload.userId, email: payload.email };
  } catch {
    return null;
  }
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
      token: string;
    };
    
    // Validate token format
    if (!body.token) {
      return new Response(JSON.stringify({ 
        error: '未提供认证令牌' 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate token
    const tokenData = validateToken(body.token);
    if (!tokenData) {
      return new Response(JSON.stringify({ 
        error: '认证令牌无效或已过期' 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Get user from database
    const user = await env.DB.prepare(`
      SELECT id, name, email, company, phone, created_at
      FROM users 
      WHERE id = ? AND email = ?
    `).bind(tokenData.userId, tokenData.email).first() as User | null;
    
    if (!user) {
      return new Response(JSON.stringify({ 
        error: '用户不存在' 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Return user data
    return new Response(JSON.stringify({ 
      success: true,
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
    console.error('Token validation error:', error);
    
    return new Response(JSON.stringify({ 
      error: error.message || '令牌验证失败' 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}; 