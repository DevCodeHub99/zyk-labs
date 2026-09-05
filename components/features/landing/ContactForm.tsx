'use client'

import React, { useActionState, useState, useEffect } from 'react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'
import { submitContactForm } from '@/app/actions/contact'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { useCurrency } from '@/context/CurrencyContext'

/**
 * Submit button component using useFormStatus for progressive enhancement and loading states.
 */
function SubmitButton() {
  const { pending } = useFormStatus()
  const { global } = siteConfig

  return (
    <Button 
      variant="studio-primary"
      type="submit" 
      disabled={pending} 
      className="w-full h-16 rounded-full"
    >
      {pending ? global.cta.processing : global.cta.submit}
    </Button>
  )
}

const SuccessState = ({ message, onReset }: { message: string, onReset: () => void }) => (
  <div className="relative flex flex-col items-center justify-center text-center py-8 px-4 space-y-6 animate-in fade-in zoom-in-95 duration-700">
    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-2">
      <CheckCircle2 size={40} />
    </div>
    <div className="space-y-2">
      <h3 className="text-2xl font-black text-primary tracking-tighter uppercase italic-serif">Request Received</h3>
      <p className="text-sm text-foreground/60 font-medium max-w-xs mx-auto">{message}</p>
    </div>
    <Button onClick={onReset} variant="studio-outline" className="h-10 px-6">
      Send Another Brief
    </Button>
  </div>
)

export default function ContactForm() {
  const { contact } = siteConfig
  const { categories } = contact
  const { budgets } = useCurrency()
  
  // React 19 / Next.js Action State
  const [state, formAction] = useActionState(submitContactForm, null)
  
  // Local state for toggles (category/budget)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [selectedBudget, setSelectedBudget] = useState(budgets[0])

  // Sync selected budget when currency / budget tiers change
  useEffect(() => {
    if (!budgets.includes(selectedBudget)) {
      setSelectedBudget(budgets[0])
    }
  }, [budgets, selectedBudget])

  if (state?.status === 'success') {
    return <SuccessState message={state.message} onReset={() => window.location.reload()} />
  }

  return (
    <form action={formAction} className="grid md:grid-cols-2 gap-8">
      {/* Hidden inputs to capture the selected category/budget in the FormData */}
      <input type="hidden" name="category" value={selectedCategory} />
      <input type="hidden" name="budget" value={selectedBudget} />
      
      {/* Honeypot field for bot detection (Security) */}
      <input type="text" name="website_url" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="full-name" className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1 flex justify-between">
            Full Name
            {state?.errors?.name && <span className="text-red-500 lowercase font-bold">{state.errors.name[0]}</span>}
          </label>
          <input 
            id="full-name"
            type="text" 
            name="name" 
            required 
            autoComplete="name"
            className={`w-full bg-background border ${state?.errors?.name ? 'border-red-500/50' : 'border-border focus:border-accent'} rounded-xl px-4 py-4 text-sm font-bold outline-none transition-all`} 
            placeholder="Identity / Entity" 
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1 flex justify-between">
            Work Email
            {state?.errors?.email && <span className="text-red-500 lowercase font-bold">{state.errors.email[0]}</span>}
          </label>
          <input 
            id="email"
            type="email" 
            name="email" 
            required 
            autoComplete="email"
            className={`w-full bg-background border ${state?.errors?.email ? 'border-red-500/50' : 'border-border focus:border-accent'} rounded-xl px-4 py-4 text-sm font-bold outline-none transition-all`}
            placeholder="direct@company.com" 
          />
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1">Project Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat} 
                type="button" 
                onClick={() => setSelectedCategory(cat)} 
                className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${selectedCategory === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/40 text-foreground/40 border-transparent hover:border-accent/40'}`}
              >
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
              <button 
                key={b} 
                type="button" 
                onClick={() => setSelectedBudget(b)} 
                className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${selectedBudget === b ? 'bg-accent text-white border-accent' : 'bg-secondary/40 text-foreground/40 border-transparent hover:border-accent/40'}`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1 flex justify-between">
            Technical Brief
            {state?.errors?.message && <span className="text-red-500 lowercase font-bold">{state.errors.message[0]}</span>}
          </label>
          <textarea 
            id="message"
            name="message" 
            required 
            rows={3} 
            className={`w-full bg-background border ${state?.errors?.message ? 'border-red-500/50' : 'border-border focus:border-accent'} rounded-[2.5rem] px-6 py-6 text-sm font-bold outline-none transition-all resize-none`}
            placeholder="Core problem, required features, or constraints..." 
          />
        </div>

        {state?.status === 'error' && !state.errors && (
          <div className="flex items-center gap-2 text-red-500 text-[10px] font-black uppercase tracking-widest px-1">
            <AlertCircle size={14} /> {state.message}
          </div>
        )}

        <SubmitButton />
      </div>
    </form>
  )
}
