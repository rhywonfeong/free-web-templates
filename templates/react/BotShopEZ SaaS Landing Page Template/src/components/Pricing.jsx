import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import clsx from 'clsx';

const plans = [
  {
    name: 'Free',
    price: '0',
    period: '/tháng',
    desc: 'Bắt đầu miễn phí, không cần thẻ tín dụng.',
    features: [
      { text: '1 bot (Admin only)', included: true },
      { text: '10 sản phẩm', included: true },
      { text: '50 đơn/tháng', included: true },
      { text: 'VietQR tự động', included: true },
      { text: 'Mô hình CTV', included: false },
      { text: 'Analytics nâng cao', included: false },
      { text: 'Export reports', included: false },
    ],
    cta: 'Bắt đầu miễn phí',
    popular: false,
    color: 'zinc',
  },
  {
    name: 'Pro',
    price: '250.000',
    period: 'đ/tháng',
    desc: 'Cho shop muốn mở rộng với đội ngũ CTV.',
    features: [
      { text: '1 bot Admin + 2 bot CTV', included: true },
      { text: 'Unlimited sản phẩm', included: true },
      { text: 'Unlimited đơn hàng', included: true },
      { text: 'VietQR tự động', included: true },
      { text: 'Mô hình CTV (2 CTV)', included: true },
      { text: 'Pre-pay & Post-pay', included: true },
      { text: 'Export reports', included: false },
    ],
    cta: 'Nâng cấp Pro',
    popular: true,
    color: 'indigo',
  },
  {
    name: 'Platinum',
    price: '600.000',
    period: 'đ/tháng',
    desc: 'Full tính năng cho shop lớn, team CTV đông.',
    features: [
      { text: '1 bot Admin + 10 bot CTV', included: true },
      { text: 'Unlimited sản phẩm', included: true },
      { text: 'Unlimited đơn hàng', included: true },
      { text: 'VietQR tự động', included: true },
      { text: 'Mô hình CTV (10 CTV)', included: true },
      { text: 'Analytics nâng cao', included: true },
      { text: 'Export CSV/PDF + API access', included: true },
    ],
    cta: 'Nâng cấp Platinum',
    popular: false,
    color: 'violet',
  },
];

export default function Pricing() {
  const [ref, isInView] = useInView();

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent" />
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <iconify-icon icon="solar:tag-price-linear" width="14" style={{ color: '#818cf8' }}></iconify-icon>
            <span className="text-xs font-medium text-indigo-400">Bảng giá</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Giá đơn giản, <span className="text-indigo-400">không phí ẩn</span>
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Bắt đầu miễn phí. Nâng cấp khi bạn cần mở rộng với CTV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={clsx(
                'relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1',
                plan.popular
                  ? 'bg-gradient-to-b from-indigo-500/10 to-indigo-600/5 border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10'
                  : 'bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700',
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-xs font-medium text-white">
                  Phổ biến nhất
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-zinc-500 mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-white">{plan.price}</span>
                  <span className="text-sm text-zinc-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <iconify-icon
                      icon={f.included ? 'solar:check-circle-linear' : 'solar:close-circle-linear'}
                      width="16"
                      style={{ color: f.included ? '#34d399' : '#3f3f46' }}
                    ></iconify-icon>
                    <span className={clsx('text-sm', f.included ? 'text-zinc-300' : 'text-zinc-600')}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  'w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                  plan.popular
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/25'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700'
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className={`text-center mt-8 transition-all duration-700 delay-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-zinc-500">
            BotShop <span className="text-zinc-400 font-medium">KHÔNG can thiệp dòng tiền</span>. Khách CK trực tiếp vào bank của bạn.
          </p>
        </div>
      </div>
    </section>
  );
}