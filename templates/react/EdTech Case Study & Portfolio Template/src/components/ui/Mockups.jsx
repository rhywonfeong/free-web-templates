import React from 'react';

export function LaptopMockup({ imageUrl, alt }) {
  return (
    <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
      <div className="relative rounded-xl md:rounded-2xl border border-[#2E2E2E] bg-[#1A1A1A] p-2 md:p-4 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
        <div className="absolute top-0 inset-x-0 h-4 md:h-6 bg-[#1A1A1A] flex items-center justify-center">
          <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-[#333] mt-1 md:mt-2"></div>
        </div>
        <div className="mt-2 md:mt-4 overflow-hidden rounded-md md:rounded-lg border border-[#2E2E2E] bg-black aspect-[16/10]">
          <img src={imageUrl} alt={alt} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      {/* Laptop Base */}
      <div className="w-[110%] -ml-[5%] h-3 md:h-4 bg-[#222] rounded-b-xl border-t border-[#333] shadow-lg flex justify-center">
         <div className="w-24 md:w-32 h-1 md:h-2 bg-[#111] rounded-b-md"></div>
      </div>
    </div>
  );
}

export function MobileMockup({ imageUrl, alt }) {
  return (
    <div className="relative w-[280px] md:w-[320px] mx-auto flex-shrink-0">
      <div className="relative rounded-[2.5rem] border-[6px] border-[#1A1A1A] bg-black p-1 shadow-2xl ring-1 ring-[#2E2E2E] overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-10">
          <div className="w-32 h-6 bg-[#1A1A1A] rounded-b-2xl"></div>
        </div>
        <div className="overflow-hidden rounded-[2rem] aspect-[9/19.5] bg-[#0A0A0A]">
          <img src={imageUrl} alt={alt} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
}