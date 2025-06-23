'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '@/lib/types'

interface LoginCredentials {
  email: string
  password: string
}

interface RegisterCredentials {
  name: string
  email: string
  password: string
  confirmPassword: string
  company?: string
  phone?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  
  // Auth actions
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>
  register: (credentials: RegisterCredentials) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateProfile: (data: Partial<User>) => Promise<{ success: boolean; error?: string }>
  
  // SMS verification
  sendSmsCode: (phone: string) => Promise<{ success: boolean; error?: string }>
  verifySmsCode: (phone: string, code: string) => Promise<{ success: boolean; error?: string }>
  
  // Password reset
  sendResetEmail: (email: string) => Promise<{ success: boolean; error?: string }>
  resetPassword: (token: string, newPassword: string) => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 检查本地存储的认证状态
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        console.log('Checking auth status...')
        const token = localStorage.getItem('auth_token')
        const savedUser = localStorage.getItem('user_data')
        
        console.log('Token exists:', !!token)
        console.log('User data exists:', !!savedUser)
        
        if (token && savedUser) {
          // 验证token是否仍然有效
          console.log('Validating token...')
          const isValid = await validateToken(token)
          console.log('Token is valid:', isValid)
          if (isValid) {
            setUser(JSON.parse(savedUser))
          } else {
            // Token无效，清除本地数据
            localStorage.removeItem('auth_token')
            localStorage.removeItem('user_data')
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        console.log('Setting isLoading to false')
        setIsLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const validateToken = async (token: string): Promise<boolean> => {
    try {
      // 这里应该调用实际的API来验证token
      // 目前使用模拟验证
      const response = await fetch('/api/auth/validate/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      return response.ok
    } catch {
      return false
    }
  }

  const login = async (credentials: LoginCredentials): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        const apiUser = data.user
        const mappedUser: User = {
          id: apiUser.id.toString(),
          name: `${apiUser.first_name || ''} ${apiUser.last_name || ''}`.trim() || apiUser.username,
          email: apiUser.email,
          avatar: apiUser.avatar || `/avatars/${apiUser.role}.svg`,
          role: apiUser.role,
          company: '千机阁科技',
          department: apiUser.role === 'admin' ? '技术部' : '用户部',
          preferences: {
            theme: 'system',
            notifications: true,
            language: 'zh'
          },
          subscription: {
            plan: apiUser.role === 'admin' ? 'enterprise' : 'free',
            features: apiUser.role === 'admin' 
              ? ['unlimited_employees', 'advanced_analytics', 'priority_support']
              : ['basic_employees', 'basic_analytics']
          },
          createdAt: new Date(apiUser.created_at),
          updatedAt: new Date(apiUser.updated_at)
        }
        
        setUser(mappedUser)
        localStorage.setItem('auth_token', data.token)
        localStorage.setItem('user_data', JSON.stringify(mappedUser))
        
        return { success: true }
      } else {
        return { success: false, error: data.error || '登录失败' }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: '登录失败，请稍后重试' }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (credentials: RegisterCredentials): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    try {
      // 验证
      if (credentials.password !== credentials.confirmPassword) {
        return { success: false, error: '密码确认不匹配' }
      }
      
      if (credentials.password.length < 6) {
        return { success: false, error: '密码长度至少6位' }
      }

      // Generate username from name if not provided
      const nameParts = credentials.name.split(' ')
      const username = nameParts.join('').toLowerCase() + Math.floor(Math.random() * 1000)

      const response = await fetch('/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email: credentials.email,
          password: credentials.password,
          firstName: nameParts[0],
          lastName: nameParts.slice(1).join(' ') || undefined,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        const apiUser = data.user
        const mappedUser: User = {
          id: apiUser.id.toString(),
          name: `${apiUser.first_name || ''} ${apiUser.last_name || ''}`.trim() || apiUser.username,
          email: apiUser.email,
          avatar: apiUser.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${apiUser.username}`,
          role: apiUser.role,
          company: credentials.company,
          preferences: {
            theme: 'system',
            notifications: true,
            language: 'zh'
          },
          subscription: {
            plan: 'free',
            features: ['basic_employees', 'basic_analytics']
          },
          createdAt: new Date(apiUser.created_at),
          updatedAt: new Date(apiUser.updated_at)
        }
        
        setUser(mappedUser)
        localStorage.setItem('auth_token', data.token)
        localStorage.setItem('user_data', JSON.stringify(mappedUser))
        
        return { success: true }
      } else {
        return { success: false, error: data.error || '注册失败' }
      }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, error: '注册失败，请稍后重试' }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      // Call logout API to clear server-side session
      await fetch('/api/auth/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      console.error('Logout API call failed:', error)
    } finally {
      // Always clear client-side data
      setUser(null)
      localStorage.removeItem('auth_token')
      localStorage.removeItem('user_data')
    }
  }

  const updateProfile = async (data: Partial<User>): Promise<{ success: boolean; error?: string }> => {
    if (!user) return { success: false, error: '用户未登录' }
    
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const updatedUser = {
        ...user,
        ...data,
        updatedAt: new Date()
      }
      
      setUser(updatedUser)
      localStorage.setItem('user_data', JSON.stringify(updatedUser))
      
      return { success: true }
    } catch (error) {
      return { success: false, error: '更新失败，请稍后重试' }
    }
  }

  const sendSmsCode = async (phone: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // 模拟发送短信验证码
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 在实际应用中，这里会调用短信服务API
      console.log(`发送验证码到 ${phone}: 123456`)
      
      return { success: true }
    } catch (error) {
      return { success: false, error: '发送验证码失败' }
    }
  }

  const verifySmsCode = async (phone: string, code: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // 模拟验证短信验证码
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // 简单验证逻辑
      if (code === '123456') {
        return { success: true }
      } else {
        return { success: false, error: '验证码错误' }
      }
    } catch (error) {
      return { success: false, error: '验证失败' }
    }
  }

  const sendResetEmail = async (email: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // 模拟发送重置邮件
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log(`发送密码重置邮件到 ${email}`)
      
      return { success: true }
    } catch (error) {
      return { success: false, error: '发送重置邮件失败' }
    }
  }

  const resetPassword = async (token: string, newPassword: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // 模拟重置密码
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (newPassword.length < 6) {
        return { success: false, error: '密码长度至少6位' }
      }
      
      return { success: true }
    } catch (error) {
      return { success: false, error: '重置密码失败' }
    }
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
    sendSmsCode,
    verifySmsCode,
    sendResetEmail,
    resetPassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}