import React from 'react';

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-[#050505] border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Interactive Operations Hub
          </h2>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
            Experience complete oversight with a dashboard designed around invariants. Track the immutable lifecycle of every commitment natively.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="w-full rounded-2xl border border-[#D4AF37]/20 bg-[#0A0A0A] shadow-[0_20px_60px_rgba(212,175,55,0.05)] overflow-hidden flex flex-col md:flex-row h-auto md:h-[700px]">
          
          {/* Left Sidebar */}
          <div className="w-full md:w-[220px] bg-[#050505] border-r border-white/5 flex flex-col p-4 shrink-0">
            <div className="px-2 pt-2 mb-8">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/347b726c-22f8-408c-91bd-bb8cd77b499a/54e5bf79-0807-42e9-9ed3-3fcbab20fac7-image-1.png?v=1777499772618" 
                alt="Opscore" 
                className="h-6 w-auto" 
              />
            </div>
            <div className="text-[#F3E5AB] text-xs font-semibold uppercase tracking-widest mb-6 px-2">Menu</div>
            <nav className="flex flex-col gap-1">
              {['Overview', 'Quotes', 'Approvals', 'Proposals', 'Jobs', 'Inventory', 'Payments', 'Analytics', 'AI Review'].map((item, i) => (
                <div key={item} className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${i === 1 ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                  {item}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col bg-[#0A0A0A] overflow-hidden">
            
            {/* Top Metrics Row */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 p-6 border-b border-white/5 bg-[#050505]/50">
              {[
                { label: "Accepted Revenue", val: "$142,500" },
                { label: "Collected Revenue", val: "$110,200" },
                { label: "Outstanding", val: "$32,300" },
                { label: "Approval Queue", val: "4 Pending" },
                { label: "Scheduling Blockers", val: "2 Items" }
              ].map((stat, i) => (
                <div key={i} className="flex-1 min-w-[140px] p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col">
                  <span className="text-slate-500 text-[11px] uppercase tracking-wider mb-1">{stat.label}</span>
                  <span className="text-white text-lg font-medium">{stat.val}</span>
                </div>
              ))}
            </div>

            {/* Center Content: Table */}
            <div className="p-6 flex-1 overflow-x-auto hide-scrollbar">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-medium text-lg">Quote Lifecycle Active State</h3>
                <button className="text-xs text-[#D4AF37] font-medium px-3 py-1.5 rounded bg-[#D4AF37]/10">Export Auditable View</button>
              </div>

              <div className="min-w-[700px]">
                <div className="grid grid-cols-7 gap-4 pb-3 border-b border-white/10 text-xs font-medium text-slate-500 uppercase tracking-wider">
                  <div>Quote</div>
                  <div>Version</div>
                  <div>State</div>
                  <div>Approval</div>
                  <div>Payment</div>
                  <div>Job Status</div>
                  <div>AI Flag</div>
                </div>
                
                {/* Table Rows */}
                {[
                  { q: "QT-2041", v: "v4 (Locked)", st: "Accepted", ap: "Approved", py: "Settled", js: "Ready", ai: "None" },
                  { q: "QT-2042", v: "v2 (Active)", st: "Drafting", ap: "Pending", py: "Unpaid", js: "Blocked", ai: "Suggested" },
                  { q: "QT-2043", v: "v1 (Locked)", st: "Declined", ap: "Rejected", py: "N/A", js: "Terminated", ai: "None" },
                  { q: "QT-2044", v: "v5 (Locked)", st: "Proposal", ap: "Approved", py: "Pending", js: "Blocked", ai: "Validated" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-7 gap-4 py-4 border-b border-white/5 text-sm text-slate-300 items-center">
                    <div className="font-medium text-white">{row.q}</div>
                    <div><span className="px-2 py-1 bg-white/5 rounded text-xs">{row.v}</span></div>
                    <div>{row.st}</div>
                    <div className={row.ap === 'Approved' ? 'text-emerald-400' : row.ap === 'Pending' ? 'text-[#D4AF37]' : 'text-rose-400'}>{row.ap}</div>
                    <div>{row.py}</div>
                    <div>{row.js}</div>
                    <div className="text-slate-500">{row.ai}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Policy Guardrails */}
          <div className="w-full md:w-[280px] bg-[#050505] border-l border-white/5 p-6 shrink-0 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:shield-keyhole-bold-duotone" width="20" class="text-[#D4AF37]"></iconify-icon>
              <h4 className="text-white font-medium text-sm">Policy Guardrails</h4>
            </div>
            
            <div className="flex flex-col gap-4">
              {[
                "Snapshot prices locked",
                "Approval tied to version",
                "Proposal send requires approval",
                "Job creation requires acceptance",
                "AI requires human confirmation"
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#0A0A0A] border border-white/5">
                  <iconify-icon icon="solar:check-circle-bold-duotone" width="16" class="text-[#D4AF37] mt-0.5 shrink-0"></iconify-icon>
                  <span className="text-xs text-slate-300 leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;