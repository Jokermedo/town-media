import { Analytics } from '@vercel/analytics/next'
import { Cairo } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-arabic' })

export const metadata: Metadata = {
  title: 'Town Media — نصنع حضورك بشكل استثنائي',
  description: 'قوالب رقمية مصممة بعناية وخبرة إبداعية تساعد علامتك على أن تُرى وتُفهم وتُتذكر.',
  generator: 'Town Media',
  icons: { icon: '/town-media-logo.png', apple: '/town-media-logo.png' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#070a14',
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl" className="bg-background"><body className={`${cairo.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
