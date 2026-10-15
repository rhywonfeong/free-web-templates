import React, { useState, useEffect } from 'react';

const messages = [
  "Khách hàng T.H.M vừa đặt chỗ ưu tiên căn góc 3PN view Landmark 81.",
  "Chỉ còn 2 suất booking ưu tiên cho căn hộ sân vườn tầng 3 trong đợt này.",
  "Khách hàng N.V.L vừa giao dịch thành công căn 2PN diện tích lớn tầng 15.",
  "Sự kiện tham quan không gian thực tế cuối tuần này đã kín 85% lịch đăng ký.",
  "Chính sách thanh toán 22% nhận nhà ngay đang nhận được sự quan tâm rất lớn từ các nhà đầu tư."
];

export function FomoTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing first message
    const initialTimer = setTimeout(() => setIsVisible(true), 4000);
    
    // Cycle messages every 15s (5s visible, 10s hidden)
    const cycleTimer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 1000); // Wait 1s before showing next to allow exit animation
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-8 left-4 md:left-8 z-40 max-w-sm animate-[slideInLeft_0.5s_ease-out]">
      <div className="bg-[#0B2D72]/90 backdrop-blur-md border border-[#F59E0B]/30 rounded-lg shadow-lg p-3 pr-10 relative">
        <p className="text-[#F59E0B] text-xs font-medium leading-relaxed">
          <iconify-icon icon="solar:bell-bing-linear" class="mr-2 inline align-text-bottom"></iconify-icon>
          {messages[currentIndex]}
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-[#C0C0C0] hover:text-white"
        >
          <iconify-icon icon="solar:close-circle-linear"></iconify-icon>
        </button>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideInLeft {
          from { transform: translateX(-120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}} />
    </div>
  );
}