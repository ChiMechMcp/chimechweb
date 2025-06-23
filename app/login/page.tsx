'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useAuth } from '@/lib/context/AuthContext'

export default function LoginPage() {
  const router = useRouter()
  const { login, sendSmsCode, verifySmsCode, isLoading } = useAuth()
  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [smsCode, setSmsCode] = React.useState('')
  const [loginMethod, setLoginMethod] = React.useState<'email' | 'phone'>('email')
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [smsCodeSent, setSmsCodeSent] = React.useState(false)
  const [smsCountdown, setSmsCountdown] = React.useState(0)

  // SMS倒计时
  React.useEffect(() => {
    if (smsCountdown > 0) {
      const timer = setTimeout(() => setSmsCountdown(smsCountdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [smsCountdown])

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    
    if (!email || !password) {
      setErrors({ submit: '请填写邮箱和密码' })
      return
    }

    const result = await login({ email, password })
    
    if (result.success) {
      router.push('/dashboard')
    } else {
      setErrors({ submit: result.error || '登录失败' })
    }
  }

  const handleSendSms = async () => {
    if (!phone) {
      setErrors({ phone: '请输入手机号' })
      return
    }

    const result = await sendSmsCode(phone)
    
    if (result.success) {
      setSmsCodeSent(true)
      setSmsCountdown(60)
      setErrors({})
    } else {
      setErrors({ phone: result.error || '发送验证码失败' })
    }
  }

  const handlePhoneLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    
    if (!phone || !smsCode) {
      setErrors({ submit: '请填写手机号和验证码' })
      return
    }

    const verifyResult = await verifySmsCode(phone, smsCode)
    
    if (verifyResult.success) {
      // 手机验证成功后自动登录（这里简化处理）
      router.push('/dashboard')
    } else {
      setErrors({ submit: verifyResult.error || '验证失败' })
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
          <p className="mt-2 text-sm text-gray-600">登录到您的数字员工管理平台</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-chime-dark-500">
              欢迎回来
            </CardTitle>
            <CardDescription className="text-center">
              使用您的账户登录千机阁
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Login Method Toggle */}
            <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  loginMethod === 'email'
                    ? 'bg-white text-chime-gold-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                邮箱登录
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  loginMethod === 'phone'
                    ? 'bg-white text-chime-gold-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                手机登录
              </button>
            </div>

            <form onSubmit={loginMethod === 'email' ? handleEmailLogin : handlePhoneLogin} className="space-y-4">
              {loginMethod === 'email' ? (
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    邮箱地址
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? 'border-red-500' : ''}
                    required
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    手机号码
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="请输入手机号"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={errors.phone ? 'border-red-500' : ''}
                    required
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
              )}

              {loginMethod === 'email' ? (
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    密码
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={errors.password ? 'border-red-500' : ''}
                    required
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <label htmlFor="sms-code" className="text-sm font-medium text-gray-700">
                    验证码
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      id="sms-code"
                      type="text"
                      placeholder="请输入验证码"
                      className="flex-1"
                      value={smsCode}
                      onChange={(e) => setSmsCode(e.target.value)}
                      required
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={handleSendSms}
                      disabled={smsCountdown > 0 || isLoading}
                    >
                      {smsCountdown > 0 ? `${smsCountdown}s` : smsCodeSent ? '重新发送' : '获取验证码'}
                    </Button>
                  </div>
                  {smsCodeSent && (
                    <p className="text-sm text-green-600">验证码已发送到您的手机</p>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-chime-gold-600 focus:ring-chime-gold-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    记住我
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-chime-gold-600 hover:text-chime-gold-500"
                >
                  忘记密码？
                </Link>
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
                {isLoading ? '登录中...' : '登录'}
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

            {/* Social Login */}
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

            {/* Sign up link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                还没有账户？{' '}
                <Link
                  href="/register"
                  className="font-medium text-chime-gold-600 hover:text-chime-gold-500"
                >
                  立即注册
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">登录后即可享受</p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="text-xs">
              免费试用
            </Badge>
            <Badge variant="outline" className="text-xs">
              24/7支持
            </Badge>
            <Badge variant="outline" className="text-xs">
              安全保障
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}