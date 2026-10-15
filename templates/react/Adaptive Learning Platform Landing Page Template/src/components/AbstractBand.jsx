import React from 'react';

const AbstractBand = () => {
  return (
    <div className="w-full h-[40vh] min-h-[400px] relative overflow-hidden my-12 bg-slate-200">
      <img 
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4f30c45-086f-4272-8f93-7dc22eb0bca2_3840w.png" 
        alt="Modern library architecture" 
        className="w-full h-full object-cover"
      />
      {/* Overlay to ensure brand colors mix nicely if the image isn't perfectly green/white */}
      <div className="absolute inset-0 bg-emerald-950/70 mix-blend-overlay"></div>
      
      {/* Decorative label */}
      <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-black/40 backdrop-blur-md p-2 pr-4 rounded-full border border-white/10 shadow-xl">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a233185-9035-403f-acf4-9bb4cc7b9c3d_320w.png" 
          alt="Library visual" 
          className="w-8 h-8 rounded-full object-cover border border-white/20"
        />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></div>
          <span className="text-white text-[10px] font-bold tracking-widest uppercase drop-shadow-md">Campus Online</span>
        </div>
      </div>
    </div>
  );
};

export default AbstractBand;