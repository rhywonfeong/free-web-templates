import React from 'react';
import { useInView } from '../hooks/useInView';

const problems = [
  {
    icon: 'solar:hand-shake-linear',
    problem: 'Vận hành thủ công',
    desc: 'Nhận tin nhắn → Check CK → Gửi tài khoản bằng tay. Mất thời gian, sai sót, không scale.',
    impact: 'Mất 2-3h/ngày',
    color: 'from-red-500/20 to-red-600/5',
    borderColor: 'border-red-500/20',
    iconColor: '#ef4444',
  },
  {
    icon: 'solar:refresh-circle-linear',
    problem: 'Stock không đồng bộ',
    desc: 'CTV bán cùng 1 kho hàng nhưng không có tool đồng bộ real-time → bán trùng, conflict.',
    impact: 'Mất 20% đơn',
    color: 'from-amber-500/20 to-amber-600/5',
    borderColor: 'border-amber-500/20',
    iconColor: '#f59e0b',
  },
  {
    icon: 'solar:wallet-money-linear',
    problem: 'Chi phí build bot cao',
    desc: 'Mỗi shop tự build bot: 500K — 2M VNĐ + bảo trì hàng tháng.',
    impact: '500K — 2M VNĐ',
    color: 'from-orange-500/20 to-orange-600/5',
    borderColor: 'border-orange-500/20',
    iconColor: '#f97316',
  },
  {
    icon: 'solar:question-circle-linear',
    problem: 'Không có giải pháp phù hợp',
    desc: 'Không SaaS nào tại VN kết hợp Telegram Bot + VietQR + mô hình CTV.',
    impact: 'Thị trường trống',
    color: 'from-purple-500/20 to-purple-600/5',
    borderColor: 'border-purple-500/20',
    iconColor: '#a855f7',
  },
];

export default function Problems() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <iconify-icon icon="solar:danger-triangle-linear" width="14" style={{ color: '#ef4444' }}></iconify-icon>
            <span className="text-xs font-medium text-red-400">Vấn đề hiện tại</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Shop online Telegram đang <span className="text-red-400">mất thời gian & tiền</span>
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Mỗi ngày, hàng nghìn shop tại Việt Nam vẫn đang vận hành bán hàng thủ công trên Telegram.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900/60 border border-zinc-700/50 flex items-center justify-center flex-shrink-0">
                  <iconify-icon icon={item.icon} width="20" style={{ color: item.iconColor }}></iconify-icon>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-white mb-1">{item.problem}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-3">{item.desc}</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-700/50">
                    <iconify-icon icon="solar:graph-down-linear" width="14" style={{ color: item.iconColor }}></iconify-icon>
                    <span className="text-xs font-medium" style={{ color: item.iconColor }}>{item.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}