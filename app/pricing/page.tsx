import { siteConfig } from '@/config/site'
import { Metadata } from 'next'
import PricingContent from '@/components/features/pricing/PricingContent'

export const metadata: Metadata = {
  title: `Pricing & Plans | ${siteConfig.companyName}`,
  description: 'Transparent engineering costs for startups. From 2-week MVPs to dedicated monthly support.',
}

export default function PricingPage() {
  return <PricingContent />
}
