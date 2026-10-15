import { useLocation } from 'react-router-dom';

export default function Header({ toggleSidebar }) {
  const location = useLocation();
  
  // Format path to title case for breadcrumb
  const pathName = location.pathname === '/' 
    ? 'Overview' 
    : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2);

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 border-b border-white/10 bg-[#0a0a0a]/80 px-3 backdrop-blur-md transition-all duration-300 md:px-5">
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSidebar}
          className="inline-flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          aria-label="Toggle Sidebar"
        >
          <iconify-icon icon="solar:siderbar-linear" width="18" height="18"></iconify-icon>
        </button>
        
        <div className="h-4 w-px bg-white/10 mx-2 hidden md:block" role="none"></div>
        
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#a1a1a1] sm:gap-2.5">
            <li className="hidden md:flex items-center gap-1.5">
              <a href="/" className="hover:text-white transition-colors">Dashboard</a>
            </li>
            <li className="hidden md:flex items-center" aria-hidden="true">
              <iconify-icon icon="solar:alt-arrow-right-linear" width="14" height="14"></iconify-icon>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-white font-normal capitalize" aria-current="page">
                {pathName}
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
}