import React from 'react';

const Specs = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-medium tracking-tight text-cyan-400 mb-10 uppercase text-center md:text-left">Specifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-base md:text-lg">
        {/* Left Col */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 border-b border-white/5 pb-4">
            <span className="text-slate-500">Model</span>
            <span className="text-slate-200">AR Buds Pro</span>
          </div>
          <div className="grid grid-cols-2 border-b border-white/5 pb-4">
            <span className="text-slate-500">Bluetooth Version</span>
            <span className="text-slate-200">5.3</span>
          </div>
          <div className="grid grid-cols-2 border-b border-white/5 pb-4">
            <span className="text-slate-500">Playback Time</span>
            <span className="text-slate-200">6H (Earbuds) / 24H (With Case)</span>
          </div>
          <div className="grid grid-cols-2 border-b border-white/5 pb-4">
            <span className="text-slate-500">Charging Time</span>
            <span className="text-slate-200">1.5H</span>
          </div>
          <div className="grid grid-cols-2 pb-4">
            <span className="text-slate-500">Battery Capacity</span>
            <span className="text-slate-200">Earbuds: 35mAh<br />Case: 300mAh</span>
          </div>
        </div>
        
        {/* Right Col */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 border-b border-white/5 pb-4">
            <span className="text-slate-500">Driver Size</span>
            <span className="text-slate-200">13mm Dynamic</span>
          </div>
          <div className="grid grid-cols-2 border-b border-white/5 pb-4">
            <span className="text-slate-500">Calling</span>
            <span className="text-slate-200">HD Microphone</span>
          </div>
          <div className="grid grid-cols-2 border-b border-white/5 pb-4">
            <span className="text-slate-500">Water Resistance</span>
            <span className="text-slate-200">IPX4</span>
          </div>
          <div className="grid grid-cols-2 border-b border-white/5 pb-4">
            <span className="text-slate-500">Compatibility</span>
            <span className="text-slate-200">Android, iOS, Windows</span>
          </div>
          <div className="grid grid-cols-2 pb-4">
            <span className="text-slate-500">Charging Port</span>
            <span className="text-slate-200">Type-C</span>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-base text-slate-500 uppercase tracking-[0.2em] mb-2">Sound That Inspires</p>
        <p className="text-4xl font-light italic text-cyan-400 font-serif">Every Moment</p>
      </div>
    </section>
  );
};

export default Specs;