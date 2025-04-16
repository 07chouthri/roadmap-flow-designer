import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Code, GitBranch, RefreshCw, Workflow } from 'lucide-react';
import DevOpsPageviedo from '../video/DevOps Automation.mp4';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const DevOpsPage = () => {
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
                  width: "400px",  // Explicit large width
                  height: "400px", // Explicit large height
                }}
              >
                <DotLottieReact
                  src="https://lottie.host/715b3799-0fdd-48b6-bdcd-c83c5e919a4f/AMCYxFtcgx.lottie"
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
                  fontWeight: 800,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <span style={{
                  color: "#ff2d75",
                }}>
                  DevOps
                </span>
                <span className="mx-3">Automation</span>
                <span className="mx-2">...</span>
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  marginTop: "40px",
                }}
              >
                <p className="mb-7">
                  DevOps Automation - Accelerating Cloud Efficiency
                </p>
                <p className="text-lg  mb-7">
                  DevOps automation streamlines the development and operations processes, ensuring faster deployments, improved system reliability,
                  and seamless integration. By automating repetitive tasks and implementing continuous integration
                  and continuous delivery (CI/CD) pipelines, your team can focus on innovation rather than
                  manual processes.<br></br>
                  Our solutions empower your business with efficient workflows, allowing for consistent performance, reduced time-to-market, and enhanced
                  scalability, all while driving cost-effective operations.
                </p>
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-gray-800">Accelerate Your Development</span>
                <span className="mx-2 text-hads-pink">Lifecycle</span>
                <span className="text-gray-800">with DevOps</span>

              </h2>
              <p className="text-lg text-gray-700">
                Our DevOps services unite development and operations teams to deliver software faster,
                more reliably, and with improved quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">CI/CD Implementation</h3>
                <p className="text-gray-700">Automate your application deployment process with continuous integration and delivery pipelines for smoother, quicker releases.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <GitBranch className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Infrastructure as Code</h3>
                <p className="text-gray-700">Achieve consistency, version control, and automation by managing your infrastructure through code.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Monitoring & Observability</h3>
                <p className="text-gray-700">Gain real-time visibility into your applications with comprehensive monitoring solutions, ensuring performance and uptime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps Transformation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-gray-800">DevOps </span>
                <span className="text-hads-pink">Transformation</span>
                <span className="text-gray-800"> Journey</span>
              </h2>
              <p className="text-lg text-gray-700">
                We guide your organization through every stage of the DevOps transformation process, ensuring a smooth and successful transition.              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-hads-purple via-hads-teal to-hads-pink transform -translate-y-1/2 z-0"></div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-purple mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Assessment</h3>
                <p className="text-sm text-gray-700">Evaluate existing processes and pinpoint areas for improvement</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-purple/80 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Planning</h3>
                <p className="text-sm text-gray-700">Develop a tailored roadmap and strategy to drive transformation</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-teal mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Implementation</h3>
                <p className="text-sm text-gray-700">Deploy the right tools and implement process changes for efficiency</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-teal/80 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Training</h3>
                <p className="text-sm text-gray-700">Empower teams by upskilling them with modern DevOps methodologies</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-pink mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Optimization</h3>
                <p className="text-sm text-gray-700">Continuously refine processes for ongoing improvements and growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-hads-pink">Benefits</span>
                <span className="text-gray-800"> of DevOps</span>
              </h2>
              <p className="text-lg text-gray-700">
                Unlock the full potential of your development lifecycle with DevOps practices              </p>
            </div>

            {/* Benefit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Faster Time to Market",
                  description:
                    "Speed up software delivery with automation and streamlined deployment processes",
                },
                {
                  title: "Enhanced Quality",
                  description:
                    "Improve application reliability through automated testing and consistent delivery practices",
                },
                {
                  title: "Increased Collaboration",
                  description:
                    "Foster better collaboration between development, operations, and business teams",
                },
                {
                  title: "Greater Scalability",
                  description:
                    "Handle increased workloads efficiently with automated, repeatable deployment processes",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  {/* Benefit Title with Icon */}
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center gap-2">
                    <ArrowRight className="h-6 w-6 text-hads-teal" />
                    {benefit.title}
                  </h3>

                  {/* Benefit Description */}
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DevOpsPage;
