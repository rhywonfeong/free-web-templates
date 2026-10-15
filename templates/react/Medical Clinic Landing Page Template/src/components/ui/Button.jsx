import { cn } from "../../lib/utils";

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-800 text-white hover:bg-blue-900", // Cobalt Blue inspired
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200", // Light gray
    outline: "border-2 border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}