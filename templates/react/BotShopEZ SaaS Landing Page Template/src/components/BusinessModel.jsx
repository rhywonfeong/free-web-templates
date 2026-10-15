import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import clsx from 'clsx';

export default function BusinessModel() {
  const [ref, isInView] = useInView();
  const [mode, setMode] = useState('prepay');

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent" />
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <iconify-icon icon="solar:users-group-rounded-linear" width="14" style={{ color: '#34d399' }}></iconify-icon>
            <span className="text-xs font-medium text-emerald-400">Mô hình CTV</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Mở rộng kinh doanh với <span className="text-emerald-400">đội ngũ CTV</span>
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Hai mô hình linh hoạt: Pre-pay (nhập hàng trước) hoặc Post-pay (ký gửi). Kho chung, stock đồng bộ real-time.
          </p>
        </div>

        {/* Mode toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-zinc-900/80 border border-zinc-800 p-1">
            {[
              { id: 'prepay', label: 'Pre-pay (Nhập hàng)', icon: 'solar:wallet-money-linear' },
              { id: 'postpay', label: 'Post-pay (Ký gửi)', icon: 'solar:hand-shake-linear' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={clsx(
                  'flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  mode === m.id
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                    : 'text-zinc-400 hover:text-zinc-300 border border-transparent'
                )}
              >
                <iconify-icon icon={m.icon} width="16"></iconify-icon>
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Flow Diagram */}
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 sm:p-8">
            {/* Admin */}
            <div className="flex justify-center mb-8">
              <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-6 py-4 text-center max-w-xs w-full">
                <div className="w-12 h-12 mx-auto rounded-full bg-indigo-500/20 flex items-center justify-center mb-2">
                  <iconify-icon icon="solar:crown-linear" width="24" style={{ color: '#818cf8' }}></iconify-icon>
                </div>
                <div className="text-sm font-medium text-white">Shop Admin</div>
                <div className="text-xs text-zinc-400 mt-1">Kho: 10 TK × 2.000.000đ</div>
                <div className="text-xs text-indigo-400 mt-0.5">Bot + SePay + Bank riêng</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-2">
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-zinc-700" />
                <iconify-icon icon="solar:arrow-down-linear" width="16" style={{ color: '#52525b' }}></iconify-icon>
              </div>
            </div>

            {/* Pool */}
            <div className="flex justify-center mb-2">
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-6 py-3 text-center">
                <div className="flex items-center gap-2 justify-center">
                  <iconify-icon icon="solar:box-linear" width="16" style={{ color: '#a78bfa' }}></iconify-icon>
                  <span className="text-sm font-medium text-white">Kho chung (Pool): 10 TK</span>
                </div>
                <div className="text-xs text-zinc-500 mt-1">Stock đồng bộ real-time giữa tất cả bots</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-zinc-700" />
                <iconify-icon icon="solar:arrow-down-linear" width="16" style={{ color: '#52525b' }}></iconify-icon>
              </div>
            </div>

            {/* CTVs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <iconify-icon icon="solar:user-linear" width="18" style={{ color: '#34d399' }}></iconify-icon>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">CTV Huy</div>
                    <div className="text-xs text-emerald-400">Quota: 4 TK</div>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-zinc-400">
                  <div className="flex justify-between">
                    <span>Giá bán:</span>
                    <span className="text-emerald-400 font-medium">2.200.000đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lợi nhuận/TK:</span>
                    <span className="text-emerald-400 font-medium">+200.000đ</span>
                  </div>
                  {mode === 'prepay' ? (
                    <div className="flex justify-between">
                      <span>Đã CK cho Admin:</span>
                      <span className="text-white font-medium">8.000.000đ</span>
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <span>Công nợ:</span>
                      <span className="text-amber-400 font-medium">0đ</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-700/30 text-xs text-zinc-500 text-center">
                  Bot riêng + Bank riêng + SePay riêng
                </div>
              </div>

              <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <iconify-icon icon="solar:user-linear" width="18" style={{ color: '#38bdf8' }}></iconify-icon>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">CTV Hùng</div>
                    <div className="text-xs text-sky-400">Quota: 3 TK</div>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-zinc-400">
                  <div className="flex justify-between">
                    <span>Giá bán:</span>
                    <span className="text-sky-400 font-medium">2.500.000đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lợi nhuận/TK:</span>
                    <span className="text-sky-400 font-medium">+500.000đ</span>
                  </div>
                  {mode === 'prepay' ? (
                    <div className="flex justify-between">
                      <span>Đã CK cho Admin:</span>
                      <span className="text-white font-medium">6.000.000đ</span>
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <span>Công nợ:</span>
                      <span className="text-amber-400 font-medium">2.000.000đ</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-700/30 text-xs text-zinc-500 text-center">
                  Bot riêng + Bank riêng + SePay riêng
                </div>
              </div>
            </div>

            {mode === 'postpay' && (
              <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:info-circle-linear" width="18" style={{ color: '#fbbf24' }} className="mt-0.5 flex-shrink-0"></iconify-icon>
                  <div>
                    <div className="text-sm font-medium text-amber-400 mb-1">Post-pay: Theo dõi công nợ</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      CTV Hùng bán 1 TK → nợ Admin 2.000.000đ (giá gốc). Admin set credit limit — vượt thì bot CTV tạm dừng. Cuối tuần CTV CK thanh toán → Admin confirm → clear nợ.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}