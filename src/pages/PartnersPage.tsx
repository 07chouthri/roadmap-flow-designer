// src/pages/PartnersPage.jsx

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import { ArrowRight, Building, Globe, ShieldCheck } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Freshworks from '../images/Freshworks.png';
import github from '../images/github-icon.svg';

const PartnersPage = () => {
  const logos = [
    { src: Freshworks, name: 'Freshworks' },
    { src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", name: 'GitHub' },
    { src: "https://cdn.worldvectorlogo.com/logos/gitlab.svg", name: 'GitLab' },
    { src: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", name: 'Git' },
    { src: "https://cdn.worldvectorlogo.com/logos/grafana.svg", name: 'Grafana' },
    { src: "https://cdn.worldvectorlogo.com/logos/prometheus.svg", name: 'Prometheus' }
  ];


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Flip Card Styles */}
      <style>
        {`
          .flip-card {
            perspective: 1000px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1rem;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-6xl md:text-5xl font-bold text-white mb-7 tracking-wider">
                  <span className="mx-2">Our</span>
                  <span className="mx-2 text-hads-pink">Strategic</span>
                  <span className="mx-2">Partners..</span>
                </h1>
                <div className="mx-2">
                  <p className="text-2xl text-gray-300 mb-7 font-light leading-relaxed">
                    Driving digital transformation with cloud-first solutions.
                  </p>
                  <p className="text-lg text-gray-400 mb-7">
                    At HADS TechNovation LLP, we team up with global leaders to co-create innovative cloud services. Our partnerships deliver scalable, secure, and future-ready infrastructures, tailored to meet your business needs.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-[400px] md:h-[400px]">
                <DotLottieReact
                  src="https://lottie.host/01cc4ff0-3df0-4a83-9425-be324c883795/bF91MiY1Pg.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                  aria-label="Cloud technology animation"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <PartnersSection />

        {/* Why Partner With Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Partner With HADS? Unlock <span className="text-hads-pink">Growth</span> & <span className="text-hads-pink">Innovation</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Join our partner ecosystem and access unmatched opportunities for growth. At HADS, we empower partners with cutting-edge cloud-native solutions and deep technical expertise.
                From cloud migration and DevOps automation to application modernization, we provide end-to-end support led by AWS-certified professionals.
                Accelerate your time-to-market with scalable microservices, CI/CD pipelines, IaC, and real-time monitoring via CloudWatch, Prometheus, and Grafana. Whether you're optimizing efficiency, integrating AI/ML, or enabling secure multi-cloud environments, HADS ensures precision and performance.
                Partner with us and stay ahead in the fast-evolving tech landscape!
              </p>
            </div>

            {/* Flip Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Flip Card 1 */}
              <div className="flip-card h-80">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front bg-gradient-to-r from-hads-purple to-hads-pink shadow-md p-8 flex flex-col items-center justify-center border border-gray-100"
                  >
                    <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Industry Expertise</h3>
                    <p className="text-white text-center">
                      Unlock specialized knowledge and resources across leading cloud platforms.
                    </p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-r from-hads-purple to-hads-teal text-white p-8 flex flex-col items-center justify-center">
                    <ShieldCheck className="h-5 w-5 mb-2 text-white" />
                    <p className="text-sm text-center">
                      At HADS, we bring deep industry expertise to help you navigate and leverage the best cloud solutions. With our insights and experience, you'll gain a competitive edge in today’s cloud-driven world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flip Card 2 */}
              <div className="flip-card h-80">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front bg-gradient-to-r from-hads-purple to-hads-pink shadow-md p-8 flex flex-col items-center justify-center border border-gray-100"
                  >
                    <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Global Reach</h3>
                    <p className="text-white text-center">
                      Expand your market presence with our global network and diverse clientele.
                    </p>
                  </div>

                  <div className="flip-card-back bg-gradient-to-r from-hads-purple to-hads-teal text-white p-8 flex flex-col items-center justify-center">
                    <ShieldCheck className="h-5 w-5 mb-2 text-white" />
                    <p className="text-sm text-center">
                      Leverage HADS’ international connections to grow your business, tap into new markets, and build relationships with clients worldwide. Let us help you scale beyond borders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flip Card 3 */}
              <div className="flip-card h-80">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front bg-gradient-to-r from-hads-purple to-hads-pink shadow-md p-8 flex flex-col items-center justify-center border border-gray-100"
                  >
                    <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Innovation Focus</h3>
                    <p className="text-white text-center">
                      Stay ahead of the curve with early access to cutting-edge cloud technologies and solutions.
                    </p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-r from-hads-purple to-hads-teal text-white p-8 flex flex-col items-center justify-center">
                    <ShieldCheck className="h-5 w-5 mb-2 text-white" />
                    <p className="text-sm text-center">
                      At HADS, we keep you at the forefront of innovation, providing exclusive access to the latest advancements in cloud technology, so you can lead, not follow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Logos */}
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Technology<span className="mx-2 text-hads-pink">Ecosystem</span>
              </h2>
              <p className="text-lg text-gray-700">
                We collaborate with industry-leading platforms to deliver scalable cloud solutions.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '40px',
                backgroundColor: '#f9fafb',
                padding: '30px 0',
              }}
            >
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '200px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.3s',
                  }}
                >
                  <img
                    src={typeof logo.src === 'string' ? logo.src : Freshworks}
                    alt={logo.name}
                    style={{ height: '56px', objectFit: 'contain' }}
                  />
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#2d3748',
                      marginTop: '8px',
                      whiteSpace: 'nowrap',
                      textAlign: 'center',
                    }}
                  >
                    {logo.name}
                  </p>
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

export default PartnersPage;
