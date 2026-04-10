
'use client'

import { siteConfig } from '@/config/site'
import StudioCard from '@/components/shared/StudioCard'
import { Button } from '@/components/ui/button'
import { Calculator, ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function EstimatorTeaser() {
  return (
    <section className="py-20 md:py-40 bg-background relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <StudioCard className="border-accent/20 p-8 md:p-14 overflow-hidden" innerClassName="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 text-center lg:text-left">
                
                <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.03] pointer-events-none">
                    <Calculator className="w-48 h-48 md:w-[300px] md:h-[300px] text-primary" />
                </div>

                <div className="lg:w-2/3 space-y-6 md:space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                        <Zap size={12} className="text-accent fill-accent md:w-3.5 md:h-3.5" />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-accent">Self-Service Roadmap</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tighter leading-[1.1] md:leading-none italic-serif">
                        Get Your Estimate <br />
                        <span className="text-accent italic-serif">Cost in 60s.</span>
                    </h2>
                    
                    <p className="text-base md:text-xl text-foreground/60 font-medium leading-relaxed max-w-2xl px-2 md:px-0">
                        Skip the endless sales meetings. Use our technical estimator to generate a high-level roadmap and budget assessment based on your project requirements.
                    </p>

                    <div className="pt-2 md:pt-4">
                        <Button variant="studio-accent" size="lg" showGlow asChild>
                            <a href="/estimate" className="flex items-center justify-center gap-4">
                                Start Estimation <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="lg:w-1/3 grid grid-cols-2 gap-3 md:gap-4 relative z-10 w-full">
                    {[
                        { label: 'Architecture', val: 'Scoped' },
                        { label: 'Timeline', val: 'Blueprint' },
                        { label: 'Features', val: 'Costed' },
                        { label: 'Roadmap', val: 'Ready' }
                    ].map((item, idx) => (
                        <div key={idx} className="p-4 md:p-6 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50 text-center">
                            <p className="text-[8px] md:text-[10px] font-black text-foreground/30 uppercase tracking-widest mb-1">{item.label}</p>
                            <p className="text-sm md:text-lg font-black text-primary uppercase">{item.val}</p>
                        </div>
                    ))}
                </div>
            </StudioCard>
        </div>
    </section>
  )
}
