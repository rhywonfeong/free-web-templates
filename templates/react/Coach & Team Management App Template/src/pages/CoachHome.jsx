import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import clsx from 'clsx';
import UnicornScene from 'unicornstudio-react';

export default function CoachHome() {
  const [replaySent, setReplaySent] = useState(false);

  // Chart data for attendance snapshot
  const data = [
    { name: 'Going', value: 12, color: '#00E559' },
    { name: 'No', value: 2, color: '#EF4444' },
    { name: 'Pending', value: 4, color: '#27272A' },
  ];

  const handleSendReplay = () => {
    setReplaySent(true);
    setTimeout(() => setReplaySent(false), 3000);
  };

  return (
    <>
      {/* Aura Background Layer #1 */}
      <div
        className="aura-background-component fixed top-0 w-full h-screen -z-10"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      >
        <UnicornScene
          projectId="aNQ1HJcO2IvNyDCGls8J"
          className="w-full h-full"
        />
      </div>

      {/* Aura Background Layer #2 */}
      <div
        className="aura-background-component top-0 w-full -z-10 absolute h-full"
      >
        <UnicornScene
          projectId="aNQ1HJcO2IvNyDCGls8J"
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-5 pt-2 pb-6 animate-fade-in" style={{animation: 'fadeIn 0.5s ease-out'}}>
        
        {/* Coach Header Context */}
        <section className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-white mb-1">Coach Mike</h2>
            <p className="text-sm text-[#A1A1AA]">Operations Overview</p>
          </div>
          <div className="bg-[#1A1B1E] border border-[#27272A] px-3 py-1.5 rounded-full flex items-center gap-2">
            <iconify-icon icon="solar:cloud-sun-2-linear" width="16" className="text-[#38BDF8]"></iconify-icon>
            <span className="text-xs font-mono text-white">72° Clear</span>
          </div>
        </section>

        {/* Operational Dashboard: Upcoming Event Status */}
        <section className="bg-[#1A1B1E] border border-[#27272A] rounded-[20px] p-5 shadow-lg flex gap-4">
          <div className="w-24 h-24 relative flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={32}
                  outerRadius={44}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-medium text-white leading-none">12</span>
              <span className="text-[9px] font-mono text-[#A1A1AA] uppercase">Going</span>
            </div>
          </div>

          <div className="flex flex-col justify-center flex-1">
            <h3 className="text-sm font-medium text-white mb-1">Saturday Game</h3>
            <p className="text-xs text-[#A1A1AA] mb-3">12 Going · 2 No · 4 Pending</p>
            <button className="bg-[#27272A] hover:bg-[#3f3f46] text-white text-xs font-medium py-2 px-3 rounded-lg w-full flex justify-center items-center gap-1.5 transition-colors">
              <iconify-icon icon="solar:bell-bing-linear" width="14"></iconify-icon>
              Nudge Pending
            </button>
          </div>
        </section>

        {/* Primary Coach Tool: Parent Replay Creator */}
        <section className="bg-gradient-to-br from-[#00E559]/10 to-[#1A1B1E] border border-[#00E559]/30 rounded-[20px] p-5 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <iconify-icon icon="solar:clapperboard-play-linear" width="20" className="text-[#00E559]"></iconify-icon>
              <h3 className="text-base font-medium text-white">Draft Parent Replay</h3>
            </div>
            <p className="text-xs text-[#A1A1AA] mb-4 pr-8">
              Turn today's practice into a simple 2-minute home activity for parents to run with their kids.
            </p>
            
            <div className="flex gap-2">
              <button 
                onClick={handleSendReplay}
                disabled={replaySent}
                className={clsx(
                  "flex-1 py-2.5 rounded-[12px] text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2",
                  replaySent 
                    ? "bg-transparent border border-[#00E559] text-[#00E559]" 
                    : "bg-[#00E559] text-black hover:bg-[#00c94e]"
                )}
              >
                {replaySent ? (
                  <>
                    <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                    Sent to Parents
                  </>
                ) : (
                  <>
                    <iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
                    Create Recap
                  </>
                )}
              </button>
            </div>
          </div>
          <iconify-icon icon="solar:magic-stick-3-bold" width="120" className="absolute -bottom-6 -right-6 text-[#00E559]/5 rotate-12 pointer-events-none"></iconify-icon>
        </section>

        {/* Recent Activity / Action Items */}
        <section>
          <h3 className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-3 ml-1">Action Items</h3>
          <div className="flex flex-col gap-2">
            
            <div className="bg-[#1A1B1E] border border-[#27272A] rounded-[16px] p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#27272A] flex items-center justify-center text-[#A1A1AA]">
                  <iconify-icon icon="solar:hand-shake-linear" width="16"></iconify-icon>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Missing Volunteer</p>
                  <p className="text-xs text-[#A1A1AA]">Need scorekeeper for Sat</p>
                </div>
              </div>
              <button className="text-xs font-medium text-[#38BDF8] px-2 py-1 bg-[#38BDF8]/10 rounded-md">
                Assign
              </button>
            </div>

            <div className="bg-[#1A1B1E] border border-[#27272A] rounded-[16px] p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#27272A] flex items-center justify-center text-[#A1A1AA]">
                  <iconify-icon icon="solar:letter-opened-linear" width="16"></iconify-icon>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Parent Question</p>
                  <p className="text-xs text-[#A1A1AA]">Leo's mom asked about cleats</p>
                </div>
              </div>
              <button className="text-xs font-medium text-white px-2 py-1 bg-[#27272A] rounded-md hover:bg-[#3f3f46]">
                Reply
              </button>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}