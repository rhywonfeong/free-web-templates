import React from 'react';

export default function Sidebar({ isCollapsed, setIsCollapsed, activeTab, setActiveTab }) {
  return (
    <aside className={`transition-all duration-300 ease-in-out border-r border-[#0b4a61] bg-[#062530] flex flex-col z-20 shrink-0 group ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Header / Logo */}
      <div className="h-16 flex items-center px-4 border-b border-[#0b4a61] justify-between overflow-hidden shrink-0">
        <span className={`font-semibold text-lg tracking-tight text-white transition-all duration-200 whitespace-nowrap overflow-hidden ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
          VNDR
        </span>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="cursor-pointer text-[#75d6f8] hover:text-white transition-colors flex shrink-0 p-1 rounded-md hover:bg-[#0b4a61] border-none bg-transparent"
        >
          <iconify-icon 
            icon="solar:double-alt-arrow-left-linear" 
            stroke-width="1.5" 
            class={`text-xl transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
          ></iconify-icon>
        </button>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex-1 p-3 space-y-1 overflow-hidden">
        <button 
          onClick={() => setActiveTab('orders')}
          className={`w-full flex items-center gap-3 px-2 py-2 rounded-md font-medium transition-colors relative group/nav cursor-pointer text-left ${activeTab === 'orders' ? 'text-white bg-[#0b4a61]' : 'text-[#a3e4fa] hover:bg-[#0b4a61]/50 hover:text-white'}`}
        >
          <iconify-icon icon="solar:box-linear" stroke-width="1.5" class="text-xl shrink-0"></iconify-icon>
          <span className={`transition-opacity duration-200 whitespace-nowrap overflow-hidden ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            Orders Board
          </span>
          {isCollapsed && (
            <div className="absolute left-14 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover/nav:opacity-100 transition-opacity z-50 whitespace-nowrap">
              Orders Board
            </div>
          )}
        </button>
        <button 
          onClick={() => setActiveTab('reports')}
          className={`w-full flex items-center gap-3 px-2 py-2 rounded-md font-medium transition-colors relative group/nav cursor-pointer text-left ${activeTab === 'reports' ? 'text-white bg-[#0b4a61]' : 'text-[#a3e4fa] hover:bg-[#0b4a61]/50 hover:text-white'}`}
        >
          <iconify-icon icon="solar:chart-square-linear" stroke-width="1.5" class="text-xl shrink-0"></iconify-icon>
          <span className={`transition-opacity duration-200 whitespace-nowrap overflow-hidden ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            Reports
          </span>
          {isCollapsed && (
            <div className="absolute left-14 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover/nav:opacity-100 transition-opacity z-50 whitespace-nowrap">
              Reports
            </div>
          )}
        </button>
      </nav>

      {/* Vendor Context */}
      <div className="p-3 border-t border-[#0b4a61] overflow-hidden shrink-0">
        <div className="flex items-center gap-3 px-1">
          <div className="w-8 h-8 rounded-full bg-[#0b4a61] border border-[#107091] flex items-center justify-center text-white font-semibold text-xs shrink-0 shadow-sm">
            S
          </div>
          <div className={`flex-col transition-opacity duration-200 whitespace-nowrap overflow-hidden ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            <div className="text-sm font-semibold text-white tracking-tight leading-tight">SULLAM</div>
            <div className="text-xs text-[#75d6f8]">Vendor ID</div>
          </div>
        </div>
      </div>
    </aside>
  );
}