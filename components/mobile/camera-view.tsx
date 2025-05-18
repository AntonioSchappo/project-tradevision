'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MoveHorizontal, Maximize, ZoomIn } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export function CameraView() {
  const [isGuideVisible, setIsGuideVisible] = useState(true)
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  
  return (
    <div className="relative w-full rounded-lg overflow-hidden border">
      <div className="aspect-[4/3] bg-muted overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted-foreground p-4 text-center">
            {t('app.cameraView.preview')}<br />
            {t('app.cameraView.instruction')}
          </p>
        </div>
        
        {isGuideVisible && (
          <div className="absolute inset-0 border-2 border-dashed border-primary/50 m-8 rounded">
            <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary"></div>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-4 right-4 left-4 flex justify-between">
        <div className="flex gap-2">
          <Button size="icon" variant="secondary" className="backdrop-blur-md bg-background/70" onClick={() => setIsGuideVisible(!isGuideVisible)}>
            <Maximize className="h-4 w-4" aria-label={t('app.cameraView.guide')} />
          </Button>
          <Button size="icon" variant="secondary" className="backdrop-blur-md bg-background/70">
            <ZoomIn className="h-4 w-4" aria-label={t('app.cameraView.zoom')} />
          </Button>
        </div>
        
        <Button size="icon" variant="secondary" className="backdrop-blur-md bg-background/70">
          <MoveHorizontal className="h-4 w-4" aria-label={t('app.cameraView.rotate')} />
        </Button>
      </div>
    </div>
  )
}