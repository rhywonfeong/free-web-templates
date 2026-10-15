import React from 'react';
import { useNavigate } from 'react-router-dom';

const Narratives = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Soluciones Fintech y Bancarias",
      items: [
        "Tarjeta Metálica DRACMA Black.",
        "Rampas globales Fiat-Crypto sin fricción.",
        "Pagos Multi-cripto Institucionales.",
        "Custodia Suiza Grado Bancario.",
        "Liquidación Transfronteriza en tiempo real."
      ]
    },
    {
      title: "Centros de Datos Solares e IA",
      items: [
        "Instalaciones impulsadas 100% por energía solar.",
        "Computación de alto rendimiento (HPC) verde.",
        "Modelos de Gobernanza de Redes Neuronales.",
        "Agentes de IA para Gestión de Liquidez.",
        "Alquiler de infraestructura a gigantes corporativos."
      ]
    },
    {
      title: "Activos del Mundo Real (RWA)",
      items: [
        "Tokenización de Bienes Raíces Comerciales.",
        "Crédito Privado Institucional en cadena.",
        "Fraccionalización de Infraestructura Energética.",
        "Integridad de Créditos de Carbono y ESG.",
        "Rendimiento Deflacionario Distribuido al DAO."
      ]
    }
  ];

  return (
    <div className="min-h-screen relative z-10 p-6 lg:p-12 flex flex-col text-white max-w-[1400px] mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-16 pb-6 border-b border-white/10">
        <button 
          onClick={() => navigate('/')}
          className="bg-transparent border border-white/20 px-4 py-2 flex items-center gap-2 hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-[10px] font-bold"
        >
          <iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon>
          <span>Volver al Terminal</span>
        </button>
        <div className="font-inter font-bold text-lg tracking-tight uppercase">
          Visión Institucional
        </div>
      </header>

      <div className="mb-16 text-left border-l-4 border-white pl-6">
        <h1 className="text-5xl lg:text-7xl font-bold font-inter tracking-tighter mb-6">
          Estructura del <br/><span className="text-white/40">Ecosistema 2026.</span>
        </h1>
        <p className="text-white/50 max-w-2xl text-lg font-light leading-relaxed">
          Taxonomía estratégica para la plataforma Fintech definitiva, fusionando RWA, Centros de Datos Ecológicos e infraestructura institucional.
        </p>
      </div>

      {/* Grid Layout - Swiss Minimalist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col gap-8 hover:border-white/30 transition-colors duration-500">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm">
                <iconify-icon icon="lucide:layers" width="24" className="text-white"></iconify-icon>
              </div>
              <h2 className="text-xl font-bold font-inter tracking-tight leading-snug">{section.title}</h2>
            </div>
            <ul className="flex flex-col gap-5">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-4 text-sm text-white/70 font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Narratives;