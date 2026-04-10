
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { ArrowRight, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import StudioPage from '@/components/layout/StudioPage'
import NewsletterCTA from '@/components/shared/NewsletterCTA'

export const metadata: Metadata = {
  title: `Engineering Insights | ${siteConfig.companyName}`,
  description: siteConfig.insights.description,
}

export default function InsightsPage() {
  const { insights } = siteConfig
  const { articles, categories } = insights

  return (
    <StudioPage decorColor1="bg-accent/[0.03]" decorColor2="bg-accent/[0.01]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <SectionHeader 
          asH1
          badge={insights.badge}
          title={<>Technical <span className="text-accent italic-serif">Intelligence.</span></>}
          description={insights.description}
        />

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-10 md:mt-12 mb-12 md:mb-20">
            {categories.map((cat: string) => (
                <button key={cat} className="px-5 md:px-6 py-2 rounded-full border border-border/50 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:border-accent hover:text-accent transition-all bg-secondary/20">
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <StudioCard 
                key={article.slug} 
                className="group flex flex-col h-full hover:border-accent/30 transition-all duration-500"
                innerClassName="p-6 md:p-8 flex flex-col h-full"
            >
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                <div className="flex justify-between items-center">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {article.category}
                    </span>
                    <span className="text-[8px] md:text-[9px] font-bold text-foreground/30 uppercase tracking-tighter">
                        {article.date}
                    </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-primary tracking-tight leading-tight group-hover:text-accent transition-colors">
                    {article.title}
                </h3>
                
                <p className="text-foreground/60 text-xs md:text-sm leading-relaxed font-medium line-clamp-3">
                    {article.excerpt}
                </p>
              </div>

              <div className="space-y-5 md:space-y-6 pt-5 md:pt-6 border-t border-border/50">
                <div className="flex items-center justify-between text-[9px] md:text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <User size={10} className="text-accent md:w-3 md:h-3" /> {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={10} className="md:w-3 md:h-3" /> {article.readTime}
                    </div>
                </div>

                <Button variant="ghost" className="w-full h-11 md:h-12 rounded-xl border border-border/50 text-[10px] font-black uppercase tracking-widest group/btn hover:bg-primary hover:text-white transition-all" asChild>
                    <a href={`/insights/${article.slug}`}>
                        Read Insight <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </Button>
              </div>
            </StudioCard>
          ))}
        </div>

        <NewsletterCTA />
      </div>
    </StudioPage>
  )
}
