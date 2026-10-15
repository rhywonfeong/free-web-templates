import React from 'react';
import clsx from 'clsx';

export const Label = ({ children, className }) => (
  <span className={clsx("block text-[10px] md:text-xs font-medium uppercase tracking-[0.12em] text-[#6B6259]", className)}>
    {children}
  </span>
);

export const Display = ({ children, className }) => (
  <h1 className={clsx("text-6xl md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter uppercase leading-[0.95]", className)}>
    {children}
  </h1>
);

export const H2 = ({ children, className }) => (
  <h2 className={clsx("text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase leading-tight", className)}>
    {children}
  </h2>
);

export const BodyText = ({ children, className }) => (
  <p className={clsx("text-base md:text-lg text-[#6B6259] leading-relaxed", className)}>
    {children}
  </p>
);

export const SectionMarker = ({ current, total }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="w-8 h-[1px] bg-[#1A1812]"></div>
    <span className="text-xs font-medium tracking-widest text-[#1A1812]">
      {current} / {total}
    </span>
  </div>
);