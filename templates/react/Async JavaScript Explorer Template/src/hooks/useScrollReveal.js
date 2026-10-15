import { useEffect, useState, useRef } from 'react';

export function useScrollReveal(options = { threshold: 0.5 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Toggle visibility based on intersection, but keep it revealed if we want
      if (entry.isIntersecting) {
        setIsVisible(true);
        setHasRevealed(true);
      } else {
        setIsVisible(false);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold]);

  return { ref, isVisible, hasRevealed };
}