import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { clsx } from 'clsx';

export function Reveal({ children, delay = 0, className = '', direction = 'up' }) {
  const [ref, isVisible] = useReveal();

  const getTransform = () => {
    if (isVisible) return 'translate-y-0 translate-x-0';
    switch (direction) {
      case 'up': return 'translate-y-12';
      case 'down': return '-translate-y-12';
      case 'left': return 'translate-x-12';
      case 'right': return '-translate-x-12';
      default: return 'translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-[1200ms] ease-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        getTransform(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}