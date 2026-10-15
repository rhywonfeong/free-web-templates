import React, { useState, useEffect, useRef, useCallback } from 'react';

const categories = [
  { id: 'All Homes', icon: 'solar:home-2-linear' },
  { id: 'Apartments', icon: 'solar:city-linear' },
  { id: 'With Pool', icon: 'solar:swimming-pool-linear' },
  { id: 'Furnished', icon: 'solar:armchair-linear' },
  { id: 'Garden', icon: 'solar:tree-linear' },
  { id: 'Gated', icon: 'solar:shield-keyhole-linear' },
  { id: 'New Build', icon: 'solar:star-ring-linear' },
  { id: 'Gym', icon: 'solar:dumbbell-linear' },
  { id: 'Pet Friendly', icon: 'solar:dog-paw-linear' },
  { id: 'Land', icon: 'solar:map-linear' },
  { id: 'Balcony', icon: 'solar:sofa-linear' }
];

const properties = [
  {
    id: 1,
    tagText: "Featured",
    tagClass: "bg-white/95 backdrop-blur-md text-zinc-900 border-white/20",
    imgSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "Modern Tropical Villa",
    rating: "4.9",
    location: "Siem Reap, Cambodia",
    beds: 4,
    baths: 3,
    extraIcon: "solar:ruler-linear",
    extraText: "250m²",
    priceLabel: "Asking Price",
    price: "$850,000",
    priceUnit: null,
    agentImg: "https://i.pravatar.cc/100?img=33"
  },
  {
    id: 2,
    tagText: "Just Listed",
    tagClass: "bg-zinc-900/95 backdrop-blur-md text-white border-zinc-700",
    imgSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "Luxury Penthouse",
    rating: "5.0",
    location: "BKK1, Phnom Penh",
    beds: 3,
    baths: 3,
    extraIcon: "solar:buildings-linear",
    extraText: "City View",
    priceLabel: "For Sale",
    price: "$1,200,000",
    priceUnit: null,
    agentImg: "https://i.pravatar.cc/100?img=47"
  },
  {
    id: 3,
    tagText: "New Build",
    tagClass: "bg-white/95 backdrop-blur-md text-zinc-900 border-white/20",
    imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Minimalist Family Home",
    rating: "4.8",
    location: "Toul Kork, Phnom Penh",
    beds: 5,
    baths: 4,
    extraIcon: "solar:tree-linear",
    extraText: "Garden",
    priceLabel: "Asking Price",
    price: "$540,000",
    priceUnit: null,
    agentImg: "https://i.pravatar.cc/100?img=12"
  },
  {
    id: 4,
    tagText: "For Rent",
    tagClass: "bg-zinc-900/95 backdrop-blur-md text-white border-zinc-700",
    imgSrc: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    title: "Riverside Condo",
    rating: "4.7",
    location: "Daun Penh, Phnom Penh",
    beds: 1,
    baths: 1,
    extraIcon: "solar:swimming-pool-linear",
    extraText: "Pool/Gym",
    priceLabel: "Monthly Rent",
    price: "$850",
    priceUnit: "/mo",
    agentImg: "https://i.pravatar.cc/100?img=25"
  },
  {
    id: 5,
    tagText: "Hot Deal",
    tagClass: "bg-rose-600/95 backdrop-blur-md text-white border-rose-500",
    imgSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Courtyard Oasis",
    rating: "4.9",
    location: "Chroy Changvar",
    beds: 3,
    baths: 3,
    extraIcon: "solar:swimming-pool-linear",
    extraText: "Private Pool",
    priceLabel: "Asking Price",
    price: "$480,000",
    priceUnit: null,
    agentImg: "https://i.pravatar.cc/100?img=36"
  },
  {
    id: 6,
    tagText: "For Rent",
    tagClass: "bg-zinc-900/95 backdrop-blur-md text-white border-zinc-700",
    imgSrc: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    title: "Downtown Loft",
    rating: "4.6",
    location: "BKK1, Phnom Penh",
    beds: 2,
    baths: 2,
    extraIcon: "solar:sofa-linear",
    extraText: "Furnished",
    priceLabel: "Monthly Rent",
    price: "$1,500",
    priceUnit: "/mo",
    agentImg: "https://i.pravatar.cc/100?img=52"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Buy');
  const [searchValue, setSearchValue] = useState('');
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Homes');
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const mainScrollRef = useRef(null);
  const searchWrapperRef = useRef(null);
  const categoryScrollRef = useRef(null);
  const lastKnownScrollTop = useRef(0);
  const rafId = useRef(null);

  // Scroll Handler for Header Collapse with hysteresis
  useEffect(() => {
    const handleScroll = () => {
      if (!mainScrollRef.current) return;
      lastKnownScrollTop.current = mainScrollRef.current.scrollTop;

      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        let nextScrolled = isScrolled;

        if (!isScrolled && lastKnownScrollTop.current > 60) {
          nextScrolled = true;
        } else if (isScrolled && lastKnownScrollTop.current < 20) {
          nextScrolled = false;
        }

        if (nextScrolled !== isScrolled) {
          setIsScrolled(nextScrolled);
        }
      });
    };

    const scrollEl = mainScrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll, { passive: true });
      // Initial check
      if (scrollEl.scrollTop > 60) setIsScrolled(true);
    }
    return () => {
      if (scrollEl) scrollEl.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  // Carousel Scroll Handler
  const handleCarouselScroll = useCallback(() => {
    if (!categoryScrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = categoryScrollRef.current;
    setShowLeftFade(scrollLeft > 0);
    setShowRightFade(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const catScroll = categoryScrollRef.current;
    if (catScroll) {
      catScroll.addEventListener('scroll', handleCarouselScroll, { passive: true });
      window.addEventListener('resize', handleCarouselScroll);
      // Slight delay to ensure layout is done before checking limits
      setTimeout(handleCarouselScroll, 100);
    }
    return () => {
      if (catScroll) {
        catScroll.removeEventListener('scroll', handleCarouselScroll);
        window.removeEventListener('resize', handleCarouselScroll);
      }
    };
  }, [handleCarouselScroll]);

  const scrollCarousel = (amount) => {
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Outside Click for Search Dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
        setIsSearchDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown cleanly when scrolling triggers compact view
  useEffect(() => {
    if (isScrolled) {
      setIsSearchDropdownOpen(false);
    }
  }, [isScrolled]);

  const getCompactLabels = () => {
    switch (activeTab) {
      case 'Buy': return { l1: 'Any price', l2: 'Any type' };
      case 'Rent': return { l1: 'Any date', l2: 'Any budget' };
      case 'Daily': return { l1: 'Anytime', l2: 'Add guests' };
      default: return { l1: 'Any price', l2: 'Any type' };
    }
  };
  const { l1: compactL1, l2: compactL2 } = getCompactLabels();

  const renderMiddleSearchSegment = () => {
    if (activeTab === 'Buy') return (
      <div id="search-middle-Buy" className="flex flex-1 items-center">
        <div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50">
          <div className="flex flex-col px-2">
            <span className="text-[10px] uppercase font-semibold text-zinc-900 tracking-wider">Price</span>
            <span className="text-sm text-zinc-500 truncate">Any range</span>
          </div>
        </div>
        <div className="w-px h-8 shrink-0 bg-zinc-200"></div>
        <div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 rounded-r-full">
          <div className="flex flex-col px-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">Type</span>
            <span className="text-sm text-zinc-500 truncate">Any type</span>
          </div>
        </div>
      </div>
    );
    if (activeTab === 'Rent') return (
      <div id="search-middle-Rent" className="flex flex-1 items-center">
        <div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50">
          <div className="flex flex-col px-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">Move in</span>
            <span className="text-sm text-zinc-500 truncate">Add date</span>
          </div>
        </div>
        <div className="w-px h-8 shrink-0 bg-zinc-200"></div>
        <div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 rounded-r-full">
          <div className="flex flex-col px-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">Budget</span>
            <span className="text-sm text-zinc-500 truncate">Per month</span>
          </div>
        </div>
      </div>
    );
    if (activeTab === 'Daily') return (
      <div id="search-middle-Daily" className="flex flex-1 items-center">
        <div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50">
          <div className="flex flex-col px-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">Dates</span>
            <span className="text-sm text-zinc-500 truncate">Add dates</span>
          </div>
        </div>
        <div className="w-px h-8 shrink-0 bg-zinc-200"></div>
        <div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 rounded-r-full">
          <div className="flex flex-col px-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">Guests</span>
            <span className="text-sm text-zinc-500 truncate">Add guests</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="antialiased overflow-hidden w-full h-screen relative bg-[var(--dash-bg)] text-[var(--dash-heading)]">
      <div
        id="main-scroll"
        ref={mainScrollRef}
        className="w-full h-full overflow-y-auto no-scrollbar relative flex flex-col scroll-smooth"
        style={{ overflowAnchor: 'none' }}
      >
        {/* Sticky Header */}
        <header
          className="sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300"
          style={{ backgroundColor: 'var(--dash-card-bg-alpha)', borderColor: 'var(--dash-border-light)' }}
        >
          {/* Header Search & Tabs Container */}
          <div 
            className="relative w-full transition-[height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-20" 
            style={{ height: isScrolled ? '72px' : '144px' }}
          >
            {/* Compact Search (Shows on Scroll) */}
            <div 
              className={`absolute inset-x-0 top-0 h-[72px] flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isScrolled 
                  ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                  : 'opacity-0 scale-[0.9] pointer-events-none translate-y-4'
              }`}
            >
              <button
                type="button"
                onClick={() => mainScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center rounded-full border shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md active:scale-[0.98] bg-white border-zinc-200"
              >
                <span className="flex items-center gap-2 pl-5 pr-4 py-2.5 text-sm font-medium border-r border-zinc-200 text-zinc-900">
                  <iconify-icon icon="solar:magnifer-linear" className="text-lg opacity-50"></iconify-icon>
                  Anywhere
                </span>
                <span className="flex items-center px-4 py-2.5 text-sm border-r border-zinc-200 text-zinc-500">
                  {compactL1}
                </span>
                <span className="flex items-center px-4 py-2.5 text-sm text-zinc-500">
                  {compactL2}
                </span>
                <span className="size-8 rounded-full flex items-center justify-center shrink-0 mr-1.5 ml-2 bg-zinc-900 text-white">
                  <iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" className="text-sm"></iconify-icon>
                </span>
              </button>
            </div>

            {/* Large Search & Tabs (Collapses on Scroll) */}
            <div 
              className={`absolute inset-x-0 top-0 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top ${
                isScrolled 
                  ? 'opacity-0 scale-[0.95] -translate-y-2 pointer-events-none' 
                  : 'opacity-100 scale-100 pointer-events-auto translate-y-0'
              }`}
            >
              {/* Tabs */}
              <div className="flex justify-center pt-4 pb-2">
                <nav className="flex items-center gap-2" id="tab-nav">
                  {[
                    { id: 'Buy', icon: 'solar:home-angle-linear' },
                    { id: 'Rent', icon: 'solar:buildings-linear' },
                    { id: 'Daily', icon: 'solar:calendar-date-linear' }
                  ].map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`tab-btn relative flex flex-col items-center px-6 py-2 cursor-pointer transition-all duration-200 group ${isActive ? 'text-zinc-900' : 'text-zinc-500'}`}
                      >
                        <iconify-icon icon={tab.icon} strokeWidth="1.5" className="text-2xl mb-1.5 transition-transform duration-200 group-hover:scale-110"></iconify-icon>
                        <span className="text-sm font-medium tracking-tight">{tab.id}</span>
                        <span className={`tab-indicator absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-200 ${isActive ? 'bg-zinc-900' : 'bg-transparent'}`}></span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Large Search Bar */}
              <div className="max-w-[860px] mx-auto px-5 pb-6 flex items-center justify-center gap-3 w-full">
                {/* Main Search Wrapper */}
                <div className="flex items-center w-full rounded-full border transition-shadow bg-white border-zinc-200 relative shadow-md hover:shadow-lg duration-300" id="search-wrapper">
                  {/* Where Segment */}
                  <div className="relative flex-1" id="search-where" ref={searchWrapperRef}>
                    <div className="flex items-center gap-3 pl-6 pr-4 py-3 cursor-pointer rounded-l-full transition-colors hover:bg-zinc-50 group">
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">
                          Where
                        </span>
                        <input
                          type="text"
                          placeholder="City, neighborhood…"
                          className="border-none outline-none placeholder:text-zinc-500 truncate text-sm text-zinc-900 bg-transparent w-full"
                          autoComplete="off"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          onFocus={() => setIsSearchDropdownOpen(true)}
                        />
                      </div>
                      {searchValue.trim() !== '' && (
                        <button
                          type="button"
                          onClick={() => setSearchValue('')}
                          className="size-5 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition-colors bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                        >
                          <iconify-icon icon="solar:close-circle-linear" className="text-sm"></iconify-icon>
                        </button>
                      )}
                    </div>

                    {/* Dropdown Suggestion */}
                    {isSearchDropdownOpen && (
                      <div className="absolute top-full left-0 mt-3 w-[360px] rounded-2xl border border-zinc-200 shadow-lg overflow-hidden z-50 bg-white">
                        <div className="py-2">
                          <div className="px-4 py-2 text-xs font-semibold text-zinc-500 tracking-tight">
                            Recent searches
                          </div>
                          <button type="button" className="w-full flex items-center gap-4 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 text-left">
                            <div className="size-10 rounded-xl flex items-center justify-center shrink-0 bg-zinc-100 text-zinc-900">
                              <iconify-icon icon="solar:map-point-linear" className="text-xl"></iconify-icon>
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm font-medium text-zinc-900 truncate">Phnom Penh</span>
                              <span className="text-xs text-zinc-500 truncate">1,204 properties · Cambodia</span>
                            </div>
                          </button>
                          <button type="button" className="w-full flex items-center gap-4 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 text-left">
                            <div className="size-10 rounded-xl flex items-center justify-center shrink-0 bg-zinc-100 text-zinc-900">
                              <iconify-icon icon="solar:map-point-linear" className="text-xl"></iconify-icon>
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm font-medium text-zinc-900 truncate">Siem Reap</span>
                              <span className="text-xs text-zinc-500 truncate">342 properties · Cambodia</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="w-px h-8 shrink-0 bg-zinc-200"></div>

                  {/* Dynamic Middle Segments */}
                  {renderMiddleSearchSegment()}

                  {/* Search Action Button */}
                  <div className="pr-2 pl-1 shrink-0 z-10 bg-white md:bg-transparent rounded-r-full absolute right-0 md:relative h-full flex items-center">
                    <button type="button" className="size-10 md:size-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-95 bg-zinc-900 shadow-sm">
                      <iconify-icon icon="solar:magnifer-linear" strokeWidth="2" className="text-white text-lg md:text-xl"></iconify-icon>
                    </button>
                  </div>
                </div>

                {/* Filter Button */}
                <button type="button" className="hidden md:flex size-14 rounded-full border border-zinc-200 items-center justify-center cursor-pointer transition-all hover:bg-zinc-50 active:scale-95 shrink-0 bg-white text-zinc-900 shadow-sm hover:border-zinc-300">
                  <iconify-icon icon="solar:tuning-3-linear" strokeWidth="1.5" className="text-xl"></iconify-icon>
                </button>
              </div>
            </div>
          </div>

          {/* Categories Carousel */}
          <div className="border-t border-zinc-200 bg-white relative z-10">
            <div className="max-w-[1400px] mx-auto relative group">
              {/* Left Arrow Fade */}
              <div
                className={`absolute left-0 top-0 bottom-0 z-10 flex items-center pl-4 bg-gradient-to-r from-white via-white/90 to-transparent w-24 transition-opacity duration-300 ${showLeftFade ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              >
                <button
                  type="button"
                  onClick={() => scrollCarousel(-300)}
                  className="size-8 rounded-full border border-zinc-200 flex items-center justify-center cursor-pointer transition-all hover:shadow-md active:scale-95 bg-white text-zinc-900"
                >
                  <iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" className="text-lg"></iconify-icon>
                </button>
              </div>

              {/* Scroll Area */}
              <div
                ref={categoryScrollRef}
                className="flex overflow-x-auto scroll-smooth no-scrollbar md:px-12 pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-end"
              >
                {categories.map((cat) => {
                  const isCatActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative text-zinc-900 ${isCatActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                    >
                      <iconify-icon icon={cat.icon} strokeWidth="1.5" className="text-[26px] transition-transform duration-200 hover:scale-110"></iconify-icon>
                      <span className="text-xs font-medium whitespace-nowrap">{cat.id}</span>
                      <div className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 ${isCatActive ? 'bg-zinc-900' : 'bg-transparent'}`}></div>
                    </button>
                  );
                })}
              </div>

              {/* Right Arrow Fade */}
              <div
                className={`absolute right-0 top-0 bottom-0 z-10 flex items-center pr-4 justify-end bg-gradient-to-l from-white via-white/90 to-transparent w-24 transition-opacity duration-300 ${showRightFade ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              >
                <button
                  type="button"
                  onClick={() => scrollCarousel(300)}
                  className="size-8 rounded-full border border-zinc-200 flex items-center justify-center cursor-pointer transition-all hover:shadow-md active:scale-95 bg-white text-zinc-900"
                >
                  <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" className="text-lg"></iconify-icon>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content (Property Grid) */}
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-8 min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8">
            {properties.map((prop) => (
              <div key={prop.id} className="group relative flex flex-col bg-white rounded-[24px] p-3 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out border border-zinc-100 hover:border-zinc-200 hover:-translate-y-1 cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-zinc-100 mb-4 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className={`absolute top-3 left-3 z-20 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm border ${prop.tagClass}`}>
                    {prop.tagText}
                  </div>
                  
                  <button type="button" className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white hover:shadow-md transition-all duration-300 border border-white/30 text-white hover:text-rose-500 group/btn">
                    <iconify-icon icon="solar:heart-linear" strokeWidth="2" className="text-lg transition-transform group-active/btn:scale-90"></iconify-icon>
                  </button>

                  <img src={prop.imgSrc} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>

                {/* Content */}
                <div className="flex flex-col px-1 pb-1 flex-1">
                  <div className="flex justify-between items-start mb-1.5 gap-2">
                    <h3 className="font-semibold text-zinc-900 truncate text-[17px] tracking-tight group-hover:text-zinc-600 transition-colors">
                      {prop.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm font-semibold text-zinc-900 shrink-0 bg-zinc-100 px-2 py-0.5 rounded-lg">
                      <iconify-icon icon="solar:star-bold" className="text-amber-400"></iconify-icon>
                      {prop.rating}
                    </div>
                  </div>
                  
                  <p className="text-[13px] text-zinc-500 truncate flex items-center gap-1.5 mb-4">
                    <iconify-icon icon="solar:map-point-linear" className="text-zinc-400 text-sm"></iconify-icon>
                    {prop.location}
                  </p>

                  {/* Features Pills */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-600 bg-zinc-50 px-2.5 py-1.5 rounded-lg border border-zinc-100/80">
                      <iconify-icon icon="solar:bed-linear" className="text-zinc-400 text-sm"></iconify-icon>
                      <span>{prop.beds} <span className="hidden sm:inline-block">Beds</span></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-600 bg-zinc-50 px-2.5 py-1.5 rounded-lg border border-zinc-100/80">
                      <iconify-icon icon="solar:bath-linear" className="text-zinc-400 text-sm"></iconify-icon>
                      <span>{prop.baths} <span className="hidden sm:inline-block">Baths</span></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-600 bg-zinc-50 px-2.5 py-1.5 rounded-lg border border-zinc-100/80 truncate flex-1 min-w-0">
                      <iconify-icon icon={prop.extraIcon} className="text-zinc-400 text-sm shrink-0"></iconify-icon>
                      <span className="truncate">{prop.extraText}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-zinc-100 pt-3.5 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-0.5">
                        {prop.priceLabel}
                      </span>
                      <span className="font-bold text-zinc-900 text-[17px] tracking-tight flex items-baseline gap-1">
                        {prop.price}
                        {prop.priceUnit && <span className="text-[13px] font-medium text-zinc-500">{prop.priceUnit}</span>}
                      </span>
                    </div>
                    <div className="relative shrink-0">
                      <div className="size-9 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 shadow-sm">
                        <img src={prop.agentImg} alt="Agent" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 size-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 mb-4">
            <button type="button" className="px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all hover:scale-[1.02] active:scale-95 bg-zinc-900 text-white shadow-md">
              Show more
            </button>
          </div>
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-zinc-200 bg-zinc-50 mt-auto shrink-0">
          <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 items-center font-bold tracking-tight text-zinc-900">
                <iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="2" className="text-lg"></iconify-icon>
                AP
              </div>
              <span className="text-sm text-zinc-500 ml-2">
                © 2026 Anachak Property
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Privacy</a>
              <a href="#" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Terms</a>
              <a href="#" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Sitemap</a>
              <a href="#" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}