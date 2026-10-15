import { clsx } from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center gap-2 font-bold uppercase tracking-wide transition-all duration-200 active:scale-95";
  
  const variants = {
    primary: "bg-[#E84E1B] text-white hover:bg-[#F26132] shadow-[0_4px_14px_rgba(232,78,27,0.3)] hover:shadow-[0_6px_20px_rgba(232,78,27,0.4)] border border-transparent",
    secondary: "bg-white text-[#141414] hover:bg-neutral-200 border border-transparent",
    outline: "bg-transparent text-white border-2 border-white/20 hover:border-white/60 hover:bg-white/5",
    amber: "bg-[#F5C518] text-[#141414] hover:bg-[#FFD740] shadow-[0_4px_14px_rgba(245,197,24,0.3)]",
  };

  const sizes = {
    sm: "text-xs px-5 py-2.5 rounded-lg",
    md: "text-sm px-8 py-4 rounded-xl",
    lg: "text-base px-10 py-5 rounded-xl",
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && <iconify-icon icon={icon} class="text-lg"></iconify-icon>}
    </button>
  );
};

export default Button;