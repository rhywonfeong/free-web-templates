import { Outlet } from 'react-router-dom';
import GlobalHeader from './GlobalHeader';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 flex flex-col font-geist">
      <GlobalHeader />
      
      {/* Global Background Grid */}
      <div className="bg-grid-container">
        <div className="bg-grid-plane"></div>
      </div>

      <main className="flex-grow relative z-10 flex flex-col pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}