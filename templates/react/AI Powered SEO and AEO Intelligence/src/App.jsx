import React from 'react';
import UnicornScene from "unicornstudio-react";
import { GlowButton } from './components/GlowButton';
import { Counter } from './components/Counter';
import { TypingCode } from './components/TypingCode';

function App() {
  return (
    <>
      <div className="spline-container absolute top-0 w-full h-[1200px] -z-10 overflow-hidden">
        <UnicornScene projectId="5lHoGfe3FLqHAGyFDn3C" className="w-full h-[900px]" />
      </div>
      
      {/* Navigation */}
      <header className="fixed top-4 left-4 right-4 z-50 fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="h-14 flex glass-effect bg-white/5 border-white/10 border rounded-full pr-3 pl-3 items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center">
                <iconify-icon icon="solar:box-linear" width="16" height="16" style={{ color: "white" }}></iconify-icon>
              </div>
              <span className="text-lg font-medium sf-pro-display">Nexus Studio</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Platform</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Solutions</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Enterprise</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Resources</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">Sign In</button>
              <button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            <button className="md:hidden p-2">
              <iconify-icon icon="solar:hamburger-menu-linear" width="20" height="20"></iconify-icon>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-full sm:px-6 lg:px-8 relative z-10 mr-auto ml-auto pt-40 pr-4 pl-4">
        <div className="max-w-4xl text-left mt-10 mb-10 justify-end">
          <div className="slide-up inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400"></div>
            <span className="text-sm font-medium">Trusted by 2M+ developers worldwide</span>
          </div>

          <h1 className="slide-up stagger-1 text-5xl sm:text-6xl lg:text-7xl sf-pro-display tracking-tight mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent font-light">
            Think different.<br />Build exceptional.
          </h1>

          <p className="slide-up stagger-2 max-w-2xl leading-relaxed text-lg font-normal text-white/60 mb-12 ml-0">
            The most advanced development platform designed for teams who refuse to compromise on quality. Every line of code, every deployment, perfected.
          </p>

          <div className="slide-up stagger-3 flex flex-col sm:flex-row gap-4 justify-start">
            <GlowButton>
              <span className="icon-box">
                <iconify-icon icon="solar:arrow-right-linear" width="24" height="24"></iconify-icon>
              </span>
              Get Started
            </GlowButton>

            <button className="hover:bg-white/30 transition-all flex gap-2 font-medium bg-[#000000] border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8 items-center">
              <iconify-icon icon="solar:monitor-smartphone-linear" width="20" height="20"></iconify-icon>
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Interactive IDE Section */}
      <section className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stagger-2 glass-effect relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 blur-in">
            {/* IDE Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                </div>
                <span className="text-sm text-white/50">Nexus Cloud IDE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 flex items-center">
                  <iconify-icon icon="solar:bolt-linear" width="12" height="12" className="mr-1"></iconify-icon>
                  Live
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              {/* File Explorer */}
              <aside className="lg:col-span-3 space-y-2">
                <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-4">Project Explorer</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <iconify-icon icon="solar:folder-linear" width="16" height="16" className="text-blue-400"></iconify-icon>
                    <span className="text-sm">nexus-app</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 pl-6 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <iconify-icon icon="solar:folder-linear" width="16" height="16" className="text-blue-400"></iconify-icon>
                    <span className="text-sm">components</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 pl-10 bg-blue-500/10 border border-blue-500/20 rounded-lg cursor-pointer">
                    <iconify-icon icon="solar:document-text-linear" width="16" height="16" className="text-orange-400"></iconify-icon>
                    <span className="text-sm text-blue-300">Dashboard.tsx</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 pl-10 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <iconify-icon icon="solar:document-text-linear" width="16" height="16" className="text-orange-400"></iconify-icon>
                    <span className="text-sm">Analytics.tsx</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 pl-6 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <iconify-icon icon="solar:folder-linear" width="16" height="16" className="text-blue-400"></iconify-icon>
                    <span className="text-sm">api</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 pl-10 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <iconify-icon icon="solar:server-square-linear" width="16" height="16" className="text-cyan-400"></iconify-icon>
                    <span className="text-sm">routes.ts</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <iconify-icon icon="solar:database-linear" width="16" height="16" className="text-purple-400"></iconify-icon>
                    <span className="text-sm">database.config</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <iconify-icon icon="solar:settings-linear" width="16" height="16" className="text-gray-400"></iconify-icon>
                    <span className="text-sm">nexus.config.json</span>
                  </div>
                </div>
              </aside>

              {/* Code Editor */}
              <main className="lg:col-span-6">
                <div className="bg-gray-950/80 border border-white/10 rounded-2xl overflow-hidden">
                  {/* Editor Tabs */}
                  <div className="flex items-center gap-1 p-2 border-b border-white/10 bg-gray-900/50">
                    <div className="flex gap-2 bg-blue-500/20 border-blue-500/30 border rounded-lg pt-2 pr-4 pb-2 pl-4 items-center">
                      <iconify-icon icon="simple-icons:react" width="12" height="12" className="text-blue-400"></iconify-icon>
                      <span className="text-xs text-blue-300">Dashboard.tsx</span>
                      <iconify-icon icon="solar:close-square-linear" width="12" height="12" className="text-white/40 hover:text-white cursor-pointer ml-1"></iconify-icon>
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-lg">
                      <iconify-icon icon="solar:add-square-linear" width="16" height="16" className="text-white/40"></iconify-icon>
                    </button>
                  </div>

                  {/* Code Content */}
                  <TypingCode />
                </div>

                {/* Project Info */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold sf-pro-display">Analytics Dashboard Pro</h3>
                    <p className="text-sm text-white/50">by Enterprise Team • Updated 3 minutes ago</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2">
                      <iconify-icon icon="solar:star-linear" width="12" height="12"></iconify-icon>
                      2.3k
                    </button>
                    <button className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2">
                      <iconify-icon icon="solar:branching-paths-up-linear" width="12" height="12"></iconify-icon>
                      Fork
                    </button>
                  </div>
                </div>
              </main>

              {/* Terminal & Output */}
              <aside className="lg:col-span-3 space-y-4">
                {/* Live Terminal */}
                <div className="bg-gray-950/80 border border-white/10 rounded-xl">
                  <div className="flex items-center justify-between p-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <iconify-icon icon="solar:terminal-linear" width="16" height="16" className="text-cyan-400"></iconify-icon>
                      <span className="text-sm font-medium">Terminal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400"></div>
                      <span className="text-xs text-cyan-400">Live</span>
                    </div>
                  </div>
                  <div className="p-3 font-mono text-xs space-y-2 h-48 overflow-y-auto">
                    <div className="text-cyan-400">→ nexus dev --hot-reload</div>
                    <div className="text-white/60">🚀 Starting Nexus development server...</div>
                    <div className="text-blue-400">✓ TypeScript compiler ready</div>
                    <div className="text-blue-400">✓ Hot module replacement enabled</div>
                    <div className="text-cyan-400">✓ Server running on https://localhost:3000</div>
                    <div className="text-purple-400">✓ GraphQL playground available</div>
                    <div className="text-yellow-400">⚡ Watching for file changes...</div>
                    <div className="text-white/40">Dashboard.tsx compiled in 847ms</div>
                    <div className="text-cyan-400">→ nexus test --watch</div>
                    <div className="text-cyan-400">✅ 47 tests passed</div>
                    <div className="text-white/40">Code coverage: 94.3%</div>
                    <div className="text-blue-400">→ Ready for production deployment</div>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="bg-gray-950/80 border border-white/10 rounded-xl">
                  <div className="flex items-center justify-between p-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <iconify-icon icon="solar:eye-linear" width="16" height="16" className="text-blue-400"></iconify-icon>
                      <span className="text-sm font-medium">Live Preview</span>
                    </div>
                    <button className="p-1 hover:bg-white/10 rounded">
                      <iconify-icon icon="solar:link-round-linear" width="12" height="12"></iconify-icon>
                    </button>
                  </div>
                  <div className="p-3 space-y-3">
                    <div className="bg-blue-500/20 rounded-lg pt-3 pr-3 pb-3 pl-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium">Performance</span>
                        <span className="text-xs text-cyan-400">98/100</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1">
                        <div className="h-1 rounded-full bg-cyan-400" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Bundle Size</span>
                        <span className="text-cyan-400">2.4MB ↓12%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Load Time</span>
                        <span className="text-blue-400">1.2s</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Lighthouse</span>
                        <span className="text-purple-400">A+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Floating action buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="hover:bg-white/20 transition-all bg-white/10 rounded-full pt-3 pr-3 pb-3 pl-3 flex">
                <iconify-icon icon="solar:play-circle-linear" width="20" height="20" style={{ color: "white" }}></iconify-icon>
              </button>
              <button className="hover:bg-white/20 transition-all bg-white/10 rounded-full pt-3 pr-3 pb-3 pl-3 flex">
                <iconify-icon icon="solar:share-linear" width="20" height="20" style={{ color: "white" }}></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="pt-32 pb-32">
        <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
          <div className="text-center mb-20">
            <h2 className="slide-up stagger-2 text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light">
              Trusted by industry leaders.
            </h2>
            <p className="slide-up stagger-3 text-xl text-white/60 max-w-2xl mx-auto">
              See how forward-thinking companies use Nexus Studio to build exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Success Story Card 1 */}
            <div className="fade-in stagger-3 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7c582f0-2e26-487e-ae18-fee9da10561d_800w.jpg" alt="Modern office space with developers" className="w-full h-full object-cover card-image" />
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">
                    Case Study
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                      <iconify-icon icon="solar:chart-square-linear" width="20" height="20" className="text-white"></iconify-icon>
                    </div>
                    <div>
                      <h3 className="font-semibold sf-pro-display">TechCorp Inc.</h3>
                      <p className="text-sm text-white/70">Fortune 500 Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 card-content">
                <h4 className="text-xl font-semibold sf-pro-display mb-4">300% faster deployments</h4>
                <p className="text-white/60 mb-6 leading-relaxed">
                  "Nexus Studio transformed our development workflow. We went from weekly deployments to multiple deployments per day, with zero downtime."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/794112a2-89b3-41cb-9c68-582e6af6132f_320w.jpg)] bg-cover rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Sarah Chen</p>
                      <p className="text-xs text-white/50">VP of Engineering</p>
                    </div>
                  </div>
                  <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all"></iconify-icon>
                </div>
              </div>
            </div>

            {/* Success Story Card 2 */}
            <div className="fade-in stagger-4 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36460156-d7ce-43aa-89af-e013fb87ccfc_800w.jpg" alt="Collaborative team meeting" className="w-full h-full object-cover card-image" />
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">
                    Case Study
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                      <iconify-icon icon="solar:users-group-rounded-linear" width="20" height="20" className="text-white"></iconify-icon>
                    </div>
                    <div>
                      <h3 className="font-semibold sf-pro-display">StartupX</h3>
                      <p className="text-sm text-white/70">Y Combinator Startup</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 card-content">
                <h4 className="text-xl font-semibold sf-pro-display mb-4">10x team productivity</h4>
                <p className="text-white/60 mb-6 leading-relaxed">
                  "As a growing startup, Nexus Studio gave us enterprise-grade tools without the complexity. Our team can focus on building, not infrastructure."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg)] bg-cover rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Alex Rodriguez</p>
                      <p className="text-xs text-white/50">CTO &amp; Co-founder</p>
                    </div>
                  </div>
                  <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all"></iconify-icon>
                </div>
              </div>
            </div>

            {/* Success Story Card 3 */}
            <div className="fade-in stagger-5 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cd1d4fc-703c-4e4d-a54e-9c08b0644568_800w.jpg" alt="Data visualization dashboard" className="w-full h-full object-cover card-image" />
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">
                    Case Study
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                      <iconify-icon icon="solar:chart-2-linear" width="20" height="20" className="text-white"></iconify-icon>
                    </div>
                    <div>
                      <h3 className="font-semibold sf-pro-display">DataFlow Pro</h3>
                      <p className="text-sm text-white/70">Analytics Platform</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 card-content">
                <h4 className="text-xl font-semibold sf-pro-display mb-4">99.99% uptime achieved</h4>
                <p className="text-white/60 mb-6 leading-relaxed">
                  "Mission-critical analytics platform serving millions of users. Nexus Studio's reliability and monitoring tools ensure we never miss a beat."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_320w.jpg)] bg-cover rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Maya Patel</p>
                      <p className="text-xs text-white/50">Head of Platform</p>
                    </div>
                  </div>
                  <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section with Counter Animation */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Counter target="2000000" suffix="M+" className="lg:text-4xl sf-pro-display text-3xl font-light text-neutral-50 mb-2" />
              <div className="text-white/60">Active Developers</div>
            </div>
            <div className="text-center">
              <Counter target="99.99" suffix="%" className="lg:text-4xl sf-pro-display text-3xl font-light text-neutral-50 mb-2" />
              <div className="text-white/60">Platform Uptime</div>
            </div>
            <div className="text-center">
              <Counter target="50000000" suffix="M+" className="lg:text-4xl sf-pro-display text-3xl font-light text-neutral-50 mb-2" />
              <div className="text-white/60">Monthly Deployments</div>
            </div>
            <div className="text-center">
              <Counter target="200" suffix="+" className="lg:text-4xl sf-pro-display text-3xl font-light text-neutral-50 mb-2" />
              <div className="text-white/60">Global Edge Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="slide-up stagger-2 text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light">
              Engineered for excellence.
            </h2>
            <p className="slide-up stagger-3 text-xl text-white/60 max-w-2xl mx-auto">
              Every feature designed with the same attention to detail you'd expect from a premium experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="fade-in stagger-3 group hover:border-white/20 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
              <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                <iconify-icon icon="solar:bolt-linear" width="24" height="24" className="text-white"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold sf-pro-display mb-4 mt-6">Lightning Performance</h3>
              <p className="text-white/60 leading-relaxed">Experience sub-millisecond response times with our globally distributed edge network and intelligent caching.</p>
            </div>

            <div className="fade-in stagger-4 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
              <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                <iconify-icon icon="solar:shield-check-linear" width="24" height="24" className="text-white"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold sf-pro-display mb-4 mt-6">Enterprise Security</h3>
              <p className="text-white/60 leading-relaxed">Bank-grade encryption, SOC 2 Type II compliance, and advanced threat protection built into every layer.</p>
            </div>

            <div className="fade-in stagger-5 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
              <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                <iconify-icon icon="solar:global-linear" width="24" height="24" className="text-white"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold sf-pro-display mb-4 mt-6">Global Scale</h3>
              <p className="text-white/60 leading-relaxed">Deploy instantly to 200+ edge locations worldwide. Your users get the fastest experience, anywhere.</p>
            </div>

            <div className="fade-in stagger-6 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
              <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                <iconify-icon icon="solar:cpu-linear" width="24" height="24" className="text-white"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold sf-pro-display mb-4 mt-6">AI-Powered Insights</h3>
              <p className="text-white/60 leading-relaxed">Machine learning algorithms optimize your deployments, predict issues, and suggest performance improvements.</p>
            </div>

            <div className="fade-in stagger-4 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
              <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                <iconify-icon icon="solar:layers-linear" width="24" height="24" className="text-white"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold sf-pro-display mb-4 mt-6">Seamless Integration</h3>
              <p className="text-white/60 leading-relaxed">Connect with your favorite tools and services through our comprehensive API and webhook ecosystem.</p>
            </div>

            <div className="fade-in stagger-5 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
              <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                <iconify-icon icon="solar:users-group-rounded-linear" width="24" height="24" className="text-white"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold sf-pro-display mb-4 mt-6">Team Collaboration</h3>
              <p className="text-white/60 leading-relaxed">Built for teams. Real-time collaboration, advanced permissions, and integrated communication tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-32 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="slide-up bg-gradient-to-br from-white/10 to-white/5 glass-effect border border-white/20 rounded-3xl p-16">
            <h2 className="text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light">
              Ready to build the future?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Join the developers who choose excellence. Start your journey with Nexus Studio today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton>
                Start Building
                <span className="icon-box">
                  <iconify-icon icon="solar:arrow-right-linear" width="24" height="24"></iconify-icon>
                </span>
              </GlowButton>
              <button className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
                <iconify-icon icon="solar:phone-linear" width="20" height="20"></iconify-icon>
                Schedule a Call
              </button>
            </div>
            <p className="text-sm text-white/40 mt-6">
              Free 14-day trial. No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-white/10 border-t pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center">
                  <iconify-icon icon="solar:box-linear" width="16" height="16" style={{ color: "white" }}></iconify-icon>
                </div>
                <span className="text-xl font-semibold sf-pro-display">Nexus Studio</span>
              </div>
              <p className="text-white/60 mb-6 max-w-md">
                The development platform that empowers teams to create extraordinary digital experiences with uncompromising quality.
              </p>
              <div className="flex gap-4">
                <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex">
                  <iconify-icon icon="simple-icons:x" width="20" height="20"></iconify-icon>
                </button>
                <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex">
                  <iconify-icon icon="simple-icons:github" width="20" height="20"></iconify-icon>
                </button>
                <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex">
                  <iconify-icon icon="simple-icons:linkedin" width="20" height="20"></iconify-icon>
                </button>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-6">Platform</h5>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Cloud IDE</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deployment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Monitoring</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-6">Solutions</h5>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Startups</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agencies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-6">Support</h5>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">© 2024 Nexus Studio, Inc. All rights reserved.</p>
            <div className="flex gap-6 text-white/40 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;