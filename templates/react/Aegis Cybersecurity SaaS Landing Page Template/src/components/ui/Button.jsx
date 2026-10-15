import React from 'react';
import { clsx } from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
    outline: "bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10",
    ghost: "bg-white/[0.03] text-white border border-white/10 hover:border-white/30 hover:bg-white/[0.08]"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3.5 text-sm uppercase",
    lg: "px-10 py-4 text-base uppercase"
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && (
        <span className="ml-2 flex items-center">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;