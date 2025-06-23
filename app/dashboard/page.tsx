import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-chime-dark-500">仪表板</h2>
        <div className="flex items-center space-x-2">
          <Button variant="chime-gold">创建数字员工</Button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">活跃员工</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chime-gold-600">12</div>
            <p className="text-xs text-muted-foreground">
              +2 较上月
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">任务完成</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chime-bronze-600">1,234</div>
            <p className="text-xs text-muted-foreground">
              +15% 较上周
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">节省时间</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chime-gold-600">48.5</div>
            <p className="text-xs text-muted-foreground">
              小时/周
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">成本节约</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20m8-15a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chime-bronze-600">¥32,500</div>
            <p className="text-xs text-muted-foreground">
              较上月节约
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Digital Employees */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-chime-dark-500">最近活动</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="space-y-6">
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/ai-assistant.svg" alt="AI助手" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    AI客服助手 完成了 12 个客户咨询
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2 分钟前
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Badge variant="chime-gold">+98%</Badge>
                </div>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/data-analyst.svg" alt="数据分析师" />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    数据分析师 生成了月度报告
                  </p>
                  <p className="text-sm text-muted-foreground">
                    15 分钟前
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Badge variant="chime-bronze">完成</Badge>
                </div>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/content-creator.svg" alt="内容创作者" />
                  <AvatarFallback>CC</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    内容创作助手 发布了 5 篇社交媒体文章
                  </p>
                  <p className="text-sm text-muted-foreground">
                    1 小时前
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Badge variant="secondary">已发布</Badge>
                </div>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/code-reviewer.svg" alt="代码审查员" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    代码审查员 完成了 3 个PR审查
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2 小时前
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Badge variant="outline">审查中</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-chime-dark-500">我的数字员工</CardTitle>
            <CardDescription>
              您当前管理的数字员工团队
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/avatars/ai-assistant.svg" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">AI客服助手</p>
                    <p className="text-xs text-muted-foreground">客户服务</p>
                  </div>
                </div>
                <Badge variant="chime-gold">活跃</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/avatars/data-analyst.svg" />
                    <AvatarFallback>DA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">数据分析师</p>
                    <p className="text-xs text-muted-foreground">数据分析</p>
                  </div>
                </div>
                <Badge variant="chime-bronze">活跃</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/avatars/content-creator.svg" />
                    <AvatarFallback>CC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">内容创作助手</p>
                    <p className="text-xs text-muted-foreground">内容创作</p>
                  </div>
                </div>
                <Badge variant="secondary">休眠</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/avatars/code-reviewer.svg" />
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">代码审查员</p>
                    <p className="text-xs text-muted-foreground">开发工具</p>
                  </div>
                </div>
                <Badge variant="outline">待机</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}