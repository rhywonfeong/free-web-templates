import React from 'react';

export default function ReportsBoard() {
  return (
    <main className="flex flex-1 flex-col min-w-0 bg-neutral-100 overflow-hidden relative">
      <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">Production Reports</h1>
        </div>
        <button className="px-3 py-1.5 bg-white border border-zinc-200 text-slate-700 hover:bg-neutral-50 text-sm font-medium rounded-md shadow-sm transition-colors flex items-center gap-2">
          <iconify-icon icon="solar:download-linear" stroke-width="1.5"></iconify-icon>
          Export CSV
        </button>
      </header>

      <div className="flex-1 overflow-auto p-6 scroll-smooth">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Active Orders</div>
              <div className="text-2xl font-semibold tracking-tight text-slate-900">12</div>
              <div className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <iconify-icon icon="solar:trend-up-linear" stroke-width="1.5"></iconify-icon>
                +2 this week
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Units in Production</div>
              <div className="text-2xl font-semibold tracking-tight text-slate-900">8,450</div>
              <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                Across 4 stages
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Completed (MTD)</div>
              <div className="text-2xl font-semibold tracking-tight text-slate-900">3,210</div>
              <div className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <iconify-icon icon="solar:trend-up-linear" stroke-width="1.5"></iconify-icon>
                14% vs last month
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Defect Rate</div>
              <div className="text-2xl font-semibold tracking-tight text-slate-900">0.8%</div>
              <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                Well below 2% target
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-zinc-200 bg-white">
              <h2 className="text-base font-semibold tracking-tight text-slate-900">Purchase Order Summary</h2>
              <p className="text-xs text-slate-500 mt-1">Aggregated completion metrics by order</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-neutral-50/50 border-b border-zinc-200">
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">PO Number</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Items</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Completion Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-sm text-slate-900 tracking-tight">PO #2593</td>
                    <td className="px-6 py-4 text-sm text-slate-600">5,000 units</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#e8f8fe] text-[#1595c2] text-xs font-medium border border-[#d1f1fd]">
                        In Production
                      </span>
                    </td>
                    <td className="px-6 py-4 w-1/3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#1ABAF2] rounded-full" style={{ width: '45%' }}></div>
                        </div>
                        <span className="text-xs font-medium text-slate-600 w-8">45%</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-sm text-slate-900 tracking-tight">PO #2594</td>
                    <td className="px-6 py-4 text-sm text-slate-600">2,450 units</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-medium border border-amber-100">
                        Cutting
                      </span>
                    </td>
                    <td className="px-6 py-4 w-1/3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                        <span className="text-xs font-medium text-slate-600 w-8">15%</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-sm text-slate-900 tracking-tight">PO #2595</td>
                    <td className="px-6 py-4 text-sm text-slate-600">1,000 units</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium border border-green-100">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 w-1/3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                        <span className="text-xs font-medium text-slate-600 w-8">100%</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}