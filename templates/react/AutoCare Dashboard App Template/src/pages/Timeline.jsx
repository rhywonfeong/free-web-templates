import React from 'react';
import { useData } from '../context/DataContext';
import GlassCard from '../components/GlassCard';

const getIconForType = (type) => {
  switch(type) {
    case 'fuel': return 'solar:gas-station-bold';
    case 'service': return 'solar:wrench-bold';
    case 'repair': return 'solar:danger-triangle-bold';
    default: return 'solar:document-bold';
  }
};

const getToneForType = (type) => {
  switch(type) {
    case 'fuel':
      return {
        chip: 'text-sky-300 bg-sky-500/10 border-sky-400/20',
        dot: 'bg-sky-400',
        card: 'blue'
      };
    case 'service':
      return {
        chip: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20',
        dot: 'bg-emerald-400',
        card: 'emerald'
      };
    case 'repair':
      return {
        chip: 'text-amber-300 bg-amber-500/10 border-amber-400/20',
        dot: 'bg-amber-400',
        card: 'amber'
      };
    default:
      return {
        chip: 'text-gray-300 bg-gray-500/10 border-gray-400/20',
        dot: 'bg-gray-400',
        card: 'neutral'
      };
  }
};

export default function Timeline() {
  const { events } = useData();

  return (
    <div className="animate-fade-in flex flex-col h-full">
      <header className="mt-2 mb-6 flex justify-between items-end gap-3">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-400/15 bg-sky-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300">
            <iconify-icon icon="solar:archive-bold" />
            Verified History
          </div>
          <h1 className="tracking-tight text-3xl font-semibold text-white mb-1">Timeline</h1>
          <p className="text-sm text-gray-400">Your digital vehicle passport with service-grade clarity.</p>
        </div>
        <button className="flex items-center gap-1 rounded-full border border-sky-400/15 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-300 transition-colors hover:bg-sky-500/15">
          <iconify-icon icon="solar:export-linear" />
          Export PDF
        </button>
      </header>

      <GlassCard className="mb-5" highlight="blue" gradient>
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-1">Records integrity</div>
            <div className="tracking-tight text-lg font-semibold text-white">2 events L3 verified</div>
          </div>
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-300">
            Trusted log
          </div>
        </div>
      </GlassCard>

      <div className="relative space-y-5 border-l border-white/10 pl-6 pb-8">
        {events.map((event, index) => {
          const tone = getToneForType(event.type);

          return (
            <div key={event.id} className={`relative opacity-0 animate-fade-in delay-${(index % 3 + 1) * 100}`}>
              <div className="absolute -left-[33px] top-7 z-10 flex h-4 w-4 items-center justify-center rounded-full border-[3px] border-[#05070b] bg-[#0b1018] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                <div className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
              </div>

              <GlassCard className="transition-all duration-300 hover:-translate-y-0.5" highlight={tone.card}>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-2xl border p-2 ${tone.chip}`}>
                      <iconify-icon icon={getIconForType(event.type)} width="18" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-100">{event.title}</h3>
                      <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-500">
                        <span>{new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span className="h-1 w-1 rounded-full bg-gray-600"></span>
                        <span className="font-mono">{event.mileage.toLocaleString()} km</span>
                      </div>
                    </div>
                  </div>
                  <div className="tracking-tight text-sm font-semibold text-white">{event.cost}</div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-gray-400">
                    <iconify-icon icon="solar:map-point-linear" />
                    {event.location}
                  </span>

                  {event.verified ? (
                    <span className="flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-emerald-300">
                      <iconify-icon icon="solar:verified-check-bold" />
                      L3 Verified
                    </span>
                  ) : (
                    <span className="rounded-full border border-white/8 bg-white/5 px-2.5 py-1 text-slate-400">
                      Logged manually
                    </span>
                  )}
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}