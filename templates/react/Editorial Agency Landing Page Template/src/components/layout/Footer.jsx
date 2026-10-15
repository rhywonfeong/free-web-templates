import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-8 border-t border-black/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white">
                <iconify-icon icon="solar:star-fall-bold-duotone" width="18"></iconify-icon>
              </div>
              <span className="font-bold tracking-tight text-xl text-zinc-900">Eddie.</span>
            </Link>
            <p className="text-zinc-500 text-[15px] leading-relaxed max-w-sm mb-8">
              An editorial approach to digital design. We build elegant, high-performing experiences for modern brands that demand the best.
            </p>
            <div className="flex gap-4 text-zinc-400">
              <a href="#" className="hover:text-zinc-900 transition-colors"><iconify-icon icon="simple-icons:x" width="20"></iconify-icon></a>
              <a href="#" className="hover:text-zinc-900 transition-colors"><iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon></a>
              <a href="#" className="hover:text-zinc-900 transition-colors"><iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon></a>
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-bold text-zinc-900 mb-6 text-sm tracking-wide">Company</h4>
            <ul className="space-y-4 text-[15px] text-zinc-500 font-medium">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-zinc-900 mb-6 text-sm tracking-wide">Services</h4>
            <ul className="space-y-4 text-[15px] text-zinc-500 font-medium">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">SEO & Growth</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-zinc-900 mb-6 text-sm tracking-wide">Legal</h4>
            <ul className="space-y-4 text-[15px] text-zinc-500 font-medium">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-400 font-medium">
          <p>© {new Date().getFullYear()} Eddie Agency. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Based in Amsterdam, Working Worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}