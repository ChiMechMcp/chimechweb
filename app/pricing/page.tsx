import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-chime-dark-500 sm:text-6xl">
              选择适合您的方案
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              从免费试用到企业级解决方案，满足不同规模团队的需求
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Free Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-chime-dark-500">免费版</CardTitle>
                <CardDescription>
                  适合个人用户和小团队试用
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">¥0</span>
                  <span className="text-muted-foreground">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    1个数字员工
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    基础功能
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    社区支持
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    每月100次任务
                  </li>
                </ul>
                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href="/dashboard">开始免费试用</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-chime-gold-200 shadow-lg">
              <Badge variant="chime-gold" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                推荐
              </Badge>
              <CardHeader>
                <CardTitle className="text-chime-dark-500">专业版</CardTitle>
                <CardDescription>
                  适合中小企业和专业团队
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">¥299</span>
                  <span className="text-muted-foreground">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    最多10个数字员工
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    高级功能和分析
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    优先技术支持
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    每月10,000次任务
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    API访问
                  </li>
                </ul>
                <Button className="mt-6 w-full" variant="chime-gold" asChild>
                  <Link href="/dashboard">选择专业版</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-chime-dark-500">企业版</CardTitle>
                <CardDescription>
                  适合大型企业和定制需求
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">¥999</span>
                  <span className="text-muted-foreground">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    无限数字员工
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    定制功能开发
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    专属客户经理
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    无限任务量
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    私有部署选项
                  </li>
                </ul>
                <Button className="mt-6 w-full" variant="chime-bronze" asChild>
                  <Link href="/contact">联系销售</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-32">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500 sm:text-4xl">
                常见问题
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                关于千机阁定价的常见问题解答
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-chime-dark-500">可以随时升级或降级吗？</h3>
                <p className="mt-2 text-gray-600">
                  是的，您可以随时在账户设置中升级或降级您的订阅计划。更改将在下一个计费周期生效。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-chime-dark-500">是否提供免费试用？</h3>
                <p className="mt-2 text-gray-600">
                  我们为所有新用户提供14天的免费试用，您可以体验专业版的全部功能，无需信用卡。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-chime-dark-500">支持哪些付款方式？</h3>
                <p className="mt-2 text-gray-600">
                  我们支持信用卡、借记卡、支付宝、微信支付等多种付款方式，确保您的付款安全便捷。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-chime-dark-500">企业版包含哪些定制服务？</h3>
                <p className="mt-2 text-gray-600">
                  企业版包含定制功能开发、私有部署、专属培训、SLA保障等高级服务，满足企业级需求。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}