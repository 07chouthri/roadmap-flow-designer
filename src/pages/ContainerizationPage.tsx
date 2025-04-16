'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Cloudvieod from "../video/Cloud managed service.mp4";
import { ArrowRight, Cloud, ShieldCheck, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContainerizationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("restoration");

  const toggleTab = (tabName) => {
    setActiveTab(activeTab === tabName ? null : tabName);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: 'Cloud Infrastructure Management',
      icon: <Cloud className="h-6 w-6 text-hads-purple" />,
      color: 'hads-purple/10',
      text: '24/7 monitoring, provisioning, and management of your cloud resources for optimal performance.',
      backText: 'Ensures uptime, cost efficiency, and operational continuity with expert support.',
    },
    {
      title: 'Security & Compliance',
      icon: <ShieldCheck className="h-6 w-6 text-hads-teal" />,
      color: 'hads-teal/10',
      text: 'Enforce enterprise-grade cloud security, governance policies, and industry compliance.',
      backText: 'Reduces risk with proactive security auditing, patching, and compliance automation.',
    },
    {
      title: 'Cost Optimization & Analytics',
      icon: <TrendingUp className="h-6 w-6 text-hads-pink" />,
      color: 'hads-pink/10',
      text: 'Gain visibility and control over your cloud spend with smart analytics and cost-saving strategies.',
      backText: 'Maximizes ROI with right-sizing, forecasting, and usage-based recommendations.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
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
                  src="https://lottie.host/114e65cc-2898-4c71-b62b-bbfd3fba55e3/aw9NZZxYi3.lottie"
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
                <span>Cloud </span>
                <span style={{ color: "#ff2d75" }}>Managed</span>
                <span> Services ...</span>
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                <div >
                  <p >
                    Let HADS handle the complexity of  <br />
                    cloud operations — from performance,  <br />security, and updates to backups <br />
                    and cost optimization.                  </p>
                  <p className='mt-6'>
                    Our expert team manages your cloud environment  <br />day-to-day and end-to-end, ensuring reliability and  <br />efficiency, so your team can focus on innovation and growth.                  </p>
                </div>
              </p>
            </div>
          </div>
        </section>

        {/* Flip Cards Section */}
        <section style={{ marginTop: "50px" }} className="py-16 bg-white">
          <style>{`
            .flip-card {
              perspective: 1000px;
            }
            .flip-card-inner {
              transition: transform 0.8s;
              transform-style: preserve-3d;
              position: relative;
            }
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            .flip-card-front, .flip-card-back {
              backface-visibility: hidden;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 0.75rem;
            }
            .flip-card-front {
              background-color: white;
              border: 1px solid #e5e7eb;
              box-shadow: 0 4px 6px rgba(0,0,0,0.05);
              padding: 2rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              transition: box-shadow 0.3s ease;
            }
            .flip-card:hover .flip-card-front {
              box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            }
            .flip-card-back {
              transform: rotateY(180deg);
              background-color: #f9fafb;
              border: 1px solid #e5e7eb;
              padding: 2rem;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
          `}</style>

          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-gray-800">Managed Cloud </span>
                <span className="text-hads-pink">Maximum Efficiency</span>
              </h2>
              <p className="text-lg text-gray-600">
                We deliver proactive, secure, and scalable cloud management tailored to your unique business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flip-card h-80 relative">
                  <div className="flip-card-inner w-full h-full">
                    <div className="flip-card-front">
                      <div className={cn(
                        'w-12 h-12 mb-4 rounded-full flex items-center justify-center',
                        service.color === 'hads-purple/10' && 'bg-hads-purple/10',
                        service.color === 'hads-teal/10' && 'bg-hads-teal/10',
                        service.color === 'hads-pink/10' && 'bg-hads-pink/10'
                      )}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.text}</p>
                    </div>
                    <div className="flip-card-back">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                        <p className="text-gray-700">{service.backText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={{ marginTop: "50px" }} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-gray-800">Why </span>
                <span className="text-hads-pink">Choose</span>
                <span className="text-gray-800"> Managed Services?</span>
              </h2>
              <p className="text-lg text-gray-700">
                Streamline your cloud operations with our end-to-end managed services that deliver peace of mind and business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Proactive Monitoring & Support', text: 'We handle all maintenance, alerts, and incident response to keep your systems running smoothly.' },
                { title: 'Customized Cloud Solutions', text: 'Services tailored to your tech stack, business goals, and operational needs.' },
                { title: 'Scalability On Demand', text: 'Automatically scale up or down based on usage to maintain performance and cost-efficiency.' },
                { title: 'Compliance Assurance', text: 'Meet industry standards and regulations effortlessly with our expert guidance.' },
                { title: 'Business Continuity', text: 'Disaster recovery, backups, and availability strategies built in by design.' },
                { title: 'Single Pane of Glass Visibility', text: 'Real-time dashboards, reporting, and insights on your cloud ecosystem.' },
              ].map((item, index) => (
                <div key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="h-7 w-7 text-hads-teal flex-shrink-0 mt-4" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-900">{item.title}</h3>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* +Data Show Ing */}
        <section style={{ marginTop: "50px" }} className="mt-[20] py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                <span className="text-gray-800">Unlock your cloud </span>
                <span className="text-pink-500">infrastructure</span>
                <span className="text-gray-800"> true potential</span>
              </h2>
              <p className="text-lg text-gray-700">
                Our solutions and cloud managed services help boost resilience and efficiency, reduce downtime,
                and support peak performance — ensuring a cloud setup that scales with your business growth.
              </p>
            </div>

            {/* Tab Cards */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* Restoration Management */}
              <div className="w-full md:w-[30%] min-w-[280px]">
                <div
                  onClick={() => toggleTab("restoration")}
                  className="cursor-pointer flex items-center gap-2 text-pink-500 font-medium text-lg px-5 py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-50"
                >
                  <span className="text-pink-500 text-2xl font-bold">
                    {activeTab === "restoration" ? "➖" : "➕"}
                  </span>
                  Restoration Management
                </div>
                {activeTab === "restoration" && (
                  <div className="bg-white p-5 mt-3 rounded-lg shadow-md">
                    <p>We ensure disaster recovery readiness and quick restoration of systems in case of service disruption.</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-700">
                      <li>Ensure system uptime with recovery protocols</li>
                      <li>Utilize backup and replication strategies</li>
                      <li>Perform regular recovery drills</li>
                      <li>Monitor recovery times for optimization</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Automated Backups */}
              <div className="w-full md:w-[30%] min-w-[280px]">
                <div
                  onClick={() => toggleTab("backup")}
                  className="cursor-pointer flex items-center gap-2 text-pink-500 font-medium text-lg px-5 py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-50"
                >
                  <span className="text-pink-500 text-2xl font-bold">
                    {activeTab === "backup" ? "➖" : "➕"}
                  </span>
                  Automated Backups
                </div>
                {activeTab === "backup" && (
                  <div className="bg-white p-5 mt-3 rounded-lg shadow-md">
                    <p>Automated backup scheduling with retention policies to safeguard your data and configurations.</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-700">
                      <li>Automate data backups at regular intervals</li>
                      <li>Ensure compliance with data retention policies</li>
                      <li>Provide backup verification and validation</li>
                      <li>Enable seamless data restoration from backups</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Performance Monitoring */}
              <div className="w-full md:w-[30%] min-w-[280px]">
                <div
                  onClick={() => toggleTab("monitoring")}
                  className="cursor-pointer flex items-center gap-2 text-pink-500 font-medium text-lg px-5 py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-50"
                >
                  <span className="text-pink-500 text-2xl font-bold">
                    {activeTab === "monitoring" ? "➖" : "➕"}
                  </span>
                  Performance Monitoring
                </div>
                {activeTab === "monitoring" && (
                  <div className="bg-white p-5 mt-3 rounded-lg shadow-md">
                    <p>Real-time monitoring and alerting systems to ensure your cloud stays healthy and performant.</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-700">
                      <li>Track cloud resource usage and health</li>
                      <li>Real-time alerts for potential issues</li>
                      <li>Ensure service uptime and minimize downtime</li>
                      <li>Optimize cloud infrastructure for performance</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Cost Optimization */}
              <div className="w-full md:w-[30%] min-w-[280px]">
                <div
                  onClick={() => toggleTab("cost")}
                  className="cursor-pointer flex items-center gap-2 text-pink-500 font-medium text-lg px-5 py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-50"
                >
                  <span className="text-pink-500 text-2xl font-bold">
                    {activeTab === "cost" ? "➖" : "➕"}
                  </span>
                  Cost Optimization
                </div>
                {activeTab === "cost" && (
                  <div className="bg-white p-5 mt-3 rounded-lg shadow-md">
                    <p>Analyze and optimize cloud spending through usage tracking and budget alerts for maximum efficiency.</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-700">
                      <li>Track cloud usage and spending trends</li>
                      <li>Set up cost optimization alerts and budgets</li>
                      <li>Ensure you only pay for the resources you need</li>
                      <li>Analyze cloud costs with reports and insights</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Patch Management */}
              <div className="w-full md:w-[30%] min-w-[280px]">
                <div
                  onClick={() => toggleTab("patch")}
                  className="cursor-pointer flex items-center gap-2 text-pink-500 font-medium text-lg px-5 py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-50"
                >
                  <span className="text-pink-500 text-2xl font-bold">
                    {activeTab === "patch" ? "➖" : "➕"}
                  </span>
                  Patch Management
                </div>
                {activeTab === "patch" && (
                  <div className="bg-white p-5 mt-3 rounded-lg shadow-md">
                    <p>Regular updates and patching of systems to mitigate security vulnerabilities and ensure stability.</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-700">
                      <li>Apply patches regularly to mitigate risks</li>
                      <li>Ensure system security by patching vulnerabilities</li>
                      <li>Automate patch deployment for efficiency</li>
                      <li>Test patches to avoid system disruptions</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Cloud Migration Support */}
              <div className="w-full md:w-[30%] min-w-[280px]">
                <div
                  onClick={() => toggleTab("migration")}
                  className="cursor-pointer flex items-center gap-2 text-pink-500 font-medium text-lg px-5 py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-50"
                >
                  <span className="text-pink-500 text-2xl font-bold">
                    {activeTab === "migration" ? "➖" : "➕"}
                  </span>
                  Cloud Migration Support
                </div>
                {activeTab === "migration" && (
                  <div className="bg-white p-5 mt-3 rounded-lg shadow-md">
                    <p>Seamless migration of workloads, applications, and databases with minimal downtime and expert support.</p>
                    <ul className="list-disc pl-5 mt-3 text-gray-700">
                      <li>Plan and execute cloud migrations with minimal downtime</li>
                      <li>Expert support for moving applications to the cloud</li>
                      <li>Optimize infrastructure for cloud platforms</li>
                      <li>Ensure application compatibility with cloud environments</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ContainerizationPage;
