'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

export default function Projects() {
  const { projects } = siteConfig
  const { items } = projects
  const [displayCount, setDisplayCount] = useState(2)
  const hasMore = displayCount < items.length

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              {projects.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">{projects.title}</h2>
            <p className="text-lg text-foreground/60 leading-relaxed text-balance">
              {projects.description}
            </p>
          </div>
          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 transition-all hover:scale-105 border-0 relative group">
            <a href={projects.cta.href} className="flex items-center gap-2">
              {projects.cta.text} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {items.slice(0, displayCount).map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="group border-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5">
                {/* Visual Placeholder */}
                <div className={`h-64 bg-gradient-to-br ${item.color} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:opacity-0">
                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Overlay Link (Desktop Only) */}
                  <div className="hidden md:flex absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 items-center justify-center backdrop-blur-sm">
                    {item.link && item.link !== '#' && (
                      <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-white translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-lg shadow-accent/25 border-0">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Live Project <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
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

                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Mobile View CTA */}
                  {item.link && item.link !== '#' && (
                    <div className="md:hidden mb-6">
                      <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white transition-colors">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          Live Project <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  )}

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

        {items.length > 2 && (
          <div className="flex justify-center mb-16">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                if (hasMore) {
                  setDisplayCount(items.length)
                } else {
                  setDisplayCount(2)
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="border-primary/20 text-primary hover:bg-primary/5 hover:text-primary transition-all group px-8"
            >
              {hasMore ? (
                <>
                  View All Projects <ChevronDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
                </>
              ) : (
                <>
                  Show Less <ChevronUp className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-1" />
                </>
              )}
            </Button>
          </div>
        )}

        <div className="text-center md:hidden">
          <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 transition-all border-0 group">
            <a href={projects.cta.href} className="flex items-center justify-center gap-2">
              {projects.cta.text} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
