// User registration API for Cloudflare Pages Functions
export interface Env {
  DB: D1Database;
}

interface PagesContext<Env = any> {
  request: Request;
  env: Env;
  params: Record<string, string>;
  next(): Promise<Response>;
  waitUntil(promise: Promise<any>): void;
}

type PagesFunction<Env = any> = (context: PagesContext<Env>) => Response | Promise<Response>;

// Simple hash function for passwords (in production, use bcrypt)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
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
      name?: string;
      first_name?: string;
      last_name?: string;
      email: string;
      password: string;
      confirmPassword?: string;
    };
    
    // Extract first_name and last_name from name if provided
    let firstName = body.first_name || '';
    let lastName = body.last_name || '';
    
    if (body.name && !firstName && !lastName) {
      const nameParts = body.name.trim().split(' ');
      firstName = nameParts[0] || '';
      lastName = nameParts.slice(1).join(' ') || '';
    }
    
    // Validate required fields
    if (!firstName || !body.email || !body.password) {
      return new Response(JSON.stringify({ 
        error: '请填写所有必填字段' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate password match if confirmPassword is provided
    if (body.confirmPassword && body.password !== body.confirmPassword) {
      return new Response(JSON.stringify({ 
        error: '密码确认不匹配' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(JSON.stringify({ 
        error: '请输入有效的邮箱地址' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Check if user already exists
    const existingUser = await env.DB.prepare(
      'SELECT id FROM users WHERE email = ?'
    ).bind(body.email).first();
    
    if (existingUser) {
      return new Response(JSON.stringify({ 
        error: '该邮箱已经注册，请使用其他邮箱或直接登录' 
      }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Hash password
    const passwordHash = await hashPassword(body.password);
    
    // Generate username from email
    const username = body.email.split('@')[0];
    
    // Insert new user
    const result = await env.DB.prepare(`
      INSERT INTO users (username, email, first_name, last_name, password_hash)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      username,
      body.email,
      firstName,
      lastName,
      passwordHash
    ).run();
    
    if (!result.success) {
      throw new Error('用户创建失败');
    }
    
    // Return success response (don't include sensitive data)
    return new Response(JSON.stringify({ 
      success: true,
      message: '注册成功！请登录您的账户',
      user: {
        id: Date.now(), // Use timestamp as unique ID
        username: username,
        email: body.email,
        first_name: firstName,
        last_name: lastName
      }
    }), {
      status: 201,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (error: any) {
    console.error('Registration error:', error);
    
    return new Response(JSON.stringify({ 
      error: error.message || '注册失败，请稍后重试' 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}; 