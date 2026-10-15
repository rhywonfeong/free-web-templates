import React, { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: "Dự án đã xây dựng xong chưa? Khi nào nhận nhà?", a: "The Berkley hiện đã hoàn thiện xây dựng, đi vào vận hành tiêu chuẩn 5 sao và sẵn sàng khai thác ngay. Nhận nhà ngay sau khi thanh toán mức vốn ban đầu chỉ từ 22% đến 50%." },
    { q: "Pháp lý của The Berkley được quy định như thế nào?", a: "The Berkley thuộc dòng căn hộ dịch vụ hạng sang. Pháp lý và thời hạn sở hữu áp dụng theo chính sách dành cho hình thức lưu trú. Thời gian dự kiến ký HĐMB là Q4/2027." },
    { q: "Tiện ích có dùng chung với Gateway Thảo Điền không?", a: "Không. The Berkley thiết kế hệ thống tiện ích đặc quyền trên đỉnh tòa nhà (tầng 20 và 21) bao gồm hồ bơi, Gym, Sauna... phục vụ riêng biệt cho 85 chủ nhân." },
    { q: "Giá trị khai thác cho thuê ước tính là bao nhiêu?", a: "Là lựa chọn hàng đầu của chuyên gia quốc tế, mức giá thuê thực tế trên thị trường cho các căn hộ diện tích rộng tại đây tối thiểu từ 2.500$ đến hơn 4.000$/tháng." },
    { q: "Mức phí booking hiện tại và có được hoàn lại không?", a: "Hiện đang nhận booking 200 triệu đồng/suất, hoàn tiền 100% nếu không chọn được căn ưng ý. Lịch mở nhận booking chính thức từ tháng 3-5/2026." }
  ];

  return (
    <section className="py-24 bg-[#0B2D72] relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-4">Câu Hỏi Thường Gặp</h2>
          <p className="text-[#58A0C8] text-lg">Giải đáp mọi thắc mắc về tuyệt tác The Berkley</p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 100} direction="up">
              <div 
                className={`border-b border-white/10 overflow-hidden transition-all duration-300 ${openIdx === idx ? 'bg-white/5 border-l-2 border-l-[#58A0C8]' : ''}`}
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group min-h-[56px]"
                >
                  <span className="font-medium text-white group-hover:text-[#58A0C8] transition-colors pr-8">
                    {faq.q}
                  </span>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    class={`text-[#58A0C8] text-xl transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`}
                  ></iconify-icon>
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{ maxHeight: openIdx === idx ? '200px' : '0', paddingBottom: openIdx === idx ? '1.25rem' : '0' }}
                >
                  <p className="text-[#C0C0C0] text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}