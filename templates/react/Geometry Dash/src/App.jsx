import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import GameView from './pages/GameView';
import CustomiseView from './pages/CustomiseView';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full bg-zinc-950 text-white relative overflow-hidden font-sans">
        {/* Animated Scrolling Background layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Seamless scrolling container - 200vw width to hold two images side-by-side */}
          <div className="absolute top-0 left-0 h-full w-[200vw] flex animate-scroll-bg">
            <div 
              className="w-[100vw] h-full bg-cover bg-center" 
              style={{ backgroundImage: `url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0400cdd2-8c47-4563-9cca-3f6300fbacd1_1600w.png')` }}
            />
            {/* Flipped duplicate to create a perfectly seamless repeating loop */}
            <div 
              className="w-[100vw] h-full bg-cover bg-center transform -scale-x-100" 
              style={{ backgroundImage: `url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0400cdd2-8c47-4563-9cca-3f6300fbacd1_1600w.png')` }}
            />
          </div>
          {/* Subtle darkening overlay for better game contrast and mood */}
          <div className="absolute inset-0 bg-zinc-950/40" />
        </div>
        
        {/* Route Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/play" element={<GameView />} />
            <Route path="/customise" element={<CustomiseView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;