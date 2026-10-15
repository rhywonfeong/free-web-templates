import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-slate-100">
      <div className="glass-panel w-full max-w-lg rounded-[2rem] p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-sky-300">
          <iconify-icon icon="solar:danger-triangle-linear" width="28" height="28" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-white">Halaman tidak ditemukan</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Maaf, halaman yang Anda tuju tidak tersedia.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:scale-[1.02]"
        >
          <iconify-icon icon="solar:home-2-linear" width="18" height="18" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}