'use client'

import { CheckCircle2, Zap, Shield, Users, Lightbulb, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: 'Clean, Scalable Code',
      description: 'We write code designed to last. Maintainable, tested, and following industry best practices.',
    },
    {
      icon: Zap,
      title: 'Fast Communication',
      description: 'Quick response times, regular updates, and transparent collaboration throughout your project.',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Security audits, encrypted data, compliance-ready. Your application and user data are protected.',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'You get a consistent team that knows your product. Not a rotating cast of developers.',
    },
    {
      icon: Lightbulb,
      title: 'Technical Expertise',
      description: 'Modern stack. Best practices. Architectural decisions made for long-term success, not shortcuts.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see real results: faster platforms, higher conversion, and sustainable growth.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance">Why Choose TechBuild</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            We're not just another development shop. Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const IconComponent = reason.icon
            return (
              <Card key={reason.title} className="border-border bg-card p-8 hover:border-accent/30 transition-colors">
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-secondary rounded-lg">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{reason.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <p className="text-sm text-foreground/60">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">0</div>
            <p className="text-sm text-foreground/60">Missed Deadlines</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">40+</div>
            <p className="text-sm text-foreground/60">Long-term Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
            <p className="text-sm text-foreground/60">Uptime Average</p>
          </div>
        </div>
      </div>
    </section>
  )
}
