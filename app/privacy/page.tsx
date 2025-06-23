import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-chime-dark-500">
              隐私政策
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              最后更新时间：2024年6月20日
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              千机阁（chimech-mcp）非常重视您的隐私保护。本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">1. 信息收集</h2>
            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">1.1 个人信息</h3>
            <p className="text-gray-600 leading-relaxed">
              我们可能收集以下个人信息：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>姓名、邮箱地址、电话号码</li>
              <li>公司信息和职位</li>
              <li>账户登录凭据</li>
              <li>支付信息（由第三方支付处理商处理）</li>
            </ul>

            <h3 className="text-xl font-semibold text-chime-dark-500 mt-6 mb-3">1.2 技术信息</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>IP地址、浏览器类型和版本</li>
              <li>设备信息和操作系统</li>
              <li>访问时间和页面浏览记录</li>
              <li>Cookie和类似技术数据</li>
            </ul>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">2. 信息使用</h2>
            <p className="text-gray-600 leading-relaxed">
              我们将收集的信息用于以下目的：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>提供和改进我们的服务</li>
              <li>处理您的请求和交易</li>
              <li>向您发送服务相关通知</li>
              <li>提供客户支持</li>
              <li>进行安全监控和欺诈防护</li>
              <li>遵守法律法规要求</li>
            </ul>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">3. 信息共享</h2>
            <p className="text-gray-600 leading-relaxed">
              我们不会出售、租赁或以其他方式向第三方披露您的个人信息，除非：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>获得您的明确同意</li>
              <li>为提供服务需要的必要合作伙伴</li>
              <li>法律法规要求或政府机关要求</li>
              <li>保护我们的权利和财产安全</li>
            </ul>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">4. 数据安全</h2>
            <p className="text-gray-600 leading-relaxed">
              我们采用行业标准的安全措施保护您的信息：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>数据传输加密（TLS/SSL）</li>
              <li>数据存储加密</li>
              <li>访问权限控制</li>
              <li>定期安全审计</li>
              <li>员工安全培训</li>
            </ul>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">5. 您的权利</h2>
            <p className="text-gray-600 leading-relaxed">
              您对个人信息享有以下权利：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>访问和查看您的个人信息</li>
              <li>更正或更新您的信息</li>
              <li>删除您的个人信息</li>
              <li>限制信息处理</li>
              <li>数据可携带权</li>
              <li>撤回同意</li>
            </ul>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">6. Cookie政策</h2>
            <p className="text-gray-600 leading-relaxed">
              我们使用Cookie和类似技术来改善用户体验。您可以通过浏览器设置管理Cookie偏好。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">7. 数据保留</h2>
            <p className="text-gray-600 leading-relaxed">
              我们仅在必要期间保留您的个人信息，具体保留期限取决于信息类型和法律要求。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">8. 政策更新</h2>
            <p className="text-gray-600 leading-relaxed">
              我们可能会不时更新本隐私政策。重大变更将通过邮件或网站通知您。
            </p>

            <h2 className="text-2xl font-bold text-chime-dark-500 mt-8 mb-4">9. 联系我们</h2>
            <p className="text-gray-600 leading-relaxed">
              如果您对本隐私政策有任何问题，请通过以下方式联系我们：
            </p>
            <ul className="list-none text-gray-600 space-y-1">
              <li>邮箱：privacy@chimech.com</li>
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