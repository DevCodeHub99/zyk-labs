import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl text-sm font-bold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-widest text-[10px] active:scale-[0.98]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        
        // Studio Semantic System - High Impact & Contrast
        'studio-primary': 'bg-primary text-primary-foreground border border-primary-foreground/10 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0 rounded-full',
        'studio-secondary': 'bg-secondary text-secondary-foreground border border-foreground/5 hover:bg-secondary/80 hover:-translate-y-0.5 active:translate-y-0 rounded-full',
        'studio-accent': 'bg-accent text-accent-foreground shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 active:translate-y-0 rounded-full',
        'studio-glass': 'bg-foreground/[0.03] border border-foreground/10 text-foreground backdrop-blur-md hover:bg-foreground/[0.08] hover:-translate-y-0.5 active:translate-y-0 rounded-full',
        'studio-outline': 'border-2 border-foreground/10 bg-transparent text-foreground hover:bg-foreground hover:text-background hover:border-foreground hover:-translate-y-0.5 active:translate-y-0 rounded-full',
      },
      size: {
        default: 'h-12 px-6 py-2',
        sm: 'h-9 px-3',
        lg: 'h-14 px-10 text-[11px]',
        xl: 'h-16 md:h-20 px-12 text-[12px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  showGlow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showGlow = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <div className={cn("relative inline-block w-full group/btn-container", className)}>
        {showGlow && (
           <div className={cn(
             "absolute inset-0 blur-2xl opacity-0 group-hover/btn-container:opacity-40 transition-opacity duration-500 rounded-full pointer-events-none",
             variant === 'studio-accent' ? 'bg-accent' : 'bg-primary'
           )} />
        )}
        <Comp
          className={cn(buttonVariants({ variant, size, className: "w-full" }))}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
