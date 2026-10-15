import React, { useState, useEffect } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { useReveal } from '../hooks/useReveal';

function AnimatedCounter({ value, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useReveal(0.5);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    const incrementTime = (duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  const displayValue = isNaN(parseInt(value)) ? value : `${count}${suffix}`;

  return <span ref={ref}>{displayValue}</span>;
}

export function Stats() {
  return (
    <section className="py-24 bg-[#0B2D72] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_facade_thucte_metro.webp.webp')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <Reveal>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">Con Số Nói Lên Tất Cả</h2>
          <p className="text-lg text-[#58A0C8] mb-16">Sự hiếm có của The Berkley</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          
          <Reveal delay={100} className="col-span-2 md:col-span-1 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0">
            <div className="text-6xl md:text-7xl font-serif text-white mb-2 relative inline-block">
              <AnimatedCounter value="85" />
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#58A0C8]"></div>
            </div>
            <h4 className="text-[#C0C0C0] font-medium tracking-widest uppercase text-sm mt-6 mb-1">Căn hộ</h4>
            <p className="text-[#58A0C8] text-xs italic">Phiên bản giới hạn độc bản</p>
          </Reveal>

          <Reveal delay={200} className="border-b border-r border-white/10 md:border-b-0 pb-8 md:pb-0 pr-4 md:pr-0">
            <div className="text-4xl md:text-5xl font-serif text-white mb-2"><AnimatedCounter value="05" /></div>
            <h4 className="text-[#C0C0C0] font-medium tracking-widest uppercase text-xs mt-4 mb-1">Căn/tầng</h4>
            <p className="text-[#58A0C8] text-[10px] md:text-xs italic">Riêng tư tuyệt đối</p>
          </Reveal>

          <Reveal delay={300} className="border-b border-white/10 md:border-b-0 md:border-r pb-8 md:pb-0 pl-4 md:pl-0">
            <div className="text-4xl md:text-5xl font-serif text-white mb-2"><AnimatedCounter value="250" /></div>
            <h4 className="text-[#C0C0C0] font-medium tracking-widest uppercase text-xs mt-4 mb-1">Triệu/m²</h4>
            <p className="text-[#58A0C8] text-[10px] md:text-xs italic">Đơn giá dự kiến</p>
          </Reveal>

          <Reveal delay={400} className="col-span-2 md:col-span-1 pt-4 md:pt-0">
            <div className="text-5xl font-serif text-[#58A0C8] mb-2"><AnimatedCounter value="22" suffix="%" /></div>
            <h4 className="text-[#C0C0C0] font-medium tracking-widest uppercase text-xs mt-4 mb-1">Thanh toán</h4>
            <p className="text-[#58A0C8] text-[10px] md:text-xs italic">Nhận nhà ngay lập tức</p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}