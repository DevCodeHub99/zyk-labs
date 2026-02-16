'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink, BarChart3, ShoppingBag, Layout, Smartphone } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'NexDash Analytics',
      category: 'SaaS Platform',
      description: 'A comprehensive analytics dashboard for enterprise data visualization. Features real-time websocket updates and custom reporting engines.',
      tech: ['React', 'Next.js', 'PostgreSQL', 'D3.js'],
      color: 'from-blue-600 to-indigo-600',
      icon: BarChart3,
      link: '#'
    },
    {
      title: 'LuxeCart Commerce',
      category: 'E-Commerce',
      description: 'Headless e-commerce solution built for a luxury fashion brand. optimized for core web vitals and conversion rates.',
      tech: ['Next.js', 'Shopify', 'Tailwind', 'Redis'],
      color: 'from-emerald-500 to-teal-500',
      icon: ShoppingBag,
      link: '#'
    },
    {
      title: 'FinFlow App',
      category: 'Fintech',
      description: 'Mobile-first banking application with secure biometric authentication and instant peer-to-peer payments.',
      tech: ['React Native', 'Node.js', 'Firebase', 'TypeScript'],
      color: 'from-purple-600 to-pink-600',
      icon: Smartphone,
      link: '#'
    },
    {
      title: 'HealthTrack Pro',
      category: 'Healthcare',
      description: 'HIPAA-compliant patient management system for multi-location clinics. Integrated appointment scheduling and telemedicine.',
      tech: ['React', 'Python', 'AWS', 'Docker'],
      color: 'from-orange-500 to-red-500',
      icon: Layout,
      link: '#'
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">Featured Projects</h2>
            <p className="text-lg text-foreground/60 leading-relaxed text-balance">
              Take a look at some of our recent work. We build software that matters.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="#github" className="flex items-center gap-2">
              View Github <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="group border-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5">
                {/* Visual Placeholder */}
                <div className={`h-64 bg-gradient-to-br ${item.color} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Overlay Link */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <Button variant="secondary" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Case Study
                    </Button>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center md:hidden">
          <Button asChild size="lg" variant="outline" className="w-full border-primary text-primary">
            <a href="#github">View Github</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
