import { clsx } from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  as: Component = 'button',
  icon,
  iconPosition = 'left',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-700 shadow-sm hover:shadow-md',
    secondary: 'bg-teal-50 text-teal-800 hover:bg-teal-100 focus:ring-teal-200 border border-teal-100',
    outline: 'bg-transparent text-slate-700 hover:bg-slate-50 border border-slate-200 focus:ring-slate-200',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:ring-slate-200',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <Component 
      className={clsx(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2 flex items-center">
          <iconify-icon icon={icon} width="1.2em"></iconify-icon>
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2 flex items-center">
          <iconify-icon icon={icon} width="1.2em"></iconify-icon>
        </span>
      )}
    </Component>
  );
}