export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/[0.05] relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-white/50 text-sm">
          <iconify-icon icon="solar:star-fall-minimalistic-linear" class="text-lg"></iconify-icon>
          <span>© {year} Velvet Creative. All rights reserved.</span>
        </div>
        
        <div className="text-white/30 text-xs font-light tracking-wider">
          DESIGNED WITH INTENT
        </div>
      </div>
    </footer>
  );
}