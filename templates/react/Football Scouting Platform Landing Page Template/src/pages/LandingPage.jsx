import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import ThemeToggle from '../components/ThemeToggle';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-colors duration-500 dark:border-slate-800/50 dark:bg-slate-950/80">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Logo />

          <div className="hidden items-center gap-8 text-sm font-normal text-slate-500 uppercase md:flex dark:text-slate-400">
            <a href="#features" className="font-medium text-slate-700 transition-colors hover:text-slate-900 dark:hover:text-white">Features</a>
            <a href="#prospects" className="font-medium text-slate-700 transition-colors hover:text-slate-900 dark:hover:text-white">Prospects</a>
            <a href="#pricing" className="font-medium text-slate-700 transition-colors hover:text-slate-900 dark:hover:text-white">Pricing</a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            
            <Link to="/dashboard" className="hidden items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:shadow focus:outline-none sm:inline-flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
              Dashboard
              <iconify-icon icon="solar:arrow-right-linear" className="text-sm opacity-60"></iconify-icon>
            </Link>

            <button className="bg-pitch-600 hidden items-center justify-center rounded-md px-4 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow focus:outline-none active:scale-95 sm:inline-flex dark:bg-white dark:text-slate-900">
              Sign In
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="-mr-2 flex items-center justify-center p-2 text-slate-500 transition-colors hover:text-slate-900 md:hidden dark:text-slate-400 dark:hover:text-white"
            >
              <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-xl"></iconify-icon>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 flex flex-col bg-white/95 px-6 pt-20 pb-6 shadow-2xl backdrop-blur-md transition-transform duration-300 md:hidden dark:bg-slate-950/95 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mb-auto flex flex-col gap-6 text-lg font-medium text-slate-900 dark:text-white">
          {['Features', 'Prospects', 'Pricing'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="group flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800/50">
              {item}
              <iconify-icon icon="solar:arrow-right-linear" className="group-hover:text-pitch-500 text-slate-400 transition-colors dark:text-slate-700"></iconify-icon>
            </a>
          ))}
          <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="group flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800/50">
            Dashboard
            <iconify-icon icon="solar:arrow-right-linear" className="group-hover:text-pitch-500 text-slate-400 transition-colors dark:text-slate-700"></iconify-icon>
          </Link>
        </div>
        <button className="mt-8 w-full rounded-md bg-slate-900 py-3 text-sm font-medium text-white transition-opacity dark:bg-white dark:text-slate-900">Sign In</button>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 pt-20 pb-32 dark:border-slate-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]"></div>
          <div className="bg-pitch-500/8 dark:bg-pitch-500/10 pointer-events-none absolute top-0 left-1/2 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full blur-3xl"></div>

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
                <span className="bg-pitch-500 h-1.5 w-1.5 animate-pulse rounded-full"></span>
                Live Global Database Updated
              </div>
              <h1 className="mb-6 text-4xl leading-[1.1] font-medium tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
                Discover the next generation of
                <br className="hidden lg:block" />
                <span className="to-pitch-400 dark:from-pitch-400 dark:to-pitch-300 from-pitch-700 bg-gradient-to-r bg-clip-text text-transparent">
                  {" "}football NEXT<span className="font-bold">CHAPTER</span>.
                </span>
              </h1>
              <p className="mb-10 max-w-lg text-base leading-relaxed font-normal text-slate-600 dark:text-slate-400">
                Identify high-potential players globally with predictive analytics, comprehensive video integration, and real-time scouting reports.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/dashboard" className="bg-pitch-600 hover:bg-pitch-500 inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg focus:outline-none dark:bg-white dark:text-slate-900">
                  Start Scouting Free
                  <iconify-icon icon="solar:arrow-right-linear" className="text-lg"></iconify-icon>
                </Link>
                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800">
                  <iconify-icon icon="solar:play-circle-linear" className="text-lg opacity-70"></iconify-icon>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Abstract Pitch Visual mock */}
            <div className="perspective-1000 relative mx-auto mt-10 aspect-[4/3] w-full max-w-lg lg:mt-0 lg:max-w-none">
              <div className="absolute inset-0 rotate-x-12 rotate-y-[-10deg] rotate-z-[5deg] transform rounded-xl border border-slate-200/80 bg-white/40 p-4 shadow-2xl shadow-pitch-500/10 backdrop-blur-md transition-transform duration-700 hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0 dark:border-slate-700/50 dark:bg-slate-900/60 dark:shadow-pitch-500/5">
                
                <div className="relative h-full w-full overflow-hidden rounded-lg border border-pitch-500/20 bg-pitch-500/5">
                   <img 
                    src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80" 
                    alt="Football pitch abstract" 
                    className="h-full w-full object-cover opacity-80 mix-blend-overlay"
                  />
                  {/* Overlay UI elements to look like a dashboard card */}
                  <div className="absolute top-4 left-4 rounded-md bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1518605368461-1ee061320d36?w=100&q=80" alt="Player" className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">Jude Bellingham</p>
                        <p className="text-xs text-slate-500">CM • Real Madrid</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 dark:border-slate-800">
                      <span className="text-xs text-slate-500">Match Rating</span>
                      <span className="text-sm font-semibold text-pitch-600 dark:text-pitch-400">9.2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}