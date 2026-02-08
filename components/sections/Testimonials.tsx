'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "TechBuild completely transformed our product. They delivered on time, communicated clearly, and the code quality is exceptional. Highly recommended.",
      author: 'Sarah Chen',
      role: 'Founder & CEO',
      company: 'CloudStart Inc.',
      rating: 5,
    },
    {
      quote:
        'We tried other agencies, but TechBuild delivered results we actually expected. They understood our business goals, not just technical requirements.',
      author: 'Michael Rodriguez',
      role: 'Product Director',
      company: 'RetailFlow',
      rating: 5,
    },
    {
      quote:
        "Working with TechBuild was a breath of fresh air. Fast communication, no drama, and a team that actually cares about getting things right.",
      author: 'Emily Watson',
      role: 'CTO',
      company: 'DataVault Systems',
      rating: 5,
    },
    {
      quote:
        "The level of professionalism and attention to detail is impressive. They built exactly what we needed, and the app has been rock-solid in production.",
      author: 'James Park',
      role: 'VP Engineering',
      company: 'TaskMaster Inc.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance">What Our Clients Say</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Don't just take our word for it. Here's what our clients think.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card p-8">
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-foreground/80 leading-relaxed italic">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-accent">40+</div>
            <p className="text-sm text-foreground/60 mt-2">Projects Delivered</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">30+</div>
            <p className="text-sm text-foreground/60 mt-2">Happy Clients</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">4.9</div>
            <p className="text-sm text-foreground/60 mt-2">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">98%</div>
            <p className="text-sm text-foreground/60 mt-2">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
