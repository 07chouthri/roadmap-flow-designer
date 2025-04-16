import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import {
  Check,
  Cloud,
  Server,
  BarChart3,
  Settings,
  ShieldCheck,
  SlidersHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EnhancedCloudRoadmap = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(roadmapRef, { once: true, threshold: 0.2 });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const roadmapSteps = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Migration & Consulting",
      subHeading: "Strategic cloud advisory and seamless migration planning.",
      description: "We evaluate your existing IT infrastructure, define a cloud adoption roadmap, and guide you through the entire journey—from readiness assessment to actual migration using cloud-native best practices.",
      detail: "We evaluate your existing IT infrastructure, define a cloud adoption roadmap, and guide you through the entire journey—from readiness assessment to actual migration using cloud-native best practices.",
      bullets: [
        "Infrastructure & app assessment",
        "Cloud readiness analysis",
        "Migration strategy design",
        "Cloud provider selection",
        "Consulting for hybrid/multi-cloud"
      ],
      delay: 100
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Cloud Managed Services",
      subHeading: "Ongoing support and optimization for your cloud workloads.",
      description: "We provide continuous management of cloud infrastructure, ensuring high availability, security, and cost-efficiency. Our team monitors, maintains, and optimizes your workloads 24/7.",
      detail: "We provide continuous management of cloud infrastructure, ensuring high availability, security, and cost-efficiency. Our team monitors, maintains, and optimizes your workloads 24/7.",
      bullets: [
        "24/7 monitoring & alerting",
        "Patch management & automation",
        "Resource scaling & backups",
        "Cost & performance reports",
        "DevOps pipeline support"
      ],
      delay: 300
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Cloud Cost Optimization (FinOps)",
      subHeading: "Maximize ROI with real-time cloud cost control and governance.",
      description: "We use FinOps principles to implement cost visibility, usage tracking, and right-sizing strategies—empowering teams to balance cost and performance effectively.",
      detail: "We use FinOps principles to implement cost visibility, usage tracking, and right-sizing strategies—empowering teams to balance cost and performance effectively.",
      bullets: [
        "Cloud cost analysis & reporting",
        "Budget alerts & forecasting",
        "Rightsizing & autoscaling",
        "Idle resource clean-up",
        "Cross-team accountability"
      ],
      delay: 500
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "DevOps Automation",
      subHeading: "Automate infrastructure and CI/CD workflows for speed and scale.",
      description: "We implement end-to-end DevOps pipelines, automating build, test, deployment, and monitoring. Our approach speeds up delivery cycles and enhances system reliability.",
      detail: "We implement end-to-end DevOps pipelines, automating build, test, deployment, and monitoring. Our approach speeds up delivery cycles and enhances system reliability.",
      bullets: [
        "CI/CD pipeline creation",
        "Infrastructure as Code (IaC)",
        "Auto-scaling & self-healing systems",
        "Monitoring & logging automation",
        "Containerization & orchestration (Docker/K8s)"
      ],
      delay: 700
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Security & Compliances",
      subHeading: "Build a secure, compliant, and resilient cloud foundation.",
      description: "We secure your cloud infrastructure with industry best practices and compliance frameworks (e.g., ISO, SOC2, HIPAA). From identity management to vulnerability patching—we’ve got you covered.",
      detail: "We secure your cloud infrastructure with industry best practices and compliance frameworks (e.g., ISO, SOC2, HIPAA). From identity management to vulnerability patching—we’ve got you covered.",
      bullets: [
        "IAM & role-based access",
        "Data encryption & backup",
        "Vulnerability scanning",
        "Compliance audits (SOC2, ISO)",
        "Incident response planning"
      ],
      delay: 900
    },
    {
      icon: <SlidersHorizontal className="h-6 w-6" />,
      title: "Cloud Management Services",
      subHeading: "Comprehensive operational management across your cloud environments.",
      description: "Our Cloud Management Services provide centralized control, automation, and governance of your entire cloud infrastructure. From performance monitoring to cost controls and policy automation, we ensure your cloud operations remain efficient, secure, and scalable.",
      detail: "Our Cloud Management Services provide centralized control, automation, and governance of your entire cloud infrastructure. From performance monitoring to cost controls and policy automation, we ensure your cloud operations remain efficient, secure, and scalable.",
      bullets: [
        "Multi-cloud management & dashboards",
        "Performance monitoring & alerts",
        "Backup scheduling & recovery workflows",
        "Automation of provisioning & scaling",
        "Policy-based governance & access control",
        "Cost tracking, budgeting & anomaly detection",
        "Integrated DevOps & SecOps processes"
      ],
      delay: 1100
    }
  ];

  return (
    <section 
      ref={roadmapRef} 
      className="py-40 rounded-[20px] bg-gradient-to-b from-hads-dark to-hads-purple/90 overflow-hidden relative"
    >
      <div className="container max-w-8xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-4xl md:text-5xl text-white font-bold mb-4 transition-all duration-700 text-gradient-animate animate-background-pan",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="text-white"> Cloud Transformation</span>
            <span className="text-hads-pink"> Roadmap</span>
          </h2>
          <p className={cn(
            "text-lg text-white/80 max-w-2xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )} style={{ transitionDelay: "200ms" }}>
            A 360° cloud strategy that covers everything from migration to optimization and beyond.
          </p>
        </div>

        <div className="relative">
          <div className={cn(
            "absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-hads-teal to-hads-pink transform -translate-x-1/2 hidden md:block",
            isInView ? "animate-line-grow" : ""
          )}></div>
          
          <div className="space-y-20 md:space-y-0 relative z-10">
            {roadmapSteps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col md:flex-row items-center justify-center transition-all duration-1000 transform",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
                style={{ transitionDelay: `${step.delay}ms` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={cn(
                  "w-full md:w-5/12 mb-8 md:mb-0",
                  index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                )}>
                  <div className={cn(
                    "bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 transition-all duration-500",
                    hoveredStep === index ? "transform scale-105 shadow-glow border-hads-teal/50" : "hover:shadow-glow hover:border-hads-teal/50",
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  )}>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                      <div className={cn(
                        "bg-hads-teal/20 p-2 rounded-full transition-all duration-300",
                        hoveredStep === index ? "bg-hads-teal/40 animate-pulse-ring" : ""
                      )}>
                        {step.icon}
                      </div>
                    </h3>
                    <p className="text-white/80">{step.subHeading}</p>
                    <p className="text-white/80">{step.description}</p>

                    <div className={cn(
                      "mt-4 text-white/70 overflow-hidden transition-all duration-300",
                      hoveredStep === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <p>{step.detail}</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className={cn(
                    "w-12 h-12 rounded-full bg-gradient-to-r from-hads-teal to-hads-pink flex items-center justify-center z-10",
                    hoveredStep === index ? "animate-pulse-ring shadow-glow" : "animate-pulse-slow"
                  )}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  {index < roadmapSteps.length - 1 && (
                    <div className={cn(
                      "absolute h-20 w-1 bg-gradient-to-b from-hads-teal to-hads-pink -bottom-16 md:hidden",
                      isInView ? "animate-line-grow" : ""
                    )}></div>
                  )}
                </div>

                <div className={cn(
                  "w-full md:w-5/12 transition-all duration-300",
                  hoveredStep === index ? "md:opacity-100" : "md:opacity-50 md:hover:opacity-100",
                  index % 2 === 0 ? "md:text-left md:pl-16" : "md:text-right md:pr-16",
                )}>
                  <div className="hidden md:block space-y-2">
                    {step.bullets.map((item, i) => (
                      <div key={i} className={cn(
                        "flex items-center gap-2 transition-all duration-300 transform",
                        hoveredStep === index ? `translate-x-2 delay-${i * 100}` : ""
                      )}>
                        <Check size={16} className="text-green-400" />
                        <span className="text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCloudRoadmap;
