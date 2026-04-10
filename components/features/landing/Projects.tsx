import { ExternalLink, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { Button } from '@/components/ui/button'

export default function Projects() {
  const { projects } = siteConfig
  const { items, badge, featuredCaseStudy } = projects

  return (
    <section id="projects" className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          badge={badge}
          title={<>{projects.title.split(' ')[0]} <span className="text-accent italic-serif">{projects.title.split(' ').slice(1).join(' ')}</span></>}
          description={projects.description}
        />

        {/* Small Project Cards (Grid of 3) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 md:mb-20 max-w-6xl mx-auto md:mx-0">
          {items.slice(0, 3).map((item) => (
            <StudioCard 
              key={item.title} 
              className="p-5 md:p-6 transition-all duration-300 group flex flex-col h-full"
              innerClassName="flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-primary group-hover:text-accent transition-colors">{item.title}</h3>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary flex items-center justify-center text-foreground/50 group-hover:bg-accent group-hover:text-white transition-all shadow-sm"
                    aria-label={`Visit ${item.title}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </a>
                )}
              </div>
              
              <p className="text-foreground/70 text-xs md:text-sm leading-relaxed flex-grow">
                {item.description}
              </p>

              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="text-[9px] md:text-[10px] font-bold text-foreground/40 tracking-[0.15em] uppercase">
                  {item.tech.join(' + ')}
                </p>
              </div>
            </StudioCard>
          ))}
        </div>

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <StudioCard className="max-w-6xl p-0 overflow-hidden border-none shadow-2xl" innerClassName="bg-primary flex flex-col lg:flex-row items-stretch min-h-[400px]">
            {/* Background ambient glow for the primary box */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="lg:w-1/2 p-6 md:p-12 lg:p-16 space-y-5 md:space-y-6 relative z-10 text-primary-foreground text-center lg:text-left">
              <span className="inline-block text-[10px] md:text-xs font-black tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                {featuredCaseStudy.badge}
              </span>
              
              <h3 className="text-2xl md:text-5xl font-black leading-tight tracking-tight italic-serif">
                {featuredCaseStudy.title}
              </h3>
              
              <div className="space-y-3 pt-2 md:pt-4 text-xs md:text-base text-primary-foreground/80 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                <p><strong className="font-bold text-primary-foreground">The Problem:</strong> {featuredCaseStudy.problem}</p>
                <p><strong className="font-bold text-primary-foreground">The Build:</strong> {featuredCaseStudy.build}</p>
                <p><strong className="font-bold text-primary-foreground">The Result:</strong> {featuredCaseStudy.result}</p>
              </div>

               <div className="pt-6 md:pt-8 w-full flex justify-center lg:justify-start">
                <Button size="lg" className="rounded-full bg-accent hover:opacity-90 text-white font-black uppercase tracking-widest text-[10px] md:text-[11px] h-12 md:h-14 px-8 shadow-xl shadow-accent/20 group" asChild>
                  <a href="/work" className="flex items-center gap-3">
                    View Technical Deep-Dives <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full min-h-[250px] md:min-h-[400px] overflow-hidden relative shadow-inner z-10 border-l border-white/5 bg-black/20 backdrop-blur-3xl">
              {/* Refined abstract gradient representing a dashboard/data flow, using brand colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/5 to-transparent"></div>
              
              {/* Simple high-fidelity illustration suggest */}
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                 <div className="w-full h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col overflow-hidden shadow-2xl">
                    <div className="h-10 bg-white/10 border-b border-white/10 flex items-center px-4 gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="flex-1 p-6 space-y-6">
                       <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 rounded-xl bg-accent/20"></div>
                          <div className="h-24 rounded-xl bg-white/5"></div>
                       </div>
                       <div className="h-32 rounded-xl bg-white/5 animate-pulse"></div>
                       <div className="flex gap-4">
                          <div className="w-1/3 h-8 rounded-lg bg-white/10"></div>
                          <div className="w-2/3 h-8 rounded-lg bg-white/5"></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </StudioCard>
        )}

      </div>
    </section>
  )
}
