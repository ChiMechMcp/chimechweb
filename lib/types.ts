export interface DigitalEmployee {
  id: string
  name: string
  role: string
  department: string
  status: 'active' | 'inactive' | 'pending' | 'error'
  avatar?: string
  description?: string
  capabilities: string[]
  metrics: {
    tasksCompleted: number
    efficiency: number
    uptime: number
    lastActive: Date
  }
  createdAt: Date
  updatedAt: Date
}

export interface Task {
  id: string
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'completed' | 'failed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  assignedTo: string // Digital Employee ID
  createdBy: string // User ID
  estimatedDuration?: number // in minutes
  actualDuration?: number // in minutes
  tags: string[]
  createdAt: Date
  updatedAt: Date
  completedAt?: Date
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'manager' | 'user'
  company?: string
  department?: string
  preferences: {
    theme: 'light' | 'dark' | 'system'
    notifications: boolean
    language: 'zh' | 'en'
  }
  subscription: {
    plan: 'free' | 'pro' | 'enterprise'
    expiresAt?: Date
    features: string[]
  }
  createdAt: Date
  updatedAt: Date
}

export interface ApiKey {
  id: string
  name: string
  key: string
  permissions: string[]
  expiresAt?: Date
  lastUsed?: Date
  createdAt: Date
  isActive: boolean
}

export interface MarketplaceItem {
  id: string
  name: string
  description: string
  category: string
  price: number
  currency: 'CNY' | 'USD'
  rating: number
  downloads: number
  provider: {
    name: string
    verified: boolean
  }
  tags: string[]
  features: string[]
  screenshots: string[]
  version: string
  compatibility: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Analytics {
  period: 'day' | 'week' | 'month' | 'quarter' | 'year'
  metrics: {
    activeEmployees: number
    tasksCompleted: number
    timeSaved: number // in hours
    costSavings: number // in currency
    efficiency: number // percentage
    errorRate: number // percentage
  }
  trends: {
    date: string
    value: number
  }[]
}

export interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  read: boolean
  createdAt: Date
  expiresAt?: Date
}

export interface ChimechMcpConfig {
  apiUrl: string
  apiKey: string
  timeout: number
  retryAttempts: number
  logLevel: 'debug' | 'info' | 'warn' | 'error'
}