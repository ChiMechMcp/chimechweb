import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/context/AuthContext'
import { MarketplaceProvider } from '@/lib/context/MarketplaceContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '千机阁 - chimech-mcp Web Portal',
  description: '重新定义企业数字员工的未来',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <AuthProvider>
          <MarketplaceProvider>
            {children}
          </MarketplaceProvider>
        </AuthProvider>
      </body>
    </html>
  )
}