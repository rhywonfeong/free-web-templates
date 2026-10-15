import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { AppStateProvider } from '../../context/AppStateContext';

export default function DashboardLayout() {
  return (
    <AppStateProvider>
      {/* 
        Premium futuristic shell: Deep dark background, crisp text, vibrant selection color 
      */}
      <div className="flex flex-col min-h-screen bg-[#050505] relative overflow-hidden font-sans text-slate-200 selection:bg-fuchsia-500/30">
        
        {/* Dynamic Animated Mesh Gradient Background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
          {/* Subtle grid pattern for a high-tech vibe */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          {/* Drifting glowing neon orbs */}
          <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-violet-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
          
          {/* Extra intense glassmorphism overlay to smooth everything into a sleek background */}
          <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[80px]"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-1 overflow-x-hidden p-6 lg:p-8 max-w-[1600px] w-full mx-auto animate-[fadeIn_0.4s_ease-out]">
            <Outlet />
          </main>
        </div>
        
      </div>
    </AppStateProvider>
  );
}