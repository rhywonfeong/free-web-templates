import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen w-full bg-[#0a0a0a] text-[#fafafa] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} />
      
      <main className="relative flex-1 flex flex-col h-screen overflow-hidden bg-[#0a0a0a] md:m-2 md:ml-0 md:rounded-xl md:shadow-sm md:border md:border-white/10 transition-all duration-300">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </main>
    </div>
  );
}