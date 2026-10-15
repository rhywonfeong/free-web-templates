import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';

export default function Shop() {
  const products = [
    { name: "Dobok Oficial", desc: "Tecido leve, respirável e resistente. Todos os tamanhos.", price: "250", img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=500&q=80" },
    { name: "Kit de Proteção", desc: "Tronco, capacete, caneleira e luvas para treino seguro.", price: "480", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80" },
    { name: "Faixas Oficiais", desc: "Faixas para todas as graduações — Taekwondo e Hapkido.", price: "45", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&q=80" },
    { name: "Espadas Gumdo", desc: "Equipamentos específicos para a prática do Gumdo.", price: "180", img: "https://images.unsplash.com/photo-1590400032545-d463d1a8e225?w=500&q=80" },
    { name: "Bolsas Esportivas", desc: "Carregue seu equipamento com praticidade no dia a dia.", price: "120", img: "https://images.unsplash.com/photo-1580806460395-5bc4ecadcf82?w=500&q=80" },
    { name: "Conjunto de Treino", desc: "Shorts e camisetas técnicas para treinos livres e eventos.", price: "150", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&q=80" }
  ];

  return (
    <section id="loja" className="py-24 bg-[#12151F]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <SectionLabel>Equipamentos Oficiais</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-4 mb-4">Treine com o equipamento certo.</h2>
          <p className="text-[#94A3B8]">Dobok, protetores, faixas e acessórios oficiais. Tudo que você precisa para treinar com segurança e performance.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <div key={idx} className="bg-[#0B0D14] border border-[#2B3045] group hover:border-[#E8193C] transition-colors flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-3 right-3 bg-[#12151F] border border-[#2B3045] px-2 py-1 text-xs font-bold text-[#C5F500]">R$ {p.price}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-black uppercase tracking-wide mb-2 text-lg">{p.name}</h3>
                <p className="text-[#6B7280] text-sm mb-6 flex-grow">{p.desc}</p>
                <button className="text-xs font-bold uppercase tracking-widest text-[#E8193C] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver opções <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}