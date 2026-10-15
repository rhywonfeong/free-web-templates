import { useEffect, useRef, useState } from 'react';

const stepsData = [
  {
    threshold: 0.1,
    leftContent: (
      <>
        <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">01 Context</span>
        <h3 className="font-sans text-base font-semibold text-obsidian">Decision Trigger</h3>
        <p className="text-xs text-subtle mt-1 hidden md:block">The strategic question is posed.</p>
      </>
    ),
    rightContent: (
      <div className="bg-white border border-border p-3 rounded shadow-sm inline-block">
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:record-circle-linear" class="text-subtle" width="14" height="14"></iconify-icon>
          <span className="text-xs font-medium text-obsidian">Should we pivot to Enterprise?</span>
        </div>
      </div>
    )
  },
  {
    threshold: 0.25,
    leftContent: (
      <div className="bg-white border border-border p-3 rounded shadow-sm inline-block text-left">
        <span className="text-[10px] text-subtle block mb-1">Assumption</span>
        <span className="text-xs font-medium text-obsidian">PLG growth is plateauing</span>
      </div>
    ),
    rightContent: (
      <>
        <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">02 Input</span>
        <h3 className="font-sans text-base font-semibold text-obsidian">Core Assumptions</h3>
        <p className="text-xs text-subtle mt-1 hidden md:block">Stating beliefs explicitly.</p>
      </>
    )
  },
  {
    threshold: 0.4,
    leftContent: (
      <>
        <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">03 Data</span>
        <h3 className="font-sans text-base font-semibold text-obsidian">Evidence</h3>
        <p className="text-xs text-subtle mt-1 hidden md:block">Validating with metrics.</p>
      </>
    ),
    rightContent: (
      <div className="bg-white border border-border p-3 rounded shadow-sm inline-flex items-center gap-3">
        <div className="w-8 h-8 bg-slate-50 rounded flex items-center justify-center border border-border/50">
          <iconify-icon icon="solar:chart-square-linear" class="text-subtle" width="14" height="14"></iconify-icon>
        </div>
        <div>
          <div className="text-[10px] text-subtle">Q3 Churn Analysis</div>
          <div className="text-xs font-bold text-obsidian">Churn up 12%</div>
        </div>
      </div>
    )
  },
  {
    threshold: 0.55,
    leftContent: (
      <div className="bg-white border border-border p-3 rounded shadow-sm inline-block max-w-[200px] text-left">
        <div className="flex gap-1 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
        </div>
        <span className="text-xs font-medium text-obsidian">High confidence that Enterprise LTV offsets CAC increase.</span>
      </div>
    ),
    rightContent: (
      <>
        <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">04 Logic</span>
        <h3 className="font-sans text-base font-semibold text-obsidian">Reasoning</h3>
        <p className="text-xs text-subtle mt-1 hidden md:block">Connecting the dots.</p>
      </>
    )
  },
  {
    threshold: 0.7,
    leftContent: (
      <>
        <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">05 Result</span>
        <h3 className="font-sans text-base font-semibold text-obsidian">Outcome</h3>
        <p className="text-xs text-subtle mt-1 hidden md:block">The consensus reached.</p>
      </>
    ),
    rightContent: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-obsidian text-white text-xs font-semibold shadow-lg shadow-obsidian/20">
        <span>Pivot Approved</span>
        <iconify-icon icon="solar:check-read-linear" width="12" height="12"></iconify-icon>
      </span>
    )
  },
  {
    threshold: 0.85,
    leftContent: (
      <span className="font-mono text-[10px] text-subtle bg-slate-100 px-2 py-1 rounded inline-block">SHA: 8f2a...9c1</span>
    ),
    rightContent: (
      <>
        <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">06 Audit</span>
        <h3 className="font-sans text-base font-semibold text-obsidian">Immutable</h3>
        <p className="text-xs text-subtle mt-1 hidden md:block">Permanently traceable.</p>
      </>
    )
  }
];

export default function Lifecycle() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const travelDistance = rect.height - viewH;
      const scrolled = -rect.top;
      let p = scrolled / travelDistance;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="decision-lifecycle" className="relative w-full bg-canvas border-b border-border/60" style={{ height: '400vh' }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-20">
          <div className="text-center mb-12 shrink-0 transition-opacity duration-700" style={{ opacity: progress > 0.02 ? 1 : 0 }}>
            <h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-3">
              Traceability Lifecycle
            </h2>
            <p className="text-subtle text-sm max-w-md mx-auto">
              From initial context to immutable record.
            </p>
          </div>
          <div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/60 -translate-x-1/2"></div>
            <div className="absolute left-1/2 top-4 w-px bg-obsidian -translate-x-1/2 transition-all duration-75 ease-linear max-h-[calc(100%-2rem)]" style={{ height: `${progress * 100}%` }}></div>
            
            <div className="space-y-16 py-8 relative">
              {stepsData.map((step, idx) => {
                const t = step.threshold;
                let activeClass = 'opacity-30 scale-100';
                let circleClass = 'border-border bg-canvas';
                
                if (progress >= t) {
                  circleClass = 'border-obsidian bg-obsidian';
                  if (progress < t + 0.15) {
                    activeClass = 'opacity-100 scale-105 active';
                  } else {
                    activeClass = 'opacity-50 scale-100 active';
                  }
                }

                return (
                  <div key={idx} className={`lifecycle-step group flex items-center justify-between w-full transition-all duration-500 ${activeClass}`}>
                    <div className="w-[42%] text-right pr-8">
                      {step.leftContent}
                    </div>
                    <div className="relative shrink-0 z-10">
                      <div className={`w-3 h-3 rounded-full border transition-colors duration-300 ${circleClass}`}></div>
                    </div>
                    <div className="w-[42%] pl-8">
                      {step.rightContent}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}