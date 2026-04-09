import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface StudioPageProps {
  children: React.ReactNode
  /** Custom colors or gradients for background circles */
  decorColor1?: string
  decorColor2?: string
  /** Padding-top for the main content (default: pt-24) */
  pt?: string
  className?: string
}

/**
 * Higher-level layout component that ensures visual consistency across sub-pages.
 * Automatically includes Navbar, Footer, and the studio's ambient background decor.
 */
export default function StudioPage({
  children,
  decorColor1 = 'bg-accent/[0.04]',
  decorColor2 = 'bg-primary/[0.02]',
  pt = 'pt-24',
  className = '',
}: StudioPageProps) {
  return (
    <main className={`min-h-screen bg-background flex flex-col ${pt} ${className}`}>
      <Navbar />
      
      {/* Universal Ambient Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-full -z-0">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${decorColor1} rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2`} />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${decorColor2} rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2`} />
      </div>

      <div className="flex-grow relative z-10">
        {children}
      </div>

      <Footer />
    </main>
  )
}
