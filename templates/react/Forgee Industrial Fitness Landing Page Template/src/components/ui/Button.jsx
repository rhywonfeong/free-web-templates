import React from 'react';
import { cn } from '../../lib/utils';

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  icon,
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-body font-medium transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:scale-[1.02]";
  
  const variants = {
    primary: "bg-[#CCFF33] text-[#090909] rounded-full hover:bg-[#AAEE00] shadow-[0_0_0_rgba(204,255,51,0)] hover:shadow-[0_0_20px_rgba(204,255,51,0.25)]",
    secondary: "bg-transparent text-[#F2F2F2] border border-[#2A2A2A] rounded-md hover:border-[#CCFF33] hover:text-[#CCFF33]",
    ghost: "bg-transparent text-[#999999] hover:text-white rounded-md",
    icon: "bg-[#1A1A1A] text-white border border-[#2A2A2A] rounded-full hover:border-[#CCFF33] hover:text-[#CCFF33] p-0"
  };

  const sizes = {
    sm: "text-[12px] px-3 py-1.5",
    md: "text-[14px] px-7 py-3",
    lg: "text-[16px] px-8 py-4",
    iconSm: "w-8 h-8",
    iconMd: "w-11 h-11",
  };

  const currentSize = variant === 'icon' ? sizes.iconMd : sizes[size];

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], currentSize, className)}
      {...props}
    >
      {children}
      {icon && (
        <span className={cn("ml-2 flex items-center", children ? "" : "ml-0")}>
          <iconify-icon icon={icon} width="20" height="20"></iconify-icon>
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';