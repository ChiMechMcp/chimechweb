'use client'

import * as React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'

const employees = [
  {
    id: '1',
    name: 'AI客服助手',
    role: '客户服务专员',
    department: '客户服务',
    status: 'active' as const,
    avatar: '/avatars/ai-customer-service.svg',
    description: '24/7全天候客户服务，智能问答和工单处理',
    capabilities: ['智能问答', '情感分析', '工单管理', '多语言支持'],
    metrics: {
      tasksCompleted: 1248,
      efficiency: 98.5,
      uptime: 99.9,
      lastActive: new Date(),
    },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: '数据分析师',
    role: '数据分析专家',
    department: '数据科学',
    status: 'active' as const,
    avatar: '/avatars/data-analyst.svg',
    description: '专业数据分析和报告生成',
    capabilities: ['数据清洗', '统计分析', '可视化', '预测模型'],
    metrics: {
      tasksCompleted: 856,
      efficiency: 95.2,
      uptime: 97.8,
      lastActive: new Date(Date.now() - 300000), // 5分钟前
    },
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: '内容创作助手',
    role: '内容创作专员',
    department: '营销部',
    status: 'inactive' as const,
    avatar: '/avatars/content-creator.svg',
    description: '高质量文案创作和内容策划',
    capabilities: ['文章写作', '社媒文案', 'SEO优化', '创意策划'],
    metrics: {
      tasksCompleted: 432,
      efficiency: 89.7,
      uptime: 85.2,
      lastActive: new Date(Date.now() - 3600000), // 1小时前
    },
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date(),
  },
  {
    id: '4',
    name: '代码审查员',
    role: '代码质量专家',
    department: '技术部',
    status: 'active' as const,
    avatar: '/avatars/code-reviewer.svg',
    description: '智能代码审查和质量检测',
    capabilities: ['代码审查', '安全扫描', '性能分析', '重构建议'],
    metrics: {
      tasksCompleted: 267,
      efficiency: 92.1,
      uptime: 94.5,
      lastActive: new Date(Date.now() - 120000), // 2分钟前
    },
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date(),
  },
  {
    id: '5',
    name: '财务分析师',
    role: '财务数据专家',
    department: '财务部',
    status: 'pending' as const,
    avatar: '/avatars/finance-analyst.svg',
    description: '财务数据分析和风险评估',
    capabilities: ['财务分析', '风险评估', '预算规划', '成本控制'],
    metrics: {
      tasksCompleted: 89,
      efficiency: 87.3,
      uptime: 78.9,
      lastActive: new Date(Date.now() - 7200000), // 2小时前
    },
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date(),
  },
]

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedStatus, setSelectedStatus] = React.useState('all')
  const [selectedDepartment, setSelectedDepartment] = React.useState('all')

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || employee.status === selectedStatus
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment

    return matchesSearch && matchesStatus && matchesDepartment
  })

  const departments = ['all', ...Array.from(new Set(employees.map(e => e.department)))]
  const statuses = ['all', 'active', 'inactive', 'pending']

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'chime-gold'
      case 'inactive': return 'secondary'
      case 'pending': return 'outline'
      default: return 'secondary'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return '活跃'
      case 'inactive': return '休眠'
      case 'pending': return '待激活'
      default: return status
    }
  }

  return (
    <DashboardLayout>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500">数字员工</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline">导入员工</Button>
                <Button variant="chime-gold">创建员工</Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">总员工数</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-chime-gold-600">{employees.length}</div>
                  <p className="text-xs text-muted-foreground">全部数字员工</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">活跃员工</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-chime-gold-600">
                    {employees.filter(e => e.status === 'active').length}
                  </div>
                  <p className="text-xs text-muted-foreground">正在工作中</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">总任务数</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-chime-bronze-600">
                    {employees.reduce((sum, e) => sum + e.metrics.tasksCompleted, 0).toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">累计完成</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">平均效率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-chime-bronze-600">
                    {(employees.reduce((sum, e) => sum + e.metrics.efficiency, 0) / employees.length).toFixed(1)}%
                  </div>
                  <p className="text-xs text-muted-foreground">整体表现</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 gap-4 max-w-md">
                <Input
                  placeholder="搜索员工姓名或角色..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="all">全部部门</option>
                  {departments.slice(1).map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="all">全部状态</option>
                  {statuses.slice(1).map(status => (
                    <option key={status} value={status}>{getStatusText(status)}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Employee Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEmployees.map((employee) => (
                <Card key={employee.id} className="hover:shadow-lg transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={employee.avatar} alt={employee.name} />
                          <AvatarFallback>{employee.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{employee.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{employee.role}</p>
                          <p className="text-xs text-muted-foreground">{employee.department}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(employee.status) as any}>
                        {getStatusText(employee.status)}
                      </Badge>
                    </div>
                    <CardDescription className="mt-2">
                      {employee.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Capabilities */}
                      <div>
                        <p className="text-sm font-medium mb-2">核心能力</p>
                        <div className="flex flex-wrap gap-1">
                          {employee.capabilities.slice(0, 3).map((capability) => (
                            <Badge key={capability} variant="secondary" className="text-xs">
                              {capability}
                            </Badge>
                          ))}
                          {employee.capabilities.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{employee.capabilities.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">完成任务</p>
                          <p className="font-semibold">{employee.metrics.tasksCompleted.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">工作效率</p>
                          <p className="font-semibold">{employee.metrics.efficiency}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">在线时间</p>
                          <p className="font-semibold">{employee.metrics.uptime}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">最后活动</p>
                          <p className="font-semibold text-xs">
                            {employee.metrics.lastActive.toLocaleTimeString('zh-CN', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          配置
                        </Button>
                        <Button size="sm" variant="chime-gold" className="flex-1">
                          管理
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredEmployees.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">没有找到匹配的数字员工</p>
                <Button className="mt-4" variant="chime-gold">
                  创建新员工
                </Button>
              </div>
            )}
          </div>
    </DashboardLayout>
  )
}