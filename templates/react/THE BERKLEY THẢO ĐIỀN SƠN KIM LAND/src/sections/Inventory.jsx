import React from 'react';
import { Reveal } from '../components/ui/Reveal';
import { useModal } from '../context/ModalContext';

export function Inventory() {
  const { openModal } = useModal();
  
  const items = [
    { type: "2PN (Type C5)", area: "72.32 m²", floor: "Tầng 12 - 19", dir: "Đông Bắc", price: "Từ 18 tỷ", hl: "Layout hiếm hoi giữ nguyên từ tầng thấp" },
    { type: "3PN + Study", area: "161.91 m²", floor: "Tầng 4 - 9", dir: "Tây Nam — View Landmark 81", price: "Từ 40 tỷ", hl: "Căn góc diện tích siêu lớn" },
    { type: "1PN Đặc Biệt", area: "96.90 m²", floor: "Tầng 10 - 11", dir: "Đông Nam", price: "Từ 24 tỷ", hl: "Kết nối trực tiếp Sky Garden" }
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0B2D72] mb-3">Giỏ Hàng Độc Quyền Còn Lại</h2>
          <p className="text-[#070F1E]/60 text-sm">Danh sách tham khảo — liên hệ để nhận bảng giá chính xác nhất.</p>
        </Reveal>

        <div className="space-y-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up">
              <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#0B2D72] group-hover:bg-[#58A0C8] transition-colors"></div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#0B2D72]">{item.type}</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5">{item.area}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600 mb-3">
                    <p>📍 {item.floor}</p>
                    <p>🧭 {item.dir}</p>
                  </div>
                  <p className="text-xs text-[#58A0C8] bg-[#58A0C8]/5 inline-block px-2 py-1 italic">
                    ✨ {item.hl}
                  </p>
                </div>

                <div className="md:text-right shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-gray-100 flex flex-row md:flex-col justify-between items-center md:items-end">
                  <div className="mb-0 md:mb-4">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Giá tham khảo</p>
                    <p className="text-2xl font-serif text-[#58A0C8] font-bold">{item.price}</p>
                  </div>
                  <button 
                    onClick={() => openModal(`Căn ${item.type}`)}
                    className="text-sm font-medium text-[#0B2D72] hover:text-[#58A0C8] flex items-center gap-1 transition-colors"
                  >
                    Nhận thông tin <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}