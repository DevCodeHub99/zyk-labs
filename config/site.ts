import {
    Globe, Smartphone, Server, Palette, Zap, ShoppingBag,
    TrendingUp, RefreshCw, ClipboardList, BarChart3, Layout,
    Github, Linkedin, Twitter, Instagram, Facebook, Mail,
    Search, Code2, Rocket, GraduationCap, Building2,
    CheckCircle2, Shield, Users, Lightbulb
} from 'lucide-react'

// Global constants — single place to update brand identity
const COMPANY_NAME = 'Zyk Labs'
const CONTACT_EMAIL = 'hello@zyklabs.in'

const LINKEDIN_URL = 'https://www.linkedin.com/company/zyklabs/'
const TWITTER_URL = 'https://x.com/zyklabs'
const INSTAGRAM_URL = 'https://www.instagram.com/zyklabs/'
const FACEBOOK_URL = 'https://www.facebook.com/zyklabs'
const PINTEREST_URL = 'https://www.pinterest.com/zyklabs'

export const siteConstants = {
    name: COMPANY_NAME,
    email: CONTACT_EMAIL,
    social: { linkedin: LINKEDIN_URL, twitter: TWITTER_URL, instagram: INSTAGRAM_URL, facebook: FACEBOOK_URL, pinterest: PINTEREST_URL }
}

/** Single source of truth for all site content, navigation, and features. */
export const siteConfig = {
    companyName: COMPANY_NAME,
    contactEmail: CONTACT_EMAIL,

    navigation: [
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#projects' },
        { label: 'Process', href: '#process' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'About Us', href: '#team' },
        { label: 'Testimonials', href: '#testimonials' },
    ],

    hero: {
        badge: 'Dedicated Tech Partner for Early-Stage Founders',
        title: { first: 'Ship Faster.', second: 'Scale', highlight: 'Affordably.' },
        description: 'We are a specialized engineering studio helping founders turn ideas into functioning MVPs and scalable web platforms. We build fast, communicate directly, and care about your product.',
        cta: {
            primary: { text: 'Book A Discovery Call', href: '#contact' },
            secondary: { text: 'Explore Packages', href: '#pricing' },
        },
        usp: [{ text: 'Affordable Rates' }, { text: 'Direct Founder Collaboration' }],
    },

    services: {
        badge: 'How We Help',
        title: 'Software Solutions for Growing Businesses',
        description: 'Whether you are a startup founder launching a new idea, or an SME owner needing custom tools, we build the exact technology you need.',
        items: [
            { icon: Rocket, title: 'Custom Web Apps & Portals', description: 'From founder prototypes to internal booking systems and client dashboards designed to automate your business.', features: ['Web App Development', 'Internal Dashboards', 'Client Portals', 'Process Automation'] },
            { icon: Search, title: 'E-Commerce & Digital Storefronts', description: 'High-performance digital storefronts and corporate websites built with modern tech to convert your traffic into revenue.', features: ['E-Commerce Stores', 'Corporate Websites', 'SEO Optimization', 'Payment Gateways'] },
            { icon: Code2, title: 'Code Rescue & Tech Support', description: 'We take over broken or slow codebases, fix critical bugs, optimize speed, and act as your dedicated technical execution team.', features: ['Bug Fixing', 'Performance Audits', 'API Integrations', 'Monthly Maintenance'] },
        ],
    },

    projects: {
        badge: 'Our Work',
        title: 'Featured Projects',
        description: 'Explore some of the high-performance products we have shipped for our clients.',
        cta: { text: 'Start Your Project', href: '#contact' },
        items: [
            { title: 'AdmitWise Consultancy', category: 'EdTech Platform', description: 'Full-stack college admission consultancy portal with course & college discovery across 300+ institutions, multi-role dashboards for admins and candidates, free counselling request workflow, and search across Engineering, Law, Pharmacy, Architecture & more. Built with a 98% student satisfaction rate.', tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'], color: 'from-violet-500 to-purple-600', icon: GraduationCap, link: 'https://www.admitwiseconsultancy.com/' },
            { title: 'VisionVoice AI', category: 'AI Accessibility Platform', description: 'An AI-powered accessibility platform designed to help visually impaired and accessibility-focused users interact with digital content using voice and intelligent automation.', tech: ['Next.js', 'AI APIs', 'Node.js', 'Tailwind', 'Gemini API'], color: 'from-orange-500 to-red-500', icon: Smartphone, link: 'https://visionvoiceai.zyklabs.in/' },
            { title: 'InvoiceDesk', category: 'Business SaaS', description: 'GST-compliant invoicing system built for Indian businesses with invoice generation, tax calculation, and client management features. Designed for real-world commercial usage.', tech: ['Next.js', 'MongoDB', 'Node.js', 'Tailwind'], color: 'from-emerald-500 to-teal-500', icon: Layout, link: 'https://shrinavdurgatrade.zyklabs.in/' },
            { title: 'Aurelion Builders', category: 'Real Estate & Construction', description: 'Premium construction and architectural firm website showcasing luxury residential projects, commercial landmarks, interior design, and renovation services. Features project portfolio with 150+ completed projects, 25+ years experience, ISO 9001:2015 certification, and client testimonials.', tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'], color: 'from-amber-500 to-yellow-600', icon: Building2, link: 'https://gilded-vista-designs.vercel.app/' },
            { title: 'Ekaashi', category: 'E-Commerce Store', description: 'Online artificial jewelry store featuring curated collections of ethnic earrings, party-wear jhumkas, oxidised jewelry, necklaces & jewelry sets. Includes product variants, deals & offers, cart management, user accounts with OTP login, and multiple payment options (UPI, cards, wallets, net banking).', tech: ['Nextjs', 'TypeScript', 'MongoDB', 'Tailwind CSS'], color: 'from-rose-500 to-pink-600', icon: ShoppingBag, link: 'https://ekaashi.com/' },
            { title: 'Quick-Tools', category: 'Productivity SaaS', description: 'A production-ready utility platform offering developer and productivity tools including UUID generator, JSON formatter, password generator, regex tester, EMI calculator, and more.', tech: ['Next.js', 'TypeScript', 'Tailwind', 'PWA'], color: 'from-teal-600 to-emerald-600', icon: BarChart3, link: 'https://quicktools.zyklabs.in/' },
        ],
    },

    process: {
        badge: 'How We Work',
        title: 'Simple, Transparent Process',
        description: "We've refined our workflow to deliver high-quality results without the headaches.",
        steps: [
            { number: '01', icon: Search, title: 'Strategy & Design', description: "We align on goals, map out user flows, and design high-fidelity prototypes so you know exactly what we're building." },
            { number: '02', icon: Code2, title: 'Agile Development', description: 'We build in two-week sprints, giving you regular demos and a deployable product at every stage.' },
            { number: '03', icon: Rocket, title: 'Launch', description: 'After rigorous testing and security audits, we deploy your application to a scalable cloud infrastructure.' },
            { number: '04', icon: TrendingUp, title: 'Growth', description: "We don't disappear. We monitor performance, handle updates, and help you plan the next big feature." },
        ],
    },

    whyChooseUs: {
        badge: 'Why Us?',
        title: `The ${COMPANY_NAME} Advantage`,
        description: "We're not just another development shop. Here's what sets us apart.",
        reasons: [
            { icon: Lightbulb, title: 'Product Thinkers First', description: 'We push back on bloated roadmaps and prioritize features strategically to get your product to market efficiently.' },
            { icon: Zap, title: 'Direct Developer Access', description: 'No account managers or middlemen. You collaborate directly with the engineers building your startup.' },
            { icon: Rocket, title: 'Uncompromising Speed', description: 'We utilize a battle-tested modern tech stack to ship high-quality products faster than traditional agencies.' },
            { icon: Server, title: 'Clean, Scalable Architecture', description: 'Maintainable, tested, and built to handle your first 10,000 users without needing a complete refactor.' },
            { icon: CheckCircle2, title: 'Radical Transparency', description: 'No black-box development. Direct communication, daily updates, and completely transparent roadmaps.' },
            { icon: TrendingUp, title: 'Affordable, Predictable Pricing', description: 'Without the massive overhead of a big agency, we deliver premium technical execution at bootstrapper-friendly rates.' },
        ],
    },

    pricing: {
        title: 'Simple, Bootstrapper-Friendly Pricing',
        description: 'No bloated estimates or scope creep. Transparent, affordable engagements tailored to your growth stage (Good, Better, Best).',
        plans: [
            { name: 'Starter MVP', description: 'Perfect for validating your idea fast. Landing page, auth, and basic database.', price: '₹24,500', originalPrice: '', period: '/project', popular: false, features: ['Landing Page & UI Setup', 'User Authentication', 'Waitlist & Basic Database', '2-Week Delivery'], cta: 'Start Basic Build' },
            { name: 'Standard MVP', description: 'A fully functional web application ready for your first paying users.', price: '₹48,500', originalPrice: '', period: '/project', popular: true, badge: 'Recommended', features: ['Core Application Logic', 'Payment Gateway (Stripe/Razorpay)', 'Custom API Integrations', '4-Week Delivery'], cta: 'Book Standard Build' },
            { name: 'Premium Full-Stack', description: 'Everything in Standard, plus post-launch support and growth tools.', price: '₹84,500', originalPrice: '', period: '/project', popular: false, features: ['Everything in Standard', 'Advanced SEO & Analytics', '2 Months Post-Launch Support', 'Priority Bug Fixes'], cta: 'Secure Premium Build' },
        ],
    },

    team: {
        badge: 'Our Team',
        title: 'Meet the Developers',
        description: 'A dedicated engineering team committed to bringing your ideas to life.',
        members: [
            {
                name: 'Nishant Verma', role: 'Founder / Lead Engineer',
                bio: 'Technical leader specializing in high-performance web architecture, focused on scalability, and delivering exceptional digital experiences.',
                social: [
                    { icon: Github, href: 'https://github.com/nishant4510' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/nishant-verma-566116200' },
                    { icon: Instagram, href: 'https://instagram.com/nishantverma' },
                ],
                initials: 'NV', bg: 'bg-accent',
            },
            {
                name: 'Vikas Kumar', role: 'Full-Stack Engineer',
                bio: 'Full-Stack Engineer building scalable SaaS and AI-driven products with clean architecture and intuitive user experiences.',
                social: [
                    { icon: Github, href: 'https://github.com/devcodehub99' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/devcodehub99' },
                    { icon: Twitter, href: 'https://x.com/devcodehub99' },
                ],
                initials: 'VK', bg: 'bg-teal-500',
            },
        ],
        about: {
            title: `Why We Started ${COMPANY_NAME}`,
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

    testimonials: {
        badge: 'Testimonials',
        title: 'Trusted by Tech Leaders',
        description: 'See what our partners have to say about working with us.',
        items: [
            { quote: "We struggled to find developers who actually understood what a local business needs. They didn't use confusing technical words; they just listened and delivered a fast website that works perfectly on every phone.", author: 'Amit Verma', role: 'Small Business Owner', company: '', logo: 'AV' },
            { quote: "Finding a reliable tech team is tough, but working with them has been a huge relief. They are completely honest about pricing, always keep us updated on WhatsApp, and deliver exactly what they promise.", author: 'Neha Sharma', role: 'Independent Consultant', company: '', logo: 'NS' },
            { quote: "I don't know much about coding, but they made building my first app so easy. What I really appreciate is their support even after the launch. If there is an issue, they fix it immediately.", author: 'Rahul Gupta', role: 'First-time Founder', company: '', logo: 'RG' },
        ],
        clients: ['E-Commerce', 'Healthcare', 'FinTech', 'Education', 'Logistics', 'Real Estate'],
    },

    contact: {
        badge: 'Contact Us',
        title: "Let's Build Something Great",
        description: "Have a project in mind? We'd love to hear about it. Send us a message or schedule a call.",
        email: { label: 'Email Us', value: CONTACT_EMAIL, subtext: 'For general inquiries' },
        booking: { label: 'Book a Call', subtext: 'Free 30-min discovery', cta: 'Schedule now' },
        social: [
            { icon: Linkedin, href: LINKEDIN_URL },
            { icon: Twitter, href: TWITTER_URL },
            { icon: Instagram, href: INSTAGRAM_URL },
            { icon: Facebook, href: FACEBOOK_URL },
        ],
        promo: { title: 'Ready to start?', description: 'We are currently accepting new projects for Q2. Secure your spot on our development roadmap.' },
    },

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
                { label: 'Terms of Service', href: '/terms-of-service' },
            ],
            social: [
                { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
                { icon: Twitter, href: TWITTER_URL, label: 'Twitter' },
                { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
                { icon: Facebook, href: FACEBOOK_URL, label: 'Facebook' },
                // Note: Lucide React does not have a native Pinterest icon in standard builds, 
                // but the link is accessible and defined above if you add a custom SVG later.
                { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
            ],
        },
    },
}
