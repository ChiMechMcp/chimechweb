'use client'

import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/context/AuthContext'

interface ProtectedRouteProps {
  children: ReactNode
  requireAuth?: boolean
  redirectTo?: string
  allowedRoles?: Array<'admin' | 'manager' | 'user'>
}

export function ProtectedRoute({ 
  children, 
  requireAuth = true, 
  redirectTo = '/login',
  allowedRoles 
}: ProtectedRouteProps) {
  const router = useRouter()
  const { user, isAuthenticated, isLoading } = useAuth()

  React.useEffect(() => {
    if (!isLoading) {
      // 如果需要认证但用户未登录
      if (requireAuth && !isAuthenticated) {
        router.push(redirectTo)
        return
      }

      // 如果指定了角色要求但用户角色不匹配
      if (requireAuth && isAuthenticated && allowedRoles && user) {
        if (!allowedRoles.includes(user.role)) {
          router.push('/dashboard') // 重定向到仪表板或无权限页面
          return
        }
      }
    }
  }, [isLoading, isAuthenticated, user, requireAuth, allowedRoles, router, redirectTo])

  // 显示加载状态
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-chime-gold-600"></div>
      </div>
    )
  }

  // 如果需要认证但用户未登录，显示空白（即将重定向）
  if (requireAuth && !isAuthenticated) {
    return null
  }

  // 如果指定了角色要求但用户角色不匹配，显示无权限信息
  if (requireAuth && isAuthenticated && allowedRoles && user && !allowedRoles.includes(user.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">无权限访问</h1>
          <p className="text-gray-600">您没有权限访问此页面</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  options?: Omit<ProtectedRouteProps, 'children'>
) {
  return function AuthenticatedComponent(props: P) {
    return (
      <ProtectedRoute {...options}>
        <Component {...props} />
      </ProtectedRoute>
    )
  }
}