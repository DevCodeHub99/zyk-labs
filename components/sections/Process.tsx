'use client'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start with a detailed conversation to understand your vision, goals, and constraints. No surprises, no assumptions.',
      timeframe: '1-2 weeks',
    },
    {
      number: '02',
      title: 'Requirements & Architecture',
      description: 'Technical specification and architecture design. We outline the full scope, timeline, and technical approach.',
      timeframe: '1-2 weeks',
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      description: 'Visual design and interactive prototypes. You see exactly how your application will look and feel before development.',
      timeframe: '2-3 weeks',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Clean, production-ready code with regular updates and reviews. Incremental delivery so you see progress throughout.',
      timeframe: '4-12 weeks',
    },
    {
      number: '05',
      title: 'Testing & QA',
      description: 'Comprehensive testing across all features, browsers, and devices. Security audits and performance optimization.',
      timeframe: '1-2 weeks',
    },
    {
      number: '06',
      title: 'Deployment & Launch',
      description: 'Seamless deployment to production with monitoring setup, backups, and support. Your app goes live with confidence.',
      timeframe: '1 week',
    },
    {
      number: '07',
      title: 'Ongoing Support',
      description: 'We stick around. Monitoring, updates, feature requests, and technical support to keep your app running smoothly.',
      timeframe: 'Ongoing',
    },
  ]

  return (
    <section id="process" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance">Our Process</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Structured. Professional. Transparent. Here's how we work.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-8">
              {/* Step Number */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-xl">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-24 bg-gradient-to-b from-accent/50 to-accent/0 mt-4" />
                )}
              </div>

              {/* Step Content */}
              <div className="pb-8 pt-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                  <span className="text-sm font-semibold text-accent">{step.timeframe}</span>
                </div>
                <p className="text-foreground/70 leading-relaxed max-w-2xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card border border-border rounded-xl">
          <h3 className="text-xl font-bold text-primary mb-4">Why This Process Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-primary mb-2">Clear Communication</h4>
              <p className="text-sm text-foreground/70">
                Regular updates and reviews keep everyone aligned. No surprises at the end.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Quality Assurance</h4>
              <p className="text-sm text-foreground/70">
                Every step is tested and verified. We deliver production-ready code, not prototypes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Long-Term Support</h4>
              <p className="text-sm text-foreground/70">
                We don't disappear after launch. We monitor, maintain, and support your app long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
