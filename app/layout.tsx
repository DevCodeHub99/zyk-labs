import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { siteConstants } from '@/config/site'
import HoliOverlay from '@/components/shared/HoliOverlay'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zyk Labs | Web Development Company Delhi, Custom Software & SaaS India',
  description: 'Top web development company in Delhi NCR. Zyk Labs specializes in custom software development, scalable SaaS products, and eCommerce website development across India.',
  keywords: [
    // Location-based
    'web development company Delhi',
    'website developers Delhi NCR',
    'software development company India',
    'tech agency Delhi',
    'IT company near me Delhi',
    'web developers near me',

    // Core services
    'custom software development India',
    'custom web application development',
    'SaaS development India',
    'SaaS product development company',
    'ecommerce website development Delhi',
    'online store development India',
    'mobile app development Delhi',
    'Android iOS app developer India',
    'React Native app development',
    'cloud backend engineering India',
    'API development services',

    // Technology stack
    'Next.js development company India',
    'React development Delhi',
    'Node.js developers India',
    'TypeScript development services',
    'full stack developer India',
    'MERN stack development Delhi',

    // UI/UX & Design
    'UI UX design agency Delhi',
    'website redesign services India',

    // Digital marketing & SEO
    'SEO services Delhi',
    'digital marketing agency India',
    'website speed optimization',

    // User-intent / commercial
    'hire web developers India',
    'best web development company India',
    'affordable website development Delhi',
    'startup web development India',
    'small business website Delhi',
    'freelance web developer Delhi NCR',
    'MVP development company India',
    'website maintenance and support India',

    // Industry verticals
    'ecommerce solutions India',
    'fintech software development',
    'healthcare app development India',
    'education platform development',

    // Brand
    'Zyk Labs',
    'zyklabs',
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
        url: 'https://zyklabs.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zyk Labs - Custom Web & SaaS Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyk Labs | Web Development & SaaS Solutions India',
    description: 'Scalable custom software, SaaS, and eCommerce performance right from Delhi, India.',
    images: ['https://zyklabs.in/og-image.png'],
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
      siteConstants.social.twitter
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
        <HoliOverlay />
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
