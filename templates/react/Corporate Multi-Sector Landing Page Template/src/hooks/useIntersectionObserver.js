import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * @param {Object} options - IntersectionObserver options (root, rootMargin, threshold)
 * @param {boolean} triggerOnce - Whether the animation should only trigger once
 * @returns {[React.RefObject, boolean]} - Ref to attach to the element, and boolean if it's intersecting
 */
export function useIntersectionObserver(options = {}, triggerOnce = true) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isElementIntersecting = entry.isIntersecting;
      
      if (isElementIntersecting) {
        setIsIntersecting(true);
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsIntersecting(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, triggerOnce]);

  return [ref, isIntersecting];
}