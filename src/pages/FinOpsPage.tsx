import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BarChart, DollarSign, TrendingDown } from 'lucide-react';
import FindopsCloudvieod from "../video/Cloud cost optimization FinOps.mp4";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const FinOpsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-10">
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
                  src="https://lottie.host/771f8247-524d-4107-9d1d-533ca8380ef9/5gInocjPYX.lottie"
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
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  color: "#000000",
                }}
              >
                Cloud Cost Optimization{" "}
                <span style={{ color: "#ff2d75", textShadow: "2px 2px 6px rgba(6, 5, 5, 0.5)" }}>
                  FinOps
                </span>
                <span className="mx-2 text-hads-pink">...</span>
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  marginTop: "20px",
                }}
              >
                FinOps aligns finance, engineering, and business teams to take control of cloud spending.
                It enables cost visibility, smarter budgeting, and continuous optimization.
                From rightsizing resources to eliminating waste, FinOps maximizes cloud value.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-gray-800">Why Choose  </span>
                <span className="text-hads-pink">FinOps</span>
                <span className="text-gray-800"> ?</span>
              </h2>
              <p className="text-lg text-gray-700">
                FinOps brings clarity, control, and accountability to your cloud expenses.
                Align teams, optimize resources, and track every dollar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cost Visibility</h3>
                <p className="text-gray-700">
                  Gain full transparency into cloud spend with real-time dashboards and detailed reports for smarter decision-making.                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Optimization</h3>
                <p className="text-gray-700">
                  Reduce waste and cut costs by identifying unused resources and implementing right-sized infrastructure.                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cost Governance</h3>
                <p className="text-gray-700">
                  Establish policies, budgets, and alerts to control cloud usage, prevent overspending, and ensure financial accountability.                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-hads-pink">Results</span>
                <span className="text-gray-800"> You Can Measure</span>
              </h2>
              <p className="text-lg text-gray-700">
                Our FinOps approach delivers tangible business impact with real, trackable savings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-hads-purple mb-2">25-40%</div>
                <p className="text-gray-700">Reduction in cloud costs through targeted optimization</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-hads-teal mb-2">3–6 months</div>
                <p className="text-gray-700">Months to achieve full ROI from your FinOps strategy</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-hads-pink mb-2">99%</div>
                <p className="text-gray-700">Improved visibility into cloud usage and spending</p>
              </div>
            </div>

            {/* FinOps Steps */}
            <div className="mt-20 max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-hads-dark mb-10 text-center">
                <span className="text-gray-800">Our </span>
                <span className="text-hads-pink">FinOps</span>
                <span className="text-gray-800"> Optimization Steps</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-10">
                {[
                  { step: '1', title: 'Discover', desc: 'Analyze current usage and uncover cost-saving opportunities.' },
                  { step: '2', title: 'Plan', desc: 'Build strategic budgets and right-sizing plans for efficiency.' },
                  { step: '3', title: 'Act', desc: 'Implement automation, resource adjustments, and best practices.' },
                  { step: '4', title: 'Monitor', desc: 'Track usage, costs, and performance for ongoing improvement.' },
                ].map(({ step, title, desc }) => (
                  <div
                    key={step}
                    className="group relative bg-gradient-to-br from-white via-hads-purple/5 to-hads-purple/10 
                            hover:from-hads-purple/10 hover:to-hads-purple/20 transition-all duration-300 ease-in-out p-6 
                            rounded-2xl border border-gray-200 text-center transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden
                            shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(147,51,234,0.25)]"
                  >
                    {/* Animated pulse ring behind number */}
                    <div className="relative w-16 h-16 mx-auto mb-5">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-hads-purple/20 to-transparent animate-ping opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative w-full h-full rounded-full bg-hads-purple/20 flex items-center justify-center border-2 border-hads-purple z-10">
                        <span className="text-hads-purple font-bold text-lg">{step}</span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-hads-dark text-lg group-hover:text-hads-purple transition-colors duration-300 mb-2">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {desc}
                    </p>

                    {/* Hover shimmer ring */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-hads-purple group-hover:ring-offset-2 transition-all duration-300 pointer-events-none z-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinOpsPage;
