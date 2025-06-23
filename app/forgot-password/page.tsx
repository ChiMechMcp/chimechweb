'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { useAuth } from '@/lib/context/AuthContext'

export default function ForgotPasswordPage() {
  const { sendResetEmail, isLoading } = useAuth()
  
  const [email, setEmail] = React.useState('')
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    
    if (!email) {
      setErrors({ email: '请输入邮箱地址' })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ email: '请输入有效的邮箱地址' })
      return
    }

    const result = await sendResetEmail(email)
    
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setErrors({ submit: result.error || '发送失败，请稍后重试' })
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-chime-gold-50 to-white flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Logo */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-chime-gold-500 to-chime-bronze-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">千</span>
              </div>
              <span className="text-2xl font-bold text-chime-dark-500">chimech-mcp</span>
            </Link>
          </div>

          {/* Success Card */}
          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <CardTitle className="text-2xl text-chime-dark-500">
                邮件已发送
              </CardTitle>
              <CardDescription>
                密码重置邮件已发送到您的邮箱
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-sm text-gray-600">
                请检查您的邮箱 <span className="font-medium">{email}</span>，
                点击邮件中的链接重置密码。
              </p>
              <p className="text-xs text-gray-500">
                如果您没有收到邮件，请检查垃圾邮件文件夹。
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full" variant="chime-gold">
                  <Link href="/login">返回登录</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setIsSubmitted(false)}
                >
                  重新发送邮件
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-chime-gold-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-chime-gold-500 to-chime-bronze-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">千</span>
            </div>
            <span className="text-2xl font-bold text-chime-dark-500">chimech-mcp</span>
          </Link>
          <p className="mt-2 text-sm text-gray-600">重置您的账户密码</p>
        </div>

        {/* Reset Password Card */}
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-chime-dark-500">
              忘记密码
            </CardTitle>
            <CardDescription className="text-center">
              输入您的邮箱地址，我们将发送重置链接
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  邮箱地址
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) {
                      setErrors(prev => ({ ...prev, email: '' }))
                    }
                  }}
                  className={errors.email ? 'border-red-500' : ''}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {errors.submit && (
                <div className="text-sm text-red-500 text-center">{errors.submit}</div>
              )}

              <Button
                type="submit"
                className="w-full"
                variant="chime-gold"
                disabled={isLoading}
              >
                {isLoading ? '发送中...' : '发送重置邮件'}
              </Button>
            </form>

            <div className="text-center">
              <Link
                href="/login"
                className="text-sm text-chime-gold-600 hover:text-chime-gold-500"
              >
                返回登录
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Help */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            需要帮助？{' '}
            <Link
              href="/support"
              className="text-chime-gold-600 hover:text-chime-gold-500"
            >
              联系客服
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}