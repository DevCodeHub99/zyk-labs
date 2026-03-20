'use client'

import { siteConfig } from '@/config/site'
import React, { useState, useEffect } from "react"
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Calendar, CheckCircle, Shield } from 'lucide-react'
import { getCalApi } from "@calcom/embed-react";

export default function Contact() {
  const { contact } = siteConfig
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

    try {
      if (!FORMSPREE_ID) {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
        return
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            {contact.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">{contact.title}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            {contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details & Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-card hover:border-accent/40 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Mail size={20} />
                </div>
                <h3 className="font-bold text-primary mb-1">{contact.email.label}</h3>
                <p className="text-sm text-foreground/70 mb-2">{contact.email.subtext}</p>
                <a href={`mailto:${contact.email.value}`} className="text-accent hover:underline font-medium">{contact.email.value}</a>
              </Card>

              <Card className="p-6 border-border bg-card hover:border-accent/40 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Calendar size={20} />
                </div>
                <h3 className="font-bold text-primary mb-1">{contact.booking.label}</h3>
                <p className="text-sm text-foreground/70 mb-2">{contact.booking.subtext}</p>
                <button
                  data-cal-namespace="30min"
                  data-cal-link={`${process.env.NEXT_PUBLIC_CAL_LINK || "zyklabs/30min"}?name=&email=`}
                  data-cal-config='{"layout":"month_view"}'
                  className="text-accent hover:underline font-medium bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  {contact.booking.cta}
                </button>
              </Card>
            </div>

            <Card className="p-8 border-border bg-primary text-primary-foreground relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">{contact.promo.title}</h3>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  {contact.promo.description}
                </p>
                <div className="flex gap-4">
                  {contact.social.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit us on ${social.icon.displayName || 'social media'}`}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>
              {/* Decoration */}
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
            </Card>
          </div>

          {/* Form */}
          <Card className="border-border bg-card p-8 md:p-10 shadow-lg">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-10 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">We've Got Your Request!</h3>
                  <p className="text-foreground/70 max-w-xs mx-auto">
                    Expect a response within 24 hours. We'll review your project and send you a free estimate.
                  </p>
                </div>
                <Button
                  onClick={() => setStatus('idle')}
                  variant="outline"
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-primary mb-6">Request a Free Estimate</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground/80">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                        placeholder="John Doe"
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground/80">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                        placeholder="john@company.com"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-foreground/80">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="Your Company Inc."
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground/80">
                      What are you trying to build? (Rough ideas are fine)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                      placeholder="Project scope, timeline, budget..."
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'submitting'}
                    className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground text-base font-medium shadow-lg shadow-accent/20"
                  >
                    {status === 'submitting' ? 'Generating Request...' : 'Get Your Free Estimate'}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-foreground/50 pt-1">
                    <Shield size={14} className="text-accent/60" />
                    <span>We respond within 24 hours. Your data stays 100% private.</span>
                  </div>
                </form>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
