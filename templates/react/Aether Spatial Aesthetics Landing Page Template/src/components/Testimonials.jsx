import RevealText from './RevealText';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Aether fundamentally transformed how we visualize our distributed networks. The spatial interface feels native, fluid, and incredibly powerful.",
      name: "Elena Rostova",
      role: "Lead Architect at Nexus",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/461c2bb1-9a06-404e-b80f-18cf9b924a4d_320w.webp"
    },
    {
      quote: "We've scaled from 10 to over 5,000 nodes without a single UI hiccup. The aesthetic precision here is unmatched in the infrastructure space.",
      name: "Marcus Chen",
      role: "CTO, Quantum Systems",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5866f61c-e537-452b-9d35-053e985d625b_320w.webp"
    },
    {
      quote: "Deploying our 3D environments used to require a massive custom stack. Aether provides the exact primitive components we needed right out of the box.",
      name: "Sarah Jenkins",
      role: "Spatial Designer, Void",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/cc3d2108-b362-49c8-be76-9151dbe6bb4f/320w.png"
    }
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-12 z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mb-6">
            <iconify-icon icon="solar:chat-round-line-linear" class="text-indigo-300 text-sm"></iconify-icon>
            <span className="text-xs font-medium text-zinc-300 uppercase tracking-widest">Network Feedback</span>
          </div>
          <RevealText 
            text="Trusted by pioneers building the next digital frontier." 
            className="text-4xl md:text-[4rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)]" 
          />
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
            <iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
          </button>
          <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="relative group rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-600/30 via-zinc-800/10 to-black/80 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-1">
            <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-800/90 to-zinc-950/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
            
            <div className="relative z-10 p-8 flex flex-col justify-between h-full min-h-[280px]">
              <iconify-icon icon="solar:quote-left-bold-duotone" class="text-3xl text-zinc-700 mb-6"></iconify-icon>
              
              <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-zinc-700 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                />
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.name}</div>
                  <div className="text-zinc-500 text-xs mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}