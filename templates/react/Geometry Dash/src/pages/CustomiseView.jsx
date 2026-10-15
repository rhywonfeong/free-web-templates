import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const colors = [
  { name: 'Default', value: '' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Orange', value: '#f97316' },
  { name: 'White', value: '#ffffff' },
  { name: 'Black', value: '#18181b' }
];

const CustomiseView = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('gd_cube_color') || '';
    setSelectedColor(saved);
  }, []);

  const handleSelect = (colorValue) => {
    setSelectedColor(colorValue);
    localStorage.setItem('gd_cube_color', colorValue);
  };

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-md z-20">
      <div className="absolute top-0 left-0 w-full p-6 flex justify-start items-start z-30">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center justify-center p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-700/50 backdrop-blur-sm shadow-lg"
        >
          <iconify-icon icon="solar:arrow-left-bold" width="24"></iconify-icon>
        </button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col items-center max-w-2xl w-full mx-4 relative z-20 animate-[slideUp_0.4s_ease-out]">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight drop-shadow-lg text-center uppercase transform -skew-x-6">
          Customise Cube
        </h2>

        {/* Preview Cube */}
        <div className="mb-12 relative w-32 h-32 flex items-center justify-center bg-zinc-950 rounded-2xl border-4 border-zinc-800 shadow-inner">
          <div 
            className="w-16 h-16 relative transition-colors duration-300"
            style={{ 
              backgroundColor: selectedColor || '#06b6d4',
              boxShadow: selectedColor ? `0 0 20px ${selectedColor}80` : '0 0 20px #06b6d480'
            }}
          >
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-8 h-8 bg-zinc-900/40"></div>
             </div>
             {/* Preview sprite over top with blend mode to show the tinting effect */}
             <div className="absolute inset-0 w-full h-full bg-cover" style={{
               backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a107c71-96be-45a0-a80f-f560ee3cbc40_320w.webp')",
               mixBlendMode: 'overlay',
               opacity: 0.8
             }}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleSelect(color.value)}
              className={`group flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 border-2 ${
                selectedColor === color.value 
                  ? 'bg-zinc-800 border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                  : 'bg-zinc-950 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 hover:scale-105'
              }`}
            >
              <div 
                className="w-10 h-10 rounded-lg mb-2 shadow-inner border border-white/10 group-hover:shadow-lg transition-shadow"
                style={{ backgroundColor: color.value || '#06b6d4' }}
              />
              <span className={`text-xs font-semibold uppercase tracking-wider text-center transition-colors ${
                selectedColor === color.value ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
              }`}>
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
};

export default CustomiseView;