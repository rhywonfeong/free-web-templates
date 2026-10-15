import React from 'react';
import { clsx } from 'clsx';

const SectionHeader = ({ tag, title, subtitle, alignment = 'left', className }) => {
  return (
    <div className={clsx("mb-16", alignment === 'center' && "text-center mx-auto", className)}>
      {tag && (
        <div className={clsx("flex items-center gap-3 mb-4", alignment === 'center' && "justify-center")}>
          <span className="w-8 h-[2px] bg-[#FF6B00]"></span>
          <span className="font-display text-[#AAFF00] uppercase tracking-[0.15em] text-sm font-bold">
            {tag}
          </span>
        </div>
      )}
      <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.1] mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#CCCCCC] text-lg max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;