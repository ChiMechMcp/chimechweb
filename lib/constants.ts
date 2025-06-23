export const APP_NAME = 'chimech-mcp'
export const APP_DESCRIPTION = '千机阁 - 数字员工管理与协作平台'

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  EMPLOYEES: '/employees',
  MARKETPLACE: '/marketplace',
  API_KEYS: '/api-keys',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
  DOCS: '/docs',
  SUPPORT: '/support',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const

export const DIGITAL_EMPLOYEE_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
  ERROR: 'error',
} as const

export const TASK_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  FAILED: 'failed',
} as const

export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
} as const

export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
} as const

export const SUBSCRIPTION_PLANS = {
  FREE: 'free',
  PRO: 'pro',
  ENTERPRISE: 'enterprise',
} as const

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const

export const LANGUAGES = {
  ZH: 'zh',
  EN: 'en',
} as const

export const CURRENCIES = {
  CNY: 'CNY',
  USD: 'USD',
} as const

export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const

export const ANALYTICS_PERIODS = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  QUARTER: 'quarter',
  YEAR: 'year',
} as const

export const DEFAULT_PAGINATION = {
  PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const

export const API_ENDPOINTS = {
  EMPLOYEES: '/api/employees',
  TASKS: '/api/tasks',
  USERS: '/api/users',
  API_KEYS: '/api/api-keys',
  MARKETPLACE: '/api/marketplace',
  ANALYTICS: '/api/analytics',
  NOTIFICATIONS: '/api/notifications',
} as const

export const STORAGE_KEYS = {
  THEME: 'chimech-theme',
  LANGUAGE: 'chimech-language',
  API_KEY: 'chimech-api-key',
  USER_PREFERENCES: 'chimech-user-preferences',
} as const

export const CHIME_BRAND_COLORS = {
  GOLD: {
    50: '#fffdf2',
    100: '#fffae6',
    200: '#fff3cc',
    300: '#ffe9a3',
    400: '#ffd770',
    500: '#ffc53d',
    600: '#e6b235',
    700: '#cc9e2d',
    800: '#b38a25',
    900: '#99761d',
  },
  BRONZE: {
    50: '#faf8f5',
    100: '#f5f1eb',
    200: '#ebe3d7',
    300: '#e0d5c3',
    400: '#d6c7af',
    500: '#cc9966',
    600: '#b8895c',
    700: '#a57952',
    800: '#916948',
    900: '#7d593e',
  },
  DARK: {
    50: '#f7f7f8',
    100: '#eeeef0',
    200: '#d6d6da',
    300: '#bebec4',
    400: '#a6a6ae',
    500: '#2c2c2e',
    600: '#252527',
    700: '#1e1e20',
    800: '#171719',
    900: '#101012',
  },
} as const