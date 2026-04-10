

import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, Users, Clock } from 'lucide-react'

export default function Hero() {
  const { hero } = siteConfig

  return (
    <section className="relative pt-24 sm:pt-36 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-accent/5 to-transparent blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-card/50 backdrop-blur-md px-4 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary shadow-xl shadow-primary/5 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            {hero.badge}
          </div>

          {/* High-Impact Headline */}
          <div className="space-y-4 sm:space-y-6 max-w-5xl">
            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-[0.01em] sm:tracking-tighter text-primary leading-[1.05] sm:leading-[1] md:leading-[0.85] animate-in fade-in slide-in-from-bottom-4 duration-500">
               {hero.title.first} <br />
               {hero.title.second} <span className="text-accent italic-serif">{hero.title.highlight}</span>
            </h1>

            <p className="text-sm sm:text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-medium px-4 md:px-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              {hero.description}
            </p>
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-md mx-auto pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <Button asChild size="lg" variant="studio-accent" showGlow>
              <a href={hero.cta.primary.href} className="flex items-center gap-3">
                {hero.cta.primary.text} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="studio-glass"
            >
              <a href={hero.cta.secondary.href}>
                {hero.cta.secondary.text}
              </a>
            </Button>
          </div>

          {/* Social Proof Stats Row */}
          <div className="pt-12 md:pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16 items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-foreground/30 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-500">
            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
               <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" /> {siteConfig.global.stats.delivered}
            </div>
            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
               <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" /> {siteConfig.global.stats.guarantee}
            </div>
            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
               <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" /> {siteConfig.global.stats.satisfaction}
            </div>
            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
               <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" /> {siteConfig.global.status.availability}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
