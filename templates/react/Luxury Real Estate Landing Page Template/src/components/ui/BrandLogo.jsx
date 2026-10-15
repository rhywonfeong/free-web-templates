import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo() {
  return (
    <Link to="/" className="flex items-center gap-3 group relative z-50 transition-transform duration-300 hover:scale-[1.02]">
      {/* 
        Recreating the requested logo style: 
        Black background context, dark charcoal roof, warm golden/orange monogram.
        Using a structural flex layout to match the geometric composition described.
      */}
      <div className="flex flex-col items-center justify-center pt-1">
        {/* Roofline shape - dark charcoal gray */}
        <iconify-icon 
          icon="solar:alt-arrow-up-linear" 
          style={{ fontSize: '32px', color: '#3f3f46', marginBottom: '-14px', fontWeight: 'bold' }}
        ></iconify-icon>
        
        {/* Monogram - warm yellow-orange / golden amber */}
        <div className="text-[#DCA11D] font-bold text-3xl tracking-tighter leading-none flex items-center">
          <span>R</span>
          <span className="-ml-1">B</span>
        </div>
      </div>
      
      {/* Optional textual name for context, matching the minimal aesthetic */}
      <span className="text-white font-medium text-lg tracking-tight ml-1 opacity-90 group-hover:opacity-100 transition-opacity hidden sm:block">
        RENTBASE
      </span>
    </Link>
  );
}