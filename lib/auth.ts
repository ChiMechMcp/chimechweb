import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { executeQuery } from './db'

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production'

export interface User {
  id: number
  username: string
  email: string
  first_name?: string
  last_name?: string
  role: 'admin' | 'user'
  avatar?: string
  status: 'active' | 'inactive'
  created_at: Date
  updated_at: Date
}

export interface Session {
  id: string
  user_id: number
  expires_at: Date
  created_at: Date
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12
  return await bcrypt.hash(password, saltRounds)
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}

// Generate JWT token
export function generateToken(user: User): string {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

// Verify JWT token
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

// Create user
export async function createUser(userData: {
  username: string
  email: string
  password: string
  first_name?: string
  last_name?: string
  role?: 'admin' | 'user'
}): Promise<User> {
  const hashedPassword = await hashPassword(userData.password)
  
  const query = `
    INSERT INTO users (username, email, password_hash, first_name, last_name, role)
    VALUES (?, ?, ?, ?, ?, ?)
  `
  
  const params = [
    userData.username,
    userData.email,
    hashedPassword,
    userData.first_name || null,
    userData.last_name || null,
    userData.role || 'user'
  ]

  const result: any = await executeQuery(query, params)
  
  // Get the created user
  const user = await getUserById(result.insertId)
  if (!user) {
    throw new Error('Failed to create user')
  }
  
  return user
}

// Get user by email
export async function getUserByEmail(email: string): Promise<User | null> {
  const query = 'SELECT * FROM users WHERE email = ? AND status = "active"'
  const results: any = await executeQuery(query, [email])
  
  if (Array.isArray(results) && results.length > 0) {
    return results[0] as User
  }
  
  return null
}

// Get user by username
export async function getUserByUsername(username: string): Promise<User | null> {
  const query = 'SELECT * FROM users WHERE username = ? AND status = "active"'
  const results: any = await executeQuery(query, [username])
  
  if (Array.isArray(results) && results.length > 0) {
    return results[0] as User
  }
  
  return null
}

// Get user by ID
export async function getUserById(id: number): Promise<User | null> {
  const query = 'SELECT * FROM users WHERE id = ? AND status = "active"'
  const results: any = await executeQuery(query, [id])
  
  if (Array.isArray(results) && results.length > 0) {
    return results[0] as User
  }
  
  return null
}

// Authenticate user
export async function authenticateUser(loginField: string, password: string): Promise<User | null> {
  // Try to find user by email or username
  let user = await getUserByEmail(loginField)
  if (!user) {
    user = await getUserByUsername(loginField)
  }
  
  if (!user) {
    return null
  }
  
  // Get password hash
  const query = 'SELECT password_hash FROM users WHERE id = ?'
  const results: any = await executeQuery(query, [user.id])
  
  if (Array.isArray(results) && results.length > 0) {
    const isValidPassword = await verifyPassword(password, results[0].password_hash)
    if (isValidPassword) {
      return user
    }
  }
  
  return null
}

// Create session
export async function createSession(userId: number): Promise<string> {
  const sessionId = jwt.sign({ userId, timestamp: Date.now() }, JWT_SECRET)
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
  
  const query = 'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)'
  await executeQuery(query, [sessionId, userId, expiresAt])
  
  return sessionId
}

// Get session
export async function getSession(sessionId: string): Promise<Session | null> {
  const query = 'SELECT * FROM sessions WHERE id = ? AND expires_at > NOW()'
  const results: any = await executeQuery(query, [sessionId])
  
  if (Array.isArray(results) && results.length > 0) {
    return results[0] as Session
  }
  
  return null
}

// Delete session
export async function deleteSession(sessionId: string): Promise<void> {
  const query = 'DELETE FROM sessions WHERE id = ?'
  await executeQuery(query, [sessionId])
} 