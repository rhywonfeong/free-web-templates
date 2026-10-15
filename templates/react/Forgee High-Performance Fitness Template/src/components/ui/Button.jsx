import React from 'react';
import clsx from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  iconRight = false,
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold uppercase tracking-[1px] transition-all duration-[150ms] ease-out rounded-xl whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-[#E84E0F] focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-[#E84E0F] text-white shadow-[0_4px_24px_rgba(232,78,15,0.25)] hover:bg-[#FF5500] hover:shadow-[0_6px_32px_rgba(232,78,15,0.35)] hover:-translate-y-[1px] active:bg-[#D93A00]",
    secondary: "bg-transparent border-[1.5px] border-[#1E1B18] text-[#1E1B18] hover:border-[#E84E0F] hover:text-[#E84E0F] active:bg-[#F8F7F6]",
    secondaryLight: "bg-transparent border-[1.5px] border-white text-white hover:border-[#E84E0F] hover:text-[#E84E0F] active:bg-white/10",
    ghost: "bg-[#F0EEEC] border border-[#E6E3E0] text-[#1E1B18] hover:bg-[#FFF0E8] hover:border-brand-orange/30 hover:text-[#E84E0F]",
    brand: "brand-gradient text-white shadow-[0_4px_24px_rgba(232,78,15,0.35)] hover:shadow-[0_8px_40px_rgba(232,78,15,0.5)] hover:-translate-y-[1px]"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[12px]",
    md: "px-8 py-3.5 text-[14px]",
    lg: "px-10 py-4 text-[15px]"
  };

  return (
    <button 
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {!iconRight && icon && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
      {iconRight && icon && <span className="ml-2 flex items-center">{icon}</span>}
    </button>
  );
};

export default Button;