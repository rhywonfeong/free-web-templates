import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* 1. Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Trips', value: '14', icon: 'solar:routing-2-linear', info: '2 departing today', color: 'text-stone-900' },
          { label: 'Pending Approvals', value: '5', icon: 'solar:clipboard-check-linear', info: 'Requires sign-off', color: 'text-amber-600' },
          { label: 'Awaiting Replies', value: '8', icon: 'solar:inbox-line-linear', info: 'From external partners', color: 'text-slate-600' },
          { label: 'At-Risk Trips', value: '2', icon: 'solar:danger-triangle-linear', info: 'Action needed', color: 'text-rose-600' }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-stone-200/60 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-stone-50 border border-stone-100 ${stat.color}`}>
                <iconify-icon icon={stat.icon} width="18"></iconify-icon>
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-stone-900 tracking-tight mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-stone-600">{stat.label}</div>
              <div className="text-xs text-stone-400 mt-1">{stat.info}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Main Overview & Approvals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Overview Panel (Spans 2 columns) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-stone-200/60 p-6 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-base font-semibold text-stone-900 tracking-tight">Team Activity Overview</h2>
                <p className="text-sm text-stone-500 mt-1">3 trips need your attention today.</p>
              </div>
              <button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">View all</button>
            </div>
            
            <div className="bg-[#FDFBF7] border border-stone-200/50 rounded-xl p-5 mb-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-medium uppercase tracking-wider">Top Priority</span>
                    <span className="text-xs text-stone-500">Departing in 48h</span>
                  </div>
                  <h3 className="text-base font-medium text-stone-900">Q3 Exec Offsite (London)</h3>
                  <p className="text-sm text-stone-500 mt-1">Flights confirmed, awaiting hotel group block sign-off.</p>
                </div>
                <button className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm whitespace-nowrap">
                  Review Details
                </button>
              </div>
            </div>

            <div className="space-y-3 flex-1">
              {[
                { name: 'Tokyo Expansion Summit', owner: 'Alex M.', status: 'Drafting', tag: 'bg-stone-100 text-stone-600 border-stone-200' },
                { name: 'SF Engineering Sync', owner: 'Sarah K.', status: 'Booking', tag: 'bg-blue-50 text-blue-700 border-blue-100' },
              ].map((trip, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors group cursor-pointer border border-transparent hover:border-stone-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-medium text-stone-600">
                      {trip.owner.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-stone-900 group-hover:text-stone-700 transition-colors">{trip.name}</h4>
                      <p className="text-xs text-stone-500">Managed by {trip.owner}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-md text-[11px] font-medium border ${trip.tag}`}>
                    {trip.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Approvals Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-stone-200/60 p-6 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-stone-900 tracking-tight flex items-center gap-2">
                Approvals
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs flex items-center justify-center font-medium">5</span>
              </h2>
            </div>
            <div className="space-y-3 flex-1">
              {[
                { type: 'Itinerary Change', title: 'Q4 Summit Hotel Shift', desc: 'Requested by Sarah K.' },
                { type: 'Budget Override', title: 'Late Flight Booking', desc: 'Exceeds cap by $140' },
              ].map((approval, i) => (
                <div key={i} className="p-3 border border-stone-100 rounded-xl bg-[#FDFBF7] hover:border-stone-200 transition-colors">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 mb-1">{approval.type}</div>
                  <h4 className="text-sm font-medium text-stone-900 mb-0.5">{approval.title}</h4>
                  <p className="text-xs text-stone-500 mb-3">{approval.desc}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-1.5 bg-stone-900 text-stone-50 text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors">Approve</button>
                    <button className="flex-1 py-1.5 bg-white border border-stone-200 text-stone-700 text-xs font-medium rounded-lg hover:bg-stone-50 transition-colors">Review</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-stone-100">
              <button className="w-full py-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors text-center">
                View all pending (3 more)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Secondary Dashboard Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* At-Risk / Alerts Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-stone-200/60 p-6 shadow-sm h-full">
            <h2 className="text-base font-semibold text-stone-900 tracking-tight mb-4">Trips at Risk</h2>
            <div className="space-y-3">
              <div className="flex gap-3 items-start p-3 bg-rose-50/50 border border-rose-100 rounded-xl">
                <iconify-icon icon="solar:shield-warning-linear" className="text-rose-600 mt-0.5" width="16"></iconify-icon>
                <div>
                  <h4 className="text-sm font-medium text-stone-900">Availability Conflict</h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">Exec calendar overlap on Day 2 of London Conf.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-amber-50/50 border border-amber-100 rounded-xl">
                <iconify-icon icon="solar:clock-circle-linear" className="text-amber-600 mt-0.5" width="16"></iconify-icon>
                <div>
                  <h4 className="text-sm font-medium text-stone-900">Meeting Threshold</h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">NYC Tour only has 2/5 target meetings confirmed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Thread Activity (Now spans 2 columns with a cleaner grid) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-stone-200/60 p-6 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-stone-900 tracking-tight">Live Activity</h2>
              <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Agent Active
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {[
                { entity: 'Marriott Group', preview: 'We can accommodate the block size under the corporate code. Attached is the folio.', owner: 'David L.', time: '10m ago' },
                { entity: 'Delta Air Lines', preview: 'Schedule Change: DL492. Your upcoming flight has been changed by 45 mins.', owner: 'Agent Sync', time: '1h ago' },
              ].map((msg, i) => (
                <div key={i} className="group cursor-pointer p-4 rounded-xl bg-[#FDFBF7] border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-stone-900">{msg.entity}</span>
                      <span className="text-[10px] text-stone-500 px-2 py-0.5 bg-white rounded-full border border-stone-200/60">{msg.time}</span>
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-2 mb-3 leading-relaxed">{msg.preview}</p>
                  </div>
                  <div className="text-xs font-medium text-stone-600 flex items-center gap-1.5 mt-auto">
                    {msg.owner === 'Agent Sync' ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                        <iconify-icon icon="solar:magic-stick-3-linear" width="12"></iconify-icon>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center text-[10px]">
                        {msg.owner.charAt(0)}
                      </div>
                    )}
                    {msg.owner}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Team Trips List (Table) Full Width */}
      <div className="bg-white rounded-2xl border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-stone-200/60 flex items-center justify-between">
          <h2 className="text-base font-semibold text-stone-900 tracking-tight">Active Team Trips</h2>
          <button className="text-sm text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1">
            Filter <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50/50 text-stone-500">
                <th className="px-6 py-3 font-medium">Trip</th>
                <th className="px-6 py-3 font-medium">Owner</th>
                <th className="px-6 py-3 font-medium">Dates</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {[
                { trip: 'Berlin Sales Kickoff', owner: 'David L.', dates: 'Oct 12-15', status: 'Confirmed', statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
                { trip: 'NYC Client Tour', owner: 'Emma W.', dates: 'Oct 18-22', status: 'Needs Approval', statusColor: 'text-amber-700 bg-amber-50 border-amber-100' },
                { trip: 'Paris Tech Week', owner: 'James P.', dates: 'Nov 02-06', status: 'Tentative', statusColor: 'text-stone-600 bg-stone-50 border-stone-200' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-stone-50/50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-stone-900">{row.trip}</td>
                  <td className="px-6 py-4 text-stone-500">{row.owner}</td>
                  <td className="px-6 py-4 text-stone-500">{row.dates}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-md text-[11px] font-medium border ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}