import { useState } from 'react';
import { clsx } from 'clsx';

export default function PromptCard({ promptData }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(promptData.promptText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div 
      className="group relative h-[400px] w-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={clsx(
          "relative h-full w-full transition-transform duration-700 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front of Card (Image) */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all">
          <img 
            src={promptData.imageUrl} 
            alt={promptData.category}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-full text-white/90 border border-white/10">
              {promptData.category}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
               <iconify-icon icon="solar:refresh-circle-linear" width="20" class="text-white"></iconify-icon>
            </div>
          </div>
        </div>

        {/* Back of Card (Prompt Text) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/20 p-6 flex flex-col shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <div className="flex items-center gap-2 mb-4">
            <iconify-icon icon="solar:magic-stick-3-linear" class="text-white/60"></iconify-icon>
            <span className="text-sm font-medium text-white/60 tracking-tight uppercase">The Prompt</span>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
            <p className="text-white/90 font-medium text-lg leading-relaxed">
              "{promptData.promptText}"
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 mb-6">
            {promptData.tags.map(tag => (
              <span key={tag} className="text-xs text-zinc-400 bg-white/5 px-2 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className={clsx(
              "w-full py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300",
              isCopied 
                ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]" 
                : "bg-white text-zinc-950 hover:bg-zinc-200"
            )}
          >
            <iconify-icon icon={isCopied ? "solar:check-circle-linear" : "solar:copy-linear"} width="18"></iconify-icon>
            {isCopied ? 'Copied to Clipboard!' : 'Copy Prompt'}
          </button>
        </div>
      </div>
    </div>
  );
}