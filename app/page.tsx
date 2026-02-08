'use client'

import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import Projects from '@/components/sections/Projects'
import Process from '@/components/sections/Process'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Industries />
      <Projects />
      <Process />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
