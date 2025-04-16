
import { useRef, useState, useEffect } from 'react';
import { useInView } from '../hooks/use-in-view';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We had multiple issues to resolve, but needed one partner to handle it all. We opted for HADS and they proved their reputation for quality and delivery.",
    name: "John Smith",
    title: "Chief Technology Officer",
    company: "TVS Electronics"
  },
  {
    id: 2,
    quote: "HADS helped us migrate our entire infrastructure to AWS in record time, with zero downtime. Their expertise was invaluable throughout the process.",
    name: "Sarah Johnson",
    title: "IT Director",
    company: "Global Retail Inc."
  },
  {
    id: 3,
    quote: "Their DevOps expertise transformed our development pipeline. We've reduced deployment times by 75% and greatly improved our application reliability.",
    name: "Michael Chen",
    title: "VP of Engineering",
    company: "TechStartup Solutions"
  },
  {
    id: 4,
    quote: "The security assessments provided by HADS were thorough and helped us identify critical vulnerabilities we weren't aware of. Highly recommended!",
    name: "Emily Rodriguez",
    title: "CISO",
    company: "FinTech Innovations"
  },
  {
    id: 5,
    quote: "Our cloud costs were spiraling out of control until we engaged with HADS. Their optimization strategies saved us over 40% on our monthly AWS bill.",
    name: "David Park",
    title: "CFO",
    company: "E-commerce Platform"
  },
  {
    id: 6,
    quote: "The team's expertise in multi-cloud environments helped us create a resilient architecture that has maintained 99.99% uptime over the past year.",
    name: "Lisa Wong",
    title: "Operations Director",
    company: "Healthcare Systems Inc."
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Set up auto-scroll
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    // Update current index when slide changes
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      api?.off("select", onSelect);
    };
  }, [api]);

  return (
    <section ref={sectionRef} className="bg-white py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-black transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Innovative
            <span className="mx-2 text-hads-pink">Solution</span>
          </h2>
          <p className={cn(
            "text-lg md:text-xl text-black-300 mt-4 max-w-3xl mx-auto transition-all duration-700 delay-150 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
          HADS – Your AWS-Certified Cloud Partner for Scalable, Reliable, Cost-Smart Solutions.
          </p>
        </div>

        <div className={cn(
          "transition-all duration-700 delay-200 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3 px-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 h-full">
                    <div className="flex flex-col h-full">
                      <div className="text-4xl text-hads-teal mb-6">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 11C10.9193 11 11.8295 10.7669 12.6788 10.298C13.5281 9.829 14.2997 9.12999 14.8995 8.26025C15.4993 7.39051 15.9232 6.3789 16.1535 5.30386C16.3837 4.22881 16.4143 3.11842 16.243 2.03 16.343 2.01 16.443 2 16.543 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V10C21 10.2652 20.8946 10.5196 20.7071 10.7071C20.5196 10.8946 20.2652 11 20 11H17V21C17 21.2652 16.8946 21.5196 16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V14C3 12.1435 3.7375 10.363 5.05025 9.05025C6.36301 7.7375 8.14348 7 10 7" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <p className="text-black-300 text-base mb-6">
                          "{testimonial.quote}"
                        </p>

                        <div className="mt-auto">
                          <p className="text-black font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-black">{testimonial.title}</p>
                          <p className="text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center mt-10 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === current
                      ? "bg-hads-teal w-6"
                      : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
