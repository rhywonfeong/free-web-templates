import React from 'react';
import { Reveal } from '../components/ui/Reveal';

export function SocialProof() {
  const testimonials = [
    { name: "Anh T., TP.HCM", title: "Mua căn 3PN + Study", quote: "The Berkley không chỉ là căn hộ mà là di sản. Nhận nhà ngay sau 22% giúp tôi nhanh chóng đưa gia đình vào ở và bắt đầu dòng tiền cho thuê. Cảm giác 'đây là nơi thuộc về tôi' rất rõ ràng." },
    { name: "Chị H., Quận 1", title: "Nhà đầu tư cao cấp", quote: "Với vị trí kề Metro và view Landmark 81 vĩnh cửu, The Berkley cho thuê cực tốt. Tôi chọn hai căn PES tầng 3 để vừa ở vừa kinh doanh. Chủ đầu tư Sơn Kim Land rất chuyên nghiệp." },
    { name: "Ông P., Singapore", title: "Nhà đầu tư quốc tế", quote: "Tôi tìm một tài sản giữ giá trị lâu dài tại Sài Gòn. The Berkley với chỉ 85 căn và tiêu chuẩn 5 sao riêng tư là lựa chọn hoàn hảo. Đội ngũ hỗ trợ rất tốt từ A đến Z." }
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#0B2D72] mb-4">Khách Hàng Nói Gì</h2>
          <p className="text-[#58A0C8] text-lg font-medium">Những nhà đầu tư tinh hoa đã chọn The Berkley</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up" className="bg-white p-8 border-l-4 border-[#58A0C8] shadow-lg relative">
              <iconify-icon icon="solar:quote-right-bold" class="absolute top-6 right-6 text-4xl text-gray-100"></iconify-icon>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                  <iconify-icon icon="solar:user-bold" class="text-gray-400 text-xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2D72] text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed relative z-10 italic">
                "{t.quote}"
              </p>
              
              <div className="flex gap-1 mt-6 text-[#F59E0B]">
                {[1,2,3,4,5].map(star => <iconify-icon key={star} icon="solar:star-bold"></iconify-icon>)}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="text-center">
           <div className="inline-block bg-[#0B2D72]/5 px-6 py-3 rounded-full">
             <p className="text-[#0B2D72] font-semibold text-sm">
               <span className="text-[#58A0C8]">Thực tế:</span> 95%+ tỷ lệ lấp đầy & 3.000–4.000 USD/tháng cho thuê
             </p>
           </div>
        </Reveal>
      </div>
    </section>
  );
}