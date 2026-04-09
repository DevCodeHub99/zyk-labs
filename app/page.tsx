
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import {
  Hero,
  Marquee,
  Services,
  Projects,
  WhyChooseUs,
  EstimatorTeaser,
  InsightsTeaser,
  Contact,
  Pricing,
} from '@/components/features/landing'

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
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
