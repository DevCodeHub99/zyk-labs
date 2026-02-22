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
    Instagram,
    Mail,
    Calendar,
    ArrowRight,
    Search,
    Code2,
    Rocket,
    Quote,
    CheckCircle
} from 'lucide-react'

// ==========================================
// GLOBAL CONSTANTS
// These are used throughout the configuration to ensure consistency
// and make global updates (like changing the company name) easy.
// ==========================================
const COMPANY_NAME = 'Zyk Labs'
const CONTACT_EMAIL = 'hello@zyklabs.in'
const GITHUB_URL = 'https://github.com/zyklabs'
const LINKEDIN_URL = 'https://www.linkedin.com/company/zyklabs/'
const TWITTER_URL = 'https://x.com/zyklabs'

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
 */
export const siteConfig = {
    // ==========================================
    // 1. GLOBAL SETTINGS & NAVIGATION
    // ==========================================
    companyName: COMPANY_NAME,
    contactEmail: CONTACT_EMAIL,

    // Main navigation menu links
    navigation: [
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#projects' },
        { label: 'Process', href: '#process' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'About Us', href: '#team' },
        { label: 'Client Stories', href: '#testimonials' },
    ],

    // ==========================================
    // 2. HERO SECTION
    // The top section of the landing page
    // ==========================================
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

    // ==========================================
    // 3. SERVICES SECTION
    // What the company offers
    // ==========================================
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

    // ==========================================
    // 4. PROJECTS / PORTFOLIO SECTION
    // Display recent work and projects
    // ==========================================
    projects: {
        badge: 'Our Work',
        title: 'Featured Projects',
        description: 'Explore some of the high-performance products we have shipped for our clients.',
        cta: {
            text: 'Start Your Project',
            href: '#contact'
        },
        items: [
            {
                title: 'InvoiceDesk',
                category: 'Business SaaS',
                description: 'GST-compliant invoicing system built for Indian businesses with invoice generation, tax calculation, and client management features. Designed for real-world commercial usage.',
                tech: ['Next.js', 'MongoDB', 'Node.js', 'Tailwind'],
                color: 'from-emerald-500 to-teal-500',
                icon: Layout,
                link: 'https://shrinavdurgatrade.vercel.app/'
            },
            {
                title: 'VisionVoice AI',
                category: 'AI Accessibility Platform',
                description: 'An AI-powered accessibility platform designed to help visually impaired and accessibility-focused users interact with digital content using voice and intelligent automation. VisionVoice converts visual interfaces into voice-driven experiences, enabling navigation, content understanding, and interaction through AI assistance.',
                tech: ['Next.js', 'AI APIs', 'Node.js', 'Tailwind', 'Gemini AI'],
                color: 'from-orange-500 to-red-500',
                icon: Smartphone,
                link: 'https://visionvoiceai.vercel.app/'
            },
            {
                title: 'Quick-Tools',
                category: 'Productivity SaaS',
                description: 'A production-ready utility platform offering developer and productivity tools including UUID generator, JSON formatter, password generator, regex tester, EMI calculator, and more. Built with modular architecture and PWA support.',
                tech: ['Next.js', 'TypeScript', 'Tailwind', 'PWA'],
                color: 'from-blue-600 to-indigo-600',
                icon: BarChart3,
                link: 'https://quick-tools99.vercel.app/'
            },
        ]
    },

    // ==========================================
    // 5. PROCESS SECTION
    // How the company builds products
    // ==========================================
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

    // ==========================================
    // 6. PRICING SECTION
    // Available plans and services
    // ==========================================
    pricing: {
        title: 'Limited Offer Pricing',
        description: 'Lock in these discounted rates before we scale our operations in Q3. No hidden fees.',
        plans: [
            {
                name: 'MVP / App Launch',
                description: 'Go to market fast with a functional prototype.',
                price: '₹99,999',
                originalPrice: '₹149,999',
                period: '',
                popular: true,
                badge: 'Most Popular',
            },
            {
                name: 'Starter Website',
                description: 'Professional presence for small businesses.',
                price: '₹14,999',
                originalPrice: '₹24,999',
                period: '',
                popular: false,
            },
            {
                name: 'Monthly Retainer',
                description: 'Dedicated development team for your growth.',
                price: '₹19,999',
                originalPrice: '₹29,999',
                period: '/month',
                popular: true,
                badge: 'Best Value',
            },
            {
                name: 'Maintenance & Support',
                description: 'Keep your site secure and up-to-date.',
                price: '₹7,999',
                originalPrice: '₹12,499',
                period: '/month',
                popular: false,
            },
            {
                name: 'Hourly Engagement',
                description: 'Flexible expert help when you need it.',
                price: '₹499',
                originalPrice: '₹999',
                period: '/hour',
            },
            {
                name: 'Product Strategy',
                description: 'Expert roadmap and technical consulting.',
                price: '₹14,999',
                originalPrice: '₹22,999',
                period: '',
                popular: false,
            },
            {
                name: 'E-Commerce Admin',
                description: 'Product, inventory & order management.',
                price: '₹14,999',
                originalPrice: '₹24,999',
                period: '/month',
                popular: false,
            },
            {
                name: 'Digital Marketing',
                description: 'Grow your audience and drive sales.',
                price: '₹12,999',
                originalPrice: '₹18,999',
                period: '/month',
                popular: false,
            },
        ]
    },

    // ==========================================
    // 7. TEAM OUTLINE
    // Founders and team members
    // ==========================================
    team: {
        badge: 'Our People',
        title: 'Meet the Experts',
        description: 'A small, focused team of senior engineers and designers dedicated to your success.',
        members: [
            {
                name: 'Nishant Verma',
                role: 'Founder / Lead Engineering',
                bio: 'Technical leader specializing in high-performance web architecture, focused on scalability, and delivering exceptional digital experiences.',
                social: [
                    { icon: Github, href: 'https://github.com/nishantverma' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/nishant-verma-566116200/' },
                    { icon: Instagram, href: 'https://instagram.com/nishantverma' }
                ],
                initials: 'NV',
                bg: 'bg-blue-500'
            },
            {
                name: 'Vikas Kumar',
                role: 'Full-Stack Engineer',
                bio: 'Full-Stack Engineer building scalable SaaS and AI-driven products with clean architecture and intuitive user experiences.',
                social: [
                    { icon: Github, href: 'https://github.com/devcodehub99' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/devcodehub99' },
                    { icon: Twitter, href: 'https://x.com/devcodehub99' }
                ],
                initials: 'VK',
                bg: 'bg-teal-500'
            }
        ],
        about: {
            title: `Why We Started ${COMPANY_NAME}`,
            content: [
                "After years of working at multiple agencies, we realized that the best software is built by small, autonomous teams of experts—not by massive departments bogged down by bureaucracy.",
                `We founded ${COMPANY_NAME} to provide direct access to senior talent without the overhead. We believe in transparency, technical excellence, and building products that solve real problems.`
            ],
            stats: [
                { value: '10+', label: 'Projects Delivered' },
                { value: '95%', label: 'Client Satisfaction' }
            ]
        }
    },

    // ==========================================
    // 8. TESTIMONIALS & CLIENTS
    // ==========================================
    testimonials: {
        badge: 'Testimonials',
        title: 'Trusted by Tech Leaders',
        description: 'See what our partners have to say about working with us.',
        items: [
            {
                quote: "We struggled to find developers who actually understood what a local business needs. They didn't use confusing technical words; they just listened and delivered a fast website that works perfectly on every phone.",
                author: "Amit Verma",
                role: "Small Business Owner",
                company: "",
                logo: "AV"
            },
            {
                quote: "Finding a reliable tech team is tough, but working with them has been a huge relief. They are completely honest about pricing, always keep us updated on WhatsApp, and deliver exactly what they promise.",
                author: "Neha Sharma",
                role: "Independent Consultant",
                company: "",
                logo: "NS"
            },
            {
                quote: "I don't know much about coding, but they made building my first app so easy. What I really appreciate is their support even after the launch. If there is an issue, they fix it immediately.",
                author: "Rahul Gupta",
                role: "First-time Founder",
                company: "",
                logo: "RG"
            }
        ],
        clients: [
            "E-Commerce", "Healthcare", "FinTech", "Education", "Logistics", "Real Estate"
        ]
    },

    // ==========================================
    // 9. CONTACT SECTION
    // ==========================================
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

    // ==========================================
    // 10. FOOTER SECTION
    // ==========================================
    footer: {
        tagline: 'We turn ideas into fast, scalable digital products that help businesses grow.',
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
