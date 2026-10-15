import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'

export default function ProtocolSection() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico preciso",
      text: "Antes de treinar, entendemos você. Avaliação postural, composição corporal, histórico de lesões e mapeamento de objetivos reais."
    },
    {
      num: "02",
      title: "Progressão com ciência",
      text: "Nenhum treino é criado no improviso. Aplicamos periodização para garantir que você sempre evolua sem entrar em platô."
    },
    {
      num: "03",
      title: "Coach presente",
      text: "Seu coach não fica na recepção. Ele está na área de treino, ajustando execução, corrigindo carga e garantindo esforço válido."
    },
    {
      num: "04",
      title: "Ajuste contínuo",
      text: "A cada 6 semanas, seu protocolo é revisado com base nos dados. O treino evolui porque você evolui."
    }
  ]

  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#E5C000]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <Eyebrow color="yellow">Nosso método</Eyebrow>
            <h2 className="text-h2 mb-6">
              Aqui não existe treino <span className="text-[#E5C000]">genérico</span>.
            </h2>
            <div className="space-y-6 text-[#F5F5F5] text-base leading-relaxed mb-10">
              <p>
                Na AURA, "protocolo" não é uma palavra de marketing. É a nossa estrutura de trabalho.
              </p>
              <p>
                Todo aluno passa por uma avaliação física completa antes de iniciar qualquer treino. A partir daí, um coach monta um protocolo individual — considerando seu histórico, objetivos, disponibilidade e limitações.
              </p>
              <p>
                Esse protocolo é revisado a cada 6 semanas. Nada fica parado. Nada é aleatório. Cada semana tem um objetivo dentro de um arco maior de evolução.
              </p>
            </div>
            <Button variant="primary">
              Entender meu protocolo
            </Button>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl text-white mb-10 tracking-wider">Os pilares do sistema</h3>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-[#2E2E2E]/30 border border-[#2E2E2E] p-8 flex flex-col sm:flex-row gap-8 hover:bg-[#2E2E2E]/80 transition-colors">
                  <div className="font-display text-6xl text-[#E5C000] opacity-50 flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-display text-2xl text-white mb-3 tracking-wide">{step.title}</h4>
                    <p className="text-[#888888] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}