import React from 'react';
import FeatureSection from './components/FeatureSection';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center">
      {/* Spacer to demonstrate scroll animation */}
      <div className="h-[80vh] w-full flex items-center justify-center flex-col gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white z-10">
          Scroll Down
        </h1>
        <p className="text-white/40 z-10 font-light flex items-center gap-2">
          to see the animated section
          <iconify-icon icon="solar:arrow-down-linear" className="animate-bounce mt-1"></iconify-icon>
        </p>
      </div>

      <main className="w-full max-w-7xl pb-32">
        <FeatureSection />
      </main>
      
      {/* Bottom spacer */}
      <div className="h-[40vh] w-full border-t border-white/5 flex items-center justify-center">
         <p className="text-white/20 text-sm">End of page</p>
      </div>
    </div>
  );
}

export default App;