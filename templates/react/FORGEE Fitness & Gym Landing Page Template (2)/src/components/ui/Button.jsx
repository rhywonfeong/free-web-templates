import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className, 
  onClick, 
  type = 'button',
  fullWidth = false,
  icon
}) {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-widest text-xs font-bold transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-[#E8400A] text-white hover:bg-[#FF4D0D] border-none",
    secondary: "bg-[#1E1E1E] text-white hover:bg-[#2A2A2A] border border-[#2A2A2A]",
    ghost: "bg-transparent text-[#B0B0B0] hover:text-white border border-transparent hover:border-[#2A2A2A]",
    outline: "bg-transparent text-white border border-[#E8400A] hover:bg-[#E8400A]/10"
  };

  const sizes = "py-4 px-8"; // Standardized meaty button size

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes,
        fullWidth ? "w-full" : "",
        className
      )}
    >
      {children}
      {icon && (
        <span className="ml-2 flex items-center">
          <iconify-icon icon={icon} width="16" height="16"></iconify-icon>
        </span>
      )}
    </button>
  );
}