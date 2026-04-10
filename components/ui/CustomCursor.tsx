
'use client'

import React, { useEffect, useRef, useState } from 'react'

/**
 * Performance-Optimized Custom Cursor
 * Uses direct DOM manipulation via refs and requestAnimationFrame to avoid
 * high-frequency React re-renders on every mouse movement.
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Track cursor position outside of state to avoid re-renders
  const mousePos = useRef({ x: 0, y: 0 })
  const delayedPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches
    if (!isDesktop) return

    setIsMounted(true)

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    // Using event delegation for hover detection
    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')

      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onHoverStart, { passive: true })
    document.body.addEventListener('mouseenter', onMouseEnter)
    document.body.addEventListener('mouseleave', onMouseLeave)

    // Animation loop for smooth movement without state updates
    let rafId: number
    const render = () => {
      // Small optimization: only update if tab is focused
      if (document.hidden) {
        rafId = requestAnimationFrame(render)
        return
      }

      if (ringRef.current) {
        // Smooth lagging effect for the ring
        delayedPos.current.x += (mousePos.current.x - delayedPos.current.x) * 0.2
        delayedPos.current.y += (mousePos.current.y - delayedPos.current.y) * 0.2
        
        // Consistent scale, no hover expansion
        ringRef.current.style.transform = `translate(${delayedPos.current.x - 16}px, ${delayedPos.current.y - 16}px) scale(1)`
        ringRef.current.style.opacity = isVisible ? '1' : '0'
        
        // Maintain consistent appearance
        ringRef.current.style.backgroundColor = 'transparent'
        ringRef.current.style.backdropFilter = 'none'
        ringRef.current.style.border = '1px solid hsl(var(--accent) / 0.4)'
      }
      
      rafId = requestAnimationFrame(render)
    }
    
    rafId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onHoverStart)
      document.body.removeEventListener('mouseenter', onMouseEnter)
      document.body.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafId)
    }
  }, [isVisible, isHovering])

  if (!isMounted) return null

  return (
    <>
      {/* Outer Ring / Static Circle */}
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full flex items-center justify-center hidden md:flex will-change-transform transition-opacity duration-300"
      >
          {/* Inner Dot */}
          <div 
            ref={dotRef}
            className="w-1 h-1 rounded-full bg-accent scale-100 opacity-100 shadow-[0_0_8px_hsl(var(--accent)/0.4)]" 
          />
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          a, button, [role="button"], .cursor-pointer {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}
