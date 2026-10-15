import React from 'react';

export default function App() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-white text-xl tracking-[0.25em] font-medium">AURUM</a>
            <nav className="hidden md:flex gap-6 text-sm font-light">
              <a href="#fleet" className="hover:text-white transition-colors">Fleet</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#about" className="hover:text-white transition-colors">The Experience</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-sm font-light hover:text-white transition-colors">Sign In</a>
            <a href="#reserve" className="bg-white text-neutral-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">Reserve Now</a>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900">
          <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2938&auto=format&fit=crop" alt="Luxury Car" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              <span className="text-xs font-medium text-white tracking-wide">Vehicles Available Today</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
              Drive the <br className="hidden md:block" />Extraordinary.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 font-light mb-10 max-w-2xl leading-relaxed">
              Uncompromising luxury, verified availability, and exact-match vehicles. Experience the world's most prestigious fleet, delivered to your door or tarmac by our dedicated concierge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#fleet" className="bg-white text-neutral-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                View Fleet
                <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5"></iconify-icon>
              </a>
              <a href="#concierge" className="px-8 py-4 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                Contact Concierge
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust & Credibility Bar */}
      <div className="border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
                <iconify-icon icon="solar:shield-check-linear" className="text-xl" stroke-width="1.5"></iconify-icon>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Exact Vehicle Guarantee</p>
                <p className="text-xs text-neutral-500 font-light">The car you book is the car you drive.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
                <iconify-icon icon="solar:wallet-money-linear" className="text-xl" stroke-width="1.5"></iconify-icon>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Zero Hidden Fees</p>
                <p className="text-xs text-neutral-500 font-light">Transparent pricing, clear insurance.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
                <iconify-icon icon="solar:routing-2-linear" className="text-xl" stroke-width="1.5"></iconify-icon>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Same-Day Delivery</p>
                <p className="text-xs text-neutral-500 font-light">To your hotel, home, or private FBO.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
                <iconify-icon icon="solar:phone-calling-linear" className="text-xl" stroke-width="1.5"></iconify-icon>
              </div>
              <div>
                <p className="text-white text-sm font-medium">24/7 Support</p>
                <p className="text-xs text-neutral-500 font-light">Dedicated personal concierge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Featured Fleet Section */}
      <section id="fleet" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">The Collection</h2>
              <p className="text-sm text-neutral-400 font-light max-w-xl">Meticulously maintained. Flawlessly detailed. Ready for immediate deployment.</p>
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              <button className="px-4 py-2 rounded-full bg-white text-black text-xs font-medium shrink-0">All Vehicles</button>
              <button className="px-4 py-2 rounded-full border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition shrink-0">Exotic</button>
              <button className="px-4 py-2 rounded-full border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition shrink-0">Luxury SUV</button>
              <button className="px-4 py-2 rounded-full border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition shrink-0">Executive</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vehicle Card 1 */}
            <div className="group border border-white/10 rounded-2xl bg-neutral-900/30 overflow-hidden hover:border-white/30 transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2940&auto=format&fit=crop" alt="Lamborghini" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-xs text-white font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white tracking-tight">Lamborghini Huracán EVO</h3>
                    <p className="text-xs text-neutral-500 font-light mt-1">Exotic Coupe</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-white">$1,200</p>
                    <p className="text-xs text-neutral-500 font-light">/ day</p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 font-light">0-60 mph</span>
                    <span className="text-sm text-white font-medium">2.9s</span>
                  </div>
                  <div className="w-px bg-white/10"></div>
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 font-light">Horsepower</span>
                    <span className="text-sm text-white font-medium">630 hp</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white text-center hover:text-black transition-colors">
                  Reserve Vehicle
                </button>
              </div>
            </div>

            {/* Vehicle Card 2 */}
            <div className="group border border-white/10 rounded-2xl bg-neutral-900/30 overflow-hidden hover:border-white/30 transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Rolls Royce" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white tracking-tight">Rolls-Royce Cullinan</h3>
                    <p className="text-xs text-neutral-500 font-light mt-1">Ultra-Luxury SUV</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-white">$1,800</p>
                    <p className="text-xs text-neutral-500 font-light">/ day</p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 font-light">Seats</span>
                    <span className="text-sm text-white font-medium">5</span>
                  </div>
                  <div className="w-px bg-white/10"></div>
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 font-light">Interior</span>
                    <span className="text-sm text-white font-medium">Bespoke</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white text-center hover:text-black transition-colors">
                  Reserve Vehicle
                </button>
              </div>
            </div>

            {/* Vehicle Card 3 */}
            <div className="group border border-white/10 rounded-2xl bg-neutral-900/30 overflow-hidden hover:border-white/30 transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Porsche" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white tracking-tight">Porsche 911 GT3</h3>
                    <p className="text-xs text-neutral-500 font-light mt-1">Track-Focused Sports</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-white">$1,500</p>
                    <p className="text-xs text-neutral-500 font-light">/ day</p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 font-light">0-60 mph</span>
                    <span className="text-sm text-white font-medium">3.2s</span>
                  </div>
                  <div className="w-px bg-white/10"></div>
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 font-light">Engine</span>
                    <span className="text-sm text-white font-medium">4.0L Flat-6</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white text-center hover:text-black transition-colors">
                  Reserve Vehicle
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors border-b border-white/20 pb-1">
              View Entire Fleet <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Why Clients Choose Us (Solving Pain Points) */}
      <section className="py-24 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Redefining Rental Standards</h2>
            <p className="text-sm text-neutral-400 font-light">We built AURUM to solve the frustrations of luxury car rentals. No bait-and-switch, no confusing insurance, and complete operational transparency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-500/20 to-transparent"></div>
              <iconify-icon icon="solar:key-minimalistic-square-linear" className="text-3xl text-white mb-6" stroke-width="1.5"></iconify-icon>
              <h3 className="text-lg font-medium text-white mb-2">Exact Car Guarantee</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">The vehicle you see is the exact VIN you receive. We never substitute your booking for a "similar model."</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-950 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-500/20 to-transparent"></div>
              <iconify-icon icon="solar:document-text-linear" className="text-3xl text-white mb-6" stroke-width="1.5"></iconify-icon>
              <h3 className="text-lg font-medium text-white mb-2">Transparent Policies</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">Clear pricing, standardized deposits, and fully comprehensive insurance options with zero hidden clauses.</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-950 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-500/20 to-transparent"></div>
              <iconify-icon icon="solar:map-point-linear" className="text-3xl text-white mb-6" stroke-width="1.5"></iconify-icon>
              <h3 className="text-lg font-medium text-white mb-2">Anywhere Logistics</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">FBO tarmac delivery, hotel valet handoff, or private residence drop-off. We adapt to your itinerary seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight text-center mb-16">Frictionless Acquisition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-950 border border-white/20 flex items-center justify-center text-white font-medium mb-6">1</div>
              <h3 className="text-base font-medium text-white mb-2">Select</h3>
              <p className="text-sm text-neutral-400 font-light px-4">Browse our verified, real-time inventory and select your exact vehicle.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-950 border border-white/20 flex items-center justify-center text-white font-medium mb-6">2</div>
              <h3 className="text-base font-medium text-white mb-2">Verify</h3>
              <p className="text-sm text-neutral-400 font-light px-4">Complete a streamlined, secure verification and select your coverage level.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-950 border border-white/20 flex items-center justify-center text-white font-medium mb-6">3</div>
              <h3 className="text-base font-medium text-white mb-2">Receive</h3>
              <p className="text-sm text-neutral-400 font-light px-4">Your concierge hands over the keys at your designated time and location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Event & Seasonal Rentals */}
      <section className="py-24 bg-neutral-950 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop" alt="Wedding Car" className="w-full h-[500px] object-cover opacity-80 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white font-medium mb-3 inline-block">Weddings & Events</span>
                  <h3 className="text-2xl font-medium text-white tracking-tight">Make an Entrance</h3>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Curated for the Moment</h2>
              <p className="text-sm text-neutral-400 font-light mb-8 max-w-md leading-relaxed">
                Our dynamic inventory adapts to your schedule. From stately sedans for executive summits to striking convertibles for coastal weekends, we tailor recommendations to the season and local events.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <iconify-icon icon="solar:case-minimalistic-linear" className="text-xl text-neutral-500 group-hover:text-white transition-colors"></iconify-icon>
                    <div>
                      <p className="text-sm font-medium text-white">Business Leadership Summits</p>
                      <p className="text-xs text-neutral-500">Executive transport & discreet logistics.</p>
                    </div>
                  </div>
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-neutral-600 group-hover:text-white transition-colors"></iconify-icon>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <iconify-icon icon="solar:cup-star-linear" className="text-xl text-neutral-500 group-hover:text-white transition-colors"></iconify-icon>
                    <div>
                      <p className="text-sm font-medium text-white">Weddings & Galas</p>
                      <p className="text-xs text-neutral-500">Chauffeur-ready luxury vehicles.</p>
                    </div>
                  </div>
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-neutral-600 group-hover:text-white transition-colors"></iconify-icon>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <iconify-icon icon="solar:sun-2-linear" className="text-xl text-neutral-500 group-hover:text-white transition-colors"></iconify-icon>
                    <div>
                      <p className="text-sm font-medium text-white">Weekend Escapes</p>
                      <p className="text-xs text-neutral-500">High-performance sports cars & convertibles.</p>
                    </div>
                  </div>
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-neutral-600 group-hover:text-white transition-colors"></iconify-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Analytics & Benchmarking Dashboard Concept (Internal View Mockup) */}
      <section className="py-24 bg-neutral-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <iconify-icon icon="solar:chart-square-linear" className="text-neutral-400"></iconify-icon>
                <span className="text-xs font-medium text-neutral-400 tracking-widest uppercase">Internal Dashboard Concept</span>
              </div>
              <h2 className="text-2xl font-medium text-white tracking-tight">Fleet Intelligence & Forecasting</h2>
            </div>
            
            {/* Custom Toggle */}
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <span className="text-xs text-neutral-500">Live Data</span>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-neutral-900 border-2 border-neutral-600 appearance-none cursor-pointer transition-colors z-10" />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer border border-neutral-700"></label>
              </div>
              <span className="text-xs text-white">Forecast</span>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* KPI Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-neutral-950 rounded-xl p-5 border border-white/5">
                <p className="text-xs text-neutral-500 font-medium mb-1">Conversion Rate</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-medium text-white tracking-tight">6.2%</p>
                  <span className="text-xs text-emerald-500 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +1.2%</span>
                </div>
                <p className="text-[10px] text-neutral-600 mt-2">Target: 4-8%</p>
              </div>
              <div className="bg-neutral-950 rounded-xl p-5 border border-white/5">
                <p className="text-xs text-neutral-500 font-medium mb-1">Avg. Booking Value</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-medium text-white tracking-tight">$1,840</p>
                  <span className="text-xs text-emerald-500 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +5.4%</span>
                </div>
                <p className="text-[10px] text-neutral-600 mt-2">Target: $900-$2,500</p>
              </div>
              <div className="bg-neutral-950 rounded-xl p-5 border border-white/5">
                <p className="text-xs text-neutral-500 font-medium mb-1">Fleet Utilization</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-medium text-white tracking-tight">78%</p>
                  <span className="text-xs text-neutral-500 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Stable</span>
                </div>
                <div className="w-full bg-neutral-800 h-1 rounded-full mt-3 overflow-hidden">
                  <div className="bg-white w-[78%] h-full"></div>
                </div>
                <p className="text-[10px] text-neutral-600 mt-2">Target: 70-85%</p>
              </div>
            </div>

            {/* Main Chart Area */}
            <div className="lg:col-span-3 bg-neutral-950 rounded-xl border border-white/5 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-sm font-medium text-white">Event-Driven Demand Spikes</h3>
                  <p className="text-xs text-neutral-500">Correlation with local events and airport traffic.</p>
                </div>
                <select className="bg-neutral-900 border border-white/10 text-xs text-white rounded-md px-3 py-1.5 outline-none focus:border-white/30 cursor-pointer">
                  <option>Next 30 Days</option>
                  <option>Q3 Forecast</option>
                  <option>Year to Date</option>
                </select>
              </div>
              
              {/* CSS Bar Chart Representation */}
              <div className="flex-1 flex items-end gap-2 sm:gap-4 h-48 relative border-b border-white/10 pb-2">
                {/* Y-axis labels */}
                <div className="absolute -left-2 top-0 bottom-0 w-8 flex flex-col justify-between text-[10px] text-neutral-600 text-right pr-2">
                  <span>100%</span>
                  <span>50%</span>
                  <span>0%</span>
                </div>
                
                {/* Bars */}
                <div className="flex-1 flex flex-col justify-end group">
                  <div className="w-full bg-white/10 group-hover:bg-white/20 transition-colors rounded-t-sm h-[40%] relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-neutral-800 text-white text-[10px] px-2 py-1 rounded transition-opacity pointer-events-none z-10 whitespace-nowrap">Normal</div>
                  </div>
                  <span className="text-[10px] text-neutral-500 mt-2 text-center truncate">W1</span>
                </div>
                <div className="flex-1 flex flex-col justify-end group">
                  <div className="w-full bg-white/10 group-hover:bg-white/20 transition-colors rounded-t-sm h-[45%]"></div>
                  <span className="text-[10px] text-neutral-500 mt-2 text-center truncate">W2</span>
                </div>
                <div className="flex-1 flex flex-col justify-end group">
                  <div className="w-full bg-white group-hover:bg-neutral-200 transition-colors rounded-t-sm h-[90%] relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-neutral-800 text-white text-[10px] px-2 py-1 rounded transition-opacity pointer-events-none z-10 whitespace-nowrap">Tech Conference</div>
                  </div>
                  <span className="text-[10px] text-white font-medium mt-2 text-center truncate">W3</span>
                </div>
                <div className="flex-1 flex flex-col justify-end group">
                  <div className="w-full bg-white/10 group-hover:bg-white/20 transition-colors rounded-t-sm h-[60%]"></div>
                  <span className="text-[10px] text-neutral-500 mt-2 text-center truncate">W4</span>
                </div>
                <div className="flex-1 flex flex-col justify-end group">
                  <div className="w-full bg-white/40 group-hover:bg-white/50 transition-colors rounded-t-sm h-[75%] relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-neutral-800 text-white text-[10px] px-2 py-1 rounded transition-opacity pointer-events-none z-10 whitespace-nowrap">Holiday Wknd</div>
                  </div>
                  <span className="text-[10px] text-neutral-300 mt-2 text-center truncate">W5</span>
                </div>
                <div className="flex-1 flex flex-col justify-end group">
                  <div className="w-full bg-white/10 group-hover:bg-white/20 transition-colors rounded-t-sm h-[50%]"></div>
                  <span className="text-[10px] text-neutral-500 mt-2 text-center truncate">W6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight text-center mb-16">Client Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5">
              <div className="flex text-white mb-4">
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
              </div>
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">"Flawless execution. The Cullinan was waiting at the FBO exactly as requested. No paperwork delays, just handed over the keys and we were on our way. The standard for luxury travel."</p>
              <div>
                <p className="text-sm font-medium text-white">James C.</p>
                <p className="text-xs text-neutral-500">Executive Producer</p>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5">
              <div className="flex text-white mb-4">
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
              </div>
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">"Used AURUM for our wedding weekend. The exact 911 GT3 we wanted. Pricing was entirely transparent upfront—no surprises on the final invoice. Incredibly professional team."</p>
              <div>
                <p className="text-sm font-medium text-white">Sarah T.</p>
                <p className="text-xs text-neutral-500">Private Client</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5">
              <div className="flex text-white mb-4">
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
              </div>
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">"I travel frequently for board meetings and rely on AURUM in every city they operate. The consistency of their fleet quality and the discretion of their concierges are unmatched."</p>
              <div>
                <p className="text-sm font-medium text-white">Marcus R.</p>
                <p className="text-xs text-neutral-500">CEO, Tech Ventures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="py-24 bg-neutral-900/20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight text-center mb-12">Clarity & Confidence</h2>
          
          <div className="space-y-4">
            <details className="group bg-neutral-950 border border-white/5 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <span className="text-sm font-medium text-white">Are the vehicles exactly as pictured?</span>
                <span className="transition group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="text-neutral-500"></iconify-icon>
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-neutral-400 font-light">
                Yes. We operate an exact-vehicle guarantee. The VIN and photos you see during booking correspond precisely to the vehicle delivered to you. We do not use "or similar" clauses.
              </div>
            </details>

            <details className="group bg-neutral-950 border border-white/5 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <span className="text-sm font-medium text-white">What insurance is required?</span>
                <span className="transition group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="text-neutral-500"></iconify-icon>
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-neutral-400 font-light">
                We accept major personal auto policies that cover high-value rentals. If your policy is insufficient, we provide comprehensive, transparent primary coverage options at checkout with no hidden deductibles.
              </div>
            </details>

            <details className="group bg-neutral-950 border border-white/5 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <span className="text-sm font-medium text-white">Can I get the car delivered?</span>
                <span className="transition group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="text-neutral-500"></iconify-icon>
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-neutral-400 font-light">
                Absolutely. We offer white-glove delivery to private FBOs, commercial airports, luxury hotels, and private residences. Delivery logistics are coordinated directly by your concierge.
              </div>
            </details>

            <details className="group bg-neutral-950 border border-white/5 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <span className="text-sm font-medium text-white">Is there a security deposit?</span>
                <span className="transition group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="text-neutral-500"></iconify-icon>
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-neutral-400 font-light">
                Yes, a standard authorization is required prior to handover. The amount varies based on the vehicle tier and your selected insurance coverage, completely detailed before you confirm your reservation.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Your Next Journey Awaits</h2>
          <p className="text-base text-neutral-400 font-light mb-10 max-w-2xl mx-auto">
            Secure your vehicle today. Experience the pinnacle of automotive engineering with the highest standard of concierge service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#reserve" className="bg-white text-neutral-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
              Reserve Your Vehicle
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/5 transition-colors">
              Speak with Concierge
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2 md:col-span-1">
              <span className="text-white text-xl tracking-[0.25em] font-medium block mb-4">AURUM</span>
              <p className="text-xs text-neutral-500 font-light max-w-xs">The premier standard in exotic and luxury vehicle logistics and concierge services.</p>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-4">Fleet</h4>
              <ul className="space-y-2 text-xs text-neutral-500 font-light">
                <li><a href="#" className="hover:text-white transition">Exotic</a></li>
                <li><a href="#" className="hover:text-white transition">Ultra-Luxury SUV</a></li>
                <li><a href="#" className="hover:text-white transition">Executive Sedans</a></li>
                <li><a href="#" className="hover:text-white transition">Convertibles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-xs text-neutral-500 font-light">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Corporate Partners</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-xs text-neutral-500 font-light">
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Rental Agreement</a></li>
                <li><a href="#" className="hover:text-white transition">Insurance Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-neutral-600 font-light">© 2023 AURUM Automotive Concierge. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-500 hover:text-white transition"><iconify-icon icon="solar:map-point-linear" className="text-lg"></iconify-icon></a>
              <a href="#" className="text-neutral-500 hover:text-white transition"><iconify-icon icon="solar:letter-linear" className="text-lg"></iconify-icon></a>
              <a href="#" className="text-neutral-500 hover:text-white transition"><iconify-icon icon="solar:phone-linear" className="text-lg"></iconify-icon></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}