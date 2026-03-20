'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/shared/Logo'
import { siteConfig } from '@/config/site'
import { handleScrollTo } from '@/lib/scroll-to'

export default function Navbar() {
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

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) =>
    handleScrollTo(e, href, closeMenu)

  const { navigation } = siteConfig

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm py-3'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:grid md:grid-cols-[auto_1fr_auto] items-center">
          {/* Logo — left */}
          <Logo size="sm" />


          {/* Desktop Navigation — true center */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className="group relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions — right */}
          <div className="hidden md:flex items-center gap-4 justify-end">
            <div className="w-10 h-10 flex items-center justify-center">
              {isMounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-foreground"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-700 hover:to-teal-500 text-white shadow-lg shadow-teal-500/20 transition-all hover:scale-105 border-0"
            >
              <a href="#contact" onClick={(e) => onNavClick(e, '#contact')}>
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2 relative z-50">
            <div className="w-10 h-10 flex items-center justify-center">
              {isMounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-foreground relative z-50"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        <div className="flex flex-col h-full p-6 space-y-6 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navigation.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className="flex items-center justify-between text-xl font-medium text-foreground/80 hover:text-primary py-4 border-b border-border/50 transition-colors"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.label}
                <ChevronRight size={16} className="text-foreground/30" />
              </a>
            ))}
          </div>
          <div className="pt-6 mt-auto">
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-teal-600 to-teal-400 text-white shadow-lg shadow-teal-500/20 text-lg h-12"
            >
              <a href="#contact" onClick={(e) => onNavClick(e, '#contact')}>
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
