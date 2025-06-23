import * as React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { MarketplaceItem } from '@/lib/types'
import { formatCurrency } from '@/lib/utils'

interface EmployeeCardProps {
  employee: MarketplaceItem
  onInstall?: (id: string) => void
}

export function EmployeeCard({ employee, onInstall }: EmployeeCardProps) {
  const handleInstall = () => {
    if (onInstall) {
      onInstall(employee.id)
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={`/avatars/${employee.id}.svg`} alt={employee.name} />
              <AvatarFallback>{employee.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg group-hover:text-chime-gold-600 transition-colors">
                <Link href={`/marketplace/${employee.id}`}>
                  {employee.name}
                </Link>
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
          {employee.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {employee.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{employee.tags.length - 3}
            </Badge>
          )}
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
          <span className="text-sm text-gray-500">{employee.downloads.toLocaleString()} 下载</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-chime-gold-600">
            {formatCurrency(employee.price, employee.currency)}
            <span className="text-sm font-normal text-gray-500">/月</span>
          </div>
          <Button size="sm" variant="chime-gold" onClick={handleInstall}>
            立即使用
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}