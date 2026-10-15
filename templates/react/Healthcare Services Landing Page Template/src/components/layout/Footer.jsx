import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-md flex items-center justify-center">
                <iconify-icon icon="solar:health-bold" width="22" height="22"></iconify-icon>
              </div>
              <div>
                <h2 className="font-semibold text-xl text-white tracking-tight leading-none">EABENSON</h2>
                <p className="text-[10px] text-teal-400 font-medium tracking-widest uppercase mt-0.5">Healthcare Pvt. Ltd.</p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-8">
              A commitment to professional excellence and uncompromising integrity, delivering corporate healthcare solutions globally.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:facebook" width="20"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-medium text-white mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#team" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Our Team</a></li>
              <li><a href="#services" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Our Services</a></li>
              <li><a href="#contact" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="font-medium text-white mb-6 text-sm uppercase tracking-wider">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:map-point-linear" className="text-teal-500 mt-0.5" width="18"></iconify-icon>
                <span className="text-sm text-slate-400">123 Healthcare Avenue,<br />Medical District, NY 10020</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:phone-calling-linear" className="text-teal-500" width="18"></iconify-icon>
                <span className="text-sm text-slate-400">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:letter-linear" className="text-teal-500" width="18"></iconify-icon>
                <span className="text-sm text-slate-400">contact@eabensonhealthcare.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} EABENSON Healthcare Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;