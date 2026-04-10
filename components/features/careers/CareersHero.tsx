
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function CareersHero() {
  const { careers } = siteConfig

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-border/50 shadow-sm">
            <Sparkles size={14} className="text-accent animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/50">{careers.badge}</span>
          </div>

          <h1 className="text-4xl md:text-8xl font-black text-primary tracking-tighter leading-[1] md:leading-[0.9]">
            Join the <span className="text-accent italic-serif">Zyklabs Alchemists</span>
          </h1>

          <p className="text-base md:text-2xl text-foreground/50 max-w-3xl mx-auto font-medium leading-relaxed">
            {careers.description}
          </p>
        </motion.div>
      </div>

      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}
