import React from 'react';

export default function Hero() {
  return (
    <section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDE2E4] rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E76F9B] rounded-full blur-[120px] opacity-10 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-x-16 gap-y-16 items-center">
          
          <div className="flex flex-col gap-6 z-10 lg:text-left text-center relative">
            <div className="inline-flex items-center gap-2 bg-[#FDE2E4] text-[#E76F9B] px-4 py-1.5 rounded-full text-xs font-medium mx-auto lg:mx-0 w-max reveal">
              <iconify-icon icon="solar:laptop-minimalistic-linear" width="14" strokeWidth="1.5"></iconify-icon>
              #1 No-Code Learning Platform
            </div>

            <h1 className="leading-[1.1] reveal delay-100 md:text-6xl lg:text-5xl text-5xl font-semibold text-[#333333] tracking-tight">
              Build your dream app without writing <span className="inline-block text-[#E76F9B] relative">
                Code
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FDE2E4] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 reveal delay-200">
              Join the largest no-code bootcamp and learn to build software 10x faster. Master tools like Bubble and Webflow to launch your MVP in weeks, not months.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start reveal delay-300">
              <a href="#solution" className="w-full sm:w-auto bg-[#E76F9B] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#d45c88] hover:shadow-xl hover:shadow-[#FDE2E4] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-white">
                View Bootcamps
                <iconify-icon icon="solar:arrow-right-linear" width="18" strokeWidth="1.5"></iconify-icon>
              </a>
              <a href="#cta" className="w-full sm:w-auto px-6 py-3.5 text-gray-500 text-sm font-medium hover:text-[#E76F9B] transition-colors flex items-center justify-center gap-2">
                <iconify-icon icon="solar:play-circle-linear" width="20" strokeWidth="1.5"></iconify-icon>
                Watch Curriculum
              </a>
            </div>

            <div className="flex gap-3 text-sm font-medium text-[#333333] items-center justify-center lg:justify-start mt-2">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces" alt="Student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces" alt="Student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces" alt="Student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              </div>
              <span>Trusted by 10,000+ graduates</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end reveal delay-200">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#FDE2E4]/50">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Students learning" />
              <div className="bg-gradient-to-t from-[#333333]/60 via-transparent to-transparent absolute inset-0"></div>
            </div>

            <div className="-left-6 lg:-left-12 glass-panel animate-float w-[200px] rounded-2xl p-4 absolute top-1/4 shadow-xl">
              <div className="flex gap-1 mb-2 text-yellow-400">
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              </div>
              <p className="text-xs font-medium text-[#333333] mb-1">Amazing curriculum!</p>
              <p className="text-xs text-gray-500">New student review</p>
            </div>

            <div className="-right-4 lg:-right-8 glass-panel animate-float delay-100 flex gap-3 w-[220px] rounded-2xl p-4 absolute bottom-1/4 shadow-xl items-center">
              <div className="w-10 h-10 rounded-full bg-[#E76F9B] flex items-center justify-center shrink-0 text-white">
                <iconify-icon icon="solar:diploma-linear" width="20" strokeWidth="1.5"></iconify-icon>
              </div>
              <div>
                <p className="text-xs font-medium text-[#333333]">Course Completed</p>
                <p className="text-xs text-gray-500 mt-0.5">Alex - Bubble Foundations</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}