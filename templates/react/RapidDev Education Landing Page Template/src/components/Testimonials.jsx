import React from 'react';

export default function Testimonials() {
  return (
    <section className="bg-[#FDE2E4]/30 pt-24 pb-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-[#E76F9B] font-medium text-xs tracking-wider mb-3 block uppercase">Student Success Stories</span>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333]">From beginners to launched founders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
          <div className="hover:shadow-lg transition-all duration-300 bg-[#f7c5d6]/60 border-[#FFF7F9] border rounded-2xl p-8 relative shadow-sm flex flex-col">
            <div className="flex text-[#E76F9B] mb-4 gap-1">
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
            </div>

            <p className="text-sm md:text-base text-[#333333] leading-relaxed mb-8 font-medium">
              "Before RapidDev, I spent 6 months trying to learn React. With this bootcamp, I built and launched my SaaS MVP in just 4 weeks. The curriculum is incredible."
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces" alt="Mark T." className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h5 className="font-medium text-sm text-[#333333]">Mark T.</h5>
                <span className="text-xs text-gray-500">SaaS Founder</span>
              </div>
            </div>
          </div>

          <div className="hover:shadow-lg transition-all duration-300 bg-[#f7c5d6]/60 border-[#FFF7F9] border rounded-2xl p-8 relative shadow-sm flex flex-col">
            <div className="flex text-[#E76F9B] mb-4 gap-1">
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
            </div>

            <p className="text-sm md:text-base text-[#333333] leading-relaxed mb-8 font-medium">
              "The mentorship is unmatched. Whenever I hit a roadblock with Bubble, the instructors were there to guide me. I just landed my first job as a No-Code Developer!"
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces" alt="Elena R." className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h5 className="font-medium text-sm text-[#333333]">Elena R.</h5>
                <span className="text-xs text-[#777777]">No-Code Engineer</span>
              </div>
            </div>
          </div>

          <div className="hover:shadow-lg transition-all duration-300 bg-[#f7c5d6]/60 border-[#FFF7F9] border rounded-2xl p-8 relative shadow-sm flex flex-col">
            <div className="flex text-[#E76F9B] mb-4 gap-1">
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
            </div>

            <p className="text-sm md:text-base text-[#333333] leading-relaxed mb-8 font-medium">
              "I saved over $50k in development costs by learning to build my own platform. The lessons are perfectly structured from absolute beginner to advanced database concepts."
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces" alt="David L." className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h5 className="font-medium text-sm text-[#333333]">Sarah Jenkins</h5>
                <span className="text-xs text-[#777777]">Marketplace Creator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}