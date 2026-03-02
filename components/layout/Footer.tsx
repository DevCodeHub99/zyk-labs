'use client'

import { siteConfig } from '@/config/site'
import Logo from '@/components/shared/Logo'
import { handleScrollTo } from '@/lib/scroll-to'

export default function Footer() {
  const { footer } = siteConfig
  const { links } = footer

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 text-primary-foreground">
              <Logo size="sm" asImage />
            </div>
            <p className="text-sm text-primary-foreground/70">{footer.tagline}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              {links.social.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  >
                    <IconComponent size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-primary-foreground/70 text-center md:text-left">
              <p>{footer.copyright}</p>
              <p className="mt-1 flex items-center justify-center md:justify-start gap-1">
                Made with <span className="text-red-500 animate-pulse">❤️</span> in
                <svg width="20" height="14" viewBox="0 0 900 600" className="inline-block rounded-sm ml-0.5">
                  <rect width="900" height="200" fill="#FF9933" />
                  <rect y="200" width="900" height="200" fill="#FFFFFF" />
                  <rect y="400" width="900" height="200" fill="#138808" />
                  <circle cx="450" cy="300" r="60" fill="none" stroke="#000080" strokeWidth="4" />
                  <circle cx="450" cy="300" r="6" fill="#000080" />
                </svg>
              </p>
            </div>
            <div className="flex gap-6 text-primary-foreground/70">
              {links.legal.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-primary-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
