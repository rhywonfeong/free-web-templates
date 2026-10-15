import React, { useEffect } from 'react';

export default function SharedShell({ children }) {
  useEffect(() => {
    // 1. Inject FxFilter for the Liquid Glass effects
    if (!document.querySelector('script[src="https://www.aura.build/FxFilter.js"]')) {
      const fxScript = document.createElement('script');
      fxScript.src = "https://www.aura.build/FxFilter.js";
      fxScript.async = true;
      document.head.appendChild(fxScript);
    }

    // 2. Inject and Initialize UnicornStudio for the Aura Background
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const usScript = document.createElement("script");
      usScript.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      usScript.onload = function () {
        if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(usScript);
    } else if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }

    // 3. Setup IntersectionObserver for scroll-triggered animations
    const once = true;
    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });
    }

    // Function to observe elements
    const initInViewAnimations = () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };

    // Small delay to ensure the DOM is fully rendered before observing
    const timer = setTimeout(initInViewAnimations, 100);

    return () => {
      clearTimeout(timer);
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        if (window.__inViewIO) window.__inViewIO.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05050a] text-white flex flex-col overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      {/* Global Navigation Shell */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:cloud-waterfall-bold-duotone" class="text-purple-500 w-6 h-6"></iconify-icon>
          <span className="font-jakarta font-bold tracking-tighter text-lg text-white">RAIN</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-geist font-medium text-white/60 hover:text-white transition-colors">Features</a>
          <a href="#automation" className="text-sm font-geist font-medium text-white/60 hover:text-white transition-colors">Automation</a>
          <a href="#testimonials" className="text-sm font-geist font-medium text-white/60 hover:text-white transition-colors">Reviews</a>
        </nav>

        <a href="#pricing" className="inline-flex items-center gap-2 text-xs font-semibold font-geist bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-colors text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          Get Access
          <iconify-icon icon="solar:arrow-right-linear" class="w-3.5 h-3.5"></iconify-icon>
        </a>
      </header>

      {/* Page Content Rendering */}
      <div className="flex-1 w-full relative">
        {children}
      </div>
    </div>
  );
}