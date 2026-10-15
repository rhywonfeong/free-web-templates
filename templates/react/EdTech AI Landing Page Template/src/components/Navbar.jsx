import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex lg:px-12 border-brand-border z-50 border-white/10 border-b pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-md items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <span className="text-3xl font-medium text-brand-accent tracking-tight leading-none group-hover:drop-shadow-[0_0_10px_rgba(204,255,0,0.5)] transition-all">N2</span>
        <div className="flex flex-col">
          <span className="text-xs font-normal tracking-widest text-white leading-tight uppercase">Cyber</span>
          <span className="text-xs font-normal tracking-widest text-white leading-tight uppercase">Core</span>
        </div>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-xs font-normal tracking-widest uppercase text-brand-muted">
        <Link to="/network" className="hover:text-white transition-colors duration-300">Network</Link>
        <button className="hover:text-white transition-colors duration-300">Login</button>
        
        <div className="relative">
          <input type="checkbox" id="dropdown-menu-toggle" className="peer hidden" />
          <label htmlFor="dropdown-menu-toggle" className="text-brand-accent flex items-center gap-2 hover:bg-brand-surface px-4 py-2 rounded-full transition-colors border border-transparent hover:border-brand-border cursor-pointer select-none">
            Menu 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line></svg>
          </label>
          
          <div className="absolute right-0 top-full mt-2 w-56 bg-[#12141a]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0 translate-y-1 transition-all duration-200 z-50 flex flex-col p-1">
            <div className="px-3 py-2 text-[10px] font-medium uppercase tracking-widest text-white/40 mb-1">Navigation</div>
            
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-xs font-normal text-brand-muted hover:text-white hover:bg-white/5 rounded-md transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              Curriculum
            </a>
            
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-xs font-normal text-brand-muted hover:text-white hover:bg-white/5 rounded-md transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.968-3.645"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4"></path><path d="M17.997 5.125A3 3 0 0 1 17.599 6.5"></path><path d="M20.523 10.896a4 4 0 0 0-.585-.396"></path><path d="M18 18a4 4 0 0 0 1.968-3.645"></path></svg>
              Masterclasses
            </a>
            
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-xs font-normal text-brand-muted hover:text-white hover:bg-white/5 rounded-md transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
              Analytics
            </a>
            
            <div className="h-[1px] bg-white/10 my-1 mx-2"></div>
            
            <a href="#" className="flex items-center justify-between px-3 py-2 text-xs font-normal text-brand-muted hover:text-white hover:bg-white/5 rounded-md transition-colors group">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.098a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                Settings
              </div>
              <span className="text-[9px] font-mono tracking-widest text-white/30 group-hover:text-white/70 transition-colors">⌘S</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}