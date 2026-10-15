import { clsx } from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  as: Component = 'button',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow focus:ring-indigo-500",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm focus:ring-slate-200",
    outline: "bg-transparent text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:ring-slate-200",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-200"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  return (
    <Component 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;