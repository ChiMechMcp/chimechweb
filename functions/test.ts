// Simple test function for Cloudflare Pages Functions
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

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  
  try {
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Cloudflare Pages Functions 工作正常!',
      timestamp: new Date().toISOString(),
      url: request.url,
      method: request.method,
      hasDatabase: !!env.DB
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ 
      error: error.message || '测试失败' 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}; 