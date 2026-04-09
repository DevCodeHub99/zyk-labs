
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import ProjectEstimator from '@/components/features/estimator/ProjectEstimator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Project Estimator | ${siteConfig.companyName}`,
  description: 'Get an instant technical roadmap and ballpark estimate for your software build.',
}

export default function EstimatePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navbar />
      
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-full">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <SectionHeader 
          badge="Lead Qualification"
          title={<>Estimate Your <span className="text-accent italic-serif">Build.</span></>}
          description="Answer a few technical questions to get a high-level roadmap and cost assessment for your product."
        />

        <div className="mt-16 md:mt-24">
            <ProjectEstimator />
        </div>
      </div>

      <Footer />
    </main>
  )
}
