
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-blue-500/20", // Changed from hads-teal/pink to blue/purple
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-white/20 bg-background/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/40 hover:shadow-glow",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cloud: "relative bg-gradient-to-r from-hads-purple to-hads-pink text-white shadow-md hover:shadow-glow hover:scale-105 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-hads-teal before:to-hads-pink before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:-z-10 before:blur-xl overflow-hidden",
        glow: "relative bg-white text-hads-purple hover:text-white hover:bg-transparent shadow-lg group overflow-hidden z-10 before:absolute before:inset-0 before:bg-gradient-to-r before:from-hads-teal before:to-hads-pink before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 before:z-[-1] hover:shadow-glow",
        professional: "relative overflow-hidden text-white bg-hads-purple border border-hads-teal/30 hover:border-hads-teal/80 shadow-md transition-all duration-500 hover:shadow-lg hover:shadow-hads-teal/20 after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-r after:from-hads-teal/0 after:via-hads-teal/30 after:to-hads-teal/0 after:translate-x-[-100%] after:transition-transform after:duration-1000 hover:after:translate-x-[100%] group",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:shadow-glow",
        shimmer: "relative overflow-hidden bg-gradient-to-r from-hads-purple to-hads-teal text-white before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000 shadow-md hover:shadow-hads-teal/20 hover:scale-105 transition-all duration-300",
        pastel: "bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200 transition-all duration-300 hover:shadow-sm", // Adding the missing pastel variant
      },
      size: {
        default: "h-10 px-6 py-6 rounded-lg",
        sm: "h-9 rounded-md px-5 py-4",
        lg: "h-12 rounded-lg px-8 py-7 text-lg font-semibold",
        icon: "h-10 w-10 rounded-full",
        hero: "h-14 rounded-lg px-10 py-8 text-md font-bold",
        pro: "h-12 px-8 py-7 text-md rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
