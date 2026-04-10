import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'

export default function WhyChooseUs() {
  const { whyChooseUs } = siteConfig
  const { painPoints, title, subtitle, badge, description } = whyChooseUs

  return (
    <section className="py-12 md:py-24 bg-background relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <SectionHeader 
          badge={badge}
          title={<>{whyChooseUs.titleHighlighted.main} <span className="text-accent italic-serif">{whyChooseUs.titleHighlighted.accent}</span></>}
          description={description}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        
        {/* Pain points stacked - more compact */}
        <div className="space-y-3 md:space-y-4 text-sm md:text-xl font-medium text-foreground/30 mb-8 md:mb-16">
          {painPoints.map((point: string, idx: number) => (
            <div key={idx} className="flex flex-col items-center gap-1 group cursor-default">
               <p className="tracking-tight group-hover:text-foreground/60 transition-colors duration-500">
                {point}
               </p>
            </div>
          ))}
        </div>

        {/* The Bold Resolution - Centered Callout Card */}
        <StudioCard className="w-full max-w-3xl p-6 sm:p-8 md:p-12 text-center" innerClassName="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1] md:leading-[0.9] text-primary">
            {whyChooseUs.titleParts.main} <span className="text-accent italic-serif">{whyChooseUs.titleParts.build}</span> <br/>
            {whyChooseUs.titleParts.final}
          </h2>
          
          <div className="h-px w-10 md:w-16 bg-accent/30 mx-auto" />

          <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
            {subtitle}
          </p>
        </StudioCard>

      </div>
    </section>
  )
}
