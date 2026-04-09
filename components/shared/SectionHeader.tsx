
import React from 'react'

interface SectionHeaderProps {
  badge: string
  title: React.ReactNode
  description: string
  className?: string
  badgeClassName?: string
}

/**
 * Standardized Section Header for the Zyklabs Studio identity.
 * Ensures architectural consistency, symmetrical alignment, and premium vertical rhythm.
 */
export default function SectionHeader({
  badge,
  title,
  description,
  className = '',
  badgeClassName = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center space-y-4 mb-12 md:mb-16 ${className}`}>
      <div className={`inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-primary ${badgeClassName}`}>
        {badge}
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-tight italic-serif">
        {title}
      </h2>
      <p className="text-base text-foreground/50 max-w-2xl mx-auto font-medium leading-relaxed">
        {description}
      </p>
    </div>
  )
}
