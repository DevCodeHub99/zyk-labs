'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'CloudSync Platform',
      category: 'SaaS',
      description: 'Real-time collaboration SaaS platform',
      results: '3x faster load times, 50% cost reduction',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
      image: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
    },
    {
      title: 'RetailFlow',
      category: 'E-Commerce',
      description: 'Multi-channel inventory management system',
      results: '$2M additional revenue in year 1',
      tech: ['Next.js', 'Python', 'Redis', 'Stripe'],
      image: 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20',
    },
    {
      title: 'DataVault Analytics',
      category: 'Enterprise Tool',
      description: 'Advanced analytics dashboard for enterprises',
      results: '90+ Lighthouse score, 99.9% uptime',
      tech: ['React', 'D3.js', 'AWS', 'GraphQL'],
      image: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20',
    },
    {
      title: 'TaskMaster App',
      category: 'Productivity',
      description: 'Team task and project management tool',
      results: '1M+ users, 4.8★ rating',
      tech: ['React Native', 'Firebase', 'TypeScript'],
      image: 'bg-gradient-to-br from-orange-500/20 to-orange-600/20',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance">Our Latest Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Real projects, real results. Here's what we've built for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <Card key={project.title} className="border-border bg-card overflow-hidden hover:border-accent/30 transition-colors">
              <div className={`h-48 ${project.image} flex items-center justify-center`} />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-foreground/50 mb-2 uppercase tracking-wider">Results</p>
                    <p className="text-sm font-semibold text-accent">{project.results}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-foreground/50 mb-2 uppercase tracking-wider">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2.5 py-1 text-xs rounded-full bg-secondary text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button asChild variant="ghost" className="mt-6 w-full justify-center text-accent hover:bg-secondary">
                  <a href="#contact" className="flex items-center gap-2">
                    View Case Study <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#contact">See All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
