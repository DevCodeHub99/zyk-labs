import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Hero, Marquee } from '@/components/features/landing'
import dynamic from 'next/dynamic'

// Below the fold components - Dynamic imported to reduce initial bundle
const WhyChooseUs = dynamic(() => import('@/components/features/landing/WhyChooseUs'))
const Services = dynamic(() => import('@/components/features/landing/Services'))
const EstimatorTeaser = dynamic(() => import('@/components/features/landing/EstimatorTeaser'))
const Projects = dynamic(() => import('@/components/features/landing/Projects'))
const InsightsTeaser = dynamic(() => import('@/components/features/landing/InsightsTeaser'))
const PricingTeaser = dynamic(() => import('@/components/features/landing/PricingTeaser'))
const Contact = dynamic(() => import('@/components/features/landing/Contact'))

export default function Home() {
  return (
    <main className="w-full selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <WhyChooseUs />
      <Services />
      <EstimatorTeaser />
      <Projects />
      <InsightsTeaser />
      <PricingTeaser />
      <Contact />
      <Footer />
    </main>
  )
}
