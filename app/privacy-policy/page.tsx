import { siteConfig } from '@/config/site'
import { privacyPolicy } from '@/config/legal'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import Link from 'next/link'

export default function PrivacyPolicy() {
    // const { privacyPolicy } = siteConfig <-- Removed

    return (
        <main className="py-20 md:py-32 bg-background min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation & Identity */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-border/50 pb-8">
                    <Button asChild variant="ghost" className="-ml-4 text-foreground/70 hover:text-primary">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft size={18} />
                            Back to Home
                        </Link>
                    </Button>
                    <div className="scale-90 origin-left md:origin-right">
                        <Logo />
                    </div>
                </div>

                <div className="space-y-6 mb-12">
                    <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                        Legal
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">{privacyPolicy.title}</h1>
                    <p className="text-lg text-foreground/60">
                        Last Updated: {privacyPolicy.lastUpdated}
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
                    {privacyPolicy.sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">{section.heading}</h2>
                            <p className="text-foreground/80 leading-relaxed text-balance">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
