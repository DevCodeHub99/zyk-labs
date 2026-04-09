

import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, Users, Clock } from 'lucide-react'

export default function Hero() {
  const { hero } = siteConfig

  return (
    <section className="relative pt-28 pb-12 md:pt-48 md:pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-accent/5 to-transparent blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-card/50 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary shadow-xl shadow-primary/5 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            {hero.badge}
          </div>

          {/* High-Impact Headline */}
          <div className="space-y-6 max-w-5xl">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-primary leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000">
               {hero.title.first} <br />
               {hero.title.second} <span className="text-accent italic-serif">{hero.title.highlight}</span>
            </h1>

            <p className="text-lg md:text-2xl text-foreground/50 max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              {hero.description}
            </p>
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto pt-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <Button asChild size="lg" className="h-16 px-10 rounded-full bg-accent hover:opacity-90 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-accent/20 transition-all hover:-translate-y-1">
              <a href={hero.cta.primary.href} className="flex items-center gap-3">
                {hero.cta.primary.text} <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-16 px-10 rounded-full border border-foreground/10 bg-card/40 backdrop-blur-sm hover:bg-foreground/5 text-foreground font-black uppercase tracking-widest text-xs transition-all hover:-translate-y-1"
            >
              <a href={hero.cta.secondary.href}>
                {hero.cta.secondary.text}
              </a>
            </Button>
          </div>

          {/* Social Proof Stats Row */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center text-[10px] font-black uppercase tracking-[0.25em] text-foreground/30 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-500">
            <div className="flex items-center gap-3 justify-center md:justify-start">
               <Zap className="w-4 h-4 text-accent" /> {siteConfig.global.stats.delivered}
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
               <Shield className="w-4 h-4 text-accent" /> {siteConfig.global.stats.guarantee}
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
               <Users className="w-4 h-4 text-accent" /> {siteConfig.global.stats.satisfaction}
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
               <Clock className="w-4 h-4 text-accent" /> {siteConfig.global.status.availability}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
