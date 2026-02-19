'use client'

import { siteConfig } from '@/config/site'
import { Card } from '@/components/ui/card'

export default function Process() {
  const { process } = siteConfig
  const { steps } = process

  return (
    <section id="process" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            {process.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">{process.title}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            {process.description}
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative group">
                  {/* Step Marker */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-card border-4 border-secondary group-hover:border-accent transition-colors duration-500 flex items-center justify-center shadow-lg">
                      <div className="w-16 h-16 rounded-full bg-secondary/50 group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-500">
                        <Icon className="w-8 h-8 text-foreground/40 group-hover:text-accent transition-colors duration-500" />
                      </div>
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card className="text-center p-6 border-transparent bg-transparent hover:bg-card/50 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
