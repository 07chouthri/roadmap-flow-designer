
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import {
  Smartphone,
  Globe,
  Code,
  GitBranch,
  Zap,
  LayoutGrid,
  ArrowRight,
  Database,
} from 'lucide-react';
import { Button } from './ui/button';

const AppDevelopmentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <div className="flex items-center">
                <div className="h-px w-12 bg-hads-pink mr-4"></div>
                <h2
                  className={cn(
                    'text-3xl md:text-4xl font-bold text-hads-dark transition-all duration-500 transform',
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  )}
                >
                  Building<span className="text-hads-pink"> the future</span>
                </h2>
              </div>
              <h3
                className={cn(
                  'text-2xl md:text-3xl font-bold text-hads-dark mt-2 transition-all duration-500 delay-50 transform',
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                )}
              >
                one application at a time
              </h3>
            </div>
          </div>

          <p
            className={cn(
              'text-gray-700 mt-6 max-w-3xl transition-all duration-500 delay-100 transform',
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            )}
          >
            Our application development services deliver custom solutions that solve complex business problems,
            enhance user experiences, and drive digital innovation. With a focus on modern technologies and
            best practices, we create applications that are scalable, maintainable, and future-proof.
          </p>
        </div>


      </div>

      {/* Additional Services Section */}
      <div className="bg-gray-50 py-20 mt-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to meet all your application development needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GitBranch className="h-8 w-8 text-blue-500" />,
                title: "Version Control",
                description: "Implement robust version control systems using Git, GitHub, and GitLab with branching strategies for efficient team collaboration."
              },
              {
                icon: <Database className="h-8 w-8 text-green-500" />,
                title: "Database Design",
                description: "Design scalable database architectures using SQL and NoSQL technologies optimized for performance and data integrity."
              },
              {
                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                title: "API Development",
                description: "Create RESTful and GraphQL APIs with secure authentication, rate limiting, and comprehensive documentation."
              },
              {
                icon: <LayoutGrid className="h-8 w-8 text-purple-500" />,
                title: "UI/UX Design",
                description: "Craft intuitive user interfaces with modern design principles focused on accessibility and user experience."
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: isInView ? `${300 + index * 100}ms` : "0ms" }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Discuss Your Next Project?</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentSection;
