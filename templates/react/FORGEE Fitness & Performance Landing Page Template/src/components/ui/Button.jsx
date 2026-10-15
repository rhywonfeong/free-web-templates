import { clsx } from 'clsx';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-wide font-semibold transition-all duration-200";
  
  const variants = {
    primary: "bg-[#E8400A] text-white hover:bg-[#FF4D0D] active:bg-[#C03200] rounded-none",
    secondary: "bg-transparent text-white border border-[#2A2A2A] hover:border-[#6B6B6B] rounded-none",
    ghost: "bg-transparent text-[#B0B0B0] hover:text-white rounded-none"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}