import { scheduleData } from '../data/events';
import { clsx } from 'clsx';

export default function Schedule() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_50%,rgba(0,180,255,0.04),transparent)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-16">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-luxe-blue-electric mb-3">Every Week</p>
          <h1 className="font-display text-5xl font-medium tracking-tight uppercase mb-6">Weekly Lineup</h1>
          <p className="text-luxe-white-dim text-sm leading-relaxed max-w-xl">
            Something different every night. Never a dull moment at Luxe. Check out our standard weekly rotation below.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {scheduleData.map((day, idx) => (
            <div 
              key={day.day}
              className={clsx(
                "glass-panel p-6 rounded transition-all duration-300 hover:-translate-y-1 hover:border-luxe-blue-electric relative overflow-hidden group",
                day.closed && "opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
              )}
            >
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="font-display text-[6rem] font-bold text-white">{idx + 1}</span>
              </div>
              <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-luxe-blue-electric mb-4 relative z-10">{day.day}</p>
              <h3 className="font-display text-lg font-medium tracking-wide uppercase text-white mb-2 relative z-10">{day.theme}</h3>
              <p className="text-xs text-luxe-white-dim relative z-10">{day.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}