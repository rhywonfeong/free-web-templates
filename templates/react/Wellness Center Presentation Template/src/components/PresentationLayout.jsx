import { useEffect } from 'react';
import { Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import { TOTAL_SLIDES } from '../config/constants';

export default function PresentationLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const currentSlide = parseInt(id) || 1;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (currentSlide < TOTAL_SLIDES) navigate(`/slide/${currentSlide + 1}`);
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 1) navigate(`/slide/${currentSlide - 1}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, navigate]);

  const progress = (currentSlide / TOTAL_SLIDES) * 100;

  return (
    <div className="h-screen w-screen bg-brand-dark overflow-hidden flex flex-col font-sans relative group">
      {/* Main Slide Content */}
      <div className="flex-1 relative transition-opacity duration-300" key={location.pathname}>
        <Outlet />
      </div>

      {/* Navigation Overlay - Visible on Hover */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 no-print">
        <button 
          onClick={() => currentSlide > 1 && navigate(`/slide/${currentSlide - 1}`)}
          className={`pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-md text-white hover:bg-brand-gold/80 transition-colors ${currentSlide === 1 ? 'invisible' : ''}`}
          aria-label="Previous Slide"
        >
          <iconify-icon icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
        </button>
        <button 
          onClick={() => currentSlide < TOTAL_SLIDES && navigate(`/slide/${currentSlide + 1}`)}
          className={`pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-md text-white hover:bg-brand-gold/80 transition-colors ${currentSlide === TOTAL_SLIDES ? 'invisible' : ''}`}
          aria-label="Next Slide"
        >
          <iconify-icon icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
        </button>
      </div>

      {/* Control Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none z-50 flex items-end no-print">
        <div className="w-full bg-gradient-to-t from-black/50 to-transparent p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
          <div className="text-white/70 text-sm tracking-widest uppercase flex items-center gap-4">
            <span>{currentSlide} / {TOTAL_SLIDES}</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
            <span>Soul Balance Wellness Center</span>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/print')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all text-sm font-medium"
            >
              <iconify-icon icon="solar:printer-linear"></iconify-icon>
              Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 h-1 bg-white/10 w-full z-50 no-print">
        <div 
          className="h-full bg-brand-gold transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}