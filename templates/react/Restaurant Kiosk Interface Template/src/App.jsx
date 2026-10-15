import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import StartScreen from './pages/StartScreen';
import MenuScreen from './pages/MenuScreen';

export default function App() {
  const location = useLocation();

  return didMount => (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-900 p-0 md:p-8">
      {/* 
        Kiosk Hardware Wrapper
        This constraints the app to a portrait aspect ratio on desktop to simulate the kiosk hardware.
        On mobile, it fills the screen.
      */}
      <div className="w-full h-[100dvh] md:h-[90vh] md:max-h-[1080px] md:max-w-[600px] bg-white relative overflow-hidden md:rounded-3xl md:shadow-[0_0_50px_rgba(0,0,0,0.5)] md:border-[12px] border-zinc-800 flex flex-col">
        
        {/* Hardware glare simulation (desktop only) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none z-50 rounded-2xl" />

        <div className="flex-1 relative w-full h-full overflow-hidden bg-[#F7F6F2]">
          <Routes location={location}>
            <Route path="/" element={<StartScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
          </Routes>
        </div>
        
        {/* Simulated Kiosk Hardware Bezel details */}
        <div className="hidden md:flex h-12 bg-zinc-800 items-center justify-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
          <div className="w-16 h-1 bg-zinc-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}