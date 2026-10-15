import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#1a1d24] relative z-10">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-4xl font-semibold text-brand-accent tracking-tighter leading-none">N2</span>
        <div className="flex flex-col">
          <span className="text-[10px] font-medium tracking-widest text-white leading-tight uppercase">Cyber</span>
          <span className="text-[10px] font-medium tracking-widest text-white leading-tight uppercase">Core</span>
        </div>
      </Link>

      <div className="flex flex-col items-center md:items-end gap-6">
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium tracking-widest uppercase text-white">
          <Link to="/network" className="text-brand-accent hover:text-white transition-colors">Network</Link>
          <button className="hover:text-brand-accent transition-colors">Modules</button>
          <button className="hover:text-brand-accent transition-colors">Consulting</button>
          <button className="hover:text-brand-accent transition-colors">Docs</button>
          <button className="hover:text-brand-accent transition-colors">Portal</button>
        </nav>
        <div className="flex gap-4 text-[10px] font-medium tracking-widest uppercase text-brand-muted">
          <button className="hover:text-white transition-colors">Privacy</button>
          <span>•</span>
          <button className="hover:text-white transition-colors">Terms</button>
          <span>•</span>
          <button className="hover:text-white transition-colors">Legal</button>
        </div>
      </div>
    </footer>
  );
}