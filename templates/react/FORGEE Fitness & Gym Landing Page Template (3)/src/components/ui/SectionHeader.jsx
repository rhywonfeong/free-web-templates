import React from 'react';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`flex flex-col gap-4 mb-16 ${align === 'center' ? 'items-center text-center' : ''}`}>
      {eyebrow && (
        <span className="text-[#E8400A] uppercase tracking-[0.14em] text-[11px] font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.0] text-white whitespace-pre-line">
        {title}
      </h2>
      {description && (
        <p className="text-[#B0B0B0] max-w-2xl text-[15px] leading-relaxed mt-2">
          {description}
        </p>
      )}
    </div>
  );
}