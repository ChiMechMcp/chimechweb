'use client'

import * as React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState('profile')

  const tabs = [
    { id: 'profile', name: '个人资料', icon: '👤' },
    { id: 'account', name: '账户设置', icon: '⚙️' },
    { id: 'subscription', name: '订阅管理', icon: '💳' },
    { id: 'notifications', name: '通知设置', icon: '🔔' },
    { id: 'security', name: '安全设置', icon: '🔒' },
    { id: 'integrations', name: '集成管理', icon: '🔗' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />
      case 'account':
        return <AccountSettings />
      case 'subscription':
        return <SubscriptionSettings />
      case 'notifications':
        return <NotificationSettings />
      case 'security':
        return <SecuritySettings />
      case 'integrations':
        return <IntegrationSettings />
      default:
        return <ProfileSettings />
    }
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500">设置</h2>
          <p className="text-muted-foreground">
            管理您的账户设置和偏好配置
          </p>
        </div>

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/5">
            <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-chime-gold-100 text-chime-gold-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="hidden lg:inline">{tab.name}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 lg:max-w-2xl">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

function ProfileSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>个人资料</CardTitle>
          <CardDescription>
            更新您的个人信息和头像
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/avatars/user.svg" />
              <AvatarFallback>用户</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline" size="sm">更换头像</Button>
              <p className="text-sm text-muted-foreground">
                推荐尺寸：256x256px，支持 JPG、PNG 格式
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">姓名</label>
              <Input defaultValue="张三" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">用户名</label>
              <Input defaultValue="zhangsan" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">邮箱地址</label>
              <Input defaultValue="zhangsan@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">手机号码</label>
              <Input defaultValue="+86 138****8888" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">公司</label>
            <Input defaultValue="千机科技有限公司" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">职位</label>
            <Input defaultValue="产品经理" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">个人简介</label>
            <textarea
              className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              defaultValue="专注于AI和数字化转型的产品经理，热衷于探索人工智能在企业中的应用。"
            />
          </div>

          <Button variant="chime-gold">保存更改</Button>
        </CardContent>
      </Card>
    </div>
  )
}

function AccountSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>账户偏好</CardTitle>
          <CardDescription>
            配置您的账户偏好设置
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">语言</label>
                <p className="text-sm text-muted-foreground">选择界面显示语言</p>
              </div>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="zh">中文简体</option>
                <option value="en">English</option>
                <option value="ja">日本語</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">时区</label>
                <p className="text-sm text-muted-foreground">设置您的时区</p>
              </div>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="Asia/Shanghai">北京时间 (UTC+8)</option>
                <option value="America/New_York">纽约时间 (UTC-5)</option>
                <option value="Europe/London">伦敦时间 (UTC+0)</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">主题</label>
                <p className="text-sm text-muted-foreground">选择界面主题</p>
              </div>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="light">浅色主题</option>
                <option value="dark">深色主题</option>
                <option value="system">跟随系统</option>
              </select>
            </div>
          </div>

          <Button variant="chime-gold">保存设置</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">危险操作</CardTitle>
          <CardDescription>
            这些操作不可逆，请谨慎操作
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">删除账户</label>
              <p className="text-sm text-muted-foreground">
                永久删除您的账户和所有数据
              </p>
            </div>
            <Button variant="destructive" size="sm">
              删除账户
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SubscriptionSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>当前订阅</CardTitle>
          <CardDescription>
            管理您的订阅计划和计费信息
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Badge variant="chime-gold">Pro</Badge>
              <div>
                <h3 className="font-semibold">专业版</h3>
                <p className="text-sm text-muted-foreground">
                  ¥299/月 · 下次扣费：2024年7月1日
                </p>
              </div>
            </div>
            <Button variant="outline">管理订阅</Button>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">使用情况</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>数字员工</span>
                <span>5 / 10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-chime-gold-500 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>月度任务</span>
                <span>3,240 / 10,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-chime-bronze-500 h-2 rounded-full" style={{ width: '32%' }}></div>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="chime-gold">升级计划</Button>
            <Button variant="outline">查看发票</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>通知设置</CardTitle>
          <CardDescription>
            配置您希望接收的通知类型
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">邮件通知</label>
                <p className="text-sm text-muted-foreground">接收重要更新和任务通知</p>
              </div>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">推送通知</label>
                <p className="text-sm text-muted-foreground">浏览器推送通知</p>
              </div>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">短信通知</label>
                <p className="text-sm text-muted-foreground">重要事件的短信提醒</p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">营销邮件</label>
                <p className="text-sm text-muted-foreground">产品更新和营销信息</p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
          </div>

          <Button variant="chime-gold">保存设置</Button>
        </CardContent>
      </Card>
    </div>
  )
}

function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>密码安全</CardTitle>
          <CardDescription>
            管理您的登录密码和安全设置
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">当前密码</label>
              <Input type="password" placeholder="请输入当前密码" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">新密码</label>
              <Input type="password" placeholder="请输入新密码" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">确认新密码</label>
              <Input type="password" placeholder="再次输入新密码" />
            </div>
          </div>

          <Button variant="chime-gold">更新密码</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>两步验证</CardTitle>
          <CardDescription>
            增强您的账户安全性
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">短信验证</label>
              <p className="text-sm text-muted-foreground">登录时需要短信验证码</p>
            </div>
            <Button variant="outline" size="sm">启用</Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">应用验证器</label>
              <p className="text-sm text-muted-foreground">使用身份验证器应用</p>
            </div>
            <Button variant="outline" size="sm">配置</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>API 访问</CardTitle>
          <CardDescription>
            管理您的 API 密钥和访问权限
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold">主 API 密钥</h3>
              <p className="text-sm text-muted-foreground">
                ck_test_51H...3Rv2 · 最后使用：2小时前
              </p>
            </div>
            <Button variant="outline" size="sm">查看</Button>
          </div>

          <Button variant="chime-gold">创建新密钥</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>第三方集成</CardTitle>
          <CardDescription>
            连接和管理第三方服务
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold">S</span>
              </div>
              <div>
                <h3 className="font-semibold">Slack</h3>
                <p className="text-sm text-muted-foreground">已连接</p>
              </div>
            </div>
            <Button variant="outline" size="sm">管理</Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-semibold">W</span>
              </div>
              <div>
                <h3 className="font-semibold">企业微信</h3>
                <p className="text-sm text-muted-foreground">未连接</p>
              </div>
            </div>
            <Button variant="outline" size="sm">连接</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}