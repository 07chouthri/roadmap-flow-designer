
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroFeatureTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const HeroFeatureTab = ({ title, isActive, onClick }: HeroFeatureTabProps) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex-1 py-4 text-center text-sm font-medium relative overflow-hidden",
        "transition-all duration-300 ease-in-out",
        isActive 
          ? "text-white" 
          : "text-white/50 hover:text-white/70"
      )}
    >
      {title}
      <div className={cn(
        "absolute bottom-0 left-0 w-full h-0.5 bg-[#e91e63] transform transition-transform duration-500 ease-out",
        isActive ? "scale-x-100" : "scale-x-0"
      )}></div>
      
      {/* Enhanced hover effect with smoother transition */}
      <div className={cn(
        "absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300",
        !isActive && "hover:opacity-100"
      )}></div>
      
      {/* Text scale effect on active */}
      <span className={cn(
        "inline-block transition-transform duration-300 ease-out",
        isActive && "scale-105"
      )}>
        {title}
      </span>
    </button>
  );
};

export default HeroFeatureTab;
