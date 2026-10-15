import React from 'react';
import GlassCard from '../components/GlassCard';
import { useData } from '../context/DataContext';

export default function Planner() {
  const { plannerSummary, stats } = useData();

  const plannerItems = [
    {
      id: 1,
      category: 'Urgent',
      tone: 'amber',
      items: [
        { name: 'Engine Oil', status: 'Due in 2,500 km', progress: 85, color: 'from-amber-500 to-orange-400' },
        { name: 'Rear Silent Blocks', status: 'AI predicts failure soon', progress: 92, color: 'from-rose-500 to-red-400', isAi: true }
      ]
    },
    {
      id: 2,
      category: 'Upcoming (Next 10,000 km)',
      tone: 'blue',
      items: [
        { name: 'Spark Plugs', status: 'Due in 8,000 km', progress: 60, color: 'from-sky-500 to-blue-400' },
        { name: 'Cabin Filter', status: 'Due in 3 months', progress: 75, color: 'from-sky-500 to-indigo-400' }
      ]
    },
    {
      id: 3,
      category: 'Good Condition',
      tone: 'emerald',
      items: [
        { name: 'Brake Pads', status: 'Replaced 6,000 km ago', progress: 15, color: 'from-emerald-500 to-teal-400' },
        { name: 'Timing Belt', status: 'Due in 45,000 km', progress: 30, color: 'from-emerald-500 to-cyan-400' }
      ]
    }
  ];

  const summaryCards = [
    {
      label: 'Urgent',
      value: plannerSummary.urgent,
      icon: 'solar:danger-triangle-bold',
      classes: 'border-amber-400/10 bg-gradient-to-br from-amber-500/12 to-orange-500/6 text-amber-300'
    },
    {
      label: 'Upcoming',
      value: plannerSummary.upcoming,
      icon: 'solar:calendar-mark-bold',
      classes: 'border-sky-400/10 bg-gradient-to-br from-sky-500/12 to-blue-500/6 text-sky-300'
    },
    {
      label: 'Healthy',
      value: plannerSummary.healthy,
      icon: 'solar:shield-check-bold',
      classes: 'border-emerald-400/10 bg-gradient-to-br from-emerald-500/12 to-teal-500/6 text-emerald-300'
    }
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <header className="mt-2 mb-1">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
          <iconify-icon icon="solar:cpu-bolt-bold" />
          Level 3 Intelligence
        </div>
        <h1 className="tracking-tight text-3xl font-semibold text-white mb-2">Service Planner</h1>
        <p className="text-sm leading-relaxed text-gray-400">
          Smart intervals, predictive wear signals, and service bundling tuned for your specific car profile.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className={`rounded-[22px] border p-3 shadow-[0_12px_30px_rgba(0,0,0,0.16)] ${card.classes}`}
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/10">
              <iconify-icon icon={card.icon} width="18" />
            </div>
            <div className="tracking-tight text-2xl font-semibold text-white">{card.value}</div>
            <div className="mt-1 text-[11px] font-medium text-slate-300">{card.label}</div>
          </div>
        ))}
      </div>

      <GlassCard className="overflow-hidden !p-0" highlight="purple" gradient elevated>
        <div className="relative p-5">
          <div className="absolute right-[-12px] top-[-12px] h-28 w-28 rounded-full bg-violet-500/16 blur-3xl" />
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-400/15 bg-sky-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                Recommended Move
              </div>
              <h3 className="tracking-tight text-lg font-semibold text-white mb-1">Bundle & Save</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                Combine 2 urgent items in one visit and reduce expected service downtime by 38%.
              </p>
            </div>
            <button className="shrink-0 rounded-full bg-white text-black px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:bg-slate-100 active:scale-[0.97]">
              Find Partner
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-slate-300">
              Next service in {stats.nextServiceKm.toLocaleString()} km
            </span>
            <span className="rounded-full border border-emerald-400/15 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-medium text-emerald-300">
              Best time slot this month
            </span>
          </div>
        </div>
      </GlassCard>

      <div className="flex flex-col gap-8 pb-4">
        {plannerItems.map((section, idx) => (
          <section key={section.id} className={`opacity-0 animate-fade-in delay-${(idx + 1) * 100}`}>
            <div className="mb-4 ml-1 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                {section.category}
              </h2>
              <span className="text-[11px] font-medium text-slate-500">{section.items.length} items</span>
            </div>

            <div className="flex flex-col gap-3">
              {section.items.map((item, i) => (
                <GlassCard
                  key={i}
                  className="py-4"
                  highlight={section.tone}
                  gradient={item.isAi}
                >
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-100">{item.name}</span>
                        {item.isAi && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/15 bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300">
                            <iconify-icon icon="solar:magic-stick-3-linear" width="12" />
                            AI
                          </span>
                        )}
                      </div>
                      <span className="mt-1 block text-xs text-gray-500">{item.status}</span>
                    </div>
                    <span className="rounded-full border border-white/8 bg-white/5 px-2 py-1 text-xs font-mono text-gray-400">
                      {item.progress}% wear
                    </span>
                  </div>

                  <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>{item.progress > 80 ? 'Action soon recommended' : item.progress > 50 ? 'Monitor in next cycle' : 'Condition stable'}</span>
                    <button className="font-medium text-slate-300 transition-colors hover:text-white">
                      Open details
                    </button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}