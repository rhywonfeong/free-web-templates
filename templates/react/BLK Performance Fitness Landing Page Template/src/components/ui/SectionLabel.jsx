import React from 'react';

export default function SectionLabel({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-4 mb-8 ${className}`}>
      <span className="w-8 h-[2px] bg-[var(--color-primary)]"></span>
      <h3 className="uppercase text-[12px] tracking-[0.12em] font-medium text-[var(--color-silver)]">
        {children}
      </h3>
    </div>
  );
}