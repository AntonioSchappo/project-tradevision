'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoginForm } from '@/components/login/login-form'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function LoginPage() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">{t('login.title')}</h1>
            <p className="text-muted-foreground">{t('login.subtitle')}</p>
          </div>
          
          <LoginForm />
          
          <div className="text-center text-sm">
            <Link href="/" className="text-primary underline-offset-4 hover:underline">
              {t('login.backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}