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
      className="text-center space-y-8 md:space-y-12"
    >
      <div className="space-y-4">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-accent/40 mb-6 md:mb-8">
          <Sparkles className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h2 className="text-3xl md:text-7xl font-black text-primary tracking-tighter italic-serif px-2">
          Your Roadmap is Ready.
        </h2>
        <p className="text-base md:text-lg text-foreground/60 max-w-xl mx-auto font-medium leading-relaxed px-4">
          We've analyzed your requirements. Based on our current intake velocity, here's your technical ballpark.
        </p>
      </div>

      <StudioCard className="max-w-xl mx-auto p-6 md:p-12 overflow-hidden border-2 border-accent/20" innerClassName="space-y-6 md:space-y-8">
        <div className="space-y-2">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent">Estimated Technical Budget</p>
          <div className="text-4xl md:text-8xl font-black text-primary tracking-tighter leading-none">
            {displayTotal}
          </div>
        </div>

        <div className="h-px w-20 md:w-24 bg-accent/20 mx-auto" />

        <div className="grid grid-cols-2 gap-3 md:gap-4 text-left">
          <div className="p-3 md:p-4 rounded-full bg-secondary/30">
            <p className="text-[8px] md:text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">Est. Duration</p>
            <p className="text-xs md:text-sm font-black text-primary uppercase">{getDuration()}</p>
          </div>
          <div className="p-3 md:p-4 rounded-full bg-secondary/30">
            <p className="text-[8px] md:text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">Project Scale</p>
            <p className="text-xs md:text-sm font-black text-primary uppercase">{scale || 'Standard'}</p>
          </div>
        </div>

        <Button 
          variant="studio-accent"
          size="xl" 
          showGlow
          asChild
        >
          <a href="/#contact" className="flex items-center justify-center gap-4">
            Claim This Roadmap <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        <p className="text-[8px] md:text-[10px] font-bold text-foreground/30 flex items-center justify-center gap-2">
          <AlertCircle className="w-2.5 h-2.5 md:w-3 md:h-3" /> Ballpark Estimate · Subject to audit.
        </p>
      </StudioCard>

      <Button 
        variant="studio-outline" 
        size="sm"
        onClick={onReset}
      >
        Start Over
      </Button>
    </motion.div>
  )
}
