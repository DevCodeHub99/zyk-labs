import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { siteConstants } from '@/config/site'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zyk Labs | Web Development Company Delhi, Custom Software & SaaS India',
  description: 'Top web development company in Delhi NCR. Zyk Labs specializes in custom software development, scalable SaaS products, and eCommerce website development across India.',
  keywords: [
    'web development company Delhi',
    'custom software development India',
    'ecommerce website development Delhi',
    'SaaS development India',
    'Next.js experts India',
    'React development Delhi',
    'website developers Delhi NCR',
    'tech agency Delhi'
  ],
  authors: [{ name: 'Zyk Labs' }],
  creator: 'Zyk Labs',
  metadataBase: new URL('https://zyklabs.in'),
  alternates: {
    canonical: 'https://zyklabs.in',
  },
  openGraph: {
    type: 'website',
    url: 'https://zyklabs.in',
    title: 'Zyk Labs | Custom Software & Web Development Company India',
    description: 'We build fast, scalable web applications and SaaS products for growing businesses. Partner with our dedicated engineering team in Delhi NCR.',
    siteName: 'Zyk Labs',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Zyk Labs - Custom Web & SaaS Solutions OpenGraph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyk Labs | Web Development & SaaS Solutions India',
    description: 'Scalable custom software, SaaS, and eCommerce performance right from Delhi, India.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.svg',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: '#1a3d28',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

const ThemeScript = () => {
  const themeScript = `
    try {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  `
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConstants.name,
    image: 'https://zyklabs.in/zyklabs-logo.svg',
    '@id': 'https://zyklabs.in',
    url: 'https://zyklabs.in',
    email: siteConstants.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi NCR',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6139',
      longitude: '77.2090'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      siteConstants.social.linkedin,
      siteConstants.social.twitter,
      siteConstants.social.github
    ]
  }

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
