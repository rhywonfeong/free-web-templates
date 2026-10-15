import React from 'react'

export default function PromptCard({ prompt, index = 0 }) {
  const { title, category, desc, image, tools, locked } = prompt;
  
  // Format index as 01, 02, 03
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="flashlight-target h-full group/card scroll-fade-in">
      <div className="flashlight-content flex flex-col border border-white/5 bg-zinc-950 transition-all duration-500 hover:border-white/10 relative h-full">
        
        {/* Top — Visual Preview */}
        <div className="relative aspect-[4/3] border-b border-white/5 overflow-hidden bg-zinc-950">
          {/* Placeholder for actual image loading */}
          <div className="absolute inset-0 bg-white/5 animate-pulse" aria-hidden="true" />
          
          <img 
            src={image} 
            alt={`Preview of ${title}`} 
            className={`w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover/card:scale-[1.02] ${locked ? 'opacity-30 grayscale blur-[2px]' : 'opacity-70 group-hover/card:opacity-90'}`}
            loading="lazy"
          />
          
          {/* Overlay for Locked State */}
          {locked && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950/40 backdrop-blur-[2px]">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 backdrop-blur-md">
                <iconify-icon icon="solar:lock-keyhole-linear" class="text-white/70" />
              </div>
              <span className="text-[10px] font-medium tracking-widest uppercase text-white/70 shadow-sm font-geist">Locked</span>
            </div>
          )}

          {/* Vertical Text Clip Slide Down Animation (Letter by Letter) */}
          <div className="absolute top-3 left-3 z-30 bg-zinc-950/60 backdrop-blur-md border border-white/5 px-2.5 py-1 text-[10px] tracking-widest text-white/70 uppercase inline-flex overflow-hidden font-geist font-medium">
            {category.split('').map((char, i) => (
              <span key={i} className="char-clip-wrap">
                <span 
                  className="char-slide-down" 
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  {char}
                </span>
              </span>
            ))}
          </div>

          {/* Number Details (01, 02, 03) */}
          <div className="absolute top-3 right-3 z-30 font-mono text-xs text-white/40 tracking-widest drop-shadow-md scroll-fade-in">
            {formattedIndex}
          </div>
        </div>

        {/* Bottom — Content Block */}
        <div className="p-5 flex flex-col flex-1 relative bg-transparent z-10">
          
          {/* Masked Staggered Word Reveal */}
          <h3 className="text-white/90 font-geist font-light text-base tracking-tighter reveal-section drop-shadow-sm">
            {title.split(' ').map((word, i) => (
              <span key={i} className="gsap-reveal-wrapper mr-[0.25em] last:mr-0">
                <span className="gsap-word-reveal">{word}</span>
              </span>
            ))}
          </h3>
          
          <p className="text-white/50 text-xs mt-2 line-clamp-2 leading-relaxed min-h-[2.5rem] font-geist tracking-tight scroll-fade-in">
            {desc}
          </p>
          
          <div className="h-[1px] bg-white/5 w-full my-5 scroll-fade-in" aria-hidden="true" />
          
          {/* Footer Row */}
          <div className="mt-auto flex items-center justify-between scroll-fade-in">
            
            {/* Left: Tools */}
            <div className="flex items-center gap-2 text-white/40">
              {tools.map(tool => (
                <iconify-icon 
                  key={tool} 
                  icon={`simple-icons:${tool}`} 
                  class="text-sm hover:text-white/80 transition-colors"
                  title={`Compatible with ${tool}`}
                />
              ))}
            </div>
            
            {/* Right: Action */}
            <button 
              className={`flex items-center gap-2 px-3 py-1.5 text-xs transition-all border backdrop-blur-sm font-geist tracking-tight font-medium ${
                locked 
                  ? 'border-transparent bg-transparent text-white/30 hover:text-white/50' 
                  : 'border-white/10 bg-transparent text-white/60 hover:text-white hover:border-white/20 hover:bg-white/5'
              }`}
              aria-label={locked ? "Unlock prompt" : "Copy prompt"}
            >
              {locked ? (
                <>
                  Upgrade <iconify-icon icon="solar:arrow-up-right-linear" />
                </>
              ) : (
                <>
                  <iconify-icon icon="solar:copy-linear" /> Copy
                </>
              )}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}