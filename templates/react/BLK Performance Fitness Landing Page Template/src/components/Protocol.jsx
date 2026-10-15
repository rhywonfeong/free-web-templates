import React from 'react';
import SectionLabel from './ui/SectionLabel';
import Button from './ui/Button';

export default function Protocol() {
  const phases = [
    {
      num: '01',
      title: 'Avaliação Física',
      desc: 'Mapeamento completo do ponto de partida: composição corporal, capacidade cardiovascular, padrões de movimento e histórico de treinamento. Sem esse dado, não há protocolo.'
    },
    {
      num: '02',
      title: 'Prescrição de Protocolo',
      desc: 'Com base na avaliação, seu coach desenha um ciclo de treinamento periodizado de 12 semanas. Volume, intensidade e método específico para o seu objetivo declarado.'
    },
    {
      num: '03',
      title: 'Execução Guiada',
      desc: 'Treino supervisionado com correção técnica em tempo real. O coach não está decorando o ambiente. Ele está construindo o seu movimento.'
    },
    {
      num: '04',
      title: 'Monitoramento Contínuo',
      desc: 'Reavaliações a cada 4 semanas. Ajustes de carga, volume e frequência conforme a adaptação do organismo. O protocolo evolui com você.'
    },
    {
      num: '05',
      title: 'Nutrição Integrada',
      desc: 'Orientação nutricional alinhada ao protocolo de treino. Não prescrevemos dieta — alinhamos combustível ao sistema. Parceria com nutricionistas especializados em performance.'
    },
    {
      num: '06',
      title: 'Evolução de Ciclo',
      desc: 'Ao final de cada ciclo de 12 semanas, uma nova avaliação define o próximo protocolo. O corpo que você tem hoje não é o corpo que você treinará amanhã.'
    }
  ];

  const systems = [
    { title: 'Força Absoluta', desc: 'Levantamentos compostos com progressão de carga linear e periodização ondulatória. Base de todo protocolo BLK.' },
    { title: 'Condicionamento Metabólico', desc: 'Circuitos de alta intensidade estruturados para maximizar gasto calórico e capacidade aeróbica sem sacrificar massa magra.' },
    { title: 'Treinamento Funcional', desc: 'Movimentos multidirecionais que desenvolvem estabilidade, coordenação e força aplicada ao cotidiano e ao esporte.' },
    { title: 'Cardio de Precisão', desc: 'Protocolos de HIIT e estado estacionário calibrados por frequência cardíaca. Sem desperdício de energia, sem overtraining.' },
    { title: 'Mobilidade e Recuperação', desc: 'Integrado ao protocolo semanal, não opcional. Amplitude de movimento é performance. Recuperação é treino.' },
    { title: 'Periodização Psicológica', desc: 'Ciclos de deload programados e gestão de carga mental. O sistema BLK treina o corpo e a cabeça com a mesma precisão.' }
  ];

  return (
    <section id="protocolo" className="py-24 md:py-32 relative border-b border-[var(--color-ash)]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <SectionLabel>Sistema BLK</SectionLabel>
          <h2 className="font-display text-[40px] md:text-[64px] leading-[0.9] tracking-tight mb-6">
            O PROTOCOLO É <span className="text-[var(--color-primary)]">A BASE</span>
          </h2>
          <p className="text-[16px] text-[var(--color-silver)] leading-relaxed">
            Cada aluno BLK passa por um sistema de avaliação e evolução contínua. Não há treino aleatório. Há método.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Phases timeline */}
          <div className="relative">
            <div className="absolute left-[15px] top-4 bottom-0 w-[1px] bg-[var(--color-ash)]"></div>
            <h3 className="font-display text-2xl mb-12 pl-12 text-white">Fases do Protocolo</h3>
            
            <div className="flex flex-col gap-10">
              {phases.map((phase) => (
                <div key={phase.num} className="relative pl-12 group">
                  <div className="absolute left-0 top-1 w-[30px] h-[30px] bg-[var(--color-carbon)] border border-[var(--color-ash)] flex items-center justify-center group-hover:border-[var(--color-primary)] transition-colors z-10">
                    <span className="text-[10px] font-mono text-[var(--color-silver)] group-hover:text-[var(--color-primary)] transition-colors">{phase.num}</span>
                  </div>
                  <h4 className="text-[18px] font-semibold text-white mb-2">{phase.title}</h4>
                  <p className="text-[14px] text-[var(--color-smoke)] leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* System Grid */}
          <div>
            <h3 className="font-display text-2xl mb-12 text-white">Sistema de Treinamento</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {systems.map((sys, idx) => (
                <div key={idx} className="bg-[var(--color-iron)]/40 border border-[var(--color-ash)]/50 p-6 hover:border-[var(--color-primary)]/50 transition-colors">
                  <div className="text-[var(--color-primary)] mb-4">
                    <iconify-icon icon="solar:bolt-linear" width="24" height="24"></iconify-icon>
                  </div>
                  <h4 className="text-[16px] font-semibold text-white mb-3">
                    <span className="text-[12px] text-[var(--color-smoke)] font-mono mr-2">0{idx + 1}</span>
                    {sys.title}
                  </h4>
                  <p className="text-[13px] text-[var(--color-silver)] leading-relaxed">{sys.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6">
              <Button variant="primary">Começar Agora</Button>
              <Button variant="secondary">Falar com Especialista</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}