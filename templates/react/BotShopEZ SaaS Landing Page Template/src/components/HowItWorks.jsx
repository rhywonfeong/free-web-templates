import React from 'react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    num: '01',
    icon: 'solar:user-plus-linear',
    title: 'Đăng ký & Tạo Shop',
    desc: 'Đăng ký tài khoản miễn phí, tạo shop mới với tên và slug riêng.',
    time: '1 phút',
  },
  {
    num: '02',
    icon: 'simple-icons:telegram',
    title: 'Kết nối Bot Telegram',
    desc: 'Nhập Bot Token từ @BotFather. BotShop tự verify và set webhook — bạn không cần làm gì thêm.',
    time: '1 phút',
  },
  {
    num: '03',
    icon: 'solar:card-transfer-linear',
    title: 'Cài đặt thanh toán',
    desc: 'Nhập thông tin bank. Copy webhook URL vào SePay dashboard. Xong!',
    time: '2 phút',
  },
  {
    num: '04',
    icon: 'solar:box-linear',
    title: 'Thêm sản phẩm & Import kho',
    desc: 'Tạo sản phẩm, set giá, import credentials hàng loạt qua Excel. Bot sẵn sàng bán!',
    time: '1 phút',
  },
  {
    num: '05',
    icon: 'solar:rocket-2-linear',
    title: 'Go Live!',
    desc: 'Bot tự động nhận đơn, tạo QR, xác nhận CK, giao hàng — 24/7 không nghỉ.',
    time: '∞',
  },
];

export default function HowItWorks() {
  const [ref, isInView] = useInView();

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <iconify-icon icon="solar:routing-linear" width="14" style={{ color: '#a78bfa' }}></iconify-icon>
            <span className="text-xs font-medium text-violet-400">Cách hoạt động</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Setup trong <span className="text-violet-400">5 phút</span>, bán hàng <span className="text-violet-400">24/7</span>
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Chỉ 5 bước đơn giản để bot bán hàng tự động trên Telegram.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-indigo-500/30 to-transparent" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative md:flex items-center transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className={`bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 ${isLeft ? '' : ''}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                          <iconify-icon icon={step.icon} width="20" style={{ color: '#a78bfa' }}></iconify-icon>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-violet-400">Bước {step.num}</span>
                          <h3 className="text-base font-medium text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                      <div className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50 ${isLeft ? 'md:float-right' : ''}`}>
                        <iconify-icon icon="solar:clock-circle-linear" width="12" style={{ color: '#a78bfa' }}></iconify-icon>
                        <span className="text-xs text-violet-400 font-medium">{step.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-zinc-950 shadow-lg shadow-violet-500/30" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}