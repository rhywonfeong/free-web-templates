import { Outlet, NavLink, useLocation } from 'react-router-dom';
import AIAssistant from '../UI/AIAssistant';
import clsx from 'clsx';

const navItems = [
  { name: 'Dashboard', path: '/app/dashboard', icon: 'solar:widget-5-linear' },
  { name: 'Projects', path: '/app/projects', icon: 'solar:folder-with-files-linear' },
  { name: 'Engineers', path: '/app/engineers', icon: 'solar:users-group-rounded-linear' },
  { name: 'Financial', path: '/app/financial', icon: 'solar:wallet-money-linear' },
];

export default function AppLayout({ onLogout }) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#F4F6F8] overflow-hidden">
      {/* Compact Sidebar Navigation */}
      <aside className="w-20 md:w-64 bg-white border-r border-black/5 flex flex-col justify-between shrink-0 transition-all duration-300 z-10">
        <div>
          <div className="h-20 flex items-center justify-center md:justify-start md:px-6 border-b border-black/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#252729] rounded-lg flex items-center justify-center text-[#8FFF00] font-bold text-lg">
                S
              </div>
              <span className="font-bold text-[#303030] tracking-tight hidden md:block">Forgee SCP</span>
            </div>
          </div>
          
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname.includes(item.path);
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={clsx(
                    "flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group relative",
                    isActive 
                      ? "bg-[#F4F6F8] text-[#303030] font-semibold" 
                      : "text-[#8C9BAA] hover:bg-black/5 hover:text-[#303030]"
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#8FFF00] rounded-r-full" />
                  )}
                  <iconify-icon 
                    icon={item.icon} 
                    style={{ fontSize: '24px' }}
                    className={isActive ? "text-[#303030]" : ""}
                  ></iconify-icon>
                  <span className="hidden md:block text-sm">{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-black/5">
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center md:justify-start gap-4 px-3 py-3 text-[#8C9BAA] hover:text-[#EF4444] hover:bg-red-50 rounded-xl transition-all duration-200"
          >
            <iconify-icon icon="solar:logout-2-linear" style={{ fontSize: '24px' }}></iconify-icon>
            <span className="hidden md:block text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col h-screen overflow-hidden">
        {/* Top Header Strip */}
        <header className="h-20 bg-white/50 backdrop-blur-md border-b border-black/5 flex items-center justify-between px-8 shrink-0 z-10">
          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-black/5 shadow-sm text-sm">
                <span className="w-2 h-2 rounded-full bg-[#8FFF00]"></span>
                <span className="font-medium text-[#303030]">System Sync Active</span>
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-[#303030] hover:scale-105 transition-transform relative">
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white"></span>
              <iconify-icon icon="solar:bell-linear" style={{ fontSize: '20px' }}></iconify-icon>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-black/10">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-[#303030]">Carlos Silva</p>
                <p className="text-xs text-[#8C9BAA]">Gestor Geral</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E8EDF2] border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-auto relative">
          <Outlet />
        </div>
        
        <AIAssistant />
      </main>
    </div>
  );
}