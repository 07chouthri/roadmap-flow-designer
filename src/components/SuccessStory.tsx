import React, { useEffect, useState } from "react";

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
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-hads-purple/5 to-hads-pink/5 animate-gradient-shift" />
      
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-hads-purple to-hads-pink animate-fade-in">
            Our Success Story
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up">
            A journey through our milestones in providing top-tier cloud solutions, from cloud migration to cutting-edge cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s ease-out ${i * 0.2}s`,
              }}
            >
              <div className="relative p-6 rounded-xl backdrop-blur-sm border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-hads-purple to-hads-pink text-white flex items-center justify-center text-xl font-bold transform transition-transform group-hover:scale-110">
                  {step.year}
                </div>

                <h3 className="text-xl font-semibold text-hads-purple mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>

                {step.logo && step.logo.length > 0 && (
                  <div className="flex gap-4 mt-4">
                    {step.logo.map((logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt="Technology Logo"
                        className="w-8 h-8 object-contain opacity-75 hover:opacity-100 transition-opacity"
                      />
                    ))}
                  </div>
                )}

                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-hads-purple to-hads-pink opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-hads-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-hads-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </div>
  );
};

export default SuccessStory;
