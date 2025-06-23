'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useAuth } from '@/lib/context/AuthContext'

export default function RegisterPage() {
  const router = useRouter()
  const { register, isLoading } = useAuth()
  
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: ''
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [acceptTerms, setAcceptTerms] = React.useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名'
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }

    if (!formData.password) {
      newErrors.password = '请输入密码'
    } else if (formData.password.length < 6) {
      newErrors.password = '密码长度至少6位'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = '请确认密码'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '密码确认不匹配'
    }

    if (!acceptTerms) {
      newErrors.terms = '请同意服务条款和隐私政策'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 清除之前的错误
    setErrors({})
    
    if (!validateForm()) {
      return
    }

    const result = await register(formData)
    
    if (result.success) {
      router.push('/dashboard')
    } else {
      setErrors({ submit: result.error || '注册失败' })
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
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
          <p className="mt-2 text-sm text-gray-600">创建您的数字员工管理账户</p>
        </div>

        {/* Register Card */}
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-chime-dark-500">
              立即注册
            </CardTitle>
            <CardDescription className="text-center">
              加入千机阁，开启数字化工作新体验
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 姓名 */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="请输入您的姓名"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={errors.name ? 'border-red-500' : ''}
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* 邮箱 */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  邮箱地址 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'border-red-500' : ''}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* 公司名称 */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">
                  公司名称 <span className="text-gray-400">(可选)</span>
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="请输入公司名称"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
              </div>

              {/* 手机号 */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  手机号码 <span className="text-gray-400">(可选)</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="请输入手机号码"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>

              {/* 密码 */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  密码 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="请输入密码（至少6位）"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={errors.password ? 'border-red-500' : ''}
                  required
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* 确认密码 */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  确认密码 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="请再次输入密码"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={errors.confirmPassword ? 'border-red-500' : ''}
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              {/* 服务条款 */}
              <div className="space-y-2">
                <div className="flex items-start">
                  <input
                    id="accept-terms"
                    name="accept-terms"
                    type="checkbox"
                    className="h-4 w-4 text-chime-gold-600 focus:ring-chime-gold-500 border-gray-300 rounded mt-1"
                    checked={acceptTerms}
                    onChange={(e) => {
                      setAcceptTerms(e.target.checked)
                      if (errors.terms) {
                        setErrors(prev => ({ ...prev, terms: '' }))
                      }
                    }}
                  />
                  <label htmlFor="accept-terms" className="ml-2 block text-sm text-gray-700">
                    我已阅读并同意{' '}
                    <Link
                      href="/terms"
                      className="text-chime-gold-600 hover:text-chime-gold-500 underline"
                    >
                      服务条款
                    </Link>
                    {' '}和{' '}
                    <Link
                      href="/privacy"
                      className="text-chime-gold-600 hover:text-chime-gold-500 underline"
                    >
                      隐私政策
                    </Link>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-red-500">{errors.terms}</p>
                )}
              </div>

              {/* 提交错误 */}
              {errors.submit && (
                <div className="text-sm text-red-500 text-center">{errors.submit}</div>
              )}

              <Button
                type="submit"
                className="w-full"
                variant="chime-gold"
                disabled={isLoading}
              >
                {isLoading ? '注册中...' : '立即注册'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">或者</span>
              </div>
            </div>

            {/* Social Register */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" type="button">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z"/>
                </svg>
                微信
              </Button>
            </div>

            {/* Login link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                已有账户？{' '}
                <Link
                  href="/login"
                  className="font-medium text-chime-gold-600 hover:text-chime-gold-500"
                >
                  立即登录
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">注册后即可享受</p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="text-xs">
              14天免费试用
            </Badge>
            <Badge variant="outline" className="text-xs">
              专业技术支持
            </Badge>
            <Badge variant="outline" className="text-xs">
              企业级安全
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}