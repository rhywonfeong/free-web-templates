import React from 'react';

export default function PackageItem({ item }) {
  const { title, desc, count, bgColor } = item;

  return (
    <div className="flex items-center p-3 bg-white rounded-2xl shadow-sm shadow-gray-200/40 border border-gray-100 gap-4 transition-transform active:scale-[0.98] cursor-pointer">
      <div className="w-20 h-20 bg-gray-100 rounded-xl flex-shrink-0 relative overflow-hidden">
        <div className={`absolute inset-0 ${bgColor}`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/40 shadow-sm">
            <iconify-icon icon="solar:play-linear" style={{ strokeWidth: "1.5" }} className="text-sm translate-x-0.5"></iconify-icon>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0 py-1">
        <h4 className="text-sm font-medium text-slate-900 truncate tracking-tight">{title}</h4>
        <p className="text-xs text-gray-500 mt-1 truncate font-light">{desc}</p>
        <div className="flex items-center justify-between mt-2.5">
          <span className="text-[10px] font-medium text-slate-700 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
            {count}
          </span>
          <button className="text-gray-400 hover:text-slate-800 transition-colors p-1" onClick={(e) => e.stopPropagation()}>
            <iconify-icon icon="solar:menu-dots-linear" style={{ strokeWidth: "1.5" }}></iconify-icon>
          </button>
        </div>
      </div>
    </div>
  );
}