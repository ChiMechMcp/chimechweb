import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-chime-dark-500 sm:text-5xl">
              帮助与支持
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              我们随时准备为您提供帮助。无论您遇到什么问题，我们都会尽快为您解决
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-chime-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-chime-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">在线客服</h3>
                <p className="text-sm text-gray-600 mb-4">24/7 在线支持</p>
                <Button variant="chime-gold" size="sm">开始对话</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-chime-bronze-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-chime-bronze-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">邮件支持</h3>
                <p className="text-sm text-gray-600 mb-4">support@chimech.com</p>
                <Button variant="outline" size="sm">发送邮件</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-chime-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-chime-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">电话支持</h3>
                <p className="text-sm text-gray-600 mb-4">400-123-4567</p>
                <Button variant="outline" size="sm">立即拨打</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-chime-bronze-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-chime-bronze-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">社区论坛</h3>
                <p className="text-sm text-gray-600 mb-4">与其他用户交流</p>
                <Button variant="outline" size="sm">访问论坛</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>提交工单</CardTitle>
                  <CardDescription>
                    详细描述您遇到的问题，我们会尽快回复您
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">姓名 *</label>
                      <Input placeholder="请输入您的姓名" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">邮箱地址 *</label>
                      <Input type="email" placeholder="your@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">问题类型 *</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="">请选择问题类型</option>
                      <option value="technical">技术问题</option>
                      <option value="billing">账单问题</option>
                      <option value="feature">功能需求</option>
                      <option value="bug">错误报告</option>
                      <option value="other">其他问题</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">优先级</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="low">低优先级</option>
                      <option value="medium">中优先级</option>
                      <option value="high">高优先级</option>
                      <option value="urgent">紧急</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">问题标题 *</label>
                    <Input placeholder="简要描述您的问题" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">详细描述 *</label>
                    <textarea
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="请详细描述您遇到的问题，包括错误信息、操作步骤等"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">附件</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600">
                        点击上传或拖拽文件到此处
                      </p>
                      <p className="text-xs text-gray-500">
                        支持 PNG, JPG, PDF 文件，最大 10MB
                      </p>
                    </div>
                  </div>

                  <Button variant="chime-gold" className="w-full">
                    提交工单
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ and Resources */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>常见问题</CardTitle>
                  <CardDescription>
                    快速找到常见问题的解答
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      '如何重置密码？',
                      '如何创建新的数字员工？',
                      'API 调用次数限制是多少？',
                      '如何升级订阅计划？',
                      '数据安全保障措施有哪些？',
                    ].map((question) => (
                      <div key={question} className="pb-2 border-b border-gray-100 last:border-0">
                        <button className="text-left text-sm hover:text-chime-gold-600 transition-colors">
                          {question}
                        </button>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    查看全部 FAQ
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>状态页面</CardTitle>
                  <CardDescription>
                    查看系统运行状态
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">API 服务</span>
                      <Badge variant="chime-gold">正常</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">数据库</span>
                      <Badge variant="chime-gold">正常</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Web 界面</span>
                      <Badge variant="chime-gold">正常</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">邮件服务</span>
                      <Badge variant="chime-gold">正常</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    查看详细状态
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>企业支持</CardTitle>
                  <CardDescription>
                    专业的企业级支持服务
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">专属客户经理</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">1小时响应时间</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">定制培训服务</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">电话技术支持</span>
                    </div>
                  </div>
                  <Button variant="chime-gold" className="w-full mt-4">
                    联系销售
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}