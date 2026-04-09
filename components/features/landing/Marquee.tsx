import { siteConfig } from '@/config/site'

export default function Marquee() {
  const items = siteConfig.services.marquee || [
    "Internal Tools",
    "MVP focused",
    "Built for EdTech",
    "Built for SaaS",
    "Built for D2C",
    "AI Automations",
    "Scale Affordably"
  ]

  // Duplicate items heavily so the scrolling track is wide enough to never show a gap before repeating.
  // The CSS animation shifts it exactly 50% left, so the array content must be duplicated perfectly.
  const displayItems = [...items, ...items, ...items, ...items, ...items, ...items]

  return (
    <div className="w-full overflow-hidden bg-secondary/50 backdrop-blur-sm border-y border-border py-4 sm:py-5 relative z-20">
      <div className="flex animate-marquee w-max">
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
