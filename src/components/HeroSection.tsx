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
    <div className="relative mx-auto mt-6 rounded-[10px] overflow-hidden flex items-center justify-center group"
      style={{
        width: "900px",
        height: "460px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-hads-purple/80 to-hads-pink/30 mix-blend-overlay z-10" />
      
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10 z-10" />

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "z-20 opacity-100 scale-100" : "z-10 opacity-0 scale-105"
          }`}
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full transition-transform duration-1000 ease-in-out rounded-[10px] group-hover:scale-110"
          />

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-xl font-semibold">{slide.title}</h3>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:bg-white/20"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:bg-white/20"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSection;
