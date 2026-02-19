import { siteConfig } from '@/config/site'
import { Card } from '@/components/ui/card'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Team() {
  const { team } = siteConfig
  const { members, about } = team

  return (
    <section id="team" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            {team.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">{team.title}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            {team.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {members.map((member) => (
            <Card key={member.name} className="w-full max-w-sm group border-border bg-card overflow-hidden hover:border-accent/30 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="h-32 bg-secondary/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                  <div className={`w-24 h-24 rounded-full border-4 border-card ${member.bg} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {member.initials}
                  </div>
                </div>
              </div>

              <div className="pt-16 pb-8 px-8 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">{member.role}</p>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-4">
                  {Object.entries(member.social).map(([platform, link]) => {
                    const Icon = platform === 'github' ? Github : platform === 'linkedin' ? Linkedin : Twitter
                    return (
                      <a
                        key={platform}
                        href={link}
                        className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors text-foreground/60"
                      >
                        <Icon size={18} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Improved About Section */}
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 text-center md:text-left md:flex items-center gap-12">
            <div className="space-y-6 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold">{about.title}</h3>
              <div className="space-y-4 text-primary-foreground/80 leading-relaxed">
                {about.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0">
              <div className="stats grid grid-cols-2 gap-8 text-center">
                {about.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
