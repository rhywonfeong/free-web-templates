import React from 'react';

const SectionHeader = ({ eyebrow, title, subtitle, align = 'left', className = '' }) => {
  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <span className="text-[#888780] text-xs font-semibold uppercase tracking-[0.06em]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] whitespace-pre-line">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#888780] text-base md:text-lg max-w-2xl leading-relaxed whitespace-pre-line">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;