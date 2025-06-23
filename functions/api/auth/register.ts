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

// Initialize database tables
async function initDatabase(db: D1Database) {
  try {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        company TEXT,
        phone TEXT,
        password_hash TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    await db.exec(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
    `);
    
    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
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
    
    // Initialize database
    await initDatabase(env.DB);
    
    // Parse request body
    const body = await request.json() as {
      name: string;
      email: string;
      company?: string;
      phone?: string;
      password: string;
      confirmPassword: string;
    };
    
    // Validate required fields
    if (!body.name || !body.email || !body.password) {
      return new Response(JSON.stringify({ 
        error: '请填写所有必填字段' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate password match
    if (body.password !== body.confirmPassword) {
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
    
    // Insert new user
    const result = await env.DB.prepare(`
      INSERT INTO users (name, email, company, phone, password_hash)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      body.name,
      body.email,
      body.company || null,
      body.phone || null,
      passwordHash
    ).run();
    
    if (!result.success) {
      throw new Error('用户创建失败');
    }
    
    // Return success response (don't include sensitive data)
    const userId = Date.now(); // Use timestamp as unique ID
    return new Response(JSON.stringify({ 
      success: true,
      message: '注册成功！请登录您的账户',
      user: {
        id: userId,
        name: body.name,
        email: body.email,
        company: body.company
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