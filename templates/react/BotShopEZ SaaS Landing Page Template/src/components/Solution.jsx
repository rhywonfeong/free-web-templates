import React from 'react';
import { useInView } from '../hooks/useInView';

const inputs = [
  { icon: 'simple-icons:telegram', label: 'Bot Token', desc: 'Từ @BotFather', color: '#38bdf8' },
  { icon: 'solar:link-minimalistic-2-linear', label: 'Server Webhook', desc: 'BotShop tự tạo', color: '#a78bfa', auto: true },
  { icon: 'solar:card-transfer-linear', label: 'SePay Webhook', desc: 'Copy URL vào SePay', color: '#34d399' },
  { icon: 'solar:bank-linear', label: 'Bank Account', desc: 'Số TK + Chủ TK', color: '#fbbf24' },
];

export default function Solution() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent" />
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <iconify-icon icon="solar:check-circle-linear" width="14" style={{ color: '#34d399' }}></iconify-icon>
            <span className="text-xs font-medium text-emerald-400">Giải pháp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Plug & Play — <span className="text-indigo-400">Setup dưới 5 phút</span>
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Chỉ cần nhập Bot Token + Bank Account, copy 1 URL vào SePay — bot bán hàng tự động 24/7.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {inputs.map((item, i) => (
            <div
              key={i}
              className={`relative group rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {item.auto && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/30">
                  <span className="text-xs font-medium text-violet-400">Auto</span>
                </div>
              )}
              <div className="w-12 h-12 mx-auto rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <iconify-icon icon={item.icon} width="22" style={{ color: item.color }}></iconify-icon>
              </div>
              <div className="text-sm font-medium text-white mb-0.5">{item.label}</div>
              <div className="text-xs text-zinc-500">{item.desc}</div>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <iconify-icon icon="solar:arrow-right-linear" width="14" style={{ color: '#52525b' }}></iconify-icon>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <iconify-icon icon="solar:rocket-2-linear" width="20" style={{ color: '#34d399' }}></iconify-icon>
            <span className="text-sm font-medium text-emerald-400">Bot bán hàng tự động 24/7 — Không cần lập trình!</span>
          </div>
        </div>
      </div>
    </section>
  );
}