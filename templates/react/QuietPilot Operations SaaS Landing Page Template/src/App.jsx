import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import clsx from 'clsx';

// --- Simulation Data & State Map ---
// We simulate an operation moving through 5 states to make the UI feel alive
const WORKFLOW_STEPS = [
  { id: 'inquiry', label: 'New Inquiry', icon: 'solar:letter-opened-linear' },
  { id: 'quote', label: 'Quote Sent', icon: 'solar:calculator-linear' },
  { id: 'deposit', label: 'Deposit Wait', icon: 'solar:wallet-money-linear' }, // Amber state
  { id: 'paid', label: 'Payment Rcvd', icon: 'solar:check-circle-linear' },
  { id: 'ready', label: 'Job Ready', icon: 'solar:rocket-linear' },
];

const SIMULATION_TIMING = 4000; // ms per step

// --- Reusable Components ---

const GlassCard = ({ children, className, glow = false }) => (
  <div className={clsx(
    "glass-panel rounded-2xl relative overflow-hidden transition-all duration-700",
    glow ? "glow-panel border-emerald-500/30" : "hover:border-white/15",
    className
  )}>
    <div className="absolute inset-0 z-0 pointer-events-none animate-shimmer opacity-30" />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

const SectionTitle = ({ title, icon, rightAction }) => (
  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
    <div className="flex items-center gap-2">
      <iconify-icon icon={icon} class="text-emerald-400 text-lg"></iconify-icon>
      <h3 className="text-sm font-medium tracking-wide text-white/90">{title}</h3>
    </div>
    {rightAction && <div className="text-xs text-white/50">{rightAction}</div>}
  </div>
);

const FeatureIconRow = () => {
  const features = [
    { icon: 'solar:document-text-linear', label: 'Quotes & Proposals' },
    { icon: 'solar:users-group-two-rounded-linear', label: 'Staffing & Logistics' },
    { icon: 'solar:box-linear', label: 'Inventory & Restock' },
    { icon: 'solar:card-linear', label: 'Payments' },
    { icon: 'solar:calendar-date-linear', label: 'Job Readiness' },
  ];
  return (
    <div className="flex flex-wrap gap-6 mt-12 opacity-80">
      {features.map((f, i) => (
        <div key={i} className="flex items-center gap-2 text-sm text-white/70 hover:text-emerald-400 transition-colors cursor-default">
          <iconify-icon icon={f.icon} class="text-lg"></iconify-icon>
          <span>{f.label}</span>
        </div>
      ))}
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [activeStep, setActiveStep] = useState(0);

  // AI Simulation Engine
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, SIMULATION_TIMING);
    return () => clearInterval(interval);
  }, []);

  const isAmberState = activeStep === 2; // Deposit wait adds tension

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-emerald-500/30">
      
      {/* Background Environment Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep background image - moody dark restaurant/kitchen environment */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533777324465-98edec860f47?auto=format&fit=crop&w=3840&q=80')" }}
        />
        {/* Vignette and overlays for text legibility and mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-black/0 to-black/0" />
        {/* Subtle ambient scanline */}
        <div className="absolute inset-0 w-full h-[2px] bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-scanline z-50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 pt-10 pb-24 min-h-screen flex flex-col justify-between">
        
        {/* Header / Brand */}
        <header className="flex items-center gap-3 mb-16 lg:mb-24">
          <div className="w-8 h-8 rounded border-2 border-emerald-400 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-emerald-400/20 animate-pulse" />
             <div className="w-3 h-3 bg-emerald-400 rotate-45 transform" />
          </div>
          <span className="text-xl font-medium tracking-wide">QuietPilot</span>
        </header>

        {/* Main Content Split */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-grow">
          
          {/* Left Column: Editorial Hero */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 z-20">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              <span className="block text-white mb-2">Run Catering Operations</span>
              <span className="block text-gradient-green font-medium relative inline-block">
                Without the Chaos
                {/* Subtle glow behind text */}
                <span className="absolute inset-0 bg-emerald-500 blur-3xl opacity-20 -z-10 rounded-full" />
              </span>
            </h1>
            
            <p className="text-lg text-white/60 leading-relaxed max-w-md font-light">
              The AI-driven command center for high-volume caterers. 
              QuietPilot orchestrates quotes, staffing, and logistics autonomously, 
              turning unpredictable events into flawless execution.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-emerald-500 text-black font-medium rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  Launch Command Center
                  <iconify-icon icon="solar:arrow-right-linear" class="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
                </span>
              </button>
              
              <button className="px-8 py-4 glass-panel border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2">
                <iconify-icon icon="solar:play-circle-linear" class="text-lg text-emerald-400"></iconify-icon>
                See Live Simulation
              </button>
            </div>

            <FeatureIconRow />

            <div className="pt-8 border-t border-white/10 mt-8 max-w-md">
               <div className="flex items-start gap-3">
                 <iconify-icon icon="solar:shield-check-bold" class="text-emerald-400 mt-1 text-xl"></iconify-icon>
                 <div>
                   <p className="text-sm text-white/80">Trusted by top-tier hospitality groups to manage over <span className="text-white font-medium">$50M</span> in annual event volume.</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: Holographic Dashboard Grid */}
          <div className="lg:col-span-7 relative z-10 w-full max-w-3xl mx-auto lg:ml-auto">
            {/* Ambient depth glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-2 gap-4 auto-rows-max" style={{ perspective: '1000px' }}>
              
              {/* Card 1: Command Center (Full Width) */}
              <GlassCard className="col-span-2 p-6" glow={activeStep === 4}>
                <SectionTitle title="Live Operations Pulse" icon="solar:pulse-2-linear" rightAction="System Active" />
                
                {/* Workflow Path Simulation */}
                <div className="mt-6 relative px-2">
                  <div className="absolute top-5 left-6 right-6 h-[2px] bg-white/10">
                    <div 
                      className="h-full bg-emerald-500 transition-all duration-1000 ease-in-out relative"
                      style={{ width: `${(activeStep / (WORKFLOW_STEPS.length - 1)) * 100}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 blur-sm rounded-full animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between relative z-10">
                    {WORKFLOW_STEPS.map((step, idx) => {
                      const isPast = idx < activeStep;
                      const isActive = idx === activeStep;
                      const isAmber = isActive && step.id === 'deposit';
                      
                      return (
                        <div key={step.id} className="flex flex-col items-center gap-3">
                          <div className={clsx(
                            "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative bg-black/50",
                            isActive ? (isAmber ? "border-amber-400 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)] scale-110" : "border-emerald-400 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-110") :
                            isPast ? "border-emerald-500/50 text-emerald-500/80" : "border-white/10 text-white/30"
                          )}>
                            <iconify-icon icon={step.icon} class="text-xl"></iconify-icon>
                            {isActive && (
                               <div className={clsx(
                                 "absolute -inset-2 rounded-full animate-ping opacity-20",
                                 isAmber ? "bg-amber-400" : "bg-emerald-400"
                               )} />
                            )}
                          </div>
                          <span className={clsx(
                            "text-[10px] uppercase tracking-wider font-medium transition-colors duration-500",
                            isActive ? (isAmber ? "text-amber-400" : "text-emerald-400") : "text-white/40"
                          )}>{step.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* KPI Mini Stats */}
                <div className="grid grid-cols-4 gap-3 mt-8">
                  {[
                    { label: 'Active Jobs', val: '24', trend: '+3' },
                    { label: 'Est. Revenue', val: '$142k', trend: '+12%' },
                    { label: 'Staff Ready', val: '88%', trend: 'Optimum' },
                    { label: 'Risk Flags', val: isAmberState ? '1' : '0', trend: isAmberState ? 'Action Req' : 'Clear', alert: isAmberState }
                  ].map((kpi, i) => (
                    <div key={i} className={clsx(
                      "bg-white/5 rounded-lg p-3 border border-white/5 transition-colors duration-500",
                      kpi.alert && "border-amber-500/30 bg-amber-500/5"
                    )}>
                      <div className="text-xs text-white/50 mb-1">{kpi.label}</div>
                      <div className={clsx(
                        "text-xl font-semibold",
                        kpi.alert ? "text-amber-400" : "text-white"
                      )}>{kpi.val}</div>
                      <div className={clsx(
                         "text-[10px] mt-1",
                         kpi.alert ? "text-amber-500/80" : "text-emerald-500/80"
                      )}>{kpi.trend}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Card 2: AI Intel / Notifications */}
              <GlassCard className="col-span-1 p-5 flex flex-col justify-between" glow={isAmberState}>
                <SectionTitle title="QuietPilot Intel" icon="solar:cpu-linear" />
                <div className="space-y-3 mt-2">
                  <div className="flex gap-3 items-start p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="mt-0.5">
                       {isAmberState ? (
                         <iconify-icon icon="solar:danger-circle-linear" class="text-amber-400 text-lg"></iconify-icon>
                       ) : (
                         <iconify-icon icon="solar:magic-stick-3-linear" class="text-emerald-400 text-lg"></iconify-icon>
                       )}
                    </div>
                    <div>
                      <p className="text-xs text-white/90 leading-tight">
                        {isAmberState 
                          ? "Deposit overdue for 'Smith Wedding'. AI drafting gentle follow-up email." 
                          : "Workflow optimal. AI routed 3 new inquiries to quoting engine."}
                      </p>
                      <p className="text-[10px] text-white/40 mt-1">Just now</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-2 rounded-lg bg-white/5 border border-white/5 opacity-60">
                    <div className="mt-0.5">
                      <iconify-icon icon="solar:box-minimalistic-linear" class="text-blue-400 text-lg"></iconify-icon>
                    </div>
                    <div>
                      <p className="text-xs text-white/90 leading-tight">Linen inventory low for weekend events. Restock order queued.</p>
                      <p className="text-[10px] text-white/40 mt-1">2 hrs ago</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Card 3: Staffing Donut Chart */}
              <GlassCard className="col-span-1 p-5 h-[220px]">
                <SectionTitle title="Staffing Overview" icon="solar:users-group-rounded-linear" rightAction="Weekend" />
                <div className="relative h-full w-full flex items-center justify-center pb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Confirmed', value: 88, color: '#34d399' },
                          { name: 'Pending', value: 12, color: '#1e293b' }
                        ]}
                        cx="50%" cy="50%" innerRadius={40} outerRadius={60}
                        stroke="none"
                        dataKey="value"
                        startAngle={90} endAngle={-270}
                      >
                        {
                          [
                            { name: 'Confirmed', value: 88, color: '#10b981' }, // Emerald
                            { name: 'Pending', value: 12, color: '#334155' }  // Dark slate
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))
                        }
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pb-4">
                    <span className="text-2xl font-bold text-white">88%</span>
                    <span className="text-[10px] text-white/50">Coverage</span>
                  </div>
                </div>
              </GlassCard>

            </div>
          </div>
        </main>

        {/* Footer Navigation Area */}
        <footer className="mt-12 pt-6 border-t border-white/10 z-20 relative">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 opacity-60">
            {[
              { label: 'Weddings', icon: 'solar:hearts-linear' },
              { label: 'Corporate Events', icon: 'solar:buildings-2-linear' },
              { label: 'Private Dining', icon: 'solar:chef-hat-linear' },
              { label: 'Venues', icon: 'solar:map-point-linear' },
              { label: 'Event Production', icon: 'solar:video-frame-linear' },
            ].map((cat, i) => (
              <div key={i} className="flex items-center gap-2 cursor-pointer hover:text-emerald-400 hover:opacity-100 transition-all">
                <iconify-icon icon={cat.icon} class="text-xl"></iconify-icon>
                <span className="text-sm font-medium tracking-wide">{cat.label}</span>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}