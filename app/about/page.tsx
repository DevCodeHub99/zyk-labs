
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { Metadata } from 'next'
import Image from 'next/image'
import { Code2, Users, Rocket, Heart } from 'lucide-react'
import StudioPage from '@/components/layout/StudioPage'
import ContactCTA from '@/components/shared/ContactCTA'

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.companyName}`,
  description: siteConfig.team.description,
}

export default function AboutPage() {
  const { team } = siteConfig
  const { members, about } = team

  return (
    <StudioPage>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-40">
            <div className="space-y-6 md:space-y-8">
                <SectionHeader 
                    asH1
                    badge="Our Story"
                    title={<>High-Performance Engineering for <span className="text-accent italic-serif">Human Ideas.</span></>}
                    description={`${siteConfig.companyName} was founded to bridge the gap between expensive agencies and unreliable freelance markets.`}
                    align="left"
                    className="mb-0"
                />
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-foreground/60 font-medium leading-relaxed">
                    {about.content.map((p: string, i: number) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
                <div className="flex gap-8 md:gap-12 pt-2 md:pt-4">
                    {about.stats.map((stat: { value: string; label: string }) => (
                        <div key={stat.label}>
                            <p className="text-3xl md:text-4xl font-black text-primary tracking-tighter">{stat.value}</p>
                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-accent">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative">
                <div className="aspect-square rounded-[2.5rem] md:rounded-[4rem] bg-secondary/50 border border-border/50 overflow-hidden flex items-center justify-center p-8 md:p-12">
                   <div className="grid grid-cols-2 gap-3 md:gap-4 w-full h-full">
                      <div className="rounded-2xl md:rounded-3xl bg-accent/20 flex items-center justify-center text-accent"><Code2 className="w-8 h-8 md:w-16 md:h-16"/></div>
                      <div className="rounded-2xl md:rounded-3xl bg-primary/10 flex items-center justify-center text-primary"><Users className="w-8 h-8 md:w-16 md:h-16"/></div>
                      <div className="rounded-2xl md:rounded-3xl bg-secondary/50 flex items-center justify-center text-foreground/20"><Rocket className="w-8 h-8 md:w-16 md:h-16"/></div>
                      <div className="rounded-2xl md:rounded-3xl bg-accent flex items-center justify-center text-white shadow-2xl shadow-accent/20"><Heart className="w-8 h-8 md:w-16 md:h-16"/></div>
                   </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-primary text-white shadow-2xl space-y-1 md:space-y-2">
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none">Studio Focus</p>
                    <p className="font-black text-lg md:text-xl italic-serif leading-none">Founder-Led.</p>
                </div>
            </div>
        </div>

        {/* Team Section */}
        <div className="space-y-10 md:space-y-16">
            <div className="text-center space-y-3 md:space-y-4">
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent">Technical Leadership</p>
                <h2 className="text-3xl md:text-7xl font-black text-primary tracking-tighter uppercase italic-serif">Meet the Studio.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {members.map((member) => (
                    <StudioCard key={member.name} className="p-0 overflow-hidden" innerClassName="flex flex-col h-full">
                        <div className="p-6 md:p-12 space-y-6 md:space-y-8 flex-grow">
                            <div className="flex justify-between items-start">
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl ${member.bg} relative overflow-hidden flex items-center justify-center text-white text-2xl md:text-3xl font-black shadow-xl border-2 md:border-4 border-background`}>
                                    {member.image ? (
                                        <Image 
                                            src={member.image} 
                                            alt={member.name} 
                                            fill 
                                            className="object-cover"
                                        />
                                    ) : (
                                        member.initials
                                    )}
                                </div>
                                <div className="flex gap-2 md:gap-3">
                                    {member.social.map((s, i: number) => {
                                        const Icon = s.icon
                                        return (
                                            <a key={i} href={s.href} target="_blank" className="p-2 rounded-xl hover:bg-secondary transition-colors">
                                                <Icon size={16} className="text-primary/40" />
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                            
                            <div className="space-y-1 md:space-y-2">
                                <h3 className="text-2xl md:text-3xl font-black text-primary tracking-tight italic-serif">{member.name}</h3>
                                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-accent">{member.role}</p>
                            </div>

                            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-medium">
                                {member.bio}
                            </p>
                        </div>
                        
                        <div className="px-6 md:px-8 py-4 md:py-6 bg-secondary/30 border-t border-border/50 flex items-center justify-between">
                             <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-foreground/30">Available for Roadmap Discovery</span>
                             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                    </StudioCard>
                ))}
            </div>
        </div>

        {/* Culture / Values */}
        <div className="mt-24 md:mt-40 grid md:grid-cols-3 gap-6 md:gap-8 border-t border-border/50 pt-16 md:pt-24">
            {[
                { title: 'Zero Jargon', desc: 'We speak the language of business and outcomes. We explain complex technical decisions clearly so you can make informed choices.' },
                { title: 'Ownership Mindset', desc: 'We don\'t just write code; we partner on your product vision. We challenge unnecessary features to protect your budget.' },
                { title: 'Rapid Velocity', desc: 'Our studio is built for founders who need to move fast. Most builds are production-ready within 45 days.' }
            ].map(item => (
                <div key={item.title} className="space-y-3 p-6 md:p-8">
                     <h4 className="text-lg md:text-xl font-black uppercase tracking-widest text-primary italic-serif">{item.title}</h4>
                     <p className="text-xs md:text-sm text-foreground/60 font-medium leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>

        <ContactCTA 
          title="Start Project Partnership"
          className="mt-24 md:mt-40"
        />
      </div>
    </StudioPage>
  )
}
