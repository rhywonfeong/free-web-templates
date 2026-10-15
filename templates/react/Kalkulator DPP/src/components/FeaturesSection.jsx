import SectionReveal from "./SectionReveal";

const items = [
  {
    icon: "solar:monitor-smartphone-linear",
    title: "Responsif Web & Mobile",
    text: "Antarmuka tetap nyaman digunakan di layar desktop maupun perangkat seluler."
  },
  {
    icon: "solar:document-text-linear",
    title: "Input Terkontrol",
    text: "Jumlah harga keseluruhan hanya menerima angka dan dibatasi maksimal hingga 50 juta."
  },
  {
    icon: "solar:lock-keyhole-linear",
    title: "Privasi Lokal",
    text: "Data kalkulasi disimpan di browser agar tetap tersedia saat Anda kembali membuka aplikasi."
  }
];

export default function FeaturesSection() {
  return (
    <SectionReveal
      id="fitur"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/5 text-sky-300 flex items-center justify-center border border-white/10">
          <iconify-icon icon="solar:widget-4-linear" width="20" height="20" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300/80">Fitur</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Dirancang simpel, terasa profesional
          </h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="glass-panel rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/15 to-violet-500/15 text-sky-300">
              <iconify-icon icon={item.icon} width="22" height="22" />
            </div>
            <h3 className="text-lg font-medium tracking-tight text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}