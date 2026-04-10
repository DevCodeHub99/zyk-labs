
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import { Button } from '@/components/ui/button'
import { Mail, Calendar, Shield, ArrowRight, Video, Clock, Zap } from 'lucide-react'
import StudioPage from '@/components/layout/StudioPage'
import ContactForm from '@/components/features/landing/ContactForm'
import { Metadata } from 'next'
import BookingInitializer from './BookingInitializer'

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.companyName}`,
  description: 'Book a discovery session or send a technical brief. Direct engineer access for high-velocity startups.',
}

const BookingSection = () => (
  <StudioCard className="border-2 border-accent/20 p-6 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem]" innerClassName="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
    <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.03] pointer-events-none overflow-hidden">
      <Calendar className="w-64 h-64 md:w-96 md:h-96 text-primary" />
    </div>

    <div className="space-y-6 md:space-y-8 relative z-10 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 md:gap-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-accent flex items-center justify-center text-white shadow-xl shadow-accent/20">
          <Video className="w-7 h-7 md:w-10 md:h-10" />
        </div>
        <div>
          <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-1">Step 01: Connect</div>
          <h3 className="text-2xl md:text-4xl font-black text-primary tracking-tight italic-serif">Discovery & Audit</h3>
        </div>
      </div>
      
      <p className="text-base md:text-lg text-foreground/70 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
        Schedule a 30-minute technical roadmap session. 
        <span className="block mt-2 md:mt-4 text-primary font-bold italic-serif">Engineering-led discovery. No sales fluff.</span>
      </p>

      <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-foreground/40">
        <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-border/50">
          <Clock className="w-3.5 h-3.5 text-accent" /> 30 MIN SESSION
        </div>
        <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-border/50">
          <Zap className="w-3.5 h-3.5 text-accent" /> ROBUST SCOPING
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 mt-4 lg:mt-0 relative z-10">
      <div className="w-full p-6 md:p-10 bg-secondary/10 backdrop-blur-sm rounded-[2rem] md:rounded-[3rem] border border-border/50 text-center shadow-inner">
        <Button
          size="lg"
          data-cal-namespace="30min"
          data-cal-link={`${process.env.NEXT_PUBLIC_CAL_LINK || "zyklabs/30min"}`}
          data-cal-config='{"layout":"month_view"}'
          className="w-full h-16 md:h-20 rounded-full bg-accent hover:opacity-90 text-white font-black uppercase tracking-[0.2em] text-xs md:text-sm shadow-2xl shadow-accent/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-4 group"
        >
          Book Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="mt-4 md:mt-6 text-[9px] md:text-[10px] font-bold text-foreground/30 flex items-center justify-center gap-2 uppercase tracking-widest">
          <Shield className="w-3.5 h-3.5" /> SECURE TECHNICAL HANDSHAKE
        </p>
      </div>
    </div>
  </StudioCard>
)

export default function ContactPage() {
  const { contact } = siteConfig

  return (
    <StudioPage decorColor1="bg-accent/[0.04]">
      <BookingInitializer />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <SectionHeader 
          badge="Launch Center"
          title={<>Let's Engineering Your <span className="text-accent italic-serif">Success.</span></>}
          description="Ready to ship? Book a high-velocity discovery session or send over a technical project brief below."
        />

        <div className="flex flex-col space-y-24 md:space-y-40 mt-12 md:mt-24">
          
          <BookingSection />

          <div id="brief" className="max-w-4xl mx-auto w-full space-y-12">
            <div className="text-center">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent mx-auto mb-10" />
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">Step 02: Details</div>
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight italic-serif">Send A Brief</h2>
              <p className="text-foreground/50 text-sm md:text-base font-medium mt-4">For complex projects requiring deeper upfront scoping.</p>
            </div>

            <StudioCard className="p-8 md:p-12 lg:p-16 rounded-[3rem] border-accent/10 shadow-2xl" showGlow={false}>
              <ContactForm />
            </StudioCard>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 py-12 border-t border-border/40">
            <div className="flex items-center gap-3"><Mail size={16} className="text-accent"/> Inquiries: {contact.email.value}</div>
            <div className="flex items-center gap-3"><Shield size={16} className="text-accent"/> Professional Studio Protocol</div>
            <div className="flex items-center gap-3"><Zap size={16} className="text-accent"/> India & Global Operations</div>
          </div>
        </div>
      </div>
    </StudioPage>
  )
}
