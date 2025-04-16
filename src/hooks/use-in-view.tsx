
import { useState, useEffect, RefObject } from 'react';

export function useInView(
  ref: RefObject<Element>,
  options: IntersectionObserverInit & { once?: boolean } = {}
) {
  const [isIntersecting, setIntersecting] = useState(false);
  const { once = false, ...observerOptions } = options;
  
  // Set default threshold to an even lower value for faster animations
  const defaultOptions = { 
    threshold: observerOptions.threshold || 0.005, // Reduced from 0.01 to trigger much earlier
    rootMargin: observerOptions.rootMargin || '0px 0px 0% 0px' // Adjusted from -1% to 0% to trigger immediately when entering viewport
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      
      // If the once option is true and the element is intersecting,
      // disconnect the observer after it has intersected once
      if (once && entry.isIntersecting) {
        observer.disconnect();
      }
    }, { ...defaultOptions, ...observerOptions });

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, once, observerOptions]);

  return isIntersecting;
}
