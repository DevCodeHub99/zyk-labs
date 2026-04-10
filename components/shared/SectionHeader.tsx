
import React from 'react'

interface SectionHeaderProps {
  badge: string
  title: React.ReactNode
  description: string
  className?: string
  badgeClassName?: string
  align?: 'left' | 'center' | 'right'
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
  align = 'center',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const paragraphAlignmentClasses = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto'
  }

  return (
    <div className={`${alignmentClasses[align]} space-y-4 mb-10 md:mb-16 ${className}`}>
      <div className={`inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-primary ${badgeClassName}`}>
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tighter leading-[1.1] md:leading-tight italic-serif">
        {title}
      </h2>
      <p className={`text-sm md:text-base text-foreground/50 max-w-2xl font-medium leading-relaxed px-4 md:px-0 ${paragraphAlignmentClasses[align]}`}>
        {description}
      </p>
    </div>
  )
}
