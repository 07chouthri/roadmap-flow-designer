
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, FileCheck, ServerCrash, Database, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import SecurityandCompliancevieod from "../video/Security and Compliances.mp4";


const SecurityCompliancePage = () => {
  const frameworks = [
    {
      title: "GDPR",
      description: "Ensures data protection and privacy for individuals in the EU."
    },
    {
      title: "HIPAA",
      description: "Protects sensitive patient health information in the U.S. healthcare system."
    },
    {
      title: "PCI DSS",
      description: "Secures cardholder data for organizations handling credit card information."
    },
    {
      title: "SOC 2",
      description: "Verifies data security, availability, and confidentiality for service providers."
    },
    {
      title: "ISO 27001",
      description: "International standard for managing information security risks."
    },
    {
      title: "NIST",
      description: "Provides cybersecurity frameworks and best practices for federal agencies."
    },
    {
      title: "CCPA",
      description: "Grants California residents rights over their personal data."
    },
    {
      title: "FedRAMP",
      description: "Standardizes cloud security assessments for U.S. federal systems."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
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
                  src="https://lottie.host/4843aa76-95a4-45a7-a53f-27b78bb0915f/omFRJ60sYt.lottie"
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
                Security and {" "}
                <span style={{ color: "#ff2d75", textShadow: "2px 2px 6px rgba(6, 5, 5, 0.5)" }}>
                  Compliances
                </span>
                <span className="mx-2 text-hads-pink">...</span>
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  marginTop: "40px",
                }}
              >
                Security and compliance are vital for protecting<br />
                your business in the cloud. We ensure your<br />
                cloud environment follows the right regulations,<br />
                keeps your data secure, and minimizes risks. <br />
                From robust access controls to regular audits, <br />
                we provide a secure, reliable,and compliant<br /> cloud setup.
                Focus on growth while we handle <br />your security
                and compliance needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive
                <span className="mx-2 text-gray-800">Professional </span>
                <span className="text-hads-pink"> Security Solutions</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our security and compliance services safeguard your data, applications, and infrastructure, ensuring your cloud environment is secure and fully compliant with regulatory standards. We provide end-to-end protection, enabling you to focus on growth while we handle the complexities of security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Infrastructure Security */}
              <div className="flip-card h-80">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center border border-gray-100">
                    <div className="w-16 h-16 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-hads-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Infrastructure Security</h3>
                    <p className="text-gray-700 text-center">
                      Secure your cloud resources with comprehensive network protections and access controls.
                    </p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-r from-hads-purple to-hads-teal text-white rounded-lg p-8 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold mb-3">Infrastructure Security</h3>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Network segmentation & firewall policies</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>DDoS protection & traffic inspection</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Zero trust network architecture</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Cloud security posture management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Identity & Access Management */}
              <div className="flip-card h-80">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center border border-gray-100">
                    <div className="w-16 h-16 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                      <Lock className="h-8 w-8 text-hads-teal" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">Identity & Access Management</h3>
                    <p className="text-gray-700 text-center">
                      Implement role-based access control and multi-factor authentication for your applications.
                    </p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-r from-hads-teal to-hads-pink text-white rounded-lg p-8 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold mb-3 text-center">Identity & Access Management</h3>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Single sign-on (SSO) solutions</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Multi-factor authentication (MFA)</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Least privilege access models</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Just-in-time access provisioning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Compliance Management */}
              <div className="flip-card h-80">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center border border-gray-100">
                    <div className="w-16 h-16 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                      <FileCheck className="h-8 w-8 text-hads-pink" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Compliance Management</h3>
                    <p className="text-gray-700 text-center">
                      Meet regulatory requirements with auditing, monitoring, and compliance reporting.
                    </p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-r from-hads-pink to-hads-purple text-white rounded-lg p-8 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold mb-3">Compliance Management</h3>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Automated compliance monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive audit logging</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Policy-as-code implementation</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Regulatory reporting dashboards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-gray-800">Enhanced </span>
                <span className="text-hads-pink">Security</span>
                <span className="text-gray-800"> Capabilities</span>
              </h2>
              <p className="text-lg text-gray-700">
                Advanced solutions to protect your most valuable digital assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <ServerCrash className="h-8 w-8 text-red-500" />,
                  title: "Disaster Recovery",
                  description: "Implement robust recovery plans to minimize downtime in case of security incidents."
                },
                {
                  icon: <Database className="h-8 w-8 text-green-500" />,
                  title: "Data Protection",
                  description: "Secure sensitive data with encryption, masking, and secure access protocols."
                },
                {
                  icon: <Shield className="h-8 w-8 text-blue-500" />,
                  title: "Threat Detection",
                  description: "Identify and neutralize security threats with 24/7 monitoring and response."
                },
                {
                  icon: <Lock className="h-8 w-8 text-purple-500" />,
                  title: "Security Assessment",
                  description: "Regular vulnerability scanning and penetration testing to identify weaknesses."
                },
              ].map((service, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <Link to="/contact" className="text-blue-600 text-sm flex items-center hover:text-blue-800 transition-colors">
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-gray-800">Our </span>
                <span className="text-hads-pink">Security</span>
                <span className="text-gray-800"> Process</span>
              </h2>
              <p className="text-lg text-gray-700">
                A proven approach to securing your cloud environment
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Timeline vertical line with blue gradient */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-hads-teal to-hads-purple"></div>

              {/* Step 1 */}
              <div className="relative z-10 mb-12">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 md:pr-12 text-right">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-hads-teal to-hads-purple bg-clip-text text-transparent mb-2">
                      Assessment
                    </h3>
                    <p className="text-gray-700">
                      Comprehensive evaluation of your current security posture and identification of vulnerabilities
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-white bg-gradient-to-r from-hads-teal to-hads-purple flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-12"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 mb-12">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 md:pr-12"></div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-white bg-gradient-to-r from-hads-teal to-hads-purple flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-12">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-hads-teal to-hads-purple bg-clip-text text-transparent mb-2">
                      Planning
                    </h3>
                    <p className="text-gray-700">
                      Developing tailored security strategies and roadmaps based on your business needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 mb-12">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 md:pr-12 text-right">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-hads-teal to-hads-purple bg-clip-text text-transparent mb-2">
                      Implementation
                    </h3>
                    <p className="text-gray-700">
                      Deploying security solutions and integrating with your existing systems
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-white bg-gradient-to-r from-hads-teal to-hads-purple flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-12"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 md:pr-12"></div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-white bg-gradient-to-r from-hads-teal to-hads-purple flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-12">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-hads-teal to-hads-purple bg-clip-text text-transparent mb-2">
                      Monitoring & Optimization
                    </h3>
                    <p className="text-gray-700">
                      Continuous monitoring, threat detection, and security optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Compliance Frameworks */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-extrabold text-hads-dark mb-4 tracking-tight">
                <span className="text-gray-800">Compliance </span>
                <span className="text-hads-pink">Frameworks</span>
              </h2>
              <p className="text-lg text-gray-600">
                We help you meet industry-specific compliance requirements with expert support and certifications.
              </p>
            </div>

            {/* Grid of Frameworks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 py-8">
              {frameworks.map((framework, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03] cursor-pointer overflow-hidden"
                  style={{ minHeight: "180px" }}
                >
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 rounded-2xl z-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 h-full">
                    <h3 className="text-lg sm:text-xl font-semibold text-hads-dark group-hover:text-blue-600 transition-colors duration-300">
                      {framework.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-700 transition-colors duration-300">
                      {framework.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>


            {/* CTA Button */}
            <div className="text-center mt-16">
              <Link to="/contact">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Contact Our Security Experts
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityCompliancePage;
