export default function Navbar() {
  return (
    <nav className="fixed flex mix-blend-difference w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative group">
          <div className="absolute inset-0 bg-orange-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bc4cf61-df25-4cf8-9590-7737722d4921_320w.png"
            alt="SoulShell Logo"
            className="group-hover:rotate-3 transition-transform duration-500 w-10 h-10 object-cover border-white/10 border ring-white/5 ring-1 rounded-xl relative shadow-2xl rotate-0"
          />
        </div>
        <span className="text-xl font-medium text-white tracking-tight">SoulShell</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        <a href="#vision" className="transition-colors hover:text-orange-500">VISION</a>
        <a href="#features" className="transition-colors hover:text-orange-500">STRUCTURE</a>
        <a href="#technology" className="transition-colors hover:text-orange-500">INTELLIGENCE</a>
      </div>

      <div className="flex gap-4">
        <button className="p-2 rounded-full border border-white/20 hover:border-white transition-colors flex items-center justify-center">
          <iconify-icon icon="simple-icons:instagram" width="16" height="16" class="w-4 h-4"></iconify-icon>
        </button>
        <button className="hover:border-white transition-colors border-white/20 border rounded-full pt-2 pr-2 pb-2 pl-2 flex items-center justify-center">
          <iconify-icon icon="simple-icons:x" width="16" height="16" class="w-4 h-4"></iconify-icon>
        </button>
      </div>
    </nav>
  );
}