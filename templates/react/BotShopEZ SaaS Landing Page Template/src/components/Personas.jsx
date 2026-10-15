import React from 'react';
import { useInView } from '../hooks/useInView';

const personas = [
  {
    name: 'Nam',
    age: 28,
    role: 'Shop Admin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    story: 'Chủ shop bán tài khoản Cursor Ultra. Có kho 10-50 TK, muốn tuyển CTV bán giúp.',
    pain: 'Stock không đồng bộ, quản lý CTV bằng tay.',
    want: 'Kho chung tự trừ real-time, xem doanh thu từng CTV.',
    icon: 'solar:crown-linear',
    color: 'indigo',
  },
  {
    name: 'Huy',
    age: 22,
    role: 'CTV',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80',
    story: 'CTV bán tài khoản cho shop Nam. Giá gốc 2tr, bán 2.2tr — lời 200K/TK.',
    pain: 'Phải hỏi shop có hàng không, báo từng đơn thủ công.',
    want: 'Bot tự bán + tự giao, chỉ cần xem lợi nhuận.',
    icon: 'solar:user-linear',
    color: 'emerald',
  },
  {
    name: 'Hùng',
    age: 22,
    role: 'End Customer',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    story: 'Muốn mua Cursor giá rẻ. Thấy link bot trên group Telegram.',
    pain: 'Muốn mua nhanh, không thích chờ đợi hay nhắn tin.',
    want: 'Xem giá → Chọn → Quét QR → Nhận TK trong 30 giây.',
    icon: 'solar:cart-large-4-linear',
    color: 'sky',
  },
];

const colorStyles = {
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', icon: '#818cf8' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', icon: '#34d399' },
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', icon: '#38bdf8' },
};

export default function Personas() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 sm:py-32 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-4">
            <iconify-icon icon="solar:people-nearby-linear" width="14" style={{ color: '#38bdf8' }}></iconify-icon>
            <span className="text-xs font-medium text-sky-400">Ai sẽ dùng?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Dành cho <span className="text-sky-400">mọi vai trò</span> trong kinh doanh
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, i) => {
            const cs = colorStyles[p.color];
            return (
              <div
                key={p.name}
                className={`rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={p.avatar}
                    alt={p.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-zinc-700"
                  />
                  <div>
                    <div className="text-sm font-medium text-white">{p.name}, {p.age} tuổi</div>
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md ${cs.bg} ${cs.border} border`}>
                      <iconify-icon icon={p.icon} width="12" style={{ color: cs.icon }}></iconify-icon>
                      <span className={`text-xs font-medium ${cs.text}`}>{p.role}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{p.story}</p>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                    <div className="flex items-center gap-1.5 mb-1">
                      <iconify-icon icon="solar:fire-linear" width="12" style={{ color: '#ef4444' }}></iconify-icon>
                      <span className="text-xs font-medium text-red-400">Pain point</span>
                    </div>
                    <p className="text-xs text-zinc-400">{p.pain}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${cs.bg} ${cs.border} border`}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <iconify-icon icon="solar:star-linear" width="12" style={{ color: cs.icon }}></iconify-icon>
                      <span className={`text-xs font-medium ${cs.text}`}>Mong muốn</span>
                    </div>
                    <p className="text-xs text-zinc-400">{p.want}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}