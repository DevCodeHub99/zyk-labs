
import { useState, useMemo, useCallback } from 'react'
import { siteConfig } from '@/config/site'

export type Selection = Record<string, string | string[]>

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
})

export const formatCurrency = (amount: number) => currencyFormatter.format(amount)

export function useEstimator() {
  const { estimator } = siteConfig
  const steps = estimator.steps
  
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<Selection>({})
  const [isComplete, setIsComplete] = useState(false)

  const activeStep = steps[currentStep]

  // Memoize the calculation logic to prevent re-computation on unrelated state changes
  const calculation = useMemo(() => {
    let total = 0
    
    // 1. Base Platform Price
    const platformId = selections['platform'] as string
    const platform = steps.find((s) => s.id === 'platform')?.options.find((o) => o.id === platformId)
    if (platform?.basePrice) total += platform.basePrice

    // 2. Scale Multiplier
    const scaleId = selections['scale'] as string
    const scale = steps.find((s) => s.id === 'scale')?.options.find((o) => o.id === scaleId)
    if (scale?.multiplier) total *= scale.multiplier

    // 3. Features Adder
    const featureIds = (selections['features'] || []) as string[]
    const featureSection = steps.find((s) => s.id === 'features')
    if (featureSection) {
      featureIds.forEach(id => {
        const feat = featureSection.options.find((o) => o.id === id)
        if (feat?.price) total += feat.price
      })
    }

    // 4. Timeline Multiplier
    const timelineId = selections['timeline'] as string
    const timeline = steps.find((s) => s.id === 'timeline')?.options.find((o) => o.id === timelineId)
    if (timeline?.multiplier) total *= timeline.multiplier

    return {
      total: Math.round(total),
      displayTotal: formatCurrency(total)
    }
  }, [selections, steps])

  // Memoize event handlers to prevent unnecessary re-renders of memoized child components
  const handleSelect = useCallback((optionId: string) => {
    setSelections(prev => {
      if (activeStep.multiSelect) {
        const current = (prev[activeStep.id] || []) as string[]
        const next = current.includes(optionId) 
          ? current.filter(id => id !== optionId)
          : [...current, optionId]
        return { ...prev, [activeStep.id]: next }
      } else {
        // Auto-advance for single select
        if (currentStep < steps.length - 1) {
          setTimeout(() => setCurrentStep(s => s + 1), 300)
        }
        return { ...prev, [activeStep.id]: optionId }
      }
    })
  }, [activeStep.id, activeStep.multiSelect, currentStep, steps.length])

  const isStepValid = useMemo(() => {
    const val = selections[activeStep.id]
    if (activeStep.multiSelect) return (val as string[])?.length > 0
    return !!val
  }, [selections, activeStep])

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setIsComplete(true)
    }
  }, [currentStep, steps.length])

  const prevStep = useCallback(() => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }, [currentStep])

  const reset = useCallback(() => {
    setIsComplete(false)
    setCurrentStep(0)
    setSelections({})
  }, [])

  return {
    steps,
    currentStep,
    activeStep,
    selections,
    calculation,
    isComplete,
    isStepValid,
    handleSelect,
    nextStep,
    prevStep,
    reset
  }
}
