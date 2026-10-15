import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, variant = 'primary', className, icon, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variants = {
    primary: "bg-[#9333EA] text-white hover:bg-[#7e22ce] shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]",
    secondary: "bg-transparent text-[#F0F0F0] border border-[#F0F0F0] hover:bg-white/5",
    ghost: "bg-transparent text-white hover:bg-white/10"
  };

  return (
    <button 
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      {...props}
    >
      {children}
      {icon && <iconify-icon icon={icon} class="text-lg"></iconify-icon>}
    </button>
  );
};

export default Button;