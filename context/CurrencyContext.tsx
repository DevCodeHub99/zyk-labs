'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import {
  CurrencyCode,
  CURRENCIES,
  CurrencyDetails,
  BUDGETS_BY_CURRENCY,
  formatCurrencyAmount,
} from '@/config/currencies'
import { PricingPlan } from '@/types'

interface CurrencyContextType {
  currency: CurrencyCode
  setCurrency: (code: CurrencyCode) => void
  currencyDetails: CurrencyDetails
  budgets: string[]
  formatAmount: (amount: number, customCurrency?: CurrencyCode) => string
  getPlanPrice: (plan: PricingPlan) => string
  isLoaded: boolean
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === 'undefined') return
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`
}

function detectClientCurrency(): CurrencyCode {
  // 1. Check cookies
  const userCookie = getCookie('user-currency')
  if (userCookie && ['USD', 'INR', 'EUR', 'GBP'].includes(userCookie)) {
    return userCookie as CurrencyCode
  }

  const detectedCookie = getCookie('detected-currency')
  if (detectedCookie && ['USD', 'INR', 'EUR', 'GBP'].includes(detectedCookie)) {
    return detectedCookie as CurrencyCode
  }

  // 2. Check localStorage
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('zyk-currency')
    if (saved && ['USD', 'INR', 'EUR', 'GBP'].includes(saved)) {
      return saved as CurrencyCode
    }
  }

  // 3. Fallback: Check user timezone / locale
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    if (timeZone.includes('Calcutta') || timeZone.includes('Kolkata') || timeZone.includes('India')) {
      return 'INR'
    }
    if (timeZone.includes('London')) {
      return 'GBP'
    }
    if (timeZone.startsWith('Europe/')) {
      return 'EUR'
    }
  } catch {
    // Ignore error
  }

  // Default international standard
  return 'USD'
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('USD')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const initial = detectClientCurrency()
    setCurrencyState(initial)
    setIsLoaded(true)
  }, [])

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code)
    setCookie('user-currency', code)
    if (typeof window !== 'undefined') {
      localStorage.setItem('zyk-currency', code)
    }
  }, [])

  const currencyDetails = useMemo(() => CURRENCIES[currency] || CURRENCIES.USD, [currency])
  const budgets = useMemo(() => BUDGETS_BY_CURRENCY[currency] || BUDGETS_BY_CURRENCY.USD, [currency])

  const formatAmount = useCallback(
    (amount: number, customCurrency?: CurrencyCode) => {
      return formatCurrencyAmount(amount, customCurrency || currency)
    },
    [currency]
  )

  const getPlanPrice = useCallback(
    (plan: PricingPlan): string => {
      if (!plan.price) return ''
      if (typeof plan.price === 'string') return plan.price
      return plan.price[currency] || plan.price.USD || ''
    },
    [currency]
  )

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      currencyDetails,
      budgets,
      formatAmount,
      getPlanPrice,
      isLoaded,
    }),
    [currency, setCurrency, currencyDetails, budgets, formatAmount, getPlanPrice, isLoaded]
  )

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
