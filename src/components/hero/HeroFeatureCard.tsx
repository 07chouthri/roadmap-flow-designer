
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface HeroFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const HeroFeatureCard = ({ icon, title, description, benefits }: HeroFeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Initial entrance animation
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Trigger entrance animation with a small delay
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    
    return () => {
      clearTimeout(loadTimer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  // Define lighter color gradients based on title to match the website's color palette
  const getGradient = () => {
    if (title.includes("Cloud")) {
      return "from-blue-300 to-cyan-200"; // Light blue gradient
    } else if (title.includes("Container")) {
      return "from-pink-300 to-purple-200"; // Light pink to purple gradient
    } else if (title.includes("FinOps")) {
      return "from-emerald-300 to-teal-200"; // Light emerald to teal gradient
    } else {
      return "from-indigo-300 to-violet-200"; // Light indigo to violet gradient
    }
  };
  
  return (
    <div className={cn(
      "p-8 relative overflow-hidden transition-all duration-300",
      isLoaded ? "opacity-100" : "opacity-0"
    )}>
      <div className={cn(
        "flex flex-col items-center text-center mb-6 relative z-10 transition-all duration-500",
        isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
      )}>
        <div className="mb-6 bg-gradient-to-br from-white/20 to-white/10 rounded-full p-5 tech-icon-glow transform hover:scale-110 transition-all duration-300 group">
          <div className="relative">
            {icon}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/30 to-pink-200/30 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <h3 className={cn(
          "text-2xl font-bold text-white mb-3 relative transition-all duration-500 ease-out",
          isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
        )} style={{ transitionDelay: "150ms" }}>
          {title}
        </h3>
        <p className={cn(
          "text-white/80 mb-6 transition-all duration-500 ease-out",
          isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
        )} style={{ transitionDelay: "250ms" }}>
          {description}
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-3 w-full relative z-10">
        {benefits.map((benefit, i) => (
          <div 
            key={i} 
            className={cn(
              `bg-gradient-to-br ${getGradient()} rounded-lg p-3 flex flex-col items-center justify-center transform transition-all duration-500 ease-out shadow-lg`,
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "hover:translate-y-[-5px] hover:shadow-xl"
            )}
            style={{ transitionDelay: `${300 + i * 100}ms` }}
          >
            <span className="text-xs text-gray-700 font-medium">{benefit}</span>
          </div>
        ))}
      </div>

      {/* Enhanced background decorative elements with lighter colors */}
      <div className={cn(
        "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-200/20 to-transparent rounded-full blur-2xl transition-all duration-1000",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      )}></div>
      <div className={cn(
        "absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full blur-2xl transition-all duration-1000",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      )}></div>
    </div>
  );
};

export default HeroFeatureCard;
