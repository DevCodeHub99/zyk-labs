
import { siteConfig } from '@/config/site'
import StudioCard from '@/components/shared/StudioCard'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

export default function PricingTeaser() {
  const { pricing } = siteConfig
  const buildPlan = pricing.plans.find(p => p.name === 'Build')

  if (!buildPlan) return null

  return (
    <section className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground/50">{pricing.badge}</span>
            </div>
            
            <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tighter leading-[1.1]">
              Engineering that <br />
              <span className="text-accent italic-serif">Fits Your Budget.</span>
            </h2>
            
            <p className="text-base md:text-xl text-foreground/60 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Transparent project fees and monthly support tiers designed for early-stage founders. No hidden costs, just precise execution.
            </p>

             <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 text-center lg:text-left">
                <Button variant="studio-primary" size="lg" asChild>
                   <a href="/pricing">View All Plans & Breakdown</a>
                </Button>
             </div>
          </div>

          {/* Highlighted Plan Card */}
          <div className="lg:w-1/2 w-full max-w-md">
            <StudioCard 
              className="border-accent/30 shadow-2xl shadow-accent/5 p-8 md:p-10 relative overflow-hidden" 
              glowClassName="opacity-20"
              showGlow
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-2 block">{buildPlan.tagline}</span>
                   <h3 className="text-3xl font-black text-primary tracking-tighter uppercase">{buildPlan.name}</h3>
                </div>
                <div className="bg-accent text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                   {buildPlan.badge}
                </div>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter text-primary">{buildPlan.price}</span>
                  <span className="text-xs text-foreground/40 font-black uppercase tracking-widest">{buildPlan.period}</span>
                </div>
                <p className="text-[10px] text-foreground/40 mt-1 font-bold uppercase tracking-wider">Most popular for new SaaS products</p>
              </div>

              <ul className="space-y-4 mb-10">
                {buildPlan.features.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-medium text-foreground/70">
                    <Check className="w-4 h-4 text-accent stroke-[4]" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant="studio-accent" size="lg" asChild>
                <a href="/pricing" className="flex items-center justify-center gap-3">
                  Check Coverage <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </StudioCard>
          </div>

        </div>
      </div>
    </section>
  )
}
