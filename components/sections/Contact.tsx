'use client'

import React from "react"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance">Let's Discuss Your Project</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Ready to turn your vision into reality? Reach out and let's see how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-border bg-card p-8 hover:border-accent/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Email</h3>
                <a href="mailto:hello@techbuild.dev" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  hello@techbuild.dev
                </a>
              </div>
            </div>
          </Card>

          <Card className="border-border bg-card p-8 hover:border-accent/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </Card>

          <Card className="border-border bg-card p-8 hover:border-accent/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Location</h3>
                <p className="text-foreground/70 text-sm">Remote First / Based in US</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border bg-card p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            <Card className="border-border bg-secondary/50 p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Quick Response Time</h3>
              <p className="text-foreground/70 text-sm mb-4">
                We typically respond to inquiries within 24 hours. For urgent matters, give us a call.
              </p>
            </Card>

            <Card className="border-border bg-secondary/50 p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Free Discovery Call</h3>
              <p className="text-foreground/70 text-sm mb-6">
                No obligation. Let's discuss your project, timeline, and budget. We'll give you honest feedback on what's possible.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contact">Schedule a Call</a>
              </Button>
            </Card>

            <Card className="border-border bg-secondary/50 p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Connect on LinkedIn</h3>
              <p className="text-foreground/70 text-sm mb-6">
                Follow our updates and insights on software development and business.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <a href="#" className="flex items-center justify-center gap-2">
                  <Linkedin size={18} /> Follow Us
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
