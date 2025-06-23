'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { useAuth } from '@/lib/context/AuthContext'

interface HeaderProps {
  className?: string
  showFullNav?: boolean
}

export function Header({ className, showFullNav = false }: HeaderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { user, isAuthenticated, logout } = useAuth()
  const isDashboard = pathname?.startsWith('/dashboard')
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [showUserMenu, setShowUserMenu] = React.useState(false)

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60', className)}>
      <div className={cn(
        "flex h-16 items-center px-4 sm:px-6 lg:px-8",
        showFullNav || isDashboard ? "max-w-none" : "mx-auto max-w-7xl"
      )}>
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-chime-gold-500 to-chime-bronze-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">千</span>
            </div>
            <span className="hidden font-bold sm:inline-block text-chime-dark-500">chimech-mcp</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {showFullNav || isDashboard ? (
              <>
                <Link
                  href="/dashboard"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === '/dashboard' ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  仪表板
                </Link>
                <Link
                  href="/employees"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === '/employees' ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  数字员工
                </Link>
                <Link
                  href="/marketplace"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === '/marketplace' ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  市场
                </Link>
                <Link
                  href="/docs"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === '/docs' ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  文档
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/#features"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  功能
                </Link>
                <Link
                  href="/marketplace"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  市场
                </Link>
                <Link
                  href="/docs"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  文档
                </Link>
                <Link
                  href="/pricing"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  定价
                </Link>
              </>
            )}
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {isAuthenticated ? (
            <>
              <div className="w-full flex-1 md:w-auto md:flex-none">
                <Button variant="outline" className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
                  <span className="hidden lg:inline-flex">搜索数字员工...</span>
                  <span className="inline-flex lg:hidden">搜索...</span>
                  <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </Button>
              </div>
              <nav className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="chime-gold" className="hidden sm:inline-flex">
                    {user?.subscription.plan === 'enterprise' ? 'Enterprise' : 
                     user?.subscription.plan === 'pro' ? 'Pro' : 'Free'}
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                    <span className="sr-only">通知</span>
                  </Button>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="p-0"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback>
                          {user?.name?.substring(0, 1) || '用'}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                    
                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1">
                          <div className="px-4 py-2 text-sm text-gray-700 border-b">
                            <div className="font-medium">{user?.name}</div>
                            <div className="text-gray-500">{user?.email}</div>
                          </div>
                          <Link
                            href="/settings"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setShowUserMenu(false)}
                          >
                            个人设置
                          </Link>
                          <Link
                            href="/api-keys"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setShowUserMenu(false)}
                          >
                            API密钥
                          </Link>
                          <div className="border-t border-gray-100">
                            <button
                              onClick={() => {
                                setShowUserMenu(false)
                                handleLogout()
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              退出登录
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </nav>
            </>
          ) : (
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">登录</Link>
              </Button>
              <Button variant="chime-gold" asChild>
                <Link href="/register">免费注册</Link>
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}