import React from 'react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { useModal } from '../context/ModalContext';

export function Payment() {
  const { openModal } = useModal();
  
  const stages = [
    { num: 1, label: "Thanh Toán Ban Đầu", percent: "22%", cond: "Nhận nhà ngay lập tức", hl: true },
    { num: 2, label: "Trả Góp Linh Hoạt", percent: "28%", cond: "Trong 18 tháng, 0% lãi suất", hl: false },
    { num: 3, label: "Ký HĐMB & Hoàn Tất", percent: "50%", cond: "Q4/2027 theo chính sách", hl: false }
  ];

  return (
    <section className="py-24 bg-[#0B2D72] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <Reveal className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">Lộ Trình Thanh Toán</h2>
          <p className="text-xl text-[#58A0C8] font-medium mb-4">Chỉ 22% nhận nhà — Trả góp linh hoạt đến 18 tháng</p>
        </Reveal>

        <div className="relative mb-20">
          {/* Progress Line Background */}
          <div className="absolute top-[40px] md:top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            {stages.map((stage, idx) => (
              <Reveal key={idx} delay={idx * 200} className="relative flex flex-col items-center text-center">
                
                {/* Node */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center font-serif text-2xl font-bold mb-6 transition-all duration-500 shadow-xl ${
                  stage.hl 
                    ? 'bg-[#58A0C8] text-white ring-8 ring-[#58A0C8]/20 animate-pulse-ring' 
                    : 'bg-[#070F1E] text-[#C0C0C0] border-2 border-white/20'
                }`}>
                  {stage.percent}
                </div>
                
                <h3 className="text-white font-medium text-lg mb-2">{stage.label}</h3>
                <p className={`text-sm ${stage.hl ? 'text-[#58A0C8]' : 'text-[#C0C0C0]'}`}>{stage.cond}</p>
                
                {/* Mobile connecting line */}
                {idx < stages.length - 1 && (
                  <div className="h-12 w-[1px] bg-white/10 mt-6 md:hidden"></div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={600} className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm text-center rounded-sm">
          <p className="text-white text-lg mb-6">Chỉ cần đóng 22% để nhận nhà và bắt đầu kinh doanh hoặc ở ngay</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" onClick={() => openModal('Dòng tiền')}>Nhận Bảng Tính Dòng Tiền</Button>
            <Button variant="secondary" onClick={() => openModal('Gói vay')}>Tư Vấn Gói Vay</Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}