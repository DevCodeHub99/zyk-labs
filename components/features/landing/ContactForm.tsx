'use client'

import React from 'react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'
import { useContactForm } from '@/hooks/use-contact-form'

const SuccessState = ({ onReset }: { onReset: () => void }) => (
  <div className="relative flex flex-col items-center justify-center text-center py-4 px-2 space-y-4 animate-in fade-in zoom-in-95 duration-700 overflow-hidden">
    <div className="absolute inset-0 bg-emerald-500/5 rounded-[3rem] blur-3xl" />
    <h3 className="text-2xl font-black text-primary tracking-tighter uppercase italic-serif">Request Received</h3>
    <p className="text-xs text-foreground/60 font-medium">Our engineering lead will reach out within 24 hours.</p>
    <Button onClick={onReset} variant="ghost" className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">
      Send Another
    </Button>
  </div>
)

export default function ContactForm() {
  const { contact } = siteConfig
  const { categories, budgets } = contact
  const { 
    formData, status, errors, touched, 
    handleChange, handleBlur, selectOption, handleSubmit, resetStatus 
  } = useContactForm()

  if (status === 'success') return <SuccessState onReset={resetStatus} />

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1 flex justify-between">
            Full Name
            {touched.name && errors.name && <span className="text-red-500 flex items-center gap-1 lowercase">required</span>}
          </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={() => handleBlur('name')} required className={`w-full bg-background border ${touched.name && errors.name ? 'border-red-500' : 'border-border focus:border-accent'} rounded-xl px-4 py-4 text-sm font-bold outline-none transition-all`} placeholder="Your Name" />
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1 flex justify-between">
            Work Email
            {touched.email && errors.email && <span className="text-red-500 flex items-center gap-1 lowercase">invalid email</span>}
          </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={() => handleBlur('email')} required className={`w-full bg-background border ${touched.email && errors.email ? 'border-red-500' : 'border-border focus:border-accent'} rounded-xl px-4 py-4 text-sm font-bold outline-none transition-all`} placeholder="Email Address" />
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1">Project Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} type="button" onClick={() => selectOption('category', cat)} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${formData.category === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/40 text-foreground/40 border-transparent hover:border-accent/40'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1">Estimated Budget</label>
          <div className="flex flex-wrap gap-2">
            {budgets.map((b) => (
              <button key={b} type="button" onClick={() => selectOption('budget', b)} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${formData.budget === b ? 'bg-accent text-white border-accent' : 'bg-secondary/40 text-foreground/40 border-transparent hover:border-accent/40'}`}>
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1 flex justify-between">
            Requirements
            {touched.message && errors.message && <span className="text-red-500 flex items-center gap-1 lowercase">min 20 chars</span>}
          </label>
          <textarea name="message" value={formData.message} onChange={handleChange} onBlur={() => handleBlur('message')} required rows={3} className={`w-full bg-background border ${touched.message && errors.message ? 'border-red-500' : 'border-border focus:border-accent'} rounded-2xl px-5 py-5 text-sm font-bold outline-none transition-all resize-none`} placeholder="Describe your project..." />
        </div>

        <Button type="submit" disabled={status === 'submitting'} className="w-full h-16 rounded-full bg-primary hover:opacity-90 text-primary-foreground font-black uppercase tracking-widest text-[10px] shadow-xl">
          {status === 'submitting' ? siteConfig.global.cta.processing : siteConfig.global.cta.submit}
        </Button>
      </div>
    </form>
  )
}
