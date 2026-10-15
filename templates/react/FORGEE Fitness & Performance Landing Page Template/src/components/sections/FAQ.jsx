import { Eyebrow, Headline } from '../ui/Typography';

export default function FAQ() {
  const faqs = [
    {
      q: "Preciso ter experiência?",
      a: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual."
    },
    {
      q: "Posso treinar sozinho?",
      a: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima."
    },
    {
      q: "Como funciona o cancelamento?",
      a: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória."
    },
    {
      q: "Posso visitar antes de assinar?",
      a: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-10 max-w-[800px] mx-auto border-t border-[#2A2A2A]">
      <div className="text-center mb-16">
        <Eyebrow className="mx-auto">Dúvidas</Eyebrow>
        <Headline text="PERGUNTAS DIRETAS." highlight="DIRETAS." size="md" className="mx-auto" />
      </div>

      <div className="flex flex-col gap-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#181818] border border-[#2A2A2A] rounded-md p-8">
            <h4 className="font-display font-bold text-xl tracking-tight text-white mb-3">{faq.q}</h4>
            <p className="text-[#B0B0B0] text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}