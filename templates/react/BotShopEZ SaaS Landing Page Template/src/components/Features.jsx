import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import clsx from 'clsx';

const features = [
  {
    id: 'bot',
    icon: 'solar:bot-linear',
    label: 'Telegram Bot Engine',
    title: 'Bot bán hàng thông minh',
    desc: 'Chạy nhiều bot đồng thời. Hỗ trợ 3 loại sản phẩm: Credential (tự động giao), Invite (email), Preorder. Menu interactive với inline keyboard.',
    highlights: ['Multi-bot runtime', 'VietQR tự động', 'Auto-deliver 30s', 'Coupon & Referral'],
    color: 'indigo',
  },
  {
    id: 'stock',
    icon: 'solar:box-linear',
    label: 'Quản lý kho',
    title: 'Kho chung, stock real-time',
    desc: 'Admin và CTV dùng chung kho hàng. Import hàng loạt qua Excel/CSV. Stock đồng bộ tức thì khi bất kỳ bot nào bán.',
    highlights: ['Shared stock pool', 'Bulk import Excel', 'Low stock alert', 'Audit log'],
    color: 'violet',
  },
  {
    id: 'ctv',
    icon: 'solar:users-group-rounded-linear',
    label: 'Mô hình CTV',
    title: 'Quản lý đội ngũ CTV',
    desc: 'Hai chế độ: Pre-pay (nhập hàng) và Post-pay (ký gửi). CTV có bot riêng, bank riêng, tự set giá. Admin theo dõi doanh thu & công nợ.',
    highlights: ['Pre-pay & Post-pay', 'Quota system', 'Debt tracking', 'Credit limit'],
    color: 'emerald',
  },
  {
    id: 'payment',
    icon: 'solar:card-transfer-linear',
    label: 'Thanh toán',
    title: 'Tích hợp VietQR & SePay',
    desc: 'Khách CK trực tiếp vào bank của shop/CTV. BotShop chỉ nhận webhook xác nhận — không can thiệp dòng tiền.',
    highlights: ['VietQR generation', 'SePay webhook', 'Multi-bank backup', 'Pluggable provider'],
    color: 'amber',
  },
  {
    id: 'analytics',
    icon: 'solar:chart-2-linear',
    label: 'Analytics',
    title: 'Dashboard & Báo cáo',
    desc: 'Tổng quan doanh thu, đơn hàng, tồn kho. So sánh hiệu suất CTV. Export CSV/PDF. Dự đoán hết hàng.',
    highlights: ['Revenue charts', 'CTV comparison', 'Export reports', 'Inventory forecast'],
    color: 'sky',
  },
  {
    id: 'security',
    icon: 'solar:shield-check-linear',
    label: 'Bảo mật',
    title: 'An toàn & Phân quyền',
    desc: 'Webhook URL unique & unguessable cho mỗi shop. Phân quyền 3 cấp: Super Admin > Shop Admin > CTV. Atomic transactions.',
    highlights: ['Unique webhook secrets', '3-level RBAC', 'Atomic orders', 'Rate limiting'],
    color: 'rose',
  },
];

const colorMap = {
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', icon: '#818cf8', activeBg: 'bg-indigo-500/15' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', icon: '#a78bfa', activeBg: 'bg-violet-500/15' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', icon: '#34d399', activeBg: 'bg-emerald-500/15' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', icon: '#fbbf24', activeBg: 'bg-amber-500/15' },
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', icon: '#38bdf8', activeBg: 'bg-sky-500/15' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', icon: '#fb7185', activeBg: 'bg-rose-500/15' },
};

export default function Features() {
  const [active, setActive] = useState('bot');
  const [ref, isInView] = useInView();
  const activeFeature = features.find((f) => f.id === active);
  const c = colorMap[activeFeature.color];

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <iconify-icon icon="solar:star-linear" width="14" style={{ color: '#818cf8' }}></iconify-icon>
            <span className="text-xs font-medium text-indigo-400">Tính năng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Mọi thứ bạn cần để <span className="text-indigo-400">bán hàng tự động</span>
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Từ quản lý kho, bot Telegram, thanh toán VietQR đến mô hình CTV — tất cả trong một.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {features.map((f) => {
              const fc = colorMap[f.color];
              const isActive = f.id === active;
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={clsx(
                    'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200',
                    isActive
                      ? `${fc.activeBg} border ${fc.border}`
                      : 'bg-transparent border border-transparent hover:bg-zinc-800/50 hover:border-zinc-700/50'
                  )}
                >
                  <div className={clsx(
                    'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors',
                    isActive ? `${fc.bg} border ${fc.border}` : 'bg-zinc-800/50 border border-zinc-700/50'
                  )}>
                    <iconify-icon icon={f.icon} width="18" style={{ color: isActive ? fc.icon : '#71717a' }}></iconify-icon>
                  </div>
                  <div>
                    <div className={clsx('text-sm font-medium transition-colors', isActive ? 'text-white' : 'text-zinc-400')}>{f.label}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className={`rounded-2xl ${c.bg} border ${c.border} p-8`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <iconify-icon icon={activeFeature.icon} width="22" style={{ color: c.icon }}></iconify-icon>
                </div>
                <div>
                  <div className={`text-xs font-medium ${c.text} mb-0.5`}>{activeFeature.label}</div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">{activeFeature.title}</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{activeFeature.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                {activeFeature.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                    <iconify-icon icon="solar:check-circle-linear" width="16" style={{ color: c.icon }}></iconify-icon>
                    <span className="text-sm text-zinc-300">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}