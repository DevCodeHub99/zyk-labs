
/**
 * Simple Production Logger Utility
 */
const isProduction = process.env.NODE_ENV === 'production'

export const logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] [${new Date().toISOString()}] ${message}`, data || '')
  },
  error: (message: string, error?: any) => {
    // In production, this would send to Sentry or Logtail
    console.error(`[ERROR] [${new Date().toISOString()}] ${message}`, error || '')
  },
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] [${new Date().toISOString()}] ${message}`, data || '')
  }
}
