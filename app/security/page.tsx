
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { Shield, ShieldAlert, Lock, Database, Eye, CheckCircle2, FileText, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Security & Compliance | ${siteConfig.companyName}`,
  description: siteConfig.security.description,
}

export default function SecurityPage() {
  const { security } = siteConfig
  const { measures } = security

  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-full">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-500/[0.02] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 relative z-10">
        <SectionHeader 
          badge={security.badge}
          title={<>Institutional <span className="text-accent italic-serif">Quality.</span></>}
          description={security.description}
        />

        <div className="mt-24 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                {measures.map((measure) => (
                    <StudioCard key={measure.title} className="p-10 border-border/40" innerClassName="space-y-6">
                        <div className="w-16 h-16 rounded-[2rem] bg-accent/10 flex items-center justify-center text-accent">
                            <measure.icon size={32} />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-black text-primary uppercase tracking-widest italic-serif">
                                {measure.title}
                            </h3>
                            <p className="text-foreground/60 text-base leading-relaxed font-medium">
                                {measure.desc}
                            </p>
                        </div>
                        <div className="pt-4 border-t border-border/50 flex gap-4">
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-emerald-500">
                                <CheckCircle2 size={12} /> Active
                            </div>
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-foreground/30">
                                Audit Ready
                            </div>
                        </div>
                    </StudioCard>
                ))}
            </div>
        </div>

        <div className="mt-32 space-y-12">
            <h2 className="text-center text-3xl md:text-6xl font-black text-primary uppercase tracking-tighter italic-serif">The Defense-in-Depth <br /> <span className="text-accent">Protocol</span></h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
                {[
                    { 
                        title: 'Application Layer', 
                        icon: Lock,
                        bullets: ['JWT Stateless Auth', 'Role-Based Access (RBAC)', 'Rate Limiting (WAF)', 'XSS & CSRF Mitigation'] 
                    },
                    { 
                        title: 'Data Infrastructure', 
                        icon: Database,
                        bullets: ['AES-256 At-Rest Encryption', 'Point-in-Time Backups', 'SOC2 Compliant Providers', 'Regional Data Residency'] 
                    },
                    { 
                        title: 'Operational Security', 
                        icon: ShieldAlert,
                        bullets: ['Continuous Dependency Audits', 'Secure Environment Variables', 'Direct Engineer Pipeline', 'Incident Response Plan'] 
                    }
                ].map((stack) => (
                    <div key={stack.title} className="p-8 rounded-[3rem] bg-secondary/20 border border-border/50 space-y-6">
                        <div className="flex items-center gap-4">
                            <stack.icon className="text-accent" size={28} />
                            <h4 className="text-lg font-black uppercase tracking-widest text-primary italic-serif">{stack.title}</h4>
                        </div>
                        <div className="space-y-4">
                            {stack.bullets.map(b => (
                                <div key={b} className="flex items-center gap-3 text-xs font-bold text-foreground/60">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    {b}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Legal Callout */}
        <div className="mt-40 text-center space-y-12">
            <StudioCard className="max-w-3xl mx-auto p-12 md:p-16 border-emerald-500/20" innerClassName="space-y-8">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto text-emerald-500 shadow-2xl shadow-emerald-500/20">
                    <FileText size={32} />
                </div>
                <h3 className="text-3xl font-black text-primary tracking-tighter italic-serif">Technical Compliance Blueprint</h3>
                <p className="text-lg text-foreground/60 max-w-xl mx-auto font-medium leading-relaxed">
                    Working on a high-stakes product? We provide a full technical audit and compliance blueprint for every build.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="rounded-full h-16 px-10 bg-primary hover:bg-black text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1" asChild>
                        <a href="/#contact">Review My Specs <ArrowRight size={14} className="ml-2" /></a>
                    </Button>
                </div>
            </StudioCard>
        </div>
      </div>

      <Footer />
    </main>
  )
}
