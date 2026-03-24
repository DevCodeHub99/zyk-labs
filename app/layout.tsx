import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { siteConstants } from '@/config/site'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// ─────────────────────────────────────────────
// PAGE METADATA
// Goal: speak to a founder/SME owner who is
//       frustrated, short on time, and ready
//       to pay — NOT a developer browsing docs.
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Title ──────────────────────────────────
  // Formula: [What you get] | [Who we are]
  // Under 60 chars. Outcome first, brand second.
  title: {
    default: 'Zyklabs — Turn Your Idea Into a Working App, Fast',
    template: '%s | Zyklabs',
  },

  // ── Description ────────────────────────────
  // 150–155 chars. One job: make them click.
  // Speak to the pain → solution → proof of trust.
  description:
    'Stuck with a half-built app or a new idea you need live? Zyklabs builds web apps and MVPs for founders in 4–6 weeks. Fixed price. Real developers. Based in New Delhi.',

  // ── Keywords ───────────────────────────────
  // Google ignores meta keywords for ranking.
  // Keep only for Bing and minor engines.
  // 10–15 tightly relevant phrases — no fluff, no misspellings.
  keywords: [
    'MVP development India',
    'web app development Delhi',
    'startup app builder India',
    'Next.js development company India',
    'custom web application development',
    'SaaS MVP development',
    'e-commerce website development India',
    'fix broken website India',
    'hire web developer New Delhi',
    'affordable full stack developer India',
    'launch startup app fast',
    'Zyklabs',
  ],

  // ── Authorship & Publisher ─────────────────
  authors: [{ name: 'Zyklabs', url: 'https://zyklabs.in' }],
  creator: 'Zyklabs',
  publisher: 'Zyklabs',

  // ── Canonical & Base ───────────────────────
  metadataBase: new URL('https://zyklabs.in'),
  alternates: {
    canonical: 'https://zyklabs.in',
    // Add hreflang if you ever add Hindi pages:
    // languages: { 'hi-IN': 'https://zyklabs.in/hi' },
  },

  // ── Open Graph ─────────────────────────────
  // This is what WhatsApp, LinkedIn, Facebook show.
  // Founders share links in chats — make this count.
  openGraph: {
    type: 'website',
    url: 'https://zyklabs.in',
    siteName: 'Zyklabs',
    locale: 'en_IN',
    title: 'Zyklabs — Your App, Built & Live in 4–6 Weeks',
    description:
      'We build web apps, MVPs, and online stores for founders who need things done. Fixed pricing, direct developer access, no middlemen. New Delhi, India.',
    images: [
      {
        url: 'https://zyklabs.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zyklabs — Web App & MVP Development Studio, New Delhi',
        type: 'image/png',
      },
    ],
  },

  // ── Twitter / X Card ───────────────────────
  // Use a punchy one-liner. Twitter audiences scroll fast.
  twitter: {
    card: 'summary_large_image',
    site: '@zyklabs',
    creator: '@zyklabs',
    title: 'Zyklabs — We Build Your App So You Can Ship Fast',
    description:
      'Got an idea or a broken build? We turn it into a working product in weeks — fixed price, real devs, zero fluff. Talk to us today.',
    images: ['https://zyklabs.in/og-image.png'],
  },

  // ── Favicons ───────────────────────────────
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',

  // ── Robots ─────────────────────────────────
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

  // ── App-specific ───────────────────────────
  applicationName: 'Zyklabs',
  category: 'technology',
  // Helps Google understand this is a business, not a personal blog
  classification: 'Web App Development Studio',
}

// ─────────────────────────────────────────────
// VIEWPORT & THEME
// ─────────────────────────────────────────────
export const viewport = {
  themeColor: '#1a3d28',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

// ─────────────────────────────────────────────
// THEME SCRIPT (prevents flash of unstyled theme)
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  // ── Schema 1: Organization ─────────────────
  // Richer than LocalBusiness for an engineering studio.
  // 'hasOfferCatalog' is understood by Google & AI search (SGE/Perplexity).
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://zyklabs.in/#organization',
    name: siteConstants.name,
    url: 'https://zyklabs.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://zyklabs.in/favicon/favicon-32x32.png',
    },
    image: 'https://zyklabs.in/og-image.png',
    description:
      'Zyklabs is a web app and MVP development studio helping founders and small business owners go from idea to a live, working product — in weeks, not months.',
    email: siteConstants.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Bank Transfer, UPI',
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'City', name: 'New Delhi' },
    ],
    // hasOfferCatalog is far richer than serviceType strings —
    // it powers Google's AI Overviews and service cards.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MVP Development',
            description:
              'We build your minimum viable product from scratch — designed, coded, and deployed — so you can test with real users fast.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web Application Development',
            description:
              'Bespoke web apps built with Next.js, React, and Node.js — tailored to your business logic and workflows.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Commerce Store Development',
            description:
              'Fast, conversion-optimised online stores built for Indian and global markets.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Code Rescue & Website Fixes',
            description:
              'Stuck with a broken site or inherited a messy codebase? We diagnose, fix, and stabilise your project.',
          },
        },
      ],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'DL',
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
    ].filter(Boolean),
  }

  // ── Schema 2: WebSite ──────────────────────
  // Enables Google Sitelinks search box in brand searches.
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://zyklabs.in/#website',
    url: 'https://zyklabs.in',
    name: siteConstants.name,
    description: 'Web app and MVP development studio based in New Delhi, India.',
    publisher: { '@id': 'https://zyklabs.in/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://zyklabs.in/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // ── Schema 3: FAQ ──────────────────────────
  // This is the highest-ROI schema for conversion.
  // FAQ rich results appear directly in Google SERPs —
  // more screen real estate = more clicks = more leads.
  // Match these Q&As to what your actual customers ask.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to build an MVP with Zyklabs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most MVPs take 4–6 weeks from kickoff to deployment. The exact timeline depends on the scope — we discuss this in detail during your free discovery call.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to build a web app with Zyklabs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer fixed-price project packages so you always know what you\'re paying. Pricing depends on the type of app — MVPs, e-commerce stores, and custom platforms each have different scopes. Book a call and we\'ll give you a clear number.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Zyklabs take over my existing broken or half-built project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. This is one of our most common projects — we call it Code Rescue. We audit your existing codebase, identify what\'s salvageable, fix bugs, and get your project stable and moving forward.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I get direct access to the developer, or is there a project manager in between?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You talk directly to the developer building your product — no account managers, no handoffs. This is intentional; it keeps communication clear and fast.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Zyklabs based in India? Can you work with clients outside India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are based in New Delhi, India. We work with clients across India and internationally — communication happens over video calls, WhatsApp, and email, so location is never a barrier.',
        },
      },
    ],
  }

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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