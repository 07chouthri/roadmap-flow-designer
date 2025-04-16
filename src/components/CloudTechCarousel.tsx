import { useRef, useState, useEffect } from 'react';
import { Cloud, Server, Database, Code, BarChart, Shield } from 'lucide-react';

const CloudTechCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [autoScrollDirection, setAutoScrollDirection] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  const technologies = [
    {
      title: "Cloud Migration",
      description:
        "Facilitate a seamless transition of your workloads to AWS, Azure, or Google Cloud through a structured migration strategy that ensures minimal downtime, operational continuity, and optimized performance.",
      icon: <Cloud className="h-10 w-10 text-hads-purple" />,
      color: "linear-gradient(to bottom right, #dbeafe, #bfdbfe)",
    },
    {
      title: "Containerization",
      description:
        "Modernize your applications using Docker-based containerization and Kubernetes orchestration to enhance scalability, portability, and operational efficiency across cloud environments.",
      icon: <Server className="h-10 w-10 text-hads-purple" />,
      color: "linear-gradient(to bottom right, #fce7f3, #fbcfe8)",
    },
    {
      title: "FinOps",
      description:
        "Optimize cloud expenditures and improve resource utilization through strategic cost management, right-sizing, and intelligent workload allocation across your cloud infrastructure.",
      icon: <BarChart className="h-10 w-10 text-hads-purple" />,
      color: "linear-gradient(to bottom right, #ccfbf1, #e0f2fe)",
    },
    {
      title: "DevOps",
      description:
        "Streamline development workflows by implementing robust CI/CD pipelines that automate code integration, testing, and deployment for faster and more reliable software delivery.",
      icon: <Code className="h-10 w-10 text-hads-purple" />,
      color: "linear-gradient(to bottom right, #ede9fe, #ddd6fe)",
    },
    {
      title: "Data Management",
      description:
        "Implement secure cloud storage and database migration solutions to ensure data integrity, compliance, and seamless transition with minimal disruption to business operations.",
      icon: <Database className="h-10 w-10 text-hads-purple" />,
      color: "linear-gradient(to bottom right, #dbeafe, #d1fae5)",
    },
    {
      title: "Cloud Security",
      description:
        "Safeguard your cloud infrastructure using advanced security protocols, including encryption, identity and access management, and continuous threat monitoring to ensure robust protection against evolving cyber threats.",
      icon: <Shield className="h-10 w-10 text-hads-purple" />,
      color: "linear-gradient(to bottom right, #fce7f3, #ede9fe)",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const rect = carouselRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    setMousePosition({ x, y: e.clientY - rect.top });

    if (x < width / 3) {
      const scrollAmount = -1 * (1 - x / (width / 3)) * 15;
      handleScroll(scrollAmount);
    } else if (x > (width * 2) / 3) {
      const scrollAmount = ((x - (width * 2) / 3) / (width / 3)) * 15;
      handleScroll(scrollAmount);
    }
  };

  const handleScroll = (amount: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollLeft += amount;
    setScrollPosition(carouselRef.current.scrollLeft);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovering) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          if (
            scrollPosition >=
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
          ) {
            setAutoScrollDirection(-1);
          } else if (scrollPosition <= 10) {
            setAutoScrollDirection(1);
          }
          handleScroll(1 * autoScrollDirection);
        }
      }, 30);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, autoScrollDirection, scrollPosition]);

  return (
    <div className="pt-12 pb-12 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="text-gray-800">Cloud </span>
          <span className="text-pink-500">Technology</span>
          <span className="text-gray-800"> Expertise</span>
        </h2>

        {/* Hide scrollbar CSS */}
        <style>
          {`
            .hide-scrollbar {
              overflow-x: scroll;
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <div
          ref={carouselRef}
          className="hide-scrollbar flex gap-6 px-4 py-6"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <div
                className="p-6 border border-gray-200 h-full"
                style={{ background: tech.color }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="mb-4 flex justify-between items-start">
                    <div className="bg-white/60 p-3 rounded-xl shadow-sm">
                      {tech.icon}
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/60 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-violet-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{tech.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <div className="text-sm text-gray-600 flex items-center">
            <span className="mr-2 text-pink-500">←</span>
            Swipe or hover to explore more technologies
            <span className="ml-2 text-pink-500">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudTechCarousel;
