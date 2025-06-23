import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { formatCurrency } from '@/lib/utils'

// 模拟数据 - 在实际应用中，这些数据会从API获取
const getEmployeeData = (id: string) => {
  const employees = {
    '1': {
      id: '1',
      name: 'AI客服助手',
      description: '24/7全天候客户服务，支持多语言对话，智能问题解答，为您的客户提供专业、高效的服务体验。',
      category: '客户服务',
      price: 199,
      currency: 'CNY' as const,
      rating: 4.8,
      downloads: 1250,
      provider: {
        name: '千机科技',
        verified: true,
      },
      tags: ['客服', '聊天机器人', '多语言', 'NLP', '情感分析'],
      features: [
        '智能问答系统',
        '多语言支持（中英日韩）',
        '情感分析和识别',
        '工单自动创建和管理',
        '知识库智能匹配',
        '客户满意度统计',
        '实时对话监控',
        '自定义问答模板'
      ],
      screenshots: [
        '/screenshots/ai-customer-1.png',
        '/screenshots/ai-customer-2.png',
        '/screenshots/ai-customer-3.png',
      ],
      version: '2.1.0',
      compatibility: ['Web', 'Mobile', 'API'],
      detailedDescription: `
        AI客服助手是一款专业的智能客户服务解决方案，采用先进的自然语言处理技术和深度学习算法，
        能够理解客户的真实意图，提供准确、友好的回复。

        ## 核心优势

        ### 🤖 智能理解
        - 支持自然语言理解，准确识别客户意图
        - 上下文记忆，维持连贯的对话体验
        - 多轮对话支持，处理复杂查询

        ### 🌍 多语言支持
        - 支持中文、英语、日语、韩语等主流语言
        - 自动语言检测和切换
        - 本地化的回复风格

        ### 📊 数据分析
        - 实时客户满意度监控
        - 常见问题统计和分析
        - 客服效率报告生成

        ### ⚙️ 易于集成
        - 提供RESTful API接口
        - 支持Webhook回调
        - 丰富的SDK和插件
      `,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-06-20'),
    }
  }
  
  return employees[id as keyof typeof employees]
}

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return [
    { id: '1' }
  ]
}

export default function EmployeeDetailPage({ params }: PageProps) {
  const employee = getEmployeeData(params.id)

  if (!employee) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">数字员工未找到</h1>
            <p className="mt-4 text-gray-600">您查找的数字员工不存在或已被移除。</p>
            <Button className="mt-6" asChild>
              <a href="/marketplace">返回市场</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <a href="/marketplace" className="hover:text-gray-700">市场</a>
            <span className="mx-2">/</span>
            <a href={`/marketplace?category=${employee.category}`} className="hover:text-gray-700">
              {employee.category}
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{employee.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`/avatars/${employee.id}.svg`} alt={employee.name} />
                  <AvatarFallback>{employee.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-chime-dark-500">{employee.name}</h1>
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">{employee.provider.name}</span>
                      {employee.provider.verified && (
                        <svg className="h-5 w-5 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <Badge variant="outline">{employee.category}</Badge>
                  </div>
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(employee.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-gray-600">{employee.rating}</span>
                    </div>
                    <span className="text-gray-500">{employee.downloads.toLocaleString()} 下载</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {employee.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-chime-dark-500">产品描述</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">{employee.description}</p>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-chime-dark-500">主要功能</h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {employee.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <svg className="h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-chime-dark-500">产品截图</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {employee.screenshots.map((screenshot, index) => (
                    <div key={index} className="aspect-video rounded-lg bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">截图 {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-chime-gold-600">
                      {formatCurrency(employee.price, employee.currency)}
                      <span className="text-base font-normal text-gray-500">/月</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full" variant="chime-gold" size="lg">
                      立即购买
                    </Button>
                    <Button className="w-full" variant="outline">
                      免费试用
                    </Button>
                    <Button className="w-full" variant="ghost">
                      加入购物车
                    </Button>
                  </div>

                  <div className="mt-6 space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">版本</span>
                      <span className="font-medium">{employee.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">更新时间</span>
                      <span className="font-medium">
                        {employee.updatedAt.toLocaleDateString('zh-CN')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">兼容性</span>
                      <div className="text-right">
                        {employee.compatibility.map((platform, index) => (
                          <div key={platform} className="font-medium">
                            {platform}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold text-gray-900">服务保障</h3>
                    <ul className="mt-2 space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        7天无理由退款
                      </li>
                      <li className="flex items-center">
                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        24小时技术支持
                      </li>
                      <li className="flex items-center">
                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        免费更新升级
                      </li>
                    </ul>
                  </div>
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