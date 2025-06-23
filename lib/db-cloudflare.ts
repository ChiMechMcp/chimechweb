// Cloudflare D1 type definitions
declare global {
  interface D1Database {
    prepare(query: string): D1PreparedStatement;
    dump(): Promise<ArrayBuffer>;
    batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
    exec(query: string): Promise<D1ExecResult>;
  }

  interface D1PreparedStatement {
    bind(...values: any[]): D1PreparedStatement;
    first<T = unknown>(colName?: string): Promise<T | null>;
    run(): Promise<D1Result>;
    all<T = unknown>(): Promise<D1Result<T>>;
    raw<T = unknown>(): Promise<T[]>;
  }

  interface D1Result<T = unknown> {
    results?: T[];
    success: boolean;
    error?: string;
    meta: {
      duration: number;
      size_after: number;
      rows_read: number;
      rows_written: number;
    };
  }

  interface D1ExecResult {
    count: number;
    duration: number;
  }
}

// Cloudflare D1 database configuration
export interface Env {
  DB: D1Database;
}

// Get the D1 database instance
export function getD1Database(env?: Env): D1Database | null {
  if (typeof window !== 'undefined') {
    // Client-side: D1 is not available
    return null;
  }
  
  // Server-side: Get from environment
  if (env?.DB) {
    return env.DB;
  }
  
  // For local development, we might not have D1 available
  return null;
}

// Execute query with D1
export async function executeD1Query(
  db: D1Database, 
  query: string, 
  params: any[] = []
): Promise<any> {
  try {
    const stmt = db.prepare(query);
    if (params.length > 0) {
      const result = await stmt.bind(...params).all();
      return result.results;
    } else {
      const result = await stmt.all();
      return result.results;
    }
  } catch (error) {
    console.error('D1 Query execution failed:', error);
    throw error;
  }
}

// Execute single query with D1
export async function executeD1Single(
  db: D1Database, 
  query: string, 
  params: any[] = []
): Promise<any> {
  try {
    const stmt = db.prepare(query);
    if (params.length > 0) {
      const result = await stmt.bind(...params).first();
      return result;
    } else {
      const result = await stmt.first();
      return result;
    }
  } catch (error) {
    console.error('D1 Single query execution failed:', error);
    throw error;
  }
}

// Execute write operation with D1
export async function executeD1Write(
  db: D1Database, 
  query: string, 
  params: any[] = []
): Promise<any> {
  try {
    const stmt = db.prepare(query);
    if (params.length > 0) {
      const result = await stmt.bind(...params).run();
      return result;
    } else {
      const result = await stmt.run();
      return result;
    }
  } catch (error) {
    console.error('D1 Write operation failed:', error);
    throw error;
  }
}

// Initialize D1 database tables
export async function initD1Database(db: D1Database) {
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      first_name TEXT,
      last_name TEXT,
      role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user')),
      avatar TEXT,
      status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const createSessionsTable = `
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id INTEGER NOT NULL,
      expires_at DATETIME NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `;

  try {
    await executeD1Write(db, createUsersTable);
    await executeD1Write(db, createSessionsTable);
    console.log('D1 Database tables initialized successfully');
  } catch (error) {
    console.error('D1 Database initialization failed:', error);
    throw error;
  }
} 