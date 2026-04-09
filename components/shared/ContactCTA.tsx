import React from 'react'
import StudioCard from './StudioCard'
import { Button } from '@/components/ui/button'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ContactCTAProps {
  title?: React.ReactNode
  description?: string
  buttonText?: string
  buttonHref?: string
  icon?: LucideIcon
  className?: string
  badge?: string
}

/**
 * Standardized High-Impact Call to Action for bottom of pages.
 */
export default function ContactCTA({
  title = <>Ready to build your <span className="text-accent italic-serif">success story?</span></>,
  description = "Get a clear technical roadmap and fixed-price quote for your product in weeks, not months.",
  buttonText = "Start Project Discovery",
  buttonHref = "/#contact",
  icon: Icon,
  className = "",
  badge,
}: ContactCTAProps) {
  return (
    <div className={`mt-32 md:mt-48 text-center px-4 ${className}`}>
      <StudioCard className="max-w-4xl mx-auto p-12 md:p-20 border-accent/20" innerClassName="space-y-8">
        {badge && (
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2">{badge}</p>
        )}
        
        {Icon && (
           <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto text-accent shadow-2xl shadow-accent/20 mb-8">
              <Icon size={32} />
           </div>
        )}

        <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter italic-serif">
          {title}
        </h2>
        
        <p className="text-lg text-foreground/60 max-w-xl mx-auto font-medium leading-relaxed">
          {description}
        </p>

        <div className="flex justify-center pt-4">
          <Button size="lg" className="rounded-full h-16 px-10 bg-primary hover:opacity-90 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1" asChild>
            <a href={buttonHref} className="flex items-center gap-3">
              {buttonText} <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </StudioCard>
    </div>
  )
}
