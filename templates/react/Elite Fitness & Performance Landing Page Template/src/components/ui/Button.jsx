const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center text-xs font-bold uppercase tracking-wide-label transition-all duration-300";
  
  const variants = {
    primary: "px-8 py-4 bg-[#E8201A] text-white rounded-full hover:bg-[#CC1810] hover:shadow-[0_0_24px_rgba(232,32,26,0.4)]",
    secondary: "px-8 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white/10",
    ghost: "px-6 py-3 text-white hover:text-[#E8201A]",
    accent: "px-8 py-4 bg-[#39FF14] text-black rounded-full hover:bg-[#32E012] shadow-[0_0_20px_rgba(57,255,20,0.3)]"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;