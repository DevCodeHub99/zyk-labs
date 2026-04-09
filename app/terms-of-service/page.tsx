
import { siteConfig } from '@/config/site'
import LegalPage from '@/components/layout/LegalPage'

export default function TermsOfService() {
    const { termsOfService } = siteConfig.legal

    return <LegalPage data={termsOfService} title="Terms of" highlight="Service" />
}
