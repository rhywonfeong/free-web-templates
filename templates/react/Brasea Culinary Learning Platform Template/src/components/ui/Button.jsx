import React from 'react';
import clsx from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  fullWidth,
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-display font-medium rounded-lg transition-all duration-200 outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-dark";
  
  const variants = {
    primary: "bg-brand text-white shadow-glow hover:bg-[#CF875E] hover:shadow-glow-lg hover:-translate-y-[1px] active:translate-y-0",
    secondary: "bg-card text-light border-strong hover:border-brand hover:text-brand",
    outline: "bg-transparent text-light border border-subtle hover:border-brand hover:text-brand hover:bg-brand/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-[17px]"
  };

  return (
    <button 
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
      {icon && <iconify-icon icon={icon} width="20" height="20" className="opacity-80"></iconify-icon>}
    </button>
  );
};

export default Button;