
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,30,99,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(58,27,109,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hads-pink via-white to-hads-purple mb-6">
            Our Success Story
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A journey through our milestones in providing top-tier cloud solutions, from cloud migration to cutting-edge cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 30 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Year badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-hads-purple to-hads-pink text-white flex items-center justify-center text-xl font-bold transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                  {step.year}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-hads-pink transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {step.desc}
                </p>

                {step.logo && step.logo.length > 0 && (
                  <div className="flex gap-4 mt-6">
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

                {/* Hover effect line */}
                <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-hads-purple via-hads-pink to-hads-purple opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-hads-purple/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-hads-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    </div>
  );
};

export default SuccessStory;
