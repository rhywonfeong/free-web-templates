import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Protocol() {
  const steps = [
    { num: "01", name: "Diagnóstico", desc: "Avaliação física completa com bioimpedância, teste de força e anamnese detalhada. Entendemos de onde você parte." },
    { num: "02", name: "Prescrição", desc: "Seu coach cria um protocolo 100% individualizado — periodização, volumes, intensidades e progressão semanais." },
    { num: "03", name: "Execução", desc: "Treinos supervisionados com feedback em tempo real. Correção postural, ajuste de carga e motivação técnica." },
    { num: "04", name: "Revisão", desc: "A cada 30 dias, reavaliamos seus resultados e ajustamos o protocolo. A evolução é contínua e documentada." },
  ];

  const systems = [
    { icon: "solar:graph-up-bold", name: "Periodização Linear", desc: "Progressão gradual de cargas ao longo de ciclos semanais para força e hipertrofia." },
    { icon: "solar:flame-bold", name: "HIIT & Metabólico", desc: "Protocolos de alta intensidade para maximizar a queima calórica e condicionamento." },
    { icon: "solar:accessibility-bold", name: "Funcional Integrado", desc: "Movimentos multiarticulares com foco em mobilidade, estabilidade e força real." },
    { icon: "solar:leaf-bold", name: "Recuperação Ativa", desc: "Regeneração muscular, liberação miofascial e amplitude para longevidade." },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#111111] text-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader 
          label="O método APEX"
          title="Performance não é acidente. É protocolo."
          description="Cada aluno que entra no APEX passa por um sistema estruturado de avaliação, prescrição e progressão. Nada aqui é genérico — tudo é desenhado para o seu corpo, seu histórico e os seus objetivos."
          dark={true}
        />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-8xl font-display font-black text-neutral-800 absolute -top-10 -left-4 z-0 group-hover:text-acid/20 transition-colors duration-500">
                {step.num}
              </div>
              <div className="relative z-10 pt-8 border-t-2 border-neutral-800 group-hover:border-acid transition-colors duration-300">
                <h3 className="font-display font-bold uppercase text-2xl tracking-wide mb-4">{step.name}</h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Systems grid */}
        <div className="bg-neutral-900 rounded-[24px] p-8 md:p-16 border border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 pb-8 border-b border-neutral-800">
            <h3 className="font-display font-bold uppercase text-3xl md:text-4xl tracking-tight max-w-md">
              Sistemas de Treinamento
            </h3>
            <Button to="/agendar" variant="outlineDark">Falar com especialista</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {systems.map((sys, i) => (
              <div key={i}>
                <iconify-icon icon={sys.icon} class="text-3xl text-acid mb-6"></iconify-icon>
                <h4 className="font-display font-semibold uppercase text-lg tracking-wider mb-3">{sys.name}</h4>
                <p className="text-neutral-400 font-light text-sm leading-relaxed">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}