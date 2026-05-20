import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-fira-code'
})

export const metadata: Metadata = {
  title: 'Jordy Alexander Barus | Portfolio',
  description: 'Final-Year Informatics Engineering Student | Web Developer | Mobile Developer | Network Enthusiast. Building modern digital solutions with passion.',
  keywords: ['web developer', 'mobile developer', 'network engineer', 'portfolio', 'informatics engineering', 'Jordy Alexander Barus'],
  authors: [{ name: 'Jordy Alexander Barus' }],
  creator: 'Jordy Alexander Barus',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Jordy Alexander Barus | Portfolio',
    description: 'Final-Year Informatics Engineering Student | Web Developer | Mobile Developer | Network Enthusiast',
    siteName: 'Jordy Alexander Barus Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jordy Alexander Barus | Portfolio',
    description: 'Final-Year Informatics Engineering Student | Web Developer | Mobile Developer | Network Enthusiast',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
