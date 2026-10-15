import "iconify-icon";

// ── Shared mini-components ────────────────────────────────────────────────────
const QPLogo = () => (
  <div className="flex items-center gap-2 text-white">
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
    <span className="font-semibold tracking-tight">QuietPilot</span>
  </div>
);

const NavIcons = () => (
  <div className="flex items-center gap-4 text-neutral-400">
    <iconify-icon icon="solar:magnifer-linear" width="16" />
    <iconify-icon icon="solar:bell-linear" width="16" />
    <iconify-icon icon="solar:user-linear" width="16" />
  </div>
);

const StatusDot = ({ color }) => {
  const map = { emerald: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]", amber: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]", orange: "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]", rose: "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" };
  return <div className={`w-2 h-2 rounded-full ${map[color]}`} />;
};

// ── Panel 1: Orbital Event View ───────────────────────────────────────────────
const orbitNodes = [
  { top: 80, left: 140, color: "indigo", label: "Proposal", sub: "Accepted", subColor: "text-emerald-400", borderCls: "border-indigo-500/30" },
  { top: 160, left: 230, color: "emerald", label: "Payment", sub: "Cleared", subColor: "text-emerald-400", borderCls: "border-emerald-500/30" },
  { top: 280, left: 240, color: "amber", label: "Job", sub: "On Track", subColor: "text-emerald-400", borderCls: "border-amber-500/30" },
  { top: 380, left: 180, color: "emerald", label: "Inventory", sub: "Watch", subColor: "text-amber-400", borderCls: "border-emerald-500/30" },
  { top: 340, left: 40, color: "amber", label: "Staffing", sub: "92%", subColor: "text-emerald-400", borderCls: "border-amber-500/30" },
  { top: 160, left: 50, color: "sky", label: "Customer", sub: "Repeat", subColor: "text-sky-400", borderCls: "border-sky-500/30" },
];

const iconForNode = (label) => {
  const icons = { Proposal: "solar:document-linear", Payment: "solar:check-circle-linear", Job: "solar:checklist-linear", Inventory: "solar:box-linear", Staffing: "solar:users-group-two-rounded-linear", Customer: "solar:user-linear" };
  return icons[label] || "solar:star-linear";
};

const Panel1 = () => (
  <div className="flex flex-col w-[380px] shrink-0 h-[85vh]">
    <div className="mb-6 text-center">
      <h2 className="text-xl font-semibold tracking-tight text-white mb-2">1. ORBITAL EVENT VIEW</h2>
      <p className="text-sm text-neutral-400">Events orbit the selected event.<br />Everything connects to the center.</p>
    </div>
    <div className="glass-panel rounded-3xl flex flex-col flex-1 overflow-hidden relative">
      {/* Top Nav */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 bg-black/20">
        <QPLogo />
        <NavIcons />
      </div>
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <div className="w-[100px] border-r border-white/5 bg-black/10 flex flex-col py-4 gap-1 z-10">
          {[{ icon: "solar:home-linear", label: "Home" }, { icon: "solar:dollar-linear", label: "Command", active: true }, { icon: "solar:calendar-linear", label: "Events" }].map(({ icon, label, active }) => (
            <div key={label} className={`flex flex-col items-center gap-1 py-3 text-xs rounded-xl mx-2 cursor-pointer transition-colors ${active ? "text-indigo-400 bg-indigo-500/10" : "text-neutral-400 hover:bg-white/5"}`}>
              <iconify-icon icon={icon} width="16" />
              {label}
            </div>
          ))}
        </div>
        {/* Orbit Area */}
        <div className="flex-1 relative bg-black/20 flex items-center justify-center overflow-hidden">
          <div className="absolute top-4 left-4 text-sm font-semibold text-white tracking-tight z-20">Event Orbit</div>
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
            <defs>
              <radialGradient id="orbit-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            <circle cx="140" cy="240" r="110" fill="none" stroke="url(#orbit-grad)" strokeWidth="1" strokeDasharray="4 4" />
            {[{ x2: 140, y2: 80, color: "#4f46e5" }, { x2: 230, y2: 160, color: "#10b981" }, { x2: 240, y2: 280, color: "#f59e0b" }, { x2: 180, y2: 380, color: "#10b981" }, { x2: 40, y2: 340, color: "#f59e0b" }, { x2: 50, y2: 160, color: "#3b82f6" }].map((l, i) => (
              <line key={i} x1="140" y1="240" x2={l.x2} y2={l.y2} stroke={l.color} strokeWidth="1.5" />
            ))}
          </svg>
          {/* Central Node */}
          <div className="absolute w-28 h-28 rounded-full bg-neutral-900 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center z-20 backdrop-blur-md" style={{ top: 240, left: 140, transform: "translate(-50%,-50%)" }}>
            <span className="text-base font-semibold text-white tracking-tight">Winter Gala</span>
            <span className="text-[10px] text-neutral-400 mt-1">Dec 14, 2024</span>
            <span className="text-[10px] text-neutral-400">The Foundry Loft</span>
            <div className="flex items-center gap-1 mt-2 text-emerald-400">
              <iconify-icon icon="solar:radio-minimalistic-linear" width="12" />
              <span className="text-[10px] font-medium">On Track</span>
            </div>
          </div>
          {/* Orbiting Nodes */}
          {orbitNodes.map(({ top, left, label, sub, subColor, borderCls }) => (
            <div key={label} className={`absolute w-16 h-16 rounded-full glass-card ${borderCls} flex flex-col items-center justify-center z-10`} style={{ top, left, transform: "translate(-50%,-50%)" }}>
              <iconify-icon icon={iconForNode(label)} width="16" className={`mb-1 text-${label === "Payment" || label === "Inventory" ? "emerald" : label === "Customer" ? "sky" : label === "Job" || label === "Staffing" ? "amber" : "indigo"}-400`} />
              <span className="text-[9px] font-medium text-neutral-300">{label}</span>
              <span className={`text-[9px] ${subColor}`}>{sub}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Priorities */}
      <div className="p-4 border-t border-white/5 bg-black/40 backdrop-blur-xl absolute bottom-0 w-full z-30">
        <h3 className="text-sm font-semibold text-white tracking-tight mb-3">Top Priorities</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs glass-card rounded-lg p-2">
            <div className="flex items-center gap-2"><iconify-icon icon="solar:danger-circle-linear" width="14" className="text-rose-400" /><span>Confirm rental order</span></div>
            <span className="text-rose-400 font-medium">High</span>
          </div>
          <div className="flex items-center justify-between text-xs glass-card rounded-lg p-2">
            <div className="flex items-center gap-2"><iconify-icon icon="solar:shield-warning-linear" width="14" className="text-amber-400" /><span>Verify insurance</span></div>
            <span className="text-amber-400 font-medium">Medium</span>
          </div>
        </div>
        <div className="mt-3 text-center">
          <button className="text-xs text-indigo-400 font-medium hover:text-indigo-300 transition-colors">View All Tasks</button>
        </div>
      </div>
    </div>
    <p className="text-sm text-center text-neutral-400 mt-6 px-4">A hub-and-spoke view that shows<br />how everything relates.</p>
  </div>
);

// ── Panel 2: Cards Overview Board ─────────────────────────────────────────────
const eventCards = [
  { name: "Winter Gala", date: "Dec 14, 2024", venue: "The Foundry Loft", status: "On Track", statusCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", borderCls: "border-emerald-500/30", hoverGrad: "from-emerald-500/5", readiness: "78%", readinessCls: "", payment: "Cleared", paymentCls: "text-emerald-400", staffing: "92%", tasks: [2, 1, 0], taskColors: ["", "", ""] },
  { name: "Holiday Party", date: "Dec 20, 2024", venue: "Riverside Pavilion", status: "At Risk", statusCls: "bg-amber-500/10 text-amber-400 border-amber-500/20", borderCls: "border-amber-500/30", hoverGrad: "from-amber-500/5", readiness: "52%", readinessCls: "text-amber-400", payment: "Pending", paymentCls: "text-amber-400", staffing: "68%", tasks: [3, 2, 1], taskColors: ["text-amber-400", "", "text-amber-400"] },
  { name: "Corporate Lunch", date: "Dec 18, 2024", venue: "ACME HQ", status: "On Track", statusCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", borderCls: "", hoverGrad: "from-white/5", readiness: "85%", readinessCls: "", payment: "Cleared", paymentCls: "text-emerald-400", staffing: "100%", tasks: [0, 0, 0], taskColors: ["", "", ""] },
  { name: "Product Launch", date: "Jan 10, 2025", venue: "Innovation Center", status: "Blocked", statusCls: "bg-rose-500/10 text-rose-400 border-rose-500/20", borderCls: "border-rose-500/30", hoverGrad: "from-rose-500/5", readiness: "18%", readinessCls: "text-rose-400", payment: "Overdue", paymentCls: "text-rose-400", staffing: "40%", tasks: [4, 3, 2], taskColors: ["text-rose-400", "text-rose-400", "text-amber-400"] },
];

const Panel2 = () => (
  <div className="flex flex-col w-[380px] shrink-0 h-[85vh]">
    <div className="mb-6 text-center">
      <h2 className="text-xl font-semibold tracking-tight text-white mb-2">2. CARDS OVERVIEW BOARD</h2>
      <p className="text-sm text-neutral-400">Scan multiple events as cards with<br />key intel at a glance.</p>
    </div>
    <div className="glass-panel rounded-3xl flex flex-col flex-1 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-white/5 bg-black/20">
        <QPLogo />
        <div className="flex items-center gap-4 text-neutral-400">
          <iconify-icon icon="solar:user-linear" width="16" />
          <iconify-icon icon="solar:magnifer-linear" width="16" />
        </div>
      </div>
      <div className="p-4 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
        <span className="text-sm font-semibold text-white tracking-tight">Event Overview</span>
        <div className="flex gap-2">
          <button className="glass-card px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 hover:bg-white/10">
            <iconify-icon icon="solar:filter-linear" width="14" /> Filter
          </button>
          <button className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 hover:bg-indigo-500/30 transition-colors">
            <iconify-icon icon="solar:add-square-linear" width="14" /> New Event
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-3 bg-black/10">
        {eventCards.map((c) => (
          <div key={c.name} className={`glass-card rounded-xl p-3 ${c.borderCls} flex flex-col relative overflow-hidden group`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${c.hoverGrad} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="flex justify-between items-start mb-2 relative z-10">
              <h4 className="text-sm font-semibold text-white leading-tight">{c.name}</h4>
              <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full border ${c.statusCls}`}>{c.status}</span>
            </div>
            <div className="text-[10px] text-neutral-400 mb-0.5 relative z-10">{c.date}</div>
            <div className="text-[10px] text-neutral-400 mb-3 relative z-10 truncate">{c.venue}</div>
            <div className="flex justify-between text-[9px] mb-3 relative z-10">
              <div className="flex flex-col gap-0.5"><span className="text-neutral-500">Readiness</span><span className={`font-medium ${c.readinessCls || "text-white"}`}>{c.readiness}</span></div>
              <div className="flex flex-col gap-0.5"><span className="text-neutral-500">Payment</span><span className={`font-medium ${c.paymentCls}`}>{c.payment}</span></div>
              <div className="flex flex-col gap-0.5"><span className="text-neutral-500">Staffing</span><span className="font-medium text-white">{c.staffing}</span></div>
            </div>
            <div className="mt-auto pt-2 border-t border-white/5 flex gap-3 text-[10px] text-neutral-400 relative z-10">
              {[{ icon: "solar:calendar-linear", val: c.tasks[0], cls: c.taskColors[0] }, { icon: "solar:document-linear", val: c.tasks[1], cls: c.taskColors[1] }, { icon: "solar:check-circle-linear", val: c.tasks[2], cls: c.taskColors[2] }].map(({ icon, val, cls }, i) => (
                <div key={i} className={`flex items-center gap-1 ${cls}`}><iconify-icon icon={icon} width="12" />{val}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-white/5 bg-black/40 flex justify-center gap-4 text-[10px] font-medium text-neutral-400">
        {[{ color: "emerald", label: "On Track" }, { color: "amber", label: "Watch" }, { color: "orange", label: "At Risk" }, { color: "rose", label: "Blocked" }].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5"><StatusDot color={color} />{label}</div>
        ))}
      </div>
    </div>
    <p className="text-sm text-center text-neutral-400 mt-6 px-4">Compare many events and instantly<br />spot which need attention.</p>
  </div>
);

// ── Panel 3: Command Center Cockpit ───────────────────────────────────────────
const Panel3 = () => (
  <div className="flex flex-col w-[440px] shrink-0 h-[85vh]">
    <div className="mb-6 text-center">
      <h2 className="text-xl font-semibold tracking-tight text-white mb-2">3. COMMAND CENTER COCKPIT</h2>
      <p className="text-sm text-neutral-400">Deep operational cockpit for the<br />selected event.</p>
    </div>
    <div className="glass-panel rounded-3xl flex flex-col flex-1 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-white/5 bg-black/20">
        <QPLogo />
        <div className="flex items-center gap-4 text-neutral-400">
          <iconify-icon icon="solar:user-linear" width="16" />
          <iconify-icon icon="solar:magnifer-linear" width="16" />
        </div>
      </div>
      <div className="px-5 py-3 text-[11px] text-neutral-400 border-b border-white/5 flex items-center gap-2 bg-white/[0.01]">
        <span className="hover:text-white cursor-pointer transition-colors">Command Center</span>
        <iconify-icon icon="solar:alt-arrow-right-linear" width="12" />
        <span className="text-white font-medium">Winter Gala</span>
        <div className="ml-auto"><iconify-icon icon="solar:maximize-square-linear" width="14" className="hover:text-white cursor-pointer transition-colors" /></div>
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-black/10">
        {/* Event Health */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-tight mb-3">Event Health</h3>
          <div className="flex gap-6 items-center">
            <div className="relative w-28 h-28 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#34d399" strokeWidth="8" strokeDasharray="283" strokeDashoffset="62" className="drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white">78%</span>
                <span className="text-[10px] text-emerald-400 font-medium">On Track</span>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              {[{ label: "Proposal", pct: 100, color: "bg-emerald-500" }, { label: "Payment", pct: 100, color: "bg-emerald-500" }, { label: "Inventory", pct: 65, color: "bg-amber-500" }, { label: "Staffing", pct: 92, color: "bg-emerald-500" }].map(({ label, pct, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-[10px] text-neutral-400 mb-1"><span>{label}</span><span>{pct}%</span></div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Timeline */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-tight mb-3">Timeline</h3>
          <div className="space-y-3">
            {[{ label: "Venue confirmed", done: true }, { label: "Proposal signed", done: true }, { label: "Deposit paid", done: true }, { label: "Staff assigned", done: false, warn: true }, { label: "Equipment ordered", done: false }].map(({ label, done, warn }) => (
              <div key={label} className="flex items-center gap-3 text-xs">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${done ? "bg-emerald-500/20 border-emerald-500/50" : warn ? "bg-amber-500/20 border-amber-500/50" : "border-white/20"}`}>
                  {done && <iconify-icon icon="solar:check-read-linear" width="10" className="text-emerald-400" />}
                  {warn && <iconify-icon icon="solar:danger-triangle-linear" width="10" className="text-amber-400" />}
                </div>
                <span className={done ? "text-neutral-300" : warn ? "text-amber-400" : "text-neutral-500"}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Job Cards */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-tight mb-3">Active Jobs</h3>
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03] mb-3">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
                <iconify-icon icon="solar:box-minimalistic-linear" width="12" />Dinner Reception
              </div>
              <iconify-icon icon="solar:menu-dots-linear" width="16" className="text-neutral-500" />
            </div>
            <div className="text-sm font-semibold text-white mb-1">The Foundry Loft</div>
            <div className="text-[11px] text-neutral-400 mb-3">Sat, Dec 14 • 6:00 PM – 11:00 PM</div>
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">3 staff needed</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-amber-400">2/3 assigned</span>
            </div>
            <div className="text-[10px] text-neutral-500 mb-3">Lead Chef • Sous Chef • Steward</div>
            <div className="flex gap-2 items-center text-[10px]">
              <span className="px-2 py-0.5 rounded-sm bg-white/10 text-neutral-300">warn</span>
              <span className="text-neutral-500">$6,500 est.</span>
            </div>
          </div>
          <div className="rounded-xl border border-white/5 p-4 bg-white/[0.02] cursor-grab hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
                <iconify-icon icon="solar:box-minimalistic-linear" width="12" />Private Dinner
              </div>
              <iconify-icon icon="solar:menu-dots-linear" width="16" className="text-neutral-500" />
            </div>
            <div className="text-sm font-semibold text-white mb-1">The Hart Residence</div>
            <div className="text-[11px] text-neutral-400 mb-0.5">Fri, Jun 20 • 7:00 PM – 10:00 PM</div>
            <div className="text-[11px] text-neutral-400 mb-3">Estate Kitchen</div>
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">2 staff needed</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-neutral-400">0/2 assigned</span>
            </div>
            <div className="text-[10px] text-neutral-500 mb-3">Lead Chef • Steward</div>
            <div className="flex gap-2 items-center text-[10px]">
              <span className="px-2 py-0.5 rounded-sm bg-white/10 text-neutral-300">pass</span>
              <span className="text-neutral-500">$3,800 est.</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white font-semibold text-xs">JI</div>
            <div>
              <div className="text-xs text-white font-medium">Jony Ive</div>
              <div className="text-[10px] text-neutral-500">Refined minimal scheduler</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── Panel 4: Scheduler / Staff Dispatch ───────────────────────────────────────
const Panel4 = () => (
  <div className="flex flex-col w-[900px] shrink-0 h-[85vh]">
    <div className="mb-6 text-center">
      <h2 className="text-xl font-semibold tracking-tight text-white mb-2">4. STAFF DISPATCH SCHEDULER</h2>
      <p className="text-sm text-neutral-400">Drag staff onto events in a visual<br />weekly calendar.</p>
    </div>
    <div className="glass-panel rounded-3xl flex flex-1 overflow-hidden">
      {/* Left column: staff list */}
      <div className="w-[220px] border-r border-white/5 bg-black/20 flex flex-col">
        <div className="p-4 border-b border-white/5">
          <div className="text-xs font-semibold text-white tracking-tight mb-3">Available Staff</div>
          <div className="space-y-2">
            {[{ name: "Chef Morgan", role: "Lead Chef" }, { name: "Sous Chef Lee", role: "Sous Chef" }, { name: "Maya R.", role: "Steward" }, { name: "Tom K.", role: "Steward" }].map(({ name, role }) => (
              <div key={name} className="flex items-center gap-2 glass-card rounded-xl px-3 py-2 cursor-grab hover:bg-white/10 transition-colors">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">{name}</div>
                  <div className="text-[10px] text-neutral-400">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="text-xs font-semibold text-white tracking-tight mb-3">Pending Jobs</div>
          <div className="space-y-3">
            {[{ name: "Dinner Reception", venue: "The Foundry Loft", time: "Dec 14, 6 PM", staff: "2/3", color: "amber" }, { name: "Private Dinner", venue: "Hart Residence", time: "Jun 20, 7 PM", staff: "0/2", color: "rose" }].map(({ name, venue, time, staff, color }) => (
              <div key={name} className={`rounded-xl border border-${color}-500/30 bg-${color}-500/5 p-3`}>
                <div className="text-[11px] font-semibold text-white mb-0.5">{name}</div>
                <div className="text-[10px] text-neutral-400 mb-1">{venue}</div>
                <div className="text-[10px] text-neutral-500 mb-2">{time}</div>
                <span className={`text-[10px] text-${color}-400 font-medium`}>{staff} assigned</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 mt-auto border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white font-semibold text-xs">JI</div>
            <div><div className="text-xs text-white font-medium">Jony Ive</div><div className="text-[10px] text-neutral-500">Refined minimal scheduler</div></div>
          </div>
        </div>
      </div>
      {/* Middle: Calendar */}
      <div className="flex-1 flex flex-col relative bg-[#747b86] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent)] opacity-50 pointer-events-none" />
        <div className="flex border-b border-white/20 text-[10px] text-neutral-300 uppercase tracking-widest bg-black/20 z-10">
          <div className="w-16 py-4 text-center border-r border-white/20 font-medium">UTC</div>
          {["Mon, Jun 16", "Tue, Jun 17", "Wed, Jun 18", "Thu, Jun 19", "Fri, Jun 20"].map(d => (
            <div key={d} className="flex-1 py-4 text-center border-r border-white/20 font-medium">{d}</div>
          ))}
          <div className="flex-1 py-4 text-center border-r border-amber-500/50 bg-amber-500/10 text-white font-semibold">Sat, Jun 21</div>
          <div className="flex-1 py-4 text-center font-medium">Sun, Jun 22</div>
        </div>
        <div className="flex-1 flex relative overflow-y-auto hide-scrollbar">
          <div className="absolute inset-0 flex pointer-events-none z-0">
            <div className="w-16 border-r border-white/10 bg-black/10" />
            {["","","","",""].map((_,i) => <div key={i} className="flex-1 border-r border-white/10" />)}
            <div className="flex-1 border-r border-amber-500/30 bg-amber-500/[0.05]" />
            <div className="flex-1" />
          </div>
          <div className="w-16 flex flex-col text-[10px] text-white z-10 font-medium">
            {["8 AM","10 AM","12 PM","2 PM","4 PM","6 PM","8 PM","10 PM"].map(t => (
              <div key={t} className="h-20 flex items-center justify-center border-b border-white/10">{t}</div>
            ))}
          </div>
          <div className="flex-1 relative z-10">
            <div className="absolute inset-0 flex flex-col pointer-events-none">
              {[...Array(8)].map((_,i) => <div key={i} className="h-20 border-b border-white/10" />)}
            </div>
            <div className="absolute top-[20px] left-[5%] flex items-center gap-2 glass-card px-3 py-1.5 rounded-xl border-white/20 shadow-lg cursor-pointer bg-white/20 backdrop-blur-md">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center drop-shadow-md">
                <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg>
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-[10px] font-semibold text-white leading-none">Chef Morgan</span>
                <span className="text-[9px] text-white/80 leading-none mt-1">Lead Chef</span>
              </div>
            </div>
            <div className="absolute top-[100px] left-[20%] flex items-center gap-2 glass-card px-3 py-1.5 rounded-xl border-white/20 shadow-lg cursor-pointer bg-white/20 backdrop-blur-md">
              <div className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center drop-shadow-md">
                <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg>
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-[10px] font-semibold text-white leading-none">Sous Chef Lee</span>
                <span className="text-[9px] text-white/80 leading-none mt-1">Sous Chef</span>
              </div>
            </div>
            <div className="absolute top-[340px] left-[70%] w-[30%] h-36 rounded-xl border border-amber-400 bg-black/60 backdrop-blur-md shadow-[0_0_30px_rgba(251,191,36,0.25)] p-4 z-20 flex flex-col">
              <div className="text-[10px] font-medium text-amber-400 mb-1">6:00 PM – 10:00 PM</div>
              <div className="text-sm font-semibold text-white mb-0.5 truncate">Banquet: Golden Gala</div>
              <div className="text-[11px] text-neutral-300 mb-3 truncate">Grand Ballroom</div>
              <div className="text-[11px] text-amber-400 flex items-center gap-1 mb-3">
                <iconify-icon icon="solar:users-group-two-rounded-linear" width="14" />3 staff needed
              </div>
              <div className="flex gap-3 mt-auto">
                {[{ opacity: "bg-white/20", sz: "text-white" }, { opacity: "bg-white/20", sz: "text-white/80" }].map((s, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${s.opacity} border border-white/40 flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${s.sz} drop-shadow`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg>
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border border-dashed border-amber-400 flex items-center justify-center" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full px-6 py-2 bg-black/60 border border-white/10 flex items-center gap-6 text-[10px] text-neutral-300 z-20 backdrop-blur-md">
            {[{ sz: "text-white", label: "= Lead Chef" }, { sz: "text-white/70", label: "= Sous Chef" }, { sz: "text-black", label: "= Steward" }].map(({ sz, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <svg className={`w-3.5 h-3.5 ${sz}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg>{label}
              </div>
            ))}
            <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded-full border border-dashed border-amber-400" />= Open Role</div>
          </div>
        </div>
      </div>
      {/* Right: Drop Preview */}
      <div className="w-[320px] border-l border-white/5 bg-black/20 flex flex-col">
        <div className="p-6 border-b border-white/5">
          <div className="flex justify-between items-start mb-3">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Drop Preview</div>
            <div className="text-[10px] text-amber-400 border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded-full">Multi-staff</div>
          </div>
          <h2 className="text-xl font-semibold text-white mb-1">Banquet: Golden Gala</h2>
          <div className="text-[11px] text-neutral-400 mb-1">Sat, Jun 21 • 6:00 PM – 10:00 PM</div>
          <div className="text-[11px] text-neutral-400 flex items-center gap-1 mb-5">
            <iconify-icon icon="solar:map-point-linear" width="12" />Grand Ballroom
          </div>
          <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium mb-2">Staff Lineup</div>
          <div className="text-sm text-white mb-2">2 of 3 staff assigned</div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-amber-500 w-[66%] shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          </div>
          <div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-widest font-medium mb-3">
            <span>Required Roles</span><span>Status</span>
          </div>
          <div className="space-y-4">
            {[{ role: "Lead Chef", person: "Chef Morgan", assigned: true }, { role: "Sous Chef", person: "Sous Chef Lee", assigned: true }, { role: "Steward", person: "Needs 1 staff", assigned: false }].map(({ role, person, assigned }) => (
              <div key={role} className="flex items-center justify-between pb-4 border-b border-white/5 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${assigned ? "bg-white/10" : "border border-dashed border-amber-500/50"}`}>
                    {assigned && <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg>}
                  </div>
                  <div>
                    <div className="text-sm text-white">{role}</div>
                    <div className="text-[10px] text-neutral-500">1 required</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-[11px] flex items-center justify-end gap-1 ${assigned ? "text-emerald-400" : "text-amber-400"}`}>
                    {assigned ? <><span className="w-3 h-3 rounded-full bg-emerald-500/20 flex items-center justify-center"><iconify-icon icon="solar:check-read-linear" width="8" /></span>Assigned</> : <>Open <iconify-icon icon="solar:danger-triangle-linear" width="12" /></>}
                  </div>
                  <div className={`text-[11px] ${assigned ? "text-white" : "text-amber-500/70"}`}>{person}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 mt-auto bg-black/40">
          <div className="bg-[#261f15] border border-amber-500/30 rounded-lg p-3 flex gap-3 items-start mb-4">
            <iconify-icon icon="solar:info-circle-linear" width="16" className="text-amber-400 shrink-0 mt-0.5" />
            <div className="text-[11px] text-amber-400/90 leading-relaxed">One required role is still open. Assign a Steward to meet the 3-staff requirement.</div>
          </div>
          <button className="w-full py-2.5 rounded-lg bg-gradient-to-b from-[#a38054] to-[#7a5c37] text-white font-semibold text-sm mb-2 shadow-[0_4px_15px_rgba(163,128,84,0.2)] hover:brightness-110 transition-all">Confirm assignment</button>
          <button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors">Hold placement</button>
          <div className="mt-5 pt-4 border-t border-white/10">
            <div className="text-[10px] text-neutral-500 mb-3">These 2 staff are reserved for this job.</div>
            <div className="flex gap-4">
              {[{ name: "Chef Morgan", role: "Lead Chef" }, { name: "Sous Chef Lee", role: "Sous Chef" }].map(({ name, role }) => (
                <div key={name} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg>
                  </div>
                  <div className="text-[10px] text-neutral-300 leading-tight">
                    <div className="font-medium text-white">{name}</div>{role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className="text-sm text-center text-neutral-400 mt-6 px-4">Drag staff onto events in a visual<br />weekly calendar view.</p>
  </div>
);

// ── App Root ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#030508] text-neutral-300 font-sans min-h-screen overflow-x-auto hide-scrollbar selection:bg-indigo-500/30 antialiased">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] rounded-full bg-amber-500/5 blur-[100px]" />
      </div>
      <div className="relative z-10 flex gap-8 p-12 w-max mx-auto h-screen items-center">
        <Panel1 />
        <Panel2 />
        <Panel3 />
        <Panel4 />
      </div>
    </div>
  );
}