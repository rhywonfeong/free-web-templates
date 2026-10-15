import React from 'react';

export default function RouteCard({ route, onToggleLike }) {
  const { title, desc, stops, duration, listeners, bgGradient, isLiked } = route;

  return (
    <div className="min-w-[75%] sm:min-w-[60%] snap-center flex-col bg-white rounded-3xl p-3 shadow-sm shadow-gray-200/50 border border-gray-100 flex gap-3">
      <div className="w-full h-36 bg-gray-100 rounded-2xl relative overflow-hidden group">
        {/* Image Placeholder */}
        <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`}></div>
        
        <button 
          onClick={onToggleLike}
          className={`absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 z-10 transition-colors active:text-red-500 ${isLiked ? 'text-red-500' : 'text-gray-600'}`}
        >
          <iconify-icon 
            icon={isLiked ? "solar:heart-bold" : "solar:heart-linear"} 
            style={{ strokeWidth: "1.5" }} 
            className="text-sm"
          ></iconify-icon>
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-medium text-slate-800 flex items-center gap-1 z-10 border border-white/20">
          <iconify-icon icon="solar:headphones-linear" style={{ strokeWidth: "1.5" }}></iconify-icon> {listeners}
        </div>
      </div>
      <div className="px-1 pb-1">
        <h3 className="text-base font-medium tracking-tight text-slate-900">{title}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-1 font-light">{desc}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <iconify-icon icon="solar:routing-linear" style={{ strokeWidth: "1.5" }}></iconify-icon> {stops}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <iconify-icon icon="solar:history-linear" style={{ strokeWidth: "1.5" }}></iconify-icon> {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}