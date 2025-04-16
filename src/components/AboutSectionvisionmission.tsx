import React, { useRef } from 'react';
import { cn } from "@/lib/utils";
import { useInView } from '../hooks/use-in-view';
import { Button } from './ui/button';
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, Users, Globe, Award, Building, Lightbulb, Smile, Sparkles, Trophy } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const cardHover = "hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:border-transparent transition-all duration-500";
  const iconStyle = "text-hads-purple group-hover:text-hads-teal transition-transform duration-500 transform group-hover:scale-125 group-hover:-translate-y-1";

  return (
    <section ref={sectionRef} className=" relative rounded-[20px] bg-gradient-to-br from-white to-hads-light/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(221,240,255,0.3),transparent_50%)] pointer-events-none"></div>
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {[
            {
              title: "Mission",
              desc: "We are committed to empowering businesses by leveraging advanced cloud technologies to drive innovation, scalability, and sustainable growth. Through expert solutions and tailored support, we enable organizations to successfully navigate their digital transformation journey.",
              delay: "200"
            },
            {
              title: "Vision",
              desc: "To be the world's leading cloud solutions provider, recognized for innovation, seamless integration, and exceptional service. We empower businesses to unlock their full potential, driving sustainable growth and continuous digital transformation.",
              delay: "300"
            }
          ].map((item, index) => (
            <div key={index} className={cn(
              `group bg-white border border-hads-light p-6 rounded-2xl shadow-md transform transition-all duration-700 delay-${item.delay} hover:bg-gradient-to-br hover:from-white hover:to-hads-light/40`,
              cardHover,
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <h3 className="text-2xl font-semibold text-hads-purple mb-3 group-hover:text-hads-dark transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{item.desc}</p>
              <div className="h-1 w-24 bg-gradient-to-r from-hads-teal to-hads-purple rounded-full group-hover:scale-110 transition-all duration-300"></div>
            </div>
          ))}
        </div>



        <div className="text-center mb-12" style={{ marginTop: "160px" }}>
          <h3 className="text-3xl font-bold text-hads-dark mb-4">
            Our Core <span className="mx-2 text-hads-pink">Value</span>
          </h3>
          <p className="text-lg text-hads-dark/80 max-w-2xl mx-auto">
            Innovation, Integrity, Collaboration, Excellence & Client-Centricity at our core.
          </p>

          {/* Grid */}
          <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-hads-purple to-hads-pink p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Client-First Approach</h3>
              <p className="text-white">
                We prioritize our clients' needs, ensuring our solutions align with their business goals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-hads-purple to-hads-pink p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Technology-Driven Solutions</h3>
              <p className="text-white">
                We stay ahead of the curve by exploring new technologies to create innovative solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-r from-hads-purple to-hads-pink p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">High-Performance Standards</h3>
              <p className="text-white">
                We deliver top-tier solutions, ensuring the highest standards in every project.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-r from-hads-purple to-hads-pink p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Strong Integrity</h3>
              <p className="text-white">
                We believe in being honest, transparent, and always doing what we say.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-r from-hads-purple to-hads-pink p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Creative Solutions</h3>
              <p className="text-white">
                We think outside the box to craft tailored solutions that inspire innovation and impact.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-r from-hads-purple to-hads-pink p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Security & Trust</h3>
              <p className="text-white">
                We protect our clients’ data and build systems grounded in security and trust.
              </p>
            </div>
          </div>
        </div>



        {/* Feature Cards */}
        <div className="mt-[10] text-center mb-12" style={{ marginTop: "160px" }}>
          <h3 className="text-3xl font-bold text-hads-dark mb-4">Why Choose <span className="text-hads-pink">HADS?</span></h3>
          <p className="text-lg text-hads-dark/80 max-w-2xl mx-auto">Our cloud-first mindset and elite engineers bring measurable business impact, not just tech talk.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
            {[
              { icon: Rocket, title: "Scalable Solutions", desc: "Built for future growth." },
              { icon: ShieldCheck, title: "Security First", desc: "Privacy & compliance at the core." },
              { icon: Users, title: "Expert Team", desc: "Certified engineers & strategists." },
              { icon: Lightbulb, title: "Innovation Driven", desc: "Modern tools, creative minds." },
              { icon: Smile, title: "Client Happiness", desc: "You win, we win." },
              { icon: Trophy, title: "Track Record", desc: "Trusted by startups & enterprises." }
            ].map((item, index) => (
              <div key={index} className={`group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 ${cardHover}`}>
                <div className="flex flex-col items-center text-center space-y-3">
                  <item.icon size={40} className={iconStyle} />
                  <h4 className="text-lg font-semibold text-hads-dark group-hover:text-hads-purple transition-colors duration-300">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Glowing Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {["Cloud Certified", "Tailored Solutions", "24/7 Support", "Business Impact"].map((label, idx) => (
              <Badge
                key={idx}
                className="px-5 py-2 bg-gradient-to-r from-hads-purple to-hads-pink text-white text-sm font-medium rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-700"
                style={{
                  animation: 'moveLeftRight 2s ease-in-out infinite',
                  animationDelay: `${idx * 0.3}`, // stagger effect
                }}
              >
                {label}
              </Badge>
            ))}
          </div>
          <style>
            {`
              @keyframes moveLeftRight {
                0%, 100% {
                  transform: translateX(0);
                }
                50% {
                  transform: translateX(10px);
                }
              }
            `}
          </style>
          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-hads-purple to-hads-pink text-white rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-transform"
            >
              <Link to="/contact">Let’s Talk Cloud</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
