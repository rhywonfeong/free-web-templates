import React from 'react';

export default function App() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#111111]/70 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 text-white">
              <iconify-icon icon="solar:microphone-2-linear" className="text-xl" style={{ strokeWidth: 1.5 }}></iconify-icon>
              <span className="text-lg font-semibold tracking-tighter uppercase">AMONG THE MAKERS</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            <a href="#about" className="text-sm font-medium leading-6 text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#episodes" className="text-sm font-medium leading-6 text-zinc-400 hover:text-white transition-colors">Episodes</a>
            <a href="#blog" className="text-sm font-medium leading-6 text-zinc-400 hover:text-white transition-colors">Blog</a>
            <a href="#contact" className="text-sm font-medium leading-6 text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-medium leading-6 text-zinc-900 bg-[#EBE9E1] px-4 py-2 rounded-full hover:bg-white transition-colors inline-flex items-center gap-2">
              Subscribe <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: 1.5 }}></iconify-icon>
            </a>
          </div>
          {/* Mobile menu button (visual only) */}
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400">
              <iconify-icon icon="solar:hamburger-menu-linear" className="text-2xl"></iconify-icon>
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden glow-bg">
          <div className="sm:pb-32 lg:flex lg:px-8 lg:py-40 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 items-center">
            {/* Background Image overlay positioned relative to parent section */}
            <div className="absolute inset-0 -z-10">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b8f6b7c-9c72-4eb4-83da-7219bb8dcf5a_1600w.png" 
                alt="Podcast Studio" 
                className="h-full w-full object-cover opacity-60 grayscale" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-[#111111]/30"></div>
            </div>

            <div className="lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 max-w-2xl mr-auto ml-auto">
              <div className="mt-24 sm:mt-32 lg:mt-16 text-center lg:text-left">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-[#C9A96E]/10 px-3 py-1 text-xs font-medium leading-6 text-[#C9A96E] ring-1 ring-inset ring-[#C9A96E]/20">Latest Episode</span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-zinc-400">
                    <span>EP 01: Sarah Chen</span>
                    <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-semibold tracking-tighter text-white sm:text-6xl text-center lg:text-left">
                Among The Makers
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-400 text-center lg:text-left max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
                Real conversations with people who build their own path. Founders. Developers. Career switchers. Expats. Technologists. Misfits with a plan. This is a podcast about all of them — and the mindset they share. Hosted by Francois Coertze from Mallorca, Spain.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <a href="#episodes" className="rounded-full bg-[#EBE9E1] px-6 py-3 text-sm font-medium text-zinc-950 shadow-sm hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white inline-flex items-center gap-2">
                  <iconify-icon icon="solar:play-linear" className="text-lg"></iconify-icon>
                  Listen Now
                </a>
                <a href="#blog" className="text-sm font-medium leading-6 text-white hover:text-zinc-300 transition-colors">
                  Read the blog <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            
            {/* Player Mockup */}
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none w-[90vw] sm:w-[500px]">
                <div className="rounded-2xl bg-[#333333]/40 p-6 ring-1 ring-white/10 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center gap-6">
                    <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-[#C9A96E]/20 to-zinc-800/20 border border-white/5 flex items-center justify-center flex-shrink-0 bg-black/20">
                      <iconify-icon icon="solar:soundwave-linear" className="text-4xl text-[#C9A96E]/70"></iconify-icon>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white mb-1">From Corporate Law to Bootstrapping a Tech Startup</h3>
                      <p className="text-sm text-zinc-400 mb-3">EP 01: Sarah Chen</p>
                      <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
                        <span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 55 min</span>
                        <span>•</span>
                        <span>Out Now</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-4">
                    <button className="h-12 w-12 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:scale-105 transition-transform">
                      <iconify-icon icon="solar:play-linear" className="text-xl ml-1"></iconify-icon>
                    </button>
                    {/* Fake Waveform */}
                    <div className="flex-1 flex items-center gap-[2px] h-8 opacity-70">
                      <div className="w-1 bg-zinc-600 rounded-full h-2"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-4"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-6"></div>
                      <div className="w-1 bg-[#C9A96E] rounded-full h-8"></div>
                      <div className="w-1 bg-[#C9A96E] rounded-full h-5"></div>
                      <div className="w-1 bg-[#C9A96E] rounded-full h-7"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-3"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-6"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-4"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-8"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-5"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-2"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-7"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-4"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-6 hidden sm:block"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-3 hidden sm:block"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-8 hidden sm:block"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-5 hidden sm:block"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-2 hidden sm:block"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-6 hidden sm:block"></div>
                      <div className="w-1 bg-zinc-600 rounded-full h-4 hidden sm:block"></div>
                    </div>
                    <span className="text-xs font-medium text-zinc-400 font-mono w-10 text-right drop-shadow-md">00:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories We Tell Ticker */}
        <section className="border-y border-white/5 bg-white/[0.01] py-4 overflow-hidden relative flex items-center">
          <div className="absolute left-0 z-10 w-24 h-full bg-gradient-to-r from-[#111111] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 z-10 w-24 h-full bg-gradient-to-l from-[#111111] to-transparent pointer-events-none"></div>
          
          <div className="flex items-center gap-8 pl-6 pr-12 text-sm font-medium tracking-wide text-zinc-500 uppercase flex-shrink-0 border-r border-white/10 mr-8">
            Stories We Tell
          </div>
          
          <div className="flex w-[200%] animate-ticker">
            <div className="flex w-1/2 justify-around items-center gap-16 px-8 text-[#D4CFC4] font-medium">
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Founding Stories</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Lives Built Abroad</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Career Reinvention</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Building with Tech</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Property & Place</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Starting from Nothing</span>
            </div>
            <div className="flex w-1/2 justify-around items-center gap-16 px-8 text-[#D4CFC4] font-medium">
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Founding Stories</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Lives Built Abroad</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Career Reinvention</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Building with Tech</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Property & Place</span>
              <span className="whitespace-nowrap flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></div> Starting from Nothing</span>
            </div>
          </div>
        </section>

        {/* What Makes This Show Different */}
        <section className="py-24 border-b border-white/5 bg-[#333333]/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-white">What Makes This Show Different</h2>
              <p className="mt-4 text-lg text-zinc-400">Most podcasts pick a lane — business, tech, or real estate. This one doesn't. Among The Makers follows a mindset, not an industry. The host isn't a journalist asking questions from a script. He's a builder who's been in the same rooms, made the same bets, and broken the same things. That changes every conversation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center lg:text-left">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] mb-6 mx-auto lg:mx-0">
                  <iconify-icon icon="solar:users-group-two-rounded-linear" className="text-2xl"></iconify-icon>
                </div>
                <h3 className="text-lg font-medium text-white tracking-tight mb-3">Peer-to-Peer</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">No interviewer. No guest. Just two builders pulling up chairs, comparing notes, and getting honest about what it actually takes.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] mb-6 mx-auto lg:mx-0">
                  <iconify-icon icon="solar:branching-paths-up-linear" className="text-2xl"></iconify-icon>
                </div>
                <h3 className="text-lg font-medium text-white tracking-tight mb-3">Cross-Domain</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Business. Property. Tech. Careers. Expat life. The common thread isn't the industry — it's the person behind it. If they built it on their own terms, they belong here.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] mb-6 mx-auto lg:mx-0">
                  <iconify-icon icon="solar:microphone-3-linear" className="text-2xl"></iconify-icon>
                </div>
                <h3 className="text-lg font-medium text-white tracking-tight mb-3">Unscripted</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">No scripts. No polished soundbites. Just honest conversations about what worked, what broke, and what they'd do differently next time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Episodes Grid */}
        <section className="sm:py-32 pt-24 pb-24" id="episodes">
          <div className="lg:px-8 isolate max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="mx-auto max-w-2xl text-center mb-16 relative z-10">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Latest Episodes</h2>
              <p className="mt-4 text-lg text-zinc-400">Our newest conversations. Each one is a window into how a different builder thinks, decides, and creates.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {/* Episode Card 1 */}
              <div className="group relative rounded-2xl bg-[#333333]/40 backdrop-blur-sm p-2 ring-1 ring-white/10 hover:ring-white/30 hover:bg-[#333333]/60 transition-all duration-300 shadow-xl">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#333333] to-[#111111] mb-4">
                  <div className="w-full h-full flex items-center justify-center text-zinc-700">
                    <iconify-icon icon="solar:user-linear" className="text-4xl"></iconify-icon>
                  </div>
                </div>
                <div className="px-2 pb-4">
                  <h3 className="text-lg font-medium text-white tracking-tight">EP 01: Sarah Chen</h3>
                  <p className="text-sm text-zinc-500 mt-1 mb-4">From Corporate Law to Bootstrapping a Tech Startup in Lisbon</p>
                  <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A96E] hover:text-[#EBE9E1] transition-colors">
                    Listen to Episode <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </a>
                </div>
              </div>
              
              {/* Episode Card 2 */}
              <div className="group relative rounded-2xl bg-[#333333]/40 backdrop-blur-sm p-2 ring-1 ring-white/10 hover:ring-white/30 hover:bg-[#333333]/60 transition-all duration-300 shadow-xl">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#333333] to-[#111111] mb-4">
                  <div className="w-full h-full flex items-center justify-center text-zinc-700">
                    <iconify-icon icon="solar:user-linear" className="text-4xl"></iconify-icon>
                  </div>
                </div>
                <div className="px-2 pb-4">
                  <h3 className="text-lg font-medium text-white tracking-tight">EP 02: Marcus de Vries</h3>
                  <p className="text-sm text-zinc-500 mt-1 mb-4">Building Affordable Housing on a Mediterranean Island</p>
                  <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A96E] hover:text-[#EBE9E1] transition-colors">
                    Listen to Episode <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </a>
                </div>
              </div>
              
              {/* Episode Card 3 */}
              <div className="group relative rounded-2xl bg-[#333333]/40 backdrop-blur-sm p-2 ring-1 ring-white/10 hover:ring-white/30 hover:bg-[#333333]/60 transition-all duration-300 shadow-xl">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#333333] to-[#111111] mb-4">
                  <div className="w-full h-full flex items-center justify-center text-zinc-700">
                    <iconify-icon icon="solar:user-linear" className="text-4xl"></iconify-icon>
                  </div>
                </div>
                <div className="px-2 pb-4">
                  <h3 className="text-lg font-medium text-white tracking-tight">EP 03: Ayesha Patel</h3>
                  <p className="text-sm text-zinc-500 mt-1 mb-4">Why She Left Big Tech and What She Built Instead</p>
                  <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A96E] hover:text-[#EBE9E1] transition-colors">
                    Listen to Episode <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </a>
                </div>
              </div>
              
              {/* Episode Card 4 */}
              <div className="group relative rounded-2xl bg-[#333333]/40 backdrop-blur-sm p-2 ring-1 ring-white/10 hover:ring-white/30 hover:bg-[#333333]/60 transition-all duration-300 shadow-xl">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#333333] to-[#111111] mb-4">
                  <div className="w-full h-full flex items-center justify-center text-zinc-700">
                    <iconify-icon icon="solar:user-linear" className="text-4xl"></iconify-icon>
                  </div>
                </div>
                <div className="px-2 pb-4">
                  <h3 className="text-lg font-medium text-white tracking-tight">Trailer</h3>
                  <p className="text-sm text-zinc-500 mt-1 mb-4">Host Francois Coertze: Welcome to Among The Makers</p>
                  <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A96E] hover:text-[#EBE9E1] transition-colors">
                    Listen to Episode <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 relative z-10">
              <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors border border-white/10 hover:border-white/30 rounded-full px-6 py-2 bg-zinc-900/50 backdrop-blur-md shadow-lg">
                See All Episodes
              </button>
            </div>
          </div>
        </section>

        {/* General Info / About */}
        <section className="border-y bg-[#333333]/20 border-white/5 pt-24 pb-24" id="about">
          <div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white mb-6">What Is Among The Makers?</h2>
                <div className="space-y-6 text-zinc-400 text-base leading-relaxed">
                  <p>Among The Makers started with a question: what does a tech founder in Berlin have in common with a property developer in Mallorca, a career switcher in Lisbon, and a bootstrapper in Cape Town?</p>
                  <p>They build things. Their own things. On their own terms.</p>
                  <p>This podcast isn't about one industry or one version of success. It's about the mindset that connects people who create — whether they're building companies, homes, careers, or entirely new lives in places they never expected to land.</p>
                  <p>The host, Francois Coertze, isn't a journalist. He's a property developer, entrepreneur, and AI consultant based in Mallorca. Every conversation starts from shared experience — not from behind a desk with a list of questions.</p>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/5 pt-10">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              
              {/* Host Image, Platform links & Quote */}
              <div className="space-y-8">
                {/* Host Image Block */}
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#111111] group shadow-xl">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" alt="Francois Coertze" className="w-full aspect-[4/3] object-cover grayscale opacity-70 group-hover:opacity-100 transition-all duration-500" />
                  <div className="bg-center bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#111111] via-[#111111]/80 to-[#111111]/50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/addb5043-e265-4064-b077-acd144b4ac2b_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white tracking-tight">Francois Coertze</h3>
                      <p className="text-sm font-medium text-[#C9A96E] mt-1">Host & Builder</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-[#C9A96E] group-hover:text-[#111111] group-hover:border-[#C9A96E] transition-colors">
                      <iconify-icon icon="solar:microphone-3-linear" className="text-lg"></iconify-icon>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#111111] p-8 ring-1 ring-white/10 shadow-xl">
                  <h3 className="text-lg font-medium text-white mb-6 tracking-tight">Listen however you like</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-[#333333]/40 hover:bg-[#333333]/80 transition-colors border border-white/5 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                          <iconify-icon icon="solar:music-note-linear" className="text-xl"></iconify-icon>
                        </div>
                        <span className="font-medium text-zinc-200">Spotify</span>
                      </div>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="text-zinc-500 group-hover:text-white transition-colors"></iconify-icon>
                    </a>
                    <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-[#333333]/40 hover:bg-[#333333]/80 transition-colors border border-white/5 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                          <iconify-icon icon="solar:podcast-linear" className="text-xl"></iconify-icon>
                        </div>
                        <span className="font-medium text-zinc-200">Apple Podcasts</span>
                      </div>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="text-zinc-500 group-hover:text-white transition-colors"></iconify-icon>
                    </a>
                    <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-[#333333]/40 hover:bg-[#333333]/80 transition-colors border border-white/5 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                          <iconify-icon icon="solar:video-frame-linear" className="text-xl"></iconify-icon>
                        </div>
                        <span className="font-medium text-zinc-200">YouTube</span>
                      </div>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="text-zinc-500 group-hover:text-white transition-colors"></iconify-icon>
                    </a>
                  </div>
                </div>

                {/* Quote Blocks */}
                <div className="space-y-4"></div>
              </div>
            </div>

            {/* Companies Carousel */}
            <div className="border-white/5 border-t mt-0 pt-12">
              <p className="text-center text-sm font-medium tracking-wide text-zinc-500 uppercase mb-8">Companies I'm involved with</p>
              <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 px-4">
                <a href="https://www.lflabs.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all cursor-pointer shrink-0 hover:scale-105">
                  <img src="https://s2.googleusercontent.com/s2/favicons?domain=lflabs.ai&sz=128" alt="LF Labs Logo" className="h-6 w-6 grayscale rounded-sm object-contain" />
                  <span className="text-2xl font-semibold tracking-tighter text-zinc-500 hover:text-zinc-300 transition-colors">LF LABS</span>
                </a>
                
                <a href="https://coertzeclacher.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all cursor-pointer shrink-0 hover:scale-105">
                  <img src="https://s2.googleusercontent.com/s2/favicons?domain=coertzeclacher.com&sz=128" alt="Coertze Clacher Logo" className="h-6 w-6 grayscale rounded-sm object-contain" />
                  <span className="text-2xl font-semibold tracking-tighter text-zinc-500 hover:text-zinc-300 transition-colors">COERTZE CLACHER</span>
                </a>
                
                <a href="https://www.p-yconsulting.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all cursor-pointer shrink-0 hover:scale-105">
                  <span className="text-2xl font-semibold tracking-tighter text-zinc-500 hover:text-zinc-300 transition-colors">P-Y CONSULTING</span>
                </a>
                
                <a href="https://zissougardens.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all cursor-pointer shrink-0 hover:scale-105">
                  <img src="https://s2.googleusercontent.com/s2/favicons?domain=zissougardens.com&sz=128" alt="Zissou Gardens Logo" className="h-6 w-6 grayscale rounded-sm object-contain" />
                  <span className="text-2xl font-semibold tracking-tighter text-zinc-500 hover:text-zinc-300 transition-colors">ZISSOU GARDENS</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Builders Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-white">Built for Builders</h2>
                <p className="mt-4 text-zinc-400 leading-relaxed">If you've ever started something from scratch, quit the safe route, moved to a new country with a suitcase and a plan, or just quietly built a life that looks nothing like the template — this show was made for you.</p>
              </div>
              <a href="#episodes" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors shrink-0">
                View episodes <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <article className="flex flex-col items-start justify-between group rounded-2xl p-6 bg-[#333333]/20 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className="relative z-10 rounded-full bg-[#111111] px-3 py-1 font-medium text-[#C9A96E] border border-white/10">Founding Stories</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-white tracking-tight">
                    Built from scratch
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">How founders actually built their businesses — the real story behind the pitch deck.</p>
                </div>
              </article>
              
              {/* Pillar 2 */}
              <article className="flex flex-col items-start justify-between group rounded-2xl p-6 bg-[#333333]/20 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className="relative z-10 rounded-full bg-[#111111] px-3 py-1 font-medium text-[#C9A96E] border border-white/10">Lives Built Abroad</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-white tracking-tight">
                    Lives built abroad
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">Expats, relocators, and people creating lives in countries they never expected to call home.</p>
                </div>
              </article>
              
              {/* Pillar 3 */}
              <article className="flex flex-col items-start justify-between group rounded-2xl p-6 bg-[#333333]/20 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className="relative z-10 rounded-full bg-[#111111] px-3 py-1 font-medium text-[#C9A96E] border border-white/10">Career Reinvention</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-white tracking-tight">
                    New paths, no map
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">People who switched careers, went self-taught, or invented roles that didn't exist before them.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Episode Blogs Section */}
        <section 
          className="bg-[#111111] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b8f6b7c-9c72-4eb4-83da-7219bb8dcf5a_1600w.png)] bg-cover bg-center border-white/5 border-t pt-24 pb-24 shadow-xl" 
          id="blog" 
          style={{
            maskImage: 'linear-gradient(180deg, transparent, black 0%, black 40%, transparent)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 40%, transparent)'
          }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-white">From the Notebook</h2>
              <p className="mt-4 text-lg text-zinc-400">The stories behind the stories. Deep dives, behind-the-scenes notes, and the things we couldn't fit into the episode.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Post 1 */}
              <article className="flex flex-col items-start justify-between group rounded-2xl p-6 bg-[#333333]/20 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time dateTime="2026-10-24" className="text-zinc-500">Oct 24, 2026</time>
                  <span className="relative z-10 rounded-full bg-[#111111] px-3 py-1 font-medium text-[#C9A96E] border border-white/10">EP 01 Deep Dive</span>
                </div>
                <div className="group relative flex-1">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      The Unspoken Reality of Leaving Corporate Law
                    </a>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400 line-clamp-3">What we didn't get to in the episode: the identity crisis that hits when you step away from a prestigious title to bootstrap a tech product from your living room in Lisbon.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#C9A96E]">
                  Read article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </div>
              </article>
              
              {/* Post 2 */}
              <article className="flex flex-col items-start justify-between group rounded-2xl p-6 bg-[#333333]/20 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time dateTime="2026-10-17" className="text-zinc-500">Oct 17, 2026</time>
                  <span className="relative z-10 rounded-full bg-[#111111] px-3 py-1 font-medium text-[#C9A96E] border border-white/10">EP 02 Deep Dive</span>
                </div>
                <div className="group relative flex-1">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Navigating Mediterranean Zoning Laws
                    </a>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400 line-clamp-3">Marcus shared his philosophy on affordable housing in the episode. Here's what he didn't talk about: the brutal, step-by-step reality of getting permits approved on an island.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#C9A96E]">
                  Read article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </div>
              </article>

              {/* Post 3 */}
              <article className="flex flex-col items-start justify-between group rounded-2xl p-6 bg-[#333333]/20 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time dateTime="2026-10-10" className="text-zinc-500">Oct 10, 2026</time>
                  <span className="relative z-10 rounded-full bg-[#111111] px-3 py-1 font-medium text-[#C9A96E] border border-white/10">EP 03 Deep Dive</span>
                </div>
                <div className="group relative flex-1">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Why Golden Handcuffs Are So Hard to Break
                    </a>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400 line-clamp-3">Ayesha's exit from Big Tech didn't happen overnight. Here's the 18-month financial and mental preparation timeline she followed before making the jump.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#C9A96E]">
                  Read article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </div>
              </article>
            </div>
            
            <div className="mt-12 text-center">
              <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors border border-white/10 rounded-full px-6 py-2 bg-zinc-900/30">
                View All Posts
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#111111] mt-auto">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <span className="text-xl font-semibold tracking-tighter uppercase text-white flex items-center gap-2">
                <iconify-icon icon="solar:microphone-2-linear"></iconify-icon>
                Among The Makers
              </span>
              <p className="text-sm leading-6 text-zinc-400 max-w-xs">
                Real conversations with people who build their own path. New episodes every week.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <iconify-icon icon="solar:camera-linear" className="text-xl"></iconify-icon>
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <span className="sr-only">X (Twitter)</span>
                  <iconify-icon icon="solar:letter-linear" className="text-xl"></iconify-icon>
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <iconify-icon icon="solar:buildings-linear" className="text-xl"></iconify-icon>
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <iconify-icon icon="solar:video-frame-linear" className="text-xl"></iconify-icon>
                </a>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-medium text-white">Links</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Home</a></li>
                    <li><a href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</a></li>
                    <li><a href="#episodes" className="text-sm text-zinc-400 hover:text-white transition-colors">Episodes</a></li>
                    <li><a href="#blog" className="text-sm text-zinc-400 hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-medium text-white">Subscribe</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Apple Podcasts</a></li>
                    <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Spotify</a></li>
                    <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">YouTube</a></li>
                    <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">RSS Feed</a></li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-white mb-6">Latest from the Notebook</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <a href="#" className="group flex flex-col">
                      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">The Unspoken Reality of Leaving Corporate Law</span>
                      <span className="text-xs text-[#C9A96E] mt-1">EP 01 Deep Dive</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex flex-col">
                      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">Navigating Mediterranean Zoning Laws</span>
                      <span className="text-xs text-[#C9A96E] mt-1">EP 02 Deep Dive</span>
                    </a>
                  </li>
                </ul>
                <a href="#blog" className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-white transition-colors mt-6">
                  Read all posts <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-xs leading-5 text-zinc-500">© 2026 Among The Makers. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#contact" className="text-xs text-zinc-500 hover:text-zinc-300">Pitch yourself as a guest</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}