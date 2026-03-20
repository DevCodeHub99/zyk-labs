'use client'

import { useEffect, useRef } from 'react'
import { track } from '@vercel/analytics/react'

export default function ScrollAnalytics() {
  const trackedSections = useRef(new Set<string>())

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            // If it has an ID and we haven't tracked it globally in this session yet
            if (sectionId && !trackedSections.current.has(sectionId)) {
              // Send custom event to Vercel Analytics (e.g. "Viewed Section: pricing")
              track(`Viewed Section`, { section: sectionId })
              trackedSections.current.add(sectionId)
            }
          }
        })
      },
      { threshold: 0.3 } // Fire when 30% of the section becomes visible
    )

    // Observe all major sections natively via their existing IDs
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return null // Renders absolutely nothing, adding zero visual bloat
}
