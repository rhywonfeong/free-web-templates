import React from 'react';

export default function ItemModal({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"></div>
      
      {/* Modal Content */}
      <div className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 flex flex-col transition-transform duration-300 border border-zinc-200 overflow-hidden ${isOpen ? 'scale-100' : 'scale-95'}`}>
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-white">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">Item Specifications</h3>
          <button onClick={onClose} className="cursor-pointer text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-md hover:bg-neutral-100 flex items-center justify-center bg-transparent border-none">
            <iconify-icon icon="solar:close-circle-linear" stroke-width="1.5" class="text-xl"></iconify-icon>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {/* Main Identify Section */}
          <div className="flex gap-5 mb-6">
            <div className="w-20 h-20 rounded-xl bg-neutral-50 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-slate-400 shrink-0">
              <iconify-icon icon="solar:gallery-linear" stroke-width="1.5" class="text-3xl"></iconify-icon>
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="text-xl font-semibold tracking-tight text-slate-900">0259600100</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#e8f8fe] text-[#1595c2] border border-[#d1f1fd]">PO #2593</span>
              </div>
              <span className="text-sm text-slate-500">TESTSPECIAITEM - Premium Grade</span>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 bg-neutral-50 rounded-xl p-5 border border-zinc-100 mb-6">
            <div>
              <span className="block text-xs font-medium text-slate-500 mb-1">Dimensions (L×W)</span>
              <span className="block text-sm font-semibold text-slate-900">120cm × 80cm</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500 mb-1">Target Quantity</span>
              <span className="block text-sm font-semibold text-slate-900">2,500 units</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500 mb-1">Material</span>
              <span className="block text-sm font-semibold text-slate-900">Cotton Canvas Blend</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500 mb-1">Color Code</span>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-900"></span>
                <span className="text-sm font-semibold text-slate-900">Navy (#1A2B4C)</span>
              </div>
            </div>
          </div>

          {/* Production Status */}
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Current Status</h4>
          <div className="border border-zinc-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1ABAF2] animate-pulse"></span>
                <span className="text-sm font-medium text-slate-900">In Production: Cutting Stage</span>
              </div>
              <span className="text-sm font-semibold text-[#1595c2]">20% Complete</span>
            </div>
            <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-[#1ABAF2] rounded-full transition-all duration-500" style={{ width: '20%' }}></div>
            </div>
            <p className="text-xs text-slate-500">Last updated: Today, 10:45 AM by Vendor Admin</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-zinc-100 flex items-center justify-end gap-3 rounded-b-2xl">
          <button onClick={onClose} className="cursor-pointer px-4 py-2 bg-white border border-zinc-200 text-slate-700 hover:bg-neutral-50 text-sm font-medium rounded-lg shadow-sm transition-colors">
            Close
          </button>
          <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2 border-none">
            <iconify-icon icon="solar:document-text-linear" stroke-width="1.5"></iconify-icon>
            Download Tech Pack
          </button>
        </div>
      </div>
    </div>
  );
}