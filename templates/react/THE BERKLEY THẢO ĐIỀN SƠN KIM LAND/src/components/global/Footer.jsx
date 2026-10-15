import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#070F1E] border-t border-white/10 py-12 text-center relative z-10 pb-24 md:pb-12">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-2xl text-white font-bold tracking-tight mb-2">The Berkley</h2>
        <p className="text-[#C0C0C0] text-xs uppercase tracking-widest mb-8">Phát triển bởi Sơn Kim Land</p>
        
        <p className="text-[#58A0C8] text-[10px] md:text-xs max-w-2xl mx-auto mb-4 leading-relaxed opacity-70">
          Thông tin và hình ảnh trong website mang tính chất tham khảo. Vui lòng liên hệ trực tiếp chuyên viên tư vấn để cập nhật chính sách, bảng giá và tình trạng giỏ hàng chính xác nhất tại thời điểm hiện tại.
        </p>
        <p className="text-[#0B2D72] text-[10px]">© 2024 The Berkley Thảo Điền. All rights reserved.</p>
      </div>
    </footer>
  );
}