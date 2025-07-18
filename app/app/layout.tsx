import { MobileAppNav } from '@/components/mobile/mobile-app-nav'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {children}
      </main>
      <MobileAppNav />
    </div>
  )
}