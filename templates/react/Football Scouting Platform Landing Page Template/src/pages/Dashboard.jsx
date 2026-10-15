import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/dashboard/TopBar';
import MarqueeTicker from '../components/dashboard/MarqueeTicker';
import SpotlightCard from '../components/SpotlightCard';

const Sonar = () => (
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-sonar absolute inline-flex h-full w-full rounded-full bg-pitch-500 opacity-75"></span>
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pitch-500"></span>
  </span>
);

const DashboardNoodles = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40 mix-blend-multiply dark:opacity-20 dark:mix-blend-screen">
    <svg className="absolute top-0 left-0 w-full h-[800px]" preserveAspectRatio="none">
      <path d="M -100,100 C 300,50 400,400 1000,200 S 1400,600 2000,100" fill="none" className="noodle-path stroke-2" />
      <path d="M -100,100 C 300,50 400,400 1000,200 S 1400,600 2000,100" fill="none" className="noodle-beam stroke-2" />
      <path d="M 2000,300 C 1500,400 1200,100 800,250 S 300,-50 -100,300" fill="none" className="noodle-path stroke-1" />
      <path d="M 2000,300 C 1500,400 1200,100 800,250 S 300,-50 -100,300" fill="none" className="noodle-beam-slow stroke-[1.5px]" />
    </svg>
  </div>
);

const playerTargetCards = [
  {
    id: '01', nat: 'GER', name: 'J. Musiala', desc: 'CAM • 21 yrs • Bayern', ovr: 89,
    ovrBg: 'bg-pitch-50 text-pitch-700 border-pitch-200 dark:bg-pitch-500/10 dark:text-pitch-400 dark:border-pitch-500/20',
    stats: [{ label: 'DRI', val: 94, fill: 'bg-pitch-500' }, { label: 'PAC', val: 86, fill: 'bg-pitch-500' }],
    badge: true
  },
  {
    id: '02', nat: 'GEO', name: 'K. Kvara', desc: 'LW • 23 yrs • Napoli', ovr: 86,
    ovrBg: 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
    stats: [{ label: 'PAC', val: 88, fill: 'bg-pitch-500' }, { label: 'DRI', val: 89, fill: 'bg-pitch-500' }]
  },
  {
    id: '03', nat: 'ESP', name: 'L. Yamal', desc: 'RW • 16 yrs • Barcelona', ovr: 84,
    ovrBg: 'bg-pitch-50 text-pitch-700 border-pitch-200 dark:bg-pitch-500/10 dark:text-pitch-400 dark:border-pitch-500/20',
    stats: [{ label: 'PAC', val: 85, fill: 'bg-pitch-500' }, { label: 'DRI', val: 88, fill: 'bg-pitch-400' }]
  }
];

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const navigate = useNavigate();

  const nextCard = () => setCardIndex(prev => (prev + 1) % playerTargetCards.length);
  const prevCard = () => setCardIndex(prev => (prev - 1 + playerTargetCards.length) % playerTargetCards.length);

  // Auto-rotate the carousel
  useEffect(() => {
    const timer = setInterval(nextCard, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Background vertical grid lines */}
      <div className="pointer-events-none fixed inset-0 z-[-1] mx-auto flex w-full max-w-[90rem] justify-evenly px-4 lg:px-8">
        <div className="h-full w-px bg-slate-200/50 dark:bg-slate-800/40"></div>
        <div className="hidden h-full w-px bg-slate-200/50 dark:bg-slate-800/40 md:block"></div>
        <div className="hidden h-full w-px bg-slate-200/50 dark:bg-slate-800/40 lg:block"></div>
        <div className="h-full w-px bg-slate-200/50 dark:bg-slate-800/40"></div>
      </div>

      <TopBar onMenuToggle={() => setIsMobileMenuOpen(true)} />
      <MarqueeTicker />

      {/* Main Layout Container */}
      <div className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col gap-8 p-4 md:flex-row lg:p-8">
        
        {/* Main Content Area */}
        <main className="relative z-10 min-w-0 flex-1 space-y-8">
          <DashboardNoodles />

          {/* Header & Breadcrumbs */}
          <header>
            <nav className="mb-2 flex items-center gap-1.5 text-xs">
              <Link to="/" className="text-slate-500 transition-colors hover:text-pitch-600 dark:text-slate-400 dark:hover:text-pitch-400">Platform</Link>
              <iconify-icon icon="solar:alt-arrow-right-linear" className="text-xs text-slate-400 dark:text-slate-600"></iconify-icon>
              <span className="font-medium text-slate-900 dark:text-white">Overview</span>
            </nav>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl font-medium tracking-tight text-slate-900 flex items-center gap-3 dark:text-white">
                  Scouting Overview <Sonar />
                </h1>
                <p className="mt-1 text-sm font-normal text-slate-500 dark:text-slate-400">Monitor your active prospects and regional data updates.</p>
              </div>
              <div className="flex items-center gap-1 rounded-md bg-slate-100/50 p-1 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-800">
                <button className="rounded bg-white px-3 py-1.5 text-xs font-medium text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white">30 Days</button>
                <button className="rounded px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">Quarter</button>
                <button className="rounded px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">YTD</button>
              </div>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="flex w-full gap-4 overflow-x-auto snap-x snap-mandatory pb-2 hide-scrollbar sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
            <SpotlightCard className="min-w-[85vw] shrink-0 snap-center p-4 sm:min-w-0 sm:snap-align-none">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-pitch-50 text-pitch-600 dark:bg-pitch-500/10 dark:text-pitch-400">
                  <iconify-icon icon="solar:users-group-rounded-linear" className="text-lg"></iconify-icon>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Tracked Players</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">1,248</span>
                <span className="flex items-center text-xs font-medium text-pitch-600 dark:text-pitch-400"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon>12%</span>
              </div>
              <div className="pointer-events-none absolute -bottom-3 -right-2 select-none text-7xl font-bold tracking-tighter text-slate-900/[0.03] dark:text-white/[0.03]">01</div>
            </SpotlightCard>

            <SpotlightCard className="min-w-[85vw] shrink-0 snap-center p-4 sm:min-w-0 sm:snap-align-none">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                  <iconify-icon icon="solar:star-linear" className="text-lg"></iconify-icon>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Top Prospects</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">84</span>
                <span className="flex items-center text-xs font-medium text-pitch-600 dark:text-pitch-400"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon>4%</span>
              </div>
              <div className="pointer-events-none absolute -bottom-3 -right-2 select-none text-7xl font-bold tracking-tighter text-slate-900/[0.03] dark:text-white/[0.03]">02</div>
            </SpotlightCard>

            <SpotlightCard className="min-w-[85vw] shrink-0 snap-center p-4 sm:min-w-0 sm:snap-align-none">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  <iconify-icon icon="solar:document-text-linear" className="text-lg"></iconify-icon>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Reports Generated</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">312</span>
                <span className="text-xs font-medium text-slate-500">This month</span>
              </div>
              <div className="pointer-events-none absolute -bottom-3 -right-2 select-none text-7xl font-bold tracking-tighter text-slate-900/[0.03] dark:text-white/[0.03]">03</div>
            </SpotlightCard>
          </div>

          {/* Getting Started Section */}
          <SpotlightCard className="overflow-visible">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-pitch-50 text-pitch-600 dark:bg-pitch-500/10 dark:text-pitch-400">
                  <iconify-icon icon="solar:rocket-linear" className="text-sm"></iconify-icon>
                </div>
                <h3 className="text-sm font-medium tracking-tight text-slate-900 dark:text-white">Getting Started</h3>
              </div>
              <button className="inline-flex items-center gap-2 rounded-md bg-pitch-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-pitch-500 focus:outline-none dark:bg-pitch-500 dark:hover:bg-pitch-400">
                <iconify-icon icon="lucide:settings" className="text-sm"></iconify-icon> Configure Settings
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4">
              <div className="flex flex-col items-center justify-center rounded-md border border-slate-200 bg-slate-50/50 p-4 text-center transition-all hover:border-pitch-200 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/20 dark:hover:border-pitch-700 dark:hover:bg-slate-800/40">
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-pitch-50 text-pitch-600 dark:bg-pitch-500/10 dark:text-pitch-400">
                  <iconify-icon icon="solar:user-linear" className="text-xl"></iconify-icon>
                </div>
                <span className="text-xs font-medium text-slate-900 dark:text-white">1. Setup Profile</span>
                <span className="mt-0.5 text-[11px] text-slate-500">Complete your scout details</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-md border border-slate-200 bg-slate-50/50 p-4 text-center transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/20 dark:hover:border-slate-700">
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  <iconify-icon icon="solar:tuning-2-linear" className="text-xl"></iconify-icon>
                </div>
                <span className="text-xs font-medium text-slate-900 dark:text-white">2. Preferences</span>
                <span className="mt-0.5 text-[11px] text-slate-500">Set your target regions</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-md border border-slate-200 bg-slate-50/50 p-4 text-center transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/20 dark:hover:border-slate-700">
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  <iconify-icon icon="solar:database-linear" className="text-xl"></iconify-icon>
                </div>
                <span className="text-xs font-medium text-slate-900 dark:text-white">3. Connect Data</span>
                <span className="mt-0.5 text-[11px] text-slate-500">Link external databases</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-center transition-all hover:border-pitch-300 hover:bg-white hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/20 dark:hover:border-pitch-700/60">
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm dark:bg-slate-800 dark:text-slate-500">
                  <iconify-icon icon="solar:play-circle-linear" className="text-xl"></iconify-icon>
                </div>
                <span className="text-xs font-medium text-slate-900 dark:text-white">4. Start Scouting</span>
                <span className="mt-0.5 text-[11px] text-slate-500">Begin tracking players</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Recent Targets Rotating Carousel */}
          <div>
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-800">
              <div className="flex gap-6">
                <button className="border-pitch-500 text-pitch-600 dark:text-pitch-400 -mb-[9px] border-b-2 pb-2 text-sm font-medium">Recent Targets</button>
                <button className="pb-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">Watchlist</button>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prevCard} className="flex h-7 w-7 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white">
                  <iconify-icon icon="solar:alt-arrow-left-linear" className="text-sm"></iconify-icon>
                </button>
                <button onClick={nextCard} className="flex h-7 w-7 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-sm"></iconify-icon>
                </button>
              </div>
            </div>

            {/* 3D Rotator container */}
            <div className="relative flex h-64 w-full items-center justify-center overflow-hidden py-4 sm:h-[19rem]">
              {playerTargetCards.map((card, index) => {
                const offset = (index - cardIndex + playerTargetCards.length) % playerTargetCards.length;
                let translateX = 0;
                let scale = 1;
                let zIndex = 10;
                let opacity = 1;

                if (offset === 0) {
                  translateX = 0; scale = 1; zIndex = 30;
                } else if (offset === 1) {
                  translateX = 55; scale = 0.85; zIndex = 20; opacity = 0.6;
                } else if (offset === 2) {
                  translateX = -55; scale = 0.85; zIndex = 20; opacity = 0.6;
                }

                return (
                  <div
                    key={card.id}
                    className="absolute w-[85%] max-w-[280px] sm:max-w-[320px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ transform: `translateX(${translateX}%) scale(${scale})`, zIndex, opacity }}
                  >
                    <SpotlightCard onClick={() => navigate(`/player/${card.id}`)} className="flex h-full flex-col bg-white dark:bg-slate-900/90 hover:-translate-y-1">
                      <div className="relative flex h-32 items-center justify-center overflow-hidden border-b border-slate-100 bg-slate-50/50 transition-colors dark:border-slate-800/50 dark:bg-slate-950/30">
                        <iconify-icon icon="solar:user-linear" className="text-4xl text-slate-300 dark:text-slate-700"></iconify-icon>
                        <div className="absolute top-2 left-2 rounded border border-slate-200/60 bg-white/80 px-2 py-0.5 text-[10px] font-medium tracking-tight text-slate-600 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-300">{card.nat}</div>
                        {card.badge && (
                          <div className="absolute top-2 right-2 rounded-full border border-accent-100 bg-accent-50 p-1 text-accent-600 dark:border-accent-500/20 dark:bg-accent-500/10 dark:text-accent-400">
                            <iconify-icon icon="solar:star-bold" className="text-xs"></iconify-icon>
                          </div>
                        )}
                        <div className="pointer-events-none absolute -bottom-3 -right-1 select-none text-6xl font-bold tracking-tighter text-slate-900/[0.05] dark:text-white/[0.05]">{card.id}</div>
                      </div>
                      <div className="flex flex-grow flex-col p-4">
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <h3 className="truncate text-sm font-medium tracking-tight text-slate-900 dark:text-white">{card.name}</h3>
                            <p className="mt-0.5 text-xs font-normal text-slate-500">{card.desc}</p>
                          </div>
                          <span className={`inline-flex h-6 w-6 items-center justify-center rounded border text-[11px] font-medium ${card.ovrBg}`}>{card.ovr}</span>
                        </div>
                        <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-2.5">
                          {card.stats.map(s => (
                            <div key={s.label}>
                              <div className="mb-1 flex justify-between text-[10px] font-medium uppercase tracking-wider">
                                <span className="text-slate-400 dark:text-slate-500">{s.label}</span>
                                <span className="text-slate-700 dark:text-slate-300">{s.val}</span>
                              </div>
                              <div className="h-1 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                <div className={`h-full rounded-full ${s.fill}`} style={{ width: `${s.val}%` }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="relative z-10 w-full shrink-0 space-y-6 md:w-72 lg:w-80">
          
          <SpotlightCard className="p-5">
            <h3 className="mb-4 text-sm font-medium tracking-tight text-slate-900 dark:text-white">Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <button className="bg-pitch-600 hover:bg-pitch-500 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 focus:outline-none dark:bg-pitch-500 dark:hover:bg-pitch-400">
                <iconify-icon icon="solar:add-circle-linear" className="text-lg"></iconify-icon> New Prospect
              </button>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-700/50">
                <iconify-icon icon="solar:document-add-linear" className="text-lg text-slate-400"></iconify-icon> Generate Report
              </button>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-medium tracking-tight text-slate-900 dark:text-white">Trending Searches</h3>
              <button className="text-xs font-medium text-pitch-600 transition-colors hover:text-pitch-700 dark:text-pitch-400 dark:hover:text-pitch-300">View all</button>
            </div>
            <div className="space-y-2">
              <div className="group flex cursor-pointer items-center gap-3 rounded-md border border-slate-100 bg-slate-50/50 p-2.5 transition-colors hover:border-pitch-200 dark:border-slate-800/60 dark:bg-slate-800/20 dark:hover:border-pitch-500/30">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-pitch-200 bg-pitch-50 dark:border-pitch-500/20 dark:bg-pitch-500/10">
                  <iconify-icon icon="solar:user-linear" className="text-pitch-600 dark:text-pitch-400 text-sm"></iconify-icon>
                </div>
                <div className="min-w-0 flex-grow">
                  <p className="truncate text-xs font-medium text-slate-900 dark:text-white">J. Musiala</p>
                  <p className="text-[10px] text-slate-500">CAM · Bayern Munich</p>
                </div>
                <iconify-icon icon="solar:chart-line-up-linear" className="text-pitch-500 text-sm opacity-50"></iconify-icon>
              </div>
              <div className="group flex cursor-pointer items-center gap-3 rounded-md border border-slate-100 bg-slate-50/50 p-2.5 transition-colors hover:border-accent-200 dark:border-slate-800/60 dark:bg-slate-800/20 dark:hover:border-accent-500/30">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-accent-200 bg-accent-50 dark:border-accent-500/20 dark:bg-accent-500/10">
                  <iconify-icon icon="solar:user-linear" className="text-accent-600 dark:text-accent-400 text-sm"></iconify-icon>
                </div>
                <div className="min-w-0 flex-grow">
                  <p className="truncate text-xs font-medium text-slate-900 dark:text-white">L. Yamal</p>
                  <p className="text-[10px] text-slate-500">RW · Barcelona</p>
                </div>
                <iconify-icon icon="solar:chart-line-up-linear" className="text-accent-500 text-sm opacity-50"></iconify-icon>
              </div>
              <div className="group flex cursor-pointer items-center gap-3 rounded-md border border-slate-100 bg-slate-50/50 p-2.5 transition-colors hover:border-slate-200 dark:border-slate-800/60 dark:bg-slate-800/20 dark:hover:border-slate-700">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                  <iconify-icon icon="solar:user-linear" className="text-slate-500 dark:text-slate-400 text-sm"></iconify-icon>
                </div>
                <div className="min-w-0 flex-grow">
                  <p className="truncate text-xs font-medium text-slate-900 dark:text-white">A. Garnacho</p>
                  <p className="text-[10px] text-slate-500">LW · Man Utd</p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-5">
            <h3 className="mb-4 text-sm font-medium tracking-tight text-slate-900 dark:text-white">System Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 rounded-md border border-pitch-200 bg-pitch-50 p-2.5 dark:border-pitch-500/20 dark:bg-pitch-500/10">
                <iconify-icon icon="solar:check-circle-linear" className="text-pitch-600 dark:text-pitch-400 mt-0.5 shrink-0 text-base"></iconify-icon>
                <div>
                  <p className="text-pitch-800 dark:text-pitch-300 text-xs font-medium">Data Synced</p>
                  <p className="text-pitch-600 dark:text-pitch-400 mt-0.5 text-[10px]">South American leagues updated.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 rounded-md border border-accent-200 bg-accent-50 p-2.5 dark:border-accent-500/20 dark:bg-accent-500/10">
                <iconify-icon icon="solar:info-circle-linear" className="text-accent-600 dark:text-accent-400 mt-0.5 shrink-0 text-base"></iconify-icon>
                <div>
                  <p className="text-accent-800 dark:text-accent-300 text-xs font-medium">Transfer Window</p>
                  <p className="text-accent-700 dark:text-accent-400 mt-0.5 text-[10px]">Summer window opens in 14 days.</p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-5">
            <label className="group relative flex cursor-pointer items-center justify-between">
              <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">Real-time alerts</span>
              <input type="checkbox" className="peer sr-only" defaultChecked />
              <div className="peer-focus:ring-pitch-500/20 peer peer-checked:bg-pitch-500 h-5 w-9 rounded-full bg-slate-200 shadow-inner transition-colors group-hover:bg-slate-300 peer-focus:ring-2 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-slate-200 after:bg-white after:shadow-sm after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-slate-800 dark:group-hover:bg-slate-700"></div>
            </label>
          </SpotlightCard>

        </aside>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 dark:bg-slate-900/60 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar Drawer */}
      <div className={`fixed inset-y-0 left-0 z-[60] w-64 transform border-r border-slate-200 bg-white p-4 transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="from-pitch-500 to-pitch-700 flex h-7 w-7 items-center justify-center rounded bg-gradient-to-br text-white shadow-sm">
              <iconify-icon icon="solar:football-linear" className="text-base"></iconify-icon>
            </div>
            <span className="font-medium tracking-tight text-slate-900 dark:text-white">NEXT<span className="opacity-70">CHAPTER</span></span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white">
            <iconify-icon icon="solar:close-circle-linear" className="text-xl"></iconify-icon>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="bg-pitch-50 text-pitch-700 dark:bg-pitch-500/10 dark:text-pitch-400 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium">
            <iconify-icon icon="solar:widget-2-linear"></iconify-icon>Dashboard
          </Link>
          <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900/50">
            <iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>Prospects
          </a>
          <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900/50">
            <iconify-icon icon="solar:document-text-linear"></iconify-icon>Reports
          </a>
          <div className="my-2 h-px bg-slate-100 dark:bg-slate-800"></div>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900/50">
            <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>Back to Platform
          </Link>
        </nav>
      </div>

    </div>
  );
}