import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(err => console.warn('Audio play prevented:', err));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl px-6">
      <audio 
        ref={audioRef}
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/e4e45bfb-4be1-45df-8c5c-1f0b210f8a57/54021c7a-9a8f-4530-a9c4-29b73d6603e5-geometry-dash-menu-theme_xkGGC9M.mp3?v=1775138244980"
        loop
        preload="auto"
      />

      <div className="mb-12 text-center animate-[pulse_4s_ease-in-out_infinite]">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] transform -skew-x-6">
          GEOMETRY
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mt-2 transform -skew-x-6">
          DASH
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <button 
          onClick={() => navigate('/play')}
          className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-10 py-5 rounded-2xl text-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] active:scale-95 border-b-4 border-green-800 hover:border-green-700"
        >
          <iconify-icon icon="solar:play-bold" width="32" height="32" className="group-hover:animate-bounce"></iconify-icon>
          PLAY
        </button>

        <button 
          className="group flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-8 py-5 rounded-2xl text-xl font-medium transition-all duration-300 hover:scale-105 border-b-4 border-zinc-900 active:scale-95"
          onClick={() => navigate('/customise')}
        >
          <iconify-icon icon="solar:palette-bold-duotone" width="28" height="28" className="group-hover:rotate-12 transition-transform duration-500"></iconify-icon>
        </button>
        
        <button 
          className="group flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-8 py-5 rounded-2xl text-xl font-medium transition-all duration-300 hover:scale-105 border-b-4 border-zinc-900 active:scale-95"
          onClick={() => navigate('/editor')}
        >
          <iconify-icon icon="solar:ruler-pen-bold" width="28" height="28" className="group-hover:-rotate-12 transition-transform duration-500"></iconify-icon>
        </button>

        <button 
          className="group flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-8 py-5 rounded-2xl text-xl font-medium transition-all duration-300 hover:scale-105 border-b-4 border-zinc-900 active:scale-95"
          onClick={() => alert("Settings coming soon!")}
        >
          <iconify-icon icon="solar:settings-bold-duotone" width="28" height="28" className="group-hover:rotate-90 transition-transform duration-500"></iconify-icon>
        </button>
      </div>

      <div className="mt-20 flex gap-4 text-zinc-500 text-sm font-medium">
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:keyboard-bold-duotone" width="20"></iconify-icon>
          <span>Space / Click to Jump (Hold to Fly in Ship Mode)</span>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;