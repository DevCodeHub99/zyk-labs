'use client'

import {
  Code2,
  Globe,
  Zap,
  Palette,
  BarChart3,
  Wrench,
  Megaphone,
  ShoppingCart,
  Smartphone,
  Cloud,
  Bot,
  Share2,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Custom Web Applications',
      description: 'Production-ready applications built with modern frameworks. Scalable, secure, and optimized for performance.',
      features: ['React/Next.js', 'TypeScript', 'Database Design', 'Responsive Design'],
      price: 'From ₹50,000',
    },
    {
      icon: Code2,
      title: 'SaaS Development',
      description: 'Complete SaaS solutions from MVP to scale. Authentication, billing, and multi-tenant architecture included.',
      features: ['Full Stack', 'Payment Integration', 'User Management', 'Analytics'],
      price: 'From ₹3,00,000',
    },
    {
      icon: Zap,
      title: 'API & Backend Systems',
      description: 'Robust backend infrastructure and APIs designed for reliability and performance at scale.',
      features: ['Node.js/Python', 'REST/GraphQL', 'Database Optimization', 'Security'],
      price: 'From ₹40,000',
    },
    {
      icon: Palette,
      title: 'UI/UX Engineering',
      description: 'Custom interface design and implementation focused on user experience and conversion.',
      features: ['Design Systems', 'Component Libraries', 'Accessibility', 'Performance'],
      price: 'From ₹25,000',
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Speed up existing applications and optimize for conversion. Lighthouse scores 90+.',
      features: ['Load Time Optimization', 'SEO', 'Caching Strategy', 'Monitoring'],
      price: 'From ₹15,000',
    },
    {
      icon: Wrench,
      title: 'Ongoing Maintenance',
      description: 'Keep your application running smoothly with monitoring, updates, and priority support.',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Updates & Security', 'Technical Support'],
      price: 'From ₹5,000/mo',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Result-driven digital marketing strategies to boost your online presence, generate leads, and grow your brand.',
      features: ['Google & Meta Ads', 'SEO & Content Marketing', 'Email Campaigns', 'Analytics & Reporting'],
      price: 'From ₹15,000/mo',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Admin Handling',
      description: 'End-to-end e-commerce store management — product listings, orders, inventory, and customer support handled for you.',
      features: ['Product Catalog Management', 'Order & Inventory Tracking', 'Payment Gateway Setup', 'Customer Support'],
      price: 'From ₹10,000/mo',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for iOS and Android, built with performance and native-like experience.',
      features: ['React Native / Flutter', 'Push Notifications', 'App Store Deployment', 'Offline Support'],
      price: 'From ₹75,000',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure setup, CI/CD pipelines, and server management for reliable deployments.',
      features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Auto Scaling'],
      price: 'From ₹20,000',
    },
    {
      icon: Bot,
      title: 'Chatbot & AI Solutions',
      description: 'Intelligent chatbots and AI-powered tools to automate customer engagement and streamline business workflows.',
      features: ['WhatsApp & Web Chatbots', 'AI Content Generation', 'Lead Qualification Bots', 'CRM Integration'],
      price: 'From ₹30,000',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media presence management — content creation, scheduling, engagement, and performance tracking.',
      features: ['Content Calendar', 'Graphic Design & Reels', 'Community Management', 'Monthly Reports'],
      price: 'From ₹12,000/mo',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance">Services We Provide</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            From concept to production. We handle the entire development process with precision and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.title} className="border-border bg-card hover:border-accent/30 transition-colors p-8">
                <div className="space-y-6">
                  <div className="inline-flex p-3 bg-secondary rounded-lg">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-foreground/50 mb-3 uppercase tracking-wider">Includes</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-lg font-bold text-accent mb-4">{service.price}</p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <a href="#contact">Get Started</a>
                    </Button>
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
