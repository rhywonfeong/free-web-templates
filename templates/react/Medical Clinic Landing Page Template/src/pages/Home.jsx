import { Link } from 'react-router-dom';
import { clinicInfo, doctors, specialties } from '../data/content';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Instagram Profile Inspired */}
      <section className="pt-32 pb-16 px-4 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Profile Avatar */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-slate-200 p-1 mb-6 bg-white shadow-sm flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-blue-50 text-blue-800 flex items-center justify-center">
            <iconify-icon icon="solar:infinity-bold" width="48" height="48"></iconify-icon>
          </div>
        </div>

        {/* Profile Info */}
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-1">
          {clinicInfo.name}
        </h1>
        <p className="text-slate-500 mb-6 flex items-center gap-1 text-sm justify-center">
          <iconify-icon icon="solar:map-point-linear"></iconify-icon>
          {clinicInfo.neighborhood}
        </p>

        {/* Stats Row */}
        <div className="flex items-center gap-6 md:gap-12 mb-8 text-sm md:text-base">
          {clinicInfo.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-semibold text-slate-900">{stat.value}</span>
              <span className="text-slate-500 text-xs md:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bio */}
        <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
          {clinicInfo.bio}
        </p>

        {/* Actions Row */}
        <div className="flex w-full max-w-md gap-3 mb-12">
          <Link to="/contato" className="flex-1">
            <Button className="w-full">Agendar Consulta</Button>
          </Link>
          <Button variant="secondary" className="flex-1">Mensagem</Button>
        </div>

        {/* Highlights Row (Stories style) */}
        <div className="flex gap-8 md:gap-12 overflow-x-auto pb-4 w-full justify-center px-4">
          {[
            { label: 'Nosso Espaço', icon: 'solar:home-smile-linear', href: '#espaco' },
            { label: 'Especialidades', icon: 'solar:medical-kit-linear', href: '#especialidades' },
            { label: 'A Equipe', icon: 'solar:users-group-rounded-linear', href: '#equipe' }
          ].map((item, i) => (
            <a href={item.href} key={i} className="flex flex-col items-center gap-2 group cursor-pointer min-w-[72px]">
              <div className="w-16 h-16 rounded-full border border-slate-200 p-[3px] group-hover:border-blue-300 transition-colors">
                <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center text-blue-800 group-hover:bg-blue-50 transition-colors">
                  <iconify-icon icon={item.icon} width="28"></iconify-icon>
                </div>
              </div>
              <span className="text-[11px] font-medium text-slate-600 whitespace-nowrap">{item.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Nav Tabs Divider */}
      <div className="border-t border-slate-200 max-w-4xl mx-auto flex justify-center gap-12 mb-8">
        <div className="h-[1px] w-full max-w-[200px] bg-slate-900 absolute -mt-[1px]"></div>
        <div className="py-4 flex items-center gap-2 text-slate-900 font-medium text-sm border-t border-slate-900 -mt-[1px]">
          <iconify-icon icon="solar:widget-3-linear" width="16"></iconify-icon>
          CORPO CLÍNICO
        </div>
      </div>

      {/* Team Grid Section */}
      <section id="equipe" className="max-w-4xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-4">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="relative aspect-square rounded-sm sm:rounded-lg overflow-hidden group cursor-pointer bg-slate-100">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              
              {/* Instagram-style floating labels */}
              <div className="absolute bottom-3 left-3 flex flex-col gap-1.5 items-start">
                <span className="bg-blue-800 text-white text-[11px] sm:text-xs px-2.5 py-1 rounded-full font-medium tracking-wide shadow-sm backdrop-blur-sm bg-opacity-95">
                  {doctor.name}
                </span>
                <span className="bg-teal-500 text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide shadow-sm">
                  {doctor.specialty.toUpperCase()}
                </span>
              </div>
              <div className="absolute top-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                 <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Space Section - Translating the physical interior to digital */}
      <section id="espaco" className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100">
            {/* Using a high-quality modern clinic reception image matching the description */}
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" 
              alt="Recepção da Clínica Harmonia" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
              Um ambiente pensado para o seu acolhimento.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Nossa estrutura física foi projetada para refletir nossa filosofia de cuidado. Ao invés de um ambiente hospitalar frio, oferecemos um espaço com madeiras claras, iluminação suave e conforto térmico.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Localizada estrategicamente na Praça Santo Agostinho, nossa recepção contemporânea garante uma espera tranquila antes do seu atendimento individualizado.
            </p>
            
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-stone-50 px-4 py-2 rounded-lg">
                 <iconify-icon icon="solar:air-conditioner-linear" className="text-blue-700"></iconify-icon>
                 Ambiente Climatizado
               </div>
               <div className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-stone-50 px-4 py-2 rounded-lg">
                 <iconify-icon icon="solar:wheelchair-linear" className="text-blue-700"></iconify-icon>
                 Acesso Facilitado
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties List */}
      <section id="especialidades" className="py-24 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Especialidades</h2>
          <p className="text-slate-500">Abordagem multidisciplinar para o seu bem-estar integral.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {specialties.map((spec) => (
            <div key={spec.id} className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-lg hover:border-blue-100 transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <iconify-icon icon={spec.icon} width="24"></iconify-icon>
              </div>
              <h3 className="font-medium text-slate-900">{spec.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}