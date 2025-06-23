import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-chime-dark-500">
              服务条款
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              最后更新时间：2024年6月20日
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              欢迎使用千机阁（chimech-mcp）服务。通过访问或使用我们的服务，您同意遵守以下服务条款。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">1. 服务描述</h2>
            <p className="text-gray-600 leading-relaxed">
              千机阁是一个数字员工管理平台，为企业提供AI驱动的自动化解决方案。我们的服务包括但不限于：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>数字员工创建和管理</li>
              <li>任务自动化和工作流</li>
              <li>数据分析和报告</li>
              <li>API接口服务</li>
              <li>技术支持和培训</li>
            </ul>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">2. 账户注册</h2>
            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">2.1 账户要求</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>您必须年满18岁或在您所在司法管辖区的法定年龄</li>
              <li>提供准确、完整的注册信息</li>
              <li>保护账户安全，不得与他人共享登录凭据</li>
              <li>及时更新账户信息</li>
            </ul>

            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">2.2 账户责任</h3>
            <p className="text-gray-600 leading-relaxed">
              您对在您账户下进行的所有活动承担责任。如发现未经授权使用，请立即通知我们。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">3. 使用规则</h2>
            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">3.1 允许的使用</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>按照我们的文档和指引使用服务</li>
              <li>用于合法的商业目的</li>
              <li>遵守所有适用的法律法规</li>
            </ul>

            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">3.2 禁止的使用</h3>
            <p className="text-gray-600 leading-relaxed">您不得：</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>违反任何法律法规</li>
              <li>传播恶意软件或进行网络攻击</li>
              <li>侵犯他人知识产权</li>
              <li>逆向工程、破解或篡改我们的服务</li>
              <li>超出订阅限制恶意使用服务</li>
              <li>干扰服务的正常运行</li>
            </ul>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">4. 订阅和付费</h2>
            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">4.1 订阅计划</h3>
            <p className="text-gray-600 leading-relaxed">
              我们提供多种订阅计划，包括免费版、专业版和企业版。具体功能和限制请参见定价页面。
            </p>

            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">4.2 付费和账单</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>订阅费用按月或按年收取</li>
              <li>付费计划自动续费，除非您取消订阅</li>
              <li>价格变更将提前30天通知</li>
              <li>退款政策详见退款条款</li>
            </ul>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">5. 知识产权</h2>
            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">5.1 我们的权利</h3>
            <p className="text-gray-600 leading-relaxed">
              千机阁服务、软件、技术和相关知识产权归我们所有。您获得的是使用权，而非所有权。
            </p>

            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">5.2 您的内容</h3>
            <p className="text-gray-600 leading-relaxed">
              您保留对上传到我们服务的内容的所有权。您授予我们使用该内容提供服务的必要权利。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">6. 数据和隐私</h2>
            <p className="text-gray-600 leading-relaxed">
              我们承诺保护您的数据安全和隐私。详细信息请参见我们的隐私政策。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">7. 服务可用性</h2>
            <p className="text-gray-600 leading-relaxed">
              我们努力保证服务的可用性，但不能保证100%无故障运行。我们将在维护前合理通知用户。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">8. 免责声明</h2>
            <p className="text-gray-600 leading-relaxed">
              我们的服务按"现状"提供，不提供任何明示或暗示的保证。我们不对因使用服务造成的损失承担责任。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">9. 责任限制</h2>
            <p className="text-gray-600 leading-relaxed">
              在法律允许的最大范围内，我们的责任限制为您在过去12个月内支付的费用总额。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">10. 服务终止</h2>
            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">10.1 您的终止权</h3>
            <p className="text-gray-600 leading-relaxed">
              您可以随时取消订阅或删除账户。取消后您将失去对服务的访问权限。
            </p>

            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">10.2 我们的终止权</h3>
            <p className="text-gray-600 leading-relaxed">
              如果您违反服务条款，我们有权暂停或终止您的账户。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">11. 争议解决</h2>
            <p className="text-gray-600 leading-relaxed">
              任何争议将通过友好协商解决。如协商不成，将提交至北京市朝阳区人民法院管辖。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">12. 条款变更</h2>
            <p className="text-gray-600 leading-relaxed">
              我们可能会更新这些服务条款。重大变更将提前通知您。继续使用服务即表示接受新条款。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">13. 联系信息</h2>
            <p className="text-gray-600 leading-relaxed">
              如对服务条款有疑问，请联系我们：
            </p>
            <ul className="list-none text-gray-600 space-y-1">
              <li>邮箱：legal@chimech.com</li>
              <li>电话：400-123-4567</li>
              <li>地址：北京市朝阳区千机科技大厦</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}