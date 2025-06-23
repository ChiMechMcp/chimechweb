import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { Footer } from '@/components/layout/Footer'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ProtectedRoute requireAuth={true}>
      <div className="min-h-screen bg-background">
        <Header showFullNav />
        <div className="flex">
          <Sidebar className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] border-r bg-background" />
          <main className="flex-1 ml-64">
            {children}
          </main>
        </div>
        <div className="ml-64">
          <Footer />
        </div>
      </div>
    </ProtectedRoute>
  )
}