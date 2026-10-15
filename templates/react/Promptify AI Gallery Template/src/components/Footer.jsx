export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-white">
            <iconify-icon icon="solar:magic-stick-3-bold" width="14"></iconify-icon>
          </div>
          <span className="font-medium tracking-tight text-sm text-zinc-300">PROMPTIFY</span>
        </div>
        
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Promptify Inc. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:github" width="18"></iconify-icon>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:discord" width="18"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}