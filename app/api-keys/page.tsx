'use client'

import * as React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'

const apiKeys = [
  {
    id: '1',
    name: '生产环境密钥',
    key: 'ck_live_51H7kD...8Rv2',
    permissions: ['读取', '写入', '删除'],
    expiresAt: new Date('2024-12-31'),
    lastUsed: new Date('2024-06-20T10:30:00'),
    createdAt: new Date('2024-01-15'),
    isActive: true,
  },
  {
    id: '2',
    name: '测试环境密钥',
    key: 'ck_test_51H7kD...3Mn8',
    permissions: ['读取', '写入'],
    expiresAt: null,
    lastUsed: new Date('2024-06-19T15:45:00'),
    createdAt: new Date('2024-02-01'),
    isActive: true,
  },
  {
    id: '3',
    name: '移动应用密钥',
    key: 'ck_app_51H7kD...9Xp4',
    permissions: ['读取'],
    expiresAt: new Date('2024-09-30'),
    lastUsed: new Date('2024-06-18T09:15:00'),
    createdAt: new Date('2024-03-10'),
    isActive: false,
  },
]

export default function ApiKeysPage() {
  const [showCreateForm, setShowCreateForm] = React.useState(false)
  const [newKeyName, setNewKeyName] = React.useState('')
  const [selectedPermissions, setSelectedPermissions] = React.useState<string[]>(['读取'])

  const handleCreateKey = () => {
    // 这里应该调用 API 创建新密钥
    console.log('Creating new API key:', { name: newKeyName, permissions: selectedPermissions })
    setShowCreateForm(false)
    setNewKeyName('')
    setSelectedPermissions(['读取'])
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // 这里可以添加复制成功的提示
  }

  const toggleKeyStatus = (keyId: string) => {
    // 这里应该调用 API 切换密钥状态
    console.log('Toggle key status:', keyId)
  }

  const deleteKey = (keyId: string) => {
    // 这里应该调用 API 删除密钥
    console.log('Delete key:', keyId)
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500">API 密钥</h2>
            <p className="text-muted-foreground">
              管理您的 API 密钥以访问千机阁服务
            </p>
          </div>
          <Button 
            variant="chime-gold" 
            onClick={() => setShowCreateForm(true)}
          >
            创建新密钥
          </Button>
        </div>

        {/* API 使用统计 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总密钥数</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chime-gold-600">{apiKeys.length}</div>
              <p className="text-xs text-muted-foreground">
                {apiKeys.filter(k => k.isActive).length} 个活跃
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">本月请求</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chime-bronze-600">24,680</div>
              <p className="text-xs text-muted-foreground">+12% 较上月</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">成功率</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chime-gold-600">99.2%</div>
              <p className="text-xs text-muted-foreground">平均响应</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">限制剩余</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chime-bronze-600">75,320</div>
              <p className="text-xs text-muted-foreground">本月剩余请求</p>
            </CardContent>
          </Card>
        </div>

        {/* 创建新密钥表单 */}
        {showCreateForm && (
          <Card>
            <CardHeader>
              <CardTitle>创建新 API 密钥</CardTitle>
              <CardDescription>
                创建一个新的 API 密钥以访问千机阁服务
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">密钥名称</label>
                <Input
                  placeholder="例如：生产环境密钥"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">权限</label>
                <div className="space-y-2">
                  {['读取', '写入', '删除'].map((permission) => (
                    <div key={permission} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={permission}
                        checked={selectedPermissions.includes(permission)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedPermissions([...selectedPermissions, permission])
                          } else {
                            setSelectedPermissions(selectedPermissions.filter(p => p !== permission))
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <label htmlFor={permission} className="text-sm">
                        {permission}
                        {permission === '读取' && ' - 查看数字员工和任务'}
                        {permission === '写入' && ' - 创建和修改资源'}
                        {permission === '删除' && ' - 删除资源'}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button 
                  variant="chime-gold" 
                  onClick={handleCreateKey}
                  disabled={!newKeyName || selectedPermissions.length === 0}
                >
                  创建密钥
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowCreateForm(false)}
                >
                  取消
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 密钥列表 */}
        <Card>
          <CardHeader>
            <CardTitle>API 密钥列表</CardTitle>
            <CardDescription>
              管理您现有的 API 密钥
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {apiKeys.map((apiKey) => (
                <div key={apiKey.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{apiKey.name}</h3>
                      {apiKey.isActive ? (
                        <Badge variant="default" className="bg-green-100 text-green-800">活跃</Badge>
                      ) : (
                        <Badge variant="secondary">已禁用</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">
                      {apiKey.key}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>权限: {apiKey.permissions.join(', ')}</span>
                      <span>最后使用: {formatDate(apiKey.lastUsed)}</span>
                      {apiKey.expiresAt && (
                        <span>过期时间: {formatDate(apiKey.expiresAt)}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(apiKey.key)}
                    >
                      复制
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toggleKeyStatus(apiKey.id)}
                    >
                      {apiKey.isActive ? '禁用' : '启用'}
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => deleteKey(apiKey.id)}
                    >
                      删除
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 使用指南 */}
        <Card>
          <CardHeader>
            <CardTitle>使用指南</CardTitle>
            <CardDescription>
              如何在您的应用中使用 API 密钥
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">身份验证</h4>
              <div className="bg-gray-100 p-3 rounded-md">
                <code className="text-sm">
                  curl -H "Authorization: Bearer YOUR_API_KEY" \<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;https://api.chimech.com/v1/employees
                </code>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">支持的端点</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <code>GET /v1/employees</code>
                  <span className="text-muted-foreground">获取数字员工列表</span>
                </div>
                <div className="flex justify-between">
                  <code>POST /v1/employees</code>
                  <span className="text-muted-foreground">创建新的数字员工</span>
                </div>
                <div className="flex justify-between">
                  <code>GET /v1/tasks</code>
                  <span className="text-muted-foreground">获取任务列表</span>
                </div>
                <div className="flex justify-between">
                  <code>POST /v1/tasks</code>
                  <span className="text-muted-foreground">创建新任务</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
} 