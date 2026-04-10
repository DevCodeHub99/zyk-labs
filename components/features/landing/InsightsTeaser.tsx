'use client'

import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock } from 'lucide-react'
import { ArticleItem } from '@/types'

export default function InsightsTeaser() {
  const { insights } = siteConfig
  
  return (
    <section className="py-20 md:py-40 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          badge="Latest Intelligence"
          title={<>Technical <span className="text-accent italic-serif">Insights.</span></>}
          description="We document our engineering blueprints and product strategies for high-velocity founders."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
          {insights.articles.slice(0, 2).map((article: ArticleItem) => (
            <StudioCard key={article.slug} className="p-6 md:p-8 border-border/40 hover:border-accent/40 transition-all duration-500 group">
                <div className="space-y-4 md:space-y-6">
                    <div className="flex justify-between items-center text-[9px] md:text-[10px] font-black uppercase tracking-widest text-accent/60">
                        <span>{article.category}</span>
                        <div className="flex items-center gap-2"><Clock className="w-3 h-3 md:w-3.5 md:h-3.5"/> {article.readTime}</div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-primary tracking-tight leading-tight group-hover:text-accent transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-foreground/50 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {article.excerpt}
                    </p>
                    <Button variant="studio-secondary" size="sm" asChild>
                        <a href={`/insights/${article.slug}`} aria-label={`Read the full article titled: ${article.title}`}>
                            Read Full article <ArrowRight size={14} />
                        </a>
                    </Button>
                </div>
            </StudioCard>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Button variant="studio-outline" size="lg" asChild>
                <a href="/insights">Explore All Insights <ArrowRight size={14} /></a>
            </Button>
        </div>
      </div>
    </section>
  )
}
