
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import StudioCard from '@/components/shared/StudioCard'
import { Sparkles, AlertCircle, ArrowRight } from 'lucide-react'

interface EstimatorResultProps {
  displayTotal: string
  timeline: string
  scale: string
  onReset: () => void
}

export function EstimatorResult({ displayTotal, timeline, scale, onReset }: EstimatorResultProps) {
  const getDuration = () => {
    switch (timeline) {
      case 'asap': return '10-14 Days'
      case 'express': return '3 Weeks'
      default: return '6 Weeks'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-12"
    >
      <div className="space-y-4">
        <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-accent/40 mb-8">
          <Sparkles className="w-10 h-10" />
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-primary tracking-tighter italic-serif">
          Your Roadmap is Ready.
        </h2>
        <p className="text-lg text-foreground/60 max-w-xl mx-auto font-medium leading-relaxed">
          We've analyzed your requirements. Based on our current intake velocity, here's your technical ballpark.
        </p>
      </div>

      <StudioCard className="max-w-xl mx-auto p-12 overflow-hidden border-2 border-accent/20" innerClassName="space-y-8">
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Estimated Technical Budget</p>
          <div className="text-6xl md:text-8xl font-black text-primary tracking-tighter leading-none">
            {displayTotal}
          </div>
        </div>

        <div className="h-px w-24 bg-accent/20 mx-auto" />

        <div className="grid grid-cols-2 gap-4 text-left">
          <div className="p-4 rounded-2xl bg-secondary/30">
            <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">Est. Duration</p>
            <p className="text-sm font-black text-primary uppercase">{getDuration()}</p>
          </div>
          <div className="p-4 rounded-2xl bg-secondary/30">
            <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">Project Scale</p>
            <p className="text-sm font-black text-primary uppercase">{scale || 'Standard'}</p>
          </div>
        </div>

        <Button 
          size="lg" 
          className="w-full h-20 rounded-full bg-accent hover:opacity-90 text-white font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-accent/30 mt-4 group"
          asChild
        >
          <a href="/#contact" className="flex items-center justify-center gap-4">
            Claim This Roadmap <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        <p className="text-[10px] font-bold text-foreground/30 flex items-center justify-center gap-2">
          <AlertCircle className="w-3 h-3" /> Ballpark Estimate · Subject to discovery call audit.
        </p>
      </StudioCard>

      <Button 
        variant="link" 
        onClick={onReset}
        className="text-[10px] font-black uppercase tracking-widest text-foreground/40"
      >
        Start Over
      </Button>
    </motion.div>
  )
}
