'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CameraIcon, BarChart3Icon } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { LanguageSwitcher } from '@/components/language-switcher'

export default function Home() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t('header.title')}</h1>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Link href="/app">
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                {t('header.launchApp')}
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                {t('header.dashboard')}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 md:p-8">
        <section className="py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('hero.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/app">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <CameraIcon className="h-5 w-5" />
                    {t('hero.mobileApp')}
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                    <BarChart3Icon className="h-5 w-5" />
                    {t('hero.webDashboard')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card shadow-sm p-4">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground text-center p-4">{t('hero.demo')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-center mb-12">{t('howItWorks.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CameraIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium">{t('howItWorks.capture.title')}</h3>
              <p className="text-muted-foreground">{t('howItWorks.capture.description')}</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12h2m2 0h2m2 0h2m2 0h2m2 0h2" strokeLinecap="round" />
                  <path d="M12 5v14" strokeLinecap="round" />
                  <rect x="8" y="9" width="8" height="6" rx="1" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">{t('howItWorks.analyze.title')}</h3>
              <p className="text-muted-foreground">{t('howItWorks.analyze.description')}</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart3Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium">{t('howItWorks.insight.title')}</h3>
              <p className="text-muted-foreground">{t('howItWorks.insight.description')}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  )
}