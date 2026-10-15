export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest text-xs uppercase transition-all duration-300 px-8 py-4";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 hover:scale-[1.02]",
    secondary: "bg-zinc-900/80 backdrop-blur-sm text-white border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700",
    ghost: "text-zinc-400 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}