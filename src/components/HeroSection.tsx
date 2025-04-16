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
    <div
      className="relative mx-auto mt-6 rounded-[10px] overflow-hidden flex items-center justify-center"
      style={{
        width: "900px",
        // maxWidth: "1280px",
        height: "460px",
        // backgroundColor: "#e5e7eb",
      }}
    >
      {/* Background Slides */}
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
            style={{
              width: "100%",
              height: "100%",
              // objectFit: "cover",
              transition: "transform 1.5s ease-in-out",
              borderRadius: "10px",
            }}
          />

          {/* Overlay gradient */}
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full hover:scale-110 transition-transform duration-300"
        style={{ fontSize: "24px" }}
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full hover:scale-110 transition-transform duration-300"
        style={{ fontSize: "24px" }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSection;
