import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { CurrencyCode } from '@/config/currencies'

const EUR_COUNTRIES = new Set([
  'AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 
  'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES', 'DK', 
  'SE', 'NO', 'CH', 'PL', 'CZ', 'HU', 'RO', 'BG', 'HR'
])

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  // 1. If user already chose a currency explicitly, do not override
  const userCurrency = request.cookies.get('user-currency')?.value
  if (userCurrency && ['USD', 'INR', 'EUR', 'GBP'].includes(userCurrency)) {
    return response
  }

  // 2. Detect country from Vercel / Cloudflare edge headers
  const country = (
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    ''
  ).toUpperCase()

  let detectedCurrency: CurrencyCode = 'USD'

  if (country === 'IN') {
    detectedCurrency = 'INR'
  } else if (country === 'GB') {
    detectedCurrency = 'GBP'
  } else if (EUR_COUNTRIES.has(country)) {
    detectedCurrency = 'EUR'
  } else {
    // Default for US, Canada, Australia, and rest of world
    detectedCurrency = 'USD'
  }

  // 3. Set detected-currency cookie for zero-latency client hydration
  response.cookies.set('detected-currency', detectedCurrency, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: 'lax',
  })

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
