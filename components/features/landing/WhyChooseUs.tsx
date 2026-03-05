

import { siteConfig } from '@/config/site'
import { Card } from '@/components/ui/card'

export default function WhyChooseUs() {
  const { whyChooseUs } = siteConfig
  const { reasons } = whyChooseUs

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            {whyChooseUs.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">{whyChooseUs.title}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            {whyChooseUs.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon
            return (
              <Card key={reason.title} className="group border-border bg-card p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="inline-flex p-3 bg-secondary rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{reason.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
