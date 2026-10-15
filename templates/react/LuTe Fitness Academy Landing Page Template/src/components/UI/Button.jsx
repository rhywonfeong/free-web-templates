import React from 'react';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}, ref) => {
  
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#00F9E4] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] active:scale-95";
  
  const variants = {
    primary: "bg-[#00F9E4] text-[#0A0A0A] hover:bg-[#33FFEE] hover:shadow-[0_0_20px_rgba(0,249,228,0.4)]",
    secondary: "bg-[#1C1C1C] text-[#F5F5F5] border border-[#2A2A2A] hover:border-[#00F9E4] hover:text-[#00F9E4]",
    ghost: "text-[#CFCFCF] hover:text-[#00F9E4] bg-transparent hover:bg-[#121212]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
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