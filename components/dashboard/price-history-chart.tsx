'use client'

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const data = [
  { date: 'Jan 01', yours: 4.99, competitor: 5.29 },
  { date: 'Jan 15', yours: 4.99, competitor: 5.29 },
  { date: 'Feb 01', yours: 5.29, competitor: 5.29 },
  { date: 'Feb 15', yours: 5.29, competitor: 5.09 },
  { date: 'Mar 01', yours: 5.29, competitor: 4.99 },
  { date: 'Mar 15', yours: 4.99, competitor: 4.99 },
  { date: 'Apr 01', yours: 4.79, competitor: 4.99 },
  { date: 'Apr 15', yours: 4.99, competitor: 5.29 },
]

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              Date
            </span>
            <span className="font-bold text-xs">{label}</span>
          </div>
          {payload.map((item, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                {item.name === 'yours' ? 'Your Price' : 'Competitor Price'}
              </span>
              <span className="font-bold text-xs">${item.value}</span>
            </div>
          ))}
        </div>
        {payload[0]?.value !== payload[1]?.value && (
          <div className="mt-2 text-xs">
            <span className={payload[0]?.value < payload[1]?.value 
              ? "text-green-600 font-medium" 
              : "text-red-600 font-medium"}>
              You are {payload[0]?.value < payload[1]?.value ? 'lower' : 'higher'} by $
              {Math.abs(Number(payload[0]?.value) - Number(payload[1]?.value)).toFixed(2)}
            </span>
          </div>
        )}
      </div>
    )
  }

  return null
}

export function PriceHistoryChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="date" 
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          tickFormatter={(value) => `$${value}`}
          domain={[4.5, 5.5]}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="yours" 
          name="Your Price"
          stroke="hsl(var(--chart-1))" 
          strokeWidth={2}
          dot={{ r: 3 }} 
          activeDot={{ r: 5 }}
        />
        <Line 
          type="monotone" 
          dataKey="competitor" 
          name="Competitor Price"
          stroke="hsl(var(--chart-2))" 
          strokeWidth={2}
          dot={{ r: 3 }} 
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}