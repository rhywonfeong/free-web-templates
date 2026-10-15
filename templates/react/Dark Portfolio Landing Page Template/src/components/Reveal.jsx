import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

export default function Reveal({ children, className, delay = 0, direction = 'up' }) {
  const { ref, isVisible } = useScrollReveal();

  const baseClasses = "transition-all duration-1000 ease-out";
  
  const directionClasses = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "scale-95"
  };

  const hiddenState = `opacity-0 ${directionClasses[direction]}`;
  const visibleState = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        baseClasses,
        isVisible ? visibleState : hiddenState,
        className
      )}
    >
      {children}
    </div>
  );
}