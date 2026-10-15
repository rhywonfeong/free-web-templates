import React from 'react';

const BigSound = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-slate-400 tracking-tight font-medium mb-2">SMALL SIZE</h3>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              BIG SOUND
            </h2>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
            AR Buds Pro is designed to deliver powerful audio, all-day comfort and smart features that keep up with your lifestyle.
          </p>
          <div className="pt-8 space-y-2">
            <h4 className="text-xl font-medium tracking-tight text-white mb-6 uppercase">Top Features</h4>
            <div className="grid gap-8">
              {/* Feature Item */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                  <iconify-icon icon="lucide:volume-2" width="28" height="28" className="text-cyan-400"></iconify-icon>
                </div>
                <div>
                  <h5 className="text-xl font-medium text-white mb-2 tracking-tight">Dolby Sound</h5>
                  <p className="text-lg text-slate-400 leading-relaxed">Crystal clear audio with immersive stereo experience.</p>
                </div>
              </div>
              {/* Feature Item */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                  <iconify-icon icon="lucide:activity" width="28" height="28" className="text-cyan-400"></iconify-icon>
                </div>
                <div>
                  <h5 className="text-xl font-medium text-white mb-2 tracking-tight">Deep Bass</h5>
                  <p className="text-lg text-slate-400 leading-relaxed">Feel every beat with enhanced bass technology.</p>
                </div>
              </div>
              {/* Feature Item */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                  <iconify-icon icon="lucide:battery-charging" width="28" height="28" className="text-cyan-400"></iconify-icon>
                </div>
                <div>
                  <h5 className="text-xl font-medium text-white mb-2 tracking-tight">24H Battery</h5>
                  <p className="text-lg text-slate-400 leading-relaxed">Up to 6H playback on a single charge &amp; 24H with charging case.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:pt-32">
          <div className="grid gap-8">
            {/* Feature Item */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                <iconify-icon icon="lucide:pointer" width="28" height="28" className="text-blue-400"></iconify-icon>
              </div>
              <div>
                <h5 className="text-xl font-medium text-white mb-2 tracking-tight">Touch Control</h5>
                <p className="text-lg text-slate-400 leading-relaxed">Play, pause, call &amp; access voice assistant with a simple touch.</p>
              </div>
            </div>
            {/* Feature Item */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                <iconify-icon icon="lucide:link" width="28" height="28" className="text-blue-400"></iconify-icon>
              </div>
              <div>
                <h5 className="text-xl font-medium text-white mb-2 tracking-tight">Auto Connect</h5>
                <p className="text-lg text-slate-400 leading-relaxed">Seamless pairing with your devices as soon as you open the case.</p>
              </div>
            </div>
            {/* Feature Item */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                <iconify-icon icon="lucide:droplet" width="28" height="28" className="text-blue-400"></iconify-icon>
              </div>
              <div>
                <h5 className="text-xl font-medium text-white mb-2 tracking-tight">Sweat &amp; Splash Resistant (IPX4)</h5>
                <p className="text-lg text-slate-400 leading-relaxed">Built for workouts and all-weather use.</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl border border-blue-500/20 mt-12 relative overflow-hidden min-h-[300px] flex items-end group shadow-[0_0_40px_rgba(34,211,238,0.1)]">
            <div className="absolute inset-0 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800&q=80" 
                alt="Immersive sound lifestyle" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom_right,white,transparent)] z-10"></div>
            
            <div className="relative z-20 p-8 w-full">
              <h3 className="text-2xl font-medium tracking-tight text-blue-400 uppercase">
                Be Free.<br /><span className="text-white">Stay in the moment.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigSound;