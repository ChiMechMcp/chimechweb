'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { MarketplaceProvider, useMarketplace } from '@/lib/context/MarketplaceContext'

const digitalEmployees = [
  {
    id: '1',
    name: 'AI客服助手',
    description: '24/7全天候客户服务，支持多语言对话，智能问题解答',
    category: '客户服务',
    price: 199,
    rating: 4.8,
    downloads: 1250,
    provider: {
      name: '千机科技',
      verified: true,
    },
    tags: ['客服', '聊天机器人', '多语言'],
    features: ['智能问答', '情感分析', '工单管理', '知识库'],
    avatar: '/avatars/ai-customer-service.svg',
  },
  {
    id: '2',
    name: '数据分析师',
    description: '专业数据分析和报告生成，支持多种数据源和可视化',
    category: '数据分析',
    price: 299,
    rating: 4.9,
    downloads: 980,
    provider: {
      name: 'DataMind',
      verified: true,
    },
    tags: ['数据分析', 'BI', '报表'],
    features: ['数据清洗', '统计分析', '可视化图表', '预测模型'],
    avatar: '/avatars/data-analyst.svg',
  },
  {
    id: '3',
    name: '内容创作助手',
    description: '高质量文案创作，支持多种内容类型和风格定制',
    category: '内容创作',
    price: 149,
    rating: 4.7,
    downloads: 2100,
    provider: {
      name: 'ContentAI',
      verified: true,
    },
    tags: ['文案', '创作', '营销'],
    features: ['文章生成', '社媒文案', 'SEO优化', '多语言'],
    avatar: '/avatars/content-creator.svg',
  },
  {
    id: '4',
    name: '代码审查员',
    description: '智能代码审查和质量检测，支持多种编程语言',
    category: '开发工具',
    price: 249,
    rating: 4.6,
    downloads: 750,
    provider: {
      name: 'CodeBot',
      verified: true,
    },
    tags: ['代码审查', '质量检测', '开发'],
    features: ['语法检查', '性能分析', '安全扫描', '重构建议'],
    avatar: '/avatars/code-reviewer.svg',
  },
  {
    id: '5',
    name: '财务分析师',
    description: '专业财务数据分析和风险评估，帮助企业决策',
    category: '财务管理',
    price: 399,
    rating: 4.8,
    downloads: 560,
    provider: {
      name: 'FinanceAI',
      verified: true,
    },
    tags: ['财务', '分析', '风控'],
    features: ['财务报表', '风险评估', '投资分析', '成本控制'],
    avatar: '/avatars/finance-analyst.svg',
  },
  {
    id: '6',
    name: '人力资源助手',
    description: '智能招聘和员工管理，简化HR工作流程',
    category: '人力资源',
    price: 179,
    rating: 4.5,
    downloads: 890,
    provider: {
      name: 'HRTech',
      verified: true,
    },
    tags: ['招聘', 'HR', '员工管理'],
    features: ['简历筛选', '面试安排', '绩效评估', '薪酬分析'],
    avatar: '/avatars/hr-assistant.svg',
  },
  {
    id: '7',
    name: '销售顾问',
    description: '智能销售支持和客户关系管理，提升转化率',
    category: '营销推广',
    price: 259,
    rating: 4.7,
    downloads: 1120,
    provider: {
      name: 'SalesAI',
      verified: true,
    },
    tags: ['销售', 'CRM', '客户管理'],
    features: ['客户分析', '销售预测', '跟进提醒', '报表统计'],
    avatar: '/avatars/sales-consultant.svg',
  },
  {
    id: '8',
    name: '项目经理',
    description: '智能项目管理和任务协调，提升团队协作效率',
    category: '项目管理',
    price: 229,
    rating: 4.6,
    downloads: 670,
    provider: {
      name: 'ProjectBot',
      verified: true,
    },
    tags: ['项目管理', '任务分配', '进度跟踪'],
    features: ['甘特图', '任务分配', '进度监控', '风险管理'],
    avatar: '/avatars/project-manager.svg',
  },
  {
    id: '9',
    name: '法务助手',
    description: '智能合同审查和法律咨询，降低法律风险',
    category: '法务合规',
    price: 399,
    rating: 4.8,
    downloads: 340,
    provider: {
      name: 'LegalAI',
      verified: true,
    },
    tags: ['合同审查', '法律咨询', '合规'],
    features: ['合同分析', '风险识别', '法规查询', '文档生成'],
    avatar: '/avatars/legal-assistant.svg',
  },
]

const categories = [
  '全部',
  '客户服务',
  '数据分析',
  '内容创作',
  '开发工具',
  '财务管理',
  '人力资源',
  '营销推广',
  '项目管理',
  '法务合规',
]

const priceRanges = [
  { label: '全部价格', min: 0, max: Infinity },
  { label: '¥0-150', min: 0, max: 150 },
  { label: '¥151-250', min: 151, max: 250 },
  { label: '¥251-350', min: 251, max: 350 },
  { label: '¥351+', min: 351, max: Infinity },
]

const ratingFilters = [
  { label: '全部评分', min: 0 },
  { label: '4.5分以上', min: 4.5 },
  { label: '4.0分以上', min: 4.0 },
  { label: '3.5分以上', min: 3.5 },
]

const sortOptions = [
  { label: '默认排序', value: 'default' },
  { label: '价格从低到高', value: 'price-asc' },
  { label: '价格从高到低', value: 'price-desc' },
  { label: '评分从高到低', value: 'rating-desc' },
  { label: '下载量从高到低', value: 'downloads-desc' },
  { label: '最新发布', value: 'newest' },
]

function MarketplaceContent() {
  const {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    startTrial,
    isInTrial,
    cartCount
  } = useMarketplace()
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [selectedRating, setSelectedRating] = useState(ratingFilters[0])
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<typeof digitalEmployees[0] | null>(null)
  const [showEmployeeDetail, setShowEmployeeDetail] = useState(false)

  // 筛选和排序逻辑
  const filteredAndSortedEmployees = useMemo(() => {
    let filtered = digitalEmployees.filter(employee => {
      // 搜索筛选
      const matchesSearch = searchQuery === '' || 
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      // 分类筛选
      const matchesCategory = selectedCategory === '全部' || employee.category === selectedCategory
      
      // 价格筛选
      const matchesPrice = employee.price >= selectedPriceRange.min && employee.price <= selectedPriceRange.max
      
      // 评分筛选
      const matchesRating = employee.rating >= selectedRating.min
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating
    })

    // 排序
    switch (sortBy) {
      case 'price-asc':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return filtered.sort((a, b) => b.price - a.price)
      case 'rating-desc':
        return filtered.sort((a, b) => b.rating - a.rating)
      case 'downloads-desc':
        return filtered.sort((a, b) => b.downloads - a.downloads)
      case 'newest':
        return filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id))
      default:
        return filtered
    }
  }, [searchQuery, selectedCategory, selectedPriceRange, selectedRating, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-chime-dark-500 sm:text-5xl">
              数字员工市场
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              发现和部署专业的AI数字员工，提升团队效率
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 max-w-lg">
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
                  placeholder="搜索数字员工..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <svg
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                  />
                </svg>
                筛选
              </Button>
              <select 
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === selectedCategory ? 'chime-gold' : 'outline'}
                className="cursor-pointer hover:bg-chime-gold-100"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">高级筛选</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">价格区间</label>
                  <div className="space-y-2">
                    {priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={selectedPriceRange === range}
                          onChange={() => setSelectedPriceRange(range)}
                          className="h-4 w-4 text-chime-gold-600"
                        />
                        <span className="text-sm">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">评分筛选</label>
                  <div className="space-y-2">
                    {ratingFilters.map((rating, index) => (
                      <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="ratingFilter"
                          checked={selectedRating === rating}
                          onChange={() => setSelectedRating(rating)}
                          className="h-4 w-4 text-chime-gold-600"
                        />
                        <span className="text-sm">{rating.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">其他筛选</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 text-chime-gold-600" />
                      <span className="text-sm">仅显示认证开发者</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 text-chime-gold-600" />
                      <span className="text-sm">支持试用</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 text-chime-gold-600" />
                      <span className="text-sm">最近更新</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setSelectedCategory('全部')
                    setSelectedPriceRange(priceRanges[0])
                    setSelectedRating(ratingFilters[0])
                    setSortBy('default')
                    setSearchQuery('')
                  }}
                >
                  重置筛选
                </Button>
                <Button variant="chime-gold" size="sm" onClick={() => setShowFilters(false)}>
                  应用筛选
                </Button>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-chime-gold-600">{digitalEmployees.length}</div>
              <div className="text-sm text-gray-600">可用数字员工</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chime-bronze-600">{filteredAndSortedEmployees.length}</div>
              <div className="text-sm text-gray-600">筛选结果</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chime-gold-600">10,000+</div>
              <div className="text-sm text-gray-600">活跃用户</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chime-bronze-600">99.9%</div>
              <div className="text-sm text-gray-600">满意度</div>
            </div>
          </div>

          {/* Employee Grid */}
          <div className="mt-12">
            {filteredAndSortedEmployees.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的数字员工</h3>
                <p className="text-gray-600 mb-4">尝试调整筛选条件或搜索关键词</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('全部')
                    setSelectedPriceRange(priceRanges[0])
                    setSelectedRating(ratingFilters[0])
                  }}
                >
                  清除筛选
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredAndSortedEmployees.map((employee) => (
              <Card key={employee.id} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={employee.avatar} alt={employee.name} />
                        <AvatarFallback>{employee.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg group-hover:text-chime-gold-600 transition-colors">
                          {employee.name}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-gray-500">{employee.provider.name}</span>
                          {employee.provider.verified && (
                            <svg className="h-4 w-4 text-chime-gold-500" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">{employee.category}</Badge>
                  </div>
                  <CardDescription className="mt-2">
                    {employee.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {employee.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(employee.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{employee.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{employee.downloads} 下载</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-chime-gold-600">
                      ¥{employee.price}
                      <span className="text-sm font-normal text-gray-500">/月</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant={isInWishlist(employee.id) ? "chime-gold" : "outline"}
                        onClick={(e) => {
                          e.stopPropagation()
                          if (isInWishlist(employee.id)) {
                            removeFromWishlist(employee.id)
                          } else {
                            addToWishlist(employee)
                          }
                        }}
                      >
                        <svg className={`h-4 w-4 ${isInWishlist(employee.id) ? 'fill-current' : ''}`} fill={isInWishlist(employee.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="chime-gold"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedEmployee(employee)
                          setShowEmployeeDetail(true)
                        }}
                      >
                        查看详情
                      </Button>
                    </div>
                  </div>
                </CardContent>
                </Card>
              ))}
              </div>
            )}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              加载更多
            </Button>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-chime-gold-500 to-chime-bronze-500 px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              没找到合适的数字员工？
            </h2>
            <p className="mt-4 text-lg text-chime-gold-100">
              联系我们定制专属的AI解决方案
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-chime-gold-600 hover:bg-gray-50">
                定制服务
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                联系销售
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function MarketplacePage() {
  return (
    <MarketplaceProvider>
      <MarketplaceContent />
    </MarketplaceProvider>
  )
}