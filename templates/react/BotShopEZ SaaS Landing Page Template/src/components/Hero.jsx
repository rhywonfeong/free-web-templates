import React from 'react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [ref, isInView] = useInView();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-indigo-300">Nền tảng SaaS #1 cho Telegram Bot bán hàng</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            <span className="text-white">Tự động hóa</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              bán hàng Telegram
            </span>
            <br />
            <span className="text-white">không cần code</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed">
            Tạo bot Telegram bán hàng tự động trong 5 phút. Tích hợp VietQR, 
            quản lý kho chung, mô hình CTV — tất cả trong một nền tảng duy nhất.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              Bắt đầu miễn phí
              <iconify-icon icon="solar:arrow-right-linear" width="16" className="transition-transform group-hover:translate-x-1"></iconify-icon>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-zinc-300 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-white/5 transition-all duration-300"
            >
              <iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
              Xem cách hoạt động
            </a>
          </div>

          {/* Bot preview */}
          <div className="max-w-lg mx-auto">
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/80 p-6 shadow-2xl">
              {/* Telegram header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-800/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <iconify-icon icon="simple-icons:telegram" width="20" style={{ color: '#fff' }}></iconify-icon>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">ShopCursorVN Bot</div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    online
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3">
                <div className="flex justify-start">
                  <div className="bg-zinc-800 rounded-2xl rounded-tl-md px-4 py-2.5 max-w-xs">
                    <p className="text-sm text-zinc-200">🛍 <span className="font-medium">Chào mừng đến ShopCursorVN!</span></p>
                    <p className="text-xs text-zinc-400 mt-1">Chọn sản phẩm bên dưới để mua ngay:</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 ml-2">
                  {['💎 Cursor Ultra — 2.000.000đ', '🔑 ChatGPT Plus — 350.000đ', '📦 Xem tất cả'].map((btn, i) => (
                    <button
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        i === 0
                          ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30'
                          : 'bg-zinc-800/80 text-zinc-400 border border-zinc-700 hover:bg-zinc-700'
                      }`}
                    >
                      {btn}
                    </button>
                  ))}
                </div>

                <div className="flex justify-end">
                  <div className="bg-indigo-600/20 border border-indigo-500/20 rounded-2xl rounded-tr-md px-4 py-2.5">
                    <p className="text-sm text-indigo-200">💎 Cursor Ultra — 2.000.000đ</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-zinc-800 rounded-2xl rounded-tl-md px-4 py-2.5 max-w-xs">
                    <p className="text-xs text-zinc-400 mb-2">📱 Quét mã QR để thanh toán:</p>
                    <div className="w-32 h-32 mx-auto bg-white rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <iconify-icon icon="solar:qr-code-linear" width="48" style={{ color: '#18181b' }}></iconify-icon>
                        <p className="text-xs text-zinc-600 mt-1 font-medium">VietQR</p>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-500 mt-2 text-center">⏳ Hết hạn sau 10 phút</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-emerald-600/20 border border-emerald-500/20 rounded-2xl rounded-tl-md px-4 py-2.5">
                    <p className="text-sm text-emerald-300">✅ Thanh toán thành công!</p>
                    <p className="text-xs text-emerald-400/80 mt-0.5">Tài khoản đã được gửi bên dưới 👇</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-medium text-emerald-400 animate-float">
                ⚡ 30s giao hàng
              </div>
              <div className="absolute -bottom-3 -left-3 px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-xs font-medium text-violet-400 animate-float" style={{ animationDelay: '2s' }}>
                🔄 Stock real-time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}