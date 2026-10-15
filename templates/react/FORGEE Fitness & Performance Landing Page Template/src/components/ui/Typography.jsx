export function Eyebrow({ children, className = "" }) {
  return (
    <span className={`block text-xs font-medium tracking-wide uppercase text-[#E8400A] mb-4 ${className}`}>
      {children}
    </span>
  );
}

export function Headline({ 
  text, 
  highlight = "", 
  highlightColor = "text-[#E8400A]",
  size = "lg",
  as: Component = "h2"
}) {
  const sizes = {
    xl: "text-6xl md:text-8xl lg:text-9xl", // Display
    lg: "text-5xl md:text-6xl lg:text-7xl", // H1
    md: "text-4xl md:text-5xl",             // H2
  };

  // Logic to color specific words based on the highlight prop
  const renderText = () => {
    if (!highlight) return text;
    
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() 
        ? <span key={i} className={highlightColor}>{part}</span>
        : part
    );
  };

  return (
    <Component className={`font-display font-extrabold tracking-tight uppercase leading-[0.95] ${sizes[size]}`}>
      {renderText()}
    </Component>
  );
}