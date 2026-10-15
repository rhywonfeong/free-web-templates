import React, { useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { useEditor } from '../context/EditorContext';

export default function Timeline() {
  const {
    frames,
    currentFrameIndex, setCurrentFrameIndex,
    isPlaying, setIsPlaying,
    fps, setFps,
    onionSkin, setOnionSkin,
    addFrame, duplicateFrame, deleteFrame
  } = useEditor();

  const timelineRef = useRef(null);

  useEffect(() => {
    if (timelineRef.current) {
      const activeElement = timelineRef.current.children[currentFrameIndex];
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentFrameIndex, frames.length]);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-black/40 rounded-lg p-1 border border-white/5">
            <button 
              onClick={() => {
                setIsPlaying(false);
                setCurrentFrameIndex(0);
              }}
              className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
              title="First Frame"
            >
              <iconify-icon icon="solar:skip-previous-bold" width="20"></iconify-icon>
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={clsx(
                "p-1.5 rounded-md transition-all shadow-sm flex items-center justify-center w-8 h-8",
                isPlaying ? "bg-indigo-500 text-white shadow-indigo-500/30" : "text-gray-200 hover:bg-white/10"
              )}
            >
              <iconify-icon icon={isPlaying ? "solar:pause-bold" : "solar:play-bold"} width="20"></iconify-icon>
            </button>
            <button 
              onClick={() => {
                setIsPlaying(false);
                setCurrentFrameIndex(frames.length - 1);
              }}
              className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
              title="Last Frame"
            >
              <iconify-icon icon="solar:skip-next-bold" width="20"></iconify-icon>
            </button>
          </div>

          <div className="w-px h-6 bg-white/10"></div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <iconify-icon icon="solar:stopwatch-linear" width="18"></iconify-icon>
            <span className="w-6 text-right font-medium">{fps}</span>
            <span>fps</span>
            <input 
              type="range" 
              min="1" 
              max="24" 
              value={fps} 
              onChange={(e) => setFps(parseInt(e.target.value))}
              className="w-24 ml-2 accent-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
           <button
            onClick={() => setOnionSkin(!onionSkin)}
            className={clsx(
              "px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors border",
              onionSkin 
                ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" 
                : "bg-white/5 text-gray-400 border-transparent hover:bg-white/10"
            )}
          >
            <iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="18"></iconify-icon>
            Onion Skin
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto overflow-y-hidden p-4 relative" style={{ scrollbarWidth: 'thin' }}>
        <div ref={timelineRef} className="flex items-center gap-3 h-full min-w-max">
          
          {frames.map((frame, index) => (
            <div 
              key={frame.id}
              className="relative h-full flex flex-col group cursor-pointer"
              onClick={() => {
                setIsPlaying(false);
                setCurrentFrameIndex(index);
              }}
            >
              <div className={clsx(
                "text-[10px] font-mono mb-1 text-center font-medium transition-colors",
                currentFrameIndex === index ? "text-indigo-400" : "text-gray-500 group-hover:text-gray-400"
              )}>
                {index + 1}
              </div>
              
              <div className={clsx(
                "w-28 flex-1 rounded-lg border-2 transition-all relative overflow-hidden flex flex-col items-center justify-center p-1",
                currentFrameIndex === index 
                  ? "border-indigo-500 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]" 
                  : "border-white/10 bg-white/5 group-hover:border-white/30"
              )}>
                <div className="w-full aspect-video bg-white rounded-sm overflow-hidden flex items-center justify-center relative shadow-inner">
                  {frame.paths && frame.paths.length > 0 ? (
                    <svg viewBox="0 0 1920 1080" className="w-full h-full pointer-events-none block">
                      {frame.paths.map((path, pIdx) => {
                        if (path.tool === 'bucket') return null;
                        
                        if (path.tool === 'image') {
                          return (
                            <image 
                              key={pIdx}
                              href={path.src}
                              x={path.x}
                              y={path.y}
                              width={path.width}
                              height={path.height}
                              preserveAspectRatio="none"
                            />
                          );
                        }

                        if (path.tool === 'text') {
                          return (
                            <text
                              key={pIdx}
                              x={path.x}
                              y={path.y}
                              fill={path.color}
                              fontSize={path.size}
                              fontWeight="bold"
                              fontFamily="sans-serif"
                              dominantBaseline="hanging"
                              transform={path.rotation ? `rotate(${(path.rotation * 180) / Math.PI} ${path.x + path.width/2} ${path.y + path.height/2})` : undefined}
                            >
                              {path.text}
                            </text>
                          );
                        }

                        if (!path.points || path.points.length === 0) return null;
                        
                        let strokeOpacity = 1;
                        let strokeLinecap = 'round';
                        let strokeWidth = path.size;

                        if (path.tool === 'highlighter') {
                          strokeOpacity = 0.4;
                        } else if (path.tool === 'marker' || path.tool === 'pencil') {
                          strokeLinecap = 'square';
                          if (path.tool === 'pencil') strokeWidth = Math.min(path.size, 8);
                        }

                        if (path.points.length === 1) {
                          return (
                            <circle 
                              key={pIdx}
                              cx={path.points[0].x}
                              cy={path.points[0].y}
                              r={strokeWidth / 2}
                              fill={path.tool === 'eraser' ? '#ffffff' : path.color}
                              fillOpacity={strokeOpacity}
                            />
                          );
                        }

                        const d = `M ${path.points[0].x} ${path.points[0].y} ` + 
                                  path.points.slice(1).map(pt => `L ${pt.x} ${pt.y}`).join(' ');
                        
                        return (
                          <path
                            key={pIdx}
                            d={d}
                            fill="none"
                            stroke={path.tool === 'eraser' ? '#ffffff' : path.color}
                            strokeWidth={strokeWidth}
                            strokeLinecap={strokeLinecap}
                            strokeLinejoin={path.tool === 'marker' ? 'bevel' : 'round'}
                            strokeOpacity={strokeOpacity}
                          />
                        );
                      })}
                    </svg>
                  ) : (
                    <div className="text-gray-300 opacity-50">
                       <iconify-icon icon="solar:document-add-linear" width="16"></iconify-icon>
                    </div>
                  )}
                </div>
                
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 z-10">
                  <button 
                    onClick={(e) => { e.stopPropagation(); deleteFrame(index); }}
                    className="p-1.5 text-red-400 hover:text-white hover:bg-red-500 rounded-md transition-colors"
                    title="Delete Frame"
                  >
                    <iconify-icon icon="solar:trash-bin-trash-bold" width="16"></iconify-icon>
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsPlaying(false); setCurrentFrameIndex(index); duplicateFrame(); }}
                    className="p-1.5 text-indigo-300 hover:text-white hover:bg-indigo-500 rounded-md transition-colors"
                    title="Duplicate Frame"
                  >
                    <iconify-icon icon="solar:copy-bold" width="16"></iconify-icon>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={() => { setIsPlaying(false); addFrame(); }}
            className="w-16 h-20 mt-[18px] rounded-lg border-2 border-dashed border-white/20 text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center flex-col gap-1 shrink-0 group"
          >
            <iconify-icon icon="solar:add-circle-bold" width="24" className="group-hover:scale-110 transition-transform"></iconify-icon>
            <span className="text-[10px] font-medium uppercase tracking-wider">Add</span>
          </button>

        </div>
      </div>
    </div>
  );
}