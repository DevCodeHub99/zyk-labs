
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Users, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

function getServiceBySlug(slug: string) {
  return siteConfig.services.items.find(
    s => s.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and') === slug
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Not Found' }
  return {
    title: `${service.title} | Services | ${siteConfig.companyName}`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const IconGroup = [Zap, Shield, BarChart3, Users, Settings]

  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-full">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/[0.04] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 relative z-10">
        
        <div className="mb-12">
            <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest gap-2 hover:bg-transparent hover:text-accent p-0" asChild>
                <a href="/#services"><ArrowLeft size={14} /> Back to Services</a>
            </Button>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24">
            
            <div className="space-y-12">
                <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">{service.tagline}</p>
                    <h1 className="text-5xl md:text-8xl font-black text-primary tracking-tighter leading-none italic-serif">
                        {service.title}
                    </h1>
                    <p className="text-xl text-foreground/60 font-medium leading-relaxed max-w-2xl">
                        {service.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-12">
                    {service.features.map((feature: string, idx: number) => {
                        const Icon = IconGroup[idx % IconGroup.length]
                        return (
                            <StudioCard key={feature} className="p-8 border-border/40" innerClassName="space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                    <Icon size={20} />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-primary">{feature}</h3>
                                <p className="text-[11px] text-foreground/50 font-medium leading-relaxed">
                                    High-performance technical implementation focused on scalability and {feature.toLowerCase()}.
                                </p>
                            </StudioCard>
                        )
                    })}
                </div>

                <div className="p-12 md:p-16 rounded-[3rem] bg-secondary/30 border border-border/50 space-y-8">
                    <h3 className="text-2xl font-black text-primary uppercase tracking-widest italic-serif">The Delivery Blueprint</h3>
                    <div className="space-y-6">
                        {[
                            { step: '01', title: 'Technical Audit', desc: 'We deep-dive into your requirements or existing codebase to identify bottlenecks.' },
                            { step: '02', title: 'Architecture Scoping', desc: 'Defining the exact tech stack and system boundaries for your project.' },
                            { step: '03', title: 'Sprint-Based Build', desc: 'Focusing on high-velocity delivery with 48-hour feedback loops.' },
                        ].map((s) => (
                            <div key={s.step} className="flex gap-6 items-start">
                                <span className="text-2xl font-black text-accent/30">{s.step}</span>
                                <div>
                                    <h4 className="font-black text-primary uppercase tracking-widest text-sm mb-1">{s.title}</h4>
                                    <p className="text-xs text-foreground/50 font-medium">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <aside className="space-y-8 lg:sticky lg:top-32">
                 <StudioCard className="p-10 border-accent/20" innerClassName="space-y-10">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-accent">Engineering Slots Open</span>
                        </div>
                        <h4 className="text-3xl font-black text-primary tracking-tighter italic-serif">Ready to Ship?</h4>
                    </div>

                    <div className="space-y-4">
                        {['Direct Engineering Access', 'Fixed-Price Scoping', 'Source Code Ownership', 'Monthly Support Retainer'].map(item => (
                            <div key={item} className="flex items-center gap-3 text-xs font-bold text-foreground/70">
                                <CheckCircle2 size={16} className="text-accent" />
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="pt-6 space-y-4">
                        <Button 
                            className="w-full h-20 rounded-full bg-primary hover:opacity-90 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20"
                            asChild
                        >
                            <a href="/estimate">Run Cost Estimator</a>
                        </Button>
                        <Button 
                            variant="ghost" 
                            className="w-full h-16 rounded-full border border-border text-[10px] font-black uppercase tracking-widest hover:bg-secondary"
                            asChild
                        >
                            <a href="/#contact" className="flex items-center gap-2">Book Discovery Call <ArrowRight size={14} /></a>
                        </Button>
                    </div>

                    <p className="text-[10px] text-center text-foreground/30 font-bold uppercase tracking-widest">
                       Typical Delivery: 2-4 Weeks
                    </p>
                 </StudioCard>

                 <div className="relative group overflow-hidden rounded-[2.5rem]">
                     <div className="absolute inset-0 bg-accent group-hover:bg-primary transition-colors duration-700" />
                     <div className="relative p-10 space-y-4 text-white">
                        <h4 className="text-xl font-black uppercase tracking-widest italic-serif">Free Technical Consultation</h4>
                        <p className="text-xs text-white/70 font-medium leading-relaxed">
                            Not sure which service fits your project? Book a 15-min call to blueprints your roadmap.
                        </p>
                        <div className="pt-4">
                             <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest text-[9px]">
                                Book 15-Min Slot
                             </Button>
                        </div>
                     </div>
                 </div>
            </aside>
        </div>

      </div>

      <Footer />
    </main>
  )
}
