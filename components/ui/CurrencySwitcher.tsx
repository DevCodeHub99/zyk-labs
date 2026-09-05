'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'
import { useCurrency } from '@/context/CurrencyContext'
import { CURRENCY_CODES, CURRENCIES, CurrencyCode } from '@/config/currencies'

interface CurrencySwitcherProps {
  variant?: 'dropdown' | 'pills'
  className?: string
}

export default function CurrencySwitcher({ variant = 'dropdown', className = '' }: CurrencySwitcherProps) {
  const { currency, setCurrency, isLoaded } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!isLoaded) {
    return (
      <div className={`h-9 w-24 rounded-full bg-secondary/30 animate-pulse ${className}`} />
    )
  }

  if (variant === 'pills') {
    return (
      <div className={`inline-flex items-center p-1 rounded-full bg-secondary/40 border border-border/50 ${className}`}>
        {CURRENCY_CODES.map((code) => {
          const item = CURRENCIES[code]
          const isSelected = currency === code
          return (
            <button
              key={code}
              type="button"
              onClick={() => setCurrency(code)}
              className={`relative px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                isSelected
                  ? 'text-primary shadow-sm'
                  : 'text-foreground/50 hover:text-foreground'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="currency-pill-active"
                  className="absolute inset-0 bg-background border border-border rounded-full shadow-sm"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10 text-xs leading-none">{item.flag}</span>
              <span className="relative z-10 font-bold">{item.code}</span>
            </button>
          )
        })}
      </div>
    )
  }

  const activeDetails = CURRENCIES[currency] || CURRENCIES.USD

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-9 px-3 rounded-full bg-secondary/30 hover:bg-secondary/60 border border-border/40 hover:border-border transition-all duration-300 text-foreground/80 hover:text-foreground flex items-center gap-1.5 text-[11px] font-black tracking-wider uppercase group"
        aria-label="Select Currency"
        aria-expanded={isOpen}
      >
        <span className="text-xs leading-none">{activeDetails.flag}</span>
        <span className="font-bold">{activeDetails.code}</span>
        <ChevronDown
          className={`w-3 h-3 text-foreground/40 group-hover:text-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-44 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl shadow-black/10 p-1.5 z-50 overflow-hidden"
          >
            <div className="px-2.5 py-1.5 text-[9px] font-black uppercase tracking-widest text-foreground/40 border-b border-border/40 mb-1">
              Select Currency
            </div>
            {CURRENCY_CODES.map((code) => {
              const item = CURRENCIES[code]
              const isSelected = currency === code
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setCurrency(code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? 'bg-accent text-white shadow-sm'
                      : 'text-foreground/70 hover:bg-secondary/60 hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm leading-none">{item.flag}</span>
                    <span className="uppercase tracking-wider text-[11px] font-black">{item.code}</span>
                    <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-foreground/40'}`}>
                      ({item.symbol})
                    </span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
