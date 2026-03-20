

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollAnalytics from '@/components/analytics/ScrollAnalytics'

import {
  Hero,
  Services,
  Projects,
  Process,
  WhyChooseUs,
  Testimonials,
  Team,
  Contact,
  Pricing,
} from '@/components/features/landing'

export default function Home() {
  return (
    <main className="w-full selection:bg-accent selection:text-white">
      <ScrollAnalytics />
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Projects />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
