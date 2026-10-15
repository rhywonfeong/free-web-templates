export default function Interface() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-black to-black from-orange-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
      
      <div className="container z-10 mr-auto ml-auto relative">
        <div className="text-center mb-20">
          <span className="font-mono text-sm tracking-widest uppercase mb-4 block text-orange-500">System UI</span>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Built for the <br /><span className="italic font-serif">Deep Work</span> State
          </h3>
        </div>

        <div className="max-w-5xl mx-auto border border-white/10 rounded-t-3xl bg-[#0a0a0a] shadow-2xl overflow-hidden">
          <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="p-8 md:p-16 relative min-h-[500px] flex items-center justify-center">
            <div className="opacity-20 absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden rounded-xl">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e5fb84b-ca65-41ae-bb29-6efa9f9cf3df_3840w.png" alt="Abstract 3D Background" className="mix-blend-overlay w-full h-full object-cover" />
            </div>
            
            <div className="z-10 text-center relative">
              <div className="inline-flex items-center gap-3 border px-6 py-3 rounded-full mb-6 bg-orange-600/20 border-orange-500/30 text-orange-400">
                <div className="w-2 h-2 rounded-full animate-pulse bg-orange-500"></div>
                <span className="text-sm font-medium tracking-wide">FOCUS MODE ACTIVE</span>
              </div>
              <h4 className="text-3xl font-light text-white mb-2">Project: <span className="text-gray-400">Rebranding Self</span></h4>
              <p className="text-gray-500 text-lg">Current velocity: High • Distractions blocked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}