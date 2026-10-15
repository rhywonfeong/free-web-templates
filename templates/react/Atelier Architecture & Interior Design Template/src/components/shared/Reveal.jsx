import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

export function Reveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className,
  threshold = 0.1
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only animate once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const directions = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: ""
  };

  return (
    <div 
      ref={ref} 
      className={clsx(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${directions[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}