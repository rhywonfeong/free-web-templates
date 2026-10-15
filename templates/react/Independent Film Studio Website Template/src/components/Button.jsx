import { clsx } from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-sans uppercase tracking-[0.15em] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none overflow-hidden group";
  
  const variants = {
    primary: "border border-[#091728] bg-transparent text-[#091728]",
    ghost: "border-none bg-transparent text-[#091728] hover:text-[#cca950]",
  };
  
  const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-12 py-5 text-base",
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {/* Modern Sweep Animation Background */}
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-[#091728] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] -z-10"></span>
      )}
      
      {/* Text Container */}
      <span className={clsx(
        "relative z-10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        variant === 'primary' && "group-hover:text-[#f3f2ee]"
      )}>
        {children}
      </span>
    </button>
  );
}