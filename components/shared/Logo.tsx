'use client'

import { useState, useEffect } from 'react'

const FULL_TEXT = '{ zyk } labs'
const TYPING_SPEED_MS = 80
const START_DELAY_MS = 300
const CURSOR_HIDE_DELAY_MS = 2000
const CURSOR_BLINK_RATE_MS = 530

function getCharStyle(char: string, index: number): string {
  if (char === '{' || char === '}')
    return 'text-slate-900 dark:text-white font-black text-xl md:text-[26px]'
  if (['z', 'y', 'k'].includes(char))
    return 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent font-black text-xl md:text-[26px] drop-shadow-sm'
  if (['l', 'a', 'b', 's'].includes(char) && index > 6)
    return 'text-slate-500 dark:text-slate-400 font-medium text-lg md:text-[22px]'
  return 'text-slate-900 dark:text-white text-xl md:text-[26px]'
}

export default function Logo({ className = '' }: { className?: string }) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Typing animation
  useEffect(() => {
    let currentIndex = 0
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= FULL_TEXT.length) {
          setDisplayText(FULL_TEXT.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(interval)
          setTimeout(() => setShowCursor(false), CURSOR_HIDE_DELAY_MS)
        }
      }, TYPING_SPEED_MS)
      return () => clearInterval(interval)
    }, START_DELAY_MS)

    return () => clearTimeout(startDelay)
  }, [])

  // Cursor blink after typing completes
  useEffect(() => {
    if (!isComplete) return
    const interval = setInterval(() => setShowCursor((p) => !p), CURSOR_BLINK_RATE_MS)
    return () => clearInterval(interval)
  }, [isComplete])

  return (
    <a
      href="/"
      className={`inline-flex items-center gap-0 select-none ${className}`}
      aria-label="Zyk Labs Home"
    >
      <span className="font-mono text-xl md:text-[24px] text-emerald-500 dark:text-emerald-400 mr-2 font-bold drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
        &gt;
      </span>

      <div className="flex items-center font-mono tracking-tight relative min-w-[180px] md:min-w-[280px]">
        <span className="flex items-center">
          {displayText.split('').map((char, index) => (
            <span key={index} className={getCharStyle(char, index)}>
              {char}
            </span>
          ))}

          <span
            className="inline-block w-[2px] md:w-[2.5px] h-[20px] md:h-[24px] bg-blue-500 ml-[1px] shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            style={{
              animation: isComplete ? 'logoBlink 1.06s step-end infinite' : 'none',
              visibility: showCursor ? 'visible' : 'hidden',
            }}
          />
        </span>
      </div>
    </a>
  )
}
