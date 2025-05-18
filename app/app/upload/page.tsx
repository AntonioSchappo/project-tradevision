'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { MobileAppHeader } from '@/components/mobile/mobile-app-header'
import { ArrowLeft, Check, Upload as UploadIcon } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function UploadPage() {
  const [uploadStatus, setUploadStatus] = useState<'ready' | 'uploading' | 'processing' | 'complete'>('ready')
  const [progress, setProgress] = useState(0)
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  
  const handleUpload = () => {
    setUploadStatus('uploading')
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploadStatus('processing')
          setTimeout(() => {
            setUploadStatus('complete')
          }, 2000)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }
  
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <div className="p-4 border-b flex justify-between items-center">
        <Link href="/app">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">{t('app.upload.title')}</h1>
        <div className="w-9"></div>
      </div>
      
      <div className="flex-1 p-4 flex flex-col gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="aspect-[4/3] bg-muted rounded-md flex items-center justify-center mb-4">
              {uploadStatus === 'complete' ? (
                <div className="flex flex-col items-center gap-2 text-primary p-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-8 w-8" />
                  </div>
                  <p className="text-center font-medium">{t('app.upload.uploadComplete')}</p>
                </div>
              ) : (
                <div className="text-muted-foreground">
                  <p className="text-center">{t('app.upload.photoPreview')}</p>
                </div>
              )}
            </div>
            
            {uploadStatus === 'ready' && (
              <Button onClick={handleUpload} className="w-full gap-2">
                <UploadIcon className="h-5 w-5" />
                {t('app.upload.uploadButton')}
              </Button>
            )}
            
            {(uploadStatus === 'uploading' || uploadStatus === 'processing') && (
              <div className="space-y-4">
                <Progress value={progress} />
                <p className="text-center text-sm font-medium">
                  {uploadStatus === 'uploading' 
                    ? t('app.upload.uploadingProgress').replace('{progress}', progress.toString())
                    : t('app.upload.processing')}
                </p>
              </div>
            )}
            
            {uploadStatus === 'complete' && (
              <div className="space-y-4">
                <p className="text-center text-sm text-muted-foreground">
                  {t('app.upload.analysisComplete')}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href="/app">
                      {t('app.upload.backToCamera')}
                    </Link>
                  </Button>
                  <Button className="flex-1" asChild>
                    <Link href="/dashboard">
                      {t('app.upload.viewInsights')}
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        {uploadStatus === 'complete' && (
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-2">{t('app.upload.quickAnalysis')}</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">{t('app.upload.productsDetected')}</span>
                  <span className="font-medium">24</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">{t('app.upload.priceDifferences')}</span>
                  <span className="font-medium">7</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">{t('app.upload.potentialIssues')}</span>
                  <span className="font-medium text-destructive">3</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}