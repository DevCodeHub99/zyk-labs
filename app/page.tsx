

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
