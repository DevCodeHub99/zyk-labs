'use client'

import React, { useState, useEffect } from 'react'

export default function Logo({ className = '' }: { className?: string }) {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'techbuild-labs'
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0

    // Initial delay before typing starts
    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(typingInterval)

          // Blink cursor a few times then hide it
          setTimeout(() => {
            setShowCursor(false)
          }, 2000)
        }
      }, 80) // Slightly faster typing speed

      return () => clearInterval(typingInterval)
    }, 300) // 300ms delay before starting

    return () => clearTimeout(startDelay)
  }, [])

  // Cursor blink effect
  useEffect(() => {
    if (!isComplete) return

    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530) // Standard terminal blink rate

    return () => clearInterval(blinkInterval)
  }, [isComplete])

  return (
    <a
      href="#"
      className={`inline-flex items-center gap-0 select-none ${className}`}
      aria-label="TechBuild Labs Home"
    >
      {/* Terminal prompt symbol with subtle glow */}
      <span className="font-mono text-xl md:text-[24px] text-emerald-500 dark:text-emerald-400 mr-2 font-bold drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
        &gt;
      </span>

      <div className="flex items-center font-mono tracking-tight relative min-w-[180px] md:min-w-[280px]">
        {/* Render each character with styling */}
        <span className="flex items-center">
          {displayText.split('').map((char, index) => {
            let colorClass = ''

            // "tech" (0-3) - vibrant blue gradient
            if (index < 4) {
              colorClass = 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent font-black text-xl md:text-[26px] drop-shadow-sm'
            }
            // "build" (4-8) - strong contrast
            else if (index < 9) {
              colorClass = 'text-slate-900 dark:text-white font-black text-xl md:text-[26px]'
            }
            // "-labs" (9-13) - muted
            else {
              colorClass = 'text-slate-500 dark:text-slate-400 font-medium text-lg md:text-[22px]'
            }

            return (
              <span
                key={index}
                className={colorClass}
              >
                {char}
              </span>
            )
          })}

          {/* Realistic blinking cursor - always takes up space, visibility controlled */}
          <span
            className="inline-block w-[2px] md:w-[2.5px] h-[20px] md:h-[24px] bg-blue-500 ml-[1px] shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            style={{
              animation: isComplete ? 'blink 1.06s step-end infinite' : 'none',
              visibility: showCursor ? 'visible' : 'hidden'
            }}
          />
        </span>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          50.01%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </a>
  )
}
