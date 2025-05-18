'use client'

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { SunIcon, MoonIcon, User2Icon } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export function MobileAppHeader() {
  const { theme, setTheme } = useTheme()
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  
  return (
    <div className="border-b bg-background p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">{t('app.header.title')}</h1>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={t('app.header.toggleTheme')}
            aria-label={t('app.header.toggleTheme')}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard" title={t('app.header.profile')} aria-label={t('app.header.profile')}>
              <User2Icon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}