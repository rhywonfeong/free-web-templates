import { Outlet } from 'react-router-dom';
import UnicornScene from 'unicornstudio-react';
import Navbar from './Navbar';
import Footer from './Footer';

function AuraBackground() {
  return (
    <div className="aura-background-component fixed inset-0 w-full h-full -z-10">
      <UnicornScene projectId="Br3ptQ7QHHo83vuxzIgC" className="w-full h-full" />
    </div>
  );
}

export default function Layout() {
  return (
    <div id="root">
      <AuraBackground />
      
      {/* Main Full-Width Container */}
      <div 
        className="relative z-10 w-full min-h-screen bg-brand-base/20" 
      >
        {/* Architectural Grid Lines */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-[1px] bg-white/10 pointer-events-none"></div>
        <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-[1px] bg-white/10 pointer-events-none"></div>
        <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-[1px] bg-white/10 pointer-events-none"></div>

        {/* Corner L-Brackets */}
        <div className="fixed top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/10 z-50 pointer-events-none"></div>
        <div className="fixed top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/10 z-50 pointer-events-none"></div>
        <div className="fixed bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/10 z-50 pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/10 z-50 pointer-events-none"></div>

        <Navbar />
        
        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}