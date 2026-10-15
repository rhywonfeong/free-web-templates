import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Warm dark brown background as requested for the CTA banner */}
        <div className="bg-[#1a1614] rounded-[2.5rem] p-12 md:p-20 text-center border border-orange-900/20 relative overflow-hidden">
          
          {/* Subtle background pattern/glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <iconify-icon icon="solar:shield-check-linear" class="text-5xl text-orange-500 mb-6"></iconify-icon>
            
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            
            <p className="text-neutral-400 text-base mb-10 leading-relaxed">
              Join millions of users tracking their progress, improving their sleep, and crushing their fitness goals every single day.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link 
                to="/store" 
                className="w-full sm:w-auto flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(249,115,22,0.2)]"
              >
                Shop Products
              </Link>
              <Link 
                to="/about" 
                className="w-full sm:w-auto flex items-center justify-center bg-black/40 hover:bg-black/60 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;