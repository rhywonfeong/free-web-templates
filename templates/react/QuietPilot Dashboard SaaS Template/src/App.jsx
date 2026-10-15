import React from 'react';

const AmbientBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[80%] bg-amber-600/20 blur-[120px] mix-blend-screen rounded-full"></div>
    <div className="absolute top-[10%] -right-[10%] w-[60%] h-[80%] bg-cyan-600/20 blur-[120px] mix-blend-screen rounded-full"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[400px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-[60px] -rotate-[35deg] mix-blend-screen pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent blur-[40px] -rotate-[35deg] mix-blend-screen pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[300px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-[60px] -rotate-[30deg] mix-blend-screen translate-x-[10%] translate-y-[20%] pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-[30px] -rotate-[30deg] mix-blend-screen translate-x-[20%] translate-y-[10%] pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-amber-200/80 to-transparent blur-[1px] -rotate-[35deg] mix-blend-screen pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[1px] bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent blur-[1px] -rotate-[32deg] mix-blend-screen translate-x-[5%] translate-y-[10%] pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[3px] bg-gradient-to-r from-transparent via-amber-300/50 to-transparent blur-[2px] -rotate-[36deg] mix-blend-screen -translate-x-[5%] -translate-y-[5%] pointer-events-none"></div>
    <div className="absolute top-[30%] left-[40%] w-1.5 h-1.5 bg-amber-200 rounded-full blur-[1px] shadow-[0_0_10px_rgba(251,191,36,1)]"></div>
    <div className="absolute top-[60%] left-[60%] w-1 h-1 bg-cyan-200 rounded-full blur-[1px] shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
    <div className="absolute top-[45%] left-[70%] w-2 h-2 bg-cyan-100 rounded-full blur-[2px] shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
    <div className="absolute top-[70%] left-[30%] w-1.5 h-1.5 bg-amber-100 rounded-full blur-[1px] shadow-[0_0_10px_rgba(251,191,36,1)]"></div>
  </div>
);

const Sidebar = () => (
  <aside className="w-64 flex-shrink-0 border-r border-slate-800/60 backdrop-blur-xl z-20 flex flex-col h-full relative bg-[#07090e]/50">
    <div className="p-5 flex items-center gap-3 border-b border-slate-800/60">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center border border-slate-700 shadow-inner">
        <span className="text-sm font-medium tracking-tighter text-slate-100">QP</span>
      </div>
      <span className="text-base font-medium tracking-tight text-slate-200">QuietPilot</span>
    </div>

    <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-6 hide-scrollbar">
      {/* Group 1 */}
      <div className="flex flex-col gap-1">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400 font-medium text-sm border border-blue-500/10">
          <iconify-icon icon="solar:command-linear" width="18"></iconify-icon>
          Command Center
        </a>
      </div>

      {/* Group 2: Commercial Spine */}
      <div className="flex flex-col gap-1">
        <div className="px-3 pb-2 text-xs font-medium text-slate-500 tracking-wider uppercase">
          Commercial Spine
        </div>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:inbox-linear" width="18"></iconify-icon>
          Inquiry
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon>
          Lead
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:calculator-linear" width="18"></iconify-icon>
          Quote
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
          Proposal
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:hand-shake-linear" width="18"></iconify-icon>
          Customer Acceptance
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm relative">
          <iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
          Payment Handoff
          <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
        </a>
      </div>

      {/* Group 3: Operations */}
      <div className="flex flex-col gap-1">
        <div className="px-3 pb-2 text-xs font-medium text-slate-500 tracking-wider uppercase">
          Operations
        </div>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
          Jobs
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:checklist-linear" width="18"></iconify-icon>
          Job Readiness
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:server-square-linear" width="18"></iconify-icon>
          Downstream Sync
        </a>
      </div>

      {/* Group 4: System */}
      <div className="flex flex-col gap-1">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon>
          Intelligence
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors font-light text-sm">
          <iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
          Settings
        </a>
      </div>

      <div className="mt-auto pt-4 flex flex-col gap-2 relative z-10 border-t border-slate-800/40">
        <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-slate-800/40 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-200 font-medium text-sm shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              M
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                Maya
              </span>
              <span className="text-[11px] text-slate-500 font-light">Owner</span>
            </div>
          </div>
          <iconify-icon icon="solar:alt-arrow-right-linear" className="text-slate-600 group-hover:text-slate-400 transition-colors"></iconify-icon>
        </button>

        <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-slate-800/40 transition-all group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-9 h-9 rounded-full bg-slate-900/50 border border-emerald-500/30 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                QuietPilot
              </span>
              <span className="text-[11px] text-slate-500 font-light">
                Commercial Ops OS
              </span>
            </div>
          </div>
          <iconify-icon icon="solar:alt-arrow-right-linear" className="text-slate-600 group-hover:text-slate-400 transition-colors relative z-10"></iconify-icon>
        </button>
      </div>
    </div>
  </aside>
);

const Header = () => (
  <header className="px-8 pt-8 pb-5 flex items-start justify-between sticky top-0 bg-[#090b0f]/90 backdrop-blur-md z-30 border-b border-transparent">
    <div>
      <div className="flex items-center gap-2 text-sm font-light text-slate-400 mb-1">
        <span>Toni Catering workspace</span>
        <span className="text-slate-600">/</span>
      </div>
      <h1 className="text-2xl font-medium tracking-tight text-slate-100">
        Command Center
      </h1>
      <p className="text-sm font-light text-slate-500 mt-1">
        Proof-backed view of commercial flow, blockers, readiness, and downstream handoff.
      </p>
    </div>
    <div className="flex items-center gap-3">
      <button className="px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-slate-200 text-sm font-medium transition-all shadow-sm flex items-center gap-2">
        <iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
        Review proof
      </button>
      <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 border border-blue-500 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)] flex items-center gap-2">
        <iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
        Open operations
      </button>
    </div>
  </header>
);

const OperatingStateStrip = () => (
  <div className="px-8 py-2.5 bg-slate-900/40 border-y border-slate-800/50 flex items-center gap-8 text-sm overflow-x-auto whitespace-nowrap hide-scrollbar">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
      <span className="text-slate-400 font-light">Current operating state:</span>
      <span className="text-rose-400 font-medium">Primary hold: payment handoff</span>
    </div>
    <div className="w-px h-4 bg-slate-800"></div>
    <div className="flex items-center gap-2">
      <span className="text-slate-400 font-light">Total exposure:</span>
      <span className="text-amber-400 font-medium">$8,420</span>
    </div>
    <div className="w-px h-4 bg-slate-800"></div>
    <div className="flex items-center gap-2">
      <span className="text-slate-400 font-light">Proof blockers:</span>
      <span className="text-slate-200 font-medium">3</span>
    </div>
    <div className="w-px h-4 bg-slate-800"></div>
    <div className="flex items-center gap-2">
      <span className="text-slate-400 font-light">Job readiness held:</span>
      <span className="text-slate-200 font-medium">2</span>
    </div>
    <div className="w-px h-4 bg-slate-800"></div>
    <div className="flex items-center gap-2">
      <span className="text-slate-400 font-light">Sync confidence:</span>
      <span className="text-emerald-400 font-medium">62%</span>
    </div>
    <div className="ml-auto flex items-center gap-2 px-2 py-0.5 rounded border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium">
      <iconify-icon icon="solar:shield-keyhole-linear" width="14"></iconify-icon>
      Proof gates active
    </div>
  </div>
);

const stages = [
  { id: 'inquiry', name: 'Inquiry', status: 'Volume capture steady', severity: 'Low', exposure: '$4.2k', items: 12, blockers: 0, proof: 'Verified', owner: 'System', nextGate: 'Lead qualification', icon: 'solar:inbox-linear', state: 'past' },
  { id: 'lead', name: 'Lead', status: 'Qualification running', severity: 'Low', exposure: '$9.1k', items: 8, blockers: 0, proof: 'Verified', owner: 'Auto', nextGate: 'Quote generation', icon: 'solar:user-circle-linear', state: 'past' },
  { id: 'quote', name: 'Quote', status: 'Pricing verified', severity: 'Low', exposure: '$12.5k', items: 5, blockers: 0, proof: 'Verified', owner: 'System', nextGate: 'Proposal issuance', icon: 'solar:calculator-linear', state: 'past' },
  { id: 'proposal', name: 'Proposal', status: 'Awaiting signatures', severity: 'Medium', exposure: '$18.2k', items: 4, blockers: 0, proof: 'Pending verification', owner: 'Maya', nextGate: 'Customer sign-off', icon: 'solar:document-text-linear', state: 'pending' },
  { id: 'acceptance', name: 'Customer Acceptance', status: 'Signatures processing', severity: 'Medium', exposure: '$8.4k', items: 1, blockers: 1, proof: 'Pending verification', owner: 'Sam', nextGate: 'Payment initiation', icon: 'solar:hand-shake-linear', state: 'pending' },
  { id: 'payment', name: 'Payment Handoff', status: 'Settlement unconfirmed', severity: 'Critical', exposure: '$8,420', items: 4, blockers: 3, proof: 'Blocked', owner: 'Maya', nextGate: 'Stripe settlement confirmation', icon: 'solar:card-linear', state: 'active' },
  { id: 'readiness', name: 'Job Readiness', status: 'Advancement held', severity: 'High', exposure: '$2,870', items: 2, blockers: 2, proof: 'Blocked', owner: 'Jordan', nextGate: 'Payment clearance', icon: 'solar:checklist-linear', state: 'future' },
  { id: 'sync', name: 'Downstream Sync', status: 'Awaiting upstream', severity: 'Low', exposure: '$0', items: 0, blockers: 0, proof: 'Held', owner: 'System', nextGate: 'Job validation', icon: 'solar:server-square-linear', state: 'future' },
];

// Helper functions to generate cockpit styling dynamically
const getLineStyle = (currState, nextState) => {
  if (currState === 'past' && nextState === 'past') return 'bg-cyan-500/40 shadow-[0_0_8px_rgba(34,211,238,0.3)]';
  if (currState === 'past' && nextState === 'pending') return 'bg-gradient-to-r from-cyan-500/40 to-amber-500/40';
  if (currState === 'pending' && nextState === 'pending') return 'bg-amber-500/40';
  if (currState === 'pending' && nextState === 'active') return 'bg-gradient-to-r from-amber-500/40 to-rose-500/70';
  if (currState === 'active' && nextState === 'future') return 'bg-gradient-to-r from-rose-500/70 to-slate-800';
  return 'bg-slate-800/80';
};

const getNodeWrapStyle = (state) => {
  switch (state) {
    case 'past': return 'border-cyan-500/60 bg-[#080b11] ring-1 ring-cyan-500/20';
    case 'pending': return 'border-amber-500/60 bg-[#080b11]';
    case 'active': return 'border-rose-500 bg-[#0f0709] ring-2 ring-rose-500/40';
    case 'future': return 'border-slate-700 bg-[#080b11]';
  }
};

const getInnerNodeStyle = (state) => {
  switch (state) {
    case 'past': return 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]';
    case 'pending': return 'bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]';
    case 'active': return 'bg-rose-500 shadow-[0_0_12px_rgba(225,29,72,1)] animate-ping';
    case 'future': return 'bg-slate-600';
  }
};

const getModuleStyle = (state) => {
  switch (state) {
    case 'past': return 'bg-[#0a0d14]/95 border-slate-800/80 hover:border-cyan-500/30';
    case 'pending': return 'bg-[#0a0d14]/95 border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.05)]';
    case 'active': return 'bg-gradient-to-b from-[#14080a]/95 to-[#0c080a]/95 border-rose-500/60 shadow-[0_0_40px_rgba(225,29,72,0.15)] ring-1 ring-rose-500/20 scale-[1.02] z-20 before:absolute before:inset-0 before:bg-gradient-to-b before:from-rose-500/5 before:to-transparent before:pointer-events-none';
    case 'future': return 'bg-[#0a0d14]/50 border-slate-800/50 opacity-70';
  }
};

const getSeverityStyle = (severity) => {
  switch (severity) {
    case 'Low': return 'bg-slate-800/60 text-slate-400 border border-slate-700/60';
    case 'Medium': return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
    case 'High': return 'bg-orange-500/10 text-orange-400 border border-orange-500/30';
    case 'Critical': return 'bg-rose-500/15 text-rose-300 border border-rose-500/40 shadow-[0_0_10px_rgba(225,29,72,0.2)] animate-pulse';
  }
};

const getProofBadge = (proof) => {
  switch (proof) {
    case 'Verified': return <span className="flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> Verified</span>;
    case 'Pending verification': return <span className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Pending</span>;
    case 'Blocked': return <span className="flex items-center gap-1.5 text-[11px] font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20"><iconify-icon icon="solar:shield-cross-linear" width="14"></iconify-icon> Blocked</span>;
    default: return <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700"><iconify-icon icon="solar:minus-circle-linear" width="14"></iconify-icon> Held</span>;
  }
};

const getIconBgStyle = (state) => {
  switch (state) {
    case 'past': return 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]';
    case 'pending': return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
    case 'active': return 'bg-rose-500/15 text-rose-300 border border-rose-500/30 shadow-[0_0_15px_rgba(225,29,72,0.2)]';
    case 'future': return 'bg-slate-800/60 text-slate-500 border border-slate-700/60';
  }
};

const Flightline = () => (
  <section className="px-8 py-8 relative">
    <h2 className="sr-only">Commercial Spine Flightline</h2>
    
    <div className="relative flightline-scroll overflow-x-auto pb-10 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 z-10">
      <div className="flex gap-8 relative z-10 w-max items-start">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex flex-col relative w-80 shrink-0">
            
            {/* Ambient Red Glow Behind Active Node */}
            {stage.state === 'active' && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[180%] h-[120%] bg-rose-600/10 blur-[60px] pointer-events-none z-0 rounded-full"></div>
            )}

            {/* Top Connector Rail & Node */}
            <div className="relative h-10 flex items-center justify-center mb-4 z-10">
              {/* Active Banner Float */}
              {stage.state === 'active' && (
                <div className="absolute -top-4 text-[9px] font-black tracking-widest text-rose-400 uppercase bg-[#0e0709] px-2.5 py-0.5 rounded border border-rose-500/40 shadow-[0_0_10px_rgba(225,29,72,0.3)] z-20 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
                  Primary Hold
                </div>
              )}

              {/* Connector Line Stretching to the Next Module (Width includes the gap-8/2rem) */}
              {index < stages.length - 1 && (
                <div className={`absolute top-1/2 left-1/2 w-[calc(100%+2rem)] h-[2px] -translate-y-1/2 ${getLineStyle(stage.state, stages[index+1].state)} z-0`} />
              )}
              
              {/* Position Node */}
              <div className={`relative z-10 w-4 h-4 rounded-full ring-4 ring-[#090b0f] flex items-center justify-center border ${getNodeWrapStyle(stage.state)}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${getInnerNodeStyle(stage.state)}`} />
              </div>
            </div>

            {/* Flightline Cockpit Module */}
            <div className={`flex flex-col rounded-xl backdrop-blur-xl p-5 transition-all duration-300 relative overflow-hidden group ${getModuleStyle(stage.state)}`}>
              
              {/* Animated scanline on active module */}
              {stage.state === 'active' && (
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-400/80 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
              )}

              {/* Module Header */}
              <div className="flex items-start justify-between mb-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${getIconBgStyle(stage.state)}`}>
                    <iconify-icon icon={stage.icon} className="text-xl"></iconify-icon>
                  </div>
                  <h3 className={`text-[15px] font-semibold tracking-tight ${stage.state === 'active' ? 'text-rose-100' : 'text-slate-200'}`}>
                    {stage.name}
                  </h3>
                </div>
                <div className={`px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider ${getSeverityStyle(stage.severity)}`}>
                  {stage.severity}
                </div>
              </div>

              {/* Operational Status */}
              <div className="mb-4 relative z-10">
                <p className="text-[11px] font-mono tracking-tight text-slate-400 bg-black/40 py-1.5 px-3 rounded border border-slate-800/60 truncate">
                  <span className={`${stage.state === 'active' ? 'text-rose-400' : 'text-slate-500'} mr-2`}>{'>'}</span>
                  {stage.status}
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/60 mb-3 relative z-10">
                <div className="flex flex-col gap-1 pr-2">
                  <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest">Exposure</span>
                  <span className={`text-sm font-semibold tabular-nums ${stage.exposure === '$0' ? 'text-slate-600' : (stage.state === 'active' ? 'text-rose-400' : 'text-amber-400')}`}>
                    {stage.exposure}
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-l border-slate-800/60 pl-3">
                  <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest">Items</span>
                  <span className="text-sm font-medium tabular-nums text-slate-300">{stage.items}</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-slate-800/60 pl-3">
                  <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest">Blockers</span>
                  <span className={`text-sm font-semibold tabular-nums ${stage.blockers > 0 ? 'text-rose-400' : 'text-slate-500'}`}>
                    {stage.blockers}
                  </span>
                </div>
              </div>

              {/* Module Footer / Authorities */}
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Proof State</span>
                  {getProofBadge(stage.proof)}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Accountable</span>
                  <div className="flex items-center gap-1.5">
                    {stage.owner !== 'System' && stage.owner !== 'Auto' && (
                      <div className="w-4 h-4 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[9px] font-bold text-indigo-300 flex items-center justify-center">
                        {stage.owner.charAt(0)}
                      </div>
                    )}
                    <span className="text-[11px] font-medium text-slate-300">{stage.owner}</span>
                  </div>
                </div>

                {/* Gate Dependency */}
                <div className={`mt-1 p-2.5 rounded flex flex-col gap-1.5 ${stage.state === 'active' ? 'bg-rose-500/10 border border-rose-500/20' : 'bg-black/30 border border-slate-800/40'}`}>
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${stage.state === 'active' ? 'text-rose-400' : 'text-slate-500'}`}>
                    Next Proof Required
                  </span>
                  <div className="flex items-center gap-1.5">
                    <iconify-icon icon="solar:key-square-linear" className={stage.state === 'active' ? 'text-rose-400' : 'text-slate-500'}></iconify-icon>
                    <span className={`text-[11px] font-medium truncate ${stage.state === 'active' ? 'text-rose-200' : 'text-slate-300'}`}>
                      {stage.nextGate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MainCommandSurface = () => (
  <section className="px-8 pb-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
    <div className="xl:col-span-2 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium tracking-tight text-slate-200">
          Critical Action Queue
        </h3>
        <span className="text-xs font-medium text-slate-500 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
          3 items
        </span>
      </div>

      {/* Primary Blocker */}
      <div className="bg-[#0e0a0a]/80 backdrop-blur-sm border border-rose-500/30 rounded-xl p-1 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="bg-[#0a0707] rounded-lg p-5 flex flex-col gap-5 relative z-10">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                Primary Blocker
              </span>
              <h4 className="text-xl font-medium tracking-tight text-slate-100 mt-1">
                Payment handoff blocked
              </h4>
              <div className="text-sm font-light text-slate-400 mt-0.5">
                Customer: <span className="text-slate-200 font-normal">Rivera Summer Social</span>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <span className="px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-medium">
                Critical Severity
              </span>
              <span className="text-sm font-medium text-slate-300">
                Impact: <span className="text-amber-400 font-medium">$3,250</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-y border-slate-800/60 py-4">
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-xs font-light text-slate-500 block mb-1">Current Stage</span>
                <span className="text-sm font-medium text-slate-300 bg-slate-800/50 px-2 py-1 rounded inline-block">
                  Payment Handoff
                </span>
              </div>
              <div>
                <span className="text-xs font-light text-slate-500 block mb-1">Owner</span>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-[10px] text-indigo-300 font-medium">
                    M
                  </div>
                  <span className="text-sm font-medium text-slate-300">Maya</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-xs font-light text-slate-500 block mb-1">Proof Missing</span>
                <span className="text-sm font-medium text-rose-300 flex items-center gap-1.5">
                  <iconify-icon icon="solar:document-medicine-linear"></iconify-icon>
                  Stripe settlement confirmation
                </span>
              </div>
              <div>
                <span className="text-xs font-light text-slate-500 block mb-1">Source Truth</span>
                <span className="text-sm font-medium text-amber-300/80 flex items-center gap-1.5">
                  <iconify-icon icon="solar:database-linear"></iconify-icon>
                  Payment read model (Pending)
                </span>
              </div>
            </div>
          </div>

          <div className="bg-rose-500/5 border border-rose-500/10 rounded-lg p-3 flex items-start gap-3">
            <iconify-icon icon="solar:stop-circle-linear" className="text-rose-500 mt-0.5" width="18"></iconify-icon>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-rose-200">Do not advance</span>
              <span className="text-xs font-light text-rose-200/70">
                Job readiness should not advance until payment handoff is verified. 15% settlement proof missing.
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-sm font-light text-slate-400">
              <strong className="font-medium text-slate-300">Next Action: </strong>
              Verify payment handoff before advancing.
            </span>
            <button className="px-5 py-2 rounded-lg bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium transition-colors shadow-[0_0_15px_rgba(225,29,72,0.2)]">
              Verify payment
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Blockers */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between p-3.5 bg-[#0c1017] border border-slate-800/80 rounded-xl hover:border-amber-500/30 transition-colors cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-200">Job Readiness blocked</span>
              <span className="text-xs font-light text-slate-500">North Pier Gala</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-slate-300">$2,870</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-medium uppercase tracking-wider">High</span>
            <button className="text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/50 px-2.5 py-1 rounded transition-colors border border-slate-700">
              Review
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-3.5 bg-[#0c1017] border border-slate-800/80 rounded-xl hover:border-amber-500/30 transition-colors cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:document-cross-linear"></iconify-icon>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-200">Inventory proof missing</span>
              <span className="text-xs font-light text-slate-500">Orchard House Dinner</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-slate-300">$1,240</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-medium uppercase tracking-wider">High</span>
            <button className="text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/50 px-2.5 py-1 rounded transition-colors border border-slate-700">
              Review
            </button>
          </div>
        </div>
      </div>

      {/* Watchlist */}
      <div className="mt-2">
        <h5 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3 px-1">
          Watchlist
        </h5>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3 text-sm px-3 py-2 rounded-lg hover:bg-slate-800/30 transition-colors">
            <iconify-icon icon="solar:eye-linear" className="text-slate-500"></iconify-icon>
            <span className="text-slate-300 font-light">Customer acceptance unverified</span>
          </div>
          <div className="flex items-center gap-3 text-sm px-3 py-2 rounded-lg hover:bg-slate-800/30 transition-colors">
            <iconify-icon icon="solar:users-group-two-rounded-linear" className="text-slate-500"></iconify-icon>
            <span className="text-slate-300 font-light">Staffing confidence low</span>
          </div>
          <div className="flex items-center gap-3 text-sm px-3 py-2 rounded-lg hover:bg-slate-800/30 transition-colors">
            <iconify-icon icon="solar:refresh-circle-linear" className="text-slate-500"></iconify-icon>
            <span className="text-slate-300 font-light">Downstream sync verification pending</span>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column: Decision Authority */}
    <div className="relative">
      <div className="sticky top-8 bg-[#0c1017]/95 backdrop-blur-2xl border border-slate-700/60 rounded-2xl p-6 shadow-2xl flex flex-col gap-5 before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/5 before:pointer-events-none">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <h3 className="text-base font-medium tracking-tight text-slate-100 flex items-center gap-2">
            <iconify-icon icon="solar:siderbar-linear" className="text-blue-400"></iconify-icon>
            Decision Authority
          </h3>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
            <div className="text-xs font-light text-slate-400 mb-1">Decision Summary</div>
            <div className="text-sm font-medium text-slate-200 leading-snug">
              Operator attention required for <span className="text-rose-400">Payment Handoff</span> blocker on Rivera Summer Social.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
            <div className="font-light text-slate-500">Commercial Stage:</div>
            <div className="font-medium text-slate-300 text-right">Payment Handoff</div>

            <div className="font-light text-slate-500">Exposure Impact:</div>
            <div className="font-medium text-amber-400 text-right">$3,250</div>

            <div className="font-light text-slate-500">Proof Depth:</div>
            <div className="font-medium text-slate-300 text-right">15% missing</div>

            <div className="font-light text-slate-500">Assigned Owner:</div>
            <div className="font-medium text-slate-300 text-right flex items-center justify-end gap-1.5">
              <div className="w-3.5 h-3.5 rounded-full bg-indigo-500/20 text-[8px] text-indigo-300 flex items-center justify-center">M</div>
              Maya
            </div>
          </div>

          {/* Proof Path Checklist */}
          <div className="mt-2">
            <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Proof Path</h4>
            <div className="flex flex-col relative pl-2">
              <div className="absolute left-[11px] top-2 bottom-4 w-px bg-slate-800"></div>
              
              <div className="flex items-start gap-3 relative pb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-[#0c1017] z-10 mt-1"></div>
                <div className="flex-1 flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-light">Quote proof observed</span>
                  <span className="text-emerald-400 text-xs font-medium">Completed</span>
                </div>
              </div>

              <div className="flex items-start gap-3 relative pb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-[#0c1017] z-10 mt-1"></div>
                <div className="flex-1 flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Customer acceptance</span>
                  <span className="text-amber-400 text-xs font-medium">Pending</span>
                </div>
              </div>

              <div className="flex items-start gap-3 relative pb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-4 ring-[#0c1017] z-10 mt-1 shadow-[0_0_8px_rgba(225,29,72,0.6)]"></div>
                <div className="flex-1 flex justify-between items-center text-sm">
                  <span className="text-rose-300 font-medium">Fulfillment proof</span>
                  <span className="text-rose-400 text-xs font-medium">Missing</span>
                </div>
              </div>

              <div className="flex items-start gap-3 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-[#0c1017] z-10 mt-1"></div>
                <div className="flex-1 flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-light">Job readiness</span>
                  <span className="text-slate-500 text-xs font-medium">Blocked</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-slate-800/80">
            <button className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors border border-slate-600/50 flex justify-center items-center gap-2">
              <iconify-icon icon="solar:history-linear"></iconify-icon>
              View proof trail
            </button>
            <button className="w-full py-2.5 rounded-lg bg-transparent hover:bg-slate-800/50 text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors border border-transparent hover:border-slate-700 flex justify-center items-center gap-2">
              <iconify-icon icon="solar:square-top-down-linear"></iconify-icon>
              Open event
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SupportPanels = () => (
  <section className="px-8 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Operational Exposure */}
    <div className="bg-[#0b0e14] border border-slate-800/60 rounded-xl p-5 flex flex-col gap-4">
      <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
        <iconify-icon icon="solar:chart-square-linear" className="text-amber-500/70"></iconify-icon>
        Operational Exposure
      </h4>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 font-light">Total exposure</span>
          <span className="text-slate-200 font-medium">$12,860</span>
        </div>
        <div className="flex justify-between items-center text-sm pb-3 border-b border-slate-800/50">
          <span className="text-rose-400/80 font-light">Blocked impact</span>
          <span className="text-rose-400 font-medium">$8,420</span>
        </div>
        <div className="flex justify-between items-center text-sm pt-1">
          <span className="text-slate-500 font-light">Urgent readiness</span>
          <span className="text-slate-200 font-medium">2 count</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 font-light">Sync confidence</span>
          <span className="text-emerald-400 font-medium">62%</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 font-light">Proof blockers</span>
          <span className="text-slate-200 font-medium">3 active</span>
        </div>
      </div>
    </div>

    {/* Owner Accountability */}
    <div className="bg-[#0b0e14] border border-slate-800/60 rounded-xl p-5 flex flex-col gap-4">
      <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
        <iconify-icon icon="solar:users-group-rounded-linear" className="text-blue-400/70"></iconify-icon>
        Owner Accountability
      </h4>
      <div className="flex flex-col gap-3">
        {/* Owner 1 */}
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/30 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-medium flex items-center justify-center">M</div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-200 leading-none">Maya</span>
              <span className="text-[10px] text-slate-500 mt-1">Load: 78%</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/20">1</span>
            <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">1</span>
          </div>
        </div>
        {/* Owner 2 */}
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/30 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-medium flex items-center justify-center">J</div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-200 leading-none">Jordan</span>
              <span className="text-[10px] text-slate-500 mt-1">Load: 61%</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-slate-800 text-slate-500 border border-slate-700">0</span>
            <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">1</span>
          </div>
        </div>
        {/* Owner 3 */}
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/30 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 text-[10px] font-medium flex items-center justify-center">S</div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-200 leading-none">Sam</span>
              <span className="text-[10px] text-slate-500 mt-1">Load: 54%</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-slate-800 text-slate-500 border border-slate-700">0</span>
            <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">1</span>
          </div>
        </div>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="bg-[#0b0e14] border border-slate-800/60 rounded-xl p-5 flex flex-col gap-4">
      <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
        <iconify-icon icon="solar:history-2-linear" className="text-slate-400"></iconify-icon>
        Recent Activity
      </h4>
      <div className="flex flex-col gap-3.5">
        <div className="flex justify-between items-start text-sm group">
          <span className="text-slate-300 font-light flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 opacity-70 group-hover:opacity-100 transition-opacity"></span>
            Payment read model observed
          </span>
          <span className="text-slate-500 text-xs font-light whitespace-nowrap ml-2">8m ago</span>
        </div>
        <div className="flex justify-between items-start text-sm group">
          <span className="text-slate-300 font-light flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-70 group-hover:opacity-100 transition-opacity"></span>
            Proof source reviewed
          </span>
          <span className="text-slate-500 text-xs font-light whitespace-nowrap ml-2">18m ago</span>
        </div>
        <div className="flex justify-between items-start text-sm group">
          <span className="text-slate-300 font-light flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-70 group-hover:opacity-100 transition-opacity"></span>
            Downstream sync pending
          </span>
          <span className="text-slate-500 text-xs font-light whitespace-nowrap ml-2">32m ago</span>
        </div>
        <div className="flex justify-between items-start text-sm group">
          <span className="text-slate-400 font-light flex items-center gap-2 italic">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 opacity-70 group-hover:opacity-100 transition-opacity"></span>
            Operator note added
          </span>
          <span className="text-slate-500 text-xs font-light whitespace-nowrap ml-2">1h ago</span>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="text-slate-300 antialiased overflow-hidden h-screen flex selection:bg-blue-500/30 relative">
      <AmbientBackground />
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 z-10 overflow-y-auto relative bg-[#090b0f]/80">
        <Header />
        <OperatingStateStrip />
        <Flightline />
        <MainCommandSurface />
        <SupportPanels />
      </main>
    </div>
  );
}