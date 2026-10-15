import React, { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [formState, setFormState] = useState({ submitted: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setFormState({ submitted: true }), 500);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0B2D72] to-[#3a7596] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_sanhlounge_thucte_noithat.webp')] bg-cover bg-center opacity-[0.06] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <Reveal>
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-white leading-tight mb-4">
              Đặt Chỗ Ưu Tiên<br />
              <span className="text-[#58A0C8]">Giới Hạn 85 Suất</span>
            </h2>
            <p className="text-[#C0C0C0] text-lg mb-12 border-l-2 border-[#58A0C8] pl-4">
              The Berkley — Tuyệt tác độc bản cuối cùng tại Thảo Điền
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <iconify-icon icon="solar:phone-bold" class="text-[#58A0C8] text-xl"></iconify-icon>
                </div>
                <div>
                  <p className="text-[10px] text-[#C0C0C0] uppercase tracking-widest">Hotline Tư Vấn</p>
                  <a href="tel:0902345678" className="text-2xl text-white font-bold tracking-wide hover:text-[#58A0C8] transition-colors">0933 155 800</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <a href="https://zalo.me/0902345678" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                   <iconify-icon icon="simple-icons:zalo" class="text-lg text-[#0068FF]"></iconify-icon>
                   Nhắn Zalo Tư Vấn
                 </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="bg-white p-8 md:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0B2D72]"></div>
              
              {!formState.submitted ? (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[#0B2D72] mb-6">Nhận Bảng Hàng Ngay Hôm Nay</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Họ và tên *</label>
                      <input type="text" required className="w-full border-b-2 border-gray-200 px-0 py-2 text-[#0B2D72] focus:outline-none focus:border-[#58A0C8] bg-transparent transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Số điện thoại *</label>
                      <input type="tel" required className="w-full border-b-2 border-gray-200 px-0 py-2 text-[#0B2D72] focus:outline-none focus:border-[#58A0C8] bg-transparent transition-colors" />
                    </div>
                    <div className="mb-8">
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
                      <input type="email" className="w-full border-b-2 border-gray-200 px-0 py-2 text-[#0B2D72] focus:outline-none focus:border-[#58A0C8] bg-transparent transition-colors" />
                    </div>
                    <Button type="submit" variant="dark" fullWidth className="py-4">NHẬN TƯ VẤN NGAY</Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <iconify-icon icon="solar:check-circle-bold" class="text-6xl text-[#58A0C8] mb-4"></iconify-icon>
                  <h3 className="font-serif text-2xl font-bold text-[#0B2D72] mb-2">Đăng Ký Thành Công</h3>
                  <p className="text-gray-600">Chuyên viên Sơn Kim Land sẽ liên hệ với Anh/Chị trong thời gian sớm nhất.</p>
                </div>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}