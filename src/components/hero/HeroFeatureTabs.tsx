
import React, { useState, useEffect } from 'react';
import { CloudCog, Database, BarChart } from 'lucide-react';
import HeroFeatureTab from './HeroFeatureTab';
import HeroFeatureCard from './HeroFeatureCard';
import { cn } from '@/lib/utils';

const HeroFeatureTabs = () => {
  const [activeFeature, setActiveFeature] = useState(1); // Set containerization as default active tab
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevActiveFeature, setPrevActiveFeature] = useState(1);
  
  const handleTabChange = (index: number) => {
    if (activeFeature === index) return;
    
    setPrevActiveFeature(activeFeature);
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFeature(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50); // Quick transition to show the new content
    }, 300); // Match the exit animation duration
  };
  
  useEffect(() => {
    // Rotate through features with smoother transitions
    const featureInterval = setInterval(() => {
      setPrevActiveFeature(activeFeature);
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % 3);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 5000);
    
    return () => {
      clearInterval(featureInterval);
    };
  }, [activeFeature]);
  
  // Create floating particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 5 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 10 + 10;
      
      particles.push(
        <div 
          key={i}
          className="particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    }
    return particles;
  };
  
  const serviceFeatures = [
    { 
      icon: <CloudCog className="w-12 h-12 text-cyan-500" />, 
      title: "Cloud Solutions",
      description: "Scalable and secure infrastructure for your business",
      benefits: ["High availability", "Disaster recovery", "Global scale"]
    },
    { 
      icon: <Database className="w-12 h-12 text-pink-500" />, 
      title: "Containerization",
      description: "Modern deployment strategies with Docker & Kubernetes",
      benefits: ["Consistent environments", "Easy scaling", "Faster deployments"]
    },
    { 
      icon: <BarChart className="w-12 h-12 text-blue-400" />, 
      title: "FinOps",
      description: "Optimize your cloud costs for maximum efficiency",
      benefits: ["Reduced spending", "Resource optimization", "Budget forecasting"]
    }
  ];

  return (
    <div className="relative animated-purple-bg p-2 rounded-2xl">
      {renderParticles()}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden relative z-10">
        <div className="flex border-b border-white/10">
          {serviceFeatures.map((feature, index) => (
            <HeroFeatureTab
              key={index}
              title={feature.title}
              isActive={activeFeature === index}
              onClick={() => handleTabChange(index)}
            />
          ))}
        </div>
        <div className="relative">
          {/* Exit animation for the previous content */}
          {isTransitioning && (
            <div className="absolute inset-0 z-10 transition-all duration-300 ease-in-out opacity-0 transform translate-y-4">
              <HeroFeatureCard
                icon={serviceFeatures[prevActiveFeature].icon}
                title={serviceFeatures[prevActiveFeature].title}
                description={serviceFeatures[prevActiveFeature].description}
                benefits={serviceFeatures[prevActiveFeature].benefits}
              />
            </div>
          )}
          
          {/* Current content with transition */}
          <div className={cn(
            "transition-all duration-300 ease-in-out",
            isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform-none"
          )}>
            <HeroFeatureCard
              icon={serviceFeatures[activeFeature].icon}
              title={serviceFeatures[activeFeature].title}
              description={serviceFeatures[activeFeature].description}
              benefits={serviceFeatures[activeFeature].benefits}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeatureTabs;
