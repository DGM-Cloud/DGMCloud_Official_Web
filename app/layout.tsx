import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GlassCardGlow } from '@/components/ui/glass-card-glow'
import { AuroraBackground } from '@/components/ui/aurora'
import { ScrollProgressBar } from '@/components/ui/scroll-progress'
import { AppProviders } from '@/components/app-providers'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#050505',
}

export const metadata: Metadata = {
  title: 'DGM CLOUD | Elite Software Engineering',
  description: 'Ultra-precision software engineering. Web, Mobile, Inventory Systems. Enterprise-grade solutions for the most demanding projects.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`bg-[#050505] ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased bg-transparent text-foreground">
        <ScrollProgressBar />
        <AuroraBackground />
        <GlassCardGlow />
        <AppProviders>
          <div className="relative z-10">{children}</div>
        </AppProviders>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
