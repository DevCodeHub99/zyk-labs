'use client'

import { Card } from '@/components/ui/card'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Team() {
  const team = [
    {
      name: 'Alex Rivera',
      role: 'Founder / Lead Engineering',
      bio: 'Ex-Google engineer with 10+ years in distributed systems. Passionate about building scalable architectures and mentoring developers.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      },
      initials: 'AR',
      bg: 'bg-blue-500'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Design',
      bio: 'Award-winning product designer focused on creating intuitive, human-centered digital experiences. Bridging the gap between design and code.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      },
      initials: 'SC',
      bg: 'bg-purple-500'
    },
    {
      name: 'Marcus Johnson',
      role: 'Senior Full Stack Dev',
      bio: 'Expert in React ecosystem and cloud infrastructure. Loves solving complex performance bottlenecks for high-traffic applications.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      },
      initials: 'MJ',
      bg: 'bg-emerald-500'
    },
  ]

  return (
    <section id="team" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            Our People
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">Meet the Experts</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            A small, focused team of senior engineers and designers dedicated to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {team.map((member) => (
            <Card key={member.name} className="group border-border bg-card overflow-hidden hover:border-accent/30 transition-all hover:shadow-xl hover:-translate-y-1">
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
              <h3 className="text-2xl md:text-3xl font-bold">Why We Started TechBuild</h3>
              <div className="space-y-4 text-primary-foreground/80 leading-relaxed">
                <p>
                  After years of working at large agencies, we realized that the best software is built by small, autonomous teams of experts—not by massive departments bogged down by bureaucracy.
                </p>
                <p>
                  We founded TechBuild Labs to provide direct access to senior talent without the overhead. We believe in transparency, technical excellence, and building products that solve real problems.
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0">
              <div className="stats grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-accent">50+</div>
                  <div className="text-sm text-primary-foreground/60 mt-1">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">100%</div>
                  <div className="text-sm text-primary-foreground/60 mt-1">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
