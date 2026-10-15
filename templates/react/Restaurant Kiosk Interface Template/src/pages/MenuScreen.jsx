import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  { id: 1, name: 'Meals', icon: 'solar:hamburger-menu-bold-duotone' },
  { id: 2, name: 'Burgers', icon: 'solar:hamburger-bold-duotone' },
  { id: 3, name: 'Chicken', icon: 'solar:bone-bold-duotone' },
  { id: 4, name: 'Fries & Sides', icon: 'solar:cup-hot-bold-duotone' },
  { id: 5, name: 'Beverages', icon: 'solar:cup-paper-bold-duotone' },
  { id: 6, name: 'Desserts', icon: 'solar:ice-cream-bold-duotone' },
];

export default function MenuScreen() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="w-full h-full flex flex-col bg-[#F7F6F2] animate-in fade-in duration-300">
      {/* Top Navigation Bar */}
      <div className="h-20 bg-white shadow-sm flex items-center justify-between px-6 z-20">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-zinc-600 font-bold uppercase tracking-wider hover:text-black transition-colors py-4"
        >
          <iconify-icon icon="solar:alt-arrow-left-bold" className="text-xl"></iconify-icon>
          Cancel Order
        </button>
        <div className="text-[#FFBC0D] text-3xl">
          <iconify-icon icon="simple-icons:mcdonalds"></iconify-icon>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Categories */}
        <div className="w-28 md:w-36 bg-white border-r border-zinc-200 overflow-y-auto flex flex-col py-4 gap-2 no-scrollbar shadow-[4px_0_15px_rgba(0,0,0,0.03)] z-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center justify-center py-4 px-2 gap-2 transition-all ${
                activeCategory === cat.id 
                  ? 'bg-[#F7F6F2] border-l-4 border-[#DA291C] text-black' 
                  : 'text-zinc-500 hover:bg-zinc-50 border-l-4 border-transparent'
              }`}
            >
              <iconify-icon 
                icon={cat.icon} 
                className={`text-3xl ${activeCategory === cat.id ? 'text-[#DA291C]' : 'text-zinc-400'}`}
              ></iconify-icon>
              <span className={`text-[10px] md:text-xs font-bold text-center uppercase tracking-tight ${
                activeCategory === cat.id ? 'text-black' : 'text-zinc-500'
              }`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <h2 className="text-3xl font-black text-black tracking-tighter-kiosk mb-6">
            {CATEGORIES.find(c => c.id === activeCategory)?.name || 'Menu'}
          </h2>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Mock Item Cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-100 flex flex-col items-center gap-4 active:scale-95 transition-transform cursor-pointer"
              >
                <div className="w-full aspect-square bg-[#F7F6F2] rounded-xl flex items-center justify-center p-4">
                  <img 
                    src={item % 2 === 0 ? "https://i.imgur.com/W9iYquY.png" : "https://i.imgur.com/QCgiOkg.png"} 
                    alt="Menu Item" 
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
                <div className="text-center w-full">
                  <h3 className="font-bold text-zinc-900 leading-tight">Classic Meal {item}</h3>
                  <p className="text-sm font-semibold text-zinc-500 mt-1">$8.49</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Cart Bar */}
      <div className="h-24 bg-white border-t border-zinc-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] flex items-center justify-between px-6 md:px-8 z-20">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Total</span>
          <span className="text-2xl font-black text-black">$0.00</span>
        </div>
        <button className="bg-[#DA291C] hover:bg-[#C8102E] text-white px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg shadow-red-500/30 active:scale-95">
          Checkout
        </button>
      </div>
    </div>
  );
}