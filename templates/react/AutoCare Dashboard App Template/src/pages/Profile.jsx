import React from 'react';
import GlassCard from '../components/GlassCard';
import { useData } from '../context/DataContext';

export default function Profile() {
  const { car } = useData();

  const menuItems = [
    {
      title: 'Upgrade to Premium',
      subtitle: 'Unlock AI predictive maintenance',
      icon: 'solar:crown-star-bold',
      iconClass: 'text-sky-300 bg-sky-500/10 border-sky-400/20',
      badge: 'Popular'
    },
    {
      title: 'Preferences',
      subtitle: 'Driving units, alerts, and appearance',
      icon: 'solar:settings-bold',
      iconClass: 'text-slate-300 bg-white/5 border-white/10'
    },
    {
      title: 'Privacy & Consent',
      subtitle: 'Control data sharing and exports',
      icon: 'solar:shield-keyhole-bold',
      iconClass: 'text-violet-300 bg-violet-500/10 border-violet-400/20'
    }
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <header className="mt-2 mb-2 text-center">
        <div className="relative mx-auto mb-4 w-max">
          <div className="rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-violet-500 p-[2px] shadow-[0_18px_40px_rgba(59,130,246,0.28)]">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#0b0f18] bg-[#050505]">
              <iconify-icon icon="solar:user-bold" width="36" class="text-slate-300" />
            </div>
          </div>
          <div className="absolute -bottom-1 right-0 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Active
          </div>
        </div>

        <h1 className="tracking-tight text-2xl font-semibold text-white">Alex Driver</h1>
        <p className="mt-1 text-sm text-gray-400">Standard Plan</p>
      </header>

      <GlassCard highlight="blue" gradient elevated>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-400/15 bg-sky-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300">
              Connected Vehicle
            </div>
            <h2 className="tracking-tight text-lg font-semibold text-white">
              {car.make} {car.model}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {car.year} • {car.engine} • {car.mileage.toLocaleString()} km
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-slate-300">
            Synced
          </div>
        </div>
      </GlassCard>

      <GlassCard className="!p-0 overflow-hidden" highlight="neutral">
        {menuItems.map((item, index) => (
          <button
            key={item.title}
            className={`flex w-full items-center justify-between px-4 py-4 text-left transition-colors duration-300 hover:bg-white/[0.04] ${index !== menuItems.length - 1 ? 'border-b border-white/6' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${item.iconClass}`}>
                <iconify-icon icon={item.icon} width="20" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-100">{item.title}</span>
                  {item.badge && (
                    <span className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-gray-500">{item.subtitle}</div>
              </div>
            </div>
            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-gray-500" />
          </button>
        ))}
      </GlassCard>

      <GlassCard highlight="purple">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
            <iconify-icon icon="solar:shield-user-bold" width="20" />
          </div>
          <div>
            <h3 className="tracking-tight text-sm font-semibold text-white">Account security</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Biometric login and export protection are enabled for a safer record vault.
            </p>
          </div>
        </div>
      </GlassCard>

      <button className="w-full rounded-2xl border border-red-400/20 bg-red-500/5 py-4 text-sm font-medium text-red-300 transition-all duration-300 hover:bg-red-500/10 hover:text-red-200">
        Log Out
      </button>
    </div>
  );
}