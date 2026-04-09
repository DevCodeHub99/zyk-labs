
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

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {insights.articles.slice(0, 2).map((article: ArticleItem) => (
            <StudioCard key={article.slug} className="p-8 border-border/40 hover:border-accent/40 transition-all duration-500 group">
                <div className="space-y-6">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-accent/60">
                        <span>{article.category}</span>
                        <div className="flex items-center gap-2"><Clock size={12}/> {article.readTime}</div>
                    </div>
                    <h3 className="text-2xl font-black text-primary tracking-tight leading-tight group-hover:text-accent transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-foreground/50 text-sm leading-relaxed line-clamp-2">
                        {article.excerpt}
                    </p>
                    <Button variant="link" className="p-0 h-auto text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-accent flex items-center gap-2" asChild>
                        <a href={`/insights/${article.slug}`}>Read More <ArrowRight size={14} /></a>
                    </Button>
                </div>
            </StudioCard>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest gap-2 hover:bg-transparent hover:text-accent" asChild>
                <a href="/insights">Explore All Insights <ArrowRight size={14} /></a>
            </Button>
        </div>
      </div>
    </section>
  )
}
