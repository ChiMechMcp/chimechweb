import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'

export default function DocsPage() {
  const docSections = [
    {
      title: '快速开始',
      description: '了解如何快速开始使用千机阁',
      articles: [
        { title: '平台介绍', description: '了解千机阁的核心功能和优势' },
        { title: '创建第一个数字员工', description: '5分钟快速创建您的第一个AI助手' },
        { title: '基础配置', description: '配置您的工作环境和基本设置' },
      ]
    },
    {
      title: '数字员工管理',
      description: '深入了解数字员工的创建和管理',
      articles: [
        { title: '员工类型介绍', description: '了解不同类型数字员工的特点' },
        { title: '能力配置', description: '如何配置和优化数字员工的能力' },
        { title: '工作流设置', description: '设置复杂的工作流程和任务链' },
        { title: '性能监控', description: '监控和分析数字员工的工作表现' },
      ]
    },
    {
      title: 'API 文档',
      description: '完整的 API 参考文档',
      articles: [
        { title: 'API 概览', description: 'RESTful API 的基本介绍' },
        { title: '身份验证', description: 'API 密钥和身份验证方式' },
        { title: '员工管理 API', description: '创建、查询、更新数字员工' },
        { title: '任务管理 API', description: '任务的创建、分配和跟踪' },
        { title: 'Webhook', description: '实时事件通知和回调' },
      ]
    },
    {
      title: '集成指南',
      description: '与第三方系统的集成方法',
      articles: [
        { title: 'Slack 集成', description: '在 Slack 中使用数字员工' },
        { title: '企业微信集成', description: '与企业微信的深度集成' },
        { title: 'CRM 系统集成', description: '与 Salesforce、HubSpot 等 CRM 集成' },
        { title: '自定义集成', description: '使用 API 创建自定义集成' },
      ]
    },
    {
      title: '最佳实践',
      description: '使用千机阁的最佳实践和建议',
      articles: [
        { title: '团队协作', description: '如何在团队中有效使用数字员工' },
        { title: '安全指南', description: '保护您的数据和系统安全' },
        { title: '性能优化', description: '优化数字员工的工作效率' },
        { title: '故障排除', description: '常见问题的解决方案' },
      ]
    },
    {
      title: '案例研究',
      description: '真实的客户成功案例',
      articles: [
        { title: '电商客服自动化', description: '某电商平台的客服自动化实践' },
        { title: '金融数据分析', description: '金融机构的数据分析应用案例' },
        { title: '内容营销优化', description: '营销团队的内容创作自动化' },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-chime-dark-500 sm:text-5xl">
              帮助文档
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              学习如何使用千机阁来提升您的团队效率，从基础使用到高级集成
            </p>
            
            {/* Search */}
            <div className="mt-8 max-w-lg mx-auto">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <Input
                  type="text"
                  placeholder="搜索文档..."
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-chime-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">快速开始</h3>
                <p className="text-sm text-gray-600">5分钟快速上手</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-chime-bronze-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="font-semibold mb-2">API 文档</h3>
                <p className="text-sm text-gray-600">完整的 API 参考</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-chime-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="font-semibold mb-2">集成指南</h3>
                <p className="text-sm text-gray-600">第三方系统集成</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-chime-bronze-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-semibold mb-2">获取帮助</h3>
                <p className="text-sm text-gray-600">联系技术支持</p>
              </CardContent>
            </Card>
          </div>

          {/* Documentation Sections */}
          <div className="grid gap-8 lg:grid-cols-2">
            {docSections.map((section) => (
              <Card key={section.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-chime-dark-500">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.articles.map((article) => (
                      <div 
                        key={article.title} 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="w-2 h-2 bg-chime-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm hover:text-chime-gold-600 transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">{article.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-chime-dark-500 mb-8">热门文章</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: '如何创建智能客服助手',
                  description: '详细指南：从零开始创建一个功能完整的AI客服',
                  badge: '入门',
                  readTime: '5分钟',
                },
                {
                  title: 'API 密钥安全最佳实践',
                  description: '保护您的API密钥和系统安全的重要建议',
                  badge: '安全',
                  readTime: '3分钟',
                },
                {
                  title: '数字员工性能调优指南',
                  description: '优化数字员工工作效率的高级技巧',
                  badge: '进阶',
                  readTime: '8分钟',
                },
              ].map((article) => (
                <Card key={article.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">{article.badge}</Badge>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="font-semibold mb-2 hover:text-chime-gold-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600">{article.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}