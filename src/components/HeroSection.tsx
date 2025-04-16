
import React, { useEffect, useState } from "react";
import CloudMigration from "../images/homeimages/Cloud Migration and consulting.jpg";
import CloudManaged from "../images/homeimages/Cloud managed service.jpg";
import CloudCostOptimization from "../images/homeimages/Cloud cost optimization.jpg";
import DevOpsAutomation from "../images/homeimages/DevOps Automation.jpg";
import SecurityAndCompliances from "../images/homeimages/Security and Compliances.jpg";
import Ai from "../images/homeimages/Ai.jpg";
import Api from "../images/homeimages/Api.jpg";

const HeroSection = () => {
  const slides = [
    { image: CloudMigration, title: "Cloud Migration" },
    { image: CloudManaged, title: "Cloud Managed Service" },
    { image: CloudCostOptimization, title: "Cloud Cost Optimization (FinOps)" },
    { image: DevOpsAutomation, title: "DevOps Automation" },
    { image: SecurityAndCompliances, title: "Security & Compliances" },
    { image: Ai, title: "Ai" },
    { image: Api, title: "Api" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Enhanced overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-hads-purple/40 to-hads-pink/30" />
          
          {/* Animated pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10 animate-fade-in" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
              {slides[currentIndex].title}
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 bg-black/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
      >
        <span className="group-hover:scale-110 block transition-transform">
          &#10094;
        </span>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 bg-black/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
      >
        <span className="group-hover:scale-110 block transition-transform">
          &#10095;
        </span>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-8" 
                : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
