import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { ArrowLeft, ExternalLink, Code2, Server, Layout, ShieldCheck, Zap, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// --- Types ---
interface PageProps {
  params: Promise<{ slug: string }>
}

// --- Data Fetching simulation ---
function getProjectBySlug(slug: string) {
  return siteConfig.projects.items.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Not Found' }
  return {
    title: `${project.title} | Case Study | ${siteConfig.companyName}`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-full">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/[0.05] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-2 h-screen bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        
        {/* Back Link */}
        <div className="mb-12">
            <Button variant="studio-glass" size="sm" asChild>
                <a href="/work"><ArrowLeft size={14} /> Back to Portfolio</a>
            </Button>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-start">
            
            {/* Main Content */}
            <div className="space-y-16">
                <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Technical Case Study</p>
                    <h1 className="text-5xl md:text-8xl font-black text-primary tracking-tighter leading-none italic-serif">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-3 pt-4">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-4 py-1.5 rounded-full bg-secondary text-[10px] font-black uppercase tracking-widest text-primary/60 border border-border">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="aspect-video w-full rounded-[3rem] bg-secondary/50 border border-border overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                         <div className="w-full h-full border-2 border-primary/10 bg-background/40 backdrop-blur-xl rounded-3xl flex flex-col overflow-hidden shadow-2xl">
                             <div className="h-12 bg-primary/5 border-b border-primary/10 flex items-center px-6 justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/50" />
                                </div>
                                <div className="text-[8px] font-black uppercase tracking-widest text-foreground/30">System Infrastructure</div>
                             </div>
                             <div className="flex-1 p-8 flex items-center justify-center">
                                <Code2 className="w-32 h-32 text-accent/20 animate-pulse" />
                             </div>
                         </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black uppercase tracking-widest text-primary flex items-center gap-3">
                           <Layout className="text-accent" /> Product Scope
                        </h3>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            {project.description} This project required a high-performance frontend architecture coupled with a scalable backend schema to handle concurrent user requests while maintaining sub-second latency.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-black uppercase tracking-widest text-primary flex items-center gap-3">
                           <Server className="text-accent" /> Engineering
                        </h3>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            The tech stack was selected for maximum developer velocity and production stability. We utilized {project.tech[0]} for the core application logic and {project.tech[project.tech.length - 1]} for data persistence and state management.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                     <h3 className="text-2xl font-black uppercase tracking-widest text-primary italic-serif">Technical Implementation</h3>
                     <div className="grid gap-4">
                        {[
                            { title: 'Performance Architecture', desc: 'Server-side rendering with granular hydration to ensure 95+ Lighthouse scores.', icon: Zap },
                            { title: 'Security Protocol', desc: 'JWT-based stateless authentication with role-based access control (RBAC).', icon: ShieldCheck },
                            { title: 'Responsive Systems', desc: 'Fluid layout architecture supporting every resolution from mobile to ultra-wide.', icon: Monitor },
                        ].map((detail, idx) => (
                            <StudioCard key={idx} className="p-6" innerClassName="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white flex-shrink-0">
                                    <detail.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-1">{detail.title}</h4>
                                    <p className="text-xs text-foreground/60 font-medium leading-relaxed">{detail.desc}</p>
                                </div>
                            </StudioCard>
                        ))}
                     </div>
                </div>
            </div>

            {/* Sidebar Stats */}
            <aside className="space-y-8 lg:sticky lg:top-32">
                 <StudioCard className="p-8 border-accent/20" innerClassName="space-y-8">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Category</p>
                        <p className="text-xl font-black text-primary uppercase italic-serif">{project.category}</p>
                    </div>
                    <div className="h-px w-full bg-border/50" />
                    <div className="space-y-4">
                         <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Technical Stack</p>
                         <div className="space-y-2">
                             {project.tech.map((t: string) => (
                                 <div key={t} className="flex items-center gap-2 text-xs font-bold text-foreground/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    {t}
                                 </div>
                             ))}
                         </div>
                    </div>
                    
                    <div className="pt-4">
                         {project.link ? (
                            <Button variant="studio-accent" size="lg" showGlow asChild>
                                <a href={project.link} target="_blank" rel="noopener">
                                    Launch Project <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </Button>
                         ) : (
                            <Button disabled variant="studio-secondary" size="lg" className="w-full">
                                Private Infrastructure
                            </Button>
                         )}
                    </div>
                 </StudioCard>

                 <div className="p-8 rounded-[2.5rem] bg-primary text-primary-foreground space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
                    <h4 className="text-lg font-black uppercase tracking-widest leading-tight">Need a similar solution?</h4>
                    <p className="text-xs text-primary-foreground/60 font-medium leading-relaxed">
                        We can blueprint and build a performance-optimized version of this architecture tailored to your business.
                    </p>
                    <Button variant="studio-outline" size="sm" asChild>
                        <a href="/#contact">Project Discovery <ArrowLeft size={12} className="ml-2 rotate-180" /></a>
                    </Button>
                 </div>
            </aside>
        </div>

      </div>

      <Footer />
    </main>
  )
}
