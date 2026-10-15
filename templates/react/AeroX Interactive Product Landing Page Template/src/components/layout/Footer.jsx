export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-50">
           <iconify-icon icon="solar:bicycling-bold" width="24"></iconify-icon>
           <span className="font-medium tracking-tight">AeroX Cycles Inc.</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4 text-zinc-500">
          <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:x" width="20"></iconify-icon></a>
          <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon></a>
          <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:youtube" width="20"></iconify-icon></a>
        </div>
      </div>
    </footer>
  );
}