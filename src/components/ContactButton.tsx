
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MessageSquare } from 'lucide-react';

const ContactButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={cn(
        "fixed right-6 z-50 flex items-center transition-all duration-500 ease-in-out",
        isScrolled ? "bottom-6" : "-bottom-20"
      )}
    >
      <div 
        className={cn(
          "absolute right-0 bg-hads-teal text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap",
          isHovered ? "max-w-[140px] opacity-100" : "max-w-0 opacity-0"
        )}
        style={{ transitionDelay: isHovered ? '0.1s' : '0s' }}
      >
        Contact Us
      </div>
      
      <button 
        className="bg-hads-teal hover:bg-hads-teal/90 text-white p-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact Us"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default ContactButton;
