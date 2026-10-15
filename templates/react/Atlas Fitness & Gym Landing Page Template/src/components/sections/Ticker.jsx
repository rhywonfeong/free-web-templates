import React from 'react';

const Ticker = () => {
  const words = [
    "Treinamento de Elite", "Coaches Certificados", "Equipamentos Premium", 
    "Protocolo Exclusivo", "Resultados Comprovados"
  ];
  
  // Duplicate for seamless loop
  const content = [...words, ...words, ...words, ...words];

  return (
    <div className="w-full overflow-hidden bg-neutral-900 border-y border-neutral-800 py-4 relative flex items-center">
      <div className="flex w-max whitespace-nowrap animate-ticker">
        {content.map((word, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-sm font-display font-medium uppercase tracking-widest text-neutral-400">
              {word}
            </span>
            <span className="mx-6 text-acid opacity-50">
               <iconify-icon icon="solar:star-fall-bold" width="16"></iconify-icon>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;