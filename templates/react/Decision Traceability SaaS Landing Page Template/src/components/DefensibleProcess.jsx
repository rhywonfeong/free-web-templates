import { useEffect, useRef, useState } from 'react';

const processSteps = [
  { title: "Decision Context", desc: "The business or product question being evaluated." },
  { title: "Assumptions Captured", desc: "Explicit assumptions recorded intentionally, not implied." },
  { title: "Evidence Linked", desc: "Data, analysis, and references attached as inputs." },
  { title: "Reasoning Structured", desc: "Logical connections formed between assumptions, evidence, and conclusions." },
  { title: "Outcome Produced", desc: "A decision generated with clear justification." },
  { title: "Versioned & Preserved", desc: "The full reasoning chain is saved, diffable, and reviewable over time." }
];

export default function DefensibleProcess() {
  const [activeStep, setActiveStep] = useState(-1);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let current = 0;
        setActiveStep(0);

        const interval = setInterval(() => {
          current++;
          if (current >= processSteps.length) {
            clearInterval(interval);
          } else {
            setActiveStep(current);
          }
        }, 900);

        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const lineWidth = activeStep <= 0 ? 0 : (activeStep / (processSteps.length - 1)) * 100;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-b border-border/60 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-sans text-3xl font-semibold text-obsidian tracking-tight mb-4">
              How a Decision Becomes Defensible
            </h2>
            <p className="font-sans text-subtle text-base leading-relaxed">
              Oravia preserves reasoning from first assumption to final
              outcome, ensuring every strategic choice is traceable and
              auditable.
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute top-[1.125rem] left-0 right-0 h-px bg-border/60 hidden lg:block z-0">
            <div className="h-full bg-obsidian transition-all duration-700 ease-in-out" style={{ width: `${lineWidth}%` }}></div>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 relative z-10">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div 
                  key={idx} 
                  className="group flex flex-col gap-4 transition-opacity duration-500"
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 border rounded flex items-center justify-center text-[10px] font-mono font-medium shadow-sm transition-all duration-500 z-10 ${isActive ? 'border-obsidian text-obsidian bg-white scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.08)]' : 'bg-white border-border text-subtle'}`}>
                      0{idx + 1}
                    </div>
                    <div className="h-px flex-1 bg-border/60 lg:hidden"></div>
                  </div>
                  <div className={`transition-all duration-500 ${isActive ? 'opacity-100 grayscale-0 translate-y-0' : 'opacity-40 grayscale translate-y-0'}`}>
                    <h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">{step.title}</h3>
                    <p className="text-xs text-subtle leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}