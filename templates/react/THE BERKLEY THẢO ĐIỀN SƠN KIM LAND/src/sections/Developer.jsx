import React from 'react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export function Developer() {
  const pillars = [
    "Quỹ đất vàng cuối cùng tại Thảo Điền",
    "Tiêu chuẩn quản lý 5 sao quốc tế",
    "Thiết kế boutique giới hạn chỉ 85 căn",
    "Tầm nhìn vĩnh cửu sông Sài Gòn & Landmark 81"
  ];

  return (
    <section className="relative min-h-[80vh] flex items-end">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_facade_ngoai_that.webp.webp" 
          alt="Sơn Kim Land" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 pb-20 pt-40">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif font-bold text-4xl md:text-[56px] text-[#0B2D72] leading-tight mb-4">
              Sơn Kim Land —<br />Kiến Tạo Di Sản
            </h2>
            <p className="text-xl text-[#070F1E]/70">20+ năm kiến tạo những công trình biểu tượng tại TP.HCM</p>
          </div>
        </Reveal>

        <div className="bg-white/90 backdrop-blur-xl shadow-2xl p-8 md:p-10 border border-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <Reveal key={idx} delay={idx * 150} direction="up">
                <div className="flex items-start gap-4 p-4 hover:bg-[#F8F9FA] transition-colors border-l-2 border-[#58A0C8]/30 hover:border-[#58A0C8]">
                  <iconify-icon icon="solar:star-fall-minimalistic-2-linear" class="text-[#58A0C8] text-2xl shrink-0"></iconify-icon>
                  <p className="text-[#0B2D72] font-medium text-sm leading-snug">{pillar}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={600} className="mt-8 pt-8 border-t border-gray-200 text-center md:text-left">
             <Button variant="dark" onClick={() => window.open('https://sonkimland.vn', '_blank')}>Tìm Hiểu Thêm Về Chủ Đầu Tư</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}