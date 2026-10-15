import React from 'react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ value, suffix, label, icon, color, isInView, delay }) {
  const count = useCountUp(value, 2000, 0, isInView);

  return (
    <div
      className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 mx-auto rounded-xl bg-${color}-500/10 border border-${color}-500/20 flex items-center justify-center mb-3`}
        style={{ background: `rgba(var(--tw-${color}), 0.1)` }}
      >
        <iconify-icon icon={icon} width="22" style={{ color: color === 'indigo' ? '#818cf8' : color === 'emerald' ? '#34d399' : color === 'violet' ? '#a78bfa' : '#fbbf24' }}></iconify-icon>
      </div>
      <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-zinc-500">{label}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, isInView] = useInView();

  const stats = [
    { value: 500, suffix: '+', label: 'Shop đang sử dụng', icon: 'solar:shop-2-linear', color: 'indigo' },
    { value: 50000, suffix: '+', label: 'Đơn hàng đã xử lý', icon: 'solar:cart-check-linear', color: 'emerald' },
    { value: 2000, suffix: '+', label: 'Bot đang hoạt động', icon: 'solar:bot-linear', color: 'violet' },
    { value: 99, suffix: '.9%', label: 'Uptime', icon: 'solar:shield-check-linear', color: 'amber' },
  ];

  return (
    <section className="py-20 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} isInView={isInView} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}