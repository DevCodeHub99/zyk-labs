import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import Link from 'next/link'

import { LegalSection } from '@/types'

export default function TermsOfService() {
    const { termsOfService } = siteConfig.legal

    return (
        <main className="relative pt-24 pb-20 md:pt-40 md:pb-32 bg-background min-h-screen overflow-hidden">
             {/* Background Ambient Glows */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-accent/5 to-transparent blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Navigation & Identity Dock */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
                    <Button asChild variant="ghost" className="-ml-4 h-12 px-6 rounded-2xl bg-secondary/30 backdrop-blur-md border border-border/40 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary transition-all">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft size={14} className="text-accent" />
                            Back to Studio
                        </Link>
                    </Button>
                    <Logo size="sm" asImage className="opacity-80" />
                </div>

                {/* Header Block */}
                <div className="space-y-6 mb-24 text-center md:text-left">
                    <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                        Operations Protocol
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-primary tracking-tighter leading-none italic-serif">
                        Terms of <span className="text-accent">Service.</span>
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-[10px] font-bold text-foreground/40 uppercase tracking-widest pt-2">
                         <span>v1.0.0</span>
                         <span className="hidden md:block w-1 h-1 bg-border rounded-full" />
                         <span>Last Updated: {termsOfService.lastUpdated}</span>
                    </div>
                </div>

                {/* Terms Content Stack */}
                <div className="space-y-20">
                    {termsOfService.sections.map((section, index) => (
                        <div key={index} className="group relative">
                            <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-12">
                                <div className="space-y-2">
                                    <div className="text-[10px] font-black text-accent uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Article 0{index + 1}</div>
                                    <h2 className="text-xl font-black text-primary uppercase tracking-tight">{section.heading}</h2>
                                    <div className="w-8 h-1 bg-accent/20 rounded-full group-hover:w-12 transition-all" />
                                </div>
                                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                                    <p className="text-foreground/60 leading-relaxed font-medium">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Simple Footer Watermark */}
                <div className="mt-32 pt-12 border-t border-border/50 text-center">
                    <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.3em]">
                        Zyklabs Service Standards & Compliance
                    </p>
                </div>
            </div>
        </main>
    )
}
