'use client';

import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

interface DashboardHeaderProps {
  title: string
  description?: string
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  
  // Função para traduzir os meses
  const getDateRange = () => {
    if (locale === 'pt-BR') {
      return `${t('dashboard.chart.months.mar')} 15 - ${t('dashboard.chart.months.apr')} 15, 2025`
    }
    return 'March 15 - April 15, 2025'
  }
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
      <Button variant="outline" size="sm" className="mt-4 md:mt-0 gap-2">
        <Calendar className="h-4 w-4" />
        <span>{getDateRange()}</span>
      </Button>
    </div>
  )
}