import Structure from '../components/sections/Structure';
import Location from '../components/sections/Location';
import CTA from '../components/sections/CTA';

export default function Space() {
  return (
    <div className="animate-in fade-in duration-500 pt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-12">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tight">O Espaço</h1>
        <p className="text-[#B0B0B0] mt-4 text-lg border-l-2 border-[#E8400A] pl-4">Ambiente calibrado para alta performance.</p>
      </div>
      <Structure />
      <Location />
      <CTA />
    </div>
  );
}