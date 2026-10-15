import React from 'react';
import { Reveal } from '../components/ui/Reveal';

export function Location() {
  const tags = [
    "Ga Metro An Phú: ~2 phút",
    "Landmark 81: ~5 phút",
    "Khu đô thị Thủ Thiêm: ~7 phút",
    "Trung tâm Quận 1: ~10 phút",
    "Sân bay Tân Sơn Nhất: ~20 phút"
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8F9FA] relative">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#C0C0C0 1px, transparent 1px), linear-gradient(90deg, #C0C0C0 1px, transparent 1px)', backgroundSize: '100px 100px', opacity: '0.1' }}></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <Reveal direction="right" className="order-2 md:order-1 relative">
            <div className="relative group">
              <img 
                src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_vitri_bandovitri_tienich_metro.webp" 
                alt="Bản đồ vị trí The Berkley" 
                className="w-full h-auto shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0B2D72] text-white flex items-center justify-center rounded-full shadow-[0_0_0_8px_rgba(11,45,114,0.2)] animate-pulse-ring">
                <iconify-icon icon="solar:map-point-bold" class="text-2xl"></iconify-icon>
              </div>
            </div>
          </Reveal>

          <div className="order-1 md:order-2 flex flex-col justify-center">
            <Reveal>
              <h2 className="font-serif font-bold text-4xl md:text-[48px] text-[#0B2D72] leading-tight tracking-tight mb-4">
                Vị Trí Vàng Cuối Cùng Tại Thảo Điền
              </h2>
              <p className="text-xl text-[#58A0C8] font-medium mb-6">Mặt tiền Xa Lộ Hà Nội – Kề Metro An Phú</p>
              <p className="text-[#070F1E]/70 leading-relaxed mb-10">
                Tọa lạc tại tâm điểm Thảo Điền, mặt tiền Xa Lộ Hà Nội và liền kề tuyến Metro Bến Thành - Suối Tiên, The Berkley sở hữu vị trí vàng hiếm hoi còn sót lại. Tầm nhìn vĩnh cửu hướng về sông Sài Gòn và Landmark 81 không chỉ khẳng định vị thế độc tôn của chủ nhân mà còn mang lại tiềm năng gia tăng giá trị trường tồn theo thời gian.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tags.map((tag, idx) => (
                <Reveal key={idx} delay={idx * 100} direction="left">
                  <div className="bg-white border-l-4 border-[#58A0C8] px-5 py-3 shadow-sm flex items-center gap-3 group hover:shadow-md transition-shadow">
                    <iconify-icon icon="solar:routing-2-linear" class="text-[#0B2D72] opacity-50 group-hover:opacity-100 transition-opacity"></iconify-icon>
                    <span className="text-sm font-medium text-[#0B2D72]">{tag}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}