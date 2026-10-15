import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 lg:py-32 px-6 bg-[#0B0614] border-[#E9E9F1] border-b">
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="lg:text-4xl text-3xl font-normal text-white tracking-tight font-roboto mb-12">
          See Alris in Action
        </h2>

        <div className="aspect-video bg-[#0F0F14] rounded-xl overflow-hidden relative shadow-lg group cursor-pointer border border-[#2A2A35]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A22] to-[#2A2A35] opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          {/* Abstract UI representation inside video placeholder */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-[#8624FF] group-hover:w-full transition-all duration-1000 ease-out"></div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(134,36,255,0.2)] group-hover:shadow-[0_0_30px_rgba(134,36,255,0.4)]">
              <iconify-icon icon="solar:play-circle-linear" width="32" height="32" className="text-white"></iconify-icon>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <a href="#" className="bg-[#721ED9] hover:bg-[#8624FF] transition-all text-base font-normal text-white rounded-lg py-3 px-6 shadow-[0_0_15px_rgba(134,36,255,0.3)] hover:shadow-[0_0_25px_rgba(134,36,255,0.5)]">
            Book Live Demo
          </a>
          <a href="#" className="bg-white border border-[#E9E9F1] text-[#1A1A22] text-base font-normal py-3 px-6 rounded-lg hover:bg-[#F5F5FA] transition-all shadow-sm">
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;