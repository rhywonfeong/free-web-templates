import React, { useRef, useState, useEffect } from 'react';
import SharedShell from './components/SharedShell';

export default function App() {
  const railRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (railRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: direction * 540, behavior: 'smooth' });
    }
  };

  return (
    <SharedShell>
      {/* Progressive Top Blur */}
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Full-Width Animated Aura Background */}
      <div className="aura-background-component fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div data-us-project="HzcaAbRLaALMhHJp8gLY" className="absolute w-full h-full left-0 top-0 -z-10"></div>
      </div>

      <main className="z-10 pt-24 relative">
        {/* Hero */}
        <section className="md:pl-6 md:pr-6 md:pt-20 text-center max-w-4xl mt-20 mr-auto mb-20 ml-auto pt-20 pr-6 pl-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <div className="inline-flex gap-2 text-xs text-purple-200 bg-purple-500/10 border-purple-500/20 border rounded-full mr-auto ml-auto pt-1.5 pr-3 pb-1.5 pl-3 items-center backdrop-blur-sm">
            <iconify-icon icon="solar:ghost-linear" class="h-3.5 w-3.5 text-purple-400" style={{ strokeWidth: '1.5' }}></iconify-icon>
            <span className="font-geist">Undetectable Automation</span>
            <span className="mx-1 h-1 w-1 rounded-full bg-purple-400/40"></span>
            <span className="text-purple-300/60 font-geist">Rain v4.2 Live</span>
          </div>

          <h1 
            className="md:text-7xl lg:text-8xl text-5xl font-medium tracking-tighter font-jakarta mt-6 pt-2 pb-2 drop-shadow-[0_0_40px_rgba(147,51,234,0.3)]" 
            style={{ 
              maskImage: 'linear-gradient(150deg, transparent, black 20%, black 60%, transparent)', 
              WebkitMaskImage: 'linear-gradient(150deg, transparent, black 20%, black 60%, transparent)' 
            }}
          >
            Rule Discord with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">absolute power</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl mx-auto font-geist">
            Rain is the ultimate stealth selfbot for Discord. Automate messages, manage multiple accounts, scrape servers, and execute custom scripts without triggering anti-spam flags.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center">
            <div className="inline-block w-full sm:w-auto">
              <a href="#pricing" className="codepen-button-aura w-full sm:w-auto">
                <span>
                  <iconify-icon icon="solar:cart-large-2-linear" class="w-5 h-5"></iconify-icon>
                  Get Rain Now
                </span>
              </a>
            </div>
            <a href="#features" className="border-gradient w-full sm:w-auto justify-center inline-flex items-center gap-2 hover:bg-white/10 transition-colors text-sm font-medium text-white font-geist bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-sm">
              <iconify-icon icon="solar:code-circle-linear" class="h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
              View Features
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-200/70">
            <div className="inline-flex items-center gap-2">
              <iconify-icon icon="solar:shield-check-bold-duotone" class="h-5 w-5 text-purple-400"></iconify-icon>
              <span className="text-sm font-geist">Ban-Proof Architecture</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <iconify-icon icon="solar:bolt-bold-duotone" class="h-5 w-5 text-blue-400"></iconify-icon>
              <span className="text-sm font-geist">Zero-Delay Actions</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <iconify-icon icon="solar:users-group-rounded-bold-duotone" class="h-5 w-5 text-purple-400"></iconify-icon>
              <span className="text-sm font-geist">10k+ Active Users</span>
            </div>
          </div>
        </section>

        {/* Smart Automation */}
        <section className="sm:px-6 sm:mt-24 md:mt-32 max-w-7xl mt-16 mr-auto ml-auto pr-4 pl-4 relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]" id="automation">
          <div className="max-w-7xl mr-auto ml-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Diagram */}
              <div 
                className="bg-gradient-to-br from-[#0f081c] to-[#0a0514] border border-purple-500/10 rounded-[36px] pt-5 pr-5 pb-5 pl-5 relative" 
              >
                <article 
                  className="group relative overflow-hidden transition-shadow hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] bg-black/40 border-purple-500/20 border rounded-3xl shadow-xl"
                  style={{ "--fx-filter": "blur(12px) liquid-glass(2, 10) saturate(1.25)" }}
                >
                  <div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-semibold tracking-tight text-white font-jakarta">Intelligent Automation</h3>
                      <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-purple-200 bg-purple-500/10 border border-purple-500/20 rounded-full px-2.5 py-1 backdrop-blur-sm font-geist">
                        <iconify-icon icon="solar:cpu-bolt-linear" class="text-purple-400 h-4 w-4"></iconify-icon>
                        Fully Scriptable
                      </span>
                    </div>

                    {/* Illustration (Discord Interface Mockup) */}
                    <div 
                      className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-[#313338]/80 to-[#2b2d31]/80 ring-1 ring-inset ring-white/5 mb-8 overflow-hidden"
                      style={{ "--fx-filter": "blur(6px) liquid-glass(1.5, 8) saturate(1.1)" }}
                    >
                      {/* Sidebar */}
                      <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#1e1f22] border-r border-white/5 flex flex-col items-center py-4 gap-3">
                        <div className="w-10 h-10 rounded-[16px] bg-[#5865F2] flex items-center justify-center cursor-pointer transition-all hover:rounded-xl">
                          <iconify-icon icon="simple-icons:discord" class="text-white w-6 h-6"></iconify-icon>
                        </div>
                        <div className="w-8 h-[2px] bg-white/10 rounded-full my-1"></div>
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center relative cursor-pointer hover:rounded-xl transition-all">
                           <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r-full"></div>
                           <iconify-icon icon="solar:ghost-bold" class="text-purple-400 w-5 h-5"></iconify-icon>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:rounded-xl hover:bg-purple-500/40 transition-all">
                           <iconify-icon icon="solar:server-square-bold" class="text-white/40 w-5 h-5"></iconify-icon>
                        </div>
                      </div>

                      {/* Channel List */}
                      <div className="absolute left-16 top-0 bottom-0 w-[30%] bg-[#2b2d31] border-r border-white/5">
                        <div className="px-4 py-4 shadow-sm">
                           <div className="h-4 w-24 bg-white/10 rounded"></div>
                        </div>
                        <div className="p-2 space-y-1">
                          <div className="flex items-center gap-2 px-2 py-1.5 bg-[#404249] rounded-md">
                            <iconify-icon icon="solar:hashtag-bold" class="text-white/40 w-4 h-4"></iconify-icon>
                            <div className="h-2 w-16 bg-white/40 rounded"></div>
                          </div>
                          <div className="flex items-center gap-2 px-2 py-1.5 opacity-60">
                            <iconify-icon icon="solar:hashtag-bold" class="text-white/40 w-4 h-4"></iconify-icon>
                            <div className="h-2 w-20 bg-white/40 rounded"></div>
                          </div>
                        </div>
                      </div>

                      {/* Chat Area Mockup representing bot action */}
                      <div className="absolute left-[calc(16px+30%)] right-0 top-0 bottom-0 flex flex-col">
                        <div className="h-12 border-b border-white/5 px-4 flex items-center shadow-sm">
                           <iconify-icon icon="solar:hashtag-bold" class="text-white/40 w-5 h-5 mr-2"></iconify-icon>
                           <div className="h-3 w-20 bg-white/20 rounded"></div>
                        </div>
                        <div className="flex-1 p-4 flex flex-col justify-end space-y-4">
                           {/* User message */}
                           <div className="flex gap-3">
                             <div className="w-8 h-8 rounded-full bg-blue-500/20 shrink-0"></div>
                             <div>
                               <div className="flex items-baseline gap-2 mb-1">
                                 <div className="h-3 w-16 bg-white/40 rounded"></div>
                                 <div className="h-2 w-10 bg-white/20 rounded"></div>
                               </div>
                               <div className="h-2 w-32 bg-white/20 rounded mb-1"></div>
                             </div>
                           </div>
                           
                           {/* Bot Auto-reply */}
                           <div className="flex gap-3 relative">
                             <div className="absolute -left-12 top-1 bottom-0 w-8 border-l-2 border-t-2 border-purple-500/30 rounded-tl-lg"></div>
                             <div className="w-8 h-8 rounded-full bg-purple-500 shrink-0 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                               <iconify-icon icon="solar:ghost-bold" class="text-white w-4 h-4"></iconify-icon>
                             </div>
                             <div className="w-full">
                               <div className="flex items-baseline gap-2 mb-1">
                                 <div className="h-3 w-20 bg-purple-400 rounded"></div>
                                 <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1 rounded uppercase tracking-wider border border-purple-500/30">Auto</span>
                               </div>
                               <div className="p-2 rounded-md bg-[#2b2d31] border border-white/5 w-3/4">
                                  <div className="h-2 w-full bg-white/30 rounded mb-1.5"></div>
                                  <div className="h-2 w-4/5 bg-white/30 rounded mb-1.5"></div>
                                  <div className="h-2 w-1/2 bg-white/30 rounded"></div>
                               </div>
                             </div>
                           </div>
                        </div>
                        <div className="h-14 px-4 pb-4">
                           <div className="w-full h-full bg-[#383a40] rounded-lg border border-white/5 flex items-center px-3">
                             <div className="w-4 h-4 rounded-full bg-white/20 mr-2"></div>
                             <div className="h-2 w-32 bg-white/10 rounded"></div>
                           </div>
                        </div>
                      </div>

                      {/* Rain Overlay UI */}
                      <div 
                        className="absolute right-4 bottom-20 w-48 rounded-xl bg-[#0a0514]/80 border border-purple-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden"
                        style={{ "--fx-filter": "blur(8px) liquid-glass(2, 10) saturate(1.2)" }}
                      >
                        <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-purple-500/20">
                          <span className="text-[10px] sm:text-xs tracking-widest text-purple-200 font-geist font-semibold">RAIN ACTIVE</span>
                          <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                        </div>
                        <div className="p-2 space-y-1">
                          <div className="flex items-center justify-between px-2 py-1.5 bg-white/5 rounded">
                            <span className="text-xs text-white/80 font-geist">Auto-Responder</span>
                            <iconify-icon icon="solar:check-circle-bold" class="text-purple-400 w-3 h-3"></iconify-icon>
                          </div>
                          <div className="flex items-center justify-between px-2 py-1.5 bg-white/5 rounded">
                            <span className="text-xs text-white/80 font-geist">Status Rotator</span>
                            <iconify-icon icon="solar:check-circle-bold" class="text-purple-400 w-3 h-3"></iconify-icon>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-x-6 gap-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white tracking-tight font-jakarta">Custom Triggers</h4>
                        <p className="mt-2 text-sm text-white/60 font-geist">Set up complex regex patterns to automatically reply to specific users, words, or in specific channels.</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold tracking-tight text-white font-jakarta">Macro Recording</h4>
                        <p className="mt-2 text-sm text-white/60 font-geist">Record actions and replay them at variable speeds for effortless server administration.</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-purple-300 hover:text-purple-200 font-geist transition-colors">
                        View all automation features
                        <iconify-icon icon="solar:arrow-right-linear" class="h-4 w-4"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              {/* Copy & stats */}
              <div>
                <div className="tech-content">
                  <h3 className="sm:text-5xl transition-colors duration-500 text-4xl font-medium text-white tracking-tight font-jakarta">Work smarter, not harder on Discord</h3>

                  <div className="mt-8">
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-lg font-semibold text-white mb-4 font-jakarta">Core Toolset</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mt-0.5">
                            <iconify-icon icon="solar:programming-linear" class="text-purple-400 w-4 h-4"></iconify-icon>
                          </div>
                          <div>
                            <h5 className="font-medium text-white font-geist">Advanced Scripting API</h5>
                            <p className="text-sm text-white/60 mt-1 font-geist">Write custom scripts in JS/Python to interact directly with the Discord API through your user account.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5">
                            <iconify-icon icon="solar:shield-warning-linear" class="text-blue-400 w-4 h-4"></iconify-icon>
                          </div>
                          <div>
                            <h5 className="font-medium text-white font-geist">Anti-Ban & Rate Limit Evasion</h5>
                            <p className="text-sm text-white/60 mt-1 font-geist">Built-in humanization algorithms add random delays and typing indicators to keep your account safe.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl tracking-tight font-jakarta font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">0%</span>
                        </div>
                        <p className="text-xs text-white/60 font-geist">Ban rate when using recommended settings</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl tracking-tight font-jakarta font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">500+</span>
                        </div>
                        <p className="text-xs text-white/60 font-geist">Community scripts available in the hub</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-8">
                  <a href="#pricing" className="inline-flex items-center justify-center gap-2 h-10 hover:bg-purple-600/90 transition text-sm font-medium text-white bg-purple-600 rounded-full px-5 font-geist shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                    Get Access
                    <iconify-icon icon="solar:arrow-right-linear" class="h-4 w-4"></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase Grid Section */}
        <section className="md:mt-32 max-w-7xl mt-24 mr-auto ml-auto pr-6 pl-6 relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]" id="features">
          <div 
            className="overflow-hidden sm:p-8 border-gradient bg-white/5 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative"
            style={{ "--fx-filter": "blur(12px) liquid-glass(2, 10) saturate(1.2)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
              <div className="grid grid-cols-2 order-1 lg:order-2 relative gap-x-4 gap-y-4">
                <article className="group overflow-hidden aspect-[4/3] bg-center transition-transform duration-300 hover:scale-[1.02] bg-cover border-white/10 rounded-2xl relative border-gradient shadow-lg">
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" alt="Cyber security code" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />
                  <div className="transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-b from-purple-900/40 via-black/40 to-black/90 absolute inset-0"></div>
                  <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-purple-500/20 border-purple-500/30 border rounded-full py-1.5 px-1.5 backdrop-blur shadow-[0_0_10px_rgba(147,51,234,0.3)]">
                      <iconify-icon icon="solar:widget-add-linear" class="h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-flex items-center gap-2 text-xs text-purple-200 bg-purple-500/20 border-purple-500/30 border rounded-full py-1.5 px-3 backdrop-blur font-geist">Multi-Token</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Manage 100+ Accounts</p>
                  </div>
                </article>

                <article className="group relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl transition-transform duration-300 hover:scale-[1.02] border-gradient shadow-lg">
                  <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80" alt="Matrix code" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/40 to-black/90 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-blue-500/20 border-blue-500/30 border rounded-full py-1.5 px-1.5 backdrop-blur shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <iconify-icon icon="solar:ghost-linear" class="w-4 h-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-flex items-center gap-2 text-xs text-blue-200 bg-blue-500/20 border-blue-500/30 border rounded-full py-1.5 px-3 backdrop-blur font-geist">Stealth Mode</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Undetectable by Discord</p>
                  </div>
                </article>

                <article className="group relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl transition-transform duration-300 hover:scale-[1.02] border-gradient shadow-lg">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Data Analytics" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black/40 to-black/90 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-purple-500/20 border-purple-500/30 border rounded-full py-1.5 px-1.5 backdrop-blur shadow-[0_0_10px_rgba(147,51,234,0.3)]">
                      <iconify-icon icon="solar:database-linear" class="w-4 h-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-flex items-center gap-2 text-xs text-purple-200 bg-purple-500/20 border-purple-500/30 border rounded-full py-1.5 px-3 backdrop-blur font-geist">Scraping</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Export Server Members</p>
                  </div>
                </article>

                <article className="group relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl transition-transform duration-300 hover:scale-[1.02] border-gradient shadow-lg">
                  <img src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&q=80" alt="Neon lights speed" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/40 to-black/90 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-blue-500/20 border-blue-500/30 border rounded-full py-1.5 px-1.5 backdrop-blur shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <iconify-icon icon="solar:bolt-linear" class="h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-flex items-center gap-2 text-xs text-blue-200 bg-blue-500/20 border-blue-500/30 border rounded-full py-1.5 px-3 backdrop-blur font-geist">Speed</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Rust-powered Backend</p>
                  </div>
                </article>
              </div>

              <div className="flex flex-col min-h-full justify-between order-2 lg:order-1">
                <div>
                  <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase tracking-widest font-geist">Capabilities</span>
                  <h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2 font-jakarta font-medium">
                    Built for power users.
                  </h2>
                  <div className="mt-8 relative">
                    <div className="hidden sm:flex flex-col gap-4 relative text-white/70 bg-transparent pr-4 pl-4">
                      <div className="relative">
                        <div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500"></div>
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-4 h-4 z-10 relative bg-[#0a0514] border-purple-500 border-2 rounded-full mt-0.5 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          </div>
                          <div className="flex-1 pb-6">
                            <span className="text-sm font-medium text-purple-300 font-geist">Mass DM Automation</span>
                            <p className="text-xs text-white/50 mt-1 font-geist">Safely message members with intelligent delay algorithms</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-cyan-500"></div>
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-indigo-500 bg-[#0a0514] z-10 relative mt-0.5 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                          </div>
                          <div className="flex-1 pb-6">
                            <span className="text-sm font-medium text-indigo-300 font-geist">Server Cloning</span>
                            <p className="text-xs text-white/50 mt-1 font-geist">Copy entire server layouts, roles, and permissions instantly</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-blue-500 bg-[#0a0514] z-10 relative mt-0.5 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-blue-300 font-geist">Rich Presence Control</span>
                            <p className="text-xs text-white/50 mt-1 font-geist">Custom status, playing status, and streaming activity rotating</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-10">
                  <div>
                    <p className="text-sm font-medium text-white tracking-tight font-geist">Unmatched Performance</p>
                    <p className="text-sm text-white/70 mt-1 max-w-sm font-geist">
                      Rain is optimized to run locally with minimal resource usage, allowing you to run dozens of accounts simultaneously.
                    </p>
                    <a href="#pricing" className="inline-flex items-center justify-center gap-2 h-10 hover:bg-white/10 border border-white/10 transition text-sm font-normal text-white bg-white/5 rounded-full mt-4 px-5 max-w-sm font-geist backdrop-blur-sm">
                      View all capabilities
                      <iconify-icon icon="solar:alt-arrow-right-linear" class="h-4 w-4"></iconify-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24 md:mt-32 relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]" id="pricing">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-medium text-white tracking-tighter">Choose your power.</h2>
            <p className="mt-4 text-white/60 font-geist text-lg max-w-xl mx-auto">Get access to the most advanced Discord selfbot available. No hidden fees, instant delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto relative z-10">
            {/* Standard Tier */}
            <div 
              className="border-gradient bg-white/5 rounded-[2rem] p-8 relative h-full flex flex-col hover:bg-white/10 transition-colors"
              style={{ "--fx-filter": "blur(12px) liquid-glass(2, 10) saturate(1.2)" }}
            >
              <h3 className="text-xl font-medium text-white font-jakarta">Monthly</h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold text-white font-jakarta tracking-tighter">
                $4<span className="text-4xl text-white/80">.99</span>
                <span className="text-lg text-white/40 font-medium ml-1">/mo</span>
              </div>
              <p className="text-sm text-white/60 mt-4 font-geist">Perfect for individuals wanting to test the waters and automate a single account.</p>
              
              <ul className="mt-8 mb-8 space-y-4 flex-1">
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-purple-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white/80 font-geist">1 Active Token</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-purple-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white/80 font-geist">Basic Automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-purple-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white/80 font-geist">Community Support</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <iconify-icon icon="solar:close-circle-bold" class="text-white/40 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white/80 font-geist line-through">Mass DM Scripts</span>
                </li>
              </ul>
              
              <a href="#" className="w-full block text-center py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10 font-geist">
                Subscribe Monthly
              </a>
            </div>

            {/* Lifetime Tier (Highlighted) */}
            <div 
              className="bg-gradient-to-b from-purple-900/40 to-blue-900/20 border border-purple-500/40 rounded-[2rem] p-8 relative md:-mt-6 md:-mb-6 shadow-[0_0_50px_rgba(147,51,234,0.2)] h-full flex flex-col z-10 transform md:scale-105"
              style={{ "--fx-filter": "blur(16px) liquid-glass(3, 12) saturate(1.3)" }}
            >
              <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Most Popular</span>
              </div>
              <h3 className="text-xl font-medium text-purple-200 font-jakarta">Lifetime Access</h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold text-white font-jakarta tracking-tighter drop-shadow-md">
                $29<span className="text-4xl text-white/80">.99</span>
                <span className="text-lg text-white/40 font-medium ml-1">one-time</span>
              </div>
              <p className="text-sm text-purple-100/70 mt-4 font-geist">The ultimate package for power users. Pay once, own it forever with free updates.</p>
              
              <ul className="mt-8 mb-8 space-y-4 flex-1">
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-purple-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white font-geist">Unlimited Tokens</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-purple-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white font-geist">All Premium Modules</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-purple-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white font-geist">Mass DM & Scraper</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-purple-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white font-geist">Priority Support</span>
                </li>
              </ul>
              
              <a href="#" className="w-full block text-center py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white text-sm font-medium transition-all font-geist shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                Purchase Lifetime
              </a>
            </div>

            {/* Source Code Tier */}
            <div 
              className="border-gradient bg-white/5 rounded-[2rem] p-8 relative h-full flex flex-col hover:bg-white/10 transition-colors"
              style={{ "--fx-filter": "blur(12px) liquid-glass(2, 10) saturate(1.2)" }}
            >
              <h3 className="text-xl font-medium text-white font-jakarta">Source Code</h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold text-white font-jakarta tracking-tighter">
                $99<span className="text-4xl text-white/80">.99</span>
                <span className="text-lg text-white/40 font-medium ml-1">one-time</span>
              </div>
              <p className="text-sm text-white/60 mt-4 font-geist">For developers wanting to build upon Rain or customize it entirely to their needs.</p>
              
              <ul className="mt-8 mb-8 space-y-4 flex-1">
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-blue-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white/80 font-geist">Full Rust/React Source</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-blue-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white/80 font-geist">Resell Rights (Modified)</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-blue-400 w-5 h-5 shrink-0"></iconify-icon>
                  <span className="text-sm text-white/80 font-geist">Developer Documentation</span>
                </li>
              </ul>
              
              <a href="#" className="w-full block text-center py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10 font-geist">
                Buy Source
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24 md:mt-32 relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]" id="testimonials">
          <div 
            className="sm:p-6 md:p-8 border-gradient bg-white/5 rounded-2xl sm:rounded-3xl p-4 relative"
            style={{ "--fx-filter": "blur(16px) liquid-glass(2, 10) saturate(1.2)" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:px-0 px-1 items-start sm:items-center">
              <h2 className="text-3xl sm:text-[44px] md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white tracking-tighter font-jakarta font-medium">Reviews.</h2>
              <span aria-hidden="true" role="separator" aria-orientation="vertical" className="hidden sm:block w-px bg-white/20 h-10"></span>
              <p className="text-sm sm:text-base text-white/60 sm:mt-1 tracking-tight font-geist">See what power users are saying about Rain.</p>
            </div>
            <div className="h-px bg-white/20 mt-3 sm:mt-4"></div>

            <div className="relative mt-6 sm:mt-8">
              <div 
                className="overflow-hidden h-[320px] sm:h-[380px] md:h-[420px] rounded-2xl sm:rounded-3xl relative" 
                style={{ 
                  maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)', 
                  WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)' 
                }}
              >
                
                <div 
                  className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-4 sm:px-6 absolute top-0 right-0 bottom-0 left-0 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 items-center" 
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
                  id="testimonial-rail"
                  ref={railRef}
                  onScroll={checkScroll}
                >
                  <article className="min-w-[300px] sm:min-w-[420px] md:min-w-[520px] max-w-[640px] bg-black/40 border border-purple-500/20 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-white backdrop-blur-sm snap-center -rotate-2 shadow-2xl flex-shrink-0 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <iconify-icon icon="solar:quote-right-bold" class="w-20 h-20 text-purple-400"></iconify-icon>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-tighter font-jakarta font-medium relative z-10">
                      "I've tried every selfbot out there. Rain is the only one where none of my tokens have been disabled. The stealth mode is genuinely insane."
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-purple-900 flex items-center justify-center shrink-0">
                        <iconify-icon icon="solar:user-bold-duotone" class="text-purple-300 w-6 h-6"></iconify-icon>
                      </div>
                      <div>
                        <div className="text-sm tracking-tight font-geist text-purple-200">@cipher_x</div>
                        <div className="text-xs text-white/50 tracking-tight font-geist">Server Owner (50k+ Members)</div>
                      </div>
                    </div>
                  </article>

                  <article className="min-w-[300px] sm:min-w-[420px] md:min-w-[520px] max-w-[640px] bg-black/40 border border-blue-500/20 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-white backdrop-blur-sm snap-center rotate-1 shadow-2xl flex-shrink-0 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-10">
                      <iconify-icon icon="solar:quote-right-bold" class="w-20 h-20 text-blue-400"></iconify-icon>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-tighter font-jakarta font-medium relative z-10">
                      "The scripting API let me build a completely custom cross-server bridge in under an hour. Best $30 I've ever spent."
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center shrink-0">
                        <iconify-icon icon="solar:code-bold-duotone" class="text-blue-300 w-6 h-6"></iconify-icon>
                      </div>
                      <div>
                        <div className="text-sm tracking-tight font-geist text-blue-200">@dev_null</div>
                        <div className="text-xs text-white/50 tracking-tight font-geist">Developer</div>
                      </div>
                    </div>
                  </article>

                  <article className="min-w-[300px] sm:min-w-[420px] md:min-w-[520px] max-w-[640px] bg-black/40 border border-purple-500/20 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-white backdrop-blur-sm snap-center -rotate-1 shadow-2xl flex-shrink-0 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-10">
                      <iconify-icon icon="solar:quote-right-bold" class="w-20 h-20 text-purple-400"></iconify-icon>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-tighter font-jakarta font-medium relative z-10">
                      "Mass DM works flawlessly. It handles rate limits perfectly automatically, I just load my list and let it run overnight."
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-purple-900 flex items-center justify-center shrink-0">
                        <iconify-icon icon="solar:letter-bold-duotone" class="text-purple-300 w-6 h-6"></iconify-icon>
                      </div>
                      <div>
                        <div className="text-sm tracking-tight font-geist text-purple-200">@marketer_pro</div>
                        <div className="text-xs text-white/50 tracking-tight font-geist">Agency Owner</div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 flex items-center gap-2 sm:gap-3">
                  <button 
                    aria-label="Previous" 
                    className="hover:bg-purple-500/30 transition-colors inline-flex text-purple-200 bg-purple-500/10 w-9 h-9 sm:w-10 sm:h-10 border-purple-500/30 border rounded-full items-center justify-center backdrop-blur-sm"
                    onClick={() => scroll(-1)}
                    style={{ opacity: canScrollLeft ? 1 : 0.5, pointerEvents: canScrollLeft ? 'auto' : 'none' }}
                  >
                    <iconify-icon icon="solar:arrow-left-linear" class="w-4 h-4 sm:w-5 sm:h-5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                  </button>
                  <button 
                    aria-label="Next" 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white bg-purple-600 hover:bg-purple-500 transition-colors inline-flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                    onClick={() => scroll(1)}
                    style={{ opacity: canScrollRight ? 1 : 0.5, pointerEvents: canScrollRight ? 'auto' : 'none' }}
                  >
                    <iconify-icon icon="solar:arrow-right-linear" class="w-4 h-4 sm:w-5 sm:h-5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Hero Section */}
        <section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative z-10 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/15 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-purple-300 font-geist shadow-[0_0_15px_rgba(147,51,234,0.15)]">Global Network</span>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter font-jakarta font-medium text-white drop-shadow-md">
              Join 10,000+ power users from 180+ countries
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-white/70 font-geist max-w-2xl mx-auto">
              Connect with server owners, agency founders, and automation enthusiasts pushing the boundaries of Discord.
            </p>
            <div className="mt-6 sm:mt-8">
              <a href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:opacity-90 transition-all font-geist">
                Join the Network
                <iconify-icon icon="solar:arrow-right-linear" class="w-4 h-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
              </a>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16">
            <div className="mx-auto max-w-6xl overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'destination-in'
              }}>
              <div className="flex w-max" style={{ animation: 'marquee-left 80s linear infinite', willChange: 'transform' }}>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 flex-shrink-0 pr-3 sm:pr-4">
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/31996fe3-f9da-42d7-bf65-2cc5d5417271_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5989c16d-4aa3-4351-bfdb-fac959736459_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c39c735-18f1-4b74-aa61-180fbb2b4770_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg" alt="Community member" style={{ outline: 'rgb(147, 51, 234) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out' }} /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8701b7a-a3f2-4ad0-95be-f2f027c8e390_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg" alt="Community member" /></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 flex-shrink-0 pr-3 sm:pr-4">
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a421cf7-e975-430b-88c5-f554775493e1_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0c82a12e-5af1-47d3-963d-65c3987dd2be_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e63aa468-ae44-4756-84db-fcacd6cec9e2_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg" alt="Community member" style={{ outline: 'rgb(147, 51, 234) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out' }} /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a160135e-dfe8-4d26-b2e5-2915ebe6f3a2_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a3ff98a-df58-478d-a4ae-f3c6d3f3ba61_800w.jpg" alt="Community member" /></div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7063bc06-62fe-4811-b5fa-4b1e09b26a81_800w.jpg" alt="Community member" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 mt-12 md:mt-16 relative mb-24 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
          <div 
            className="border-gradient overflow-hidden bg-white/5 rounded-3xl pt-12 pr-12 pb-12 pl-12 relative"
            style={{ "--fx-filter": "blur(12px) liquid-glass(2, 10) saturate(1.25)" }}
          >
            <div className="opacity-40 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80')] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 mix-blend-screen"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-200 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.2)]">
                <iconify-icon icon="solar:rocket-linear" class="h-3.5 w-3.5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                <span className="font-geist">Instant Delivery</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4 font-jakarta font-medium drop-shadow-md">
                Ready to dominate Discord?
              </h2>
              <p className="text-purple-100/70 text-lg mb-8 font-geist max-w-xl mx-auto">
                Join thousands of power users who automate their accounts with Rain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a href="#pricing" className="inline-flex items-center rounded-full bg-white text-black px-8 py-3 text-sm font-bold hover:bg-purple-100 transition-colors font-geist shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Purchase Now
                  <iconify-icon icon="solar:cart-large-2-bold" class="ml-2 h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
                </a>
                <a href="#" className="border border-purple-500/30 inline-flex items-center gap-2 rounded-full bg-black/40 px-8 py-3 text-sm text-white hover:bg-purple-500/20 transition-colors font-medium backdrop-blur-md font-geist">
                  <iconify-icon icon="simple-icons:discord" class="h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
                  Join Support Server
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-7xl px-6 relative mb-12">
          <div className="py-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <a href="#" className="flex items-center gap-2 mb-4">
                  <iconify-icon icon="solar:cloud-waterfall-bold-duotone" class="text-purple-500 w-6 h-6"></iconify-icon>
                  <div className="text-xl font-bold tracking-tighter font-jakarta">RAIN</div>
                </a>
                <p className="text-sm text-white/50 font-geist">The ultimate Discord selfbot for power users. Automate everything.</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white mb-3 font-geist">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">Features</a></li>
                  <li><a href="#pricing" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">Pricing</a></li>
                  <li><a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">Script Hub</a></li>
                  <li><a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">Documentation</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white mb-3 font-geist">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">Discord Server</a></li>
                  <li><a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">API Reference</a></li>
                  <li><a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">Tutorials</a></li>
                  <li><a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white mb-3 font-geist">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">Terms of Service</a></li>
                  <li><a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors font-geist">Refund Policy</a></li>
                  <p className="text-[10px] text-white/30 mt-4 leading-tight font-geist">Not affiliated with or endorsed by Discord Inc. Use at your own risk.</p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10">
              <p className="text-sm text-white/40 font-geist">© 2025 Rain Selfbot. All rights reserved.</p>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
                  <iconify-icon icon="simple-icons:x" class="w-5 h-5"></iconify-icon>
                </a>
                <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
                  <iconify-icon icon="simple-icons:github" class="w-5 h-5"></iconify-icon>
                </a>
                <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
                  <iconify-icon icon="simple-icons:discord" class="w-5 h-5"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </SharedShell>
  );
}