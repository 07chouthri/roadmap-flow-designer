
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 5); // Reduced from 10 to trigger earlier
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) { // Reduced from 100 to be more responsive
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    
    if (path === '/' && sectionId && location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (path === '/' && sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50); // Reduced from 100ms for faster response
    }
  };

  return {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isVisible,
    isActive,
    handleNavigation
  };
};

export default useNavbar;
