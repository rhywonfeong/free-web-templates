import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Reveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className,
  once = false 
}) {
  const { ref, isVisible, hasRevealed } = useScrollReveal();
  
  const show = once ? hasRevealed : isVisible;

  return (
    <div 
      ref={ref} 
      className={clsx(
        'reveal-wrapper', 
        show ? 'reveal-visible' : 'reveal-hidden',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={clsx(`anim-${animation}`, 'w-full h-full')}>
        {children}
      </div>
    </div>
  );
}