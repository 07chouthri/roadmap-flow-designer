
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface HeroContentProps {
  isVisible: boolean;
}

/**
 * HeroContent Component
 * ---------------------
 * Displays the main hero section content for the Cloud Migration & Digital Transformation page.
 * Features animated text, a call-to-action button, and a professional visual layout.
 *
 * Props:
 * - isVisible: boolean — controls visibility and animation entry of the content block.
 */
const HeroContent = ({ isVisible }: HeroContentProps) => {
  const navigate = useNavigate();

  // Navigate to the contact page
  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div 
      className={cn(
        "space-y-8 transition-all duration-1000 ease-out transform lg:w-1/2 z-20", 
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      {/* Tagline */}
      <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <span className="inline-block py-1 px-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white">
          Cloud Migration & Digital Transformation
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
        <span className="block animate-fade-up" style={{ animationDelay: '0.5s' }}>
          Accelerate your
        </span>
        <span className="animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent relative">
            <span className="typing-animation no-cursor">cloud journey</span>
            <span className="absolute -top-4 right-0 text-xs text-cyan-400 font-semibold animate-bounce-subtle">
              Experience the future
            </span>
          </span>
        </span>
        <span className="block animate-fade-up" style={{ animationDelay: '0.9s' }}>
          with expertise
        </span>
      </h1>

      {/* Description */}
      <p 
        className="text-lg text-gray-300 max-w-lg animate-fade-up font-sans" 
        style={{ animationDelay: '1.1s' }}
      >
        We combine cutting-edge cloud technologies with deep industry knowledge to help businesses
        seamlessly migrate, modernize, and scale their operations. Our team ensures minimal disruption,
        optimal performance, and future-ready cloud solutions tailored to your unique needs.
      </p>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button 
          onClick={handleGetStarted}
          size="hero"
          className="transition-all duration-300 ease-in-out animate-fade-up bg-gradient-to-r from-[#3a1b6d] to-[#e91e63] hover:shadow-lg hover:shadow-pink-500/20 hover:translate-y-[-2px]" 
          style={{ animationDelay: '1.3s' }}
        >
          Get Started
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
