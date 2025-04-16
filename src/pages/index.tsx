
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import EnhancedCloudRoadmap from '@/components/EnhancedCloudRoadmap';
import CloudTechCarousel from '@/components/CloudTechCarousel';
import ResourcesSection from '@/components/ResourcesSection';
import GlobalCoverageSection from '@/components/GlobalCoverageSection';
import IndustriesSection from '@/components/IndustriesSection';
import SuccessStory from '@/components/SuccessStory';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { useIsMobile } from '@/hooks/use-mobile';

const IndexPage = () => {
  const isMobile = useIsMobile();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update document title
    document.title = "HADS - Cloud Solutions & DevOps Services";
    
    // Handle hash links on initial page load
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo(0, 0); // First scroll to top
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 250);
      }
    }

    // Handle scroll to top button visibility and progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white" ref={scrollRef}>
      <Navbar />
      
      <main className="flex-grow pt-16 px-4 md:px-6 lg:px-8">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="services" className="mt-8 md:mt-16">
          <ServicesSection />
        </div>
        <div id="technologies" className="mt-8 md:mt-16">
          <CloudTechCarousel />
        </div>
        <div id="roadmap" className="mt-8 md:mt-16">
          <EnhancedCloudRoadmap />
        </div>
        {/* Countries section now comes before Industries */}
        <div id="global-coverage" className="mt-4 md:mt-8">
          <GlobalCoverageSection />
        </div>
        <div id="industries" className="mt-2 md:mt-4">
          <IndustriesSection />
        </div>
        <div id="resources" className="bg-white mt-8 md:mt-16">
          <ResourcesSection />
        </div>
        <div id="SuccessStory" className="bg-white mt-8 md:mt-16">
          <SuccessStory />
        </div>
        <div id="about" className="mt-8 md:mt-16">
          <AboutSection />
        </div>
        <div id="partners" className="mt-8 md:mt-16">
          <PartnersSection />
        </div>
        <div id="stats" className="mt-8 md:mt-16">
          <StatsSection />
        </div>
        <div id="testimonials" className="mt-8 md:mt-16 mb-8 md:mb-16">
          <TestimonialsSection />
        </div>
      </main>
      
      <Footer />

      {/* Enhanced Scroll to top button with progress indicator */}
      <button 
        onClick={scrollToTop} 
        className={cn(
          "fixed bottom-4 md:bottom-8 right-4 md:right-8 p-3 md:p-4 rounded-full bg-gradient-to-r from-hads-purple to-hads-pink text-white shadow-xl z-50 transition-all duration-300 transform hover:shadow-glow group",
          showScrollTop ? "opacity-100 translate-y-0 animate-bounce-subtle" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <div className="relative">
          <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 36 36">
            <circle 
              cx="18" 
              cy="18" 
              r="16" 
              fill="none" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2" 
            />
            <circle 
              cx="18" 
              cy="18" 
              r="16" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray={`${2 * Math.PI * 16 * scrollProgress / 100} ${2 * Math.PI * 16}`}
              strokeDashoffset="0" 
              strokeLinecap="round" 
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
          </svg>
          <ArrowUp size={isMobile ? 14 : 18} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-200" />
        </div>
      </button>
    </div>
  );
};

export default IndexPage;
