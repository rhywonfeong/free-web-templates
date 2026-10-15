export default function Stats() {
  const stats = [
    { label: "Active Nodes", value: "14,205", icon: "solar:server-square-linear", trend: "+12.5%" },
    { label: "Data Rendered", value: "2.4 PB", icon: "solar:database-linear", trend: "+8.2%" },
    { label: "Uptime", value: "99.99%", icon: "solar:clock-circle-linear", trend: "Stable" }
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-12 z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="relative group rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-600/30 via-zinc-800/10 to-black/80 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-800/90 to-zinc-950/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]"></div>
            
            {/* Updated Grid Background Pattern */}
            <div className="absolute inset-[1px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGgtdi0waC16IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] rounded-[calc(2rem-1px)] z-0 opacity-100"></div>

            <div className="relative z-10 p-8 flex flex-col justify-between h-full min-h-[200px]">
              <div className="flex justify-between items-start w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-800 flex items-center justify-center border border-zinc-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-zinc-400">
                  <iconify-icon icon={stat.icon} width="24"></iconify-icon>
                </div>
                <span className="text-xs font-medium text-zinc-400 bg-black/20 px-2.5 py-1 rounded-full border border-white/5">
                  {stat.trend}
                </span>
              </div>
              
              <div className="mt-8">
                <div className="text-4xl lg:text-5xl font-geist font-light tracking-tighter text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium tracking-wide">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}