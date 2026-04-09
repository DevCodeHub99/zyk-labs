
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import ProjectEstimator from '@/components/features/estimator/ProjectEstimator'
import { Metadata } from 'next'
import StudioPage from '@/components/layout/StudioPage'

export const metadata: Metadata = {
  title: `Project Estimator | ${siteConfig.companyName}`,
  description: 'Get an instant technical roadmap and ballpark estimate for your software build.',
}

export default function EstimatePage() {
  return (
    <StudioPage decorColor1="bg-accent/[0.03]" decorColor2="bg-primary/[0.03]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader 
          badge="Lead Qualification"
          title={<>Estimate Your <span className="text-accent italic-serif">Build.</span></>}
          description="Answer a few technical questions to get a high-level roadmap and cost assessment for your product."
        />

        <div className="mt-16 md:mt-24">
            <ProjectEstimator />
        </div>
      </div>
    </StudioPage>
  )
}
