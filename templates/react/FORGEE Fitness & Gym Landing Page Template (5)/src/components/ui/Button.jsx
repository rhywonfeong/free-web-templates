import React from 'react';
import { clsx } from 'clsx';

const Button = ({ children, variant = 'primary', size = 'md', className, icon, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-[#E02020] text-white hover:bg-[#E94040] shadow-[0_0_15px_rgba(224,32,32,0.3)] hover:shadow-[0_0_25px_rgba(224,32,32,0.6)] rounded-none",
    secondary: "bg-[#222222] text-white hover:bg-[#2E2E2E] border border-[#2E2E2E] hover:border-[#E02020] rounded-none",
    outline: "bg-transparent text-white border border-[#2E2E2E] hover:border-white rounded-none",
    ghost: "bg-transparent text-neutral-400 hover:text-white rounded-none",
    pillHero: "bg-white text-black rounded-full pl-6 pr-2 py-2 hover:scale-105 shadow-lg", // Specific style from reference image
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-8 py-4",
    lg: "text-base px-10 py-5",
    pill: "text-sm font-bold",
  };

  if (variant === 'pillHero') {
    return (
      <button className={clsx(baseStyles, variants[variant], sizes.pill, className)} {...props}>
        <span className="mr-4">{children}</span>
        <div className="w-10 h-10 bg-[#FF4500] rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300">
          <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
        </div>
      </button>
    );
  }

  return (
    <button className={clsx(baseStyles, variants[variant], sizes[size], className)} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <iconify-icon icon={icon} width="18"></iconify-icon>}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500] to-[#E02020] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
      )}
    </button>
  );
};

export default Button;