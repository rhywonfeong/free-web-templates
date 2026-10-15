import React from 'react';

export default function BottomNav({ activeTab, onTabChange }) {
  const navItems = [
    { id: 'home', icon: 'solar:home-smile-linear', label: '首页' },
    { id: 'itinerary', icon: 'solar:map-arrow-up-linear', label: '行程' },
    { id: 'saved', icon: 'solar:bookmark-linear', label: '收藏' },
    { id: 'profile', icon: 'solar:user-circle-linear', label: '我的' },
  ];

  return (
    <nav className="absolute bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-100 pt-3 pb-8 px-8 z-50 rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
      <ul className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <li 
              key={item.id} 
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => onTabChange(item.id)}
            >
              <div className={isActive ? 'text-slate-900' : 'text-gray-400 hover:text-slate-600 transition-colors'}>
                <iconify-icon icon={item.icon} style={{ strokeWidth: "1.5" }} className="text-2xl"></iconify-icon>
              </div>
              <span className={`text-[10px] font-medium tracking-tight ${isActive ? 'text-slate-900' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}