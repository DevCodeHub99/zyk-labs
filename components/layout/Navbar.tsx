'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Moon, Sun, ChevronRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/shared/Logo'
import { siteConfig } from '@/config/site'
import { handleScrollTo } from '@/lib/scroll-to'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))

    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }, [])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== '/' && href.startsWith('#')) {
      // Allow default navigation to root + hash
      return
    }
    handleScrollTo(e, href, closeMenu)
  }

  const { navigation } = siteConfig

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 py-3 sm:py-4 ${
        isScrolled ? 'pt-4 sm:pt-6' : 'py-4 sm:py-6'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${
          isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/5 rounded-[2rem] px-6 py-2.5' 
          : 'bg-transparent py-2 px-0'
        }`}
      >
        <div className="flex justify-between items-center lg:grid lg:grid-cols-[auto_1fr_auto]">
          {/* Logo — left */}
          <div className="flex items-center">
            <Logo size="sm" className="transition-transform hover:scale-105 duration-300" />
          </div>

          {/* Desktop Navigation — true center */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={pathname !== '/' && item.href.startsWith('#') ? `/${item.href}` : item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className="group relative text-[11px] xl:text-xs font-black uppercase tracking-[0.15em] text-foreground/70 hover:text-primary transition-all duration-300 whitespace-nowrap"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full opacity-80" />
              </a>
            ))}
          </div>

          {/* Desktop Actions — right */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 justify-end">
            {isMounted && (
              <button
                onClick={toggleTheme}
                className="relative p-3 rounded-full bg-secondary/30 hover:bg-secondary transition-all text-foreground/50 hover:text-foreground flex items-center justify-center overflow-hidden"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ y: 20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, ease: 'backOut' }}
                  >
                    {isDark ? <Sun size={14} /> : <Moon size={14} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            )}
            <Button
              asChild
              variant="studio-primary"
              className="h-11"
            >
              <a href="/contact" className="flex items-center gap-2">
                {siteConfig.global.cta.contact} <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3 relative z-50">
            {isMounted && (
                <button
                onClick={toggleTheme}
                className="relative p-3 rounded-full bg-secondary/40 text-foreground/70 overflow-hidden"
                aria-label="Toggle theme"
                >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'sun-mobile' : 'moon-mobile'}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.div>
                </AnimatePresence>
                </button>
            )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-all ${isOpen ? 'bg-primary text-white' : 'bg-secondary/40 text-foreground'}`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-10 px-8 space-y-8 overflow-y-auto">
          <div className="flex flex-col">
            {navigation.map((item, idx) => (
              <a
                key={item.label}
                href={pathname !== '/' && item.href.startsWith('#') ? `/${item.href}` : item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className="flex items-center justify-between text-xl font-bold text-foreground uppercase tracking-widest hover:text-accent group py-4 border-b border-border/40"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-foreground/30 font-mono tracking-normal">0{idx + 1}</span>
                  {item.label}
                </div>
                <ArrowUpRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
          
          <div className="mt-auto space-y-6">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                <Zap className="w-3.5 h-3.5 fill-accent" /> {siteConfig.global.status.intake}
            </div>
            <Button
              asChild
              variant="studio-primary"
              className="w-full h-14"
            >
              <a href="/contact" onClick={closeMenu}>
                {siteConfig.global.cta.mobile}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function ArrowUpRight({ size, className }: { size: number, className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
        </svg>
    )
}
