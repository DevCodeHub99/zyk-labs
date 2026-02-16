'use client'

import {
  Globe,
  Smartphone,
  Server,
  Palette,
  Zap,
  ShoppingBag,
  TrendingUp,
  RefreshCw,
  ClipboardList
} from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web & SaaS Products',
      description: 'Custom, scalable web applications built to grow your business.',
      features: ['Custom Web Apps', 'SaaS Architecture', 'Progressive Web Apps', 'Enterprise Portals'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'iOS & Android apps with seamless UX and performance.',
      features: ['React Native', 'Native iOS/Android', 'App Store Launch', 'Cross-Platform'],
    },
    {
      icon: Server,
      title: 'Cloud & Backend Engineering',
      description: 'Robust APIs, database systems, and cloud infrastructure.',
      features: ['AWS/Azure/GCP', 'Microservices', 'GraphQL & REST', 'Database Design'],
    },
    {
      icon: Palette,
      title: 'UI/UX & Frontend Design',
      description: 'Design-driven interfaces that delight users.',
      features: ['User Research', 'Wireframing', 'Interactive Prototypes', 'Design Systems'],
    },
    {
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Speed boosts, SEO strategy, and analytics optimization.',
      features: ['Core Web Vitals', 'Technical SEO', 'Load Time Speed', 'Conversion Rate Opt'],
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Solutions',
      description: 'Conversion-focused online stores and payments.',
      features: ['Shopify/WooCommerce', 'Payment Gateways', 'Inventory Sync', 'Custom Checkout'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'SEO, ads, social, and email to grow your audience.',
      features: ['Social Media Ads', 'Email Campaigns', 'Content Strategy', 'Growth Hacking'],
    },
    {
      icon: RefreshCw,
      title: 'Maintenance & Support',
      description: 'Ongoing site updates, bug fixes, and security monitoring.',
      features: ['24/7 Monitoring', 'Security Patches', 'Regular Backups', 'Performance Audits'],
    },
    {
      icon: ClipboardList,
      title: 'Strategy, Audit & Consulting',
      description: 'In-depth analysis of existing systems with actionable recommendations.',
      features: ['Code Reviews', 'Tech Stack Audit', 'Product Roadmap', 'Scalability Plan'],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Services Section */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance tracking-tight">
            Solutions Built for Growth
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance leading-relaxed">
            From concept to scale, we provide the technical expertise to turn your vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => {
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
