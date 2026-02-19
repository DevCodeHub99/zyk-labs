import { siteConstants } from '@/config/site'

/**
 * Legal Content Configuration
 * 
 * Separates long-form legal text from the main site configuration to improve maintainability.
 * Uses global constants from `siteConstants` to dynamically insert company name and email,
 * ensuring legal documents are always up-to-date with the brand identity.
 */
export const privacyPolicy = {
    title: 'Privacy Policy',
    lastUpdated: 'February 19, 2026',
    sections: [
        {
            heading: '1. Introduction',
            content: `${siteConstants.name} ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the type of information we may collect from you or that you may provide when you visit our website.`
        },
        {
            heading: '2. Information We Collect',
            content: 'We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("personal information"). This includes: Name, email address, phone number, and any other information you choose to provide.'
        },
        {
            heading: '3. How We Use Your Information',
            content: 'We use the information we collect to: Provide, maintain, and safeguard our services; Process your requests and transactions; Send you technical notices, updates, security alerts, and support messages; Respond to your comments, questions, and requests.'
        },
        {
            heading: '4. Data Security',
            content: 'We implement appropriate technical and organizational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.'
        },
        {
            heading: '5. Your Rights',
            content: 'Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict the use of your data. Contact us to exercise these rights.'
        },
        {
            heading: '6. Contact Us',
            content: `If you have any questions or comments about this notice, the ways in which ${siteConstants.name} collects and uses your information described here, please do not hesitate to contact us at: ${siteConstants.email}`
        }
    ]
}

export const termsOfService = {
    title: 'Terms of Service',
    lastUpdated: 'February 19, 2026',
    sections: [
        {
            heading: '1. Acceptance of Terms',
            content: `By accessing or using the ${siteConstants.name} website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.`
        },
        {
            heading: '2. Use License',
            content: `Permission is granted to temporarily download one copy of the materials (information or software) on ${siteConstants.name} website for personal, non-commercial transitory viewing only.`
        },
        {
            heading: '3. Services',
            content: `${siteConstants.name} provides software development, consulting, and design services. The specific terms of these services are governed by individual client agreements and statements of work.`
        },
        {
            heading: '4. Intellectual Property',
            content: `The Service and its original content, features, and functionality are and will remain the exclusive property of ${siteConstants.name} and its licensors. The Service is protected by copyright, trademark, and other laws.`
        },
        {
            heading: '5. Limitation of Liability',
            content: `In no event shall ${siteConstants.name}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.`
        },
        {
            heading: '6. Governing Law',
            content: `These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which ${siteConstants.name} is established, without regard to its conflict of law provisions.`
        },
        {
            heading: '7. Changes to Terms',
            content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.'
        }
    ]
}
