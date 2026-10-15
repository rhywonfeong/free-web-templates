import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className,
  icon,
  type = 'button'
}) {
  const baseStyles = "inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#4862ff] text-white hover:bg-[#364ce6] hover:shadow-lg hover:shadow-[#4862ff]/20 focus:ring-[#4862ff]",
    secondary: "bg-white text-slate-700 border border-[#bdc7cc] hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-200 shadow-sm",
    outline: "bg-transparent text-[#4862ff] border border-[#4862ff] hover:bg-[#4862ff]/5 focus:ring-[#4862ff]",
    ghost: "bg-transparent text-slate-600 hover:text-[#4862ff] hover:bg-slate-50 focus:ring-slate-200"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const combinedClassName = clsx(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {icon && <iconify-icon icon={icon} width="1.2em"></iconify-icon>}
    </>
  );

  if (href) {
    // Distinguish external links if needed, but assuming internal for this project
    return (
      <Link to={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
}