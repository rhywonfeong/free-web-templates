import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="nav-link text-white text-xl font-semibold tracking-tighter mb-4 block hover:text-[#ccff00] transition-colors">
              BPA.
            </Link>
            <p className="text-sm text-neutral-500 mb-6">
              Digitální agentura pro značky, které chtějí vést.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <iconify-icon icon="solar:link-circle-linear" width="1.5em"></iconify-icon>
              </a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <iconify-icon icon="solar:gallery-linear" width="1.5em"></iconify-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Menu</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <Link to="/" className="nav-link hover:text-white transition-colors">Domů</Link>
              </li>
              <li>
                <Link to="/about" className="nav-link hover:text-white transition-colors">O nás</Link>
              </li>
              <li>
                <Link to="/services" className="nav-link hover:text-white transition-colors">Služby</Link>
              </li>
              <li>
                <Link to="/work" className="nav-link hover:text-white transition-colors">Naše práce</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Společnost</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <Link to="/career" className="nav-link hover:text-white transition-colors">Kariéra</Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link hover:text-white transition-colors">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Napište nám</h4>
            <a href="mailto:hello@bp-agency.cz" className="text-sm text-neutral-500 hover:text-[#ccff00] transition-colors block mb-2">
              hello@bp-agency.cz
            </a>
            <a href="tel:+420777123456" className="text-sm text-neutral-500 hover:text-white transition-colors block">
              +420 777 123 456
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <div>© 2024 Brand Pulse Agency. Všechna práva vyhrazena.</div>
          <div className="flex gap-4">
            <Link to="/privacy" className="nav-link hover:text-neutral-400 transition-colors">
              Ochrana osobních údajů
            </Link>
            <Link to="/cookies" className="nav-link hover:text-neutral-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}