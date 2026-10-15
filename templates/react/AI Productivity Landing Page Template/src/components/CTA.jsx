export default function CTA() {
  return (
    <section className="pt-32 pr-6 pb-32 pl-6 relative">
      <div className="container z-10 text-center mr-auto ml-auto relative">
        <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8">
          UNLOCK YOUR<br />FULL <span className="text-orange-600">POTENTIAL.</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
          Join the waitlist for SoulShell. Structure your chaos. Design your future.
        </p>
        
        <form className="max-w-md mx-auto relative group" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-transparent border-b border-gray-600 py-4 text-xl text-white focus:outline-none transition-colors placeholder:text-gray-700 focus:border-orange-500"
              required
            />
            <button type="submit" className="absolute right-0 text-white transition-colors hover:text-orange-500 flex items-center justify-center">
              <iconify-icon icon="solar:arrow-right-linear" width="32" height="32" class="w-8 h-8"></iconify-icon>
            </button>
          </div>
        </form>
        
        <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-40">
          <span className="text-lg font-medium text-gray-500">LINEAR</span>
          <span className="text-lg font-medium text-gray-500">VERCEL</span>
          <span className="text-lg font-medium text-gray-500">STRIPE</span>
          <span className="text-lg font-medium text-gray-500">ARC</span>
        </div>
      </div>
    </section>
  );
}