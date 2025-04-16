
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImage = ({ src, alt }: HeroImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate image loading with a slight delay for visual effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Set visible after a delay for animation
    const visibleTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(visibleTimer);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Loading placeholder */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 animate-pulse",
          isLoaded ? "opacity-0" : "opacity-100",
          "transition-opacity duration-1000"
        )} 
      />
      
      {/* Actual image */}
      <img 
        src={src} 
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-1000 ease-in-out",
          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm",
          isVisible ? "transform-none" : "transform scale-105"
        )}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70" />
    </div>
  );
};

export default HeroImage;
