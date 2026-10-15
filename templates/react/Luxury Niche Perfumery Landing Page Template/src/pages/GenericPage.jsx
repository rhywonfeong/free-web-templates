import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GenericPage({ title }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <main className="flex-1 w-full flex flex-col justify-center items-center py-32 px-6 relative z-10 min-h-[70vh] bg-[#050505]">
      <div className="max-w-2xl text-center flex flex-col items-center">
        <div className="w-16 h-16 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059] mb-8">
          <iconify-icon icon="solar:crown-star-linear" width="32" height="32"></iconify-icon>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-white mb-6 font-normal">
          {title}
        </h1>
        <p className="text-white/50 mb-12 leading-relaxed max-w-md font-light">
          This exclusive area of the Maison is currently being prepared for presentation. Please return shortly to discover the full experience.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A059] hover:text-white transition-colors"
        >
          <iconify-icon icon="solar:arrow-left-linear" width="16" height="16"></iconify-icon>
          Return to Index
        </Link>
      </div>
    </main>
  );
}