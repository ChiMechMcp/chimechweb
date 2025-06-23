// Cloudflare Pages Functions middleware
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

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // Handle API routes
  if (url.pathname.startsWith('/api/')) {
    // Set CORS headers for all API requests
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };
    
    // Handle preflight OPTIONS request
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders
      });
    }
    
    // Log the API request
    console.log('API Request:', request.method, url.pathname);
    
    // Continue to specific API handlers
    return context.next();
  }
  
  // For non-API routes, continue normally
  return context.next();
}; 