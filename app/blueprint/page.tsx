
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { ArrowRight, ShieldCheck, MessageSquare, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import StudioPage from '@/components/layout/StudioPage'
import ContactCTA from '@/components/shared/ContactCTA'

export const metadata: Metadata = {
  title: `The Blueprint | ${siteConfig.companyName}`,
  description: 'Our high-velocity engineering process designed to get founders from idea to ship in 4-6 weeks.',
}

export default function BlueprintPage() {
  const { process } = siteConfig
  const { steps } = process

  return (
    <StudioPage decorColor1="bg-accent/[0.03]" decorColor2="bg-primary/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <SectionHeader 
          badge={process.badge}
          title={<>The Production <span className="text-accent italic-serif">Engine.</span></>}
          description="A high-velocity, low-friction production system engineered to eliminate technical debt and maximize shipping speed."
        />

        {/* Timeline Visualization */}
        <div className="mt-16 md:mt-24 space-y-12 md:space-y-32">
          {steps.map((step, index: number) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div key={step.number} className={`flex flex-col md:flex-row items-center gap-10 lg:gap-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual Side */}
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] md:rounded-[4rem] bg-secondary/30 border border-border/50 overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 group-hover:scale-110 transition-transform duration-700" />
                        <div className="text-[8rem] md:text-[12rem] font-black text-primary/5 absolute -top-6 -left-6 md:-top-10 md:-left-10 select-none">
                            {step.number}
                        </div>
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl md:rounded-[2.5rem] bg-accent flex items-center justify-center text-white shadow-2xl shadow-accent/20 relative z-10 animate-in fade-in zoom-in duration-700">
                            <Icon className="w-10 h-10 md:w-12 md:h-12" />
                        </div>
                        
                        {/* Detail Mockup suggestions */}
                        <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 h-16 md:h-20 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center px-6 md:px-8 gap-3 md:gap-4 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent"><ShieldCheck size={14}/></div>
                             <div className="flex-1 space-y-1">
                                <div className="w-1/2 h-1.5 md:h-2 bg-white/20 rounded-full" />
                                <div className="w-1/3 h-1 bg-white/10 rounded-full" />
                             </div>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
                     <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-accent">Phase {step.number}</span>
                        <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-[1.1] md:leading-none italic-serif">
                            {step.title}
                        </h2>
                        <div className="h-1 w-16 md:w-24 bg-accent rounded-full" />
                     </div>

                     <p className="text-base md:text-xl text-foreground/70 leading-relaxed font-medium">
                        {step.description} At this stage, we focus on {step.title.toLowerCase()} to ensure your product has a solid architectural foundation.
                     </p>

                     <div className="grid grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4 max-w-sm mx-auto md:mx-0">
                        {[
                            { label: 'Primary Focus', val: step.title },
                            { label: 'Response Target', val: '48hr' }
                        ].map(stat => (
                            <div key={stat.label} className="space-y-1">
                                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-foreground/40">{stat.label}</p>
                                <p className="text-xs md:text-sm font-black text-primary uppercase">{stat.val}</p>
                            </div>
                        ))}
                     </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Operational Excellence Section */}
        <div className="mt-24 md:mt-48 pt-16 md:pt-32 border-t border-border/50">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                {[
                    { title: 'Direct Access', icon: MessageSquare, desc: 'Zero project managers. You speak directly to the engineers building your product via shared Slack channels.' },
                    { title: 'Bi-Weekly Sprints', icon: Zap, desc: 'We ship production code every 2 weeks. You see progress in real-time on a staging environment.' },
                    { title: 'Code Ownership', icon: ShieldCheck, desc: 'You own every line of code from day one. We hand over the full repository at launch.' }
                ].map((feature) => (
                    <StudioCard key={feature.title} className="p-8 md:p-10" innerClassName="space-y-4 md:space-y-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center text-emerald-400">
                            <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <h4 className="text-lg md:text-xl font-black uppercase tracking-widest text-primary italic-serif">{feature.title}</h4>
                        <p className="text-xs md:text-sm text-foreground/60 font-medium leading-relaxed">{feature.desc}</p>
                    </StudioCard>
                ))}
            </div>
        </div>

        <ContactCTA 
          title={<>Ready to run your <br /><span className="text-accent italic-serif">First Sprint?</span></>}
          description="Most builds are scoped and started within 72 hours of our discovery call."
          buttonText="Book Discovery Call"
          className="mt-24 md:mt-40"
        />
        
        <div className="mt-8 text-center pb-16 md:pb-20">
            <Button size="lg" variant="ghost" className="rounded-full h-14 md:h-16 px-10 border border-border text-[10px] font-black uppercase tracking-widest hover:bg-secondary" asChild>
                <a href="/estimate">Run Cost Estimator <ArrowRight size={14} className="ml-2" /></a>
            </Button>
        </div>
      </div>
    </StudioPage>
  )
}
