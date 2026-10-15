import PageWrapper from '../components/PageWrapper';

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8">
          My jsme BPA.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <p className="text-lg text-neutral-400 leading-relaxed font-light">
            Věříme, že průměrný design je ztráta peněz. Od roku 2018 pomáháme
            ambiciózním firmám překročit vlastní stín. Nejsme jen dodavatelé,
            stáváme se vašimi partnery v digitálním světě. Analyzujeme,
            navrhujeme, vyvíjíme a optimalizujeme. Vše pod jednou střechou,
            bez kompromisů v kvalitě.
          </p>
          <div className="grid grid-cols-2 gap-8 bg-neutral-900/20 border border-neutral-800 p-8 rounded-3xl">
            <div>
              <div className="text-4xl text-white font-medium mb-2 tracking-tighter">50+</div>
              <div className="text-sm text-neutral-500">Úspěšných projektů</div>
            </div>
            <div>
              <div className="text-4xl text-white font-medium mb-2 tracking-tighter">15</div>
              <div className="text-sm text-neutral-500">Expertů v týmu</div>
            </div>
            <div>
              <div className="text-4xl text-white font-medium mb-2 tracking-tighter">6</div>
              <div className="text-sm text-neutral-500">Let na trhu</div>
            </div>
            <div>
              <div className="text-4xl text-[#ccff00] font-medium mb-2 tracking-tighter">100%</div>
              <div className="text-sm text-neutral-500">In-house vývoj</div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-2xl text-white font-medium mb-12 tracking-tight border-b border-neutral-900 pb-4">
            Naše hodnoty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-[#ccff00] text-sm font-medium mb-4">01 // Transparentnost</div>
              <p className="text-sm text-neutral-400">
                Žádné skryté poplatky ani sliby, které nedokážeme splnit.
                Říkáme věci na rovinu, i když to není příjemné.
              </p>
            </div>
            <div>
              <div className="text-[#ccff00] text-sm font-medium mb-4">02 // Daty řízený design</div>
              <p className="text-sm text-neutral-400">
                Rozhodnutí neděláme na základě pocitů. Analyzujeme chování
                uživatelů a navrhujeme řešení, která přinášejí reálná čísla.
              </p>
            </div>
            <div>
              <div className="text-[#ccff00] text-sm font-medium mb-4">03 // Extrémní vlastnictví</div>
              <p className="text-sm text-neutral-400">
                Za váš projekt přebíráme plnou zodpovědnost. Úspěch vašeho
                byznysu bereme jako náš vlastní.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}