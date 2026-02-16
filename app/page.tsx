'use client'

import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Process from '@/components/sections/Process'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

import Pricing from '@/components/sections/Pricing'

export default function Home() {
  return (
    <main className="w-full selection:bg-accent selection:text-white">
      <Navigation />
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
