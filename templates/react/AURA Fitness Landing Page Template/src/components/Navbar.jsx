export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold tracking-tighter uppercase">AURA</a>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">Workouts</a>
          <a href="#" className="hover:text-white transition-colors">Science</a>
          <a href="#" className="hover:text-white transition-colors">Studios</a>
          <a href="#" className="hover:text-white transition-colors">Membership</a>
        </div>
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300">
          Member Portal
        </button>
      </div>
    </nav>
  )
}