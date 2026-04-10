
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { Button } from '@/components/ui/button'
import { ArrowRight, Video, Sparkles, Zap } from 'lucide-react'

export default function ContactHook() {
  const { contact } = siteConfig

  return (
    <section id="contact" className="py-24 md:py-48 bg-background relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">

          <div className="space-y-6">
            {contact.promo && (
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-border/50 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/40">{contact.promo.title}</span>
              </div>
            )}

            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-primary tracking-tighter leading-[1] md:leading-[0.9]">
              Shift from Idea to <br />
              <span className="text-accent italic-serif">Working Product.</span>
            </h2>

            <p className="text-base md:text-2xl text-foreground/50 max-w-2xl mx-auto font-medium leading-relaxed">
              Skip the sales pitch. Talk directly to the engineers who will architect and build your product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-4">
            <StudioCard className="p-8 md:p-10 border-accent/20 group hover:-translate-y-2 transition-transform duration-500" innerClassName="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-accent/20 mb-2">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-primary uppercase tracking-tight">30-Min Discovery</h3>
              <p className="text-xs text-foreground/60 font-medium">Audit your roadmap and get a technical ballpark estimate.</p>
              <Button variant="studio-primary" size="lg" className="w-full mt-4" asChild>
                <a href="/contact">Book Call <ArrowRight className="ml-2 w-3.5 h-3.5" /></a>
              </Button>
            </StudioCard>

            <StudioCard className="p-8 md:p-10 border-border group hover:-translate-y-2 transition-transform duration-500" innerClassName="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center border border-border/50 shadow-sm mb-2">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-black text-primary uppercase tracking-tight">Detailed Brief</h3>
              <p className="text-xs text-foreground/60 font-medium">Have a complex requirement? Send us your technical brief.</p>
              <Button variant="studio-glass" size="lg" className="w-full mt-4" asChild>
                <a href="/contact#brief">Send Brief <ArrowRight className="ml-2 w-3.5 h-3.5 opacity-50" /></a>
              </Button>
            </StudioCard>
          </div>

          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-foreground/30">
            Technical Excellence • 99.9% Uptime • Quality Standards
          </p>

        </div>
      </div>
    </section>
  )
}
