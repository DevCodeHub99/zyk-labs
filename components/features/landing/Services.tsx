import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Zap, ShieldCheck, Globe } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { ServiceItem } from '@/types'

const visualIcons = [Zap, Sparkles, ShieldCheck, Globe]

/* --- Internal Service Components --- */

const ServiceCard = ({ service, index, isWide }: { service: ServiceItem, index: number, isWide: boolean }) => {
  const IconComponent = service.icon
  const VisualIcon = visualIcons[index % visualIcons.length]

  return (
    <StudioCard
      className={`group flex flex-col p-6 md:p-10 transition-all duration-500 hover:border-accent/40 ${isWide ? 'md:col-span-7' : 'md:col-span-5'}`}
      glowClassName="group-hover:opacity-80"
      innerClassName="flex flex-col h-full"
    >
      {/* Decorative Visual Backdrop */}
      <div className="absolute top-0 right-0 p-6 md:p-10 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700 pointer-events-none">
        <VisualIcon className="w-24 h-24 md:w-48 md:h-48 text-primary" />
      </div>

      <div className="flex items-center gap-4 mb-6 md:mb-8 relative">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center text-accent shadow-inner group-hover:bg-accent group-hover:text-white transition-colors duration-500">
          <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div className="h-px bg-border flex-1 opacity-50" />
      </div>

      <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
        <h3 className="text-xl md:text-3xl font-black text-primary tracking-tight uppercase">{service.title}</h3>
        <p className="text-foreground/75 text-sm md:text-base leading-relaxed max-w-sm">
          {service.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
        {service.features && service.features.map((feature: string) => (
          <span key={feature} className="px-3 py-1 rounded-full bg-secondary/50 text-[9px] md:text-[10px] font-bold text-foreground/60 uppercase tracking-widest border border-border/50 group-hover:border-accent/20 transition-colors">
            {feature}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between group/footer">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
          Ready to build
        </div>
        <Button
          variant="link"
          className="p-0 h-auto text-primary font-black uppercase tracking-widest text-[10px] md:text-[11px] group-hover:text-accent transition-colors flex items-center gap-2"
          asChild
        >
          <a 
            href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
            aria-label={`Explore our ${service.title} specialized engineering service`}
          >
            Explore Service <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </StudioCard>
  )
}

/* --- Main Section Component --- */

export default function Services() {
  const { services } = siteConfig
  const { items } = services

  return (
    <section id="services" className="py-16 md:py-40 bg-background relative overflow-hidden text-center md:text-left">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          badge={services.badge}
          title={<>{services.titleHighlighted.main} <span className="text-accent italic-serif">{services.titleHighlighted.accent}</span> {services.titleHighlighted.suffix}</>}
          description={services.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {items.map((service: ServiceItem, index: number) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
              isWide={index === 0 || index === 3}
            />
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <p className="text-[10px] md:text-sm font-bold text-foreground/40 uppercase tracking-[0.4em] mb-4 md:mb-6">{services.labels.customPrompt}</p>
          <Button size="lg" className="rounded-full px-10 h-12 md:h-14 bg-primary hover:opacity-90 font-black uppercase tracking-widest text-[10px] md:text-xs shadow-xl shadow-primary/20 transition-all hover:-translate-y-1" asChild>
            <a href="/#contact">{services.labels.customButton} <Sparkles className="ml-2 w-4 h-4 text-accent" /></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
