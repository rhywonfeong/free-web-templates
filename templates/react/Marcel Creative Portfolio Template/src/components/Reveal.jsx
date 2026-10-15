import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export default function Reveal({ children, className, delay = 0, width = '100%' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref} style={{ width }} className={clsx("overflow-hidden", className)}>
      <div
        className={clsx(
          "reveal-hidden w-full",
          isVisible && "reveal-visible"
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}