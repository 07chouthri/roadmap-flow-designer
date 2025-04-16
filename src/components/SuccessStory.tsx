import React, { useEffect, useState } from "react";
import CloudMigration from "../images/Success Story.jpg";

const SuccessStory = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      year: "2017",
      title: "Startup Launched",
      desc: "HADS was founded with a vision for smart cloud solutions.",
      logo: [],
    },
    {
      year: "2018",
      title: "Cloud Migration",
      desc: "Completed 50+ zero-downtime migrations to AWS, Azure & GCP.",
      logo: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      ],
    },
    {
      year: "2019",
      title: "Managed Services",
      desc: "Introduced 24/7 monitoring & auto-healing infrastructure.",
      logo: [],
    },
    {
      year: "2020",
      title: "FinOps",
      desc: "Saved clients 40%+ with intelligent AWS cost optimization.",
      logo: [],
    },
    {
      year: "2021",
      title: "DevOps",
      desc: "CI/CD pipelines, Infrastructure as Code, rollout automation.",
      logo: [],
    },
    {
      year: "2022",
      title: "Security",
      desc: "Enabled SOC2/ISO readiness, cloud firewalls, IAM audits.",
      logo: [],
    },
    {
      year: "2023",
      title: "Cybersecurity",
      desc: "Advanced WAF, GuardDuty, Zero Trust network architecture.",
      logo: [],
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        margin: "80px auto",
        width: "90%",
        maxWidth: "1200px",
        padding: "40px 20px",
        background: "linear-gradient(135deg, rgba(58, 27, 109, 0.1) 0%, rgba(233, 30, 99, 0.1) 100%)",
        borderRadius: "12px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Glass effect overlay */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-white/40 z-0"
      />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-hads-purple mb-6 relative inline-block">
            Our Success Story
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-hads-pink to-hads-purple transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through our milestones in providing top-tier cloud solutions, from cloud migration to cutting-edge cybersecurity.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s ease-out ${i * 0.3}s`,
              }}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-hads-purple to-hads-pink text-white flex items-center justify-center text-xl font-bold shadow-lg">
                {step.year}
              </div>
              <h3 className="text-xl font-semibold text-hads-purple mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
              {step.logo && step.logo.length > 0 && (
                <div className="flex gap-4 mt-4">
                  {step.logo.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt="Technology Logo"
                      className="w-8 h-8 object-contain"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
