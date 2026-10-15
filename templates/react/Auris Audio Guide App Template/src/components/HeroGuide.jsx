import React from 'react';

export default function HeroGuide() {
  return (
    <section className="px-6 mt-4">
      <div className="relative bg-slate-900 rounded-3xl p-6 text-white overflow-hidden shadow-lg shadow-slate-900/10">
        {/* Abstract Background Graphic */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 flex flex-col h-44 justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-medium text-gray-100 mb-3 border border-white/10">
              <iconify-icon icon="solar:star-fall-linear" style={{ strokeWidth: "1.5" }}></iconify-icon> 每日推荐
            </span>
            <h2 className="text-2xl font-medium tracking-tight text-white">故宫博物院全景</h2>
            <p className="text-sm text-gray-300 mt-1.5 font-light">沉浸式历史人文深度讲解</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 flex items-center gap-2">
              <span className="flex items-center gap-1">
                <iconify-icon icon="solar:clock-circle-linear" style={{ strokeWidth: "1.5" }}></iconify-icon> 2.5 小时
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <iconify-icon icon="solar:map-point-linear" style={{ strokeWidth: "1.5" }}></iconify-icon> 18 个景点
              </span>
            </span>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl transition-transform active:scale-90">
              <iconify-icon icon="solar:play-linear" style={{ strokeWidth: "1.5" }} className="text-xl translate-x-0.5"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}