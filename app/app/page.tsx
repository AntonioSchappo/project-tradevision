'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CameraIcon, GalleryHorizontalIcon, UploadIcon } from 'lucide-react'
import { MobileAppHeader } from '@/components/mobile/mobile-app-header'
import { CameraView } from '@/components/mobile/camera-view'
import { RecentUploads } from '@/components/mobile/recent-uploads'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function MobileAppPage() {
  const [activeTab, setActiveTab] = useState('camera')
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)
  
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <MobileAppHeader />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-1 flex flex-col">
        <div className="px-4 py-2 border-b">
          <TabsList className="w-full">
            <TabsTrigger value="camera" className="flex-1">{t('app.tabs.camera')}</TabsTrigger>
            <TabsTrigger value="uploads" className="flex-1">{t('app.tabs.uploads')}</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="camera" className="flex-1 flex flex-col m-0 data-[state=active]:flex-1">
          <div className="flex-1 flex items-center justify-center p-4">
            <CameraView />
          </div>
          
          <div className="p-4">
            <Button size="lg" className="w-full gap-2" variant="default">
              <CameraIcon className="h-5 w-5" />
              {locale === 'pt-BR' ? 'Capturar Foto da Prateleira' : 'Capture Shelf Photo'}
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="uploads" className="flex-1 m-0 p-4 data-[state=active]:flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{locale === 'pt-BR' ? 'Uploads Recentes' : 'Recent Uploads'}</h2>
              <Button variant="outline" size="sm">
                <UploadIcon className="h-4 w-4 mr-2" />
                {locale === 'pt-BR' ? 'Upload' : 'Upload'}
              </Button>
            </div>
            
            <RecentUploads />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}