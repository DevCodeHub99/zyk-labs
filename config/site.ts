
import {
    Globe, Smartphone, Server, Palette, Zap, ShoppingBag,
    TrendingUp, RefreshCw, ClipboardList, BarChart3, Layout,
    Github, Linkedin, Twitter, Instagram, Facebook, Mail,
    Search, Code2, Rocket, GraduationCap, Building2,
    CheckCircle2, Shield, Users, Lightbulb, Sparkles, Lock
} from 'lucide-react'

// Global constants — single place to update brand identity
const COMPANY_NAME = 'Zyklabs'
const CONTACT_EMAIL = 'hello@zyklabs.in'

const LINKEDIN_URL = 'https://www.linkedin.com/company/zyklabs/'
const TWITTER_URL = 'https://x.com/zyklabs'
const INSTAGRAM_URL = 'https://www.instagram.com/zyklabs/'
const FACEBOOK_URL = 'https://www.facebook.com/zyklabs'
const PINTEREST_URL = 'https://www.pinterest.com/zyklabs'

export const siteConstants = {
    name: COMPANY_NAME,
    email: CONTACT_EMAIL,
    social: { linkedin: LINKEDIN_URL, twitter: TWITTER_URL, instagram: INSTAGRAM_URL, facebook: FACEBOOK_URL, pinterest: PINTEREST_URL },
    cta: {
        primary: 'Start Your Project',
        secondary: 'View Our Process',
        accent: 'Book Roadmap Session'
    }
}

import { SiteConfig } from '@/types'

/** Single source of truth for all site content, navigation, and features. */
export const siteConfig: SiteConfig = {
    companyName: COMPANY_NAME,
    contactEmail: CONTACT_EMAIL,

    global: {
        cta: {
            primary: "Book A Discovery Call",
            secondary: "Explore Packages",
            contact: "Let's Talk",
            mobile: "Start Project",
            submit: "Submit Request",
            processing: "Processing...",
            backToStudio: "Back to Studio",
            customConsult: "Custom Consultation",
            getStarted: "Start Your Build",
            roadmap: "Start My Roadmap",
        },
        status: {
            operational: "Operational",
            availability: "Q3 Intake Open",
            location: "Remote First",
            intake: "Available for Q3 builds",
        },
        stats: {
            delivered: "10+ Projects Live",
            satisfaction: "95% Satisfaction",
            experience: "5+ Years Code",
            guarantee: "Fixed Price",
        },
        labels: {
            uniqueRequest: "Want something completely unique?",
            readyToBuild: "Ready to build",
            latestWork: "Selected Work",
            featuredCase: "Featured Case Study",
        }
    },

    navigation: [
        { label: 'Services', href: '/#services' },
        { label: 'Work', href: '/work' },
        { label: 'Blueprint', href: '/blueprint' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Estimate', href: '/estimate' },
        { label: 'About Us', href: '/about' },
        { label: 'Insights', href: '/insights' },
    ],

    hero: {
        badge: 'Dedicated Tech Partner for Early-Stage Founders',
        title: {
            first: 'Ship Faster.',
            second: 'Scale',
            highlight: 'Affordably.',
            raw: 'Ship Faster. Scale Affordably.'
        },
        description: 'We are a specialized engineering studio helping founders turn ideas into functioning MVPs and scalable web platforms. We build fast, communicate directly, and care about your product.',
        cta: {
            primary: { text: 'Book A Discovery Call', href: '#contact' },
            secondary: { text: 'Explore Packages', href: '#pricing' },
        },
        usp: [{ text: 'Affordable Rates' }, { text: 'Direct Founder Collaboration' }],
    },

    services: {
        badge: 'What We Build',
        title: 'Every Service Your Product Needs.',
        titleHighlighted: { main: 'Engineering to', accent: 'Outcome-Focused', suffix: 'Solutions.' },
        description: 'From validating a new idea to scaling a live product — we have the exact expertise to move you forward, whatever stage you are at.',
        labels: {
            ready: "Ready to build",
            cta: "Explore Service",
            customPrompt: "Want something completely unique?",
            customButton: "Custom Consultation"
        },
        marquee: [
            "Internal Tools",
            "MVP focused",
            "Built for EdTech",
            "Built for SaaS",
            "Built for D2C",
            "AI Automations",
            "High Performance",
            "Scale Affordably"
        ],
        items: [
            {
                icon: Rocket,
                title: 'Web Apps & Portals',
                tagline: 'Your product, built right',
                description: 'Custom web applications built from the ground up — from founder MVPs to internal dashboards, client portals, and business automation tools.',
                features: ['SaaS & MVP Development', 'Internal Admin Dashboards', 'Client & Vendor Portals', 'Multi-Role User Systems', 'Process Automation'],
                cta: 'Build My App',
                highlight: true,
            },
            {
                icon: ShoppingBag,
                title: 'E-Commerce & Storefronts',
                tagline: 'Turn traffic into revenue',
                description: 'High-converting online stores and corporate websites optimized for speed, SEO, and seamless payments — ready to sell from day one.',
                features: ['Custom E-Commerce Stores', 'Corporate & Brand Websites', 'Payment Gateways (UPI, Cards)', 'SEO & Performance Setup', 'Product & Inventory Management'],
                cta: 'Build My Store',
                highlight: false,
            },
            {
                icon: Zap,
                title: 'SaaS & AI Products',
                tagline: 'Ship intelligent software',
                description: 'Subscription-based SaaS platforms and AI-powered tools — from invoicing systems and productivity apps to voice, vision, and automation products.',
                features: ['SaaS Subscription Platforms', 'AI & LLM Integrations', 'API-First Architecture', 'Usage Billing & Licensing', 'Workflow Automation'],
                cta: 'Build My SaaS',
                highlight: false,
            },
            {
                icon: Code2,
                title: 'Code Rescue & Support',
                tagline: 'Fix it. Speed it up. Own it.',
                description: 'Your existing product is broken, slow, or stuck. We audit, fix, and stabilise your codebase — and stay on as your monthly technical partner.',
                features: ['Critical Bug Fixes', 'Performance & Speed Audits', 'Legacy Code Refactoring', 'Third-Party API Integrations', 'Monthly Maintenance Retainer'],
                cta: 'Rescue My App',
                highlight: false,
            },
        ],
    },

    projects: {
        badge: 'Our Work',
        title: 'Selected Work',
        titleHighlighted: { main: 'Built for', accent: 'Performance.' },
        description: 'Explore some of the high-performance products we have shipped for our clients.',
        labels: {
            link: "View Technical Deep-Dive",
            cta: "View Full Portfolio",
            featured: "Featured Case Study"
        },
        cta: { text: 'Start Your Project', href: '#contact' },
        featuredCaseStudy: {
            badge: 'FEATURED CASE STUDY',
            title: 'From spreadsheet chaos to custom internal tool in 4 weeks.',
            problem: 'A growing logistics business was managing 500+ daily deliveries via shared Google Sheets, leading to lost orders, manual entry errors, and frustrated field agents.',
            build: 'A custom Next.js dashboard for dispatch managers and a mobile-friendly PWA (Progressive Web App) for drivers to update statuses in real-time, backed by a robust Postgres database.',
            result: '40% reduction in dispatch time, zero lost orders in the first month, and the operations team finally stopped hating their daily tools.',
            color: 'bg-[#FF5A00]',
            textColor: 'text-white',
        },
        items: [
            { title: 'AdmitWise Portal', category: 'EdTech Dashboard', description: 'Student analytics and course management platform across 300+ institutions.', tech: ['React', 'Node.js', 'MongoDB'], link: 'https://www.admitwiseconsultancy.com/' },
            { title: 'Ekaashi Store', category: 'D2C Storefront', description: 'Custom headless e-commerce experience with advanced deals and cart logic.', tech: ['Next.js', 'TypeScript', 'Tailwind'], link: 'https://ekaashi.com/' },
            { title: 'InvoiceDesk SaaS', category: 'B2B SaaS Tool', description: 'GST-compliant invoicing system with tax automation and client management.', tech: ['Next.js', 'MongoDB', 'Node.js'], link: 'https://shrinavdurgatrade.zyklabs.in/' },
            { title: 'VisionVoice AI', category: 'AI Platform', description: 'AI-powered accessibility platform for visually impaired users using voice UI.', tech: ['Next.js', 'AI APIs', 'TypeScript'], link: 'https://visionvoiceai.zyklabs.in/' },
            { title: 'Aurelion Builders', category: 'Real Estate Portfolio', description: 'Premium construction firm website featuring 150+ project showcases.', tech: ['React', 'Tailwind CSS', 'Vite'], link: 'https://gilded-vista-designs.vercel.app/' },
            { title: 'Quick-Tools', category: 'Developer Utilities', description: 'Production-ready productivity suite featuring regex testers to JSON formatters.', tech: ['Next.js', 'TypeScript', 'PWA'], link: 'https://quicktools.zyklabs.in/' },
        ],
    },

    process: {
        badge: 'How We Work',
        title: 'Simple, Transparent Process',
        titleHighlighted: { main: 'The Production', accent: 'Engine.' },
        description: "We've refined our workflow to deliver high-quality results without the headaches.",
        steps: [
            { number: '01', icon: Search, title: 'Discovery Call', description: "Free, 30 min to understand your requirements." },
            { number: '02', icon: Code2, title: 'Scoped Proposal', description: 'Delivered in 48 hrs. Clear scope, transparent pricing.' },
            { number: '03', icon: Rocket, title: 'Build Sprint', description: '4–6 weeks of focused development.' },
            { number: '04', icon: TrendingUp, title: 'Launch', description: "Go live and start growing with confidence." },
        ],
    },

    whyChooseUs: {
        badge: 'Why Us?',
        heading: `The ${COMPANY_NAME} Advantage`,
        titleHighlighted: { main: 'The Zyklabs', accent: 'Advantage.' },
        description: "We're not just another development shop. Here's what sets us apart.",
        painPoints: [
            '"Agency quoted ₹3L and 4 months — for a simple MVP?"',
            '"Freelancer disappeared after the first payment?"',
            '"Tired of managing devs who just write code but don\'t understand product?"'
        ],
        title: 'You just need someone to build the damn thing.',
        titleParts: { main: 'You just need someone to', build: 'build', final: 'the damn thing.' },
        subtitle: "That's exactly why we work the way we do.",
    },

    pricing: {
        title: 'Transparent Pricing. No Surprises.',
        titleHighlighted: { main: 'Transparent Pricing.', accent: 'No Surprises.' },
        description: 'One-time project builds or ongoing monthly support — pick what fits where you are right now.',
        badge: 'Pricing',
        trustFeatures: [
            { icon: Lock, title: "Fixed Price Guarantee", description: "Scope creep won't hit your wallet. We ship what we quote." },
            { icon: RefreshCw, title: "Bi-Weekly Sprints", description: "Constant momentum. You see working code every 14 days." },
            { icon: Sparkles, title: "Direct Access", description: "No account managers. Stay on WhatsApp with the actual devs." }
        ],
        plans: [
            {
                name: 'Retainer',
                tagline: 'Ongoing support & growth',
                description: 'A dedicated technical partner every month — keeping your product fast, secure, and continuously evolving after launch.',
                price: '₹14,500',
                period: '/month',
                billing: 'monthly',
                popular: false,
                badge: 'Monthly',
                isCustom: false,
                features: [
                    'Security & Dependency Updates',
                    'Uptime & Performance Monitoring',
                    'Bug Fix Tickets (up to 5/month)',
                    'Feature Dev Hours (add-on available)',
                    'WhatsApp Direct Developer Access',
                    'Monthly Health & Progress Report',
                ],
                cta: 'Start Retainer',
                trust: 'No lock-in · Cancel with 30 days notice',
            },
            {
                name: 'Launch',
                tagline: 'Validate your idea',
                description: 'A professional, working product live in 2 weeks. Perfect for testing an idea with real users before committing to a full build.',
                price: '₹24,500',
                period: '/project',
                billing: 'one-time',
                popular: false,
                badge: '',
                isCustom: false,
                features: [
                    'Landing Page + UI (up to 5 screens)',
                    'User Auth (Email / Google login)',
                    'Waitlist or Lead Capture Database',
                    'Mobile-Responsive Design',
                    '2-Week Delivery',
                ],
                cta: 'Start Launch Build',
                trust: 'Great for validation & investor demos',
            },
            {
                name: 'Build',
                tagline: 'Ship your product',
                description: 'A complete, production-ready web app your first users can actually pay for. Our most popular choice for early-stage startups.',
                price: '₹48,500',
                period: '/project',
                billing: 'one-time',
                popular: true,
                badge: 'Most Popular',
                isCustom: false,
                features: [
                    'Everything in Launch',
                    'Core Product Logic & Workflows',
                    'Payment Integration (Razorpay / Stripe)',
                    'Admin Dashboard',
                    'Custom API & 3rd-Party Integrations',
                    '4-Week Delivery',
                ],
                cta: 'Start My Build',
                trust: 'Used by 70% of our clients',
            },

            {
                name: 'Custom',
                tagline: 'Complex & enterprise projects',
                description: 'Multi-phase platforms, complex integrations, SaaS products, or a dedicated embedded developer. We scope it transparently — no surprises.',
                price: '',
                period: '',
                billing: 'custom',
                popular: false,
                badge: 'Enterprise',
                isCustom: true,
                features: [
                    'Everything in Build',
                    'Multi-Phase Milestone Delivery',
                    'Dedicated Developer Assignment',
                    'Advanced Architecture & Permissions',
                    'SEO, Performance & Security Audit',
                    'Custom Timeline & Scope',
                ],
                cta: "Let's Discuss My Project",
                trust: 'Free scoping call · No commitment required',
            },
        ],
    },

    team: {
        badge: 'Our Team',
        title: 'Meet the Developers',
        titleHighlighted: { main: 'Meet the', accent: 'Studio.' },
        description: 'A dedicated engineering team committed to bringing your ideas to life.',
        members: [
            {
                name: 'Nishant Verma', role: 'Full Stack Engineer',
                image: '/nishant.png',
                bio: `I build with a focus on how things actually work in the real world. As a Full-Stack Engineer with an operator's mindset, I prioritize product feasibility and practical execution over abstract theory. My goal is always to move from idea to monetized, scalable reality as efficiently as possible.`,
                social: [
                    { icon: Github, href: 'https://github.com/nishant4510' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/nishant-verma-566116200' },
                    { icon: Instagram, href: 'https://instagram.com/nishantverma' },
                ],
                initials: 'NV', bg: 'bg-accent',
            },
            {
                name: 'Vikas Kumar', role: 'Full-Stack Engineer',
                image: '/vikas.png',
                bio: `A product focused engineer who thinks in systems. Beyond writing code, I focus on building scalable architectures and future-proof SaaS products. Whether it's crafting AI-driven tools or refining core infrastructure, I’m driven by making complex technology feel simple and reliable for the long term.`,
                social: [
                    { icon: Github, href: 'https://github.com/devcodehub99' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/devcodehub99' },
                    { icon: Twitter, href: 'https://x.com/devcodehub99' },
                ],
                initials: 'VK', bg: 'bg-teal-500',
            },
        ],
        about: {
            badge: "Our Story",
            title: `Why We Started ${COMPANY_NAME}`,
            titleHighlighted: { main: 'High-Performance Engineering for', accent: 'Human Ideas.' },
            content: [
                "We noticed that many early-stage founders get priced out by large agencies or burned by unreliable freelancers.",
                `We founded ${COMPANY_NAME} to provide an honest, reliable, and affordable technical partnership. As a lean, focused studio, we care deeply about every line of code we ship and every founder we work with.`,
            ],
            stats: [
                { value: '10+', label: 'Projects Delivered' },
                { value: '95%', label: 'Client Satisfaction' },
            ],
        },
    },

    contact: {
        badge: 'Start Your Build',
        title: "The Project Launchpad",
        description: "Zero fluff. No endless back-and-forth. Just clear scope and precise execution.",
        email: { label: 'Direct Email', value: CONTACT_EMAIL, subtext: 'Expect a reply in <24hrs' },
        booking: { label: 'Quick Demo', subtext: 'Book a 15-min discovery', cta: 'Claim Your Slot' },
        categories: ['SaaS Product', 'MVP from Scratch', 'AI Integration', 'E-Commerce', 'Code Rescue', 'Other'],
        budgets: ['< ₹10k', '₹20k - ₹50k', '₹50k - ₹1L', '₹1L - ₹3L', '₹3L - ₹5L', '₹5L+'],
        social: [
            { icon: Linkedin, href: LINKEDIN_URL },
            { icon: Twitter, href: TWITTER_URL },
            { icon: Instagram, href: INSTAGRAM_URL },
            { icon: Facebook, href: FACEBOOK_URL },
        ],
        promo: { title: 'Limited Availability', description: 'We only take on 2 new high-stakes builds per month to maintain shipping velocity. Claim your slot.' },
    },

    estimator: {
        title: "Project Estimator",
        titleHighlighted: { main: 'Get Your Ballpark', accent: 'Cost in 60s.' },
        description: "Get an instant technical roadmap and ballpark estimate for your build.",
        steps: [
            {
                id: 'platform',
                title: 'Target Platform',
                description: 'Where will your users access the product?',
                options: [
                    { id: 'web', label: 'Web Application', icon: Globe, basePrice: 20000 },
                    { id: 'mobile', label: 'Mobile App (iOS/Android)', icon: Smartphone, basePrice: 35000 },
                    { id: 'both', label: 'Cross-Platform (Web + Mobile)', icon: Layout, basePrice: 50000 },
                ]
            },
            {
                id: 'scale',
                title: 'Scale & Complexity',
                description: 'What stage of development are we targeting?',
                options: [
                    { id: 'mvp', label: 'MVP (Core Features Only)', icon: Rocket, multiplier: 1 },
                    { id: 'production', label: 'Production Ready (V1)', icon: Zap, multiplier: 1.5 },
                    { id: 'enterprise', label: 'Enterprise Grade', icon: Building2, multiplier: 2.5 },
                ]
            },
            {
                id: 'features',
                title: 'Core Features',
                description: 'Select the high-level capabilities required.',
                multiSelect: true,
                options: [
                    { id: 'auth', label: 'User Authentication', icon: Shield, price: 5000 },
                    { id: 'payments', label: 'Payment Integration', icon: ShoppingBag, price: 8000 },
                    { id: 'ai', label: 'AI / LLM Integration', icon: Lightbulb, price: 15000 },
                    { id: 'admin', label: 'Admin Dashboard', icon: BarChart3, price: 10000 },
                    { id: 'realtime', label: 'Real-time Features', icon: Zap, price: 7000 },
                ]
            },
            {
                id: 'timeline',
                title: 'Delivery Velocity',
                description: 'How fast do you need to ship?',
                options: [
                    { id: 'standard', label: 'Standard (4-6 weeks)', icon: ClipboardList, multiplier: 1 },
                    { id: 'express', label: 'Express (2-3 weeks)', icon: Zap, multiplier: 1.3 },
                    { id: 'asap', label: 'Hyper-Speed (10-14 days)', icon: Rocket, multiplier: 1.6 },
                ]
            }
        ]
    },

    insights: {
        badge: 'Technical Intelligence',
        title: 'Engineering & Product Insights',
        titleHighlighted: { main: 'Technical', accent: 'Intelligence.' },
        description: 'Deep dives into technical architecture, founder-led engineering, and high-velocity shipping.',
        categories: ['Architecture', 'Founder Guides', 'AI / ML', 'Product Ops'],
        articles: [
            {
                slug: 'building-mvps-for-founders',
                category: 'Founder Guides',
                title: 'Building MVPs for Founders: The Lean Engineering Manifesto',
                excerpt: 'How to cut through the noise and ship your core product logic in 4 weeks without technical debt.',
                date: 'April 2026',
                author: 'Nishant Verma',
                readTime: '6 min read',
            },
            {
                slug: 'nextjs-performance-optimization-2026',
                category: 'Architecture',
                title: 'High-Velocity Next.js: Sub-Second Load Times in 2026',
                excerpt: 'Granular hydration strategies and edge runtime optimizations for high-traffic SaaS portals.',
                date: 'March 2026',
                author: 'Vikas Kumar',
                readTime: '8 min read',
            },
            {
                slug: 'ai-compliance-eu-act',
                category: 'AI / ML',
                title: 'Designing for EU AI Act Compliance in Modern SaaS',
                excerpt: 'A technical guide to implementing transparency and human-oversight protocols in your AI products.',
                date: 'May 2026',
                author: 'Compliance Lead',
                readTime: '10 min read',
            }
        ]
    },

    security: {
        badge: 'Institutional Trust',
        title: 'Security & Technical Defense',
        titleHighlighted: { main: 'Institutional', accent: 'Quality.' },
        description: 'How we protect your intellectual property and user data at every layer of the stack.',
        measures: [
            { title: 'Data Sovereignty', desc: 'Encrypted at rest (AES-256) and in transit (TLS 1.3) with regional data residency options.', icon: Shield },
            { title: 'Identity Protection', desc: 'MFA-ready authentication flows with JWT stateless validation and RBAC protocols.', icon: Users },
            { title: 'Infrastructure Monitoring', desc: 'Real-time observability and incident response with 99.9% uptime targets.', icon: BarChart3 },
            { title: 'Compliance Ready', desc: 'Architected for GDPR, CCPA, and EU AI Act readiness from commit one.', icon: CheckCircle2 }
        ]
    },

    legal: {
        privacyPolicy: {
            title: 'Privacy Policy',
            badge: 'Legal Protocol',
            lastUpdated: 'February 19, 2026',
            sections: [
                {
                    heading: '1. Introduction',
                    content: `${COMPANY_NAME} ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the type of information we may collect from you or that you may provide when you visit our website.`
                },
                {
                    heading: '2. Information We Collect',
                    content: 'We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("personal information"). This includes: Name, email address, phone number, and any other information you choose to provide.'
                },
                {
                    heading: '3. How We Use Your Information',
                    content: 'We use the information we collect to: Provide, maintain, and safeguard our services; Process your requests and transactions; Send you technical notices, updates, security alerts, and support messages; Respond to your comments, questions, and requests.'
                },
                {
                    heading: '4. Data Security',
                    content: 'We implement appropriate technical and organizational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.'
                },
                {
                    heading: '5. Your Rights',
                    content: 'Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict the use of your data. Contact us to exercise these rights.'
                },
                {
                    heading: '6. Contact Us',
                    content: `If you have any questions or comments about this notice, the ways in which ${COMPANY_NAME} collects and uses your information described here, please do not hesitate to contact us at: ${CONTACT_EMAIL}`
                }
            ]
        },
        termsOfService: {
            title: 'Terms of Service',
            badge: 'Legal Protocol',
            lastUpdated: 'February 19, 2026',
            sections: [
                {
                    heading: '1. Acceptance of Terms',
                    content: `By accessing or using the ${COMPANY_NAME} website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.`
                },
                {
                    heading: '2. Use License',
                    content: `Permission is granted to temporarily download one copy of the materials (information or software) on ${COMPANY_NAME} website for personal, non-commercial transitory viewing only.`
                },
                {
                    heading: '3. Services',
                    content: `${COMPANY_NAME} provides software development, consulting, and design services. The specific terms of these services are governed by individual client agreements and statements of work.`
                },
                {
                    heading: '4. Intellectual Property',
                    content: `The Service and its original content, features, and functionality are and will remain the exclusive property of ${COMPANY_NAME} and its licensors. The Service is protected by copyright, trademark, and other laws.`
                },
                {
                    heading: '5. Limitation of Liability',
                    content: `In no event shall ${COMPANY_NAME}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.`
                },
                {
                    heading: '6. Governing Law',
                    content: `These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which ${COMPANY_NAME} is established, without regard to its conflict of law provisions.`
                },
                {
                    heading: '7. Changes to Terms',
                    content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.'
                }
            ]
        }
    },

    footer: {
        tagline: 'We turn ideas into fast, scalable digital products that help businesses grow.',
        copyright: `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`,
        links: {
            services: [
                { label: 'Full-Stack Ecosystems', href: '/#services' },
                { label: 'SaaS Architectures', href: '/#services' },
                { label: 'System Integrations', href: '/#services' },
                { label: 'Experience Design', href: '/#services' },
            ],
            company: [
                { label: 'About Us', href: '/about' },
                { label: 'Blueprint', href: '/blueprint' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Project Estimator', href: '/estimate' },
                { label: 'Insights', href: '/insights' },
                { label: 'Security', href: '/security' },
                { label: 'Contact', href: '/#contact' },
            ],
            legal: [
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
            ],
            social: [
                { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
                { icon: Twitter, href: TWITTER_URL, label: 'Twitter' },
                { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
                { icon: Facebook, href: FACEBOOK_URL, label: 'Facebook' },
                { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
            ],
        },
    },
}
