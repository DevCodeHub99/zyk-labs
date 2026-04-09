
'use client'

import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    const onHoverStart = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (
            target.tagName.toLowerCase() === 'a' || 
            target.tagName.toLowerCase() === 'button' ||
            target.closest('a') ||
            target.closest('button') ||
            target.classList.contains('cursor-pointer')
        ) {
            setIsHovering(true)
        } else {
            setIsHovering(false)
        }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onHoverStart)
    document.body.addEventListener('mouseenter', onMouseEnter)
    document.body.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onHoverStart)
      document.body.removeEventListener('mouseenter', onMouseEnter)
      document.body.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [isVisible])

  if (!isMounted) return null

  return (
    <>
      {/* Outer Ring */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-accent/30 transition-transform duration-500 ease-out flex items-center justify-center mix-blend-difference hidden md:flex"
        style={{ 
            transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 2.5 : 1})`,
            opacity: isVisible ? 1 : 0
        }}
      >
          {/* Inner Dot */}
          <div className={`w-1 h-1 rounded-full bg-accent transition-transform duration-300 ${isHovering ? 'scale-0' : 'scale-100'}`} />
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
