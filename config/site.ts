
import {
    Globe,
    Smartphone,
    Server,
    Palette,
    Zap,
    ShoppingBag,
    TrendingUp,
    RefreshCw,
    ClipboardList,
    BarChart3,
    Layout,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Calendar,
    ArrowRight,
    Search,
    Code2,
    Rocket,
    Quote,
    CheckCircle
} from 'lucide-react'

/**
 * Global constants for the site.
 * These are used throughout the configuration to ensure consistency
 * and make global updates (like changing the company name) easy.
 */
const COMPANY_NAME = 'Zyk Labs'
const CONTACT_EMAIL = 'hello@zyklabs.in'
const GITHUB_URL = '#'
const LINKEDIN_URL = '#'
const TWITTER_URL = '#'

export const siteConstants = {
    name: COMPANY_NAME,
    email: CONTACT_EMAIL,
    social: {
        github: GITHUB_URL,
        linkedin: LINKEDIN_URL,
        twitter: TWITTER_URL
    }
}

/**
 * Main Site Configuration
 * 
 * This object is the single source of truth for all text content,
 * navigation links, and feature settings across the application.
 * 
 * @usage
 * import { siteConfig } from '@/config/site'
 * <h1>{siteConfig.hero.title}</h1>
 */

export const siteConfig = {
    companyName: COMPANY_NAME,
    contactEmail: CONTACT_EMAIL,

    // Navigation Links
    navigation: [
        { label: 'Home', href: '#' },
        { label: 'Process', href: '#process' },
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#projects' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'About Us', href: '#team' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
    ],

    // Hero Section
    hero: {
        badge: 'Accepting New Projects for Q2',
        title: {
            first: 'Build Faster.',
            second: 'Scale',
            highlight: 'Smarter.'
        },
        description: `${COMPANY_NAME} transforms complex business requirements into high-performance, scalable web applications. We are the technical partner you've been looking for.`,
        cta: {
            primary: {
                text: 'Book A Call',
                href: '#contact'
            },
            secondary: {
                text: 'Services We Offer',
                href: '#services'
            }
        },
        usp: [
            { text: 'Modern Tech Stack' },
            { text: 'High Performance' }
        ]
    },

    // Services Section
    services: {
        badge: 'Our Expertise',
        title: 'Solutions Built for Growth',
        description: 'From concept to scale, we provide the technical expertise to turn your vision into reality.',
        items: [
            {
                icon: Globe,
                title: 'Web & SaaS Products',
                description: 'Custom, scalable web applications built to grow your business.',
                features: ['Custom Web Apps', 'SaaS Architecture', 'Progressive Web Apps', 'Enterprise Portals'],
            },
            {
                icon: Smartphone,
                title: 'Mobile App Development',
                description: 'iOS & Android apps with seamless UX and performance.',
                features: ['React Native', 'Native iOS/Android', 'App Store Launch', 'Cross-Platform'],
            },
            {
                icon: Server,
                title: 'Cloud & Backend Engineering',
                description: 'Robust APIs, database systems, and cloud infrastructure.',
                features: ['AWS/Azure/GCP', 'Microservices', 'GraphQL & REST', 'Database Design'],
            },
            {
                icon: Palette,
                title: 'UI/UX & Frontend Design',
                description: 'Design-driven interfaces that delight users.',
                features: ['User Research', 'Wireframing', 'Interactive Prototypes', 'Design Systems'],
            },
            {
                icon: Zap,
                title: 'Performance & SEO',
                description: 'Speed boosts, SEO strategy, and analytics optimization.',
                features: ['Core Web Vitals', 'Technical SEO', 'Load Time Speed', 'Conversion Rate Opt'],
            },
            {
                icon: ShoppingBag,
                title: 'E-Commerce Solutions',
                description: 'Conversion-focused online stores and payments.',
                features: ['Shopify/WooCommerce', 'Payment Gateways', 'Inventory Sync', 'Custom Checkout'],
            },
            {
                icon: TrendingUp,
                title: 'Digital Marketing',
                description: 'SEO, ads, social, and email to grow your audience.',
                features: ['Social Media Ads', 'Email Campaigns', 'Content Strategy', 'Growth Hacking'],
            },
            {
                icon: RefreshCw,
                title: 'Maintenance & Support',
                description: 'Ongoing site updates, bug fixes, and security monitoring.',
                features: ['24/7 Monitoring', 'Security Patches', 'Regular Backups', 'Performance Audits'],
            },
            {
                icon: ClipboardList,
                title: 'Strategy, Audit & Consulting',
                description: 'In-depth analysis of existing systems with actionable recommendations.',
                features: ['Code Reviews', 'Tech Stack Audit', 'Product Roadmap', 'Scalability Plan'],
            },
        ]
    },

    // Projects Section
    projects: {
        badge: 'Portfolio',
        title: 'Featured Projects',
        description: 'Take a look at some of our recent work. We build software that matters.',
        cta: {
            text: 'View Github',
            href: '#github'
        },
        items: [
            {
                title: 'NexDash Analytics',
                category: 'SaaS Platform',
                description: 'A comprehensive analytics dashboard for enterprise data visualization. Features real-time websocket updates and custom reporting engines.',
                tech: ['React', 'Next.js', 'PostgreSQL', 'D3.js'],
                color: 'from-blue-600 to-indigo-600',
                icon: BarChart3,
                link: '#'
            },
            {
                title: 'LuxeCart Commerce',
                category: 'E-Commerce',
                description: 'Headless e-commerce solution built for a luxury fashion brand. optimized for core web vitals and conversion rates.',
                tech: ['Next.js', 'Shopify', 'Tailwind', 'Redis'],
                color: 'from-emerald-500 to-teal-500',
                icon: ShoppingBag,
                link: '#'
            },
            {
                title: 'FinFlow App',
                category: 'Fintech',
                description: 'Mobile-first banking application with secure biometric authentication and instant peer-to-peer payments.',
                tech: ['React Native', 'Node.js', 'Firebase', 'TypeScript'],
                color: 'from-purple-600 to-pink-600',
                icon: Smartphone,
                link: '#'
            },
            {
                title: 'HealthTrack Pro',
                category: 'Healthcare',
                description: 'HIPAA-compliant patient management system for multi-location clinics. Integrated appointment scheduling and telemedicine.',
                tech: ['React', 'Python', 'AWS', 'Docker'],
                color: 'from-orange-500 to-red-500',
                icon: Layout,
                link: '#'
            },
        ]
    },

    // Process Section
    process: {
        badge: 'How We Work',
        title: 'Simple, Transparent Process',
        description: "We've refined our workflow to deliver high-quality results without the headaches.",
        steps: [
            {
                number: '01',
                icon: Search,
                title: 'Strategy & Design',
                description: "We align on goals, map out user flows, and design high-fidelity prototypes so you know exactly what we're building.",
            },
            {
                number: '02',
                icon: Code2,
                title: 'Agile Development',
                description: 'We build in two-week sprints, giving you regular demos and a deployable product at every stage.',
            },
            {
                number: '03',
                icon: Rocket,
                title: 'Launch',
                description: 'After rigorous testing and security audits, we deploy your application to a scalable cloud infrastructure.',
            },
            {
                number: '04',
                icon: TrendingUp,
                title: 'Growth',
                description: "We don't disappear. We monitor performance, handle updates, and help you plan the next big feature.",
            },
        ]
    },

    // Team Section
    team: {
        badge: 'Our People',
        title: 'Meet the Experts',
        description: 'A small, focused team of senior engineers and designers dedicated to your success.',
        members: [
            {
                name: 'Nishant Verma',
                role: 'Founder / Lead Engineering',
                bio: 'Technical leader specialized in high-performance web architecture. Focused on scalability, code quality, and delivering superior digital experiences.',
                social: {
                    github: GITHUB_URL,
                    linkedin: 'https://www.linkedin.com/in/nishant-verma-566116200/',
                    twitter: TWITTER_URL,
                },
                initials: 'NV',
                bg: 'bg-blue-500'
            },
            {
                name: 'Vikas Kumar',
                role: 'Full Stack Developer',
                bio: 'Full-stack engineer building robust systems and intuitive interfaces. Dedicated to solving complex challenges with efficient, production-ready code.',
                social: {
                    github: GITHUB_URL,
                    linkedin: LINKEDIN_URL,
                    twitter: TWITTER_URL,
                },
                initials: 'VK',
                bg: 'bg-teal-500'
            }
        ],
        about: {
            title: `Why We Started ${COMPANY_NAME}`,
            content: [
                "After years of working at large agencies, we realized that the best software is built by small, autonomous teams of experts—not by massive departments bogged down by bureaucracy.",
                `We founded ${COMPANY_NAME} to provide direct access to senior talent without the overhead. We believe in transparency, technical excellence, and building products that solve real problems.`
            ],
            stats: [
                { value: '50+', label: 'Projects Delivered' },
                { value: '100%', label: 'Client Satisfaction' }
            ]
        }
    },

    // Testimonials Section
    testimonials: {
        badge: 'Testimonials',
        title: 'Trusted by Tech Leaders',
        description: 'See what our partners have to say about working with us.',
        items: [
            {
                quote: `${COMPANY_NAME} completely transformed our legacy system into a high-speed SaaS platform. Their attention to detail and technical expertise is unmatched.`,
                author: "Sarah Jenkins",
                role: "CTO, FinSights",
                company: "FinSights",
                logo: "FS"
            },
            {
                quote: "We needed a partner who could move fast without breaking things. The team delivered our MVP in 4 weeks, and it scaled perfectly to 10k users.",
                author: "Michael Chang",
                role: "Founder, GrowthRocket",
                company: "GrowthRocket",
                logo: "GR"
            },
            {
                quote: "The best engineering team we've worked with. Professional, transparent, and they actually write clean, maintainable code.",
                author: "David Miller",
                role: "Director of Product, HealthPlus",
                company: "HealthPlus",
                logo: "HP"
            }
        ],
        clients: [
            "Acme Corp", "GlobalTech", "Nebula", "Velocity", "FoxRun", "Circle"
        ]
    },

    // Contact Section
    contact: {
        badge: 'Contact Us',
        title: "Let's Build Something Great",
        description: "Have a project in mind? We'd love to hear about it. Send us a message or schedule a call.",
        email: {
            label: 'Email Us',
            value: CONTACT_EMAIL,
            subtext: 'For general inquiries'
        },
        booking: {
            label: 'Book a Call',
            subtext: 'Free 30-min discovery',
            cta: 'Schedule now'
        },
        social: [
            { icon: Linkedin, href: LINKEDIN_URL },
            { icon: Github, href: GITHUB_URL },
            { icon: Twitter, href: TWITTER_URL },
        ],
        promo: {
            title: 'Ready to start?',
            description: 'We are currently accepting new projects for Q2. Secure your spot on our development roadmap.'
        }
    },

    // Footer Section
    footer: {
        tagline: 'Building fast, scalable web applications for growing businesses.',
        copyright: `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`,
        links: {
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
            legal: [
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' }
            ],
            social: [
                { icon: Github, href: GITHUB_URL, label: 'GitHub' },
                { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
                { icon: Twitter, href: TWITTER_URL, label: 'Twitter' },
                { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
            ],
        }
    }
}
