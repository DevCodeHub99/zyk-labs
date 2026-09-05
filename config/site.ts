
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
        { label: 'Work', href: '/work' },
        { label: 'Blueprint', href: '/blueprint' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Estimate', href: '/estimate' },
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
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
            primary: { text: 'Book A Discovery Call', href: '/contact' },
            secondary: { text: 'Explore Packages', href: '/pricing' },
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
            '"Agency quoted $15k+ / ₹3L and 4 months — for a simple MVP?"',
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
                price: {
                    USD: '$179',
                    EUR: '€169',
                    GBP: '£149',
                    INR: '₹14,500',
                },
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
                price: {
                    USD: '$299',
                    EUR: '€279',
                    GBP: '£239',
                    INR: '₹24,500',
                },
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
                price: {
                    USD: '$599',
                    EUR: '€549',
                    GBP: '£479',
                    INR: '₹48,500',
                },
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
                price: {
                    USD: '',
                    EUR: '',
                    GBP: '',
                    INR: '',
                },
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
                cta: "Let's Discuss!",
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
            // {
            //     name: 'Nishant Verma', role: 'Full Stack Engineer',
            //     image: '/nishant.png',
            //     bio: `I build with a focus on how things actually work in the real world. As a Full-Stack Engineer with an operator's mindset, I prioritize product feasibility and practical execution over abstract theory. My goal is always to move from idea to monetized, scalable reality as efficiently as possible.`,
            //     social: [
            //         { icon: Github, href: 'https://github.com/nishant4510' },
            //         { icon: Linkedin, href: 'https://www.linkedin.com/in/nishant-verma-566116200' },
            //         { icon: Instagram, href: 'https://instagram.com/nishantverma' },
            //     ],
            //     initials: 'NV', bg: 'bg-accent',
            // },
            // {
            //     name: 'Vikas Kumar', role: 'Full-Stack Engineer',
            //     image: '/vikas.png',
            //     bio: `A product focused engineer who thinks in systems. Beyond writing code, I focus on building scalable architectures and future-proof SaaS products. Whether it's crafting AI-driven tools or refining core infrastructure, I’m driven by making complex technology feel simple and reliable for the long term.`,
            //     social: [
            //         { icon: Github, href: 'https://github.com/devcodehub99' },
            //         { icon: Linkedin, href: 'https://www.linkedin.com/in/devcodehub99' },
            //         { icon: Twitter, href: 'https://x.com/devcodehub99' },
            //     ],
            //     initials: 'VK', bg: 'bg-teal-500',
            // },
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
                slug: 'productionizing-ai-agents-saas',
                category: 'AI / ML',
                title: 'From Wrappers to Real Workflows: Productionizing AI Agents in SaaS',
                excerpt: 'A battle-tested guide to structured outputs, streaming tool-calls, latency budgets, and cost guardrails for modern AI-native applications.',
                date: 'August 2026',
                author: 'Vikas Kumar',
                readTime: '7 min read',
                content: {
                    intro: 'Most AI startups fail not in prompt engineering, but in reliability engineering. Moving an AI agent from a prototype into a production multi-tenant SaaS environment requires treating LLMs as non-deterministic remote subroutines with strict schema contracts, latency bounds, token budgets, and fallback degradation paths.',
                    sections: [
                        {
                            heading: 'The Fallacy of Free-Form Text: Enforcing Strict Schema Contracts',
                            paragraphs: [
                                'Relying on raw LLM string completions for mission-critical SaaS workflows introduces a 12% to 18% failure rate in production due to parsing anomalies, unexpected Markdown fences, or hallucinated formatting. When downstream UI components expect strongly-typed JSON, a single syntax error results in broken rendering.',
                                'To productionize AI agents, every model interaction must be constrained by rigid JSON Schema contracts using OpenAI Structured Outputs or Anthropic Tool Calling APIs. We treat model output validation as a two-phase gateway: syntactic validation against a Zod schema, followed by deterministic business logic invariant checks before any database write occurs.'
                            ],
                            bulletPoints: [
                                'Zero-temperature deterministic schema validation with Zod or TypeBox on all incoming tool payloads.',
                                'Two-phase verification: Schema validation followed by tenant-isolated business logic checks before state mutation.',
                                'Automated single-retry error correction: Feed raw validation error diffs back into the model prompt when schema violations occur.'
                            ],
                            quote: 'If your backend cannot parse the LLM response into a strongly-typed domain object, the request is an infrastructure failure, not a prompt failure.'
                        },
                        {
                            heading: 'Latency Budgets & Optimistic Tool Execution',
                            paragraphs: [
                                'End users will not tolerate 8-second multi-step reasoning loops on simple web tasks. A production AI architecture must enforce a Time-to-First-Token (TTFT) budget under 600ms and end-to-end task completion under 2.5 seconds.',
                                'We achieve this by streaming tokens via Server-Sent Events (SSE) while speculatively executing read-only database fetches the moment the agent outputs intent classification, running heavy queries concurrently before the final JSON payload is completely transferred.'
                            ],
                            bulletPoints: [
                                'Server-Sent Events (SSE) streaming with partial JSON parsers for immediate progressive UI rendering.',
                                'Speculative pre-fetching: Parallelize read-only data fetching during token generation.',
                                'Strict timeouts: Hard 2500ms timeout per tool execution with automated graceful fallback messages.'
                            ]
                        },
                        {
                            heading: 'Token Cost Circuit Breakers & Multi-Tenant Guardrails',
                            paragraphs: [
                                'Unbounded reasoning loops and recursive agent retries can silently drain thousands of dollars in cloud API credits in hours. Every production SaaS workspace must have hard token circuit breakers backed by Redis token-bucket rate limiters.',
                                'Implement tiered model routing: use lightweight models (GPT-4o mini, Claude 3.5 Haiku) for 80% of classification and routing operations, delegating to frontier reasoning models only when task entropy exceeds defined confidence thresholds.'
                            ],
                            bulletPoints: [
                                'Tenant-level Redis rate limiters capping daily token spend and max execution steps per user interaction.',
                                'Tiered model routing: Fast, low-cost classifiers handling intent before invoking frontier reasoning models.',
                                'Structured OpenTelemetry spans tracking input/output tokens, execution latency, and cost per workflow run.'
                            ]
                        }
                    ],
                    summaryTakeaways: [
                        'Always enforce deterministic JSON Schema validation with Zod; never parse raw markdown or regex strings in production.',
                        'Implement Redis-backed token circuit breakers with strict per-tenant daily spend caps to prevent runaway reasoning costs.',
                        'Stream responses incrementally via Server-Sent Events and speculatively pre-fetch data to keep perceived latency sub-600ms.',
                        'Log end-to-end LLM traces with OpenTelemetry to track model drift, error rates, and per-user unit economics.'
                    ]
                }
            },
            {
                slug: 'modular-monolith-early-stage-saas',
                category: 'Architecture',
                title: 'The Modular Monolith: Why Early-Stage SaaS Should Avoid Microservices',
                excerpt: 'How building a clean, domain-driven modular monolith saves thousands in cloud infrastructure bills and accelerates pivot velocity.',
                date: 'July 2026',
                author: 'Nishant Verma',
                readTime: '6 min read',
                content: {
                    intro: 'In the early stages of a SaaS product, your biggest existential risk is not scale—it is pivot velocity. Prematurely decomposing an unproven product into distributed microservices introduces distributed transactions, network latency, cross-service authentication overhead, and complex deployment pipelines that grind engineering velocity to a halt.',
                    sections: [
                        {
                            heading: 'The Hidden Cognitive Tax of Distributed Systems',
                            paragraphs: [
                                'Managing Kubernetes clusters, gRPC contracts, distributed tracing, and two-phase commits for a team of 3 to 10 engineers drains up to 60% of engineering bandwidth away from user-facing feature iteration.',
                                'Network boundaries turn a simple 2ms PostgreSQL relational join into a 50ms cascade of cross-service HTTP calls, introducing multiple points of failure, serialization bottlenecks, and eventual consistency bugs that confuse early users.'
                            ],
                            bulletPoints: [
                                'In-memory function calls execute in microseconds with zero network serialization overhead.',
                                'Single database transactions (BEGIN...COMMIT) guarantee ACID compliance without distributed saga complexity.',
                                'Unified CI/CD pipeline deploys atomic updates across the entire application in under 90 seconds.'
                            ],
                            quote: 'Premature microservices split your database before you even understand your true business domain boundaries.'
                        },
                        {
                            heading: 'Structuring Clean Domain Boundaries Inside a Single Repository',
                            paragraphs: [
                                'A modular monolith is not spaghetti code. By utilizing Domain-Driven Design (DDD), we enforce strict encapsulation across modules (such as /modules/auth, /modules/billing, /modules/workspaces) within a single codebase.',
                                'Modules communicate exclusively through exported public service interfaces. Direct imports or cross-module database table joins are strictly blocked using TypeScript boundary lint rules, ensuring high cohesion and low coupling.'
                            ],
                            bulletPoints: [
                                'Strict boundary rules enforced via TypeScript path aliases and eslint-plugin-import constraints.',
                                'Schema isolation: Each domain owns its database tables, preventing tight relational coupling.',
                                'Public service contracts: Inter-module communication happens solely through typed interface methods.'
                            ]
                        },
                        {
                            heading: 'The Frictionless Extraction Path When Scale Demands It',
                            paragraphs: [
                                'When a specific module genuinely hits compute bottlenecks (such as high-throughput background processing or AI indexing), having clear domain boundaries allows you to extract that single module into an independent microservice in hours rather than months.',
                                'Background job queues (like BullMQ or Inngest) handle asynchronous workloads cleanly inside the monolith, allowing you to process millions of monthly background tasks on modest cloud instances.'
                            ],
                            bulletPoints: [
                                'Decouple CPU-intensive tasks using background queues (BullMQ/Inngest) without altering core architecture.',
                                'Zero-downtime service extraction path when organizational or infrastructure scaling triggers are met.',
                                'Save $15,000+ annually in cloud infrastructure by consolidating compute on optimized VPS or container runners.'
                            ]
                        }
                    ],
                    summaryTakeaways: [
                        'Start with a Modular Monolith with strict folder-level domain boundaries and typed public interfaces.',
                        'Leverage single-database ACID transactions to guarantee data integrity without complex saga patterns.',
                        'Decouple heavy asynchronous workloads with Redis-backed background queues before considering microservices.',
                        'Only extract microservices when team size or compute requirements objectively mandate isolated infrastructure.'
                    ]
                }
            },
            {
                slug: 'global-saas-billing-stripe-architecture',
                category: 'Product Ops',
                title: 'Global SaaS Billing: Structuring Multi-Currency Stripe, Webhooks & Tax Compliance',
                excerpt: 'Architecting zero-failure billing pipelines, idempotent webhook listeners, and dynamic regional pricing for global founders.',
                date: 'June 2026',
                author: 'Studio Engineering',
                readTime: '9 min read',
                content: {
                    intro: 'Billing infrastructure is the most critical pipeline in any SaaS business. A single dropped Stripe webhook or a race condition during subscription upgrades can result in unpaid access or customers being billed twice. Building for global revenue requires bulletproof webhook idempotency, automated tax compliance (VAT/GST), and purchasing power parity (PPP) without arbitrage vulnerability.',
                    sections: [
                        {
                            heading: 'Idempotent Webhook Processing: The Zero-Duplicate Rule',
                            paragraphs: [
                                'Stripe delivers webhooks with an "at-least-once" guarantee, meaning duplicate events are expected during network retries or transient timeouts. Processing an event twice without idempotency checks can trigger duplicate invoice receipts or repeated database updates.',
                                'Every incoming webhook must verify cryptographic signatures (stripe.webhooks.constructEvent) and record event.id in an idempotent processed_events PostgreSQL table within an atomic transaction before executing side effects.'
                            ],
                            bulletPoints: [
                                'Cryptographic signature verification on all incoming webhook payloads using raw body buffers.',
                                'Atomic transaction locking: Insert event ID into a processed_events table with unique constraints before processing.',
                                'Timestamp version checking: Prevent out-of-order webhook delivery from overwriting newer subscription states.'
                            ],
                            quote: 'If your webhook endpoint is not strictly idempotent, your billing system will eventually double-charge a user or grant permanent free tier access.'
                        },
                        {
                            heading: 'Multi-Currency & Purchasing Power Parity (PPP) Without Arbitrage',
                            paragraphs: [
                                'Offering localized pricing in USD, INR, EUR, and GBP increases emerging market checkout conversion by up to 240%. However, naive geo-IP based discounting opens vulnerabilities to VPN exploitation.',
                                'To prevent arbitrage, anchor customer pricing tiers to the issuing country of their payment method verified during Stripe 3D-Secure handshakes and automate tax calculation (EU VAT, Indian GST) through Stripe Tax.'
                            ],
                            bulletPoints: [
                                'Validate regional pricing eligibility against payment card issuing country rather than client IP address.',
                                'Automated tax computation with Stripe Tax to handle cross-border digital service tax regulations dynamically.',
                                'Dynamic multi-currency pricing tables rendering exact checkout amounts in local currencies (USD, INR, EUR, GBP).'
                            ]
                        },
                        {
                            heading: 'Smart Dunning & Grace Periods That Eliminate Involuntary Churn',
                            paragraphs: [
                                'Up to 40% of SaaS churn is involuntary—caused by expired credit cards, transient bank declines, or 3DS authentication requirements. A rigid billing engine that cuts off access immediately destroys customer trust.',
                                'Implement intelligent retry schedules with exponential backoff and a 72-hour grace period with contextual in-app notification banners, recapturing up to 65% of failed renewals automatically.'
                            ],
                            bulletPoints: [
                                'Stripe Smart Retries leveraging machine learning to retry card charges at optimal times.',
                                'Non-blocking 72-hour grace period accompanied by automated transactional renewal reminder emails.',
                                'Self-serve billing portal integration allowing customers to update cards without contacting support.'
                            ]
                        }
                    ],
                    summaryTakeaways: [
                        'Verify all Stripe webhook signatures and record event IDs in an idempotent database ledger before side effects.',
                        'Guard against out-of-order webhook delivery by validating event timestamps against stored state versions.',
                        'Implement purchasing power parity based on card issuing country to prevent VPN discount arbitrage.',
                        'Set up automated dunning retries and a 72-hour grace period to recover up to 65% of involuntary churn.'
                    ]
                }
            },
            {
                slug: 'ai-compliance-eu-act',
                category: 'AI / ML',
                title: 'Designing for EU AI Act Compliance in Modern SaaS',
                excerpt: 'A technical guide to implementing transparency and human-oversight protocols in your AI products.',
                date: 'May 2026',
                author: 'Compliance Lead',
                readTime: '10 min read',
                content: {
                    intro: 'The EU AI Act and global artificial intelligence regulations have reshaped enterprise software procurement. For B2B SaaS founders selling to multinational companies or European customers, AI compliance is no longer a legal checkbox—it is a core architectural requirement on vendor security assessments and enterprise RFPs.',
                    sections: [
                        {
                            heading: 'Risk Classification & Architectural Obligations',
                            paragraphs: [
                                'The EU AI Act categorizes AI systems into Minimal Risk, Specific Transparency Risk, and High Risk. The vast majority of B2B SaaS features (such as automated copilot suggestions, document analyzers, and content generation) fall under transparency risk mandates.',
                                'Transparency compliance requires explicit user-facing visual cues whenever AI-generated content is displayed, along with cryptographically verifiable audit logs tracking model versions, prompt parameters, and execution timestamps.'
                            ],
                            bulletPoints: [
                                'Explicit visual indicators on all AI-generated UI elements and output documents.',
                                'Immutable audit logging: Store model ID, prompt hash, temperature, and output diffs in an append-only table.',
                                'Comprehensive vendor registry documenting data retention policies and API compliance certificates.'
                            ],
                            quote: 'Enterprise buyers will reject AI software that lacks deterministic audit trails and clear human-in-the-loop controls.'
                        },
                        {
                            heading: 'Human-in-the-Loop (HITL) Override Architecture',
                            paragraphs: [
                                'Regulatory frameworks require that high-impact automated decisions provide mechanisms for human oversight and reversible execution. An AI agent should never execute destructive or financially binding actions autonomously.',
                                'Implement staged approval pipelines where autonomous agent runs generate proposed state changes that require explicit user confirmation before committing mutations to production databases.'
                            ],
                            bulletPoints: [
                                'Staged approval states for high-impact actions (data deletion, email dispatch, financial commitments).',
                                'One-click rollback mechanisms allowing users to revert automated agent modifications immediately.',
                                'Granular permission matrix defining which roles can authorize or override AI recommendations.'
                            ]
                        },
                        {
                            heading: 'Zero Data Retention & Client-Side PII Scrubbing',
                            paragraphs: [
                                'Enterprise compliance mandates that sensitive customer data is never used for training foundation models. Startups must configure enterprise Zero Data Retention (ZDR) agreements with upstream model providers.',
                                'To enhance security defense-in-depth, implement edge sanitization middleware that scrubs Personally Identifiable Information (PII) like phone numbers, tax IDs, and email addresses before payloads leave your cloud perimeter.'
                            ],
                            bulletPoints: [
                                'Zero Data Retention (ZDR) enterprise agreements with OpenAI, Anthropic, and AWS Bedrock.',
                                'Regex and NLP sanitization middleware scrubbing sensitive PII from outbound prompt payloads.',
                                'Regional data residency routing ensuring prompt inference stays within compliant geographic zones (e.g., EU-Frankfurt).'
                            ]
                        }
                    ],
                    summaryTakeaways: [
                        'Clearly label all AI-generated outputs in the UI and maintain immutable audit logs of model executions.',
                        'Build staged approval workflows (HITL) for high-impact actions to satisfy enterprise governance requirements.',
                        'Implement edge PII sanitization pipelines to scrub sensitive customer data before sending prompt payloads.',
                        'Secure Zero Data Retention agreements with model providers to guarantee customer IP is never used for training.'
                    ]
                }
            },
            {
                slug: 'building-mvps-for-founders',
                category: 'Founder Guides',
                title: 'Building MVPs for Founders: The Lean Engineering Manifesto',
                excerpt: 'How to cut through the noise and ship your core product logic in 4 weeks without technical debt.',
                date: 'April 2026',
                author: 'Nishant Verma',
                readTime: '6 min read',
                content: {
                    intro: 'The most fatal mistake early-stage founders make is confusing a Minimum Viable Product with a compromised, low-quality prototype. An MVP is not a half-baked collection of twenty features; it is the single most polished, frictionless execution of one core value proposition that solves an acute problem for your initial ten customers.',
                    sections: [
                        {
                            heading: 'The Rule of One: Isolating the Atomic Value Unit',
                            paragraphs: [
                                'Secondary features like custom dark modes, nested role permissions, and multi-tenant vanity subdomains do not validate product-market fit. They only add development time and maintenance friction.',
                                'Identify the single atomic interaction where your user experiences the "aha" moment (e.g., uploading a spreadsheet and receiving an automated financial breakdown) and eliminate every detour standing between signup and that moment.'
                            ],
                            bulletPoints: [
                                'One ideal customer persona: Build exclusively for the single user segment feeling the acute pain today.',
                                'One primary workflow: Remove every unnecessary configuration screen between registration and value realization.',
                                'Buy commodity primitives: Use Clerk for auth, Stripe for billing, Resend for email, and Tailwind for styling.'
                            ],
                            quote: 'If your product does not deliver core value within 3 minutes of signup, users will never stay long enough to see your secondary features.'
                        },
                        {
                            heading: 'Avoiding the Throwaway Code Myth',
                            paragraphs: [
                                'Founders often believe early MVP code can be thrown away and rewritten later. In practice, over 80% of MVP codebases form the structural foundation for V1 and beyond.',
                                'Writing clean TypeScript with strict types and Zod schema validation takes no longer than writing sloppy code, but prevents catastrophic refactoring costs when you begin scaling to paid users.'
                            ],
                            bulletPoints: [
                                'Enforce strict TypeScript compiler flags to catch runtime type mismatches before production deployment.',
                                'Implement end-to-end smoke tests (Playwright) covering solely the critical signup and checkout paths.',
                                'Minimize third-party npm dependencies to reduce supply-chain risks and maintenance debt.'
                            ]
                        },
                        {
                            heading: 'Day-1 Telemetry: If You Cannot Measure It, You Did Not Ship It',
                            paragraphs: [
                                'Launching without behavioral analytics means flying blind. You cannot improve conversion rates or user activation without understanding where drop-offs occur.',
                                'Embed privacy-compliant product analytics (like PostHog) from the first commit to measure onboarding completion rates, feature engagement, and daily active user retention.'
                            ],
                            bulletPoints: [
                                'Event-based funnel tracking at every step of the user onboarding and payment flows.',
                                'Session recording tools to identify UX bottlenecks and confusion in real user workflows.',
                                'Integrated feedback widgets allowing early adopters to submit bug reports and feature requests directly.'
                            ]
                        }
                    ],
                    summaryTakeaways: [
                        'Ruthlessly focus the MVP scope on a single core workflow that delivers immediate, quantifiable customer value.',
                        'Leverage established SaaS primitives (Clerk, Supabase, Stripe, Resend) instead of reinventing commodity plumbing.',
                        'Write maintainable TypeScript with strict boundary validation to avoid expensive rewrites later.',
                        'Integrate product analytics (PostHog) on day one to measure onboarding funnels and user retention objectively.'
                    ]
                }
            },
            {
                slug: 'nextjs-performance-optimization-2026',
                category: 'Architecture',
                title: 'High-Velocity Next.js: Sub-Second Load Times in 2026',
                excerpt: 'Granular hydration strategies and edge runtime optimizations for high-traffic SaaS portals.',
                date: 'March 2026',
                author: 'Vikas Kumar',
                readTime: '8 min read',
                content: {
                    intro: 'In 2026, web performance is not just a Core Web Vitals metric—it is a direct multiplier on conversion rates and SEO rankings. A 200ms delay in Time to Interactive (TTI) causes measurable bounce rate spikes. By leveraging React Server Components (RSC), granular client boundaries, and streaming Suspense, you can achieve sub-400ms page loads consistently.',
                    sections: [
                        {
                            heading: 'Pushing "use client" to the Furthest Leaf Nodes',
                            paragraphs: [
                                'The most common Next.js performance anti-pattern is placing "use client" at the root of a page or layout, unintentionally shipping the entire component tree and all its heavy dependencies into the client JavaScript bundle.',
                                'Keep 90% of your component tree as pure Server Components that render zero client-side JavaScript. Isolate interactive state (buttons, dropdowns, modal triggers) into micro-components at the very leaves of your UI tree.'
                            ],
                            bulletPoints: [
                                'Component tree isolation: Keep page layouts and static content as zero-JS Server Components.',
                                'Pass Server Components as children to Client Component wrappers to avoid bundle bloat.',
                                'Use dynamic imports (next/dynamic with ssr: false) for heavy client-only packages like chart visualizers and rich text editors.'
                            ],
                            quote: 'The fastest JavaScript bundle is the JavaScript that is never shipped over the wire to the browser.'
                        },
                        {
                            heading: 'Streaming with React Suspense & Edge Caching',
                            paragraphs: [
                                'Never allow slow database queries or third-party API calls to block the initial HTML response. Wrap asynchronous data-fetching components in React Suspense boundaries with skeleton fallbacks.',
                                'This streams the navigation shell and critical UI to the user in sub-100ms, while heavy asynchronous queries stream in progressively as promises resolve.'
                            ],
                            bulletPoints: [
                                'Granular Suspense boundaries streaming critical viewport elements before background queries finish.',
                                'Next.js cache tags (revalidateTag) for instant cache-busting on database mutations with CDN-cached reads.',
                                'Edge runtime execution for global latency reduction on geolocation and auth validation.'
                            ]
                        },
                        {
                            heading: 'Font Subsetting & Asset Optimization',
                            paragraphs: [
                                'Improper font loading is the primary cause of Cumulative Layout Shift (CLS) and flashing unstyled text. Using next/font with variable font subsets ensures fonts are self-hosted and zero-layout-shift.',
                                'Serve modern AVIF/WebP image formats with explicit dimensions and responsive sizes attributes to prevent viewport reflows on mobile devices.'
                            ],
                            bulletPoints: [
                                'Self-host variable fonts with next/font and display: swap to eliminate CLS completely.',
                                'Enforce modern image formats (AVIF/WebP) with explicit responsive size attributes.',
                                'Preconnect to critical external domains (analytics, payment gateways) in root layout headers.'
                            ]
                        }
                    ],
                    summaryTakeaways: [
                        'Structure applications as React Server Components by default and push "use client" strictly to interactive leaves.',
                        'Wrap slow async components in React Suspense to stream the initial page shell in sub-100ms.',
                        'Dynamically import heavy third-party libraries (charts, editors) to keep initial client JS bundles under 70KB.',
                        'Utilize Next.js tag-based cache revalidation to achieve static CDN delivery speeds with dynamic data freshness.'
                    ]
                }
            },
            {
                slug: 'zero-downtime-database-migrations-postgres',
                category: 'Product Ops',
                title: 'Zero-Downtime Database Migrations at Scale in Postgres & Prisma',
                excerpt: 'Safe schema expansion techniques, backward-compatible column rollouts, and lock-free indexing strategies during high-traffic intervals.',
                date: 'February 2026',
                author: 'Vikas Kumar',
                readTime: '5 min read',
                content: {
                    intro: 'As your SaaS scales past tens of thousands of active users, running naive schema migrations (like ALTER TABLE users ADD COLUMN organization_id VARCHAR NOT NULL) acquires exclusive table locks (ACCESS EXCLUSIVE) that block read/write queries, exhaust connection pools, and trigger 504 gateway timeouts. True zero-downtime requires the Expand and Contract pattern.',
                    sections: [
                        {
                            heading: 'The Expand and Contract Migration Pattern',
                            paragraphs: [
                                'Breaking changes cannot be applied in a single database release. The Expand and Contract strategy decouples schema updates from code deployments over multiple safe phases.',
                                'In Phase 1 (Expand), add new nullable columns and update code to dual-write to both legacy and new structures. In Phase 2 (Backfill), asynchronously migrate existing rows in batches. In Phase 3 (Switch), update application reads to the new structure. In Phase 4 (Contract), safely drop old columns.'
                            ],
                            bulletPoints: [
                                'Never add NOT NULL constraints without a default value in a single live table migration.',
                                'Dual-write patterns during transition phases to keep legacy and modern schemas in sync.',
                                'Batch backfilling: Update historical data in chunks of 1,000 rows with sleep intervals to prevent table locks.'
                            ],
                            quote: 'Database schema changes must always remain backward-compatible with the currently running version of your application code.'
                        },
                        {
                            heading: 'Lock-Free Indexing & Timeout Safety',
                            paragraphs: [
                                'Standard CREATE INDEX commands block all write operations on PostgreSQL tables during index construction. On multi-gigabyte tables, this lock can persist for minutes, causing massive downtime.',
                                'Always construct production indexes using CREATE INDEX CONCURRENTLY, and enforce short lock timeouts (SET lock_timeout = "2s";) so migrations fail fast rather than stalling active connection pools.'
                            ],
                            bulletPoints: [
                                'Always build indexes using CREATE INDEX CONCURRENTLY to avoid blocking ongoing reads and writes.',
                                'Configure strict 2-second lock timeouts on migration runners to prevent traffic pile-ups.',
                                'Regularly inspect and drop unused indexes to improve write throughput and reduce storage overhead.'
                            ]
                        },
                        {
                            heading: 'Connection Pooling in Serverless Architectures',
                            paragraphs: [
                                'Serverless functions (Vercel, AWS Lambda) spin up hundreds of transient concurrent instances during traffic spikes, rapidly exhausting PostgreSQL maximum connection limits.',
                                'Implement connection poolers like PgBouncer or Supabase Supavisor in transaction-pooling mode, and ensure long-running HTTP calls are never executed inside active database transactions.'
                            ],
                            bulletPoints: [
                                'Deploy PgBouncer / Supavisor in transaction mode to manage hundreds of serverless connections seamlessly.',
                                'Keep database transactions tightly scoped: Never invoke external Stripe or LLM APIs inside a SQL transaction.',
                                'Monitor pg_stat_activity for slow queries and connection leaks during high-load periods.'
                            ]
                        }
                    ],
                    summaryTakeaways: [
                        'Follow the four-phase Expand and Contract pattern for all breaking database schema modifications.',
                        'Build all PostgreSQL indexes using CONCURRENTLY and enforce short lock timeouts to prevent table lockouts.',
                        'Place a connection pooler (PgBouncer/Supavisor) in front of PostgreSQL for serverless compute workloads.',
                        'Never execute external network requests (Stripe, email, LLMs) within open SQL database transactions.'
                    ]
                }
            },
            {
                slug: 'technical-due-diligence-checklist-startups',
                category: 'Founder Guides',
                title: 'The 14-Day Technical Due Diligence Checklist for Seed-Stage Startups',
                excerpt: 'What institutional VCs and angel investors actually inspect in your codebase, cloud security, and IP ownership before wiring capital.',
                date: 'January 2026',
                author: 'Founder Office',
                readTime: '8 min read',
                content: {
                    intro: 'Closing a seed round or navigating an acquisition requires passing technical due diligence. Technical partners and external auditors will inspect your Git repositories, cloud infrastructure, dependency licenses, and intellectual property agreements. Having your engineering house in order accelerates closing timelines from months to days.',
                    sections: [
                        {
                            heading: 'Codebase Hygiene, IP Assignment & Contributor Agreements',
                            paragraphs: [
                                'The single biggest showstopper in startup technical diligence is unassigned intellectual property. If a contractor or former co-founder contributed code without signing a Confidential Information and Inventions Assignment Agreement (CIIA), investors cannot verify company ownership.',
                                'Ensure every engineer and external contractor has executed IP assignment agreements, and conduct automated license audits to ensure no viral copyleft licenses (GPL/AGPL) contaminate proprietary code.'
                            ],
                            bulletPoints: [
                                'Signed CIIA agreements for 100% of contributors, contractors, and founding team members.',
                                'Open source license compliance audit to verify zero viral copyleft (GPL/AGPL) dependencies.',
                                'Secret scanning of entire Git history using Trufflehog or Gitleaks to verify no committed credentials.'
                            ],
                            quote: 'A promising startup with messy IP assignments or exposed secrets in Git history will stall funding rounds faster than poor unit economics.'
                        },
                        {
                            heading: 'Cloud Infrastructure & Least-Privilege Security',
                            paragraphs: [
                                'Auditors will inspect AWS/GCP access controls to ensure no single engineer has unmonitored root access to production databases. Multi-Factor Authentication (MFA) must be enforced across all infrastructure, GitHub, and DNS accounts.',
                                'Verify automated daily database backups with tested Point-in-Time Recovery (PITR) procedures and regional disaster recovery runbooks.'
                            ],
                            bulletPoints: [
                                'Enforce MFA across all cloud consoles, GitHub repositories, and domain registrar accounts.',
                                'Role-Based Access Control (RBAC) following the principle of least privilege for production database access.',
                                'Automated database backups with verified 15-minute point-in-time recovery capabilities.'
                            ]
                        },
                        {
                            heading: 'Architecture Documentation & The Bus-Factor Runbook',
                            paragraphs: [
                                'Investors want assurance that the product can continue operating smoothly even if key engineers are unavailable. A well-maintained C4 architecture diagram and comprehensive onboarding documentation demonstrate operational maturity.',
                                'Maintain an onboarding runbook allowing a new engineer to clone the repository, configure environment variables, and run the test suite locally in under 30 minutes.'
                            ],
                            bulletPoints: [
                                'Clear high-level system architecture diagrams illustrating data flow, third-party APIs, and security perimeters.',
                                'Reproducible local development setup with Docker or scripts completing environment setup in under 30 minutes.',
                                'Documented incident response runbooks with alerting thresholds for production outages.'
                            ]
                        }
                    ],
                    summaryTakeaways: [
                        'Secure signed IP assignment agreements (CIIA) from all founders, employees, and contractors prior to diligence.',
                        'Run automated secret scanners and license audits to ensure clean Git history and legal compliance.',
                        'Enforce MFA and least-privilege access across all cloud infrastructure, databases, and code repositories.',
                        'Maintain concise system architecture diagrams and onboarding runbooks to eliminate key-person operational risk.'
                    ]
                }
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

    careers: {
        badge: "The Mission",
        title: "Join the Zyklabs Alchemists",
        description: "We're not just hiring employees. We're looking for partners who want to build the future of startups.",
        note: "We don't always know what we need until the right person shows up.",
        contact: {
            email: "careers@zyklabs.in",
            cta: "Send Your Pitch"
        },
        perks: [
            {
                title: "Remote First",
                description: "Work from anywhere. We care about your output, not your time zone.",
                icon: Globe
            },
            {
                title: "Direct Ownership",
                description: "You own the features you build and talk directly to founders.",
                icon: Zap
            },
            {
                title: "Fast Growth",
                description: "Work on new 0-to-1 products every few weeks.",
                icon: Sparkles
            }
        ],
        openings: [
            {
                title: 'Business Development Partner',
                badge: 'Revenue First',
                tagline: "You know people. People trust you. Let's build together.",
                description: "We're not looking for a salesperson. We're looking for a connector — someone who moves in startup and SME circles, spots founders who need a tech partner, and closes on relationships, not cold decks. If you've ever said \"I know a dev team that can build this\" — that's the job.",
                requirements: [
                    'Active in startup/founder communities (online or offline)',
                    'Comfortable having business conversations, not just technical ones',
                    'Someone with a network that trusts your recommendations',
                    'Self-driven — you don\'t wait for leads, you generate them',
                ],
                type: 'Commission + Bonuses',
                remote: true,
            },
            {
                title: 'Full-Stack Engineer',
                badge: 'Builder Mindset',
                tagline: 'Ship fast. Think scale. Care about the product.',
                description: "You'll be building real products for real startups — MVPs that go live in weeks. You should be comfortable with Next.js, TypeScript, and AI-assisted workflows. We don’t care about your degree; we care about your GitHub and your ability to solve hard problems independently.",
                requirements: [
                    'Expert in React/Next.js/Node.js ecosystem',
                    'Ability to own features from design to deployment',
                    'Experience with AI tools (Cursor/LLMs) to 10x your output',
                    'Builder mindset - you care about the UX as much as the DX',
                ],
                type: 'Full-Time / Freelance Hybrid',
                remote: true,
            },
            {
                title: 'Surprise Us',
                badge: 'Wildcard',
                tagline: "Do you have a skill we haven't listed but probably need?",
                description: "Maybe you're an AI researcher, a world-class UI designer, or a growth hacker who understands systems. If you think your presence at Zyklabs would 10x our value to founders, send us a pitch.",
                requirements: [
                    'High integrity and accountability',
                    'A obsession with quality and speed',
                    'Previous solo or startup-centric project experience',
                    'The ability to define your own value',
                ],
                type: 'Value-Based Agreement',
                remote: true,
            },
        ]
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
                { label: 'Pricing', href: '/pricing' },
                { label: 'Project Estimator', href: '/estimate' },
                { label: 'Insights', href: '/insights' },
                { label: 'Security', href: '/security' },
                { label: 'Contact', href: '/contact' },
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
