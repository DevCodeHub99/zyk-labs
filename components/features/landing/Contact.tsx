'use client'

import { siteConfig } from '@/config/site'
import React, { useEffect } from "react"
import { Button } from '@/components/ui/button'
import { Mail, Calendar, Shield, ArrowRight, Video, Clock, Zap } from 'lucide-react'
import { getCalApi } from "@calcom/embed-react";
import SectionHeader from '@/components/shared/SectionHeader'
import StudioCard from '@/components/shared/StudioCard'
import ContactForm from './ContactForm'

const BookingCard = () => (
  <StudioCard className="border-2 border-accent/20 p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem]" innerClassName="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
    <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.03] pointer-events-none">
      <Calendar className="w-64 h-64 md:w-96 md:h-96 text-primary" />
    </div>

    <div className="space-y-6 md:space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-accent flex items-center justify-center text-white shadow-xl shadow-accent/20">
          <Video className="w-6 h-6 md:w-10 md:h-10" />
        </div>
        <div>
          <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-1">Direct Technical Connect</div>
          <h3 className="text-2xl md:text-4xl font-black text-primary tracking-tight">Discovery & Audit</h3>
        </div>
      </div>
      
      <p className="text-base md:text-lg text-foreground/70 font-medium leading-relaxed max-w-md">
        Schedule a 30-minute technical roadmap session. 
        <span className="block mt-2 md:mt-4 text-primary font-bold italic-serif">Engineering-led discovery. No sales fluff.</span>
      </p>

      <div className="flex flex-wrap gap-3 md:gap-4 text-[10px] font-black uppercase tracking-widest text-foreground/40">
        <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 md:px-4 md:py-2 rounded-xl">
          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" /> 30 MIN
        </div>
        <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 md:px-4 md:py-2 rounded-xl">
          <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" /> ROBUST SCOPING
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 mt-4 lg:mt-0">
      <div className="w-full p-6 md:p-10 bg-secondary/20 rounded-[2rem] md:rounded-[3rem] border border-border/50 text-center">
        <Button
          size="lg"
          data-cal-namespace="30min"
          data-cal-link={`${process.env.NEXT_PUBLIC_CAL_LINK || "zyklabs/30min"}`}
          data-cal-config='{"layout":"month_view"}'
          className="w-full h-14 md:h-20 rounded-full bg-accent hover:opacity-90 text-white font-black uppercase tracking-[0.2em] text-xs md:text-sm shadow-2xl shadow-accent/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-4 group"
        >
          Book Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="mt-4 md:mt-6 text-[9px] md:text-[10px] font-bold text-foreground/40 flex items-center justify-center gap-2">
          <Shield className="w-3 h-3 md:w-3.5 md:h-3.5" /> Direct engineer connection
        </p>
      </div>
    </div>
  </StudioCard>
)

export default function Contact() {
  const { contact } = siteConfig

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return (
    <section id="contact" className="py-20 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          badge={contact.badge}
          title={<>Start Your <span className="text-accent italic-serif">Build.</span></>}
          description="High-velocity shipping starts here. Book a discovery session or drop us a technical brief."
        />

        <div className="flex flex-col space-y-24">
          <BookingCard />

          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center mb-12">
              <div className="w-px h-12 bg-border mx-auto mb-12" />
              <h3 className="text-2xl font-black text-primary uppercase tracking-widest mb-4 italic-serif">Send a Brief</h3>
            </div>

            <StudioCard className="p-8 md:p-12 rounded-[3rem]" showGlow={false}>
              <ContactForm />
            </StudioCard>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">
            <div className="flex items-center gap-2"><Mail size={14} className="text-accent"/> Inquiries: {contact.email.value}</div>
            <div className="flex items-center gap-2"><Shield size={14} className="text-accent"/> Professional Studio Protocol</div>
          </div>
        </div>
      </div>
    </section>
  )
}
