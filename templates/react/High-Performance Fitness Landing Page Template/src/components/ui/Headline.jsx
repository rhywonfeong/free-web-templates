import React from 'react';
import { clsx } from 'clsx';

const Headline = ({ children, as: Component = 'h2', size = 'default', className, highlightWords = [] }) => {
  
  const sizes = {
    hero: "text-6xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[0.9]",
    large: "text-5xl md:text-6xl lg:text-7xl leading-[1]",
    default: "text-4xl md:text-5xl leading-[1.1]",
    small: "text-2xl md:text-3xl leading-[1.2]"
  };

  // Logic to highlight specific words in the brand fire color if requested
  const renderContent = () => {
    if (!highlightWords.length || typeof children !== 'string') return children;
    
    let content = children;
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      content = content.replace(regex, '|||$1|||');
    });

    return content.split('|||').map((part, i) => {
      const isHighlight = highlightWords.some(w => w.toLowerCase() === part.toLowerCase());
      return isHighlight ? (
        <span key={i} className="text-[#FF3A00]">{part}</span>
      ) : (
        <span key={i}>{part}</span>
      );
    });
  };

  return (
    <Component className={clsx("font-display font-bold uppercase tracking-tight text-[#F5F5F5]", sizes[size], className)}>
      {renderContent()}
    </Component>
  );
};

export default Headline;