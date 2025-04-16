
import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

const StyledCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      "group relative overflow-hidden rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-hads-pink/20",
      className
    )}
    {...props}
  />
));
StyledCard.displayName = "StyledCard";

const StyledCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardHeader
    ref={ref}
    className={cn("relative z-10", className)}
    {...props}
  />
));
StyledCardHeader.displayName = "StyledCardHeader";

const StyledCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardContent
    ref={ref}
    className={cn("relative z-10", className)}
    {...props}
  />
));
StyledCardContent.displayName = "StyledCardContent";

const StyledCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardFooter
    ref={ref}
    className={cn(
      "relative z-10 flex items-center justify-between",
      className
    )}
    {...props}
  />
));
StyledCardFooter.displayName = "StyledCardFooter";

export { StyledCard, StyledCardHeader, StyledCardContent, StyledCardFooter };
