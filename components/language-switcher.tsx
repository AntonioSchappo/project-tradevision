'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === 'pt-BR' ? 'en' : 'pt-BR')
  }

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="text-primary-foreground"
    >
      {locale === 'pt-BR' ? '🇧🇷 PT' : '🇺🇸 EN'}
    </Button>
  )
}
