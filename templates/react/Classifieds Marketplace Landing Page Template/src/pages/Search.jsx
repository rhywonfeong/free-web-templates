import React from 'react';

// Placeholder page to demonstrate routing capabilities requested in the prompt
export default function Search() {
  return (
    <div className="min-h-screen bg-[#F5F5F6] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-medium text-[#18181A] tracking-tight mb-4">Resultados da Busca</h1>
        <div className="bg-white p-8 rounded-lg border border-[#D8DAE0] text-center">
          <iconify-icon icon="solar:box-minimalistic-linear" width="48" className="text-[#D8DAE0] mb-4"></iconify-icon>
          <p className="text-[#58585E]">Página de busca em construção. Retorne à página inicial.</p>
        </div>
      </div>
    </div>
  );
}