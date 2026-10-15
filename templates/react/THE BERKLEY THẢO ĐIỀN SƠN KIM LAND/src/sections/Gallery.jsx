import React from 'react';
import { Reveal } from '../components/ui/Reveal';

export function Gallery() {
  const images = [
    "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_hoboi_rooftop_thucte.webp",
    "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_bancong_sanvuon_thucte.webp",
    "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_sanhlounge_thucte_noithat.webp",
    "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tongquan_tamnhin_bancong_landmark81.webp.webp"
  ];

  return (
    <section className="py-24 bg-[#070F1E] relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <Reveal className="mb-16">
          <div className="max-w-3xl">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
              Không Gian Sống & Tiện Ích Đỉnh Cao
            </h2>
            <p className="text-[#58A0C8] text-lg mb-6">Sky Facilities tại tầng 20-21 dành riêng cho 85 chủ nhân</p>
            <p className="text-[#C0C0C0] leading-relaxed">
              Hệ thống tiện ích nội khu phân bổ thông minh từ mặt đất lên đỉnh tòa nhà, với tổ hợp Sky Facilities tại tầng 20 & 21. Hồ bơi vô cực, phòng Gym hiện đại, khu BBQ và Sky Garden mang lại trải nghiệm nghỉ dưỡng 5 sao đặc quyền chỉ dành riêng cho 85 chủ nhân danh giá.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Hero Image - Spans 2 rows, 1 col on Desktop, or full width top on mobile */}
          <Reveal className="lg:col-span-1 lg:row-span-2 relative group overflow-hidden bg-black">
            <img 
              src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_hoboi_landmark81_thucte.webp" 
              alt="Hồ bơi vô cực" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-serif text-xl">Hồ Bơi Vô Cực</p>
              <p className="text-[#58A0C8] text-sm italic">Tầm nhìn Landmark 81</p>
            </div>
          </Reveal>

          {/* Grid of 4 smaller images */}
          {images.map((src, idx) => (
            <Reveal key={idx} delay={(idx + 1) * 150} className="relative group overflow-hidden bg-black">
              <img 
                src={src} 
                alt={`Tiện ích ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[#0B2D72]/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"></div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}