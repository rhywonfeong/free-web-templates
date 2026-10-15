import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

export function Reveal({ children, className, type = 'up', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal();

  const baseClass = type === 'up' ? 'reveal-up' : 'reveal-scale';
  
  return (
    <div 
      ref={ref} 
      className={clsx(baseClass, className, isVisible && 'is-visible')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}