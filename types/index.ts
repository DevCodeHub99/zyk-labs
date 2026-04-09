import { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  companyName: string
  contactEmail: string
  global: {
    cta: Record<string, string>
    status: Record<string, string>
    stats: Record<string, string>
    labels: Record<string, string>
  }
  navigation: NavItem[]
  hero: {
    badge: string
    title: {
        first: string
        second: string
        highlight: string
        raw: string
    }
    description: string
    cta: {
        primary: { text: string; href: string }
        secondary: { text: string; href: string }
    }
    usp: { text: string }[]
  }
  services: {
    badge: string
    title: string
    titleHighlighted: { main: string; accent: string; suffix: string }
    description: string
    labels: Record<string, string>
    marquee: string[]
    items: {
        icon: LucideIcon
        title: string
        tagline: string
        description: string
        features: string[]
        cta: string
        highlight: boolean
    }[]
  }
  projects: {
    badge: string
    title: string
    titleHighlighted: { main: string; accent: string }
    description: string
    labels: Record<string, string>
    cta: { text: string; href: string }
    featuredCaseStudy: {
        badge: string
        title: string
        problem: string
        build: string
        result: string
        color: string
        textColor: string
    }
    items: {
        title: string
        category: string
        description: string
        tech: string[]
        link: string
    }[]
  }
  process: {
    badge: string
    title: string
    titleHighlighted: { main: string; accent: string }
    description: string
    steps: {
        number: string
        icon: LucideIcon
        title: string
        description: string
    }[]
  }
  whyChooseUs: {
    badge: string
    heading: string
    titleHighlighted: { main: string; accent: string }
    description: string
    painPoints: string[]
    title: string
    titleParts: { main: string; build: string; final: string }
    subtitle: string
  }
  pricing: {
    title: string
    titleHighlighted: { main: string; accent: string }
    description: string
    badge: string
    trustFeatures: {
        icon: LucideIcon
        title: string
        description: string
    }[]
    plans: {
        name: string
        tagline: string
        description: string
        price: string
        period: string
        billing: string
        popular: boolean
        badge: string
        isCustom: boolean
        features: string[]
        cta: string
        trust: string
    }[]
  }
  team: {
    badge: string
    title: string
    titleHighlighted: { main: string; accent: string }
    description: string
    members: {
        name: string
        role: string
        image: string
        bio: string
        social: { icon: LucideIcon; href: string }[]
        initials: string
        bg: string
    }[]
    about: {
        badge: string
        title: string
        titleHighlighted: { main: string; accent: string }
        content: string[]
        stats: { value: string; label: string }[]
    }
  }
  contact: {
    badge: string
    title: string
    description: string
    email: { label: string; value: string; subtext: string }
    booking: { label: string; subtext: string; cta: string }
    categories: string[]
    budgets: string[]
    social: { icon: LucideIcon; href: string }[]
    promo?: { title: string; description: string }
  }
  estimator: {
    title: string
    titleHighlighted: { main: string; accent: string }
    description: string
    steps: {
        id: string
        title: string
        description: string
        multiSelect?: boolean
        options: {
            id: string
            label: string
            icon: LucideIcon
            basePrice?: number
            multiplier?: number
            price?: number
        }[]
    }[]
  }
  insights: {
    badge: string
    title: string
    titleHighlighted: { main: string; accent: string }
    description: string
    categories: string[]
    articles: {
        slug: string
        category: string
        title: string
        excerpt: string
        date: string
        author: string
        readTime: string
    }[]
  }
  security: {
      badge: string
      title: string
      titleHighlighted: { main: string; accent: string }
      description: string
      measures: { title: string; desc: string; icon: LucideIcon }[]
  }
  legal: {
      privacyPolicy: LegalSection
      termsOfService: LegalSection
  }
  footer: {
    tagline: string
    copyright: string
    links: {
        services: NavItem[]
        company: NavItem[]
        legal: NavItem[]
        social: { icon: LucideIcon; href: string; label: string }[]
    }
  }
}

export interface LegalSection {
    title: string
    badge: string
    lastUpdated: string
    sections: {
        heading: string
        content: string
    }[]
}
