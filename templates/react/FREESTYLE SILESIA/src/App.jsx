import React, { useState, useEffect, useRef } from 'react';
import RibbonBackground from './components/RibbonBackground';
import { INITIAL_TRACKS, CURATED_PLAYLISTS, ARTISTS } from './data';

export default function App() {
  // Navigation & Page State
  const [currentTab, setCurrentTab] = useState('discover'); // discover, playlists, artists, premium
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  // Audio Player State
  const [tracks, setTracks] = useState(INITIAL_TRACKS);
  const [currentTrack, setCurrentTrack] = useState(INITIAL_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(24); // default started point
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [likedTracks, setLikedTracks] = useState(['t1', 't3']);

  // Custom User Playlists
  const [userPlaylists, setUserPlaylists] = useState([
    { id: 'up1', title: 'Cyber Coding Ambient', tracks: ['t1', 't3', 't5'], color: '#0ea5e9' },
    { id: 'up2', title: 'Late Night Synthetics', tracks: ['t2', 't6'], color: '#ec4899' }
  ]);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [newPlaylistColor, setNewPlaylistColor] = useState('#bae6fd');

  // Search/Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArtistList, setActiveArtistList] = useState(ARTISTS);

  // Premium Billing State
  const [isAnnualPlan, setIsAnnualPlan] = useState(true);
  const [isPremiumSubscribed, setIsPremiumSubscribed] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutCard, setCheckoutCard] = useState('');
  const [checkoutName, setCheckoutName] = useState('');

  // Mobile menu open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simple Notification engine
  const [toasts, setToasts] = useState([]);

  // Auto progression timer reference
  const timerRef = useRef(null);

  // Trigger temporary floating Toast
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // Simulated live visualizer blocks
  const [visualizerBars, setVisualizerBars] = useState(Array.from({ length: 18 }, () => Math.random() * 80 + 20));

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setVisualizerBars(Array.from({ length: 18 }, () => Math.random() * 85 + 15));
      }, 120);
    } else {
      // quiet visualizer state
      setVisualizerBars(Array.from({ length: 18 }, () => 10));
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Audio tick logic
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= currentTrack.duration) {
            handleNextTrack();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentTrack]);

  // Player controls
  const handlePlayPause = () => {
    if (!hasStartedPlaying) setHasStartedPlaying(true);
    setIsPlaying(!isPlaying);
    showToast(isPlaying ? "Paused playback" : `Playing: ${currentTrack.title}`, 'info');
  };

  const handleStartListening = () => {
    setHasStartedPlaying(true);
    setIsPlaying(true);
    setCurrentTab('discover');
    showToast(`Streaming high-fidelity: ${currentTrack.title}`, 'success');
  };

  const handleNextTrack = () => {
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setCurrentTime(0);
    setIsPlaying(true);
    showToast(`Skipped to: ${tracks[nextIndex].title}`, 'info');
  };

  const handlePrevTrack = () => {
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = tracks.length - 1;
    setCurrentTrack(tracks[prevIndex]);
    setCurrentTime(0);
    setIsPlaying(true);
    showToast(`Previous track: ${tracks[prevIndex].title}`, 'info');
  };

  const selectTrack = (track) => {
    setCurrentTrack(track);
    setCurrentTime(0);
    setIsPlaying(true);
    setHasStartedPlaying(true);
    showToast(`Now playing: ${track.title}`, 'music');
  };

  const toggleLikeTrack = (trackId) => {
    if (likedTracks.includes(trackId)) {
      setLikedTracks(prev => prev.filter(id => id !== trackId));
      showToast("Removed from Liked Songs", "info");
    } else {
      setLikedTracks(prev => [...prev, trackId]);
      showToast("Added to Liked Songs", "heart");
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Artist follow logic
  const toggleFollowArtist = (id, name) => {
    setActiveArtistList(prev => prev.map(art => {
      if (art.id === id) {
        const nextState = !art.isFollowed;
        showToast(nextState ? `Followed ${name}` : `Unfollowed ${name}`, 'user');
        return {
          ...art,
          isFollowed: nextState,
          followers: nextState 
            ? (parseInt(art.followers.replace(',', '')) + 1).toLocaleString()
            : (parseInt(art.followers.replace(',', '')) - 1).toLocaleString()
        };
      }
      return art;
    }));
  };

  // Creating custom playlist
  const createPlaylist = (e) => {
    e.preventDefault();
    if (!newPlaylistName.trim()) return;
    const newPlaylist = {
      id: `up-${Date.now()}`,
      title: newPlaylistName,
      tracks: [currentTrack.id],
      color: newPlaylistColor
    };
    setUserPlaylists(prev => [...prev, newPlaylist]);
    showToast(`Created playlist "${newPlaylistName}" with current track`, 'playlist');
    setNewPlaylistName('');
  };

  // Add song to playlist
  const addTrackToPlaylist = (trackId, playlistId, playlistTitle) => {
    setUserPlaylists(prev => prev.map(p => {
      if (p.id === playlistId) {
        if (p.tracks.includes(trackId)) {
          showToast(`Already added to ${playlistTitle}`, 'warning');
          return p;
        }
        showToast(`Added to ${playlistTitle}`, 'success');
        return { ...p, tracks: [...p.tracks, trackId] };
      }
      return p;
    }));
  };

  // Submit Premium subscription
  const handlePremiumSubscribe = (e) => {
    e.preventDefault();
    if (!checkoutName.trim() || !checkoutCard.trim()) {
      showToast("Please fill in payment details", "warning");
      return;
    }
    setIsPremiumSubscribed(true);
    setCheckoutModalOpen(false);
    showToast("Premium Active! High-Fidelity Lossless unlocked.", "crown");
  };

  // Track filter logic
  const filteredTracks = tracks.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col relative text-white antialiased font-geist pb-32">
      
      {/* GL Ambient moving background from original template */}
      <RibbonBackground />

      {/* Dynamic Toast Notifications */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map(toast => (
          <div 
            key={toast.id}
            className="pointer-events-auto bg-slate-950/90 border border-slate-800 text-slate-100 p-4 rounded-xl shadow-2xl flex items-center justify-between gap-3 animate-slide-in transition-all"
          >
            <div className="flex items-center gap-2">
              {toast.type === 'heart' && <iconify-icon icon="solar:heart-bold" class="text-rose-500 text-lg" />}
              {toast.type === 'success' && <iconify-icon icon="solar:check-circle-bold" class="text-sky-400 text-lg" />}
              {toast.type === 'crown' && <iconify-icon icon="solar:crown-bold" class="text-amber-400 text-lg" />}
              {toast.type === 'info' && <iconify-icon icon="solar:music-note-slider-linear" class="text-sky-300 text-lg" />}
              {toast.type === 'warning' && <iconify-icon icon="solar:danger-bold" class="text-yellow-400 text-lg" />}
              <span className="text-xs font-mono-tech tracking-tight">{toast.message}</span>
            </div>
            <button 
              onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
              className="text-slate-400 hover:text-white"
            >
              <iconify-icon icon="solar:close-circle-linear" />
            </button>
          </div>
        ))}
      </div>

      {/* Header / Brand Shell */}
      <header className="relative z-20 w-full px-6 py-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a 
            href="#" 
            onClick={() => setCurrentTab('discover')}
            className="text-2xl font-semibold tracking-tighter select-none hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 animate-pulse-slow"></span>
            <span className="text-transparent bg-clip-text bg-slate-50 font-geist">Resonance</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => { setCurrentTab('discover'); setMobileMenuOpen(false); }}
              className={`text-xs font-mono-tech uppercase tracking-widest relative pb-1 transition-all ${
                currentTab === 'discover' 
                  ? "text-sky-300 border-b border-sky-300" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Discover
            </button>
            <button 
              onClick={() => { setCurrentTab('playlists'); setMobileMenuOpen(false); }}
              className={`text-xs font-mono-tech uppercase tracking-widest relative pb-1 transition-all ${
                currentTab === 'playlists' 
                  ? "text-sky-300 border-b border-sky-300" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Playlists
            </button>
            <button 
              onClick={() => { setCurrentTab('artists'); setMobileMenuOpen(false); }}
              className={`text-xs font-mono-tech uppercase tracking-widest relative pb-1 transition-all ${
                currentTab === 'artists' 
                  ? "text-sky-300 border-b border-sky-300" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Artists
            </button>
            <button 
              onClick={() => { setCurrentTab('premium'); setMobileMenuOpen(false); }}
              className={`text-xs font-mono-tech uppercase tracking-widest relative pb-1 transition-all flex items-center gap-1 ${
                currentTab === 'premium' 
                  ? "text-sky-300 border-b border-sky-300" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {isPremiumSubscribed && <iconify-icon icon="solar:crown-bold" class="text-amber-400" />}
              {isPremiumSubscribed ? "Premium VIP" : "Premium"}
            </button>
          </nav>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              if (isPremiumSubscribed) {
                showToast("Already Premium user!", "success");
              } else {
                setCurrentTab('premium');
              }
            }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-[11px] font-mono-tech text-sky-200 hover:bg-sky-500/20 transition-all"
          >
            <iconify-icon icon="solar:crown-bold" class="text-sky-300 animate-pulse" />
            {isPremiumSubscribed ? "LOSSLESS ACTIVE" : "GET HIFI PREMIUM"}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1.5 cursor-pointer z-30 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-[1px] bg-white transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-6 h-[1px] bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-[1px] bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-10 flex flex-col justify-center items-center gap-8 text-xl">
          <button 
            onClick={() => { setCurrentTab('discover'); setMobileMenuOpen(false); }}
            className={`font-mono-tech uppercase tracking-widest ${currentTab === 'discover' ? 'text-sky-300' : 'text-slate-400'}`}
          >
            Discover
          </button>
          <button 
            onClick={() => { setCurrentTab('playlists'); setMobileMenuOpen(false); }}
            className={`font-mono-tech uppercase tracking-widest ${currentTab === 'playlists' ? 'text-sky-300' : 'text-slate-400'}`}
          >
            Playlists
          </button>
          <button 
            onClick={() => { setCurrentTab('artists'); setMobileMenuOpen(false); }}
            className={`font-mono-tech uppercase tracking-widest ${currentTab === 'artists' ? 'text-sky-300' : 'text-slate-400'}`}
          >
            Artists
          </button>
          <button 
            onClick={() => { setCurrentTab('premium'); setMobileMenuOpen(false); }}
            className={`font-mono-tech uppercase tracking-widest ${currentTab === 'premium' ? 'text-sky-300' : 'text-slate-400'}`}
          >
            Premium Upgrade
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); }}
            className="mt-12 text-xs font-mono-tech text-slate-500 hover:text-white flex items-center gap-2 border border-slate-800 px-4 py-2 rounded-full"
          >
            <iconify-icon icon="solar:arrow-left-linear" /> Close Menu
          </button>
        </div>
      )}

      {/* TAB VIEWPORTS */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex-grow flex flex-col justify-start">

        {/* 1. DISCOVER TAB (Home / Hero / Discover tracks) */}
        {currentTab === 'discover' && (
          <div className="w-full flex flex-col gap-12 mt-6">
            
            {/* HERO HERO SECTION FROM THE PROVIDED TEMPLATE */}
            <div className="text-center max-w-4xl mx-auto pt-8 pb-10 flex flex-col items-center">
              <h1 className="text-[2.5rem] md:text-[4.5rem] lg:text-[5rem] font-semibold tracking-tighter leading-[1.05] mb-6 select-none">
                <span className="text-sky-200 font-geist font-light tracking-tighter mr-3">Feel</span>
                <span className="text-slate-100 font-geist font-light tracking-tighter mr-3">Every</span>
                <span className="text-slate-100 font-geist font-light tracking-tighter mr-3">Beat</span>
                <span className="text-slate-200 font-geist font-light tracking-tighter">Perfectly</span>
              </h1>

              <p className="text-sm md:text-base text-slate-300 font-light max-w-[700px] mx-auto leading-relaxed mb-8 font-geist">
                Discover millions of tracks, curated playlists, and exclusive artists. Our high-fidelity audio engine and personalized recommendations ensure your daily soundtrack is always perfectly tuned to your life.
              </p>

              <div className="flex gap-4">
                <button 
                  onClick={handleStartListening}
                  className="px-8 py-3 rounded-xl bg-sky-200 text-slate-950 text-xs font-mono-tech uppercase tracking-wider font-semibold hover:bg-white hover:scale-[1.03] transition-all"
                >
                  Start Listening
                </button>
                <button 
                  onClick={() => { setCurrentTab('premium'); }}
                  className="px-8 py-3 rounded-xl border border-white/20 text-xs font-mono-tech uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  View Premium
                </button>
              </div>
            </div>

            {/* TRACKS LISTING with Search */}
            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800/60 pb-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                    Trending Tracks
                  </h2>
                  <p className="text-xs text-slate-400 font-mono-tech mt-1">High fidelity simulated stream engine</p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <iconify-icon icon="solar:magnifer-linear" class="absolute left-3.5 top-2.5 text-slate-400 text-lg" />
                  <input 
                    type="text" 
                    placeholder="Search by track, artist, genre..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-950/60 border border-slate-800 rounded-xl text-xs font-mono-tech placeholder-slate-500 focus:outline-none focus:border-sky-500/50"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                    >
                      <iconify-icon icon="solar:close-circle-linear" />
                    </button>
                  )}
                </div>
              </div>

              {/* Tracks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTracks.map(track => {
                  const isCurrent = track.id === currentTrack.id;
                  const isLiked = likedTracks.includes(track.id);
                  return (
                    <div 
                      key={track.id} 
                      className={`glass-panel p-4 rounded-xl flex items-center justify-between gap-4 group transition-all duration-300 hover:border-slate-700 hover:translate-y-[-2px] ${
                        isCurrent ? "border-sky-500/40 bg-sky-500/5" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Cover Image */}
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
                          <button 
                            onClick={() => selectTrack(track)}
                            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <iconify-icon 
                              icon={isCurrent && isPlaying ? "solar:pause-bold" : "solar:play-bold"} 
                              class="text-white text-xl" 
                            />
                          </button>
                        </div>
                        {/* Details */}
                        <div>
                          <p className={`text-sm font-semibold truncate max-w-[140px] ${isCurrent ? 'text-sky-300' : 'text-white'}`}>
                            {track.title}
                          </p>
                          <p className="text-xs text-slate-400 truncate max-w-[140px]">{track.artist}</p>
                          <span className="inline-block mt-1 text-[9px] font-mono-tech px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                            {track.genre}
                          </span>
                        </div>
                      </div>

                      {/* Side controls & dropdown menu for custom playlists */}
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => toggleLikeTrack(track.id)} 
                          className={`p-2 rounded-full transition-colors hover:bg-slate-800 ${isLiked ? 'text-rose-400' : 'text-slate-500'}`}
                        >
                          <iconify-icon icon={isLiked ? "solar:heart-bold" : "solar:heart-linear"} class="text-lg" />
                        </button>

                        {/* Add to Playlist Quick Dropdown */}
                        <div className="relative group/menu">
                          <button className="p-2 rounded-full text-slate-500 hover:text-white hover:bg-slate-800">
                            <iconify-icon icon="solar:add-folder-linear" class="text-lg" />
                          </button>
                          {/* Floating user playlist picker */}
                          <div className="absolute right-0 bottom-full mb-2 hidden group-hover/menu:block bg-slate-950 border border-slate-800 rounded-xl py-2 w-48 shadow-2xl z-30">
                            <p className="px-3 py-1 text-[10px] font-mono-tech uppercase tracking-wider text-slate-500">Add to:</p>
                            {userPlaylists.map(playlist => (
                              <button
                                key={playlist.id}
                                onClick={() => addTrackToPlaylist(track.id, playlist.id, playlist.title)}
                                className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-white truncate flex items-center gap-2"
                              >
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: playlist.color }}></span>
                                {playlist.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {filteredTracks.length === 0 && (
                  <div className="col-span-full py-12 text-center">
                    <iconify-icon icon="solar:danger-broken" class="text-3xl text-slate-600 mb-2" />
                    <p className="text-sm text-slate-400">No tracks matches "{searchQuery}"</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="mt-3 text-xs text-sky-400 underline"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* CURATED HIGHLIGHT PLAYLISTS */}
            <div className="w-full flex flex-col gap-6 mt-4">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Curated Playlists
                </h2>
                <p className="text-xs text-slate-400 font-mono-tech mt-1">Sourced from top creators & atmospheric experts</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CURATED_PLAYLISTS.map(playlist => (
                  <div 
                    key={playlist.id} 
                    className="glass-panel rounded-xl overflow-hidden group hover:border-slate-700 transition-all duration-300 flex flex-col"
                  >
                    <div className="h-44 w-full relative overflow-hidden">
                      <img src={playlist.image} alt={playlist.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex gap-1">
                        {playlist.tags.map(t => (
                          <span key={t} className="text-[9px] font-mono-tech px-2 py-0.5 rounded bg-black/75 text-sky-300">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors">{playlist.title}</h3>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">{playlist.description}</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500">
                        <span className="font-mono-tech">{playlist.trackCount} Ultra HQ tracks</span>
                        <button 
                          onClick={() => {
                            // Play first item of curated track as dynamic test
                            selectTrack(tracks[0]);
                            showToast(`Queued playlist: ${playlist.title}`, 'success');
                          }}
                          className="text-sky-300 hover:text-white flex items-center gap-1 font-mono-tech text-[11px] uppercase tracking-wider"
                        >
                          Listen Now <iconify-icon icon="solar:arrow-right-linear" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 2. PLAYLISTS TAB (User custom and creation workspace) */}
        {currentTab === 'playlists' && (
          <div className="w-full mt-6 flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Your Audio Vault</h2>
              <p className="text-xs text-slate-400 font-mono-tech mt-1">Design and aggregate high fidelity personalized playback rooms</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Creator Panel */}
              <div className="glass-panel p-6 rounded-xl h-fit flex flex-col gap-6">
                <h3 className="text-sm font-mono-tech text-sky-300 uppercase tracking-wider border-b border-slate-800 pb-3">
                  Create Room Room
                </h3>
                
                <form onSubmit={createPlaylist} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 font-mono-tech">Playlist Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Midnight Codebase"
                      value={newPlaylistName}
                      onChange={(e) => setNewPlaylistName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono-tech focus:outline-none focus:border-sky-500/50"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 font-mono-tech">Branding Ambient Accent</label>
                    <div className="flex gap-2.5 mt-1">
                      {['#bae6fd', '#ec4899', '#8b5cf6', '#10b981', '#f43f5e', '#f59e0b'].map(color => (
                        <button 
                          key={color}
                          type="button"
                          onClick={() => setNewPlaylistColor(color)}
                          className={`w-6 h-6 rounded-full transition-all border ${
                            newPlaylistColor === color ? "scale-125 border-white" : "border-transparent"
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-2 py-3 bg-sky-200 text-slate-950 font-mono-tech text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-white transition-all"
                  >
                    Add Playlist
                  </button>
                </form>

                <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/40 text-[11px] text-slate-400 leading-relaxed">
                  <iconify-icon icon="solar:info-square-linear" class="text-sky-300 mr-1 align-middle" />
                  Your current active track <strong>{currentTrack.title}</strong> will automatically seed the initial playlist.
                </div>
              </div>

              {/* Your Playlists Grid */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <h3 className="text-sm font-mono-tech text-slate-300 uppercase tracking-wider">
                  Operational Rooms ({userPlaylists.length + 1})
                </h3>

                {/* Default Like playlist */}
                <div className="glass-panel p-5 rounded-xl border-l-4 border-rose-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-slate-600 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-500/20 text-rose-500 rounded-lg flex items-center justify-center">
                      <iconify-icon icon="solar:heart-bold" class="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold">Liked Soundtrack Room</h4>
                      <p className="text-xs text-slate-400 font-mono-tech mt-1">{likedTracks.length} tracks registered</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        if (likedTracks.length === 0) {
                          showToast("No liked tracks yet!", "warning");
                          return;
                        }
                        const firstLiked = tracks.find(t => likedTracks.includes(t.id));
                        if (firstLiked) selectTrack(firstLiked);
                      }}
                      className="px-4 py-2 bg-rose-500/20 text-rose-300 font-mono-tech text-xs rounded-lg hover:bg-rose-500/30 transition-all"
                    >
                      Stream Room
                    </button>
                  </div>
                </div>

                {/* Custom User Playlists */}
                {userPlaylists.map(playlist => (
                  <div 
                    key={playlist.id} 
                    className="glass-panel p-5 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-slate-700 transition-all"
                    style={{ borderLeft: `4px solid ${playlist.color}` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-950 font-semibold" style={{ backgroundColor: playlist.color }}>
                        <iconify-icon icon="solar:folder-with-files-bold" class="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold">{playlist.title}</h4>
                        <p className="text-xs text-slate-400 font-mono-tech mt-1">{playlist.tracks.length} track(s) loaded</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => {
                          if (playlist.tracks.length === 0) {
                            showToast("Playlist has no tracks!", "warning");
                            return;
                          }
                          const foundTrack = tracks.find(t => t.id === playlist.tracks[0]);
                          if (foundTrack) selectTrack(foundTrack);
                        }}
                        className="px-4 py-2 bg-white/5 text-slate-300 hover:text-white border border-slate-800 font-mono-tech text-xs rounded-lg hover:bg-slate-800 transition-all"
                      >
                        Play Room
                      </button>
                      <button 
                        onClick={() => {
                          setUserPlaylists(prev => prev.filter(p => p.id !== playlist.id));
                          showToast("Deleted playlist", "info");
                        }}
                        className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                        title="Delete Room"
                      >
                        <iconify-icon icon="solar:trash-bin-trash-linear" class="text-lg" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. ARTISTS TAB (Featuring profiles & follow system) */}
        {currentTab === 'artists' && (
          <div className="w-full mt-6 flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Synthesizer & Acoustic Pioneers</h2>
              <p className="text-xs text-slate-400 font-mono-tech mt-1">Direct integration with premium content providers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeArtistList.map(artist => (
                <div key={artist.id} className="glass-panel p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start group hover:border-slate-700 transition-all">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                    <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between h-full min-h-[96px]">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">{artist.name}</h3>
                        <span className="text-[10px] font-mono-tech text-sky-200 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-full">
                          Verfied Resonance
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{artist.bio}</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-900/80 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-mono-tech">{artist.followers} resonance followers</span>
                      <button 
                        onClick={() => toggleFollowArtist(artist.id, artist.name)}
                        className={`px-4 py-1.5 rounded-lg font-mono-tech text-[10px] uppercase tracking-wider transition-all ${
                          artist.isFollowed 
                            ? "bg-sky-200 text-slate-950 hover:bg-white" 
                            : "border border-slate-700 text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        {artist.isFollowed ? "Following" : "Follow"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PREMIUM TAB (High quality plans and interactive checkout modal) */}
        {currentTab === 'premium' && (
          <div className="w-full mt-6 flex flex-col gap-10">
            <div className="text-center max-w-xl mx-auto flex flex-col items-center">
              <span className="inline-block text-[10px] font-mono-tech text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-wider mb-4 animate-bounce">
                Premium Fidelity Tier
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-white leading-tight">High-Fidelity Spatial Stream</h2>
              <p className="text-xs text-slate-400 font-mono-tech mt-2">
                Elevate your physical and intellectual audio spaces with fully uncompressed master-grade codecs.
              </p>

              {/* Annual switch */}
              <div className="flex items-center gap-3 mt-6 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                <button 
                  onClick={() => setIsAnnualPlan(false)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono-tech uppercase transition-all ${!isAnnualPlan ? "bg-slate-800 text-white" : "text-slate-400"}`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setIsAnnualPlan(true)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono-tech uppercase transition-all ${isAnnualPlan ? "bg-slate-800 text-white animate-pulse" : "text-slate-400"}`}
                >
                  Yearly (-20%)
                </button>
              </div>
            </div>

            {/* Pricing Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
              
              {/* Free Basic Tier */}
              <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between opacity-80 border-slate-800">
                <div>
                  <h3 className="text-xs font-mono-tech text-slate-400 uppercase tracking-widest">Base Listener</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-semibold">$0</span>
                    <span className="text-xs text-slate-400 font-mono-tech ml-2">/ month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    Standard compressed MP3 output with intermittent simulated metadata alerts. Highly capable default room.
                  </p>

                  <ul className="mt-6 flex flex-col gap-3 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-circle-linear" class="text-slate-500" />
                      Standard Stereo (128kbps)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-circle-linear" class="text-slate-500" />
                      Dynamic WebGL Atmosphere
                    </li>
                    <li className="flex items-center gap-2 text-slate-500 line-through">
                      <iconify-icon icon="solar:close-circle-linear" />
                      Lossless Spatial Audio codec
                    </li>
                  </ul>
                </div>

                <button 
                  disabled
                  className="w-full mt-8 py-3 bg-slate-900 text-slate-500 font-mono-tech text-xs uppercase tracking-wider rounded-lg"
                >
                  Current Default Tier
                </button>
              </div>

              {/* VIP Professional Tier */}
              <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between border-sky-500/40 glow-accent relative overflow-hidden bg-slate-950/40">
                <div className="absolute top-0 right-0 bg-sky-200 text-slate-950 font-mono-tech text-[9px] uppercase tracking-widest py-1 px-4 rounded-bl-xl font-semibold">
                  AUDIOPHILE STANDARD
                </div>

                <div>
                  <h3 className="text-xs font-mono-tech text-sky-300 uppercase tracking-widest">Resonance VIP</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-semibold">
                      {isAnnualPlan ? "$7.99" : "$9.99"}
                    </span>
                    <span className="text-xs text-slate-400 font-mono-tech ml-2">/ month</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                    Uncompressed 1411kbps Free Lossless Audio Codec (FLAC) spatial audio pipelines. Premium artist tracks unlocked.
                  </p>

                  <ul className="mt-6 flex flex-col gap-3 text-xs text-slate-200">
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-circle-bold" class="text-sky-300" />
                      Lossless Audiophile FLAC Stream
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-circle-bold" class="text-sky-300" />
                      Exclusive Premium-only tracks
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-circle-bold" class="text-sky-300" />
                      Dynamic Interactive Audio visualizer
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-circle-bold" class="text-sky-300" />
                      Unlimited personal room vaults
                    </li>
                  </ul>
                </div>

                {isPremiumSubscribed ? (
                  <div className="w-full mt-8 py-3 bg-emerald-500/20 text-emerald-300 text-center font-mono-tech text-xs rounded-lg border border-emerald-500/40">
                    <iconify-icon icon="solar:check-circle-bold" class="mr-1" /> Active Premium Account
                  </div>
                ) : (
                  <button 
                    onClick={() => setCheckoutModalOpen(true)}
                    className="w-full mt-8 py-3 bg-sky-200 text-slate-950 font-mono-tech text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-white transition-all transform hover:scale-[1.02]"
                  >
                    Upgrade Now
                  </button>
                )}
              </div>

            </div>
          </div>
        )}

      </div>

      {/* FIXED FOOTER CONTROLS (HIGH FIDELITY AUDIO PLAYER INTERACTION SHELL) */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 bg-black/85 backdrop-blur-md border-t border-slate-900 py-5 px-6 md:px-12 flex flex-col gap-3">
        
        {/* Progress Seeker Slider Bar */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono-tech text-slate-400 w-10 text-right">{formatTime(currentTime)}</span>
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickPosition = (e.clientX - rect.left) / rect.width;
              setCurrentTime(Math.floor(clickPosition * currentTrack.duration));
              if (!isPlaying) setIsPlaying(true);
            }}
            className="flex-grow h-1.5 bg-slate-800 rounded-full cursor-pointer relative group"
          >
            {/* Active tracking fill */}
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
              style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }}
            />
            {/* Seeker knob handle */}
            <div 
              className="absolute w-3 h-3 rounded-full bg-white border border-slate-950 opacity-0 group-hover:opacity-100 transition-opacity -top-1 pointer-events-none"
              style={{ left: `calc(${(currentTime / currentTrack.duration) * 100}% - 6px)` }}
            />
          </div>
          <span className="text-[10px] font-mono-tech text-slate-400 w-10 text-left">{formatTime(currentTrack.duration)}</span>
        </div>

        {/* Console control line */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Active track block */}
          <div className="flex items-center gap-3 w-1/3 min-w-[150px]">
            <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 relative group">
              <img src={currentTrack.coverUrl} alt={currentTrack.title} className="w-full h-full object-cover" />
            </div>
            <div className="truncate hidden sm:block">
              <p className="text-xs font-semibold text-white truncate max-w-[160px]">{currentTrack.title}</p>
              <p className="text-[10px] text-slate-400 truncate max-w-[160px]">{currentTrack.artist}</p>
            </div>
          </div>

          {/* Central Controls */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-6">
              <button 
                onClick={handlePrevTrack}
                className="text-slate-400 hover:text-white transition-colors"
                title="Previous Track"
              >
                <iconify-icon icon="solar:skip-back-bold" class="text-xl" />
              </button>
              
              <button 
                onClick={handlePlayPause}
                className="w-10 h-10 rounded-full bg-slate-50 text-slate-950 flex items-center justify-center hover:scale-105 transition-all"
                title={isPlaying ? "Pause" : "Play"}
              >
                <iconify-icon icon={isPlaying ? "solar:pause-bold" : "solar:play-bold"} class="text-xl" />
              </button>

              <button 
                onClick={handleNextTrack}
                className="text-slate-400 hover:text-white transition-colors"
                title="Next Track"
              >
                <iconify-icon icon="solar:skip-forward-bold" class="text-xl" />
              </button>
            </div>
          </div>

          {/* Audio State Visualizer & Volume */}
          <div className="flex items-center justify-end gap-6 w-1/3">
            
            {/* Visualizer Blocks (Simulated real-time equalizer canvas) */}
            <div className="hidden lg:flex items-end gap-0.5 h-6">
              {visualizerBars.map((h, i) => (
                <div 
                  key={i} 
                  className="w-[2px] rounded-t bg-sky-400/80 transition-all duration-150" 
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            {/* Like */}
            <button 
              onClick={() => toggleLikeTrack(currentTrack.id)}
              className={`p-1 transition-colors ${likedTracks.includes(currentTrack.id) ? 'text-rose-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <iconify-icon icon="solar:heart-bold" class="text-lg" />
            </button>

            {/* Volume controller */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsMuted(!isMuted)} 
                className="text-slate-400 hover:text-white"
              >
                <iconify-icon icon={isMuted ? "solar:volume-mute-linear" : "solar:volume-loud-linear"} class="text-lg" />
              </button>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseInt(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-16 md:w-20 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
            </div>

          </div>

        </div>
      </footer>

      {/* CHECKOUT MODAL FOR PREMIUM */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="glass-panel-heavy p-8 rounded-2xl w-full max-w-md flex flex-col gap-6 animate-scale-up">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Unlock Resonance VIP</h3>
                <p className="text-xs text-slate-400 font-mono-tech mt-1">Direct uncompressed spatial audio</p>
              </div>
              <button 
                onClick={() => setCheckoutModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <iconify-icon icon="solar:close-circle-linear" class="text-2xl" />
              </button>
            </div>

            <form onSubmit={handlePremiumSubscribe} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400">Cardholder Name</label>
                <input 
                  type="text"
                  placeholder="Aria Thorne"
                  value={checkoutName}
                  onChange={(e) => setCheckoutName(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs font-mono-tech focus:outline-none focus:border-sky-500/50"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400">Card Number</label>
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="4000 1234 5678 9010"
                    maxLength={19}
                    value={checkoutCard}
                    onChange={(e) => setCheckoutCard(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 pl-10 text-xs font-mono-tech focus:outline-none focus:border-sky-500/50"
                    required
                  />
                  <iconify-icon icon="solar:card-send-linear" class="absolute left-3.5 top-3.5 text-slate-500 text-lg" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400">Expiry Date</label>
                  <input 
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs font-mono-tech focus:outline-none focus:border-sky-500/50"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400">CVV</label>
                  <input 
                    type="password"
                    placeholder="•••"
                    maxLength={3}
                    className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs font-mono-tech focus:outline-none focus:border-sky-500/50"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 py-3 bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-950 font-mono-tech text-xs uppercase tracking-widest font-semibold rounded-lg hover:from-white hover:to-white hover:scale-[1.02] transition-all"
              >
                Pay & Subscribe {isAnnualPlan ? "$95.88 / year" : "$9.99 / month"}
              </button>
            </form>

            <p className="text-[10px] text-slate-500 text-center leading-relaxed">
              Safe simulated sandbox billing. Resonance does not persist real customer card data.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}