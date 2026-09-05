export type CurrencyCode = 'USD' | 'INR' | 'EUR' | 'GBP'

export interface CurrencyDetails {
  code: CurrencyCode
  symbol: string
  label: string
  flag: string
  name: string
  locale: string
  estimatorMultiplier: number
}

export const CURRENCIES: Record<CurrencyCode, CurrencyDetails> = {
  USD: {
    code: 'USD',
    symbol: '$',
    label: 'USD ($)',
    flag: '🇺🇸',
    name: 'US Dollar',
    locale: 'en-US',
    estimatorMultiplier: 1,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    label: 'EUR (€)',
    flag: '🇪🇺',
    name: 'Euro',
    locale: 'de-DE',
    estimatorMultiplier: 0.92,
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    label: 'GBP (£)',
    flag: '🇬🇧',
    name: 'British Pound',
    locale: 'en-GB',
    estimatorMultiplier: 0.8,
  },
  INR: {
    code: 'INR',
    symbol: '₹',
    label: 'INR (₹)',
    flag: '🇮🇳',
    name: 'Indian Rupee',
    locale: 'en-IN',
    estimatorMultiplier: 50,
  },
}

export const CURRENCY_CODES: CurrencyCode[] = ['USD', 'EUR', 'GBP', 'INR']

export const BUDGETS_BY_CURRENCY: Record<CurrencyCode, string[]> = {
  USD: ['< $500', '$500 - $1k', '$1k - $2.5k', '$2.5k - $5k', '$5k+'],
  EUR: ['< €500', '€500 - €1k', '€1k - €2.5k', '€2.5k - €5k', '€5k+'],
  GBP: ['< £400', '£400 - £800', '£800 - £2k', '£2k - £4k', '£4k+'],
  INR: ['< ₹25k', '₹25k - ₹50k', '₹50k - ₹1L', '₹1L - ₹3L', '₹3L - ₹5L', '₹5L+'],
}

// Multi-currency base amounts for Estimator options (Lowest accessible pricing)
export const ESTIMATOR_PRICES_BY_CURRENCY: Record<string, Record<CurrencyCode, number>> = {
  // Platforms
  web: { USD: 249, EUR: 229, GBP: 199, INR: 20000 },
  mobile: { USD: 399, EUR: 369, GBP: 319, INR: 35000 },
  both: { USD: 599, EUR: 549, GBP: 479, INR: 50000 },
  // Features
  auth: { USD: 49, EUR: 45, GBP: 39, INR: 5000 },
  payments: { USD: 79, EUR: 75, GBP: 65, INR: 8000 },
  ai: { USD: 149, EUR: 139, GBP: 119, INR: 15000 },
  admin: { USD: 99, EUR: 89, GBP: 79, INR: 10000 },
  realtime: { USD: 69, EUR: 65, GBP: 55, INR: 7000 },
}

export function formatCurrencyAmount(amount: number, currency: CurrencyCode): string {
  const details = CURRENCIES[currency] || CURRENCIES.USD
  return new Intl.NumberFormat(details.locale, {
    style: 'currency',
    currency: details.code,
    maximumFractionDigits: 0,
  }).format(amount)
}
