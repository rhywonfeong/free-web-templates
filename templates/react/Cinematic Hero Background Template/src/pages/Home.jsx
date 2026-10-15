import HeroBackground from '../components/HeroBackground'

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-12 overflow-hidden bg-[#09090b]">
      {/* 
        The prompt strictly requests the visual container as a background treatment 
        with no visible foreground text/buttons, just the atmospheric effect.
        We frame it nicely here in the page.
      */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12">
        <HeroBackground />
        
        {/* Subtle decorative caption to anchor the page, strictly outside the hero component */}
        <p className="text-zinc-500 text-xs tracking-widest uppercase font-medium mt-4">
          Atmospheric Horizon Component
        </p>
      </div>
    </main>
  )
}