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
    <div className={`mt-20 md:mt-32 lg:mt-48 text-center px-4 ${className}`}>
      <StudioCard className="max-w-4xl mx-auto p-6 md:p-12 lg:p-20 border-accent/20" innerClassName="space-y-6 md:space-y-8">
        {badge && (
           <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-1 md:mb-2">{badge}</p>
        )}
        
        {Icon && (
           <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto text-accent shadow-2xl shadow-accent/20 mb-6 md:mb-8">
              <Icon className="w-8 h-8 md:w-10 md:h-10" />
           </div>
        )}

        <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tighter italic-serif px-2">
          {title}
        </h2>
        
        <p className="text-base md:text-lg text-foreground/60 max-w-xl mx-auto font-medium leading-relaxed px-4">
          {description}
        </p>

        <div className="flex justify-center pt-2 md:pt-4">
          <Button variant="studio-primary" size="lg" asChild>
            <a href={buttonHref} className="flex items-center gap-3">
              {buttonText} <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </StudioCard>
    </div>
  )
}
