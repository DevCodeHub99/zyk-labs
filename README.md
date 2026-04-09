# Zyklabs · Engineering Studio

High-performance technical partner for early-stage founders. We turn concepts into scalable MVPs and institutional-grade SaaS platforms.

## 🏗️ Technical Stack

- **Foundational**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Design System**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Integrations**: [Cal.com](https://cal.com/) (Booking), [Formspree](https://formspree.io/) (Lead Gen)
- **Monitoring**: [Vercel Speed Insights](https://vercel.com/docs/speed-insights) + [Analytics](https://vercel.com/docs/analytics)

## 🚀 Deployment & Operations

### 1. Initial Access
```bash
git clone https://github.com/zyklabs/zyk-labs.git
cd zyk-labs
npm install
```

### 2. Configuration
Duplicate `.env.example` into `.env.local` and populate the following engineering keys:
- `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID
- `NEXT_PUBLIC_CAL_LINK`: Cal.com booking namespace
- `NEXT_PUBLIC_FORMSPREE_ID`: Endpoint for contact form submission

### 3. Execution
```bash
npm run dev     # Development instance
npm run build   # Production compile
npm run start   # Production serve
```

## 🛠️ Content Architecture

The platform follows a **Single Source of Truth** pattern. All brand logic, pricing, team profiles, and service hierarchies are centralized in:
`config/site.ts`

### Development Workflow
To update the platform's narrative or add new intellectual assets:
1. **Modify the Manifest**: Update the relevant segment within `siteConfig` in `config/site.ts`.
2. **Type Validation**: The system enforces strict type safety via the `SiteConfig` interface in `types/index.ts`. Any structural changes to data MUST be reflected in the interface first.
3. **Automated UI Rendering**: The UI layer dynamically reconstructs all segments (Home, About, Portfolio, Insights) based on the manifest, ensuring zero-latency updates with institutional-grade data integrity.

## 📁 System Topology

- `app/`: Routing layer and high-authority page layouts.
- `components/features/`: Specialized segment implementations (Estimator, Landing).
- `components/shared/`: Reusable brand assets (Logo, StudioCard).
- `components/ui/`: Atomic design system components.
- `config/`: Centralized site manifest and legal protocols.
- `hooks/`: Decoupled business logic and form states.
- `types/`: Strict TypeScript interface definitions for platform integrity.

## ⚖️ License & Integrity

© 2026 **Zyklabs**. All rights reserved. Built for founders, by engineers.
