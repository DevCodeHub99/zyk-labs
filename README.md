# Zyk Labs

Marketing website for **Zyk Labs** — a software agency specializing in web applications and SaaS products.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** primitives
- **Cal.com** embed for booking · **Formspree** for contact form
- **Vercel Analytics** + **Speed Insights**

## Quick Start

```bash
git clone https://github.com/zyklabs/zyk-labs.git && cd zyk-labs
cp .env.example .env.local   # fill in your keys
npm install
npm run dev                    # → http://localhost:3000
```

### Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form endpoint ID |
| `NEXT_PUBLIC_CAL_LINK` | Cal.com booking link slug |

## Project Structure

```
app/                    → Pages & layouts (App Router)
components/
  features/landing/     → Landing page sections (Hero, Contact, etc.)
  layout/               → Navbar, Footer
  shared/               → Logo
  ui/                   → Base primitives (Button, Card, Sonner)
config/
  site.ts               → All site content (single source of truth)
  legal.ts              → Privacy Policy & Terms of Service text
lib/
  utils.ts              → Tailwind class merge utility
  scroll-to.ts          → Shared smooth-scroll helper
public/                 → Favicon, OG image, logo
```

## Content Updates

Edit `config/site.ts` to change any text, navigation, team info, or pricing — no component code changes needed.

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |

## License

© 2026 Zyk Labs. All rights reserved.
