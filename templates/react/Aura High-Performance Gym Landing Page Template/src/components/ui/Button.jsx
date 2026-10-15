import React from 'react';
import { clsx } from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  href, 
  onClick,
  icon
}) => {
  const baseStyles = "inline-flex items-center gap-2 justify-center font-display uppercase tracking-widest font-bold transition-all duration-300";
  
  const variants = {
    primary: "bg-[#AAFF00] text-[#0D0F0A] hover:bg-[#C8FF00] neon-glow-hover rounded-full",
    secondary: "bg-transparent text-white border border-[#333333] hover:border-[#AAFF00] hover:bg-[#AAFF00]/5 rounded-full",
    ghost: "text-[#CCCCCC] hover:text-[#AAFF00] bg-transparent p-0",
  };

  const sizes = {
    sm: "py-2 px-6 text-sm",
    md: "py-3 px-8 text-base",
    lg: "py-4 px-10 text-lg",
  };

  const combinedStyles = clsx(
    baseStyles,
    variants[variant],
    variant !== 'ghost' && sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
        {icon && <iconify-icon icon={icon} class="text-xl"></iconify-icon>}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
      {icon && <iconify-icon icon={icon} class="text-xl"></iconify-icon>}
    </button>
  );
};

export default Button;