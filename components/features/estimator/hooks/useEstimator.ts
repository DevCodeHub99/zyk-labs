'use client'

import { useState, useMemo, useCallback } from 'react'
import { siteConfig } from '@/config/site'
import { useCurrency } from '@/context/CurrencyContext'
import { ESTIMATOR_PRICES_BY_CURRENCY, formatCurrencyAmount } from '@/config/currencies'
import { EstimatorOption } from '@/types'

export type Selection = Record<string, string | string[]>

export function useEstimator() {
  const { estimator } = siteConfig
  const steps = estimator.steps
  const { currency, formatAmount } = useCurrency()

  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<Selection>({})
  const [isComplete, setIsComplete] = useState(false)

  const activeStep = steps[currentStep]

  // Helper to get localized price for any option
  const getOptionPrice = useCallback(
    (option: EstimatorOption) => {
      const priceMap = ESTIMATOR_PRICES_BY_CURRENCY[option.id]
      if (priceMap && priceMap[currency]) {
        return priceMap[currency]
      }
      if (option.basePrice) {
        return option.basePrice
      }
      if (option.price) {
        return option.price
      }
      return 0
    },
    [currency]
  )

  // Memoize the calculation logic to calculate in active currency
  const calculation = useMemo(() => {
    let total = 0

    // 1. Base Platform Price
    const platformId = selections['platform'] as string
    if (platformId) {
      const platform = steps.find((s) => s.id === 'platform')?.options.find((o) => o.id === platformId)
      if (platform) {
        const platformPrice = ESTIMATOR_PRICES_BY_CURRENCY[platformId]?.[currency] ?? platform.basePrice ?? 0
        total += platformPrice
      }
    }

    // 2. Scale Multiplier
    const scaleId = selections['scale'] as string
    const scale = steps.find((s) => s.id === 'scale')?.options.find((o) => o.id === scaleId)
    if (scale?.multiplier) total *= scale.multiplier

    // 3. Features Adder
    const featureIds = (selections['features'] || []) as string[]
    featureIds.forEach((id) => {
      const featPrice = ESTIMATOR_PRICES_BY_CURRENCY[id]?.[currency] ?? 0
      total += featPrice
    })

    // 4. Timeline Multiplier
    const timelineId = selections['timeline'] as string
    const timeline = steps.find((s) => s.id === 'timeline')?.options.find((o) => o.id === timelineId)
    if (timeline?.multiplier) total *= timeline.multiplier

    const rounded = Math.round(total)

    return {
      total: rounded,
      displayTotal: formatAmount(rounded),
    }
  }, [selections, steps, currency, formatAmount])

  // Memoize event handlers
  const handleSelect = useCallback(
    (optionId: string) => {
      setSelections((prev) => {
        if (activeStep.multiSelect) {
          const current = (prev[activeStep.id] || []) as string[]
          const next = current.includes(optionId)
            ? current.filter((id) => id !== optionId)
            : [...current, optionId]
          return { ...prev, [activeStep.id]: next }
        } else {
          // Auto-advance for single select
          if (currentStep < steps.length - 1) {
            setTimeout(() => setCurrentStep((s) => s + 1), 300)
          }
          return { ...prev, [activeStep.id]: optionId }
        }
      })
    },
    [activeStep.id, activeStep.multiSelect, currentStep, steps.length]
  )

  const isStepValid = useMemo(() => {
    const val = selections[activeStep.id]
    if (activeStep.multiSelect) return (val as string[])?.length > 0
    return !!val
  }, [selections, activeStep])

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setIsComplete(true)
    }
  }, [currentStep, steps.length])

  const prevStep = useCallback(() => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1)
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
    reset,
    getOptionPrice,
  }
}

// Fallback exported formatter for backwards compatibility
export const formatCurrency = (amount: number) => formatCurrencyAmount(amount, 'INR')
