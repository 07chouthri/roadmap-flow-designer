import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { ArrowRight, Cloud, Server, Shield, Database, BarChart, GitBranch } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CloudMigrationPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update document title
    document.title = "Cloud Migration Strategy - HADS";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <StrategyOverview />
        <FocusAreasSection />
        <CloudPlatformsSection />
        <MigrationProcessSection />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <main className="flex-grow pt-5">
      <section>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            fontFamily: "'Poppins', 'Inter', sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2rem 4rem",
            boxSizing: "border-box",
          }}
        >
          {/* Left Side: Lottie Animation (Swapped) */}
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "500px",  // Explicit large width
                height: "500px", // Explicit large height
              }}
            >
              <DotLottieReact
                src="https://lottie.host/9466ca71-3f57-4f88-952f-0af31b129e29/7NJTKq7gHC.lottie"
                loop
                autoplay
                style={{
                  width: "100%",
                  height: "100%",
                }}
                aria-label="Cloud technology animation"
              />
            </div>
          </div>

          {/* Right Side: Text Content (Swapped) */}
          <div
            style={{
              flex: "1",
              paddingLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 2,
              color: "black",
              borderRadius: 12,
              textAlign: "left",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "1.5rem",
                fontWeight: 800,
                fontFamily: "'Poppins', sans-serif",
                color: "#000000",
              }}
            >
              <span style={{ color: "#000000" }}>Cloud </span>
              <span style={{ color: "#ff2d75" }}>Migration</span>
              <span className="mx-2" style={{ color: "#000000" }}>and </span><br />
              <span style={{ color: "#ff2d75" }}>consulting</span>
              <span style={{ color: "#000000" }}>...</span>
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: 500,
                lineHeight: 1.6,
                marginTop: "40px",
              }}
            >
              HADS - Cloud Solutions<br />
              Seamless Cloud Migration, Expert Consulting<br />
              We help you move to the cloud with zero disruption. Our experts assess,
              plan, and execute a migration strategy tailored to your business goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

const StrategyOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-6 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="text-gray-800">Strategic </span>
            <span className="text-hads-pink">Migration</span>
            <span className="text-gray-800"> to Cloud</span>
          </h2>
          <p className={cn(
            "text-lg text-gray-700 transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Cloud migration isn’t just about shifting infrastructure—it’s about aligning your technology with your business goals. At HADS, we take a business-first approach, delivering tailored AWS strategies backed by risk assessment, ROI analysis, and future-ready architecture. Our end-to-end framework ensures secure, scalable, and seamless migrations that drive long-term value and innovation.        </p>
        </div>
      </div>
    </section>
  );
};

const FocusAreasSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const focusAreas = [
    {
      title: "Strategic Planning & Assessment",
      description: "Evaluate existing infrastructure and define a clear migration roadmap aligned with your business goals.",
      icon: <Cloud className="h-8 w-8 text-hads-pink" />,
      delay: 0
    },
    {
      title: "Minimal Downtime Execution",
      description: "Ensure seamless, low-risk migration with minimal disruption to operations.",
      icon: <Server className="h-8 w-8 text-hads-pink" />,
      delay: 100
    },
    {
      title: "Modern Architecture Design",
      description: "Adopt scalable, resilient AWS-based architectures optimized for performance and growth.",
      icon: <Shield className="h-8 w-8 text-hads-pink" />,
      delay: 200
    },
    {
      title: "Modern Architecture Design",
      description: "Embed security best practices and compliance controls throughout the migration process.",
      icon: <Database className="h-8 w-8 text-hads-pink" />,
      delay: 300
    },
    {
      title: "Resource Optimization",
      description: "Right-size cloud resources and implement cost-control strategies to drive efficiency.",
      icon: <BarChart className="h-8 w-8 text-hads-pink" />,
      delay: 400
    },
    {
      title: "DevOps Enablement",
      description: "Establish CI/CD pipelines and infrastructure as code (IaC) for faster, more reliable deployments.",
      icon: <GitBranch className="h-8 w-8 text-hads-pink" />,
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-6 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="text-gray-800">Key </span>
            <span className="text-hads-pink">Focus</span>
            <span className="text-gray-800"> Areas</span>
          </h2>
          <p className={cn(
            "text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Our comprehensive approach targets six critical areas to ensure a successful cloud migration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-700 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${area.delay}ms` }}
            >
              <div className="rounded-full bg-hads-pink/10 h-16 w-16 flex items-center justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-hads-dark mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CloudPlatformsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const platforms = [
    {
      name: "AWS",
      description: "Preferred for its comprehensive suite of cloud services and scalability, offering 200+ fully featured services from data centers globally.",
      strengths: [
        "Industry-leading service portfolio",
        "Global and highly available infrastructure",
        "Mature ecosystem and marketplace",
        "Advanced security and compliance features"
      ],
      color: "#FF9900",
      delay: 0,
      icon: ""
    },
    {
      name: "Google Cloud",
      description: "An alternative for AI/ML-driven applications and cost-effective solutions, with strong data analytics and machine learning capabilities.",
      strengths: [
        "Strong in big data and analytics",
        "Advanced AI/ML capabilities",
        "Competitive pricing model",
        "Global network infrastructure"
      ],
      color: "#4285F4",
      delay: 200,
      icon: ""
    },
    {
      name: "Microsoft Azure",
      description: "Ideal for enterprises requiring deep integration with Microsoft services, providing seamless connectivity with existing Microsoft ecosystems.",
      strengths: [
        "Microsoft ecosystem integration",
        "Hybrid cloud capabilities",
        "Enterprise compliance features",
        "Comprehensive identity management"
      ],
      color: "#0078D4",
      delay: 400,
      icon: ""
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-20">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 transform",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ color: "#1F2937" }} // text-hads-dark
          >
            <span className="text-gray-800">Target </span>
            <span style={{ color: "#E91E63" }}>Cloud</span> {/* text-hads-pink */}
            <span className="text-gray-800"> Platforms</span>
          </h2>
          <p
            className={cn(
              "text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ color: "#4B5563" }}
          >
            We support migration to multiple cloud platforms, each offering unique
            advantages for different business needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl p-8 border transition-all duration-700 ease-in-out transform bg-white/80 backdrop-blur-md shadow-md",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                "hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-white"
              )}
              style={{
                transitionDelay: `${platform.delay}ms`,
                borderTop: `5px solid ${platform.color}`,
                borderColor: "#F3F4F6",
              }}
            >
              {/* Header Section */}
              <div className="flex items-center mb-4">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.icon || "🌐"} {/* Now safely using the icon property */}
                </div>
                <h3
                  className="text-xl font-bold ml-4"
                  style={{ color: platform.color }}
                >
                  {platform.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{platform.description}</p>

              {/* Key Strengths */}
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Strengths:</h4>
              <ul className="space-y-3">
                {platform.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mt-1 shadow"
                      style={{
                        backgroundColor: `${platform.color}20`,
                      }}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: platform.color }}
                      ></span>
                    </div>
                    <p className="ml-3 text-gray-700 leading-snug">{strength}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MigrationProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const steps = [
    {
      number: "01",
      title: "Assessment",
      description: "Evaluate current infrastructure, applications, and dependencies to identify migration candidates and challenges,Identify dependencies, risks, and cost implications.",
      delay: 0
    },
    {
      number: "02",
      title: "Planning",
      description: "Develop a detailed migration strategy with timelines, resource requirements, and risk mitigation plans.",
      delay: 100
    },
    {
      number: "03",
      title: "Design",
      description: "Choose the right AWS architecture based on scalability, performance, and resilience Integrate security, compliance, and automation best practices Design for high availability and disaster recovery.",
      delay: 200
    },
    {
      number: "04",
      title: "Migration",
      description: "Execute the migration plan with minimal disruption to business operations, following established best practices.",
      delay: 300
    },
    {
      number: "05",
      title: "Optimization",
      description: "Conduct rigorous post-migration testing for performance and functionality Fine-tune resources to ensure optimal cost, scalability, and efficiency Implement monitoring and alerting systems.",
      delay: 400
    },
    {
      number: "06",
      title: "Management",
      description: "Continuous performance monitoring and troubleshooting Security patching, updates, and compliance audits Ongoing infrastructure management and optimization.",
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-6 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="text-gray-800">Migration </span>
            <span className="text-hads-pink">Process</span>
          </h2>
          <p className={cn(
            "text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Our structured migration methodology ensures a smooth transition to the cloud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "bg-gradient-to-r from-hads-purple to-hads-pink rounded-xl p-8 border border-gray-100 shadow-sm transition-all duration-700 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              <div className="flex items-start mb-4">
                <span className="text-3xl font-bold text-white opacity-50">{step.number}</span>
                <h3 className="text-xl font-semibold text-white ml-3 mt-1">{step.title}</h3>
              </div>
              <p className="text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default CloudMigrationPage;
