'use client'

import { Card } from '@/components/ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Team() {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Full Stack Engineer',
      bio: 'Full stack engineer with 10+ years building scalable web applications. Expert in React, Node.js, and system design.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'alex@techbuild.dev',
      },
    },
    {
      name: 'Jordan Lee',
      role: 'Lead Designer & UI Engineer',
      bio: 'Design-focused engineer passionate about building beautiful, accessible interfaces. Specialized in design systems and components.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'jordan@techbuild.dev',
      },
    },
  ]

  return (
    <section id="team" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-balance">Meet the Team</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Small, focused, and expert. Your dedicated team of passionate developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {team.map((member) => (
            <Card key={member.name} className="border-border bg-card overflow-hidden hover:border-accent/30 transition-colors">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-secondary flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/30 mx-auto mb-4" />
                  <p className="text-sm text-foreground/50 font-mono">{member.name}</p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-accent mb-4">{member.role}</p>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3 border-t border-border pt-6">
                  <a
                    href={member.social.github}
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground/60 hover:text-accent"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground/60 hover:text-accent"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground/60 hover:text-accent"
                    title="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <div className="max-w-3xl mx-auto p-8 bg-card border border-border rounded-xl">
          <h3 className="text-2xl font-bold text-primary mb-4">About TechBuild</h3>
          <div className="space-y-4 text-foreground/70">
            <p>
              TechBuild was founded on the principle that software development doesn't have to be complicated. Small, focused teams
              deliver better results than large organizations with layers of bureaucracy.
            </p>
            <p>
              We started as frustrated consultants at large agencies, tired of watching great ideas get diluted by process and
              politics. So we built TechBuild: a small, expert team focused on delivering exceptional results.
            </p>
            <p>
              Today, we work with startups and established businesses across industries. Our clients appreciate our straight-forward
              approach, technical expertise, and genuine commitment to their success.
            </p>
            <p>
              When we're not building web applications, you'll find us contributing to open source, attending tech conferences, or
              mentoring the next generation of engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
