import { cn } from '../../utils/cn';

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className,
  href,
  onClick,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center text-[13px] font-bold uppercase tracking-widest transition-all duration-200 px-8 py-4";
  
  const variants = {
    primary: "bg-[#E8400A] text-white hover:bg-[#FF4D0D] active:bg-[#C03200]",
    secondary: "bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/5",
    ghost: "bg-transparent text-[#B0B0B0] hover:text-white",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], widthStyle, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;