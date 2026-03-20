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
  title: 'Zyklabs | MVP Development & Technical Partner for Startups',
  description: 'Zyklabs (Zyk Labs) is a specialized engineering studio helping early-stage founders and SME owners turn ideas into functioning web apps, MVPs, and scalable platforms. Based in Delhi, India.',
  keywords: [
    // Core service keywords
    'MVP development studio India',
    'startup technical partner',
    'custom web application development',
    'SaaS MVP development',
    'e-commerce website development',
    'code rescue and bug fixing',
    'website maintenance service India',

    // Tech stack keywords (what clients search for)
    'Next.js development company',
    'React development studio India',
    'Node.js developer for hire India',
    'MERN stack development',
    'full stack web developer India',
    'TypeScript development services',
    'Tailwind CSS developer',

    // Intent-based / buyer keywords
    'hire dedicated developer India',
    'affordable web app development India',
    'build my startup app India',
    'fix my website bugs',
    'take over existing codebase',
    'freelance web developer Delhi',
    'web development agency Delhi NCR',
    'small business website developer',

    // Outcome-based keywords
    'rapid MVP prototyping',
    'launch MVP in 4 weeks',
    'B2B SaaS development',
    'dedicated engineering team for startups',
    'custom client portal development',
    'internal dashboard development',
    'payment gateway integration India',

    // Brand variants + common misspellings
    'Zyk Labs',
    'zyklabs',
    'Zyklabs',
    'zyklabs.in',
    'Zyklabs.in',
    'zyk lab',
    'zyk labs',
    'zk labs',
    'zky labs',
    'zyklab',
    'zyk',
    'zy labs',
    'zylabs',
    'zyK labs',
    'zykk labs',
    'zyks labs',
    'zik labs',
    'zyk labz',
    'zycklabs',
    'zyc labs',
    'syk labs',
    'zyk-labs',
  ],
  authors: [{ name: 'Zyk Labs', url: 'https://zyklabs.in' }],
  creator: 'Zyk Labs',
  publisher: 'Zyk Labs',
  metadataBase: new URL('https://zyklabs.in'),
  alternates: {
    canonical: 'https://zyklabs.in',
  },
  openGraph: {
    type: 'website',
    url: 'https://zyklabs.in',
    title: 'Zyk Labs | MVP Development & Technical Partner for Startups',
    description: 'Zyklabs builds fast, scalable web apps and MVPs for early-stage founders and SME owners. Transparent pricing, direct developer access, based in Delhi, India.',
    siteName: 'Zyklabs',
    locale: 'en_IN',
    images: [
      {
        url: 'https://zyklabs.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zyklabs - MVP Development & Technical Partner for Startups',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zyklabs',
    creator: '@zyklabs',
    title: 'zyklabs | MVP Development & Technical Partner for Startups',
    description: 'Zyk Labs builds fast, scalable web apps for early-stage founders. Transparent pricing, direct developer access. Based in Delhi, India.',
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

  // Schema 1: Organization (replaces bare LocalBusiness — richer entity for AI search)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://zyklabs.in/#organization',
    name: siteConstants.name,
    url: 'https://zyklabs.in',
    logo: 'https://zyklabs.in/favicon.svg',
    image: 'https://zyklabs.in/og-image.png',
    description: 'Zyklabs is a specialized engineering studio helping early-stage founders and SME owners build custom web apps, MVPs, and scalable platforms.',
    email: siteConstants.email,
    priceRange: '₹₹',
    areaServed: 'IN',
    serviceType: ['MVP Development', 'Custom Web Application Development', 'E-Commerce Development', 'Code Rescue & Tech Support'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6139',
      longitude: '77.2090',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      siteConstants.social.linkedin,
      siteConstants.social.twitter,
      siteConstants.social.instagram,
      siteConstants.social.facebook,
      siteConstants.social.pinterest,
    ],
  }

  // Schema 2: WebSite with SearchAction (enables Google Sitelinks search box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://zyklabs.in/#website',
    url: 'https://zyklabs.in',
    name: siteConstants.name,
    publisher: { '@id': 'https://zyklabs.in/#organization' },
  }

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <meta name="p:domain_verify" content="ae5712bb05b41f6ccc8fc6379fbdefcd"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
