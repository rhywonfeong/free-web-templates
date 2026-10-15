import React from 'react';
import { Reveal } from '../components/ui/Reveal';

export function Video() {
  const videos = [
    {
      poster: "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_hoboi_landmark81_thucte.webp",
      label: "Tổng quan dự án"
    },
    {
      poster: "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_bancong_sanvuon_thucte.webp",
      label: "Không gian thương mại"
    },
    {
      poster: "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_hoboi_rooftop_thucte.webp",
      label: "Cuộc sống cư dân"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-[#0B2D72] to-[#3a7596] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <Reveal className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">Trải Nghiệm Trực Quan</h2>
          <p className="text-[#F8F9FA] opacity-80 text-lg">Khám phá không gian sống đẳng cấp qua từng khung hình</p>
        </Reveal>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar md:justify-center">
          {videos.map((item, idx) => (
            <Reveal key={idx} delay={idx * 200} className="snap-center shrink-0 w-[80vw] md:w-[320px] aspect-[9/16] relative group cursor-pointer">
              <div className="w-full h-full overflow-hidden bg-black border border-white/10 shadow-2xl">
                <img 
                  src={item.poster} 
                  alt={item.label} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <iconify-icon icon="solar:play-circle-bold" class="text-4xl text-[#58A0C8]"></iconify-icon>
                  </div>
                  <div className="absolute bottom-10 text-center w-full px-4">
                    <p className="text-white font-serif text-lg mb-2">{item.label}</p>
                    <p className="text-white/60 text-xs tracking-wider uppercase">Video cập nhật sớm</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}