import React from 'react';
import { Aperture } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-white/5 border-t py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 cursor-none hover:text-red-500 transition-colors">
          <Aperture className="text-red-500 w-5 h-5" />
          <span className="font-playfair font-medium text-lg">BADKA JI</span>
        </div>
        <p className="md:text-left text-sm text-zinc-500 font-geist text-center">© 2026 Suryansh Sharma. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-zinc-500 hover:text-red-500 transition-colors cursor-none hover:scale-110 transform"><iconify-icon icon="solar:instagram-linear" class="text-xl"></iconify-icon></a>
          <a href="#" className="text-zinc-500 hover:text-red-500 transition-colors cursor-none hover:scale-110 transform"><iconify-icon icon="solar:youtube-linear" class="text-xl"></iconify-icon></a>
          <a href="#" className="text-zinc-500 hover:text-red-500 transition-colors cursor-none hover:scale-110 transform"><iconify-icon icon="solar:videocamera-linear" class="text-xl"></iconify-icon></a>
        </div>
      </div>
    </footer>
  );
}