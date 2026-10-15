import React from 'react';
import { Reveal } from '../components/ui/Reveal';

const data = [
  { field: "Tên dự án", value: "The Berkley" },
  { field: "Vị trí", value: "177 Võ Nguyên Giáp, phường Thảo Điền, TP. Thủ Đức" },
  { field: "Chủ đầu tư", value: "Sơn Kim Land" },
  { field: "Số tháp / Khu", value: "1 tòa tháp độc lập" },
  { field: "Số tầng", value: "21 tầng" },
  { field: "Số sản phẩm", value: "85 căn hộ dịch vụ" },
  { field: "Loại hình", value: "Căn hộ hạng sang (Luxury Boutique)" },
  { field: "Năm bàn giao", value: "Đã hoàn thiện (Sẵn sàng khai thác)" },
  { field: "Tiêu chuẩn bàn giao", value: "Hoàn thiện nội thất cơ bản theo tiêu chuẩn Sơn Kim Land" },
  { field: "Mật độ thang máy", value: "4 thang máy, 21 căn/thang" }
];

export function Overview() {
  return (
    <section className="py-24 bg-[#F8F9FA] relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img 
          src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_facade_thucte_metro.webp.webp" 
          alt="Watermark" 
          className="w-[80%] max-w-4xl object-contain opacity-[0.04] grayscale"
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#0B2D72] tracking-tight mb-4">Tổng Quan Dự Án</h2>
            <p className="text-lg text-[#070F1E]/60">Thông tin chi tiết về The Berkley</p>
          </div>
        </Reveal>

        <div className="bg-white/80 backdrop-blur-md shadow-xl border border-gray-100 overflow-hidden">
          {data.map((row, idx) => (
            <Reveal key={idx} delay={idx * 80} direction="up" className="w-full">
              <div className={`flex flex-col md:flex-row border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-[#58A0C8]/5'}`}>
                <div className="md:w-1/3 p-4 md:px-8 md:py-5">
                  <span className="text-[#0B2D72] font-semibold text-sm tracking-wide">{row.field}</span>
                </div>
                <div className="md:w-2/3 p-4 pt-0 md:pt-4 md:px-8 md:py-5 border-t md:border-t-0 border-gray-100/50">
                  <span className="text-[#070F1E] text-sm leading-relaxed">{row.value}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}