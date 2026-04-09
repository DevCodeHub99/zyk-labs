
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { ArrowRight, Clock, User, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Engineering Insights | ${siteConfig.companyName}`,
  description: siteConfig.insights.description,
}

export default function InsightsPage() {
  const { insights } = siteConfig
  const { articles, categories } = insights

  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-full">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-2 h-screen bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 relative z-10">
        <SectionHeader 
          badge={insights.badge}
          title={<>Technical <span className="text-accent italic-serif">Intelligence.</span></>}
          description={insights.description}
        />

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 mb-20">
            {categories.map((cat: string) => (
                <button key={cat} className="px-6 py-2 rounded-full border border-border/50 text-[10px] font-black uppercase tracking-widest hover:border-accent hover:text-accent transition-all bg-secondary/20">
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <StudioCard 
                key={article.slug} 
                className="group flex flex-col h-full hover:border-accent/30 transition-all duration-500"
                innerClassName="p-8 flex flex-col h-full"
            >
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {article.category}
                    </span>
                    <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-tighter">
                        {article.date}
                    </span>
                </div>
                
                <h3 className="text-2xl font-black text-primary tracking-tight leading-tight group-hover:text-accent transition-colors">
                    {article.title}
                </h3>
                
                <p className="text-foreground/60 text-sm leading-relaxed font-medium line-clamp-3">
                    {article.excerpt}
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-border/50">
                <div className="flex items-center justify-between text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <User size={12} className="text-accent" /> {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={12} /> {article.readTime}
                    </div>
                </div>

                <Button variant="ghost" className="w-full h-12 rounded-xl border border-border/50 text-[10px] font-black uppercase tracking-widest group/btn hover:bg-primary hover:text-white transition-all" asChild>
                    <a href={`/insights/${article.slug}`}>
                        Read Insight <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </Button>
              </div>
            </StudioCard>
          ))}
        </div>

        {/* Global Newsletter / Callout */}
        <div className="mt-32">
             <StudioCard className="max-w-4xl mx-auto p-12 md:p-20 text-center border-accent/20" innerClassName="space-y-8">
                 <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter italic-serif">
                   Stay ahead of the <br />
                   <span className="text-accent italic-serif">Engineering Curve.</span>
                 </h2>
                 <p className="text-lg text-foreground/60 max-w-xl mx-auto font-medium leading-relaxed">
                    Get monthly technical blueprints and product strategies delivered directly to your inbox.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="email" placeholder="work@email.com" className="flex-grow bg-secondary/30 border border-border rounded-full px-6 py-4 text-sm font-bold outline-none focus:border-accent transition-all" />
                    <Button className="rounded-full h-14 px-8 bg-primary text-white font-black uppercase tracking-widest text-[10px]">Subscribe</Button>
                 </div>
             </StudioCard>
        </div>
      </div>

      <Footer />
    </main>
  )
}
