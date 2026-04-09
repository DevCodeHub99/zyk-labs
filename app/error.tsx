'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { RefreshCcw, AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-12">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative"
        >
          <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full" />
          <div className="relative z-10 flex flex-col items-center gap-6">
             <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-red-500">
                <AlertTriangle size={40} />
             </div>
             <div className="space-y-2">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-primary">System Exception</h2>
                <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest max-w-[280px] mx-auto leading-relaxed">
                   The engineering stack encountered an unexpected runtime error.
                </p>
             </div>
          </div>
        </motion.div>

        <div className="pt-4">
          <Button 
            onClick={() => reset()}
            className="rounded-full h-14 px-10 font-black uppercase tracking-widest text-[10px] gap-3 bg-primary text-white shadow-xl shadow-primary/20"
          >
            <RefreshCcw size={14} /> Attempt Recovery
          </Button>
          <p className="mt-6 text-[10px] font-bold text-foreground/20 uppercase tracking-[0.2em]">
            Error Digest: {error.digest || 'Internal Instance error'}
          </p>
        </div>
      </div>
    </div>
  )
}
