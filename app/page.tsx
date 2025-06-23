import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chime-gold-50 to-white">
      <Header />
      <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-r from-chime-gold-500 to-chime-bronze-500 flex items-center justify-center shadow-lg animate-pulse-glow">
              <span className="text-white font-bold text-2xl">千</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-chime-dark-500 sm:text-6xl">
            千机阁
            <Badge variant="chime-gold" className="ml-4 text-xs">
              Beta
            </Badge>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            重新定义企业数字员工的未来
          </p>
          <p className="mt-4 text-sm text-gray-500">
chimech-mcp Web Portal - 数字员工管理与协作平台
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="chime-gold" size="lg" asChild>
              <Link href="/dashboard">开始使用</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">了解更多 →</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500 sm:text-4xl">
              核心功能
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              为您的企业打造智能数字员工生态系统
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow border-chime-bronze-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chime-gold-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-chime-gold-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <CardTitle className="text-chime-dark-500">数字员工管理</CardTitle>
                <CardDescription>
                  创建、配置和管理您的数字员工团队，实现智能化工作流程
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-chime-bronze-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chime-bronze-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-chime-bronze-600"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </div>
                <CardTitle className="text-chime-dark-500">AI 市场</CardTitle>
                <CardDescription>
                  浏览和购买预训练的AI模型和工具，快速扩展您的数字员工能力
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-chime-bronze-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chime-gold-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-chime-gold-600"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                  </svg>
                </div>
                <CardTitle className="text-chime-dark-500">数据分析</CardTitle>
                <CardDescription>
                  实时监控数字员工的表现，获取深入的业务洞察和优化建议
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500 sm:text-4xl">
              数字化成果，值得信赖
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              已为数百家企业提供数字员工解决方案
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-chime-gold-600">500+</div>
              <div className="mt-2 text-sm text-gray-600">企业客户</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chime-bronze-600">10,000+</div>
              <div className="mt-2 text-sm text-gray-600">数字员工</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chime-gold-600">99.9%</div>
              <div className="mt-2 text-sm text-gray-600">服务可用性</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chime-bronze-600">24/7</div>
              <div className="mt-2 text-sm text-gray-600">技术支持</div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500 sm:text-4xl">
              应用场景
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              在各行各业中发挥数字员工的强大能力
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-chime-dark-500">电商零售</h3>
                  <p className="mt-2 text-gray-600">智能客服、订单处理、库存管理，全天候为客户提供优质服务</p>
                  <ul className="mt-4 space-y-1 text-sm text-gray-500">
                    <li>• 客户咨询自动回复，提升响应速度</li>
                    <li>• 订单状态实时更新，减少人工成本</li>
                    <li>• 商品推荐个性化，提高转化率</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-chime-dark-500">金融保险</h3>
                  <p className="mt-2 text-gray-600">风险评估、合规检查、客户服务，确保业务安全高效运行</p>
                  <ul className="mt-4 space-y-1 text-sm text-gray-500">
                    <li>• 实时风险监控，降低投资风险</li>
                    <li>• 自动化合规审查，确保监管达标</li>
                    <li>• 智能理财顾问，提升客户体验</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-chime-dark-500">科技研发</h3>
                  <p className="mt-2 text-gray-600">代码审查、技术文档、测试自动化，加速产品开发周期</p>
                  <ul className="mt-4 space-y-1 text-sm text-gray-500">
                    <li>• 自动化代码审查，提升代码质量</li>
                    <li>• 智能文档生成，减少文档维护成本</li>
                    <li>• 持续集成测试，确保产品稳定性</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-chime-dark-500">市场营销</h3>
                  <p className="mt-2 text-gray-600">内容创作、社媒管理、数据分析，精准触达目标客户</p>
                  <ul className="mt-4 space-y-1 text-sm text-gray-500">
                    <li>• 个性化内容生成，提升用户参与度</li>
                    <li>• 社交媒体自动发布，扩大品牌影响力</li>
                    <li>• 营销效果实时分析，优化投放策略</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500 sm:text-4xl">
              为什么选择千机阁？
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              专业、可靠、易用的数字员工解决方案
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-chime-gold-100 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-chime-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-chime-dark-500">快速部署</h3>
              <p className="mt-2 text-gray-600">5分钟即可创建您的第一个数字员工，无需复杂配置</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-chime-bronze-100 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-chime-bronze-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-chime-dark-500">安全可靠</h3>
              <p className="mt-2 text-gray-600">企业级安全保障，数据加密传输，符合国际安全标准</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-chime-gold-100 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-chime-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-chime-dark-500">智能学习</h3>
              <p className="mt-2 text-gray-600">基于机器学习的智能优化，数字员工越用越聪明</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500 sm:text-4xl">
              客户见证
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              听听我们的客户怎么说
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "使用千机阁后，我们的客服效率提升了300%，客户满意度也显著提高。"
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-semibold text-chime-dark-500">张经理</p>
                  <p className="text-sm text-gray-500">某电商平台 - 客服总监</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "数字员工帮我们自动化了大量重复工作，让团队能专注于更有价值的创新。"
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-semibold text-chime-dark-500">李总</p>
                  <p className="text-sm text-gray-500">科技公司 - CTO</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "千机阁的智能分析功能给了我们前所未有的业务洞察，决策更加精准。"
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-semibold text-chime-dark-500">王总监</p>
                  <p className="text-sm text-gray-500">金融机构 - 数据总监</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-chime-gold-500 to-chime-bronze-500 px-6 py-16 shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              准备开始您的数字化转型？
            </h2>
            <p className="mt-6 text-lg leading-8 text-chime-gold-100">
              加入千机阁，构建您的专属数字员工团队
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button variant="secondary" size="lg" className="bg-white text-chime-gold-600 hover:bg-gray-50" asChild>
                <Link href="/dashboard">免费试用</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/support">预约演示</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-chime-gold-200">
              14天免费试用 · 无需信用卡 · 随时取消
            </p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}