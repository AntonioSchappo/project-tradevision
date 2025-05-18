'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingDown, TrendingUp, ImageIcon, AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export function InsightCards() {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t('dashboard.insights.totalScans')}
          </CardTitle>
          <ImageIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">142</div>
          <p className="text-xs text-muted-foreground">
            {t('dashboard.insights.totalScansChange')}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t('dashboard.insights.productsTracked')}
          </CardTitle>
          <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,204</div>
          <p className="text-xs text-muted-foreground">
            {t('dashboard.insights.productsTrackedInfo')}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t('dashboard.insights.priceAlerts')}
          </CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">
            {t('dashboard.insights.priceAlertsInfo')}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t('dashboard.insights.avgPriceDifference')}
          </CardTitle>
          <TrendingDown className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">-2.4%</div>
          <p className="text-xs text-muted-foreground">
            {t('dashboard.insights.avgPriceDifferenceInfo')}
          </p>
        </CardContent>
      </Card>
    </>
  )
}