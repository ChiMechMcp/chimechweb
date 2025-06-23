import DashboardLayout from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500">数据分析</h2>
          <p className="text-muted-foreground">
            深入了解您的数字员工表现和业务指标
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总任务完成数</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chime-gold-600">12,847</div>
              <p className="text-xs text-muted-foreground">+15.2% 较上月</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">平均处理时间</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chime-bronze-600">2.3分钟</div>
              <p className="text-xs text-muted-foreground">-8.5% 较上月</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">成功率</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chime-gold-600">98.7%</div>
              <p className="text-xs text-muted-foreground">+1.2% 较上月</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">成本节约</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chime-bronze-600">¥84,320</div>
              <p className="text-xs text-muted-foreground">本月累计</p>
            </CardContent>
          </Card>
        </div>

        {/* 图表区域 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>任务完成趋势</CardTitle>
              <CardDescription>过去30天的任务完成情况</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">图表区域 - 任务完成趋势</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>员工效率对比</CardTitle>
              <CardDescription>各数字员工的效率表现</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">图表区域 - 效率对比</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 详细分析 */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>数字员工表现排行</CardTitle>
              <CardDescription>按任务完成数排序</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'AI客服助手', tasks: 4250, efficiency: 98.5, badge: '🥇' },
                  { name: '数据分析师', tasks: 3180, efficiency: 95.2, badge: '🥈' },
                  { name: '内容创作助手', tasks: 2890, efficiency: 89.7, badge: '🥉' },
                  { name: '代码审查员', tasks: 1680, efficiency: 92.1, badge: '' },
                  { name: '财务分析师', tasks: 847, efficiency: 87.3, badge: '' },
                ].map((employee, index) => (
                  <div key={employee.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{employee.badge || `${index + 1}.`}</span>
                      <div>
                        <h4 className="font-medium">{employee.name}</h4>
                        <p className="text-sm text-gray-600">效率：{employee.efficiency}%</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{employee.tasks.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">任务完成</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>任务类型分布</CardTitle>
              <CardDescription>本月任务分类统计</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { type: '客户服务', count: 4250, color: 'bg-chime-gold-500' },
                  { type: '数据分析', count: 3180, color: 'bg-chime-bronze-500' },
                  { type: '内容创作', count: 2890, color: 'bg-blue-500' },
                  { type: '代码审查', count: 1680, color: 'bg-green-500' },
                  { type: '财务分析', count: 847, color: 'bg-purple-500' },
                ].map((item) => (
                  <div key={item.type} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm">{item.type}</span>
                    </div>
                    <Badge variant="outline">{item.count.toLocaleString()}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
} 