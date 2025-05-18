'use client'

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, TooltipProps } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

const data = [
  { date: 'Mar 1', yours: 4.99, competitor1: 5.49, competitor2: 5.29 },
  { date: 'Mar 5', yours: 4.99, competitor1: 5.49, competitor2: 5.29 },
  { date: 'Mar 10', yours: 5.29, competitor1: 5.29, competitor2: 5.29 },
  { date: 'Mar 15', yours: 5.29, competitor1: 5.19, competitor2: 5.09 },
  { date: 'Mar 20', yours: 5.29, competitor1: 4.99, competitor2: 5.09 },
  { date: 'Mar 25', yours: 4.99, competitor1: 4.99, competitor2: 4.99 },
  { date: 'Mar 30', yours: 4.79, competitor1: 4.89, competitor2: 4.99 },
  { date: 'Apr 5', yours: 4.79, competitor1: 4.89, competitor2: 4.99 },
  { date: 'Apr 10', yours: 4.79, competitor1: 4.99, competitor2: 5.19 },
  { date: 'Apr 15', yours: 4.99, competitor1: 5.19, competitor2: 5.29 },
]

export function PriceChangesChart() {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  
const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {t('dashboard.chart.date')}
            </span>
            <span className="font-bold text-xs">{label}</span>
          </div>
          {payload.map((item, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                {item.name === 'yours' ? t('dashboard.chart.yourPrice') : 
                 item.name === 'competitor1' ? t('dashboard.chart.competitorA') : t('dashboard.chart.competitorB')}
              </span>
              <span className="font-bold text-xs">${item.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

  
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="date" 
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={(value) => `$${value}`}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            domain={['auto', 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="yours" 
            name={t('dashboard.chart.yourPrice')}
            stroke="hsl(var(--chart-1))" 
            strokeWidth={2}
            dot={{ r: 1 }}
            activeDot={{ r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="competitor1" 
            name={t('dashboard.chart.competitorA')}
            stroke="hsl(var(--chart-2))" 
            strokeWidth={2}
            dot={{ r: 1 }}
            activeDot={{ r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="competitor2" 
            name={t('dashboard.chart.competitorB')}
            stroke="hsl(var(--chart-3))" 
            strokeWidth={2}
            dot={{ r: 1 }} 
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}