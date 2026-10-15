import React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  // Enforcing DS: Rounded 24px for CTAs, ExtraBold/Black weights for primary actions
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest transition-all duration-300 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-[24px]";
  
  const variants = {
    primary: "bg-brand-green text-neutral-950 hover:bg-brand-neon hover:-translate-y-0.5 focus:ring-brand-green shadow-glow-primary",
    secondary: "bg-neutral-800 text-neutral-50 hover:bg-brand-purple hover:text-neutral-50 focus:ring-brand-purple",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-neutral-950 shadow-[inset_0_0_0_1px_rgba(141,182,0,0.2)]",
    ghost: "text-neutral-200 hover:text-brand-green bg-transparent",
    nav: "bg-neutral-900 text-neutral-200 hover:text-brand-neon hover:bg-neutral-800 text-[11px]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    default: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base md:text-lg font-extrabold",
    nav: "px-6 py-2.5",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;