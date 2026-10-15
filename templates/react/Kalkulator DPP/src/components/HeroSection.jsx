import SectionReveal from "./SectionReveal";

const featureHighlights = [
  {
    title: "Tanpa Installasi",
    description: "Langsung digunakan dari browser tanpa proses pemasangan aplikasi.",
    icon: "solar:cloud-check-linear"
  },
  {
    title: "Perhitungan Akurat",
    description: "Rumus DPP dihitung otomatis dengan hasil yang konsisten dan tepat.",
    icon: "solar:shield-check-linear"
  },
  {
    title: "Cepat dan Aman",
    description: "Input sederhana, proses instan, dan data tersimpan aman di perangkat Anda.",
    icon: "solar:rocket-2-linear"
  }
];

export default function HeroSection() {
  return (
    <SectionReveal className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/10">
        <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10"
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-2 text-xs text-sky-200">
                <iconify-icon icon="solar:stars-line-duotone" width="16" height="16" />
                Solusi modern untuk hitung DPP UMKM
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Kalkulator DPP
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Kalkulatornya UMKM penghitung dpp. Hitung nilai DPP dari jumlah harga
                keseluruhan dengan tampilan modern, proses cepat, dan hasil rapi dalam format
                rupiah.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kalkulator"
                  className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-900/40 transition duration-300 hover:scale-[1.03] hover:shadow-cyan-700/30"
                >
                  Mulai Kalkulasi
                </a>
                <a
                  href="#fitur"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  Lihat Fitur
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {featureHighlights.map((item) => (
                <div
                  key={item.title}
                  className="glass-panel rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-300">
                      <iconify-icon icon={item.icon} width="22" height="22" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium tracking-tight text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}