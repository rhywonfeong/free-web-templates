import { useState, useRef, useCallback } from 'react';
import DrawingBoard from '../components/DrawingBoard';
import Sidebar from '../components/Sidebar';

export default function Editor() {
  const canvasRef = useRef(null);
  const [hasContent, setHasContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  
  // Settings state
  const [easing, setEasing] = useState('spring');
  const [duration, setDuration] = useState(2.5); // seconds
  const [strokeColor, setStrokeColor] = useState('#818cf8'); // indigo-400
  const [strokeWidth, setStrokeWidth] = useState(4);

  const handlePlay = useCallback(() => {
    if (canvasRef.current && !isAnimating && !isExporting) {
      setIsAnimating(true);
      canvasRef.current.playAnimation(easing, duration * 1000, () => {
        setIsAnimating(false);
      });
    }
  }, [easing, duration, isAnimating, isExporting]);

  const handleExport = useCallback(() => {
    if (canvasRef.current && !isAnimating && !isExporting) {
      setIsExporting(true);
      canvasRef.current.exportVideo(easing, duration * 1000, () => {
        setIsExporting(false);
      });
    }
  }, [easing, duration, isAnimating, isExporting]);

  const handleClear = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
      setHasContent(false);
      setIsAnimating(false);
      setIsExporting(false);
    }
  }, []);

  const isBusy = isAnimating || isExporting;

  return (
    <div className="flex w-full h-full">
      <Sidebar 
        easing={easing}
        setEasing={setEasing}
        duration={duration}
        setDuration={setDuration}
        strokeColor={strokeColor}
        setStrokeColor={setStrokeColor}
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
        hasContent={hasContent}
        isAnimating={isBusy}
        onPlay={handlePlay}
        onClear={handleClear}
      />
      <div className="flex-1 relative bg-zinc-950/50 p-6 overflow-hidden flex flex-col">
        {/* Top toolbar over canvas area */}
        <div className="flex justify-between items-center mb-4 z-10">
          <div className="px-4 py-2 rounded-full bg-zinc-900/80 border border-white/5 backdrop-blur-md text-xs font-medium text-zinc-400 shadow-xl shadow-black/20 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isBusy ? 'bg-indigo-500 animate-pulse' : 'bg-zinc-600'}`}></div>
            {isExporting ? 'Exporting Video...' : isAnimating ? 'Playing Animation...' : 'Canvas Ready'}
          </div>
          
          <div className="flex gap-3">
             <button 
                onClick={handleClear}
                disabled={!hasContent || isBusy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-medium"
              >
                <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                Clear
              </button>
              
              <button 
                onClick={handleExport}
                disabled={!hasContent || isBusy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-medium"
              >
                <iconify-icon icon={isExporting ? "solar:hourglass-linear" : "solar:download-square-linear"} class="text-lg"></iconify-icon>
                {isExporting ? 'Exporting...' : 'Export'}
              </button>

              <button 
                onClick={handlePlay}
                disabled={!hasContent || isBusy}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-lg
                  ${hasContent && !isBusy 
                    ? 'bg-white text-zinc-950 hover:bg-indigo-50 shadow-white/10' 
                    : 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5'}`}
              >
                <iconify-icon icon={isAnimating ? "solar:stop-circle-linear" : "solar:play-circle-linear"} class="text-lg"></iconify-icon>
                {isAnimating ? 'Animating' : 'Animate'}
              </button>
          </div>
        </div>

        {/* Canvas Container */}
        <div className="flex-1 relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50 bg-zinc-900/30 backdrop-blur-sm">
          <DrawingBoard 
            ref={canvasRef}
            onContentChange={setHasContent}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
            disabled={isBusy}
          />
        </div>
      </div>
    </div>
  );
}