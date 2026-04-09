
import { useState, useMemo } from 'react'
import { siteConfig } from '@/config/site'

export type Selection = Record<string, string | string[]>

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount)
}

export function useEstimator() {
  const { estimator } = siteConfig
  const steps = estimator.steps
  
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<Selection>({})
  const [isComplete, setIsComplete] = useState(false)

  const activeStep = steps[currentStep]

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
      displayTotal: formatCurrency(total)
    }
  }, [selections, steps])

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

  const reset = () => {
    setIsComplete(false)
    setCurrentStep(0)
    setSelections({})
  }

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
