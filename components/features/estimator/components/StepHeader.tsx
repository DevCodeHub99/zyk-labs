
'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface StepHeaderProps {
  currentStep: number
  totalSteps: number
  title: string
  displayTotal: string
}

export function StepHeader({ currentStep, totalSteps, title, displayTotal }: StepHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
            Step {currentStep + 1} of {totalSteps}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter italic-serif">
            {title}
          </h2>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-1">Live Ballpark</p>
          <p className="text-2xl font-black text-primary">{displayTotal}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-secondary/50 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
      </div>
    </div>
  )
}
