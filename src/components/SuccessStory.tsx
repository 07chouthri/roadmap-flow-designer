import React, { useEffect, useState } from "react";
import SuccessStoryHeader from "./success-story/SuccessStoryHeader";
import SuccessStoryCard from "./success-story/SuccessStoryCard";
import SuccessStoryBackground from "./success-story/SuccessStoryBackground";

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
      <SuccessStoryBackground />
      
      <div className="relative container mx-auto px-4 z-10">
        <SuccessStoryHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <SuccessStoryCard
              key={i}
              step={step}
              index={i}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
