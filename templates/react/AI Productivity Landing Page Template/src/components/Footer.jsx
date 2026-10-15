export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bc4cf61-df25-4cf8-9590-7737722d4921_320w.png" alt="SoulShell Logo" className="w-8 h-8 rounded-lg object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all" />
          <span className="text-lg font-medium tracking-tight text-white">SoulShell</span>
        </div>
        <div className="text-sm text-gray-600">© 2026 SoulShell AI. All rights reserved.</div>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Manifesto</a>
        </div>
      </div>
    </footer>
  );
}