import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

export default function Plans() {
  return (
    <div className="animate-in fade-in duration-500 pt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-12 text-center">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tight text-white">
          Assinaturas
        </h1>
      </div>
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}