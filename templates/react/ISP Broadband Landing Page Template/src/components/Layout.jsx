import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5577998444757" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:-translate-y-1 transition-all z-50 group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Fale com a gente!
        </span>
        <iconify-icon icon="simple-icons:whatsapp" width="36" height="36"></iconify-icon>
      </a>
    </div>
  );
}