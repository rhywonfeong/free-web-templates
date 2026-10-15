import React from 'react';
import clsx from 'clsx';

const clients = [
  {
    name: 'O2',
    src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fe97848-60b5-438f-9b74-e50b096e336a_320w.png',
    needsInvert: false // Black logo on white background
  },
  {
    name: 'Deutsche Telekom',
    src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cbfead33-3f77-4d21-ac2c-7973100aaea3_320w.png',
    needsInvert: false // White logo on black background
  },
  {
    name: 'Orange',
    src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/665745f8-eb00-4dbc-9aad-9e72f9158297_320w.png',
    needsInvert: false // White logo on gray background
  },
  {
    name: 'Vodafone',
    src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8580ca5f-f0b5-4cbe-b7fe-dcefa09649d2_320w.png',
    needsInvert: false // White outline on transparent background
  },
  {
    name: 'Vinci',
    src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/9065f8f0-5eab-4add-b16d-868e1a3343bb/f3a17da7-0f2d-4ff0-94b1-3394e370c933-vinci_logo_w.png?v=1778421671705',
    needsInvert: false // White logo on transparent
  },
  {
    name: 'ABEL Mobilfunk',
    src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/009a44d0-198f-409e-95bf-401d29e99cf0_320w.png',
    needsInvert: false // White typography on black background
  },
  {
    name: 'Connect 44',
    src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/614dd896-24ce-428a-a2ff-94623f8d9453_320w.png',
    needsInvert: false // Black wordmark on white background
  },
  {
    name: 'Signal Connectivity',
    src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c57f093-bf43-41e9-88bf-a6151fba0130_320w.png',
    needsInvert: false // Black graphic on white background
  }
];

export default function ClientTicker() {
  return (
    <div className="w-full py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden flex flex-col items-center">
      <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8 text-center">
        Trusted by global network operators
      </p>
      
      <div className="relative w-full max-w-[1400px] mx-auto flex overflow-hidden">
        {/* Soft edge gradients to mask the ticker scrolling in and out */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #050505 0%, transparent 15%, transparent 85%, #050505 100%)' }}></div>
        
        {/* Ticker Track */}
        <div className="ticker-track flex items-center gap-16 pr-16 w-max">
          {/* Duplicate the array exactly once for a seamless infinite loop animation */}
          {[...clients, ...clients].map((client, i) => (
            <div 
              key={`${client.name}-${i}`} 
              className="flex items-center justify-center w-[140px] h-[60px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={client.src} 
                alt={`${client.name} logo`} 
                className={clsx(
                  "max-w-full max-h-full object-contain mix-blend-screen",
                  client.needsInvert && "invert"
                )}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}