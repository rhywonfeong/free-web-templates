import { Link } from 'react-router-dom';
import { promptsData } from '../data/prompts';
import PromptCard from '../components/PromptCard';

export default function Home() {
  // Take just the first 3 for the preview
  const previewPrompts = promptsData.slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-[-20%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-32 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Promptify 2.0 is live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 max-w-4xl leading-tight">
            Unlock the secrets behind <br className="hidden md:block" />
            <span className="italic font-serif pr-2">stunning</span> AI artwork.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Flip any image to instantly reveal the exact prompt used to generate it. 
            Copy, tweak, and create your own masterpieces in seconds.
          </p>

          <div className="flex items-center gap-4">
            <Link 
              to="/explore"
              className="px-8 py-4 rounded-xl bg-white text-zinc-950 font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2"
            >
              Explore Prompts
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </Link>
            <Link 
              to="/pricing"
              className="px-8 py-4 rounded-xl bg-white/5 text-white border border-white/10 font-medium transition-all hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Feature Preview Section */}
        <div className="relative z-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Trending Now</h2>
              <p className="text-zinc-400">Click any card to flip and reveal the prompt.</p>
            </div>
            <Link to="/explore" className="text-sm font-medium text-white hover:text-zinc-300 flex items-center gap-1">
              View all <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewPrompts.map(prompt => (
              <PromptCard key={prompt.id} promptData={prompt} />
            ))}
          </div>
        </div>
        
        {/* Value Prop Section */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <iconify-icon icon="solar:gallery-bold" width="24" class="text-white"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium mb-3">Curated Gallery</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Browse thousands of high-quality, hand-picked AI generated images across multiple styles and categories.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <iconify-icon icon="solar:layers-bold" width="24" class="text-white"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium mb-3">Interactive Reveal</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Experience our cinematic 3D flip effect to seamlessly reveal the hidden prompt behind every masterpiece.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <iconify-icon icon="solar:clipboard-text-bold" width="24" class="text-white"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium mb-3">One-Click Copy</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Instantly copy prompts to your clipboard and start generating your own variations in your favorite AI tool.</p>
            </div>
        </div>

      </div>
    </div>
  );
}