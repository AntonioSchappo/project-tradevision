'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

interface AlertsListProps {
  limit?: number
  priority?: 'high' | 'medium' | 'low' | 'all'
}

export function AlertsList({ limit, priority = 'all' }: AlertsListProps) {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  const alerts = [
    {
      id: 1,
      title: t('dashboard.alerts.alert1.title'),
      store: t('dashboard.alerts.alert1.store'),
      difference: t('dashboard.alerts.alert1.difference'),
      priority: 'high',
      time: t('dashboard.alerts.alert1.time'),
    },
    {
      id: 2,
      title: t('dashboard.alerts.alert2.title'),
      store: t('dashboard.alerts.alert2.store'),
      difference: t('dashboard.alerts.alert2.difference'),
      priority: 'medium',
      time: t('dashboard.alerts.alert2.time'),
    },
    {
      id: 3,
      title: t('dashboard.alerts.alert3.title'),
      store: t('dashboard.alerts.alert3.store'),
      difference: t('dashboard.alerts.alert3.difference'),
      priority: 'high',
      time: t('dashboard.alerts.alert3.time'),
    },
    {
      id: 4,
      title: t('dashboard.alerts.alert4.title'),
      store: t('dashboard.alerts.alert4.store'),
      difference: t('dashboard.alerts.alert4.difference'),
      priority: 'medium',
      time: t('dashboard.alerts.alert4.time'),
    },
    {
      id: 5,
      title: t('dashboard.alerts.alert5.title'),
      store: t('dashboard.alerts.alert5.store'),
      difference: t('dashboard.alerts.alert5.difference'),
      priority: 'low',
      time: t('dashboard.alerts.alert5.time'),
    },
    {
      id: 6,
      title: t('dashboard.alerts.alert6.title'),
      store: t('dashboard.alerts.alert6.store'),
      difference: t('dashboard.alerts.alert6.difference'),
      priority: 'low',
      time: t('dashboard.alerts.alert6.time'),
    },
    {
      id: 7,
      title: t('dashboard.alerts.alert7.title'),
      store: t('dashboard.alerts.alert7.store'),
      difference: t('dashboard.alerts.alert7.difference'),
      priority: 'medium',
      time: t('dashboard.alerts.alert7.time'),
    },
  ]
  
  let filteredAlerts = alerts
  if (priority !== 'all') {
    filteredAlerts = alerts.filter(alert => alert.priority === priority)
  }
  
  if (limit) {
    filteredAlerts = filteredAlerts.slice(0, limit)
  }
  
  return (
    <div className="space-y-4">
      {filteredAlerts.map(alert => (
        <div key={alert.id} className="flex justify-between items-start border-b pb-4">
          <div className="flex gap-3">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              alert.priority === 'high' 
                ? 'bg-destructive/10 text-destructive' 
                : alert.priority === 'medium'
                ? 'bg-orange-500/10 text-orange-500'
                : 'bg-blue-500/10 text-blue-500'
            }`}>
              {alert.priority === 'high' 
                ? <AlertCircle className="h-5 w-5" /> 
                : alert.priority === 'medium'
                ? <AlertTriangle className="h-5 w-5" />
                : <CheckCircle className="h-5 w-5" />
              }
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{alert.title}</h3>
                <Badge variant={
                  alert.priority === 'high' 
                    ? 'destructive' 
                    : alert.priority === 'medium'
                    ? 'default'
                    : 'outline'
                }>
                  {t(`dashboard.alerts.priority.${alert.priority}`)}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {alert.store} · {alert.difference}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {alert.time}
              </div>
            </div>
          </div>
          
          <Button size="sm" variant="outline">{t('dashboard.alerts.takeAction')}</Button>
        </div>
      ))}
    </div>
  )
}