
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { Github, Linkedin, Twitter, Instagram, ArrowRight, Code2, Users, Rocket, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.companyName}`,
  description: siteConfig.team.description,
}

export default function AboutPage() {
  const { team } = siteConfig
  const { members, about } = team

  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-full">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/[0.04] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 relative z-10">
        
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40">
            <div className="space-y-8">
                <SectionHeader 
                    badge="Our Story"
                    title={<>High-Performance Engineering for <span className="text-accent italic-serif">Human Ideas.</span></>}
                    description={`${siteConfig.companyName} was founded to bridge the gap between expensive agencies and unreliable freelance markets.`}
                    align="left"
                    className="mb-0"
                />
                <div className="space-y-6 text-lg text-foreground/70 font-medium leading-relaxed">
                    {about.content.map((p: string, i: number) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
                <div className="flex gap-12 pt-4">
                    {about.stats.map((stat: { value: string; label: string }) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-black text-primary tracking-tighter">{stat.value}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-accent">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative">
                <div className="aspect-square rounded-[4rem] bg-secondary/50 border border-border/50 overflow-hidden flex items-center justify-center p-12">
                   <div className="grid grid-cols-2 gap-4 w-full h-full">
                      <div className="rounded-3xl bg-accent/20 flex items-center justify-center text-accent"><Code2 size={64}/></div>
                      <div className="rounded-3xl bg-primary/10 flex items-center justify-center text-primary"><Users size={64}/></div>
                      <div className="rounded-3xl bg-secondary/50 flex items-center justify-center text-foreground/20"><Rocket size={64}/></div>
                      <div className="rounded-3xl bg-accent flex items-center justify-center text-white shadow-2xl shadow-accent/20"><Heart size={64}/></div>
                   </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 p-8 rounded-3xl bg-primary text-white shadow-2xl space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest">Studio Focus</p>
                    <p className="font-black text-xl italic-serif">Founder-Led.</p>
                </div>
            </div>
        </div>

        {/* Team Section */}
        <div className="space-y-16">
            <div className="text-center space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Technical Leadership</p>
                <h2 className="text-4xl md:text-7xl font-black text-primary tracking-tighter uppercase italic-serif">Meet the Studio.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {members.map((member) => (
                    <StudioCard key={member.name} className="p-0 overflow-hidden" innerClassName="flex flex-col">
                        <div className="p-8 md:p-12 space-y-8 flex-grow">
                            <div className="flex justify-between items-start">
                                <div className={`w-20 h-20 rounded-3xl ${member.bg} relative overflow-hidden flex items-center justify-center text-white text-3xl font-black shadow-xl border-4 border-background`}>
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
                                <div className="flex gap-3">
                                    {member.social.map((s, i: number) => {
                                        const Icon = s.icon
                                        return (
                                            <a key={i} href={s.href} target="_blank" className="p-2 rounded-xl hover:bg-secondary transition-colors">
                                                <Icon size={18} className="text-primary/40" />
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <h3 className="text-3xl font-black text-primary tracking-tight italic-serif">{member.name}</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-accent">{member.role}</p>
                            </div>

                            <p className="text-foreground/60 leading-relaxed font-medium">
                                {member.bio}
                            </p>
                        </div>
                        
                        <div className="px-8 py-6 bg-secondary/30 border-t border-border/50 flex items-center justify-between">
                             <span className="text-[9px] font-black uppercase tracking-widest text-foreground/30">Available for Roadmap Discovery</span>
                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                    </StudioCard>
                ))}
            </div>
        </div>

        {/* Culture / Values */}
        <div className="mt-40 grid md:grid-cols-3 gap-8 border-t border-border/50 pt-24">
            {[
                { title: 'Zero Jargon', desc: 'We speak the language of business and outcomes. We explain complex technical decisions clearly so you can make informed choices.' },
                { title: 'Ownership Mindset', desc: 'We don\'t just write code; we partner on your product vision. We challenge unnecessary features to protect your budget.' },
                { title: 'Rapid Velocity', desc: 'Our studio is built for founders who need to move fast. Most builds are production-ready within 45 days.' }
            ].map(item => (
                <div key={item.title} className="space-y-4 p-8">
                     <h4 className="text-xl font-black uppercase tracking-widest text-primary italic-serif">{item.title}</h4>
                     <p className="text-sm text-foreground/60 font-medium leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-40 text-center">
            <Button size="lg" className="rounded-full h-16 px-10 bg-primary hover:bg-black text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1" asChild>
                <a href="/#contact">Start Project Partnership</a>
            </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
