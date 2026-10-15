import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 lg:py-20 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e781811-d1f2-4321-9e50-25059e089591_320w.png" 
                alt="Growth Wizard Logo" 
                className="h-10 w-auto object-contain bg-white rounded-lg p-1.5 group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs text-sm">
              Custom software, automation, and technical solutions for modern businesses seeking efficient scaling.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:linkedin" width="20" height="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:x" width="20" height="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:github" width="20" height="20"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-white font-medium mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About</Link></li>
              <li><Link to="/process" className="hover:text-indigo-400 transition-colors">Our Process</Link></li>
              <li><Link to="/case-studies" className="hover:text-indigo-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/faq" className="hover:text-indigo-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white font-medium mb-6">Services & Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Custom Web Applications</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Workflow Automation</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Technical Consulting</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">System Integration</Link></li>
              <li><Link to="/solutions" className="hover:text-indigo-400 transition-colors">View All Solutions</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:letter-linear" width="20" height="20" className="text-indigo-400 shrink-0"></iconify-icon>
                <a href="mailto:hello@growthwizard.com" className="hover:text-white transition-colors">hello@growthwizard.com</a>
              </li>
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:phone-calling-linear" width="20" height="20" className="text-indigo-400 shrink-0"></iconify-icon>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:map-point-linear" width="20" height="20" className="text-indigo-400 shrink-0"></iconify-icon>
                <span>San Francisco, CA<br/>Available Worldwide</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors group">
                Start a conversation 
                <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Growth Wizard. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}