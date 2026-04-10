'use client'

import React, { useState } from 'react'
import StudioCard from './StudioCard'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Loader2, ArrowRight, CheckCircle2 } from 'lucide-react'

interface NewsletterCTAProps {
  variant?: 'full' | 'mini'
}

/**
 * Reusable Newsletter CTA for Insights/Blog areas or Footer.
 * Mapped to Formspree for easy management.
 */
export default function NewsletterCTA({ variant = 'full' }: NewsletterCTAProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID_NewsletterCTA || 'mzdklvvk'

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setIsSuccess(true)
        setEmail('')
        toast.success("Blueprint Incoming! Check your inbox soon.")
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      toast.error("Systems encountered a glitch. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === 'mini') {
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground/30">Newsletter</h4>
          <p className="text-sm font-bold text-primary-foreground/60 leading-snug">Get technical blueprints <br className="hidden xl:block" /> delivered monthly.</p>
        </div>
        
        <form onSubmit={handleSubscribe} className="relative max-w-sm group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting || isSuccess}
            placeholder={isSuccess ? "Subscribed!" : "Your email"}
            className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl pl-5 pr-14 py-3.5 text-xs font-bold outline-none focus:border-accent/40 disabled:opacity-50 transition-all text-primary-foreground placeholder:text-primary-foreground/20"
            aria-label="Email Address"
            required
          />
          <button 
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-accent hover:bg-accent/90 rounded-[10px] text-white font-black uppercase tracking-widest text-[8px] transition-all disabled:opacity-50 flex items-center justify-center min-w-[36px] shadow-lg shadow-accent/10"
          >
            {isSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : isSuccess ? <CheckCircle2 className="w-3.5 h-3.5" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    )
  }

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
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto pt-2 md:pt-4 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting || isSuccess}
            placeholder={isSuccess ? "You're on the list!" : "work@email.com"}
            className="flex-grow bg-secondary/30 border border-border rounded-full px-6 py-3.5 md:py-4 text-xs md:text-sm font-bold outline-none focus:border-accent disabled:opacity-50 transition-all text-center sm:text-left"
            aria-label="Email Address"
            required
          />
          <Button 
            variant="studio-primary"
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="sm:w-auto"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : isSuccess ? "Subscribed" : "Subscribe"}
          </Button>
        </form>
      </StudioCard>
    </div>
  )
}
