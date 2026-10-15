import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, variant = 'up', delay = 0, className = '' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const getVariantStyles = () => {
    if (isVisible) return { transform: 'translate(0) scale(1)', opacity: 1 };
    switch (variant) {
      case 'up': return { transform: 'translateY(24px)', opacity: 0 };
      case 'left': return { transform: 'translateX(-32px)', opacity: 0 };
      case 'right': return { transform: 'translateX(32px)', opacity: 0 };
      case 'scale': return { transform: 'scale(0.95)', opacity: 0 };
      default: return { transform: 'translateY(24px)', opacity: 0 };
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getVariantStyles(),
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}