'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RecentScans } from '@/components/dashboard/recent-scans'
import { PriceChangesChart } from '@/components/dashboard/price-changes-chart'
import { InsightCards } from '@/components/dashboard/insight-cards'
import { AlertsList } from '@/components/dashboard/alerts-list'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('7d')
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader 
        title={t('dashboard.title')} 
        description={t('dashboard.description')}
      />
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">{t('dashboard.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="products">{t('dashboard.tabs.products')}</TabsTrigger>
          <TabsTrigger value="stores">{t('dashboard.tabs.stores')}</TabsTrigger>
          <TabsTrigger value="alerts">{t('dashboard.tabs.alerts')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <InsightCards />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>{t('dashboard.cards.priceChanges.title')}</CardTitle>
                <CardDescription>
                  {t('dashboard.cards.priceChanges.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PriceChangesChart />
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>{t('dashboard.cards.recentScans.title')}</CardTitle>
                <CardDescription>
                  {t('dashboard.cards.recentScans.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentScans />
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.cards.highPriorityAlerts.title')}</CardTitle>
              <CardDescription>
                {t('dashboard.cards.highPriorityAlerts.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AlertsList limit={5} priority="high" />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.cards.productAnalysis.title')}</CardTitle>
              <CardDescription>
                {t('dashboard.cards.productAnalysis.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-md border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">{t('dashboard.cards.productAnalysis.placeholder')}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="stores" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.cards.storeComparison.title')}</CardTitle>
              <CardDescription>
                {t('dashboard.cards.storeComparison.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-md border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">{t('dashboard.cards.storeComparison.placeholder')}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.cards.allAlerts.title')}</CardTitle>
              <CardDescription>
                {t('dashboard.cards.allAlerts.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AlertsList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}