import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Overview', icon: 'solar:pie-chart-2-linear' },
  { path: '/employees', label: 'Employees', icon: 'solar:users-group-two-rounded-linear' },
  { path: '/calendar', label: 'Time & Leave', icon: 'solar:calendar-linear' },
  { path: '/reports', label: 'Reports', icon: 'solar:document-text-linear' },
  { path: '/settings', label: 'Settings', icon: 'solar:settings-linear' },
];

export default function Sidebar() {
  return (
    <aside className="w-[240px] border-r border-gray-100 flex flex-col bg-white/50 backdrop-blur-sm z-10 shrink-0">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#c5f82a] rounded-xl flex items-center justify-center shadow-sm">
            <iconify-icon icon="solar:leaf-bold" class="text-[#111] text-lg"></iconify-icon>
          </div>
          <span className="font-semibold text-[17px] tracking-tight text-[#111]">NexusHR</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200 text-sm font-medium ${
                isActive
                  ? 'bg-[#111] text-white shadow-md'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <iconify-icon 
                  icon={isActive ? item.icon.replace('-linear', '-bold') : item.icon} 
                  class="text-[20px]"
                ></iconify-icon>
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Profile Bottom */}
      <div className="p-6">
        <div className="flex items-center gap-3 bg-gray-50/80 border border-gray-100 rounded-2xl p-3 cursor-pointer hover:bg-gray-100 transition-colors">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Sarah Jenkins</p>
            <p className="text-xs text-gray-500 truncate">HR Director</p>
          </div>
          <iconify-icon icon="solar:alt-arrow-right-linear" class="text-gray-400"></iconify-icon>
        </div>
      </div>
    </aside>
  );
}