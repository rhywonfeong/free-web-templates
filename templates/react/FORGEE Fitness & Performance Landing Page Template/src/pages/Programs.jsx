import ProgramsSection from '../components/sections/Programs';
import CTA from '../components/sections/CTA';

export default function Programs() {
  return (
    <div className="animate-in fade-in duration-500 pt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-12">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tight text-white">
          Nossos <span className="text-[#E8400A]">Programas</span>
        </h1>
        <p className="text-[#B0B0B0] mt-4 text-lg border-l-2 border-[#E8400A] pl-4">Metodologia baseada em ciência e suor.</p>
      </div>
      <ProgramsSection />
      <CTA />
    </div>
  );
}