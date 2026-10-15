import React from 'react';

// Recreates the logo styling based on the visual analysis
export default function BrandLogo({ className = "", light = false }) {
  const textColor = light ? "text-white" : "text-[#171717]";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract Symbol Representation */}
      <div className="relative flex items-center justify-center w-8 h-8">
        <div className="absolute w-5 h-8 bg-[#3B5DE5] rounded-full left-0 origin-bottom transform rotate-12"></div>
        <div className="absolute w-6 h-6 border-4 border-[#3B5DE5] rounded-full right-0 top-0"></div>
        <div className="absolute w-4 h-4 bg-white rounded-full right-1 top-1"></div>
      </div>
      {/* Wordmark */}
      <span className={`font-extrabold text-2xl tracking-tighter lowercase ${textColor} leading-none mt-1`}>
        raketly
      </span>
    </div>
  );
}