
import React from 'react'
import { Card } from '@/components/ui/card'

interface StudioCardProps {
  children: React.ReactNode
  className?: string
  glowClassName?: string
  innerClassName?: string
  showGlow?: boolean
}

/**
 * A premium glassmorphic card component tailored for the Zyklabs Studio aesthetic.
 * Features built-in backdrop blurring, adaptive borders, and ambient background glows.
 */
export default function StudioCard({
  children,
  className = '',
  glowClassName = '',
  innerClassName = '',
  showGlow = true,
}: StudioCardProps) {
  return (
    <Card className={`relative overflow-hidden border border-border/60 bg-card/40 backdrop-blur-xl shadow-2xl shadow-black/5 rounded-[2.5rem] group ${className}`}>
      {showGlow && (
        <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity group-hover:opacity-80 ${glowClassName}`} />
      )}
      <div className={`relative z-10 ${innerClassName}`}>
        {children}
      </div>
    </Card>
  )
}
