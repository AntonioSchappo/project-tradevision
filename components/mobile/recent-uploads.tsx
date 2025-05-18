'use client';

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export function RecentUploads() {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  // Função para traduzir nomes de lojas e localizações
  const translateStoreName = (store: string, location: string) => {
    if (locale === 'pt-BR') {
      // Traduzir nomes das lojas
      let storeTranslation = ''
      if (store === 'Store One') {
        storeTranslation = 'Loja Um'
      } else if (store === 'Store Two') {
        storeTranslation = 'Loja Dois'
      } else if (store === 'Store Three') {
        storeTranslation = 'Loja Três'
      } else {
        storeTranslation = store
      }
      
      const locationKey = location.toLowerCase()
      let locationTranslation = ''
      
      if (locationKey.includes('aisle')) {
        locationTranslation = `${t('app.recentUploads.storeLocations.aisle')} 3`
      } else if (locationKey.includes('beverages')) {
        locationTranslation = t('app.recentUploads.storeLocations.beverages')
      } else if (locationKey.includes('checkout')) {
        locationTranslation = t('app.recentUploads.storeLocations.checkout')
      } else if (locationKey.includes('dairy')) {
        locationTranslation = t('app.recentUploads.storeLocations.dairy')
      }
      
      return `${storeTranslation} - ${locationTranslation}`
    }
    return `${store} - ${location}`
  }
  
  // Função para traduzir datas
  const translateDate = (date: string) => {
    if (locale === 'pt-BR') {
      if (date.startsWith('Today')) {
        return date.replace('Today', t('app.recentUploads.today'))
      } else if (date === 'Yesterday') {
        return t('app.recentUploads.yesterday')
      } else if (date.includes('days ago')) {
        const days = date.split(' ')[0]
        return t('app.recentUploads.daysAgo').replace('{days}', days)
      }
    }
    return date
  }
  
  // Definir os uploads com nomes traduzidos
  const uploads = [
    { id: 1, name: translateStoreName('Store One', 'Aisle 3'), date: translateDate('Today, 2:30 PM'), items: 34, status: locale === 'pt-BR' ? t('app.recentUploads.status') : 'Complete' },
    { id: 2, name: translateStoreName('Store Two', 'Beverages'), date: translateDate('Today, 11:45 AM'), items: 27, status: locale === 'pt-BR' ? t('app.recentUploads.status') : 'Complete' },
    { id: 3, name: translateStoreName('Store Three', 'Checkout'), date: translateDate('Yesterday'), items: 42, status: locale === 'pt-BR' ? t('app.recentUploads.status') : 'Complete' },
    { id: 4, name: translateStoreName('Store One', 'Dairy'), date: translateDate('2 days ago'), items: 19, status: locale === 'pt-BR' ? t('app.recentUploads.status') : 'Complete' },
  ]
  
  return (
    <div className="space-y-4">
      {uploads.map(upload => (
        <div key={upload.id} className="rounded-lg border bg-card overflow-hidden">
          <div className="flex">
            <div className="h-24 w-24 bg-muted"></div>
            <div className="p-3 flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{upload.name}</h3>
                  <p className="text-xs text-muted-foreground">{upload.date}</p>
                </div>
                <Badge variant="outline">{upload.status}</Badge>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  <span className="text-muted-foreground">{t('app.recentUploads.products')}</span> {upload.items}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}