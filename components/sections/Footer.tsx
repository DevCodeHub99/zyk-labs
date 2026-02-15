'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Logo from '@/components/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    services: [
      { label: 'Web Applications', href: '#services' },
      { label: 'SaaS Development', href: '#services' },
      { label: 'API Development', href: '#services' },
      { label: 'UI/UX Engineering', href: '#services' },
    ],
    company: [
      { label: 'About', href: '#team' },
      { label: 'Process', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
    social: [
      { icon: Github, href: '#', label: 'GitHub' },
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Mail, href: 'mailto:hello@techbuild.dev', label: 'Email' },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 [&_*]:text-primary-foreground [&_*]:from-primary-foreground [&_*]:via-primary-foreground [&_*]:to-primary-foreground/80">
              <Logo />
            </div>
            <p className="text-sm text-primary-foreground/70">Building fast, scalable web applications for growing businesses.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
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
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
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
            <p className="text-primary-foreground/70">&copy; {currentYear} techbuild-labs. All rights reserved.</p>
            <div className="flex gap-6 text-primary-foreground/70">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
