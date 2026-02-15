import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'techbuild-labs - Custom Web & SaaS Solutions',
  description: 'We build fast, scalable web applications and SaaS products for growing businesses. Expert full-stack development, proven results.',
  metadataBase: new URL('https://techbuild.dev'),
  openGraph: {
    type: 'website',
    url: 'https://techbuild.dev',
    title: 'techbuild-labs - Custom Web & SaaS Solutions',
    description: 'We build fast, scalable web applications and SaaS products for growing businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
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
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.className} font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
