
import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  
  const events = [
    {
      title: "Cloud Journey APAC Summit",
      date: "May 15-16, 2023",
      location: "Singapore",
      attendees: "600+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      title: "DevOps Transformation Conference",
      date: "July 8-10, 2023",
      location: "Berlin, Germany",
      attendees: "800+",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      title: "FinOps & Cost Optimization Forum",
      date: "September 20-21, 2023",
      location: "New York, USA",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      title: "Cloud Journey & Security Symposium",
      date: "November 14-16, 2023",
      location: "Sydney, Australia",
      attendees: "700+",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    }
  ];
  
  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-4 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Upcoming <span className="text-hads-pink">Cloud Journey</span> Events
          </h2>
          <p className={cn(
            "text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Join us at these industry events to learn about the latest innovations in cloud technology and connect with experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hads-dark/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex items-center text-white text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-hads-purple transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin size={14} className="mr-1 text-hads-pink" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users size={14} className="mr-1 text-hads-pink" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>
                
                <a 
                  href={event.link} 
                  className="inline-flex items-center text-sm font-medium text-hads-purple group-hover:text-hads-pink transition-colors duration-300"
                >
                  Learn more
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "text-center mt-12 transition-all duration-700 transform delay-500",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Button variant="cloud">
            View All Events
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
