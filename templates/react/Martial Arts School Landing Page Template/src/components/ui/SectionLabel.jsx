import React from 'react';

export default function SectionLabel({ children }) {
  return (
    <span className="text-[#E8193C] uppercase tracking-[0.15em] font-bold text-xs md:text-sm border-b-2 border-[#E8193C] pb-1 inline-block mb-6">
      {children}
    </span>
  );
}