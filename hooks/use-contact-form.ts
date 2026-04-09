
import { useState } from 'react'

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface ContactFormData {
  name: string
  email: string
  category: string
  budget: string
  message: string
}

const INITIAL_DATA: ContactFormData = {
  name: '',
  email: '',
  category: '',
  budget: '',
  message: '',
}

/**
 * Custom hook to manage contact form state, validation, and submission logic.
 * Follows 'Clean Code' principles by separating business logic from UI components.
 */
export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Full Name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email required'
    if (!formData.category) newErrors.category = 'Category required'
    if (!formData.budget) newErrors.budget = 'Budget required'
    if (formData.message.length < 20) newErrors.message = 'Detail required (min 20 chars)'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    validate()
  }

  const selectOption = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const resetStatus = () => setStatus('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, category: true, budget: true, message: true })
    
    if (!validate()) return
    
    setStatus('submitting')
    const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

    try {
      if (!FORMSPREE_ID) {
        setStatus('error')
        setTimeout(resetStatus, 3000)
        return
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData(INITIAL_DATA)
        setErrors({})
        setTouched({})
        setTimeout(resetStatus, 5000)
      } else {
        setStatus('error')
        setTimeout(resetStatus, 3000)
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
      setTimeout(resetStatus, 3000)
    }
  }

  return {
    formData,
    status,
    errors,
    touched,
    handleChange,
    handleBlur,
    selectOption,
    handleSubmit,
    resetStatus,
    setStatus,
  }
}
