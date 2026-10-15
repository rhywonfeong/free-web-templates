import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#133875] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-extrabold text-white tracking-tight">tbw</div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold text-white leading-none uppercase tracking-widest">The Baker</span>
                <span className="text-sm font-bold text-[#D4AF37] leading-none uppercase tracking-widest">Wheat</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mt-2">
              Malaysia's premium B2B frozen and par-baked artisan bread manufacturer. Supplying excellence to leading hotels, cafes, and restaurants.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link to="/solutions" className="text-white/70 hover:text-white transition-colors text-sm">Solutions</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-6">Products</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors text-sm">Artisan Loaves</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors text-sm">Buns & Rolls</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors text-sm">Pastries</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Custom Formulations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <iconify-icon icon="lucide:phone" class="mt-0.5 text-[#D4AF37]"></iconify-icon>
                <span>+60 3-1234 5678</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <iconify-icon icon="lucide:mail" class="mt-0.5 text-[#D4AF37]"></iconify-icon>
                <span>partners@thebakerwheat.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <iconify-icon icon="lucide:map-pin" class="mt-0.5 text-[#D4AF37]"></iconify-icon>
                <span>Nilai Industrial Estate<br/>Negeri Sembilan, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} The Baker Wheat. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/50 text-xs">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}