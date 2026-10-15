import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';

export default function Locations() {
  const units = [
    {
      name: "Barreiros",
      city: "São José, SC",
      prof: "Mauricio Costa",
      address: "Rua Leoberto Leal, 1200",
      tel: "(48) 3246-0000",
      turmas: ["Taekwondo Kids", "Taekwondo Juvenil", "Taekwondo Adultos", "Hapkido"]
    },
    {
      name: "Lisboa",
      city: "São José, SC",
      prof: "Carlos Silva",
      address: "Av. Antônio da Silva, 450",
      tel: "(48) 3246-0001",
      turmas: ["Taekwondo Kids", "Taekwondo Juvenil", "Taekwondo Adultos"]
    },
    {
      name: "Bela Vista",
      city: "Palhoça, SC",
      prof: "Amanda Costa",
      address: "Rua José Cosme Pamplona, 800",
      tel: "(48) 3246-0002",
      turmas: ["Taekwondo Kids", "Taekwondo Adultos", "Hapkido", "Gumdo"]
    }
  ];

  return (
    <section id="unidades" className="py-24 bg-[#0B0D14]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="mb-16">
          <SectionLabel>Onde Estamos</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-4">
            3 unidades para <br/> facilitar sua rotina.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {units.map((u, idx) => (
            <div key={idx} className="bg-[#12151F] border border-[#2B3045] p-8 flex flex-col">
              <div className="mb-6 pb-6 border-b border-[#2B3045]">
                <span className="text-[#E8193C] text-xs font-bold uppercase tracking-widest block mb-2">Unidade</span>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-1">{u.name}</h3>
                <p className="text-[#94A3B8] text-sm">{u.city}</p>
              </div>

              <div className="space-y-4 text-sm text-[#94A3B8] mb-8 flex-grow">
                <div className="flex gap-3">
                  <iconify-icon icon="solar:user-bold" className="text-lg text-[#6B7280] mt-0.5 shrink-0"></iconify-icon>
                  <div>
                    <span className="text-white font-semibold block">Prof. {u.prof}</span>
                    <span className="text-xs">Resp. Técnico</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <iconify-icon icon="solar:map-point-bold" className="text-lg text-[#6B7280] mt-0.5 shrink-0"></iconify-icon>
                  <span>{u.address}</span>
                </div>
                <div className="flex gap-3">
                  <iconify-icon icon="solar:phone-bold" className="text-lg text-[#6B7280] mt-0.5 shrink-0"></iconify-icon>
                  <span>{u.tel}</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Turmas Disponíveis</h4>
                <div className="flex flex-wrap gap-2">
                  {u.turmas.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider bg-[#2B3045] px-2 py-1 rounded-sm text-[#D1D5DB]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <Button variant="outline" className="w-full">Como chegar</Button>
                <Button className="w-full">Agendar nesta unidade</Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}