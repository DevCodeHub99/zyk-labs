'use client'

import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Pricing() {
    const plans = [
        {
            name: 'Starter Website',
            description: 'Professional presence for small businesses.',
            price: '₹8,999',
            period: '',
            popular: false,
        },
        {
            name: 'MVP / App Launch',
            description: 'Go to market fast with a functional prototype.',
            price: '₹99,999',
            period: '',
            popular: true,
        },
        {
            name: 'Monthly Retainer',
            description: 'Dedicated development team for your growth.',
            price: '₹19,999',
            period: '/month',
            popular: false,
        },
        {
            name: 'Hourly Engagement',
            description: 'Flexible expert help when you need it.',
            price: '₹499',
            period: '/hour',
            popular: false,
        },
        {
            name: 'Maintenance & Support',
            description: 'Keep your site secure and up-to-date.',
            price: '₹7,999',
            period: '/month',
            popular: false,
        },
        {
            name: 'E-Commerce Admin',
            description: 'Product, inventory & order management.',
            price: '₹14,999',
            period: '/month',
            popular: false,
        },
        {
            name: 'Digital Marketing',
            description: 'Grow your audience and drive sales.',
            price: '₹12,999',
            period: '/month',
            popular: false,
        },
        {
            name: 'Product Strategy',
            description: 'Expert roadmap and technical consulting.',
            price: '₹14,999',
            period: '',
            popular: false,
        },
    ]

    return (
        <section id="pricing" className="py-20 md:py-32 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Choose the plan that fits your stage of growth. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${plan.popular
                                ? 'border-accent ring-1 ring-accent bg-background shadow-accent/5'
                                : 'border-border bg-background/50 hover:border-primary/20'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}

                            <div className="mb-4">
                                <h3 className="text-lg font-bold text-primary">{plan.name}</h3>
                                <p className="text-sm text-foreground/60 mt-1">{plan.description}</p>
                            </div>

                            <div className="mt-auto mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                                    <span className="text-sm text-foreground/50 font-medium">{plan.period}</span>
                                </div>
                                <p className="text-[10px] text-foreground/40 mt-1 font-medium uppercase tracking-wide">
                                    Starts from *
                                </p>
                            </div>

                            <Button
                                variant={plan.popular ? 'default' : 'outline'}
                                className={`w-full group ${plan.popular
                                    ? 'bg-accent hover:bg-accent/90 text-white border-0'
                                    : 'border-primary/20 text-primary hover:bg-primary/5 hover:text-primary'
                                    }`}
                                asChild
                            >
                                <a href="#contact">
                                    Get Started <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>

                            <p className="text-[10px] text-foreground/30 text-center mt-3">
                                * Actual price varies by requirements
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
