import { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export interface EstimatorOption {
    id: string
    label: string
    icon: LucideIcon
    basePrice?: number
    multiplier?: number
    price?: number
}

export interface EstimatorStep {
    id: string
    title: string
    description: string
    multiSelect?: boolean
    options: EstimatorOption[]
}

export interface ServiceItem {
    icon: LucideIcon
    title: string
    tagline: string
    description: string
    features: string[]
    cta: string
    highlight: boolean
}

export interface ProjectItem {
    title: string
    category: string
    description: string
    tech: string[]
    link: string
}

export interface ArticleSection {
    heading: string
    paragraphs: string[]
    bulletPoints?: string[]
    quote?: string
}

export interface ArticleContent {
    intro: string
    sections: ArticleSection[]
    summaryTakeaways: string[]
}

export interface ArticleItem {
    slug: string
    category: string
    title: string
    excerpt: string
    date: string
    author: string
    readTime: string
    content?: ArticleContent
}

export interface TeamMember {
    name: string
    role: string
    image: string
    bio: string
    social: { icon: LucideIcon; href: string }[]
    initials: string
    bg: string
}

export type CurrencyCode = 'USD' | 'INR' | 'EUR' | 'GBP'
export type MultiCurrencyPrice = Record<CurrencyCode, string>

export interface PricingPlan {
    name: string
    tagline: string
    description: string
    price: string | MultiCurrencyPrice
    period: string
    billing: string
    popular: boolean
    badge: string
    isCustom: boolean
    features: string[]
    cta: string
    trust: string
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
    items: ServiceItem[]
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
    items: ProjectItem[]
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
    plans: PricingPlan[]
  }
  team: {
    badge: string
    title: string
    titleHighlighted: { main: string; accent: string }
    description: string
    members: TeamMember[]
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
    steps: EstimatorStep[]
  }
  insights: {
    badge: string
    title: string
    titleHighlighted: { main: string; accent: string }
    description: string
    categories: string[]
    articles: ArticleItem[]
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
  careers: {
    badge: string
    title: string
    description: string
    note: string
    contact: { email: string; cta: string }
    perks: { title: string; description: string; icon: LucideIcon }[]
    openings: {
        title: string
        badge: string
        tagline: string
        description: string
        requirements: string[]
        type: string
        remote: boolean
    }[]
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

export type Selection = Record<string, string | string[]>
