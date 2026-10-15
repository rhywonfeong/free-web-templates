import { clsx } from 'clsx';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ children, className, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible 
          ? "opacity-100 translate-y-0 scale-100 blur-0" 
          : "opacity-0 translate-y-16 scale-[0.98] blur-[2px]",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}