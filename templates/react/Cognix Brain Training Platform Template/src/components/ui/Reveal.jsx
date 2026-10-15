import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { clsx } from 'clsx';

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useScrollReveal();

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      default: return 'translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        'transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getTransform()}`,
        className
      )}
    >
      {children}
    </div>
  );
}