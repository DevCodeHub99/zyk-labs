
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'
import StudioCard from '@/components/shared/StudioCard'
import { ArrowLeft, Clock, User, Share2, Bookmark, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

function getArticleBySlug(slug: string) {
  return siteConfig.insights.articles.find(
    (a) => a.slug === slug
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Not Found' }

  const fullTitle = `${article.title} | Insights | ${siteConfig.companyName}`
  const siteUrl = `https://zyklabs.in/insights/${slug}`
  
  return {
    title: fullTitle,
    description: article.excerpt,
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: fullTitle,
      description: article.excerpt,
      url: siteUrl,
      siteName: siteConfig.companyName,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
      images: [
        {
          url: 'https://zyklabs.in/og-image.png', // Should ideally be article-specific if available
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: article.excerpt,
      images: ['https://zyklabs.in/og-image.png'],
    },
  }
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-full">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle', // Specialized for engineering/tech
            headline: article.title,
            description: article.excerpt,
            image: `https://zyklabs.in/og-image.png`,
            datePublished: article.date,
            author: {
              '@type': 'Person',
              name: article.author
            },
            publisher: {
              '@type': 'Organization',
              name: siteConfig.companyName,
              logo: {
                '@type': 'ImageObject',
                url: 'https://zyklabs.in/favicon/favicon-32x32.png'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://zyklabs.in/insights/${slug}`
            }
          })
        }}
      />

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 relative z-10">
        
        {/* Back Link */}
        <div className="mb-12 flex items-center justify-between">
            <Button variant="studio-glass" size="sm" asChild>
                <a href="/insights"><ArrowLeft size={14} /> Back to Insights</a>
            </Button>
            <div className="flex items-center gap-4">
               <button className="p-2 rounded-full hover:bg-secondary transition-colors"><Share2 size={16} className="text-foreground/40" /></button>
               <button className="p-2 rounded-full hover:bg-secondary transition-colors"><Bookmark size={16} className="text-foreground/40" /></button>
            </div>
        </div>

        <article className="max-w-4xl mx-auto space-y-16">
            
            {/* Article Header */}
            <div className="space-y-8 text-center">
                <div className="flex items-center justify-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                        {article.category}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-border" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
                        {article.date}
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-black text-primary tracking-tighter leading-none italic-serif">
                    {article.title}
                </h1>

                <div className="flex items-center justify-center gap-8 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent text-[10px] font-black text-white flex items-center justify-center">
                            {article.author.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary leading-none">{article.author}</p>
                            <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest mt-1">Studio Engineer</p>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/40">
                        <Clock size={14} className="text-accent" /> {article.readTime}
                    </div>
                </div>
            </div>

            {/* Featured Image Mockup */}
            <div className="aspect-video w-full rounded-[3.5rem] bg-secondary/50 border border-border overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-3/4 h-3/4 border border-white/10 bg-white/5 backdrop-blur-3xl rounded-3xl shadow-2xl flex flex-col p-8 space-y-8">
                        <div className="w-1/2 h-4 bg-accent/20 rounded-full" />
                        <div className="space-y-4">
                            <div className="w-full h-8 bg-white/10 rounded-xl" />
                            <div className="w-5/6 h-8 bg-white/10 rounded-xl" />
                            <div className="w-4/6 h-8 bg-white/10 rounded-xl" />
                        </div>
                        <div className="mt-auto flex gap-4">
                            <div className="w-32 h-12 bg-accent/40 rounded-full" />
                            <div className="w-12 h-12 bg-white/10 rounded-full" />
                        </div>
                     </div>
                </div>
            </div>

            {/* Article Content Simulation */}
            <div className="max-w-3xl mx-auto space-y-12">
                <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed italic-serif border-l-4 border-accent pl-8 py-2">
                    {article.excerpt}
                </p>

                <div className="prose prose-invert prose-p:text-foreground/70 prose-p:text-lg prose-p:leading-relaxed prose-headings:text-primary prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-headings:italic-serif space-y-8">
                    <h2 className="text-2xl uppercase">The Problem with Traditional Outsourcing</h2>
                    <p>
                        Most early-stage founders get priced out by large agencies or burned by unreliable freelancers. In the current engineering landscape, developer velocity is often sacrificed for process, or quality is lost in the translation of requirement documents. 
                    </p>
                    <p>
                        At Zyklabs, we've identified that "Founder-Led Engineering" is the only way to ship at scale without accumulating massive technical debt in the first 90 days.
                    </p>

                    <h2 className="text-2xl uppercase">Architecting for Velocity</h2>
                    <p>
                        Building a high-performance SaaS in 2026 requires a shift from monolithic thinking to granular, edge-first architectures. By leveraging Next.js Server Components and atomic design principles, we reduce the initial TTI (Time to Interactive) to sub-400ms levels.
                    </p>
                    <ul className="space-y-4 not-prose">
                        {[
                            'Stateless Authentication for rapid scaling',
                            'No-Hydration UI components for mobile performance',
                            'Direct-to-Postgres Edge functions'
                        ].map(item => (
                            <li key={item} className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                                <CheckCircle2 className="text-accent" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-16 border-t border-border/50">
                    <div className="p-12 rounded-[3.5rem] bg-primary text-primary-foreground relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700" />
                        
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-3xl font-black uppercase tracking-widest italic-serif">Blueprint this strategy?</h3>
                            <p className="text-primary-foreground/60 max-w-xl font-medium leading-relaxed">
                                We can implement this specialized technical architecture for your product in 2-4 weeks. Book a roadmap session to see how it fits.
                            </p>
                            <Button variant="studio-accent" size="lg" showGlow asChild>
                                <a href="/estimate" className="flex items-center gap-3">
                                    Start Cost Breakdown <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}
