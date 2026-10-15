import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  className, 
  onClick, 
  type = 'button' 
}) {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-widest text-[13px] px-8 py-4 rounded-full transition-all duration-300 whitespace-nowrap";
  
  const variants = {
    primary: "bg-acid text-[#111111] font-bold hover:bg-[#A8D832] hover:scale-[1.02] shadow-none",
    outline: "bg-transparent border border-[#111111] text-[#111111] font-bold hover:bg-[#111111] hover:text-white",
    outlineDark: "bg-transparent border border-white text-white font-bold hover:bg-white hover:text-[#111111]",
  };

  const classes = clsx(baseStyles, variants[variant], className);

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}