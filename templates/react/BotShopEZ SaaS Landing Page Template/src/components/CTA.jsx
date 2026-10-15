import React from 'react';
import { useInView } from '../hooks/useInView';

export default function CTA() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 sm:py-32 relative">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-violet-600/15 to-purple-600/10" />
          <div className="absolute inset-0 bg-zinc-900/60" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl" />

          <div className="relative px-8 py-16 sm:px-16 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-6">
              <iconify-icon icon="solar:rocket-2-linear" width="28" style={{ color: '#fff' }}></iconify-icon>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Sẵn sàng tự động hóa bán hàng?
            </h2>
            <p className="text-base text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Tham gia hàng trăm shop đang sử dụng BotShopEZ để bán hàng tự động 24/7 trên Telegram. Setup chỉ 5 phút, bắt đầu miễn phí.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                Bắt đầu miễn phí ngay
                <iconify-icon icon="solar:arrow-right-linear" width="16" className="transition-transform group-hover:translate-x-1"></iconify-icon>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <iconify-icon icon="simple-icons:telegram" width="16"></iconify-icon>
                Liên hệ tư vấn
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-zinc-700/30">
              {[
                { icon: 'solar:shield-check-linear', text: 'Không phí ẩn' },
                { icon: 'solar:card-transfer-linear', text: 'Không giữ tiền' },
                { icon: 'solar:clock-circle-linear', text: 'Setup 5 phút' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <iconify-icon icon={item.icon} width="14" style={{ color: '#818cf8' }}></iconify-icon>
                  <span className="text-xs text-zinc-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}