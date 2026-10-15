import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { Button } from '../ui/Button';

export function InquiryModal() {
  const { isOpen, closeModal, modalSource } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Thu thập dữ liệu khách hàng điền vào
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Thêm nguồn dự án (ví dụ: The Berkley) để bạn biết khách đến từ đâu
    data.source = modalSource || "Website General";

    try {
      // Gửi sang Webhook của Make/LadiFlow
      await fetch('https://stephen-hub.com/webhook/berkley', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      
      // Hiển thị trạng thái thành công sau khi gửi xong
      setIsSubmitted(true);
    } catch (error) {
      console.error("Lỗi gửi dữ liệu:", error);
      // Vẫn hiện thành công để không làm gián đoạn trải nghiệm khách, 
      // nhưng bạn nên kiểm tra console nếu không thấy data về.
      setIsSubmitted(true); 
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-[#070F1E]/80 backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      
      <div className="relative bg-[#0B2D72] border border-[#58A0C8]/30 w-full max-w-lg shadow-2xl overflow-hidden animate-[scaleIn_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-[#C0C0C0] hover:text-white z-10 p-2"
        >
          <iconify-icon icon="solar:close-square-linear" class="text-2xl"></iconify-icon>
        </button>

        {!isSubmitted ? (
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#070F1E] border border-[#C0C0C0]/20 flex items-center justify-center text-[#C0C0C0] font-serif text-2xl relative">
                TN
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#0B2D72] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-white">Thảo Hiền</h3>
                <p className="text-xs text-[#58A0C8]">GĐ Quản Lý Phân Khúc Hạng Sang</p>
              </div>
            </div>

            <h4 className="text-white text-lg font-medium mb-4">Nhận báo giá từ {modalSource}</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  name="fullname"
                  type="text" 
                  placeholder="Họ và tên *" 
                  required
                  minLength={4}
                  className="w-full bg-[#070F1E]/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#58A0C8] transition-colors"
                />
              </div>
              <div>
                <input 
                  name="phone"
                  type="tel" 
                  placeholder="Số điện thoại *" 
                  required
                  minLength={9}
                  className="w-full bg-[#070F1E]/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#58A0C8] transition-colors"
                />
              </div>
              <div>
                <input 
                  name="email"
                  type="email" 
                  placeholder="Email (không bắt buộc)" 
                  className="w-full bg-[#070F1E]/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#58A0C8] transition-colors"
                />
              </div>
              
              <div className="pt-2">
                <Button type="submit" variant="primary" fullWidth>
                  NHẬN BÁO GIÁ NGAY
                </Button>
              </div>
              
              <p className="text-center text-[10px] text-[#C0C0C0] mt-4 flex items-center justify-center gap-1">
                <iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
                Bảo mật 100% — Phản hồi trong 15 phút
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center bg-[#0B2D72]">
            <div className="w-20 h-20 bg-[#58A0C8]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#58A0C8]">
              <iconify-icon icon="solar:check-circle-bold" class="text-4xl"></iconify-icon>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-2">Đăng Ký Thành Công!</h3>
            <p className="text-[#C0C0C0] text-sm mb-8 leading-relaxed">
              Cảm ơn anh/chị! Chuyên viên Thanh Nhã sẽ liên hệ tư vấn trong vòng 15 phút.
            </p>
            <div className="space-y-3">
              <a href="https://zalo.me/0933155800" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#0068FF] text-white text-sm font-medium transition hover:bg-[#0052cc]">
                <iconify-icon icon="simple-icons:zalo" class="text-lg"></iconify-icon> Nhắn Zalo Ngay
              </a>
              <a href="tel:0933155800" className="flex items-center justify-center gap-2 w-full py-3 bg-[#070F1E] text-white border border-white/10 text-sm font-medium transition hover:bg-white/5">
                <iconify-icon icon="solar:phone-bold" class="text-lg text-[#58A0C8]"></iconify-icon> Gọi Hotline
              </a>
            </div>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}} />
    </div>
  );
}