'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { PriceHistoryChart } from '@/components/dashboard/price-history-chart'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { Download, Filter, ArrowUpDown } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function InsightsPage() {
  const [productCategory, setProductCategory] = useState('all')
  const [store, setStore] = useState('all')
  const [dateRange, setDateRange] = useState('30d')
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader 
        title={t('dashboard.insightsPage.title')} 
        description={t('dashboard.insightsPage.description')}
      />
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>{t('dashboard.insightsPage.productData.title')}</CardTitle>
          <CardDescription>
            {t('dashboard.insightsPage.productData.description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('dashboard.insightsPage.productData.filters.productCategory')}</label>
                <Select value={productCategory} onValueChange={setProductCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('dashboard.insightsPage.productData.filters.selectCategory')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('dashboard.insightsPage.productData.filters.allCategories')}</SelectItem>
                    <SelectItem value="beverages">{t('dashboard.insightsPage.productData.filters.beverages')}</SelectItem>
                    <SelectItem value="snacks">{t('dashboard.insightsPage.productData.filters.snacks')}</SelectItem>
                    <SelectItem value="dairy">{t('dashboard.insightsPage.productData.filters.dairy')}</SelectItem>
                    <SelectItem value="frozen">{t('dashboard.insightsPage.productData.filters.frozen')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('dashboard.insightsPage.productData.filters.store')}</label>
                <Select value={store} onValueChange={setStore}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('dashboard.insightsPage.productData.filters.selectStore')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('dashboard.insightsPage.productData.filters.allStores')}</SelectItem>
                    <SelectItem value="store1">{t('dashboard.insightsPage.productData.filters.storeOne')}</SelectItem>
                    <SelectItem value="store2">{t('dashboard.insightsPage.productData.filters.storeTwo')}</SelectItem>
                    <SelectItem value="store3">{t('dashboard.insightsPage.productData.filters.storeThree')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('dashboard.insightsPage.productData.filters.dateRange')}</label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('dashboard.insightsPage.productData.filters.selectRange')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">{t('dashboard.insightsPage.productData.filters.last7Days')}</SelectItem>
                    <SelectItem value="30d">{t('dashboard.insightsPage.productData.filters.last30Days')}</SelectItem>
                    <SelectItem value="90d">{t('dashboard.insightsPage.productData.filters.last90Days')}</SelectItem>
                    <SelectItem value="ytd">{t('dashboard.insightsPage.productData.filters.yearToDate')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-end gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">{t('dashboard.insightsPage.productData.buttons.filter')}</span>
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                {t('dashboard.insightsPage.productData.buttons.export')}
              </Button>
            </div>
          </div>
          
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">
                    <div className="flex items-center gap-1 cursor-pointer">
                      {t('dashboard.insightsPage.productData.table.product')}
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>{t('dashboard.insightsPage.productData.table.category')}</TableHead>
                  <TableHead>{t('dashboard.insightsPage.productData.table.store')}</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1 cursor-pointer">
                      {t('dashboard.insightsPage.productData.table.yourPrice')}
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1 cursor-pointer">
                      {t('dashboard.insightsPage.productData.table.competitorPrice')}
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>{t('dashboard.insightsPage.productData.table.priceDifference')}</TableHead>
                  <TableHead>{t('dashboard.insightsPage.productData.table.lastUpdated')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({length: 6}).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{t('dashboard.insightsPage.productData.table.product')} {i+1}</TableCell>
                    <TableCell>{[t('dashboard.insightsPage.productData.filters.beverages'), t('dashboard.insightsPage.productData.filters.snacks'), t('dashboard.insightsPage.productData.filters.dairy'), t('dashboard.insightsPage.productData.filters.frozen')][i % 4]}</TableCell>
                    <TableCell>{t('dashboard.insightsPage.productData.filters.storeOne').replace('Loja ', '')}{(i % 3) + 1}</TableCell>
                    <TableCell>${(4.99 + i * 0.5).toFixed(2)}</TableCell>
                    <TableCell>${(5.29 + i * 0.4).toFixed(2)}</TableCell>
                    <TableCell className={i % 2 === 0 ? "text-green-600" : "text-red-600"}>
                      {i % 2 === 0 ? "+" : "-"}${(0.30 + i * 0.1).toFixed(2)}
                    </TableCell>
                    <TableCell>{`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.insightsPage.priceTrends.title')}</CardTitle>
          <CardDescription>
            {t('dashboard.insightsPage.priceTrends.description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-64">
                <Select defaultValue="product1">
                  <SelectTrigger>
                    <SelectValue placeholder={t('dashboard.insightsPage.priceTrends.selectProduct')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product1">{t('dashboard.insightsPage.productData.table.product')} 1</SelectItem>
                    <SelectItem value="product2">{t('dashboard.insightsPage.productData.table.product')} 2</SelectItem>
                    <SelectItem value="product3">{t('dashboard.insightsPage.productData.table.product')} 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-64">
                <Select defaultValue="store1">
                  <SelectTrigger>
                    <SelectValue placeholder={t('dashboard.insightsPage.priceTrends.selectStore')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="store1">{t('dashboard.insightsPage.productData.filters.storeOne')}</SelectItem>
                    <SelectItem value="store2">{t('dashboard.insightsPage.productData.filters.storeTwo')}</SelectItem>
                    <SelectItem value="store3">{t('dashboard.insightsPage.productData.filters.storeThree')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="h-[400px]">
              <PriceHistoryChart />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}