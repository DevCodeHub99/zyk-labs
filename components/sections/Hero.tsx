'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, PlayCircle } from 'lucide-react'
import DashboardMockup from '@/components/DashboardMockup'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent/20 opacity-20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                Accepting New Projects for Q2
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
                Build Faster. <br />
                Scale <span className="text-accent">Smarter.</span>
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
                TechBuild Labs transforms complex business requirements into high-performance, scalable web applications. We are the technical partner you've been looking for.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 transition-all hover:scale-105">
                <a href="#contact" className="flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Portfolio
                </a>
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>High Performance</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] lg:max-w-none transform transition-all duration-700 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
