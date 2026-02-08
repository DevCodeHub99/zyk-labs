'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import DashboardMockup from '@/components/DashboardMockup'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
                We Build Fast, Scalable Web Applications for Growing Businesses
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl text-balance">
                From concept to production-ready deployment. We deliver custom web and SaaS solutions that solve real business problems and drive measurable results.
              </p>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <div className="text-3xl font-bold text-accent">40+</div>
                <p className="text-sm text-foreground/60 mt-1">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">30+</div>
                <p className="text-sm text-foreground/60 mt-1">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">8+</div>
                <p className="text-sm text-foreground/60 mt-1">Years Experience</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#projects" className="flex items-center gap-2">
                  View Our Work <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <a href="#contact">Book a Call</a>
              </Button>
            </div>
          </div>

          {/* Right Visual - Premium Dashboard Mockup */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
