
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { ExternalLink, ArrowRight, Code2, Globe, Layout, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Our Work | ${siteConfig.companyName}`,
  description: 'Explore the high-performance digital products we have engineered for founders and startups.',
}

export default function WorkPage() {
  const { projects } = siteConfig
  const { items } = projects

  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-full">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-accent/[0.02] rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <SectionHeader 
          badge="Product Showcase"
          title={<>Built for <span className="text-accent italic-serif">Performance.</span></>}
          description="A curation of high-velocity builds, from founder MVPs to enterprise-grade internal tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-24">
          {items.map((project) => (
            <StudioCard 
                key={project.title} 
                className="group flex flex-col h-full hover:border-accent/30 transition-all duration-500"
                innerClassName="p-8 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary/40 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Code2 className="w-6 h-6" />
                 </div>
                 {project.link && (
                    <a href={project.link} target="_blank" rel="noopener" className="p-2 rounded-full hover:bg-secondary transition-colors">
                        <ExternalLink size={16} className="text-foreground/30" />
                    </a>
                 )}
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <h3 className="text-2xl font-black text-primary tracking-tight uppercase group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                    {project.category}
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed font-medium">
                    {project.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-secondary/50 text-[9px] font-bold text-foreground/40 uppercase tracking-widest border border-border/50">
                            {t}
                        </span>
                    ))}
                </div>

                <Button variant="ghost" className="w-full h-12 rounded-xl border border-border/50 text-[10px] font-black uppercase tracking-widest group/btn hover:bg-primary hover:text-white transition-all" asChild>
                    <a href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Case Study <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </Button>
              </div>
            </StudioCard>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-32 text-center">
            <StudioCard className="max-w-3xl mx-auto p-12 md:p-16 border-accent/20" innerClassName="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter italic-serif">
                   Ready to build your <br />
                   <span className="text-accent italic-serif">success story?</span>
                </h2>
                <Button size="lg" className="rounded-full h-16 px-10 bg-primary hover:bg-black text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1" asChild>
                    <a href="/#contact">Start Project Discovery</a>
                </Button>
            </StudioCard>
        </div>
      </div>

      <Footer />
    </main>
  )
}
