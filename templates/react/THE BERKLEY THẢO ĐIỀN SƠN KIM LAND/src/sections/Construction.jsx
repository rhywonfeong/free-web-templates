import React from 'react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { useModal } from '../context/ModalContext';

export function Construction() {
  const { openModal } = useModal();
  
  const milestones = [
    {
      label: "Hoàn thiện mặt ngoài",
      date: "Q1/2026",
      status: "completed",
      image_url: "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_facade_thucte_metro.webp.webp"
    },
    {
      label: "Bàn giao nội thất thực tế",
      date: "Q2/2026",
      status: "completed",
      image_url: "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_sanhlounge_thucte_noithat.webp"
    }
  ];

  return (
    <section className="py-24 bg-[#0B2D72] relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjQzBDMEMwIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwbDYwIDYwbTAtNjBMMCA2MCIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-tight mb-4 leading-tight">
              Đã Hoàn Thiện.<br />Sẵn Sàng Khai Thác.
            </h2>
            <p className="text-lg text-[#58A0C8]">Cập nhật tiến độ thực tế T04/2026</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {milestones.map((item, idx) => (
            <Reveal key={idx} delay={idx * 200}>
              <div className="bg-[#070F1E]/80 backdrop-blur-sm border border-white/10 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image_url} 
                    alt={item.label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-md px-3 py-1.5 flex items-center gap-2 shadow-lg">
                    <iconify-icon icon="solar:check-circle-bold" class="text-white"></iconify-icon>
                    <span className="text-white text-xs font-semibold tracking-wide uppercase">Hoàn Thiện</span>
                  </div>
                </div>
                <div className="p-6 border-l-4 border-[#58A0C8]">
                  <h3 className="text-white text-lg font-medium mb-1">{item.label}</h3>
                  <p className="text-[#C0C0C0] text-sm flex items-center gap-2">
                    <iconify-icon icon="solar:calendar-date-linear"></iconify-icon>
                    {item.date}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="flex flex-col md:flex-row items-center justify-between bg-[#58A0C8]/10 p-6 border border-[#58A0C8]/30">
          <p className="text-[#C0C0C0] text-sm mb-4 md:mb-0 max-w-xl">
            <iconify-icon icon="solar:info-circle-linear" class="mr-2 inline align-text-bottom text-[#58A0C8]"></iconify-icon>
            Hình ảnh thi công và bàn giao thực tế — The Berkley đã hoàn thiện và sẵn sàng khai thác ngay lập tức.
          </p>
          <Button variant="primary" onClick={() => openModal('Tiến độ')}>Nhận Hồ Sơ Hoàn Thiện</Button>
        </Reveal>
      </div>
    </section>
  );
}