import PageWrapper from '../components/PageWrapper';

export default function CookiesPage() {
  const openBannerSettings = () => {
    window.dispatchEvent(new Event('open-cookie-banner'));
  };

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 prose prose-invert prose-neutral">
        <h1 className="text-3xl font-semibold text-white tracking-tighter mb-8">
          Zásady používání Cookies
        </h1>

        <h2 className="text-xl font-medium text-white mt-8 mb-4">
          Co jsou cookies?
        </h2>
        <p>
          Cookies jsou malé textové soubory, které mohou být používány
          webovými stránkami, aby učinily uživatelský zážitek více efektivní.
          Zákon uvádí, že můžeme ukládat cookies na vašem zařízení, pokud jsou
          nezbytně nutné pro provoz této stránky. Pro všechny ostatní typy
          cookies potřebujeme váš souhlas.
        </p>

        <h2 className="text-xl font-medium text-white mt-8 mb-4">
          Jaké cookies používáme?
        </h2>
        <ul>
          <li>
            <strong>Nezbytné:</strong>
            Pomáhají udělat webovou stránku použitelnou tak, že umožní
            základní funkce.
          </li>
          <li>
            <strong>Analytické:</strong>
            Pomáhají nám porozumět, jak návštěvníci používají webové stránky.
          </li>
          <li>
            <strong>Marketingové:</strong>
            Používají se ke sledování návštěvníků napříč webovými stránkami.
          </li>
        </ul>

        <div className="mt-12 p-8 border border-neutral-800 bg-neutral-900/30 rounded-3xl not-prose">
          <h3 className="text-white font-medium mb-4">Vaše nastavení</h3>
          <button 
            onClick={openBannerSettings} 
            className="bg-neutral-800 text-white px-6 py-3 text-sm hover:bg-neutral-700 transition-colors rounded-full"
          >
            Otevřít nastavení cookies
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}