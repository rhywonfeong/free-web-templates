export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3 transition duration-300 hover:opacity-90">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 text-sky-300 shadow-lg shadow-sky-500/10">
            <iconify-icon icon="solar:calculator-minimalistic-linear" width="22" height="22" />
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight text-white sm:text-lg">
              Kalkulator DPP
            </p>
            <p className="text-xs text-slate-400">Kalkulatornya UMKM penghitung dpp</p>
          </div>
        </a>

        <nav className="hidden items-center gap-3 sm:flex">
          <a
            href="#fitur"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-sky-400/30 hover:bg-white/5 hover:text-white"
          >
            Fitur
          </a>
          <a
            href="#kalkulator"
            className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-900/40 transition duration-300 hover:scale-[1.02] hover:shadow-sky-700/30"
          >
            Hitung Sekarang
          </a>
        </nav>
      </div>
    </header>
  );
}