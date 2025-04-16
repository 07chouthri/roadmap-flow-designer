
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Building, Stethoscope, LandmarkIcon, Code, ShoppingCart, GraduationCap, Factory, Building2, Radio, Zap } from 'lucide-react';

const IndustriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const industries = [
    {
      icon: <Stethoscope className="w-10 h-10 text-pink-500" />,
      name: "Healthcare",
      description: "Secure, compliant cloud solutions for hospitals, clinics, and medical research."
    },
    {
      icon: <LandmarkIcon className="w-10 h-10 text-green-500" />,
      name: "Finance & Banking",
      description: "Reliable cloud infrastructure for banking apps, transactions, and analytics."
    },
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      name: "Information Technology",
      description: "DevOps, CI/CD, and scalable infrastructure tailored for tech companies."
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-orange-500" />,
      name: "Retail & E-Commerce",
      description: "Scalable e-commerce platforms, digital storefronts, and inventory automation."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-indigo-500" />,
      name: "Education & Research",
      description: "Cloud platforms for LMS, virtual classrooms, and academic data security."
    },
    {
      icon: <Factory className="w-10 h-10 text-gray-600" />,
      name: "Manufacturing & IoT",
      description: "IoT cloud integration, automation pipelines, and factory data management."
    },
    {
      icon: <Building2 className="w-10 h-10 text-purple-500" />,
      name: "Government",
      description: "Secure, scalable solutions for digital governance and citizen services."
    },
    {
      icon: <Radio className="w-10 h-10 text-cyan-500" />,
      name: "Telecommunications",
      description: "High-availability solutions for network infrastructure and communications."
    },
    {
      icon: <Zap className="w-10 h-10 text-cyan-500" />,
      name: "Energy & Utilities",
      description: "Real-time monitoring, smart grids, and analytics for sustainable operations."
    }
  ];

  return (
    <section ref={sectionRef} className="py-10 bg-white" aria-labelledby="industries-heading">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-hads-pink/10 flex items-center justify-center">
              <Building className="w-6 h-6 text-hads-purple" />
            </div>
          </div>
          <h2
            id="industries-heading"
            className={cn(
              "text-3xl md:text-4xl font-bold text-hads-dark mb-4 transition-all duration-700 transform",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
              <span className="text-hads-pink">Industries</span>
              <span className="text-gray-800"> We Cover</span>
          </h2>
          <p
            className={cn(
              "text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Our specialized cloud solutions cater to the unique needs of various industries.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6" role="list" aria-labelledby="industries-heading">
          {industries.map(({ icon, name, description }, index) => (
            <div
              key={index}
              role="listitem"
              className={cn(
                "bg-gray-50 rounded-xl p-4 text-center shadow-sm border border-gray-100 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-md",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 flex justify-center">{icon}</div>
              <h3 className="text-lg font-semibold text-hads-dark mb-1">{name}</h3>
              <p className="text-xs text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
