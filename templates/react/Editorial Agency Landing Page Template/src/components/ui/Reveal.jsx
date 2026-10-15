import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export default function Reveal({ children, className, delay = 0, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    none: 'scale-95'
  };

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)',
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-0' 
          : `opacity-0 blur-[10px] ${directionClasses[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}