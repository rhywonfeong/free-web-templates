import React from 'react';
import { Reveal } from '../components/ui/Reveal';

export function Team() {
  return (
    <section className="py-24 bg-[#0B2D72] relative overflow-hidden">
      {/* Decorative Monogram */}
      <div className="absolute top-1/2 right-10 md:right-32 -translate-y-1/2 text-[300px] md:text-[500px] font-serif leading-none text-white opacity-[0.03] select-none pointer-events-none">
        T
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <Reveal>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-tight mb-6">Đội Ngũ<br/>Chuyên Viên Tư Vấn</h2>
            <p className="text-lg text-[#58A0C8] italic max-w-md">
              Đồng hành cùng quý khách khám phá tuyệt tác cuối cùng tại trái tim Thảo Điền.
            </p>
          </Reveal>

          <Reveal direction="left">
            <div className="bg-[#070F1E]/40 backdrop-blur-md border border-white/10 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#58A0C8]/20 to-transparent"></div>
              
              <h3 className="font-serif text-5xl md:text-6xl text-white font-bold mb-4">Thảo Hiền</h3>
              <p className="text-[#C0C0C0] uppercase tracking-widest text-xs md:text-sm mb-8">Giám Đốc Quản Lý Phân Khúc Hạng Sang</p>
              
              <div className="flex items-center gap-4 text-[#58A0C8] font-bold text-2xl md:text-3xl mb-10">
                <iconify-icon icon="solar:phone-calling-bold"></iconify-icon>
                <a href="tel:0902345678" className="hover:text-white transition-colors">0933 155 800</a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0902345678" className="flex-1 border border-[#58A0C8] text-[#58A0C8] text-center py-3 text-sm font-medium hover:bg-[#58A0C8] hover:text-white transition-colors">
                  Gọi Ngay
                </a>
                <a href="https://zalo.me/0902345678" className="flex-1 border border-[#0068FF] bg-[#0068FF]/10 text-white text-center py-3 text-sm font-medium hover:bg-[#0068FF] transition-colors flex items-center justify-center gap-2">
                  <iconify-icon icon="simple-icons:zalo"></iconify-icon> Nhắn Zalo
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}