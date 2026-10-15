import { clsx } from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-500 hover:shadow-lg hover:-translate-y-0.5 focus:ring-teal-500",
    secondary: "bg-transparent border border-blue-200 text-blue-900 hover:bg-blue-50 focus:ring-blue-500",
    outlineWhite: "bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white focus:ring-white",
    accent: "bg-yellow-500 text-slate-900 hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-0.5 focus:ring-yellow-500",
    white: "bg-white text-teal-700 hover:bg-slate-50 hover:shadow-md focus:ring-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg"
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && (
        <span className="mr-2 flex items-center">
          <iconify-icon icon={icon} width="20" height="20"></iconify-icon>
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;