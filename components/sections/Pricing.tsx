'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export default function Pricing() {
  const packages = [
    {
      name: 'Starter',
      description: 'For small projects and MVPs',
      price: '$15k',
      timeline: '8-12 weeks',
      features: [
        'Up to 5 core features',
        'Responsive design',
        'Basic backend setup',
        'Database design & setup',
        'Testing & QA',
        '4 weeks post-launch support',
        'Documentation',
      ],
      highlighted: false,
    },
    {
      name: 'Growth',
      description: 'For ambitious startups and businesses',
      price: '$35k',
      timeline: '12-16 weeks',
      features: [
        'Up to 15 features',
        'Advanced UI/UX design',
        'Full stack development',
        'Payment integration',
        'User authentication',
        'Performance optimization',
        '8 weeks post-launch support',
        'Analytics setup',
        'API documentation',
        'Unlimited revisions during dev',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For complex, scalable applications',
      price: 'Custom',
      timeline: '16+ weeks',
      features: [
        'Unlimited features',
        'Custom design system',
        'Advanced backend architecture',
        'Multi-tenant setup',
        'Advanced security',
        'CI/CD pipeline setup',
        'Ongoing support included',
        'Admin dashboard',
        'Advanced analytics',
        'Dedicated team',
        'Priority support',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance">Simple, Transparent Pricing</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            No hidden fees. No surprises. Choose the package that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative border p-8 transition-all ${
                pkg.highlighted
                  ? 'border-accent bg-card ring-2 ring-accent ring-offset-2 ring-offset-background'
                  : 'border-border bg-card/50'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{pkg.name}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{pkg.description}</p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-sm text-foreground/60 mt-1">{pkg.timeline}</p>
                </div>

                <Button
                  asChild
                  className={`w-full ${
                    pkg.highlighted
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  <a href="#contact">Get Started</a>
                </Button>

                <div className="space-y-3 pt-4 border-t border-border">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card border border-border rounded-xl text-center">
          <h3 className="text-xl font-bold text-primary mb-2">Need something custom?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Every project is unique. If none of these packages fit exactly, let's talk about your specific needs. We're happy to
            create a custom plan.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#contact">Request Custom Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
