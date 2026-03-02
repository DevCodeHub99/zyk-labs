import { siteConfig } from '@/config/site'
import { Card } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export default function Testimonials() {
    const { testimonials } = siteConfig
    const { items, clients } = testimonials

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                        {testimonials.badge}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">{testimonials.title}</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
                        {testimonials.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {items.map((item, i) => (
                        <Card key={i} className="border-border bg-card p-8 hover:border-accent/30 transition-all hover:shadow-lg relative group">
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/5 group-hover:text-accent/10 transition-colors" />

                            <div className="mb-6 flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg">
                                    {item.logo}
                                </div>
                                <div>
                                    <div className="font-bold text-primary">{item.author}</div>
                                    <div className="text-sm text-foreground/70">{item.role}</div>
                                </div>
                            </div>

                            <blockquote className="text-foreground/80 leading-relaxed relative z-10">
                                "{item.quote}"
                            </blockquote>
                        </Card>
                    ))}
                </div>

                {/* Client Logos Strip */}
                <div className="border-t border-border/50 pt-16">
                    <p className="text-center text-sm font-semibold text-foreground/40 uppercase tracking-widest mb-8">Trusted Across Industries</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {clients.map((client) => (
                            <div key={client} className="text-xl md:text-2xl font-bold text-foreground/40 hover:text-primary transition-colors cursor-default">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
