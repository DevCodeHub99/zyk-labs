'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Hero from '@/components/features/landing/Hero'
import Services from '@/components/features/landing/Services'
import Projects from '@/components/features/landing/Projects'
import Process from '@/components/features/landing/Process'
import WhyChooseUs from '@/components/features/landing/WhyChooseUs'
import Testimonials from '@/components/features/landing/Testimonials'
import Team from '@/components/features/landing/Team'
import Contact from '@/components/features/landing/Contact'
import Pricing from '@/components/features/landing/Pricing'

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
