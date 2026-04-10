import React from 'react'
import StudioCard from './StudioCard'
import { Button } from '@/components/ui/button'

/**
 * Reusable Newsletter CTA for Insights/Blog areas.
 */
export default function NewsletterCTA() {
  return (
    <div className="mt-20 md:mt-32 px-4">
      <StudioCard className="max-w-4xl mx-auto p-6 md:p-12 lg:p-20 text-center border-accent/20" innerClassName="space-y-6 md:space-y-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-primary tracking-tighter italic-serif px-2">
          Stay ahead of the <br />
          <span className="text-accent italic-serif">Engineering Curve.</span>
        </h2>
        <p className="text-base md:text-lg text-foreground/60 max-w-xl mx-auto font-medium leading-relaxed px-4">
          Get monthly technical blueprints and product strategies delivered directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto pt-2 md:pt-4 w-full">
          <input
            type="email"
            placeholder="work@email.com"
            className="flex-grow bg-secondary/30 border border-border rounded-full px-6 py-3.5 md:py-4 text-xs md:text-sm font-bold outline-none focus:border-accent transition-all text-center sm:text-left"
            aria-label="Email Address"
          />
          <Button className="rounded-full h-12 md:h-14 px-8 bg-primary text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] shadow-xl shadow-primary/20">
            Subscribe
          </Button>
        </div>
      </StudioCard>
    </div>
  )
}
