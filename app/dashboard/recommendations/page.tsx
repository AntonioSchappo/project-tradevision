'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { Check, X, BellOff, AlertTriangle, TrendingDown, TrendingUp, DollarSign } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function RecommendationsPage() {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader 
        title={t('dashboard.recommendations.title')} 
        description={t('dashboard.recommendations.description')}
      />
      
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">{t('dashboard.recommendations.tabs.all')}</TabsTrigger>
            <TabsTrigger value="high">{t('dashboard.recommendations.tabs.highPriority')}</TabsTrigger>
            <TabsTrigger value="medium">{t('dashboard.recommendations.tabs.mediumPriority')}</TabsTrigger>
            <TabsTrigger value="low">{t('dashboard.recommendations.tabs.lowPriority')}</TabsTrigger>
          </TabsList>
          
          <div>
            <Button variant="outline" size="sm">{t('dashboard.recommendations.actions.markAllAsRead')}</Button>
          </div>
        </div>
        
        <TabsContent value="all" className="space-y-4">
          {generateRecommendations()}
        </TabsContent>
        
        <TabsContent value="high" className="space-y-4">
          {generateRecommendations(2, 'high')}
        </TabsContent>
        
        <TabsContent value="medium" className="space-y-4">
          {generateRecommendations(3, 'medium')}
        </TabsContent>
        
        <TabsContent value="low" className="space-y-4">
          {generateRecommendations(2, 'low')}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function generateRecommendations(count = 7, priority = 'all') {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  const recommendations = [
    {
      id: 1,
      title: t('dashboard.recommendations.items.item1.title'),
      description: t('dashboard.recommendations.items.item1.description'),
      store: t('dashboard.recommendations.items.item1.store'),
      impact: t('dashboard.recommendations.impact.high'),
      priority: "high",
      icon: <TrendingDown className="h-5 w-5" />,
      date: t('dashboard.recommendations.items.item1.date')
    },
    {
      id: 2,
      title: t('dashboard.recommendations.items.item2.title'),
      description: t('dashboard.recommendations.items.item2.description'),
      store: t('dashboard.recommendations.items.item2.store'),
      impact: t('dashboard.recommendations.impact.medium'),
      priority: "medium",
      icon: <TrendingUp className="h-5 w-5" />,
      date: t('dashboard.recommendations.items.item2.date')
    },
    {
      id: 3,
      title: t('dashboard.recommendations.items.item3.title'),
      description: t('dashboard.recommendations.items.item3.description'),
      store: t('dashboard.recommendations.items.item3.store'),
      impact: t('dashboard.recommendations.impact.high'),
      priority: "high",
      icon: <AlertTriangle className="h-5 w-5" />,
      date: t('dashboard.recommendations.items.item3.date')
    },
    {
      id: 4,
      title: t('dashboard.recommendations.items.item4.title'),
      description: t('dashboard.recommendations.items.item4.description'),
      store: t('dashboard.recommendations.items.item4.store'),
      impact: t('dashboard.recommendations.impact.medium'),
      priority: "medium",
      icon: <AlertTriangle className="h-5 w-5" />,
      date: t('dashboard.recommendations.items.item4.date')
    },
    {
      id: 5,
      title: t('dashboard.recommendations.items.item5.title'),
      description: t('dashboard.recommendations.items.item5.description'),
      store: t('dashboard.recommendations.items.item5.store'),
      impact: t('dashboard.recommendations.impact.medium'),
      priority: "medium",
      icon: <DollarSign className="h-5 w-5" />,
      date: t('dashboard.recommendations.items.item5.date')
    },
    {
      id: 6,
      title: t('dashboard.recommendations.items.item6.title'),
      description: t('dashboard.recommendations.items.item6.description'),
      store: t('dashboard.recommendations.items.item6.store'),
      impact: t('dashboard.recommendations.impact.low'),
      priority: "low",
      icon: <AlertTriangle className="h-5 w-5" />,
      date: t('dashboard.recommendations.items.item6.date')
    },
    {
      id: 7,
      title: t('dashboard.recommendations.items.item7.title'),
      description: t('dashboard.recommendations.items.item7.description'),
      store: t('dashboard.recommendations.items.item7.store'),
      impact: t('dashboard.recommendations.impact.low'),
      priority: "low",
      icon: <AlertTriangle className="h-5 w-5" />,
      date: t('dashboard.recommendations.items.item7.date')
    }
  ];
  
  let filtered = recommendations;
  if (priority !== 'all') {
    filtered = recommendations.filter(r => r.priority === priority);
  }
  
  if (count) {
    filtered = filtered.slice(0, count);
  }
  
  return filtered.map(recommendation => (
    <Card key={recommendation.id} className="relative overflow-hidden">
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
        recommendation.priority === 'high' ? 'bg-destructive' :
        recommendation.priority === 'medium' ? 'bg-orange-500' : 'bg-blue-500'
      }`} />
      
      <CardHeader className="pb-3 flex flex-row items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-full ${
              recommendation.priority === 'high' ? 'bg-destructive/10 text-destructive' :
              recommendation.priority === 'medium' ? 'bg-orange-500/10 text-orange-500' : 'bg-blue-500/10 text-blue-500'
            }`}>
              {recommendation.icon}
            </div>
            <CardTitle>{recommendation.title}</CardTitle>
            <Badge variant={
              recommendation.priority === 'high' ? 'destructive' :
              recommendation.priority === 'medium' ? 'default' : 'outline'
            }>
              {t(`dashboard.recommendations.priority.${recommendation.priority}`)}
            </Badge>
          </div>
          <CardDescription className="mt-1.5">
            {recommendation.description}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <div className="text-sm">
              <span className="font-medium">{t('dashboard.recommendations.store')}</span> {recommendation.store}
            </div>
            <div className="text-sm text-muted-foreground">
              {recommendation.date}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <BellOff className="h-4 w-4" />
              {t('dashboard.recommendations.actions.snooze')}
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <X className="h-4 w-4" />
              {t('dashboard.recommendations.actions.dismiss')}
            </Button>
            <Button size="sm" className="gap-1">
              <Check className="h-4 w-4" />
              {t('dashboard.recommendations.actions.takeAction')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  ));
}