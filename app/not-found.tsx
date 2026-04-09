'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="space-y-4"
        >
          <h1 className="text-[12rem] font-black leading-none text-primary/5 select-none italic-serif">404</h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="space-y-2">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-primary">Lost in the Stack</h2>
                <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest">The requested page does not exist.</p>
             </div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 font-black uppercase tracking-widest text-[10px]" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft size={14} /> Go Back
            </Link>
          </Button>
          <Button className="w-full sm:w-auto rounded-full px-8 font-black uppercase tracking-widest text-[10px]" asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home size={14} /> Back to Studio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
