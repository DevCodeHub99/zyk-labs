
import { siteConfig } from '@/config/site'

const DEFAULT_MARQUEE_ITEMS = [
  "Internal Tools",
  "MVP focused",
  "Built for EdTech",
  "Built for SaaS",
  "Built for D2C",
  "AI Automations",
  "Scale Affordably"
]

// Memoize display items outside of component render cycle to save memory and CPU
const items = siteConfig.services.marquee || DEFAULT_MARQUEE_ITEMS
const displayItems = [...items, ...items, ...items, ...items]

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-secondary/50 backdrop-blur-sm border-y border-border py-4 sm:py-5 relative z-20">
      <div className="flex animate-marquee w-max will-change-transform">
        {displayItems.map((text, i) => (
          <div key={i} className="flex items-center min-w-max">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] px-6 sm:px-12 uppercase text-foreground/60 hover:text-foreground transition-colors cursor-default">
              {text}
            </span>
            <span className="text-accent text-lg leading-none select-none opacity-80" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
