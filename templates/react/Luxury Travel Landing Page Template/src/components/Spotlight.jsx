import React from 'react';

const Spotlight = () => {
  return (
    <section className="md:py-24 z-20 font-inter bg-[#F4F4F5] w-full border-slate-200/50 border-t pt-16 pb-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-14">
        <h2 className="md:text-4xl lg:text-5xl uppercase text-3xl text-[#1F3E3D] tracking-tight font-oswald mb-4">Portalra Escape Spotlight</h2>
        <p className="md:text-base leading-relaxed text-sm font-light text-slate-600 max-w-2xl">Discover what's happening in the world of Portalra Escape from the latest luxury travel insights to your exclusive member privileges.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(31,62,61,0.04)] flex flex-col group border border-slate-200/60 hover:shadow-[0_12px_40px_rgba(31,62,61,0.08)] transition-all duration-500 hover:-translate-y-1">
          <div className="relative h-48 md:h-52 overflow-hidden bg-slate-100">
            <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1000&auto=format&fit=crop" alt="Exclusive Offers" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
            <h3 className="font-oswald text-xl uppercase tracking-tight text-[#1F3E3D] mb-3">Exclusive Offers</h3>
            <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">
              Unlock special rates on private villas and chartered yachts in the world's most sought-after destinations, including the Amalfi Coast and Santorini.
            </p>
            <a href="#" className="text-[#C8A96A] font-normal text-sm mt-auto inline-flex items-center gap-1.5 hover:text-[#1F3E3D] transition-colors w-fit group/link">
              View Offers
              <iconify-icon icon="lucide:arrow-right" class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"></iconify-icon>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(31,62,61,0.04)] flex flex-col group border border-slate-200/60 hover:shadow-[0_12px_40px_rgba(31,62,61,0.08)] transition-all duration-500 hover:-translate-y-1">
          <div className="relative h-48 md:h-52 overflow-hidden bg-slate-100">
            <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop" alt="Portora Moments" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
            <h3 className="uppercase text-xl text-[#1F3E3D] tracking-tight font-oswald mb-3">Portalra Moments</h3>
            <p className="leading-relaxed flex-grow text-sm font-light text-slate-600 mb-6">
              Immerse yourself in authentic luxury. Discover what curated, private travel truly feels like through our members' extraordinary journeys.
            </p>
            <a href="#" className="text-[#C8A96A] font-normal text-sm mt-auto inline-flex items-center gap-1.5 hover:text-[#1F3E3D] transition-colors w-fit group/link">
              Explore Moments
              <iconify-icon icon="lucide:arrow-right" class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"></iconify-icon>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(31,62,61,0.04)] flex flex-col group border border-slate-200/60 hover:shadow-[0_12px_40px_rgba(31,62,61,0.08)] transition-all duration-500 hover:-translate-y-1">
          <div className="relative h-48 md:h-52 overflow-hidden bg-slate-100">
            <img src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=1000&auto=format&fit=crop" alt="Private Retreats" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
            <h3 className="font-oswald text-xl uppercase tracking-tight text-[#1F3E3D] mb-3">Private Retreats</h3>
            <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">
              Experience curated seclusion and utmost privacy. Connect with yourself in the world's most serene and exclusive properties.
            </p>
            <a href="#" className="text-[#C8A96A] font-normal text-sm mt-auto inline-flex items-center gap-1.5 hover:text-[#1F3E3D] transition-colors w-fit group/link">
              Find Your Retreat
              <iconify-icon icon="lucide:arrow-right" class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"></iconify-icon>
            </a>
          </div>
        </div>

        {/* Column 4: Services */}
        <div className="flex flex-col gap-4 h-full lg:col-span-1 md:col-span-2">
          
          <div className="bg-white rounded-r-xl rounded-l-sm border border-slate-200/60 border-l-4 border-l-[#1F3E3D]/10 flex flex-row lg:flex-col xl:flex-row items-center gap-5 p-5 md:p-6 shadow-[0_4px_20px_rgba(31,62,61,0.02)] hover:shadow-md hover:border-l-[#C8A96A] hover:-translate-y-0.5 transition-all duration-300 flex-1 group">
            <div className="w-12 h-12 shrink-0 rounded-full border border-slate-100 text-[#1F3E3D]/70 flex items-center justify-center bg-slate-50 group-hover:border-[#C8A96A]/30 group-hover:text-[#C8A96A] group-hover:bg-[#C8A96A]/5 transition-colors duration-300">
              <iconify-icon icon="lucide:shield-check" class="w-5 h-5"></iconify-icon>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <h4 className="text-sm font-normal text-[#1F3E3D]">Premium Insurance</h4>
              <a href="#" className="text-xs text-[#C8A96A] hover:text-[#1F3E3D] transition-colors font-normal inline-flex items-center gap-1 group/slink">
                Learn More <iconify-icon icon="lucide:chevron-right" class="w-3 h-3 group-hover/slink:translate-x-0.5 transition-transform"></iconify-icon>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-r-xl rounded-l-sm border border-slate-200/60 border-l-4 border-l-[#1F3E3D]/10 flex flex-row lg:flex-col xl:flex-row items-center gap-5 p-5 md:p-6 shadow-[0_4px_20px_rgba(31,62,61,0.02)] hover:shadow-md hover:border-l-[#C8A96A] hover:-translate-y-0.5 transition-all duration-300 flex-1 group">
            <div className="w-12 h-12 shrink-0 rounded-full border border-slate-100 text-[#1F3E3D]/70 flex items-center justify-center bg-slate-50 group-hover:border-[#C8A96A]/30 group-hover:text-[#C8A96A] group-hover:bg-[#C8A96A]/5 transition-colors duration-300">
              <iconify-icon icon="lucide:diamond" class="w-5 h-5"></iconify-icon>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <h4 className="text-sm font-normal text-[#1F3E3D]">Member Rewards</h4>
              <a href="#" className="text-xs text-[#C8A96A] hover:text-[#1F3E3D] transition-colors font-normal inline-flex items-center gap-1 group/slink">
                Learn More <iconify-icon icon="lucide:chevron-right" class="w-3 h-3 group-hover/slink:translate-x-0.5 transition-transform"></iconify-icon>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-r-xl rounded-l-sm border border-slate-200/60 border-l-4 border-l-[#1F3E3D]/10 flex flex-row lg:flex-col xl:flex-row items-center gap-5 p-5 md:p-6 shadow-[0_4px_20px_rgba(31,62,61,0.02)] hover:shadow-md hover:border-l-[#C8A96A] hover:-translate-y-0.5 transition-all duration-300 flex-1 group">
            <div className="w-12 h-12 shrink-0 rounded-full border border-slate-100 text-[#1F3E3D]/70 flex items-center justify-center bg-slate-50 group-hover:border-[#C8A96A]/30 group-hover:text-[#C8A96A] group-hover:bg-[#C8A96A]/5 transition-colors duration-300">
              <iconify-icon icon="lucide:headset" class="w-5 h-5"></iconify-icon>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <h4 className="text-sm font-normal text-[#1F3E3D]">24/7 Concierge</h4>
              <a href="#" className="text-xs text-[#C8A96A] hover:text-[#1F3E3D] transition-colors font-normal inline-flex items-center gap-1 group/slink">
                Contact Us <iconify-icon icon="lucide:chevron-right" class="w-3 h-3 group-hover/slink:translate-x-0.5 transition-transform"></iconify-icon>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Spotlight;