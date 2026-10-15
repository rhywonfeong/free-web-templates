import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'

export default function FAQ() {
  const faqs = [
    {
      question: "Preciso ter experiência prévia?",
      answer: "Não. O ponto de partida é individual. Todo aluno passa por uma avaliação inicial detalhada de mobilidade e força antes de receber a primeira planilha, garantindo que o treino seja adequado ao seu nível atual."
    },
    {
      question: "Posso treinar sozinho?",
      answer: "Sim, a maioria dos nossos alunos treina de forma autônoma. Nós fornecemos a planilha periodizada e nossos coaches estão sempre no salão para suporte pontual, correção técnica e segurança."
    },
    {
      question: "Como funciona o cancelamento do plano?",
      answer: "Transparência total: sem multas absurdas ou letras miúdas. Pedimos apenas um aviso prévio de 30 dias para organizar a interrupção das cobranças e fechamento do seu ciclo de treino."
    },
    {
      question: "Posso visitar antes de me matricular?",
      answer: "Com certeza. Recomendamos que você sinta o ambiente. Agende pelo site para fazer uma visita guiada e uma aula experimental gratuita na área de Conditioning ou musculação livre."
    }
  ]

  return (
    <section className="py-32 bg-[#0A0A0A] border-t border-[#1C1C1C]">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading 
          badge="FAQ"
          title="Direto ao ponto."
          align="center"
          className="mb-16"
        />
        <Accordion items={faqs} />
      </div>
    </section>
  )
}