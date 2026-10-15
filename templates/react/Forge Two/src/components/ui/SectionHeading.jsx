import React from 'react';

const SectionHeading = ({ eyebrow, title, highlightWords = [], description }) => {
  // Function to highlight specific words in the title
  const renderTitle = () => {
    if (!highlightWords.length) return title;
    
    let result = title;
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<span class="text-[#E8400A]">$1</span>');
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="mb-12 md:mb-16">
      {eyebrow && (
        <p className="font-display text-[#B0B0B0] tracking-[0.14em] uppercase text-[11px] mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-bold text-5xl md:text-7xl uppercase leading-[0.95] tracking-[-0.01em] text-white mb-6">
        {renderTitle()}
      </h2>
      {description && (
        <p className="text-[#B0B0B0] max-w-2xl text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;