import React, { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export function Hero() {
  const [formState, setFormState] = useState({ submitted: false });

const handleInlineSubmit = async (e) => {
    e.preventDefault();
    
    // Thu thập dữ liệu từ các ô nhập liệu
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Gửi dữ liệu đến Webhook (Thay URL của bạn vào đây)
    try {
      await fetch('https://stephen-hub.com/webhook/berkley', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Lỗi gửi form:', error);
    }

    // Hiển thị thông báo cảm ơn
    setFormState({ submitted: true });
  };
  return (
    <section className="relative min-h-screen bg-[#0B2D72] overflow-hidden pt-24 md:pt-0 flex items-center">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D72] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20 py-12 md:py-24">
          
          {/* Left Column - Content */}
          <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center">
            <Reveal delay={100}>
              <h1 className="font-serif font-bold text-[#58A0C8] text-5xl md:text-6xl lg:text-[64px] leading-none tracking-tight mb-4">
                The Berkley
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium tracking-tight mb-8">
                Tuyệt tác độc bản cuối cùng tại Thảo Điền từ Sơn Kim Land
              </p>
            </Reveal>

            <Reveal delay={200} className="space-y-3 mb-10">
              {["💎 Giới hạn 85 căn hộ Luxury Boutique", "📍 Tầm nhìn vĩnh cửu sông Sài Gòn", "🔑 Đã hoàn thiện — Nhận nhà ngay"].map((pill, idx) => (
                <div key={idx} className="bg-white/5 border-l-2 border-[#C0C0C0] px-4 py-2.5 text-sm text-[#F8F9FA] backdrop-blur-sm w-fit inline-block mr-2 mb-2">
                  {pill}
                </div>
              ))}
            </Reveal>

            {/* Inline Form Card */}
            <Reveal delay={300} className="bg-[#1a2535]/85 backdrop-blur-md border border-[#58A0C8]/50 p-6 md:p-8 rounded-[16px] shadow-2xl relative overflow-hidden">
              {!formState.submitted ? (
                <>
                  <h3 className="text-white font-medium text-lg mb-6 flex items-center gap-2">
                    <iconify-icon icon="solar:document-text-linear" class="text-[#58A0C8]"></iconify-icon>
                    The Berkley — Nhận Tư Vấn
                  </h3>
                  <form onSubmit={handleInlineSubmit} className="space-y-4">
                    <input name="fullname" type="text" placeholder="Họ và tên" required className="w-full bg-[#0B2D72]/50 border border-white/20 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#58A0C8] text-sm" />
                    <input name="phone" type="tel" placeholder="Số điện thoại" required className="w-full bg-[#0B2D72]/50 border border-white/20 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#58A0C8] text-sm" />
                    <select name="interest" className="w-full bg-[#0B2D72]/50 border border-white/20 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#58A0C8] text-sm appearance-none">
                      <option value="" disabled selected>Tôi quan tâm đến...</option>
                      <option value="2pn">2 Phòng Ngủ</option>
                      <option value="3pn">3 Phòng Ngủ + Study</option>
                      <option value="special">Phiên Bản Đặc Biệt</option>
                    </select>
                    <Button type="submit" variant="primary" fullWidth pulse className="mt-2">NHẬN TƯ VẤN NGAY</Button>
                  </form>
                  <p className="text-[10px] text-[#C0C0C0] text-center mt-4">🔒 Bảo mật thông tin — Phản hồi trong 15 phút</p>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-[#58A0C8]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#58A0C8]">
                    <iconify-icon icon="solar:check-circle-bold" class="text-2xl"></iconify-icon>
                  </div>
                  <h4 className="text-white font-serif text-xl mb-2">Cảm ơn Anh/Chị!</h4>
                  <p className="text-[#C0C0C0] text-sm mb-6">Chuyên viên sẽ liên hệ tư vấn chi tiết trong vòng 15 phút.</p>
                  <div className="flex gap-2">
                    <a href="tel:0902345678" className="flex-1 bg-white/10 text-white py-2 text-xs text-center border border-white/20 hover:bg-white/20 transition">Gọi Hotline</a>
                    <a href="https://zalo.me/0902345678" className="flex-1 bg-[#0068FF] text-white py-2 text-xs text-center hover:bg-[#0052cc] transition">Nhắn Zalo</a>
                  </div>
                </div>
              )}
            </Reveal>

          </div>

          {/* Right Column - Image Bento */}
          <div className="w-full md:w-[55%] lg:w-[60%] h-[400px] md:h-[600px] relative">
            <Reveal delay={200} direction="left" className="h-full w-full">
              <div className="relative w-full h-full">
                <img 
                  src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_facade_thucte_metro.webp.webp" 
                  alt="The Berkley Facade" 
                  className="w-full h-full object-cover object-center shadow-2xl"
                />
                <div className="absolute inset-0 bg-[#0B2D72]/10 mix-blend-multiply"></div>
                
                {/* Badges */}
                <div className="absolute top-6 right-6 bg-white px-4 py-1.5 shadow-lg">
                  <span className="text-[#0B2D72] font-semibold text-xs uppercase tracking-widest">Sơn Kim Land</span>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-[#070F1E]/80 backdrop-blur-md border border-[#58A0C8] px-5 py-2.5 shadow-[0_0_15px_rgba(88,160,200,0.3)]">
                  <span className="text-white font-medium text-sm">Luxury Boutique — Từ 18 tỷ</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
      
      {/* Ticker placeholder in DOM layout to match spec */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0B2D72] border-t border-white/10 py-2 overflow-hidden flex whitespace-nowrap z-30 hidden md:block">
        <div className="animate-marquee inline-block text-[#F59E0B] text-xs font-medium tracking-wide">
          <span className="mx-8">• Khách hàng T.H.M vừa đặt chỗ ưu tiên căn góc 3PN view Landmark 81.</span>
          <span className="mx-8">• Chỉ còn 2 suất booking ưu tiên cho căn hộ sân vườn tầng 3 trong đợt này.</span>
          <span className="mx-8">• Sự kiện tham quan không gian thực tế cuối tuần này đã kín 85% lịch đăng ký.</span>
        </div>
      </div>
    </section>
  );
}