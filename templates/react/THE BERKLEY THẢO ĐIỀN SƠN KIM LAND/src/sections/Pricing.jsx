import React from 'react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { useModal } from '../context/ModalContext';

export function Pricing() {
  const { openModal } = useModal();

  const cards = [
    {
      type: "2 Phòng Ngủ",
      area: "72 - 129 m²",
      price_range: "Từ 18 - 32 tỷ",
      rental_from: "3.000$/tháng",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0a0d122-238b-44e8-b336-e174c9774a92_320w.jpg",
      features: ["Loggia cực rộng nối liền phòng khách", "Khu vực Foyer riêng biệt", "Thiết kế vuông vức, tối ưu"]
    },
    {
      type: "3 Phòng Ngủ + Study",
      area: "161.91 m²",
      price_range: "Từ 40 tỷ",
      rental_from: "4.000$/tháng",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f8e8532-4b19-4118-8f45-be7f36fde907_320w.jpg",
      features: ["Căn góc đắt giá nhất dự án", "View trực diện Landmark 81", "Phòng Study & Utility riêng"]
    },
    {
      type: "Phiên Bản Đặc Biệt",
      area: "80 - 139 m²",
      price_range: "Liên hệ",
      rental_from: "Thỏa thuận",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55ef1ce2-ee94-4e20-80e8-ddeac0ec3df1_320w.jpg",
      features: ["Sân vườn riêng (PES) tầng 3", "Bồn tắm nằm sang trọng tầng 4", "Sky Garden tầng 10 & 11"]
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#0B2D72] tracking-tight mb-4">Chính Sách Giá</h2>
          <p className="text-xl text-[#58A0C8] font-medium mb-4">Cơ Hội Sở Hữu Độc Bản (Cập nhật T04/2026)</p>
          <p className="text-[#070F1E]/60 text-sm">Thanh toán 22% nhận nhà ngay (trả chậm 1.5 năm). Mức giá xứng tầm cho vị thế độc bản.</p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up" className="h-full">
              <div className="bg-white h-full flex flex-col border-t-4 border-[#0B2D72] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#58A0C8] group">
                <div className="p-8 pb-0 flex-grow">
                  <div className="h-40 w-full mb-6 flex items-center justify-center p-4 bg-gray-50 border border-gray-100">
                    <img src={card.image} alt={card.type} className="max-h-full max-w-full object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#0B2D72] mb-2">{card.type}</h3>
                  <div className="flex gap-2 text-xs text-[#070F1E]/50 mb-6 font-medium">
                    <span className="bg-gray-100 px-2 py-1">{card.area}</span>
                    <span className="bg-gray-100 px-2 py-1">Cho thuê: {card.rental_from}</span>
                  </div>
                  
                  <div className="mb-6">
                    <span className="block text-xs text-[#0B2D72]/60 uppercase tracking-widest font-semibold mb-1">Mức giá tham khảo</span>
                    <span className="text-3xl font-serif text-[#58A0C8]">{card.price_range}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-[#070F1E]/80">
                        <iconify-icon icon="solar:check-read-linear" class="text-[#58A0C8] text-lg shrink-0 mt-0.5"></iconify-icon>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <Button variant="dark" fullWidth onClick={() => openModal(`Báo giá ${card.type}`)}>
                    Nhận Báo Giá Chi Tiết
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}