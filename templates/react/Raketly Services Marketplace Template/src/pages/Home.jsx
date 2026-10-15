import React, { useState } from 'react';
import { 
  Search, MapPin, ShieldCheck, ThumbsUp, Wrench, Home as HomeIcon, 
  Stethoscope, Tv, CheckCircle2, Star, Briefcase, Users
} from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('clients');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Real implementation would route to search results
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section: The "Instant Trust" Gateway */}
      <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 px-6 max-w-7xl mx-auto w-full">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3B5DE5]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          <div className="flex-1 text-center lg:text-left space-y-8 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#171717] tracking-tighter leading-[1.1]">
              Connecting You To <br className="hidden md:block"/>
              <span className="text-[#3B5DE5] relative">
                Trusted Local
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#3B5DE5]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span> Experts
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Find a plumber, repairman, or professional in your neighborhood. Fast, verified, and easy to use.
            </p>

            <div className="max-w-xl mx-auto lg:mx-0 relative mt-8">
              <form onSubmit={handleSearch} className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#3B5DE5] transition-colors">
                  <Search size={28} />
                </div>
                <input
                  type="text"
                  className="block w-full pl-16 pr-32 py-5 text-xl bg-white border-2 border-gray-100 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:outline-none focus:ring-4 focus:ring-[#3B5DE5]/20 focus:border-[#3B5DE5] transition-all placeholder:text-gray-400"
                  placeholder="What service do you need?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search for an expert"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-2 bottom-2 bg-[#171717] text-white px-8 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Find
                </button>
              </form>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
               <button className="flex items-center gap-3 bg-white hover:bg-gray-50 transition-colors px-6 py-3.5 rounded-xl border-2 border-gray-100 shadow-sm group">
                  <iconify-icon icon="simple-icons:apple" style={{ fontSize: '28px', color: '#171717' }}></iconify-icon>
                  <div className="text-left leading-tight">
                    <div className="text-xs text-gray-500 font-medium">Download on the</div>
                    <div className="font-bold text-[#171717] group-hover:text-[#3B5DE5] transition-colors">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-white hover:bg-gray-50 transition-colors px-6 py-3.5 rounded-xl border-2 border-gray-100 shadow-sm group">
                  <iconify-icon icon="simple-icons:googleplay" style={{ fontSize: '28px', color: '#171717' }}></iconify-icon>
                  <div className="text-left leading-tight">
                    <div className="text-xs text-gray-500 font-medium">GET IT ON</div>
                    <div className="font-bold text-[#171717] group-hover:text-[#3B5DE5] transition-colors">Google Play</div>
                  </div>
                </button>
            </div>
          </div>

          {/* Abstract 3D Phone Mockup Representation */}
          <div className="flex-1 relative w-full max-w-lg mx-auto aspect-[4/5] perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3B5DE5]/20 to-transparent rounded-3xl transform rotate-3 scale-105 z-0 blur-xl"></div>
            
            <div className="relative z-10 w-full h-full glass rounded-[2.5rem] border-[8px] border-white shadow-2xl overflow-hidden flex flex-col bg-gray-50 transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 ease-out">
              {/* Fake App Header */}
              <div className="bg-white p-6 pb-4 shadow-sm z-10">
                <div className="w-1/3 h-5 bg-gray-200 rounded-full mb-6"></div>
                <div className="w-full h-12 bg-gray-100 rounded-xl mb-4"></div>
                <div className="flex gap-2">
                  <div className="w-20 h-8 bg-[#3B5DE5]/10 rounded-full"></div>
                  <div className="w-24 h-8 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              
              {/* Fake App Content Map/List */}
              <div className="flex-1 relative bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                <div className="absolute inset-0 p-6 flex flex-col gap-4 overflow-hidden pt-8">
                  {/* Fake Cards */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex gap-4 items-center animate-pulse-slow" style={{animationDelay: `${i * 150}ms`}}>
                      <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 space-y-2">
                        <div className="w-2/3 h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-1/2 h-3 bg-gray-100 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#3B5DE5]/10 flex items-center justify-center">
                        <Star size={14} className="text-[#3B5DE5]" />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Center Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3B5DE5] text-white p-3 rounded-full shadow-lg shadow-[#3B5DE5]/40 animate-bounce">
                  <MapPin size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The "Service Galaxy" (Category Grid) */}
      <section id="services" className="py-24 bg-gray-50/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-gray-600">Everything you need, right in your neighborhood.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Home Services", desc: "Plumbing, Electrical, Carpentry", icon: HomeIcon },
              { title: "Personal", desc: "House cleaning, Laundry, Care", icon: HeartIcon },
              { title: "Professional", desc: "Healthcare, Tutors, Consultants", icon: Briefcase },
              { title: "Technical", desc: "Appliance & Equipment repair", icon: Wrench },
            ].map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_0_30px_rgba(59,93,229,0.15)] hover:border-[#3B5DE5]/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#3B5DE5]/10 group-hover:scale-110 transition-all duration-300">
                  <service.icon size={32} strokeWidth={1.5} className="text-[#171717] group-hover:text-[#3B5DE5] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#171717] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Accessibility & Trust Systems */}
      <section id="trust" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B5DE5]/10 text-[#3B5DE5] font-semibold text-sm uppercase tracking-wider mb-2">
                <ShieldCheck size={18} />
                Expert Verification
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Safety First.<br/> Always Verified.
              </h2>
              <p className="text-xl text-gray-600">
                We take your security seriously. Every Raketero goes through a strict 4-step verification process before they can accept jobs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                {[
                  { step: "1", title: "Government ID", desc: "Valid ID check" },
                  { step: "2", title: "NBI Clearance", desc: "Background check" },
                  { step: "3", title: "Phone Verify", desc: "Active number" },
                  { step: "4", title: "Social Check", desc: "Facebook linking" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center font-bold text-xl text-[#3B5DE5]">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#171717]">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-lg">
              {/* Trust Badge Graphic */}
              <div className="relative z-10 bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#3B5DE5] rounded-full flex items-center justify-center mb-6 shadow-xl shadow-[#3B5DE5]/30">
                  <ThumbsUp size={40} className="text-white" strokeWidth={2} />
                </div>
                <div className="flex items-center gap-2 text-2xl font-extrabold text-[#171717] mb-2">
                  Verified Raketero <CheckCircle2 className="text-[#3B5DE5]" fill="#3B5DE5" color="white" />
                </div>
                <p className="text-gray-500 text-lg mb-8">This badge means the expert has passed all background checks.</p>
                
                {/* 3km Radius Graphic */}
                <div className="w-full bg-gray-50 rounded-2xl p-6 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[#3B5DE5]/5"></div>
                   <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white rounded-full shadow-sm">
                          <MapPin size={24} className="text-[#3B5DE5]" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-[#171717] text-lg">Fast Response</div>
                          <div className="text-gray-500">Find people within</div>
                        </div>
                      </div>
                      <div className="text-3xl font-extrabold text-[#3B5DE5]">3km</div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Dual-Path Value Proposition */}
      <section className="py-24 px-6 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Built for Everyone
            </h2>
            <p className="text-xl text-gray-400">Choose how you want to use Raketly.</p>
          </div>

          {/* Custom Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {[
              { id: 'clients', label: 'For Clients' },
              { id: 'experts', label: 'For Experts (Raketeros)' },
              { id: 'enterprise', label: 'For Enterprise' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 md:px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#3B5DE5] text-white shadow-lg shadow-[#3B5DE5]/30 scale-105' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm min-h-[300px] flex items-center justify-center text-center max-w-4xl mx-auto">
            {activeTab === 'clients' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Users size={64} className="mx-auto mb-8 text-[#3B5DE5] opacity-80" strokeWidth={1.5} />
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Find the right person, instantly.</h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Post a job, see ratings, and hire with confidence. No more asking around—everyone you need is verified and ready to help, right in your app.
                </p>
              </div>
            )}
            
            {activeTab === 'experts' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Briefcase size={64} className="mx-auto mb-8 text-[#3B5DE5] opacity-80" strokeWidth={1.5} />
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Turn your skills into income.</h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Start your side hustle today. We take <strong className="text-white">0% commission</strong>. You keep everything you earn. Build your reputation with badges and get booked faster.
                </p>
                <button className="mt-8 bg-white text-[#171717] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                  Start Earning
                </button>
              </div>
            )}

            {activeTab === 'enterprise' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Tv size={64} className="mx-auto mb-8 text-[#3B5DE5] opacity-80" strokeWidth={1.5} />
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Scale your local workforce.</h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Manage your team of experts, track bookings in real-time, and grow your service agency with our dedicated enterprise tools and API access.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-24 px-6 bg-[#3B5DE5] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
            Ready to get things done?
          </h2>
          <p className="text-2xl text-blue-100 mb-12">
            Join thousands of users who are already finding trusted experts on Raketly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto bg-white text-[#3B5DE5] px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl">
              Download Raketly
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
              Become an Expert
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

// Simple placeholder icon components for specific uses
function HeartIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  );
}