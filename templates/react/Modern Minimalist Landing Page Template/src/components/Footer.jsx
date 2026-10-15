import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white">
                <iconify-icon icon="solar:chart-line-linear" width="14"></iconify-icon>
              </div>
              <span className="font-semibold text-base tracking-tight">Oğulcan Demirer</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-sm mb-6 leading-relaxed">
              Veriye dayalı SEO stratejileri ile organik trafiğinizi ve gelirinizi artırıyoruz. Modern, şeffaf ve sonuç odaklı danışmanlık.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
                <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Twitter">
                <iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Github">
                <iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-slate-900 mb-4 text-sm uppercase tracking-wider">Hızlı Linkler</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/hizmetler" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Hizmetler</Link></li>
              <li><Link to="/blog" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">SEO Blog</Link></li>
              <li><Link to="/iletisim" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-slate-900 mb-4 text-sm uppercase tracking-wider">İletişim</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                hello@ogulcandemirer.com
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Oğulcan Demirer. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600">Gizlilik Politikası</a>
            <a href="#" className="hover:text-slate-600">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;