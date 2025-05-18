'use client';

import Link from 'next/link'
import { Camera, ImageIcon, Settings, HomeIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export function MobileAppNav() {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t bg-background">
      <div className="grid h-full grid-cols-4">
        <NavItem href="/app" icon={HomeIcon} label={t('app.nav.home')} />
        <NavItem href="/app/history" icon={ImageIcon} label={t('app.nav.history')} />
        <NavItem href="/app/upload" icon={Camera} label={t('app.nav.capture')} isMain />
        <NavItem href="/app/settings" icon={Settings} label={t('app.nav.settings')} />
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ElementType
  label: string
  isMain?: boolean
}

function NavItem({ href, icon: Icon, label, isMain }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-1",
        isMain && "relative"
      )}
    >
      {isMain ? (
        <div className="absolute -top-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
      ) : (
        <Icon className="h-5 w-5" />
      )}
      <span className={cn("text-xs", isMain && "mt-6")}>{label}</span>
    </Link>
  )
}