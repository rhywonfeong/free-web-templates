import React from 'react';

export default function OrdersBoard({ onOpenModal, onTriggerToast }) {
  return (
    <main className="flex flex-1 flex-col min-w-0 bg-neutral-100 overflow-hidden relative">
      <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">Purchase Orders</h1>
          <div className="h-4 w-px bg-zinc-200"></div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <iconify-icon icon="solar:refresh-circle-linear" stroke-width="1.5" class="text-base animate-[spin_4s_linear_infinite] text-[#1ABAF2]"></iconify-icon>
            Live Data
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Order</label>
          <div className="relative group">
            <select className="appearance-none bg-neutral-50 border border-zinc-200 text-slate-800 text-sm font-medium rounded-md pl-3 pr-9 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1ABAF2]/20 focus:border-[#1ABAF2] transition-colors cursor-pointer min-w-[140px] shadow-sm" defaultValue="2593">
              <option value="2593">PO #2593</option>
              <option value="2594">PO #2594</option>
              <option value="2595">PO #2595</option>
            </select>
            <iconify-icon icon="solar:alt-arrow-down-linear" stroke-width="1.5" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-transform group-hover:translate-y-px"></iconify-icon>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6 scroll-smooth">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-zinc-200 bg-white flex justify-between items-center">
              <div>
                <h2 className="text-base font-semibold tracking-tight text-slate-900">Order Items & Production Stages</h2>
                <p className="text-xs text-slate-500 mt-1">Tracking SKUs for Purchase Order 2593</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-500 mb-1">Overall Progress</span>
                  <div className="w-32 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1ABAF2] rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="h-8 w-px bg-zinc-200"></div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e8f8fe] text-[#1595c2] text-xs font-medium border border-[#d1f1fd]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1ABAF2] animate-pulse"></span>
                  In Production
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-neutral-50/50 border-b border-zinc-200">
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Item Details</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Specs (L×W)</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Stage</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Update Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {/* Item Row 1 */}
                  <tr className="hover:bg-neutral-50 transition-colors group">
                    <td className="px-6 py-4">
                      <button onClick={onOpenModal} className="flex items-center gap-4 cursor-pointer group/item text-left bg-transparent border-none p-0">
                        <div className="w-12 h-12 rounded-lg bg-neutral-50 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-slate-400 group-hover/item:border-[#47c8f5] group-hover/item:text-[#1ABAF2] group-hover/item:bg-[#e8f8fe] transition-colors shrink-0">
                          <iconify-icon icon="solar:gallery-linear" stroke-width="1.5" class="text-xl"></iconify-icon>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-900 tracking-tight group-hover/item:text-[#1595c2] transition-colors flex items-center gap-1.5">
                            0259600100
                            <iconify-icon icon="solar:maximize-square-minimalistic-linear" stroke-width="1.5" class="text-[#1ABAF2] opacity-0 group-hover/item:opacity-100 transition-opacity text-xs"></iconify-icon>
                          </span>
                          <span className="text-xs text-slate-500 mt-0.5">TESTSPECIAITEM</span>
                        </div>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-slate-600">
                        <iconify-icon icon="solar:ruler-linear" stroke-width="1.5" class="text-slate-400"></iconify-icon>
                        120 × 80
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-neutral-100 text-slate-600 text-xs font-medium border border-zinc-200">
                          Cutting
                        </span>
                        <span className="text-xs text-slate-400">20%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <div className="relative">
                          <select className="appearance-none bg-white border border-zinc-200 text-slate-700 text-sm rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1ABAF2]/20 focus:border-[#1ABAF2] transition-colors cursor-pointer w-36 shadow-sm hover:border-zinc-300" defaultValue="">
                            <option value="" disabled>Select Stage...</option>
                            <option value="WASHING">Washing</option>
                            <option value="STITCHING">Stitching</option>
                            <option value="PACKING">Packing</option>
                          </select>
                          <iconify-icon icon="solar:alt-arrow-down-linear" stroke-width="1.5" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></iconify-icon>
                        </div>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-200 bg-white text-slate-500 hover:text-[#1595c2] hover:border-[#a3e4fa] hover:bg-[#e8f8fe] transition-all shadow-sm" title="Upload Proof Image">
                          <iconify-icon icon="solar:camera-add-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                        </button>
                        <button onClick={onTriggerToast} className="cursor-pointer px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-md shadow-sm transition-colors flex items-center gap-1.5">
                          <iconify-icon icon="solar:check-circle-linear" stroke-width="1.5"></iconify-icon>
                          Update
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Item Row 2 */}
                  <tr className="hover:bg-neutral-50 transition-colors group">
                    <td className="px-6 py-4">
                      <button onClick={onOpenModal} className="flex items-center gap-4 cursor-pointer group/item text-left bg-transparent border-none p-0">
                        <div className="w-12 h-12 rounded-lg bg-neutral-50 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-slate-400 group-hover/item:border-[#47c8f5] group-hover/item:text-[#1ABAF2] group-hover/item:bg-[#e8f8fe] transition-colors shrink-0">
                          <iconify-icon icon="solar:gallery-linear" stroke-width="1.5" class="text-xl"></iconify-icon>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-900 tracking-tight group-hover/item:text-[#1595c2] transition-colors flex items-center gap-1.5">
                            0259600101
                            <iconify-icon icon="solar:maximize-square-minimalistic-linear" stroke-width="1.5" class="text-[#1ABAF2] opacity-0 group-hover/item:opacity-100 transition-opacity text-xs"></iconify-icon>
                          </span>
                          <span className="text-xs text-slate-500 mt-0.5">TESTSPECIAITEM</span>
                        </div>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-slate-600">
                        <iconify-icon icon="solar:ruler-linear" stroke-width="1.5" class="text-slate-400"></iconify-icon>
                        120 × 80
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#e8f8fe] text-[#1595c2] text-xs font-medium border border-[#d1f1fd]">
                          Washing
                        </span>
                        <span className="text-xs text-slate-400">45%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <div className="relative">
                          <select className="appearance-none bg-white border border-zinc-200 text-slate-700 text-sm rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1ABAF2]/20 focus:border-[#1ABAF2] transition-colors cursor-pointer w-36 shadow-sm hover:border-zinc-300" defaultValue="">
                            <option value="" disabled>Select Stage...</option>
                            <option value="STITCHING">Stitching</option>
                            <option value="PACKING">Packing</option>
                          </select>
                          <iconify-icon icon="solar:alt-arrow-down-linear" stroke-width="1.5" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></iconify-icon>
                        </div>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-200 bg-white text-slate-500 hover:text-[#1595c2] hover:border-[#a3e4fa] hover:bg-[#e8f8fe] transition-all shadow-sm" title="Upload Proof Image">
                          <iconify-icon icon="solar:camera-add-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                        </button>
                        <button onClick={onTriggerToast} className="cursor-pointer px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-md shadow-sm transition-colors flex items-center gap-1.5">
                          <iconify-icon icon="solar:check-circle-linear" stroke-width="1.5"></iconify-icon>
                          Update
                        </button>
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