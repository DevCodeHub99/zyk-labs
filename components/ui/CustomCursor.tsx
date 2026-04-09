
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
      if (ringRef.current) {
        // Smooth lagging effect for the ring
        delayedPos.current.x += (mousePos.current.x - delayedPos.current.x) * 0.2
        delayedPos.current.y += (mousePos.current.y - delayedPos.current.y) * 0.2
        
        ringRef.current.style.transform = `translate(${delayedPos.current.x - 16}px, ${delayedPos.current.y - 16}px) scale(${isHovering ? 2.5 : 1})`
        ringRef.current.style.opacity = isVisible ? '1' : '0'
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
      {/* Outer Ring */}
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-accent/40 flex items-center justify-center mix-blend-difference hidden md:flex will-change-transform transition-opacity duration-300"
      >
          {/* Inner Dot - nested to follow the ring easily or could be separate for different physics */}
          <div 
            ref={dotRef}
            className={`w-1.5 h-1.5 rounded-full bg-accent transition-transform duration-300 ${isHovering ? 'scale-0' : 'scale-100'}`} 
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
