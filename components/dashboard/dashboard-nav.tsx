'use client'

import Link from 'next/link'
import { LayoutDashboard, BarChart2, BellRing, Settings, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed?: boolean
}

export function DashboardNav({ className, isCollapsed, ...props }: NavProps) {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  const navItems = [
    {
      title: t('dashboard.nav.dashboard'),
      href: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: t('dashboard.nav.productInsights'),
      href: '/dashboard/insights',
      icon: Search,
    },
    {
      title: t('dashboard.nav.trendsAnalysis'),
      href: '/dashboard/trends',
      icon: BarChart2,
    },
    {
      title: t('dashboard.nav.recommendations'),
      href: '/dashboard/recommendations',
      icon: BellRing,
    },
    {
      title: t('dashboard.nav.settings'),
      href: '/dashboard/settings',
      icon: Settings,
    },
  ]

  return (
    <nav className={cn('flex flex-col gap-2 py-4', className)} {...props}>
      {navItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          asChild
          className={cn(
            'justify-start',
            isCollapsed ? 'h-9 w-9' : 'h-9'
          )}
        >
          <Link href={item.href}>
            <item.icon className={cn('h-4 w-4', isCollapsed ? 'mr-0' : 'mr-2')} />
            {!isCollapsed && <span>{item.title}</span>}
          </Link>
        </Button>
      ))}
    </nav>
  )
}