'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export function RecentScans() {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  const storeTranslations: Record<string, string> = {
    'Store One': t('dashboard.insightsPage.productData.filters.storeOne'),
    'Store Two': t('dashboard.insightsPage.productData.filters.storeTwo'),
    'Store Three': t('dashboard.insightsPage.productData.filters.storeThree')
  }
  
  const timeTranslations: Record<string, string> = {
    '2 hours ago': '2 horas atrás',
    '4 hours ago': '4 horas atrás',
    '6 hours ago': '6 horas atrás',
    '1 day ago': '1 dia atrás'
  }
  
  const scans = [
    { id: 1, store: 'Store One', products: 34, issues: 2, time: '2 hours ago', status: 'complete' },
    { id: 2, store: 'Store Two', products: 27, issues: 0, time: '4 hours ago', status: 'complete' },
    { id: 3, store: 'Store Three', products: 42, issues: 5, time: '6 hours ago', status: 'complete' },
    { id: 4, store: 'Store One', products: 19, issues: 1, time: '1 day ago', status: 'complete' },
    { id: 5, store: 'Store Two', products: 31, issues: 3, time: '1 day ago', status: 'complete' },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('dashboard.insightsPage.productData.table.store')}</TableHead>
            <TableHead className="text-right">{t('dashboard.insightsPage.productData.table.product')}s</TableHead>
            <TableHead className="text-right">Problemas</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scans.map((scan) => (
            <TableRow key={scan.id}>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span>{locale === 'pt-BR' ? storeTranslations[scan.store] : scan.store}</span>
                  <span className="text-xs text-muted-foreground">{locale === 'pt-BR' ? timeTranslations[scan.time] : scan.time}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{scan.products}</TableCell>
              <TableCell className="text-right">
                <span className={scan.issues > 0 ? 'text-destructive' : ''}>
                  {scan.issues}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="secondary">{locale === 'pt-BR' ? 'Completo' : scan.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}