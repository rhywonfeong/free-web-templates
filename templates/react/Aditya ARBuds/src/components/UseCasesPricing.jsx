import React from 'react';

const UseCasesPricing = () => {
  return (
    <section className="py-24 bg-slate-950/50 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h3 className="text-lg text-slate-400 uppercase tracking-widest mb-2 font-medium">Built For</h3>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">EVERY MOMENT</h2>
        </div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {/* Card 1 */}
          <div className="group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 to-slate-950/90 z-10"></div>
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
              <iconify-icon icon="lucide:dumbbell" width="32" height="32" className="text-cyan-400 mb-4"></iconify-icon>
              <h4 className="text-2xl font-medium tracking-tight text-white mb-2 uppercase drop-shadow-md">Workout</h4>
              <p className="text-base text-slate-300 drop-shadow-sm">Stay Fit. Stay Motivated.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-blue-500/50 transition-all duration-500">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 to-slate-950/90 z-10"></div>
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
              <iconify-icon icon="lucide:plane" width="32" height="32" className="text-blue-400 mb-4"></iconify-icon>
              <h4 className="text-2xl font-medium tracking-tight text-white mb-2 uppercase drop-shadow-md">On The Go</h4>
              <p className="text-base text-slate-300 drop-shadow-sm">Music &amp; Calls Anywhere.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a1a2f4fbdb7b?w=800&q=80')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 to-slate-950/90 z-10"></div>
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
              <iconify-icon icon="lucide:ear-off" width="32" height="32" className="text-cyan-400 mb-4"></iconify-icon>
              <h4 className="text-2xl font-medium tracking-tight text-white mb-2 uppercase drop-shadow-md">Zero Distractions</h4>
              <p className="text-base text-slate-300 drop-shadow-sm">Pure Sound. Pure Focus.</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">VIBE</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          
          {/* Basic Plan */}
          <div className="w-full md:w-1/2 rounded-3xl border border-white/10 bg-white/5 p-10 flex flex-col items-center text-center hover:bg-white/[0.07] transition-colors">
            <h3 className="text-2xl font-medium tracking-tight text-white mb-2">BASIC</h3>
            <p className="text-base text-slate-400 mb-6">Great Sound. Great Value.</p>
            <div className="flex items-start justify-center gap-1 mb-8">
              <span className="text-2xl text-cyan-500 mt-2 font-medium">₹</span>
              <span className="text-6xl font-semibold tracking-tight text-white">999</span>
            </div>
            
            <ul className="space-y-4 text-base text-slate-300 w-full mb-10">
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-500"></iconify-icon> Dolby Sound</li>
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-500"></iconify-icon> Deep Bass</li>
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-500"></iconify-icon> Up to 18H Battery</li>
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-500"></iconify-icon> Touch Control</li>
            </ul>
            
            <button className="w-full py-4 rounded-full border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-colors text-base">
              ORDER NOW
            </button>
          </div>

          {/* Pro Plan */}
          <div className="w-full md:w-1/2 rounded-3xl border border-cyan-500 bg-slate-900 p-10 flex flex-col items-center text-center relative shadow-[0_0_40px_rgba(6,182,212,0.15)] transform md:-translate-y-4">
            <div className="absolute -top-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Best Choice
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-white mb-2">PRO</h3>
            <p className="text-base text-cyan-200 mb-6">Ultimate Experience.</p>
            <div className="flex items-start justify-center gap-1 mb-8">
              <span className="text-2xl text-cyan-500 mt-2 font-medium">₹</span>
              <span className="text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">1,499</span>
            </div>
            
            <ul className="space-y-4 text-base text-slate-200 w-full mb-10">
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-400"></iconify-icon> Dolby Sound</li>
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-400"></iconify-icon> Deep Bass</li>
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-400"></iconify-icon> Up to 24H Battery</li>
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-400"></iconify-icon> HD Calling</li>
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-400"></iconify-icon> Voice Assistant</li>
              <li className="flex items-center justify-center gap-3"><iconify-icon icon="lucide:check" width="20" height="20" className="text-cyan-400"></iconify-icon> Game Mode (Low Latency)</li>
            </ul>
            
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] text-base">
              ORDER NOW
            </button>
          </div>

        </div>

        {/* Color Options */}
        <div className="mt-16 flex items-center justify-center gap-4 text-base text-slate-400">
          <span>AVAILABLE IN</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-6 h-6 rounded-full border-2 border-white bg-black group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
              <span className="text-sm">BLACK</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-6 h-6 rounded-full bg-white group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <span className="text-sm text-slate-300 group-hover:text-white">WHITE</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-6 h-6 rounded-full border border-blue-500/50 bg-blue-600 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <span className="text-sm text-slate-300 group-hover:text-white">BLUE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesPricing;