import { NextRequest, NextResponse } from 'next/server'
import { createUser, getUserByEmail, getUserByUsername, generateToken, createSession } from '@/lib/auth'
import { initDatabase } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    // Initialize database tables if they don't exist
    await initDatabase()

    const { username, email, password, firstName, lastName } = await request.json()

    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Username, email, and password are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUserByEmail = await getUserByEmail(email)
    if (existingUserByEmail) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      )
    }

    const existingUserByUsername = await getUserByUsername(username)
    if (existingUserByUsername) {
      return NextResponse.json(
        { error: 'Username already taken' },
        { status: 409 }
      )
    }

    // Create new user
    const user = await createUser({
      username,
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      role: 'user'
    })

    // Generate JWT token
    const token = generateToken(user)
    
    // Create session
    const sessionId = await createSession(user.id)

    // Return user info and token
    const response = NextResponse.json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        avatar: user.avatar
      },
      token,
      sessionId
    })

    // Set HTTP-only cookie for session
    response.cookies.set('session', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    })

    return response

  } catch (error) {
    console.error('Registration error:', error)
    
    // Handle specific database errors
    if (error instanceof Error) {
      if (error.message.includes('Duplicate entry')) {
        return NextResponse.json(
          { error: 'User already exists' },
          { status: 409 }
        )
      }
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 