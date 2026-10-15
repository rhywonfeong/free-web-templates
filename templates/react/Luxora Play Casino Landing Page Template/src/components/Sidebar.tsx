import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-[268px] shrink-0 border-r border-white/10 glass-strong relative z-20">
      <div className="p-6 flex flex-col gap-6 h-full relative z-10">
        <div className="flex items-center gap-2.5 pt-1">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: "linear-gradient(140deg,#8b5fd6,#6d3fa8)", boxShadow: "0 4px 20px rgba(139,95,214,0.4)" }}>L</div>
          <span className="text-xl font-semibold tracking-tight">Luxora<span className="gold-text font-bold">Play</span></span>
        </div>

        <div className="flex flex-col gap-2.5">
          <button className="w-full py-2.5 rounded-xl text-sm font-semibold transition-transform hover:-translate-y-px" style={{ background: "linear-gradient(135deg,#ffe08a,#ffd12e)", color: "#3a2405", boxShadow: "0 8px 24px rgba(255,209,46,0.28)" }}>Sign up</button>
          <button className="w-full py-2.5 rounded-xl text-sm font-medium glass hover:bg-white/10 transition-colors">Log In</button>
        </div>

        <nav className="flex flex-col gap-1">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40 px-3 mb-1 mt-2">Explore</p>
          <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10 shadow-inner' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
            <iconify-icon icon="solar:spade-linear" width="20"></iconify-icon> Casino
          </NavLink>
          <NavLink to="/promotions" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <iconify-icon icon="solar:gift-linear" width="20"></iconify-icon> Promotions
          </NavLink>
          <NavLink to="/loyalty" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <iconify-icon icon="solar:star-linear" width="20"></iconify-icon> Loyalty
          </NavLink>
          <NavLink to="/support" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <iconify-icon icon="solar:headphones-round-linear" width="20"></iconify-icon> Support
          </NavLink>
        </nav>

        <div className="mt-auto flex flex-col gap-5">
          <div>
            <p className="text-[0.65rem] font-medium mb-3 text-white/40 uppercase tracking-[0.14em]">Follow us</p>
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center glass hover:bg-white/10 transition-colors"><iconify-icon icon="solar:hashtag-linear" width="17"></iconify-icon></a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center glass hover:bg-white/10 transition-colors"><iconify-icon icon="solar:planet-linear" width="17"></iconify-icon></a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center glass hover:bg-white/10 transition-colors"><iconify-icon icon="solar:chat-round-linear" width="17"></iconify-icon></a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center glass hover:bg-white/10 transition-colors"><iconify-icon icon="solar:videocamera-linear" width="17"></iconify-icon></a>
            </div>
          </div>
          <div className="flex flex-col gap-1 pt-4 border-t border-white/10">
            <button className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors text-left">
              <iconify-icon icon="solar:smartphone-linear" width="19"></iconify-icon> App Install
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors text-left w-full">
              <iconify-icon icon="solar:global-linear" width="19"></iconify-icon> English
              <iconify-icon icon="solar:alt-arrow-down-linear" width="14" className="ml-auto"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
