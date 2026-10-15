import { clsx } from 'clsx';

export function Headline({ children, variant = 'white', className, as: Component = 'h1' }) {
  return (
    <Component 
      className={clsx(
        "font-sans font-black uppercase tracking-tighter leading-[0.85] text-center",
        variant === 'white' && "text-white",
        variant === 'silver' && "bg-silver-gradient bg-clip-text text-transparent",
        variant === 'accent-cyan' && "text-accent-cyan",
        variant === 'accent-yellow' && "text-accent-yellow",
        variant === 'accent-pink' && "text-accent-pink",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function MonoText({ children, className, variant = 'body' }) {
  return (
    <p 
      className={clsx(
        "font-mono text-white leading-relaxed",
        variant === 'body' && "text-[32px]",
        variant === 'code' && "text-[26px]",
        variant === 'caption' && "text-[24px] text-gray-400",
        className
      )}
    >
      {children}
    </p>
  );
}