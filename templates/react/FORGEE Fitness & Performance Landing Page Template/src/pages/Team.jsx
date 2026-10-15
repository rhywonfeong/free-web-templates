import TeamSection from '../components/sections/Team';
import CTA from '../components/sections/CTA';

export default function Team() {
  return (
    <div className="animate-in fade-in duration-500 pt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-12">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tight">A Equipe</h1>
        <p className="text-[#B0B0B0] mt-4 text-lg border-l-2 border-[#E8400A] pl-4">Profissionais que vivem o que ensinam.</p>
      </div>
      <TeamSection />
      <CTA />
    </div>
  );
}