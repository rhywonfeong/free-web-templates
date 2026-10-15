import React from 'react';
import { useData } from '../context/DataContext';
import GlassCard from '../components/GlassCard';

const actionAccentMap = {
  blue: {
    wrap: 'from-sky-500/16 to-blue-500/8 border-sky-400/10',
    icon: 'text-sky-300 bg-sky-400/10 border-sky-400/20'
  },
  purple: {
    wrap: 'from-purple-500/16 to-fuchsia-500/8 border-purple-400/10',
    icon: 'text-purple-300 bg-purple-400/10 border-purple-400/20'
  },
  emerald: {
    wrap: 'from-emerald-500/16 to-teal-500/8 border-emerald-400/10',
    icon: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20'
  },
  amber: {
    wrap: 'from-amber-500/16 to-orange-500/8 border-amber-400/10',
    icon: 'text-amber-300 bg-amber-400/10 border-amber-400/20'
  }
};

export default function Dashboard() {
  const { car, alerts, stats, quickActions } = useData();

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <header className="mt-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-violet-500 p-[2px] shadow-[0_12px_30px_rgba(59,130,246,0.25)]">
            <div className="h-11 w-11 overflow-hidden rounded-full border border-[#0b0f18] bg-[#050505]">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-0.5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">Welcome Back</p>
            <h1 className="tracking-tight text-lg font-semibold text-white">Alex Driver</h1>
          </div>
        </div>

        <button
          aria-label="Notifications"
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/[0.08]"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-violet-500/10" />
          <iconify-icon icon="solar:bell-bing-bold" width="20" class="relative z-10 text-slate-200" />
          <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full border-2 border-[#07101a] bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.85)]" />
        </button>
      </header>

      <div className="group relative h-56 w-full overflow-hidden rounded-[30px] border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.32)] opacity-0 animate-fade-in delay-100">
        <img
          src={car.image}
          alt={car.model}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,7,11,0.92),rgba(5,7,11,0.64)_45%,rgba(5,7,11,0.16)_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-transparent" />
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300 backdrop-blur-xl">
          Digital Twin Sync
        </div>

        <div className="absolute inset-y-0 left-5 z-10 flex flex-col justify-center py-5">
          <div className="mb-3 inline-flex w-max items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300 shadow-[0_8px_24px_rgba(14,165,233,0.12)] backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="pulse-ring absolute inset-0 rounded-full border border-sky-300/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
            </span>
            Live Vehicle Stream
          </div>

          <h2 className="mb-1 flex items-center gap-2 tracking-tight text-[30px] font-semibold leading-none text-white">
            {car.model}
            <span className="rounded-xl border border-white/10 bg-white/[0.08] px-2 py-1 text-xs font-medium text-slate-300 backdrop-blur-md">
              {car.year}
            </span>
          </h2>

          <div className="mb-4 text-sm font-medium tracking-[0.18em] text-slate-400">
            {car.vin.substring(0, 8)}•••••••
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-sm font-medium text-white backdrop-blur-md">
              <iconify-icon icon="solar:routing-2-bold" class="text-sky-300" />
              {car.mileage.toLocaleString()} km
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-sm font-medium text-white backdrop-blur-md">
              <iconify-icon icon="solar:engine-bold" class="text-violet-300" />
              {car.engine}
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-10 grid grid-cols-2 gap-2">
          {[
            { label: 'Health', value: `${stats.health}%`, color: 'text-emerald-300' },
            { label: 'Fuel', value: `${stats.fuelLevel}%`, color: 'text-sky-300' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-xl"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
              <div className={`mt-1 text-sm font-semibold ${item.color}`}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="opacity-0 animate-fade-in delay-200">
        <div className="mb-3 flex items-center justify-between px-1">
          <h2 className="tracking-tight text-sm font-semibold text-white">Quick Control</h2>
          <span className="text-xs font-medium text-slate-500">Fast access</span>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action) => {
            const accent = actionAccentMap[action.accent];
            return (
              <button
                key={action.id}
                className={`group rounded-[22px] border bg-gradient-to-br p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.24)] ${accent.wrap}`}
              >
                <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border ${accent.icon}`}>
                  <iconify-icon icon={action.icon} width="20" />
                </div>
                <div className="text-[11px] font-medium leading-snug text-slate-200">{action.label}</div>
              </button>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3 opacity-0 animate-fade-in delay-200">
        <GlassCard className="h-40" highlight="emerald" gradient>
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 shadow-[0_10px_24px_rgba(16,185,129,0.12)]">
              <iconify-icon icon="solar:heart-pulse-bold" width="18" />
            </div>
            <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Optimal
            </span>
          </div>
          <div className="mt-3">
            <div className="flex items-end gap-1">
              <span className="tracking-tight text-3xl font-semibold leading-none text-white">{stats.health}</span>
              <span className="mb-1 text-sm text-slate-400">%</span>
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500">System Health</div>
          </div>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/5">
            <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300" style={{ width: `${stats.health}%` }} />
          </div>
        </GlassCard>

        <GlassCard className="h-40" highlight="blue" gradient>
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10 text-sky-300 shadow-[0_10px_24px_rgba(14,165,233,0.12)]">
              <iconify-icon icon="solar:gas-station-bold" width="18" />
            </div>
            <span className="rounded-full border border-white/6 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300">
              {stats.avgConsumption} L/100
            </span>
          </div>
          <div className="mt-3">
            <div className="flex items-end gap-1">
              <span className="tracking-tight text-3xl font-semibold leading-none text-white">{stats.fuelLevel}</span>
              <span className="mb-1 text-sm text-slate-400">%</span>
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500">Est. Range 420km</div>
          </div>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/5">
            <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-blue-400" style={{ width: `${stats.fuelLevel}%` }} />
          </div>
        </GlassCard>

        <GlassCard className="h-36" highlight="purple">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
              <iconify-icon icon="solar:wallet-bold" width="16" />
            </div>
            <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              This Mth
            </span>
          </div>
          <div>
            <div className="flex items-end gap-1">
              <span className="tracking-tight text-2xl font-semibold text-white">{stats.monthlySpend.toLocaleString()}</span>
              <span className="mb-0.5 text-sm text-slate-400">₴</span>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-300">
              <iconify-icon icon="solar:trend-down-bold" />
              12% vs Sep
            </div>
          </div>
        </GlassCard>

        <GlassCard className="h-36" highlight="amber">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-500/10 text-amber-300">
              <iconify-icon icon="solar:battery-charge-bold" width="16" />
            </div>
            <span className="rounded-full bg-amber-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Stable
            </span>
          </div>
          <div>
            <div className="flex items-end gap-1">
              <span className="tracking-tight text-2xl font-semibold text-white">{stats.battery}</span>
              <span className="mb-0.5 text-sm text-slate-400">%</span>
            </div>
            <div className="mt-2 text-xs font-medium text-slate-500">Battery reserve healthy</div>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="opacity-0 animate-fade-in delay-300" highlight="purple" gradient elevated>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <iconify-icon icon="solar:cpu-bolt-bold" width="22" />
            </div>
            <div>
              <div className="mb-1 flex items-center gap-2">
                <h3 className="tracking-tight text-sm font-semibold text-white">Predictive Service Window</h3>
                <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                  AI Layer
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                Best slot in the next 14 days to combine oil service and suspension inspection with minimal downtime.
              </p>
            </div>
          </div>
          <button className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/[0.1]">
            Review
          </button>
        </div>
      </GlassCard>

      <section className="mt-1 flex flex-col gap-3 opacity-0 animate-fade-in delay-300">
        <div className="mb-1 flex items-center justify-between px-1">
          <h2 className="flex items-center gap-2 tracking-tight text-sm font-semibold text-white">
            <iconify-icon icon="solar:magic-stick-3-bold" class="text-violet-300" />
            System Insights
          </h2>
          <span className="cursor-pointer text-xs font-medium text-slate-500 transition-colors hover:text-slate-300">View All</span>
        </div>

        {alerts.map((alert) => {
          const severityStyles = {
            warning: {
              line: 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.45)]',
              iconWrap: 'bg-amber-500/10 text-amber-300 border-amber-400/20',
              button: 'text-amber-300 hover:text-amber-200',
              glow: 'from-amber-500/12'
            },
            info: {
              line: 'bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.45)]',
              iconWrap: 'bg-sky-500/10 text-sky-300 border-sky-400/20',
              button: 'text-sky-300 hover:text-sky-200',
              glow: 'from-sky-500/12'
            },
            success: {
              line: 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.45)]',
              iconWrap: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
              button: 'text-emerald-300 hover:text-emerald-200',
              glow: 'from-emerald-500/12'
            }
          };

          const styles = severityStyles[alert.severity] || severityStyles.info;

          return (
            <GlassCard key={alert.id} className="relative !p-0 overflow-hidden" highlight="neutral">
              <div className={`absolute left-0 top-0 bottom-0 z-20 w-1 ${styles.line}`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${styles.glow} to-transparent opacity-70`} />

              <div className="relative z-10 flex items-start gap-4 p-4 pl-5">
                <div className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${styles.iconWrap}`}>
                  <iconify-icon
                    icon={
                      alert.severity === 'warning'
                        ? 'solar:danger-triangle-bold'
                        : alert.severity === 'success'
                        ? 'solar:graph-up-bold'
                        : 'solar:info-circle-bold'
                    }
                    width="20"
                  />
                </div>

                <div className="flex-1">
                  <div className="mb-1.5 flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold text-gray-100">{alert.title}</h3>
                    {alert.type === 'ai' && (
                      <span className="rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_8px_18px_rgba(99,102,241,0.24)]">
                        AI Predict
                      </span>
                    )}
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-slate-400">{alert.description}</p>
                  <button className={`flex items-center gap-1 text-xs font-semibold transition-colors ${styles.button}`}>
                    {alert.action}
                    <iconify-icon icon="solar:arrow-right-linear" class="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </section>
    </div>
  );
}