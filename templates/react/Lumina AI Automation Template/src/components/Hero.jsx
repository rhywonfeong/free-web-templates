import React from 'react';

export default function Hero() {
  return (
    <main className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-center pt-32 pb-10 md:pb-16 pointer-events-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 pointer-events-auto min-h-[70vh] gap-x-16 gap-y-16 items-center">
        
        {/* Left Side */}
        <div className="flex flex-col gap-10 lg:pr-8 text-left gap-x-10 gap-y-10">
          <h1 className="sm:text-6xl md:text-7xl leading-[1.1] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-5xl font-medium text-white/95 tracking-tight">
            AI Agents <br />
            Powerful Automation <br />
            <span className="text-zinc-500">Made Simple</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
            {/* Animated Hover CTA Hero */}
            <button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-normal text-zinc-300 tracking-tight bg-zinc-900 border border-zinc-700/80 rounded-full px-8 py-3.5 items-center justify-center text-lg">
              {/* Original text (slides down on hover) */}
              <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
                Start Today It's Free
                <iconify-icon icon="solar:arrow-right-linear" className="w-5 h-5 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </span>
              
              {/* Clone text (slides in from top on hover) */}
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md">
                Start Today It's Free
                <iconify-icon icon="solar:arrow-right-linear" className="flex items-center justify-center w-5 h-5" style={{ strokeWidth: 1.5, color: 'rgb(255, 255, 255)' }} width="20" height="20"></iconify-icon>
              </span>

              {/* bottom light gradient line on hover */}
              <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
              
              {/* bottom light gradient on hover */}
              <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
            </button>

            <button className="px-8 py-3.5 rounded-full border border-zinc-800 bg-transparent text-lg font-normal text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors backdrop-blur-sm">
              Talk to Sales
            </button>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-5 pt-4 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
            <div className="flex items-start gap-4 text-lg font-normal text-zinc-400 group">
              <iconify-icon icon="solar:check-circle-linear" className="w-6 h-6 flex items-center justify-center text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors flex-shrink-0" style={{ strokeWidth: 1.5 }}></iconify-icon>
              <span><span className="text-zinc-200 font-medium">No-code :</span> you click, it works</span>
            </div>
            <div className="flex items-start gap-4 text-lg font-normal text-zinc-400 group">
              <iconify-icon icon="solar:check-circle-linear" className="w-6 h-6 flex items-center justify-center text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors flex-shrink-0" style={{ strokeWidth: 1.5 }}></iconify-icon>
              <span><span className="text-zinc-200 font-medium">Open source :</span> customizable and secure</span>
            </div>
            <div className="flex items-start gap-4 text-lg font-normal text-zinc-400 group">
              <iconify-icon icon="solar:check-circle-linear" className="w-6 h-6 flex items-center justify-center text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors flex-shrink-0" style={{ strokeWidth: 1.5 }}></iconify-icon>
              <span><span className="text-zinc-200 font-medium">Training :</span> guided by us, built by your team</span>
            </div>
          </div>
        </div>

        {/* Right Side: Floating Image Cluster */}
        <div className="lg:h-[650px] hidden md:block [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll w-full h-[500px] z-50 pointer-events-auto relative">
          <div className="glass-card absolute top-[5%] left-[5%] w-40 lg:w-48 aspect-square rotate-[-4deg] p-2 md:p-3 z-[61] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b2b94ae-4a0b-458d-b838-58b0fb5fadfd_800w.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" />
              <div className="bg-gradient-to-tr from-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
            </div>
            <div className="glass-highlight"></div>
          </div>
          <div className="glass-card absolute top-[15%] right-[5%] w-48 lg:w-56 aspect-[4/3] rotate-[3deg] p-2 md:p-3 z-[62] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98ceb9e8-e614-438f-b0b6-6ea9a4cd962a_800w.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            </div>
            <div className="glass-highlight"></div>
          </div>
          <div className="glass-card lg:w-44 aspect-[3/4] md:p-3 w-36 z-[63] pt-2 pr-2 pb-2 pl-2 absolute top-[40%] left-[0%] rotate-[-2deg] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cce9b24e-35c2-4401-966f-6862ca3cbe67_320w.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            </div>
            <div className="glass-highlight"></div>
          </div>
          <div className="glass-card absolute top-[35%] right-[15%] w-52 lg:w-64 aspect-square rotate-[2deg] p-2 md:p-3 z-[64] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84c1c812-11be-4bbf-980f-9c90b7a0d779_800w.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            </div>
            <div className="glass-highlight"></div>
          </div>
          <div className="glass-card absolute bottom-[5%] left-[20%] w-44 lg:w-52 aspect-square rotate-[4deg] p-2 md:p-3 z-[62] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f606005-ba8e-4906-8403-5200e9723d9f_800w.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            </div>
            <div className="glass-highlight"></div>
          </div>
          <div className="glass-card absolute bottom-[0%] right-[10%] w-36 lg:w-44 aspect-[4/3] rotate-[-3deg] p-2 md:p-3 z-[61] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d1c6740-1f50-4f43-bbb0-8bfb2f9620bd_320w.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            </div>
            <div className="glass-highlight"></div>
          </div>
        </div>
      </div>
    </main>
  );
}