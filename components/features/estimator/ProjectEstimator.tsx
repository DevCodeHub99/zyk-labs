
'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import StudioCard from '@/components/shared/StudioCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { ChevronRight, ChevronLeft, Check, Sparkles, AlertCircle } from 'lucide-react'

type Selection = Record<string, string | string[]>

export default function ProjectEstimator() {
  const { estimator } = siteConfig
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<Selection>({})
  const [isComplete, setIsComplete] = useState(false)

  const steps = estimator.steps
  const activeStep = steps[currentStep]

  // --- Calculation Logic ---
  const calculation = useMemo(() => {
    let total = 0
    
    // 1. Base Platform Price
    const platformId = selections['platform'] as string
    const platform = steps.find((s) => s.id === 'platform')?.options.find((o) => o.id === platformId)
    if (platform && platform.basePrice) total += platform.basePrice

    // 2. Scale Multiplier
    const scaleId = selections['scale'] as string
    const scale = steps.find((s) => s.id === 'scale')?.options.find((o) => o.id === scaleId)
    if (scale && scale.multiplier) total *= scale.multiplier

    // 3. Features Adder
    const featureIds = (selections['features'] || []) as string[]
    const featureOptions = steps.find((s) => s.id === 'features')?.options || []
    featureIds.forEach(id => {
      const feat = featureOptions.find((o) => o.id === id)
      if (feat && feat.price) total += feat.price
    })

    // 4. Timeline Multiplier
    const timelineId = selections['timeline'] as string
    const timeline = steps.find((s) => s.id === 'timeline')?.options.find((o) => o.id === timelineId)
    if (timeline && timeline.multiplier) total *= timeline.multiplier

    return {
      total: Math.round(total),
      displayTotal: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(total)
    }
  }, [selections, steps])

  // --- Helpers ---
  const handleSelect = (optionId: string) => {
    if (activeStep.multiSelect) {
      const current = (selections[activeStep.id] || []) as string[]
      const next = current.includes(optionId) 
        ? current.filter(id => id !== optionId)
        : [...current, optionId]
      setSelections(prev => ({ ...prev, [activeStep.id]: next }))
    } else {
      setSelections(prev => ({ ...prev, [activeStep.id]: optionId }))
      // Auto-advance for single select if not last step
      if (currentStep < steps.length - 1) {
        setTimeout(() => setCurrentStep(prev => prev + 1), 300)
      }
    }
  }

  const isStepValid = useMemo(() => {
    const val = selections[activeStep.id]
    if (activeStep.multiSelect) return (val as string[])?.length > 0
    return !!val
  }, [selections, activeStep])

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setIsComplete(true)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      
      {!isComplete ? (
        <>
          {/* Progress Header */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                  Step {currentStep + 1} of {steps.length}
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter italic-serif">
                  {activeStep.title}
                </h2>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-1">Live Ballpark</p>
                <p className="text-2xl font-black text-primary">{calculation.displayTotal}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-secondary/50 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ type: 'spring', stiffness: 50 }}
              />
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AnimatePresence mode="wait">
              {activeStep.options.map((option) => {
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
                    onClick={() => handleSelect(option.id)}
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
                            + {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(option.price)}
                          </p>
                        )}
                        {option.basePrice && (
                          <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-tighter">
                            Base: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(option.basePrice)}
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

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-border/40">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="text-[10px] font-black uppercase tracking-widest gap-2 disabled:opacity-0"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </Button>
            
            <div className="flex items-center gap-6">
               <div className="text-right md:hidden">
                <p className="text-[8px] font-black uppercase tracking-widest text-foreground/30">Ballpark</p>
                <p className="text-lg font-black text-primary">{calculation.displayTotal}</p>
              </div>
              
              <Button
                size="lg"
                onClick={nextStep}
                disabled={!isStepValid}
                className="rounded-full px-8 h-14 bg-primary hover:bg-black font-black uppercase tracking-widest text-[10px] gap-2 shadow-xl shadow-primary/20"
              >
                {currentStep === steps.length - 1 ? 'Build Roadmap' : 'Next Step'}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      ) : (
        /* SUCCESS / RESULT STATE */
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
                   {calculation.displayTotal}
                </div>
             </div>

             <div className="h-px w-24 bg-accent/20 mx-auto" />

             <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-4 rounded-2xl bg-secondary/30">
                   <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">Est. Duration</p>
                   <p className="text-sm font-black text-primary uppercase">
                      {selections['timeline'] === 'asap' ? '10-14 Days' : selections['timeline'] === 'express' ? '3 Weeks' : '6 Weeks'}
                   </p>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/30">
                   <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">Project Scale</p>
                   <p className="text-sm font-black text-primary uppercase">{selections['scale'] as string}</p>
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
            onClick={() => { setIsComplete(false); setCurrentStep(0); setSelections({}); }}
            className="text-[10px] font-black uppercase tracking-widest text-foreground/40"
          >
            Start Over
          </Button>
        </motion.div>
      )}

    </div>
  )
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
