'use client'

import { siteConfig } from '@/config/site'
import Logo from '@/components/shared/Logo'
import { handleScrollTo } from '@/lib/scroll-to'
import { Mail, ArrowUpRight, Shield, Globe, Zap } from 'lucide-react'
import NewsletterCTA from '@/components/shared/NewsletterCTA'

export default function Footer() {
  const { footer } = siteConfig
  const { links } = footer

  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 relative overflow-hidden">
      {/* Brand Watermark */}
      <div className="absolute bottom-0 left-0 right-0 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none leading-none -mb-[5vw] text-center uppercase tracking-tighter">
        ZYKLABS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 mb-24">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <div className="space-y-4">
                <Logo size="sm" asImage className="opacity-90" />
                <p className="text-xl md:text-2xl font-medium text-primary-foreground/70 max-w-sm leading-relaxed italic-serif">
                   "{footer.tagline}"
                </p>
            </div>
            
            <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-accent">
                    <Zap className="w-4 h-4 fill-accent" /> Status: Operational
                </div>
                <p className="text-sm text-primary-foreground/40 max-w-xs">
                    Engineering premium digital experiences for founders who refuse to settle for average.
                </p>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-16 lg:gap-10 xl:gap-12">
            {/* Services */}
            <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground/30">Services</h4>
                <ul className="space-y-4">
                    {links.services.map((link) => (
                        <li key={link.label}>
                            <a 
                                href={link.href} 
                                onClick={(e) => handleScrollTo(e, link.href)} 
                                className="text-sm font-bold text-primary-foreground/60 hover:text-accent transition-all flex items-center gap-1 group"
                            >
                                {link.label}
                                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground/30">Company</h4>
                <ul className="space-y-4">
                    {links.company.map((link) => (
                        <li key={link.label}>
                            <a 
                                href={link.href} 
                                onClick={(e) => handleScrollTo(e, link.href)} 
                                className="text-sm font-bold text-primary-foreground/60 hover:text-accent transition-all flex items-center gap-1 group"
                            >
                                {link.label}
                                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Social */}
            <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground/30">Socials</h4>
                <div className="flex flex-col gap-4">
                    {links.social.map((social) => {
                        const IconComponent = social.icon
                        return (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold text-primary-foreground/60 hover:text-accent transition-all flex items-center gap-2 group"
                            >
                                <IconComponent size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                                {social.label}
                            </a>
                        )
                    })}
                </div>
            </div>

            {/* Newsletter Mini */}
            <div className="md:col-span-1 min-w-[200px]">
                <NewsletterCTA variant="mini" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-primary-foreground/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] font-bold text-primary-foreground/30 uppercase tracking-[0.1em]">
                {footer.copyright}
            </p>
            
            <div className="flex items-center gap-4 bg-primary-foreground/5 px-4 py-2 rounded-full border border-primary-foreground/5">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary-foreground/40">
                    <Globe className="w-3 h-3 text-accent" /> Remote First
                </div>
                <div className="w-px h-3 bg-primary-foreground/10" />
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary-foreground/40">
                    Made with <span className="text-red-500 animate-pulse">❤️</span> in
                    <svg width="18" height="12" viewBox="0 0 900 600" className="rounded-sm inline-block">
                        <rect width="900" height="200" fill="#FF9933" />
                        <rect y="200" width="900" height="200" fill="#FFFFFF" />
                        <rect y="400" width="900" height="200" fill="#138808" />
                        <circle cx="450" cy="300" r="60" fill="none" stroke="#000080" strokeWidth="4" />
                        <circle cx="450" cy="300" r="6" fill="#000080" />
                    </svg>
                </div>
            </div>
          </div>

          <div className="flex gap-8">
            {links.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-primary-foreground/30 hover:text-accent transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
