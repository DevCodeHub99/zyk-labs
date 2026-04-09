
'use client'

import React from 'react'
import { useEstimator } from './hooks/useEstimator'
import { StepHeader } from './components/StepHeader'
import { OptionGrid } from './components/OptionGrid'
import { Navigation } from './components/Navigation'
import { EstimatorResult } from './components/EstimatorResult'

/**
 * ProjectEstimator component - Modularized and refactored for clean code and readability.
 * Logic is handled by the useEstimator hook.
 */
export default function ProjectEstimator() {
  const {
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
  } = useEstimator()

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      {!isComplete ? (
        <>
          <StepHeader 
            currentStep={currentStep}
            totalSteps={steps.length}
            title={activeStep.title}
            displayTotal={calculation.displayTotal}
          />

          <OptionGrid 
            activeStep={activeStep}
            selections={selections}
            onSelect={handleSelect}
          />

          <Navigation 
            currentStep={currentStep}
            isLastStep={currentStep === steps.length - 1}
            isStepValid={isStepValid}
            displayTotal={calculation.displayTotal}
            onPrev={prevStep}
            onNext={nextStep}
          />
        </>
      ) : (
        <EstimatorResult 
          displayTotal={calculation.displayTotal}
          timeline={selections['timeline'] as string}
          scale={selections['scale'] as string}
          onReset={reset}
        />
      )}
    </div>
  )
}
