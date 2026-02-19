'use client'

import { siteConfig } from '@/config/site'
import { Card } from '@/components/ui/card'

export default function Services() {
  const { services } = siteConfig
  const { items } = services

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Services Section */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            {services.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance tracking-tight">
            {services.title}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance leading-relaxed">
            {services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {items.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <Card key={service.title} className="group relative border-border bg-card hover:border-accent/50 transition-all duration-300 p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
                <div className="space-y-6">
                  <div className="inline-flex p-3 bg-secondary rounded-xl group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <IconComponent className="w-6 h-6 text-foreground/70 group-hover:text-accent transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
