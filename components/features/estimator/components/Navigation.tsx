
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavigationProps {
  currentStep: number
  isLastStep: boolean
  isStepValid: boolean
  displayTotal: string
  onPrev: () => void
  onNext: () => void
}

export function Navigation({
  currentStep,
  isLastStep,
  isStepValid,
  displayTotal,
  onPrev,
  onNext
}: NavigationProps) {
  return (
    <div className="flex items-center justify-between pt-8 border-t border-border/40">
      <Button
        variant="studio-outline"
        size="sm"
        onClick={onPrev}
        disabled={currentStep === 0}
        className="disabled:opacity-0 rounded-full"
      >
        <ChevronLeft className="w-4 h-4" /> Back
      </Button>
      
      <div className="flex items-center gap-6">
        <div className="text-right md:hidden">
          <p className="text-[8px] font-black uppercase tracking-widest text-foreground/30">Ballpark</p>
          <p className="text-lg font-black text-primary">{displayTotal}</p>
        </div>
        
        <Button
          variant="studio-primary"
          size="lg"
          onClick={onNext}
          disabled={!isStepValid}
          className="gap-2"
        >
          {isLastStep ? 'Build Roadmap' : 'Next Step'}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
