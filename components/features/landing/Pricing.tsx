

import { ArrowRight, Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

const calculateDiscount = (original: string, price: string) => {
    const o = parseInt(original.replace(/\D/g, ''))
    const p = parseInt(price.replace(/\D/g, ''))
    if (!o || !p || o <= p) return null;
    return Math.round(((o - p) / o) * 100)
}

export default function Pricing() {
    const { pricing } = siteConfig
    const { plans, title, description } = pricing

    return (
        <section id="pricing" className="py-20 md:py-32 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">{title}</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan: any) => {
                        const discount = plan.originalPrice ? calculateDiscount(plan.originalPrice, plan.price) : null;
                        return (
                            <Card
                                key={plan.name}
                                className={`relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${plan.popular
                                    ? 'border-accent ring-1 ring-accent bg-background shadow-accent/5'
                                    : 'border-border bg-background/50 hover:border-primary/20'
                                    }`}
                            >
                                {(plan.popular || plan.badge) && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase">
                                            {plan.badge || 'MOST POPULAR'}
                                        </span>
                                    </div>
                                )}

                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-primary">{plan.name}</h3>
                                    <p className="text-sm text-foreground/70 mt-1">{plan.description}</p>
                                </div>

                                <div className="mt-auto mb-6">
                                    {plan.originalPrice && (
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-medium text-foreground/40 line-through decoration-destructive/50">
                                                {plan.originalPrice}
                                            </span>
                                            {discount && (
                                                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                                    Save {discount}%
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black tracking-tight text-primary drop-shadow-sm">{plan.price}</span>
                                        {plan.period && <span className="text-sm text-foreground/50 font-medium">{plan.period}</span>}
                                    </div>
                                    <p className="text-[10px] text-foreground/40 mt-1 font-medium uppercase tracking-wide">
                                        Starts from *
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow text-sm text-foreground/80">
                                    {plan.features?.map((feature: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                            </div>
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.popular || plan.badge ? 'default' : 'outline'}
                                    className={`w-full group ${plan.popular || plan.badge
                                        ? 'bg-accent hover:bg-accent/90 text-white border-0'
                                        : 'border-primary/20 text-primary hover:bg-primary/5 hover:text-primary'
                                        }`}
                                    asChild
                                >
                                    <a href="#contact">
                                        {plan.cta || 'Get Started'} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>

                                <p className="text-[10px] text-foreground/30 text-center mt-3">
                                    * Actual price varies by requirements
                                </p>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
