export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="text-3xl font-semibold tracking-tighter uppercase block mb-6 text-white">AURA</a>
            <p className="text-sm text-zinc-500 font-light max-w-xs leading-relaxed">
              The premium standard in human optimization. Science-backed programming, world-class facilities.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-wider text-white uppercase mb-4">Explore</h5>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400 font-light">
              <li><a href="#" className="hover:text-brand transition-colors">Workouts</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Science</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-wider text-white uppercase mb-4">Company</h5>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400 font-light">
              <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-wider text-white uppercase mb-4">Support</h5>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400 font-light">
              <li><a href="#" className="hover:text-brand transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-zinc-600 font-light">© 2024 AURA Fitness. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="solar:camera-linear" className="text-xl"></iconify-icon></a>
            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="solar:video-frame-linear" className="text-xl"></iconify-icon></a>
            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="solar:letter-linear" className="text-xl"></iconify-icon></a>
          </div>
        </div>
      </div>
    </footer>
  )
}