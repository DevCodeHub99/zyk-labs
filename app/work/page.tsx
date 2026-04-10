
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { ExternalLink, ArrowRight, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import StudioPage from '@/components/layout/StudioPage'
import ContactCTA from '@/components/shared/ContactCTA'

export const metadata: Metadata = {
  title: `Our Work | ${siteConfig.companyName}`,
  description: 'Explore the high-performance digital products we have engineered for founders and startups.',
}

export default function WorkPage() {
  const { projects } = siteConfig
  const { items } = projects

  return (
    <StudioPage decorColor1="bg-accent/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader 
          asH1
          badge="Product Showcase"
          title={<>Built for <span className="text-accent italic-serif">Performance.</span></>}
          description="A curation of high-velocity builds, from founder MVPs to enterprise-grade internal tools."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-24">
          {items.map((project) => (
            <StudioCard 
                key={project.title} 
                className="group flex flex-col h-full hover:border-accent/30 transition-all duration-500"
                innerClassName="p-6 md:p-8 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center text-primary/40 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Code2 className="w-5 h-5 md:w-6 md:h-6" />
                 </div>
                 {project.link && (
                    <a href={project.link} target="_blank" rel="noopener" className="p-2 rounded-full hover:bg-secondary transition-colors">
                        <ExternalLink size={14} className="text-foreground/30 md:w-4 md:h-4" />
                    </a>
                 )}
              </div>

              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-primary tracking-tight uppercase group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                    {project.category}
                </p>
                <p className="text-foreground/60 text-xs md:text-sm leading-relaxed font-medium">
                    {project.description}
                </p>
              </div>

              <div className="space-y-5 md:space-y-6">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                        <span key={t} className="px-2.5 py-1 rounded-full bg-secondary/50 text-[8px] md:text-[9px] font-bold text-foreground/40 uppercase tracking-widest border border-border/50">
                            {t}
                        </span>
                    ))}
                </div>

                <Button variant="ghost" className="w-full h-11 md:h-12 rounded-xl border border-border/50 text-[10px] font-black uppercase tracking-widest group/btn hover:bg-primary hover:text-white transition-all" asChild>
                    <a href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Case Study <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </Button>
              </div>
            </StudioCard>
          ))}
        </div>

        <ContactCTA 
          title={<>Ready to build your <br /><span className="text-accent italic-serif">success story?</span></>}
          buttonText="Start Project Discovery"
          className="mt-24 md:mt-32"
        />
      </div>
    </StudioPage>
  )
}
