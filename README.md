# Zyk Labs Website

The official marketing and landing page for **Zyk Labs**, a modern software development agency specializing in high-performance web applications and SaaS products.

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Core Features

-   **Modern Architecture**: Built with Next.js 16 (App Router) & React 19.
-   **Performance First**: Highly optimized for Core Web Vitals and SEO.
-   **Config-Driven**: All text content, navigation, and features are centralized in `config/site.ts`.
-   **Responsive Design**: Mobile-first approach using Tailwind CSS.
-   **Direct Booking Integration**: Cal.com embedded functionality for seamless scheduling.
-   **Contact Forms**: Formspree integration for reliable email delivery.
-   **Dark Mode**: Built-in theme toggling with `next-themes` and persisting preferences.
-   **Accessible Notifications**: Global toast system powered by `sonner`.

## 🛠 Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Forms**: React Hook Form + Zod + Formspree
-   **Scheduling**: Cal.com (via `@calcom/embed-react`)

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-org/zyk-labs-website.git
    cd zyk-labs-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    set up environment file and update it with your credentials:
    
    Update `.env.local` with your Formspree ID and Cal.com link:
    ```env
    NEXT_PUBLIC_FORMSPREE_ID=your_form_id
    NEXT_PUBLIC_CAL_LINK=your_cal_link
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── layout.tsx        # Global Layout with Theme & Toast Providers
│   └── globals.css       # Tailwind & Global Styles
├── components/           # UI Components
│   ├── features/         # Feature-specific modules (Landing sections like Hero, Contact)
│   ├── layout/           # App shell components (Navbar, Footer)
│   ├── shared/           # Reusable branding components (Logo)
│   └── ui/               # Base UI primitives (Buttons, Inputs, Cards - shadcn/ui)
├── config/               # Content configuration (site.ts, legal.ts)
├── hooks/                # Custom hooks (use-mobile.tsx, etc.)
├── lib/                  # Utilities (clsx, twMerge)
└── public/               # Static assets
```

## 📝 Configuration

To update content without touching the code, modify `config/site.ts`. This file centralized controls for:
-   **Company Details**: Name, Email, Social Links
-   **Navigation**: Links & Labels
-   **Hero Section**: Headlines, CTA Buttons, USP Badges
-   **Features & Services**: Icons, Descriptions
-   **Team Members**: Bios & Roles

Legal documents (Privacy Policy, Terms) are cleanly separated in `config/legal.ts`.

## 📄 License

© 2026 Zyk Labs. All rights reserved.
