
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { PricingPlan } from '@/types'
import { ArrowRight, Check, ChevronRight, RefreshCw, ShieldCheck, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import StudioPage from '@/components/layout/StudioPage'
import ContactCTA from '@/components/shared/ContactCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Pricing & Plans | ${siteConfig.companyName}`,
  description: 'Transparent engineering costs for startups. From 2-week MVPs to dedicated monthly support.',
}

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const isCustom = plan.isCustom
  const isMonthly = plan.billing === 'monthly'

  return (
    <StudioCard
      className={`transition-all duration-500 hover:-translate-y-2 group ${plan.popular ? 'border-accent/40 md:scale-105 z-20 shadow-accent/10' : ''}`}
      glowClassName={plan.popular ? 'opacity-10' : 'opacity-0'}
      innerClassName="flex flex-col h-full p-6 sm:p-8"
      showGlow={plan.popular}
    >
      {plan.badge && (
        <div className="absolute top-5 right-5 z-20">
          <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-sm ${plan.popular ? 'bg-accent text-white' : 'bg-primary text-primary-foreground'}`}>
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 mb-1 md:mb-2">
            <h3 className="text-xl md:text-2xl font-black text-primary tracking-tighter uppercase">{plan.name}</h3>
            {isMonthly && <RefreshCw className="w-4 h-4 text-accent animate-spin-slow opacity-60" />}
        </div>
        {plan.tagline && (
            <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] ${plan.popular ? 'text-accent' : 'text-foreground/35'}`}>
                {plan.tagline}
            </p>
        )}
      </div>

      <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border/40">
        {isCustom ? (
          <div>
            <div className="text-2xl md:text-3xl font-black text-primary italic-serif">Let's Talk</div>
            <p className="text-[9px] md:text-[10px] text-foreground/40 mt-1 uppercase font-bold tracking-wider">Custom build · Fixed scope</p>
          </div>
        ) : (
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl md:text-4xl font-black tracking-tighter text-primary">{plan.price}</span>
              {plan.period && <span className="text-[10px] md:text-xs text-foreground/40 font-black uppercase tracking-widest">{plan.period}</span>}
            </div>
            <p className="text-[9px] md:text-[10px] text-foreground/40 mt-1 font-bold uppercase tracking-wider">
              {isMonthly ? 'Cancel anytime' : 'Fixed Project Fee'}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-3.5 mb-6 md:mb-8 flex-grow">
        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] text-foreground/30">Includes:</p>
        <ul className="space-y-3.5 text-xs text-foreground/70">
          {plan.features?.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center ${plan.popular ? 'bg-accent/10 text-accent' : 'bg-secondary/60 text-foreground/40'}`}>
                <Check className="w-3 h-3 stroke-[4]" />
              </div>
              <span className="leading-snug font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto space-y-4">
        <Button
          size="lg"
          className={`w-full h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
            plan.popular ? 'bg-accent hover:opacity-90 text-white shadow-xl shadow-accent/20 hover:-translate-y-0.5' : 
            isCustom ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg' : 
            'bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20'
          }`}
          asChild
        >
          <a href="/#contact" className="flex items-center justify-center gap-2">
            {plan.cta}
            {isCustom ? <ChevronRight className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>
        </Button>
        {plan.trust && (
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary/30 rounded-full">
            <ShieldCheck className="w-3 h-3 text-accent" />
            <span className="text-[9px] text-foreground/40 font-black uppercase tracking-widest leading-none">
              {plan.trust}
            </span>
          </div>
        )}
      </div>
    </StudioCard>
  )
}

const TrustFeature = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <div className="flex items-center gap-4 group cursor-default">
    <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
      <Icon className="w-5 h-5 text-accent" />
    </div>
    <div>
      <h4 className="text-[11px] font-black uppercase tracking-widest text-primary">{title}</h4>
      <p className="text-[10px] text-foreground/40 font-medium tracking-tight whitespace-pre-line">{description}</p>
    </div>
  </div>
)

export default function PricingPage() {
  const { pricing } = siteConfig
  const { plans, description, badge, trustFeatures } = pricing

  return (
    <StudioPage decorColor1="bg-accent/[0.03]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <SectionHeader 
          badge={badge}
          title={<>{pricing.titleHighlighted.main} <br /><span className="text-accent italic-serif">{pricing.titleHighlighted.accent}</span></>}
          description={description}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-24">
          {plans.map((plan: PricingPlan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8 py-8 md:py-10 border-t border-border/40">
          {trustFeatures.map((feature, idx: number) => (
            <TrustFeature 
              key={idx}
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>

        <ContactCTA 
           title={<>Have a unique <br /><span className="text-accent italic-serif">product requirement?</span></>}
           buttonText="Custom Consult"
           className="mt-20 md:mt-40"
        />
      </div>
    </StudioPage>
  )
}
