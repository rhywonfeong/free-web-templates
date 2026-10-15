import React from 'react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export function MasterPlan() {
  const zones = [
    { id: "Sky Facilities", floor: "Tầng 20-21", type: "Hồ bơi vô cực, Gym", status: "Đang mở trải nghiệm", hl: true },
    { id: "PES", floor: "Tầng 3", type: "Căn sân vườn riêng", status: "Còn ít suất", hl: true },
    { id: "Typical", floor: "Tầng 4-19", type: "2-3PN + Study", status: "Đang mở bán", hl: false }
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <Reveal className="order-2 md:order-1 relative bg-white p-4 shadow-xl border border-gray-100 rounded-sm">
            <img 
              src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_layout_matbangtang_tang3_tang4.webp" 
              alt="Mặt Bằng Tầng" 
              className="w-full h-auto"
            />
            {/* Interactive Hotspots Simulation */}
            <div className="absolute top-[20%] right-[30%] w-3 h-3 bg-[#58A0C8] rounded-full animate-ping"></div>
            <div className="absolute top-[50%] left-[40%] w-3 h-3 bg-[#58A0C8] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#0B2D72] leading-tight mb-4">
                Mặt Bằng Tổng Thể
              </h2>
              <p className="text-lg text-[#58A0C8] font-medium mb-6">1 tòa tháp độc lập — 85 căn hộ dịch vụ</p>
              <p className="text-[#070F1E]/70 mb-10 text-sm leading-relaxed">
                Tòa tháp duy nhất với mật độ cực thấp chỉ 5 căn/tầng mang lại sự riêng tư tuyệt đối. Sky Facilities chiếm trọn tầng 20-21. Các căn PES sân vườn riêng tại tầng 3 và sky garden khoảng lùi tại tầng 10-11 hiện còn hạn chế.
              </p>
            </Reveal>

            <div className="space-y-4 mb-10">
              {zones.map((zone, idx) => (
                <Reveal key={idx} delay={idx * 100} direction="left">
                  <div className={`p-4 flex items-center justify-between border-l-4 transition-colors ${zone.hl ? 'bg-white border-[#58A0C8] shadow-sm' : 'bg-transparent border-[#C0C0C0]'}`}>
                    <div>
                      <h4 className="font-semibold text-[#0B2D72]">{zone.floor}</h4>
                      <p className="text-xs text-[#070F1E]/60 mt-1">{zone.type}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${zone.hl ? 'bg-[#58A0C8]/10 text-[#58A0C8]' : 'bg-gray-200 text-gray-600'}`}>
                      {zone.status}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
               <p className="text-xs text-[#070F1E]/50 italic mb-4">Hướng chính Đông Nam & Tây Nam nhìn Landmark 81</p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}