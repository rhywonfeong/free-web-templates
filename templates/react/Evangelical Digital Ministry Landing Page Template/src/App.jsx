import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { FEATURED_VIDEO, CATEGORIES, DONATION_AMOUNTS } from './data';

// --- Shared Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-slate-950/50 backdrop-blur-2xl">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 text-white group cursor-pointer">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600">
          <iconify-icon icon="solar:star-fall-bold" class="text-white text-lg relative z-10" />
          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight">Evangelical</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#" className="hover:text-cyan-400 transition-colors">Discover</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Live Services</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Ministries</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
      </div>

      <button className="glass-button px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300 transition-all">
        <iconify-icon icon="solar:heart-bold" />
        <span>Give Now</span>
      </button>
    </div>
  </nav>
);

const VideoModal = ({ video, onClose }) => {
  const [activeTab, setActiveTab] = useState('watch'); // 'watch' or 'donate'
  const [amount, setAmount] = useState(DONATION_AMOUNTS[1]);
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!video) return null;

  const handleDonate = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(6,182,212,0.15)] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 backdrop-blur-md transition-all"
        >
          <iconify-icon icon="solar:close-circle-line-duotone" class="text-2xl" />
        </button>

        {/* Left: Video Area */}
        <div className="w-full md:w-2/3 bg-black relative flex flex-col min-h-[300px] md:min-h-0">
          <div className="relative w-full aspect-video bg-slate-900 flex-shrink-0">
            {/* Simulated Video Player */}
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <button className="w-20 h-20 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:scale-110 hover:bg-cyan-500/40 transition-all duration-300">
                 <iconify-icon icon="solar:play-bold" class="text-4xl ml-2" />
              </button>
            </div>
            {/* Fake progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div className="h-full bg-cyan-500 w-1/3 relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
              </div>
            </div>
          </div>
          
          {/* Video Metadata (Visible when watching) */}
          <div className="p-6 md:p-8 flex-grow overflow-y-auto hide-scrollbar bg-slate-900">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">{video.title}</h2>
                <p className="text-cyan-400 font-medium flex items-center gap-2">
                  <iconify-icon icon="solar:user-circle-bold" />
                  {video.speaker}
                </p>
              </div>
              <div className="flex items-center gap-2">
                 <button className="p-2 rounded-full glass-button text-slate-300 hover:text-white">
                    <iconify-icon icon="solar:heart-linear" class="text-xl" />
                 </button>
                 <button className="p-2 rounded-full glass-button text-slate-300 hover:text-white">
                    <iconify-icon icon="solar:bookmark-linear" class="text-xl" />
                 </button>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              {video.description || "Join us in this powerful session as we explore deep truths and practical applications for navigating life's complexities through a lens of faith and futuristic vision."}
            </p>
          </div>
        </div>

        {/* Right: Interaction Panel (Donate / Share) */}
        <div className="w-full md:w-1/3 bg-slate-950/80 backdrop-blur-xl border-l border-white/5 flex flex-col h-[50vh] md:h-auto">
          {/* Tabs */}
          <div className="flex border-b border-white/5 p-2 gap-2 flex-shrink-0">
            <button 
              onClick={() => setActiveTab('watch')}
              className={clsx(
                "flex-1 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2",
                activeTab === 'watch' ? "bg-white/10 text-white" : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              )}
            >
              <iconify-icon icon="solar:info-circle-linear" class="text-lg" />
              Details
            </button>
            <button 
              onClick={() => setActiveTab('donate')}
              className={clsx(
                "flex-1 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2",
                activeTab === 'donate' ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]" : "text-slate-400 hover:text-cyan-400 hover:bg-white/5"
              )}
            >
              <iconify-icon icon="solar:hand-money-linear" class="text-lg" />
              Support Ministry
            </button>
          </div>

          <div className="p-6 md:p-8 flex-grow overflow-y-auto hide-scrollbar">
            {activeTab === 'watch' ? (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Share this message</h3>
                  <div className="flex gap-3">
                    {['twitter', 'facebook', 'link'].map((platform) => (
                      <button key={platform} className="w-12 h-12 rounded-full glass-button flex items-center justify-center text-slate-300 hover:text-white hover:scale-110 transition-all">
                        <iconify-icon 
                          icon={platform === 'link' ? 'solar:link-circle-bold' : `simple-icons:${platform}`} 
                          class="text-xl" 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/5">
                  <iconify-icon icon="solar:star-fall-minimalistic-bold-duotone" class="text-3xl text-cyan-400 mb-3" />
                  <h4 className="text-white font-medium mb-1">Partner with Evangelical</h4>
                  <p className="text-sm text-slate-400 mb-4">Your support helps us broadcast the message of hope to a digital generation across the globe.</p>
                  <button 
                    onClick={() => setActiveTab('donate')}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
                  >
                    Make a Contribution
                  </button>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col">
                {isSuccess ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                      <iconify-icon icon="solar:check-circle-bold" class="text-5xl text-green-400" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">Thank You!</h3>
                    <p className="text-slate-400 text-sm">Your generous contribution empowers our mission to reach the digital frontier.</p>
                    <button 
                      onClick={() => {setIsSuccess(false); setActiveTab('watch');}}
                      className="mt-6 px-6 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                    >
                      Return to Video
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleDonate} className="flex flex-col h-full">
                    <h3 className="text-xl font-display font-bold text-white mb-2">Sow a Seed</h3>
                    <p className="text-sm text-slate-400 mb-6">Select an amount to support Evangelical's digital outreach ministries.</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {DONATION_AMOUNTS.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setAmount(amt); setCustomAmount(''); }}
                          className={clsx(
                            "py-3 rounded-xl border text-lg font-medium transition-all duration-200",
                            amount === amt && !customAmount
                              ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                              : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                          )}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    
                    <div className="relative mb-8">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-slate-500 sm:text-lg">$</span>
                      </div>
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount(null);
                        }}
                        className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div className="mt-auto">
                      <button 
                        type="submit"
                        disabled={isProcessing || (!amount && !customAmount)}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-lg shadow-lg shadow-cyan-900/50 transform transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isProcessing ? (
                          <iconify-icon icon="solar:spinner-linear" class="animate-spin text-2xl" />
                        ) : (
                          <>
                            Give ${customAmount || amount}
                            <iconify-icon icon="solar:arrow-right-bold" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                        <iconify-icon icon="solar:lock-keyhole-minimalistic-bold" />
                        Secure Encrypted Transaction
                      </p>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoCard = ({ video, onClick }) => (
  <div 
    onClick={() => onClick(video)}
    className="group relative w-[280px] sm:w-[320px] flex-shrink-0 cursor-pointer flex flex-col gap-3 snap-start"
  >
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 bg-slate-900">
      <img 
        src={video.thumbnail} 
        alt={video.title} 
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
      
      {/* Duration Badge */}
      <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-xs font-medium text-white/90">
        {video.duration}
      </div>
      
      {/* Play Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-14 h-14 rounded-full bg-cyan-500/80 backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] transform scale-90 group-hover:scale-100 transition-all duration-300">
          <iconify-icon icon="solar:play-bold" class="text-2xl ml-1" />
        </div>
      </div>
    </div>
    
    <div>
      <h4 className="text-slate-100 font-medium text-base line-clamp-1 group-hover:text-cyan-400 transition-colors">{video.title}</h4>
      <p className="text-slate-400 text-sm mt-0.5 flex items-center gap-1.5">
        <iconify-icon icon="solar:user-rounded-linear" class="text-xs" />
        {video.speaker}
      </p>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Background ambient glows */}
      <div className="glow-bg top-[-20%] left-[-10%]" />
      <div className="glow-bg bottom-[-20%] right-[-10%] bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,rgba(0,0,0,0)_70%)]" />
      
      <Navbar />

      <main className="relative z-10 pt-20">
        {/* HERO SECTION */}
        <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Global Summit Live Now
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            The Future of <br className="hidden sm:block"/> 
            <span className="text-gradient">Spiritual Awakening</span>
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-slate-400 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Experience transformative messages, transcendent worship, and profound testimonies designed for the digital generation.
          </p>

          {/* Huge Featured Video Presentation */}
          <div className="w-full max-w-5xl relative group animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            {/* Decorative outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
              <img 
                src={FEATURED_VIDEO.thumbnail} 
                alt="Featured Video" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[20s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
              
              {/* Play Button & Details Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button 
                  onClick={() => setSelectedVideo(FEATURED_VIDEO)}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full glass-panel flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-500 animate-soft-pulse"
                >
                  <iconify-icon icon="solar:play-circle-bold-duotone" class="text-6xl sm:text-7xl ml-2 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                </button>
                
                <div className="mt-auto max-w-3xl translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center justify-center gap-3 text-cyan-400 font-medium mb-3">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs border border-white/10 uppercase tracking-wider">Featured Event</span>
                    <span className="flex items-center gap-1 text-sm"><iconify-icon icon="solar:clock-circle-linear" /> {FEATURED_VIDEO.duration}</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">{FEATURED_VIDEO.title}</h2>
                  <p className="text-slate-300 text-sm sm:text-base hidden sm:block">{FEATURED_VIDEO.speaker}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY CAROUSELS */}
        <section className="py-12 md:py-24 space-y-16 md:space-y-24">
          {CATEGORIES.map((category, idx) => (
            <div key={category.id} className="max-w-[100vw]">
              <div className="max-w-7xl mx-auto px-6 flex items-end justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">{category.title}</h3>
                  <div className="h-1 w-12 bg-cyan-500 mt-3 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                </div>
                <button className="text-sm font-medium text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                  View All <iconify-icon icon="solar:alt-arrow-right-linear" />
                </button>
              </div>
              
              {/* Carousel Container */}
              <div className="px-6 w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 pt-4">
                <div className="flex gap-6 w-max mx-auto md:mx-0 max-w-7xl pl-0 md:pl-6 lg:pl-0">
                   {/* Spacers for edge alignment */}
                   <div className="w-1 md:hidden flex-shrink-0" /> 
                   
                   {category.videos.map((video) => (
                     <VideoCard 
                        key={video.id} 
                        video={video} 
                        onClick={setSelectedVideo} 
                     />
                   ))}
                   
                   <div className="w-6 flex-shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* DONATION BANNER */}
        <section className="px-6 py-20 relative overflow-hidden">
           <div className="max-w-5xl mx-auto rounded-3xl glass-panel relative overflow-hidden">
              {/* Abstract shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
              
              <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="md:w-3/5 text-center md:text-left">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Empower the Digital Ministry</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                       Your generous support allows us to continue producing high-quality, inspiring content and expanding our technological reach to share the message globally.
                    </p>
                 </div>
                 <div className="md:w-2/5 flex flex-col items-center md:items-end w-full">
                    <button 
                      onClick={() => {
                        // Open modal with no video just to donate
                        setSelectedVideo({
                           id: 'donate-only',
                           title: 'Support Evangelical',
                           speaker: 'Global Ministry',
                           description: 'Partner with us to transform lives through digital media.',
                           thumbnail: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1600&q=80'
                        });
                      }}
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-lg hover:bg-cyan-50 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                    >
                       <iconify-icon icon="solar:hand-money-bold" class="text-xl text-cyan-600" />
                       Make a Donation
                    </button>
                    <p className="text-xs text-slate-400 mt-4 text-center md:text-right">All donations are securely processed.</p>
                 </div>
              </div>
           </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-slate-950 pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 text-white mb-6">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600">
                  <iconify-icon icon="solar:star-fall-bold" class="text-white text-sm" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">Evangelical</span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               Pioneering the future of faith through transcendent digital experiences and global community building.
             </p>
             <div className="flex gap-4">
                {['twitter', 'youtube', 'instagram'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors">
                     <iconify-icon icon={`simple-icons:${social}`} />
                  </a>
                ))}
             </div>
          </div>
          
          <div>
             <h4 className="font-medium text-white mb-6">Platform</h4>
             <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Watch Live</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Sermon Archive</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Worship Music</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Podcasts</a></li>
             </ul>
          </div>
          
          <div>
             <h4 className="font-medium text-white mb-6">Ministry</h4>
             <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Our Beliefs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Give/Donate</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-medium text-white mb-6">Newsletter</h4>
             <p className="text-sm text-slate-400 mb-4">Stay updated with our latest messages and digital events.</p>
             <form className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg px-4 py-2 font-medium transition-colors">
                  <iconify-icon icon="solar:arrow-right-linear" class="text-lg" />
                </button>
             </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
           <p>© {new Date().getFullYear()} Evangelical Digital Platform. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </footer>

      {/* MODAL OVERLAY */}
      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </div>
  );
}