'use client'

import { Rocket, Users, ShoppingCart, Briefcase, TrendingUp, Smartphone } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Industries() {
  const industries = [
    {
      icon: Rocket,
      title: 'Startups',
      description: 'MVP to scale-ready product. We understand the startup journey and build with growth in mind.',
    },
    {
      icon: Users,
      title: 'Small Business',
      description: 'Digital transformation for small teams. Custom solutions that streamline operations and increase revenue.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'High-performance online stores with payment integration, inventory management, and conversion optimization.',
    },
    {
      icon: Briefcase,
      title: 'Enterprise',
      description: 'Scalable solutions for large organizations. Integration, security, and support at enterprise level.',
    },
    {
      icon: TrendingUp,
      title: 'SaaS Products',
      description: 'Complete SaaS platform development. Multi-tenant architecture, billing, and user management built-in.',
    },
    {
      icon: Smartphone,
      title: 'Internal Tools',
      description: 'Speed up team productivity with custom internal applications. Fast delivery, no shortcuts on quality.',
    },
  ]

  return (
    <section id="industries" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance">Industries We Serve</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Whether you're a startup, small business, or enterprise, we have the expertise to build what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const IconComponent = industry.icon
            return (
              <Card
                key={industry.title}
                className="border-border bg-card/50 hover:bg-card hover:border-accent/30 transition-all p-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-accent/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{industry.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{industry.description}</p>
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
