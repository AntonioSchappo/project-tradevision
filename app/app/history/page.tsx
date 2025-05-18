'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MoreVertical, 
  Trash2, 
  BarChart3, 
  Calendar, 
  ArrowLeft, 
  Search
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function HistoryPage() {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <div className="p-4 border-b flex justify-between items-center">
        <Link href="/app">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">{t('app.history.title')}</h1>
        <Button variant="ghost" size="icon" aria-label={t('app.history.search')}>
          <Search className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4 space-y-4">
        <Tabs defaultValue="all">
          <TabsList className="w-full">
            <TabsTrigger value="all" className="flex-1">{t('app.history.tabs.all')}</TabsTrigger>
            <TabsTrigger value="today" className="flex-1">{t('app.history.tabs.today')}</TabsTrigger>
            <TabsTrigger value="week" className="flex-1">{t('app.history.tabs.week')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4 space-y-4">
            {renderHistoryItems(12)}
          </TabsContent>
          
          <TabsContent value="today" className="mt-4 space-y-4">
            {renderHistoryItems(3)}
          </TabsContent>
          
          <TabsContent value="week" className="mt-4 space-y-4">
            {renderHistoryItems(7)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function renderHistoryItems(count: number) {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  const now = new Date();
  
  return Array.from({ length: count }).map((_, i) => {
    const date = new Date(now);
    date.setHours(date.getHours() - i * 4);
    
    return (
      <Card key={i} className="overflow-hidden">
        <CardContent className="p-3">
          <div className="flex gap-3">
            <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
            
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium truncate">
                    {locale === 'pt-BR' 
                      ? t('app.history.storeShelf')
                          .replace('{store}', t(`dashboard.insightsPage.productData.filters.store${['One', 'Two', 'Three'][i % 3]}`)) 
                          .replace('{number}', String(i + 1))
                      : `${['Store One', 'Store Two', 'Store Three'][i % 3]} Shelf ${i + 1}`
                    }
                  </h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {locale === 'pt-BR' 
                      ? i % 4 === 0 
                        ? t('app.history.locations.aisle').replace('{number}', '3')
                        : t(`app.history.locations.${['aisle', 'beverages', 'checkout', 'dairy'][i % 4]}`)
                      : ['Aisle 3', 'Beverages Section', 'Checkout Area', 'Dairy Section'][i % 4]
                    }
                  </p>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2">
                      <BarChart3 className="h-4 w-4" /> {t('app.history.actions.viewAnalysis')}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-destructive">
                      <Trash2 className="h-4 w-4" /> {t('app.history.actions.delete')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="flex items-center text-xs text-muted-foreground gap-1">
                <Calendar className="h-3 w-3" />
                <span>
                  {date.toLocaleDateString()} {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  });
}