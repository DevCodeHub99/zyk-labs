
'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import StudioCard from '@/components/shared/StudioCard'
import { formatCurrency } from '../hooks/useEstimator'

interface OptionGridProps {
  activeStep: any
  selections: any
  onSelect: (id: string) => void
}

export function OptionGrid({ activeStep, selections, onSelect }: OptionGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <AnimatePresence mode="wait">
        {activeStep.options.map((option: any) => {
          const Icon = option.icon
          const isSelected = activeStep.multiSelect 
            ? (selections[activeStep.id] as string[])?.includes(option.id)
            : selections[activeStep.id] === option.id

          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={() => onSelect(option.id)}
              className="text-left group"
            >
              <StudioCard 
                className={`h-full p-6 transition-all duration-300 ${isSelected ? 'border-accent bg-accent/[0.03]' : 'hover:border-primary/20'}`}
                innerClassName="space-y-4"
                showGlow={isSelected}
                glowClassName="opacity-20"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isSelected ? 'bg-accent text-white' : 'bg-secondary text-primary/40 group-hover:bg-primary/5'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`text-sm font-black uppercase tracking-widest mb-1 ${isSelected ? 'text-accent' : 'text-primary'}`}>
                    {option.label}
                  </h4>
                  {option.price && (
                    <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-tighter">
                      + {formatCurrency(option.price)}
                    </p>
                  )}
                  {option.basePrice && (
                    <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-tighter">
                      Base: {formatCurrency(option.basePrice)}
                    </p>
                  )}
                </div>

                {isSelected && (
                  <div className="absolute top-4 right-4 text-accent">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </StudioCard>
            </motion.button>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
