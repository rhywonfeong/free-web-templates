import React from 'react'

const Team = () => {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="mb-20">
          <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4 block">Quem está por trás</span>
          <h2 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6 leading-[1.1]">
            PESSOAS QUE<br />ENTENDEM<br />OPERAÇÃO.
          </h2>
          <p className="text-base text-neutral-500 max-w-xl">
            Construído por quem já viu desperdício de perto. Suportado por quem entende de dados e de cozinha.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-neutral-0 p-6 rounded-[16px] border border-neutral-100">
            <div className="w-16 h-16 bg-neutral-900 text-lime-400 rounded-full flex items-center justify-center font-display text-2xl mb-6">VF</div>
            <h3 className="font-bold text-sm uppercase tracking-wide text-neutral-900 mb-1">VINICIUS F.</h3>
            <p className="text-xs text-neutral-500 font-medium mb-4">Cofundador · Crescimento & Parcerias</p>
            <p className="text-sm text-neutral-700 leading-relaxed border-t border-neutral-50 pt-4">Aquisição, canais e mercado de restaurantes</p>
          </div>

          <div className="bg-neutral-0 p-6 rounded-[16px] border border-neutral-100">
            <div className="w-16 h-16 bg-neutral-900 text-lime-400 rounded-full flex items-center justify-center font-display text-2xl mb-6">EA</div>
            <h3 className="font-bold text-sm uppercase tracking-wide text-neutral-900 mb-1">EDUARDO A.</h3>
            <p className="text-xs text-neutral-500 font-medium mb-4">Cofundador · Produto & Tecnologia</p>
            <p className="text-sm text-neutral-700 leading-relaxed border-t border-neutral-50 pt-4">Arquitetura do sistema e experiência do usuário</p>
          </div>

          <div className="bg-neutral-0 p-6 rounded-[16px] border border-neutral-100">
            <div className="w-16 h-16 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center font-display text-2xl mb-6">CS</div>
            <h3 className="font-bold text-sm uppercase tracking-wide text-neutral-900 mb-1">CONSULTORA DE OPERAÇÕES</h3>
            <p className="text-xs text-neutral-500 font-medium mb-4">Especialista em gestão de restaurantes por quilo</p>
            <p className="text-sm text-neutral-700 leading-relaxed border-t border-neutral-50 pt-4">Validação de fluxos e benchmarks de desperdício</p>
          </div>

          <div className="bg-neutral-0 p-6 rounded-[16px] border border-neutral-100">
            <div className="w-16 h-16 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center font-display text-2xl mb-6">AT</div>
            <h3 className="font-bold text-sm uppercase tracking-wide text-neutral-900 mb-1">ATENDIMENTO</h3>
            <p className="text-xs text-neutral-500 font-medium mb-4">Sucesso do cliente</p>
            <p className="text-sm text-neutral-700 leading-relaxed border-t border-neutral-50 pt-4">Onboarding, suporte e retenção de clientes</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Team