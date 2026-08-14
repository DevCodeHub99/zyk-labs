'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'
import { start, stop } from '@event-overlay/independence-day'

interface EventOverlayProps {
  initialActive?: boolean
}

export default function EventOverlay({ initialActive = true }: EventOverlayProps) {
  const [isActive, setIsActive] = useState(initialActive)
  const [isMounted, setIsMounted] = useState(false)
  const instanceRef = useRef<ReturnType<typeof start> | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    if (isActive) {
      instanceRef.current = start({
        maxFlags: 2,
        maxKites: 4,
        maxJets: 1,
        maxFireworks: 2,
        maxPetals: 25,
        showGlow: true,
        showWave: true,
        waveOpacity: 0.5,
      })
    } else {
      stop()
      instanceRef.current = null
    }

    return () => {
      stop()
    }
  }, [isActive, isMounted])

  if (!isMounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <button
        onClick={() => setIsActive((prev) => !prev)}
        className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold backdrop-blur-md border transition-all duration-300 shadow-lg ${
          isActive
            ? 'bg-accent/20 border-accent/40 text-foreground hover:bg-accent/30'
            : 'bg-card/80 border-border text-foreground/70 hover:bg-card hover:text-foreground'
        }`}
        title={isActive ? 'Disable Independence Day Celebration Overlay' : 'Enable Independence Day Celebration Overlay'}
        aria-label="Toggle Celebration Overlay"
      >
        <span className="text-sm">🇮🇳</span>
        <span className="hidden sm:inline">
          {isActive ? 'Independence Day FX Active' : 'Enable 15 Aug Celebration'}
        </span>
        <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-accent animate-pulse' : 'text-foreground/40'}`} />
      </button>
    </div>
  )
}
