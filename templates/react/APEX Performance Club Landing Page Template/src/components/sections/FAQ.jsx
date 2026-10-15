import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "Preciso ter experiência prévia para me matricular?", a: "Não. O APEX atende desde iniciantes completos até atletas de alto rendimento. Nossa avaliação inicial determina o ponto de partida ideal — ninguém entra no protocolo sem estar pronto para ele." },
    { q: "Como funciona a avaliação inicial?", a: "Após a matrícula, você agenda uma sessão de diagnóstico com um coach. São 60 minutos de avaliação física completa: composição corporal, testes funcionais, histórico de saúde e objetivos. Só depois disso seu protocolo é montado." },
    { q: "Posso mudar de plano depois de contratar?", a: "Sim. O upgrade pode ser feito a qualquer momento, com vigência no próximo ciclo. O downgrade também é permitido, com antecedência de 5 dias úteis antes da renovação." },
    { q: "Qual é o horário de funcionamento?", a: "Segunda a sexta: das 5h30 às 23h. Sábados: das 7h às 20h. Domingos e feriados: das 8h às 14h. Feriados especiais têm horário reduzido, divulgado com antecedência." },
    { q: "Os equipamentos são revisados com frequência?", a: "Sim. Temos manutenção preventiva mensal em todos os equipamentos e suporte técnico disponível 7 dias por semana. Em caso de falha, o equipamento é sinalizado e substituído em até 48h." },
    { q: "Existe contrato de fidelidade?", a: "Não exigimos fidelidade. Você pode cancelar o plano a qualquer momento, com apenas 24h de antecedência antes do próximo ciclo de cobrança. Sem multas, sem burocracia." },
    { q: "Posso trazer um acompanhante para visitar antes de me matricular?", a: "Claro. Oferecemos visitas guiadas gratuitas, onde você conhece toda a estrutura, conversa com um coach e tira todas as suas dúvidas — sem compromisso de matrícula." },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <SectionHeader 
            label="Perguntas Frequentes"
            title="Temos as respostas que você precisa."
            description="Se restar alguma dúvida depois daqui, é só chamar. Nossa equipe responde em menos de 2 horas."
          />
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === i ? 'border-[#111111] bg-[#F5F5F5]' : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span className={`font-display font-semibold uppercase tracking-wide text-lg ${openIndex === i ? 'text-acid' : 'text-[#111111]'}`}>
                  {faq.q}
                </span>
                <iconify-icon 
                  icon="solar:alt-arrow-down-line-duotone" 
                  class={`text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-acid' : 'text-neutral-400'}`}
                ></iconify-icon>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-neutral-600 font-light text-sm leading-relaxed border-t border-neutral-200 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}