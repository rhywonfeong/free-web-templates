import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function Button({ 
  children, 
  to, 
  variant = 'primary', 
  size = 'md', 
  className,
  type = 'button',
  onClick
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-indigo-500",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm focus:ring-slate-200",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
    dark: "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg focus:ring-slate-900",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-200"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}