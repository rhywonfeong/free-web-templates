import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { stories } from './data';

// --- Shared Components ---

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform">
            <iconify-icon icon="solar:star-fall-bold" width="24"></iconify-icon>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-slate-800">
            DreamTales
          </span>
        </Link>
        
        {isHome && (
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-violet-600 hover:bg-violet-50 transition-colors shadow-sm">
              <iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
            </button>
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm cursor-pointer">
              <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const StoryCard = ({ story }) => (
  <Link 
    to={`/story/${story.id}`}
    className="group relative flex flex-col glass-panel rounded-[32px] p-4 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
  >
    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-4">
      <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
      <img 
        src={story.cover} 
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-sm">
        <iconify-icon icon="solar:book-bookmark-bold" className="text-violet-500"></iconify-icon>
        {story.category}
      </div>
    </div>
    
    <div className="px-2 flex-1 flex flex-col">
      <h3 className="font-heading font-bold text-lg text-slate-800 tracking-tight mb-1 line-clamp-1 group-hover:text-violet-600 transition-colors">
        {story.title}
      </h3>
      <p className="text-slate-500 text-sm mb-3 line-clamp-2 leading-relaxed">
        {story.description}
      </p>
      
      <div className="mt-auto flex items-center justify-between text-xs font-medium text-slate-400">
        <span className="flex items-center gap-1.5">
          <iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
          {story.author}
        </span>
        <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-full text-slate-500">
          <iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
          {story.readTime}
        </span>
      </div>
    </div>
  </Link>
);

// --- Views ---

const Home = () => {
  const featuredStory = stories[0];
  const regularStories = stories.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 via-white to-fuchsia-50/50 pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <header className="space-y-2">
          <h1 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-800">
            Let's read a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">story</span>
          </h1>
          <p className="text-slate-500 text-lg">What adventure shall we go on today?</p>
        </header>

        {/* Featured Story */}
        <section>
          <Link 
            to={`/story/${featuredStory.id}`}
            className="group relative flex flex-col md:flex-row glass-panel rounded-[40px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10"
          >
            <div className="md:w-1/2 relative aspect-square md:aspect-auto">
              <img 
                src={featuredStory.cover} 
                alt={featuredStory.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden"></div>
            </div>
            
            <div className="relative md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white/80">
              <div className="inline-flex px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-4 w-fit shadow-sm">
                Featured Story
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight text-slate-800 mb-4 group-hover:text-violet-600 transition-colors">
                {featuredStory.title}
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {featuredStory.description}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-full font-semibold shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all active:scale-95">
                  <iconify-icon icon="solar:play-circle-bold" width="24"></iconify-icon>
                  Read Now
                </button>
                <div className="text-sm font-medium text-slate-400 flex flex-col">
                  <span>By {featuredStory.author}</span>
                  <span>{featuredStory.readTime} read</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Story Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-bold text-2xl tracking-tight text-slate-800">
              More Adventures
            </h2>
            <button className="text-violet-600 font-medium text-sm hover:text-violet-700 flex items-center gap-1">
              See all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

const Reader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = stories.find(s => s.id === id);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 bg-slate-50">
        <h2 className="font-heading text-2xl font-bold text-slate-800">Story not found</h2>
        <button onClick={() => navigate('/')} className="px-6 py-2 bg-slate-200 rounded-full font-medium hover:bg-slate-300 transition-colors">
          Go Back Home
        </button>
      </div>
    );
  }

  const totalPages = story.pages.length;
  const progress = ((currentPage + 1) / totalPages) * 100;
  const pageData = story.pages[currentPage];

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-violet-200/50 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square rounded-full bg-fuchsia-200/50 blur-3xl"></div>
        
        <div className="glass-panel max-w-md w-full rounded-[40px] p-10 text-center relative z-10 animate-[slideUp_0.5s_ease-out]">
          <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-yellow-300 to-amber-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-amber-500/30 mb-6">
            <iconify-icon icon="solar:cup-star-bold" width="48"></iconify-icon>
          </div>
          <h2 className="font-heading font-bold text-3xl text-slate-800 mb-2 tracking-tight">The End!</h2>
          <p className="text-slate-500 mb-8">You finished reading <br/><span className="font-semibold text-slate-700">{story.title}</span></p>
          
          <div className="space-y-3">
            <button 
              onClick={() => { setIsFinished(false); setCurrentPage(0); }}
              className="w-full py-4 bg-white border-2 border-slate-100 rounded-full font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all"
            >
              Read Again
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-full font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Find New Story
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-violet-200 selection:text-violet-900">
      {/* Reader Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/50 px-4 py-3 flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
        >
          <iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
        </button>
        
        <div className="flex-1 px-4 max-w-sm mx-auto">
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={clsx("h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r", story.color)}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center text-xs font-semibold text-slate-400 mt-2 uppercase tracking-wider">
            Page {currentPage + 1} of {totalPages}
          </p>
        </div>
        
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-red-500 transition-colors">
          <iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
        </button>
      </div>

      {/* Reader Content */}
      <main className="flex-1 pt-24 pb-32 px-6 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto w-full">
        {/* Image Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50 border-[8px] border-white ring-1 ring-slate-100">
            <img 
              key={pageData.image} // key forces re-render for transition
              src={pageData.image} 
              alt={`Page ${currentPage + 1}`} 
              className="absolute inset-0 w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]"
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 max-w-lg">
          <p 
            key={currentPage} // key forces animation on text change
            className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-slate-700 font-medium animate-[slideUp_0.4s_ease-out]"
          >
            {pageData.text}
          </p>
        </div>
      </main>

      {/* Bottom Controls */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
        <div className="max-w-md mx-auto flex items-center justify-between pointer-events-auto">
          <button 
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all shadow-sm active:scale-95"
          >
            <iconify-icon icon="solar:alt-arrow-left-linear" width="28"></iconify-icon>
          </button>
          
          <button 
            onClick={handleNext}
            className={clsx(
              "px-8 py-4 rounded-full text-white font-bold text-lg flex items-center gap-2 shadow-lg transition-all active:scale-95 hover:shadow-xl",
              currentPage === totalPages - 1 
                ? "bg-gradient-to-r from-amber-400 to-orange-500 shadow-orange-500/30 hover:shadow-orange-500/50" 
                : "bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-violet-500/30 hover:shadow-violet-500/50"
            )}
          >
            {currentPage === totalPages - 1 ? 'Finish' : 'Next Page'}
            <iconify-icon icon={currentPage === totalPages - 1 ? "solar:stars-bold" : "solar:alt-arrow-right-linear"} width="24"></iconify-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

// --- App Shell ---

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<Reader />} />
      </Routes>
      
      {/* Basic animations added inline for simplicity instead of tailwind config */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}