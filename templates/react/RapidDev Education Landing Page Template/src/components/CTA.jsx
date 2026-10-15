import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#333333]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#E76F9B]/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 reveal">
        <h2 className="font-semibold text-3xl md:text-5xl tracking-tight mb-6 leading-tight text-white">
          Stop waiting for developers. Start building <span className="text-[#E76F9B]">your ideas today!</span>
        </h2>
        <p className="text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed text-gray-300">
          Join thousands of founders, designers, and career transitioners who are shaping the future of software development through no-code.
        </p>
        
        <button className="bg-[#E76F9B] px-10 py-4 rounded-full text-base font-medium hover:text-[#E76F9B] transition-colors duration-300 shadow-xl shadow-[#E76F9B]/20 flex items-center justify-center gap-3 mx-auto group text-white hover:bg-white">
          Enroll Now
          <iconify-icon icon="solar:square-academic-cap-linear" width="20" strokeWidth="1.5" className="group-hover:-translate-y-1 transition-transform"></iconify-icon>
        </button>
        <p className="text-xs mt-4 text-gray-400">14-day money-back guarantee • Lifetime access</p>
      </div>
    </section>
  );
}