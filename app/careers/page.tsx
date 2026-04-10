
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'
import StudioPage from '@/components/layout/StudioPage'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, CheckCircle2, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: `Careers | ${siteConfig.companyName}`,
  description: siteConfig.careers.description,
}

export default function CareersPage() {
  const { careers } = siteConfig

  return (
    <StudioPage decorColor1="bg-accent/[0.03]" decorColor2="bg-primary/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        {/* Mission Hero */}
        <SectionHeader 
          badge={<div className="flex items-center gap-2"><Sparkles size={12} className="text-accent" /> {careers.badge}</div>}
          badgeClassName="bg-secondary/40 border-border/50 text-foreground/70"
          title={<>{careers.title.split(' ').slice(0, -1).join(' ')} <span className="text-accent italic-serif">{careers.title.split(' ').slice(-1)}</span></>}
          description={careers.description}
        />

        {/* Roles Section */}
        <div className="mt-4 md:mt-8 space-y-16">
            
            <div className="space-y-8">
                {careers.openings.map((role) => (
                    <StudioCard key={role.title} className="p-8 md:p-12 border-border/40 group hover:border-accent/30 transition-colors" innerClassName="flex flex-col lg:flex-row gap-10 lg:gap-20">
                        <div className="flex-1 space-y-8">
                            <div className="space-y-6">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-3 py-1 bg-accent/5 text-accent text-[9px] font-black uppercase tracking-widest rounded-full border border-accent/10">{role.badge}</span>
                                    <span className="px-3 py-1 bg-secondary/30 text-foreground/40 text-[9px] font-black uppercase tracking-widest rounded-full">{role.type}</span>
                                    {role.remote && <span className="px-3 py-1 bg-emerald-500/5 text-emerald-500 text-[9px] font-black uppercase tracking-widest rounded-full border border-emerald-500/10">Remote</span>}
                                </div>
                                
                                <div className="space-y-3">
                                    <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-none italic-serif">{role.title}</h3>
                                    <p className="text-accent text-xs md:text-sm font-black uppercase tracking-widest">{role.tagline}</p>
                                </div>

                                <p className="text-base md:text-lg text-foreground/60 font-medium leading-relaxed max-w-3xl">
                                    {role.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 border-b border-border/50 pb-2 inline-block">Requirements</h4>
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                    {role.requirements.map(req => (
                                        <div key={req} className="flex items-start gap-3 text-sm md:text-base text-foreground/70 font-medium">
                                            <Sparkles size={16} className="text-accent mt-1 shrink-0" />
                                            {req}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-64 shrink-0 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/50 pt-8 lg:pt-0 lg:pl-12">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-foreground/30">Apply for this role</p>
                                    <a 
                                        href={`mailto:${careers.contact.email}?subject=Application: ${role.title}`}
                                        className="text-xl md:text-2xl font-black text-accent hover:text-primary transition-colors block leading-tight lowercase"
                                    >
                                        {careers.contact.email}
                                    </a>
                                </div>
                                <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-wider">Send us your pitch, portfolio & resume.</p>
                                <Button variant="studio-outline" size="sm" className="w-full mt-4" asChild>
                                    <a href={`mailto:${careers.contact.email}?subject=Application: ${role.title}`}>
                                        Open Mail Client <ArrowRight size={14} className="ml-2" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </StudioCard>
                ))}
            </div>
        </div>
        {/* Anti-Boring CV Block */}
        <div className="mt-10 mb-20 md:mb-40 bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-24 border border-border/10 relative overflow-hidden text-center shadow-2xl transition-colors">
            <div className="space-y-8 max-w-3xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none italic-serif">
                    Don't send a <br />
                    <span>boring CV.</span>
                </h2>
                
                <p className="text-sm md:text-xl opacity-70 font-medium leading-relaxed">
                    We care about what you've built and how you think. Mail us at{' '}
                    <a href={`mailto:${careers.contact.email}`} className="text-accent hover:underline decoration-2 underline-offset-4 font-black transition-colors">
                        {careers.contact.email}
                    </a>{' '}
                    with your Portfolio, Resume, and a short pitch on <span className="italic font-black text-accent px-2 py-0.5 rounded-sm transition-colors">why you think you're a fit</span> for the Zyklabs mission. Keep it real. We'll get back to you in 48 hours.
                </p>

                <div className="pt-6">
                    <Button variant="studio-accent" size="lg" className="px-12" asChild>
                        <a href={`mailto:${careers.contact.email}?subject=Not a Boring CV: Application`}>
                            Let's Talk
                        </a>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </StudioPage>
  )
}
