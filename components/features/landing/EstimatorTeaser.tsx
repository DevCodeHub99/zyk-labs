
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
            <StudioCard className="border-accent/20 p-8 md:p-20 overflow-hidden" innerClassName="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
                    <Calculator size={300} className="text-primary" />
                </div>

                <div className="lg:w-2/3 space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                        <Zap size={14} className="text-accent fill-accent" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent">Self-Service Roadmap</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-7xl font-black text-primary tracking-tighter leading-none italic-serif">
                        Get Your Ballpark <br />
                        <span className="text-accent italic-serif">Cost in 60s.</span>
                    </h2>
                    
                    <p className="text-xl text-foreground/60 font-medium leading-relaxed max-w-2xl">
                        Skip the endless sales meetings. Use our technical estimator to generate a high-level roadmap and budget assessment based on your project requirements.
                    </p>

                    <div className="pt-4">
                        <Button size="lg" className="h-20 rounded-full px-12 bg-accent hover:opacity-90 text-white font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-accent/40 group transition-all hover:-translate-y-1" asChild>
                            <a href="/estimate" className="flex items-center gap-4">
                                Start Estimation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="lg:w-1/3 grid grid-cols-2 gap-4 relative z-10">
                    {[
                        { label: 'Architecture', val: 'Scoped' },
                        { label: 'Timeline', val: 'Blueprint' },
                        { label: 'Features', val: 'Costed' },
                        { label: 'Roadmap', val: 'Ready' }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-3xl bg-secondary/30 backdrop-blur-sm border border-border/50 text-center">
                            <p className="text-[10px] font-black text-foreground/30 uppercase tracking-widest mb-1">{item.label}</p>
                            <p className="text-lg font-black text-primary uppercase">{item.val}</p>
                        </div>
                    ))}
                </div>
            </StudioCard>
        </div>
    </section>
  )
}
