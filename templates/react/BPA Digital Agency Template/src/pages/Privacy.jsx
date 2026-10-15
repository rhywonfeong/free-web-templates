import PageWrapper from '../components/PageWrapper';

export default function Privacy() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 prose prose-invert prose-neutral">
        <h1 className="text-3xl font-semibold text-white tracking-tighter mb-8">
          Ochrana osobních údajů
        </h1>
        <p className="text-sm text-neutral-500 mb-8">
          Poslední aktualizace: 1. ledna 2024
        </p>

        <h2 className="text-xl font-medium text-white mt-8 mb-4">
          1. Základní ustanovení
        </h2>
        <p>
          Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského
          parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
          souvislosti se zpracováním osobních údajů a o volném pohybu těchto
          údajů (dále jen: „GDPR”) je BPA. (dále jen: „správce“).
        </p>

        <h2 className="text-xl font-medium text-white mt-8 mb-4">
          2. Zdroje a kategorie zpracovávaných osobních údajů
        </h2>
        <p>
          Správce zpracovává osobní údaje, které jste mu poskytl/a nebo osobní
          údaje, které správce získal na základě plnění Vaší objednávky či
          poptávky.
        </p>

        <h2 className="text-xl font-medium text-white mt-8 mb-4">
          3. Zákonný důvod a účel zpracování
        </h2>
        <p>
          Zákonným důvodem zpracování osobních údajů je plnění smlouvy,
          oprávněný zájem správce a Váš souhlas. Účelem je vyřízení poptávky z
          kontaktního formuláře.
        </p>
      </div>
    </PageWrapper>
  );
}