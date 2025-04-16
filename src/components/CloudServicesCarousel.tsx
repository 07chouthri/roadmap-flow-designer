
import { useState, useRef, useEffect } from 'react';
import { Cloud, Server, Database, Code, Terminal, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

interface CloudServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const CloudServiceCard = ({ title, description, icon, color }: CloudServiceCardProps) => {
  return (
    <div 
      className="relative flex flex-col h-64 p-6 bg-gradient-to-br from-hads-dark/80 to-hads-purple/80 backdrop-blur-sm border border-white/20 rounded-xl"
    >
      <div className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ${color} bg-opacity-20`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 transform translate-x-1/3 translate-y-1/3">
        {icon}
      </div>
    </div>
  );
};

const CloudServicesCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Automatic slow scroll when mouse is near edges
  const handleMouseOver = (e: React.MouseEvent) => {
    if (isDragging) return;
    
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const carouselRect = carousel.getBoundingClientRect();
    const mouseX = e.clientX - carouselRect.left;
    const width = carouselRect.width;
    
    // Define edge detection zones (20% of width on each side)
    const leftEdgeZone = width * 0.2;
    const rightEdgeZone = width * 0.8;
    
    if (mouseX < leftEdgeZone) {
      // Near left edge - scroll left
      const scrollAmount = 1 + 5 * (1 - mouseX / leftEdgeZone);
      carousel.scrollLeft -= scrollAmount;
    } else if (mouseX > rightEdgeZone) {
      // Near right edge - scroll right
      const scrollAmount = 1 + 5 * ((mouseX - rightEdgeZone) / (width - rightEdgeZone));
      carousel.scrollLeft += scrollAmount;
    }
    
    setScrollPosition(carousel.scrollLeft);
  };
  
  // Service data
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly move your workloads to the cloud with our proven migration framework that minimizes disruption and maximizes value.",
      icon: <Cloud className="text-hads-teal" size={24} />,
      color: "bg-hads-teal"
    },
    {
      title: "Containerization",
      description: "Modernize applications with Docker and Kubernetes to improve scalability, portability, and resource utilization.",
      icon: <Server className="text-hads-pink" size={24} />,
      color: "bg-hads-pink"
    },
    {
      title: "FinOps",
      description: "Optimize cloud spending and usage through our FinOps practices, ensuring maximum return on your cloud investments.",
      icon: <Database className="text-hads-teal" size={24} />,
      color: "bg-hads-teal"
    },
    {
      title: "DevOps",
      description: "Implement CI/CD pipelines and automation to accelerate delivery while maintaining quality and reliability.",
      icon: <Code className="text-hads-pink" size={24} />,
      color: "bg-hads-pink"
    },
    {
      title: "Cloud Security",
      description: "Protect your cloud infrastructure with comprehensive security solutions designed for multi-cloud environments.",
      icon: <Shield className="text-hads-teal" size={24} />,
      color: "bg-hads-teal"
    },
    {
      title: "Infrastructure as Code",
      description: "Manage and provision cloud resources through code to ensure consistency, reproducibility, and scalability.",
      icon: <Terminal className="text-hads-pink" size={24} />,
      color: "bg-hads-pink"
    }
  ];

  // Calculate progress
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setScrollPosition(carouselRef.current.scrollLeft);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const maxScroll = carouselRef.current ? carouselRef.current.scrollWidth - carouselRef.current.clientWidth : 0;
  const progress = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return (
    <div className="py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="h-px w-12 bg-hads-pink mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Cloud <span className="text-gradient">Journey</span> Services
          </h2>
        </div>
        
        <div 
          ref={carouselRef}
          className="overflow-x-auto pb-6 pt-4 hide-scrollbar cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          <div className="flex gap-6" style={{ minWidth: "max-content" }}>
            {services.map((service, index) => (
              <div key={index} className="w-80 flex-shrink-0">
                <CloudServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-hads-teal to-hads-pink rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="mt-2 text-xs text-gray-400 flex justify-between">
          <span>Drag to explore more services</span>
          <span>{Math.round(progress)}% viewed</span>
        </div>
      </div>
    </div>
  );
};

export default CloudServicesCarousel;
