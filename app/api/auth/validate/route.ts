import { NextRequest, NextResponse } from 'next/server'
import { verifyToken, getSession, getUserById } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization')
    const sessionCookie = request.cookies.get('session')
    
    let token: string | null = null
    let sessionId: string | null = null

    // Check for Bearer token
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7)
    }

    // Check for session cookie
    if (sessionCookie) {
      sessionId = sessionCookie.value
    }

    // If no token or session, return unauthorized
    if (!token && !sessionId) {
      return NextResponse.json(
        { error: 'Missing authentication token or session' },
        { status: 401 }
      )
    }

    let user = null

    // Verify JWT token if present
    if (token) {
      const payload = verifyToken(token)
      if (payload && payload.id) {
        user = await getUserById(payload.id)
      }
    }

    // If no user from token, try session
    if (!user && sessionId) {
      const session = await getSession(sessionId)
      if (session) {
        user = await getUserById(session.user_id)
      }
    }

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired token/session' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        avatar: user.avatar,
        status: user.status
      }
    })

  } catch (error) {
    console.error('Token validation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}