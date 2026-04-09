
import { siteConfig } from '@/config/site'
import LegalPage from '@/components/layout/LegalPage'

export default function PrivacyPolicy() {
    const { privacyPolicy } = siteConfig.legal

    return <LegalPage data={privacyPolicy} title="Privacy" highlight="Policy" />
}
