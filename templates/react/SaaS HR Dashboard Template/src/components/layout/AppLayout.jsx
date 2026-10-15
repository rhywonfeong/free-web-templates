import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-ambient flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      {/* Main App Container */}
      <div className="w-full max-w-[1400px] h-[90vh] min-h-[800px] bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-white/60 flex overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#fafafa]/50">
          <Topbar />
          
          {/* Scrollable Page Content */}
          <main className="flex-1 overflow-y-auto px-8 pb-8 pt-4">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
        
      </div>
    </div>
  );
}