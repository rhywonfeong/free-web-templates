export const WHATSAPP = "https://wa.me/5500000000000";

export const wa = (msg) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const CTA_LINKS = {
  reading: wa("Olá! Vim pelo site da ESTELAR e quero receber minha leitura ✨"),
  report: wa("Olá! Quero meu Relatório Estelar Personalizado ✨"),
  club: wa("Olá! Quero entrar para o Clube Estelar 🌙"),
  start: wa("Olá! Quero começar minha leitura pela ESTELAR ✨"),
};

export const reportContents = [
  { icon: "solar:star-line-duotone", title: "Energia principal do mês", text: "O tom do seu ciclo, traduzido com clareza." },
  { icon: "solar:card-line-duotone", title: "Carta guia", text: "O arquétipo que ilumina seu momento." },
  { icon: "solar:heart-line-duotone", title: "Previsão amorosa", text: "Leitura intuitiva da sua vida afetiva." },
  { icon: "solar:shield-warning-line-duotone", title: "Bloqueios e caminhos", text: "O que pesa e por onde a energia flui." },
  { icon: "solar:hand-stars-line-duotone", title: "Conselho espiritual", text: "Uma direção simbólica para decidir com consciência." },
  { icon: "solar:letter-line-duotone", title: "Mensagem final", text: "Palavras escritas para a sua energia, com seu nome." },
];

export const clubBenefits = [
  "Leitura mensal personalizada para o seu ciclo",
  "Relatório Estelar Personalizado em formato premium",
  "Áudio curto explicando sua leitura",
  "Previsão energética do mês",
  "Carta do mês + orientação amorosa ou geral",
  "Prioridade no atendimento",
  "Conteúdos e leituras sazonais exclusivas",
];

export const readings = [
  {
    icon: "solar:heart-angle-line-duotone",
    name: "Leitura Amorosa",
    desc: "Para quem carrega uma pessoa, uma dúvida ou um silêncio no coração.",
    who: "Ideal se você precisa entender se espera, insiste ou segue.",
    gets: "Leitura intuitiva + mensagem personalizada sobre sua situação afetiva.",
  },
  {
    icon: "solar:stars-minimalistic-line-duotone",
    name: "Leitura Geral",
    desc: "Um retrato simbólico do seu momento: energia, ciclos e sinais.",
    who: "Ideal se você sente que precisa de clareza sobre a sua fase atual.",
    gets: "Leitura completa do momento + conselho espiritual direcionado.",
  },
  {
    icon: "solar:compass-line-duotone",
    name: "Caminhos e Decisões",
    desc: "Para quando existe uma escolha pedindo coragem e consciência.",
    who: "Ideal se você está entre dois caminhos e quer enxergar com calma.",
    gets: "Leitura dos cenários + reflexão guiada para decidir com mais clareza.",
  },
];

export const comparison = [
  { feature: "Leitura personalizada", single: true, club: true },
  { feature: "Mensagem escrita para você", single: true, club: true },
  { feature: "Relatório Estelar Personalizado", single: false, club: true },
  { feature: "Áudio explicando a leitura", single: false, club: true },
  { feature: "Previsão energética todo mês", single: false, club: true },
  { feature: "Acompanhamento de ciclos", single: false, club: true },
  { feature: "Prioridade no atendimento", single: false, club: true },
  { feature: "Bônus e leituras sazonais", single: false, club: true },
];

export const cards3 = [
  {
    id: 1,
    symbol: "solar:sun-2-line-duotone",
    title: "A Semente",
    message: "Existe algo florescendo, mas você precisa parar de duvidar do seu próprio tempo.",
  },
  {
    id: 2,
    symbol: "solar:moon-stars-line-duotone",
    title: "O Silêncio",
    message: "A resposta que você procura talvez esteja no silêncio que você vem evitando.",
  },
  {
    id: 3,
    symbol: "solar:star-fall-line-duotone",
    title: "A Travessia",
    message: "Uma mudança quer abrir espaço para algo mais alinhado com você.",
  },
];

export const testimonials = [
  {
    name: "Mariana S.",
    context: "Leitura amorosa",
    text: "Parecia que a mensagem tinha sido escrita exatamente para o momento que eu estava vivendo. Me ajudou a olhar para tudo com mais calma.",
  },
  {
    name: "Camila R.",
    context: "Clube Estelar",
    text: "O relatório é lindo. Eu salvei no celular e reli várias vezes durante o mês. Virou meu ritual de início de ciclo.",
  },
  {
    name: "Júlia A.",
    context: "Leitura geral",
    text: "Foi acolhedor, claro e muito mais profundo do que eu esperava. Saí da leitura com a cabeça mais leve.",
  },
  {
    name: "Beatriz L.",
    context: "Caminhos e decisões",
    text: "Eu estava muito confusa sobre uma escolha e a leitura me ajudou a enxergar os dois caminhos com consciência.",
  },
];

export const steps = [
  { n: "01", title: "Escolha", text: "Escolha sua leitura ou entre no Clube Estelar." },
  { n: "02", title: "Conte", text: "Envie seu nome e o tema que pesa no seu coração." },
  { n: "03", title: "Aguarde", text: "Sua leitura é preparada com atenção e cuidado." },
  { n: "04", title: "Receba", text: "Você recebe sua mensagem, relatório e orientação." },
];

export const differentials = [
  { icon: "solar:palette-line-duotone", title: "Entrega bonita", text: "Cada leitura vira um relatório visual que dá vontade de guardar." },
  { icon: "solar:user-heart-line-duotone", title: "Feita para você", text: "Nada genérico: sua leitura parte do seu nome e do seu tema." },
  { icon: "solar:lock-keyhole-line-duotone", title: "Sigilo absoluto", text: "Sua história fica entre você e a sua leitura." },
  { icon: "solar:moon-line-duotone", title: "Sensação de ritual", text: "Um momento mensal de pausa, clareza e autocuidado espiritual." },
  { icon: "solar:chat-round-like-line-duotone", title: "Linguagem clara", text: "Sem misticismo confuso: orientação simbólica que você entende." },
  { icon: "solar:users-group-rounded-line-duotone", title: "Atendimento humano", text: "Você fala com uma pessoa real, com acolhimento de verdade." },
];

export const faqs = [
  { q: "A leitura é personalizada?", a: "Sim. Cada leitura parte do seu nome e do tema que você compartilha. Nada é copiado ou genérico — a mensagem é preparada para a sua energia e o seu momento." },
  { q: "Como recebo meu Relatório Estelar?", a: "Você recebe um relatório visual premium, em PDF ou página privada, com sua carta guia, energia do mês, previsão amorosa, bloqueios, conselho espiritual e mensagem final." },
  { q: "Em quanto tempo recebo?", a: "Leituras são preparadas com cuidado e entregues normalmente em até 48 horas. Membros do Clube Estelar têm prioridade no atendimento." },
  { q: "Posso perguntar sobre amor?", a: "Sim. A leitura amorosa é uma das mais procuradas. Trabalhamos com orientação simbólica e reflexiva — sem promessas absolutas sobre outras pessoas." },
  { q: "Preciso entender de tarot?", a: "Não. A leitura é traduzida em linguagem clara e acolhedora. Você não precisa conhecer cartas ou símbolos para receber sua mensagem." },
  { q: "O atendimento é sigiloso?", a: "Totalmente. O que você compartilha permanece entre você e a sua leitura. Sigilo é parte essencial da experiência ESTELAR." },
  { q: "Posso cancelar o Clube Estelar?", a: "Sim, a qualquer momento, sem burocracia. Você permanece apenas enquanto a experiência fizer sentido para o seu ciclo." },
  { q: "A leitura substitui terapia ou aconselhamento profissional?", a: "Não. As leituras têm caráter simbólico, espiritual e reflexivo, voltadas para autoconhecimento e orientação pessoal. Não substituem aconselhamento médico, psicológico, jurídico ou financeiro." },
  { q: "O que acontece depois que eu clico no WhatsApp?", a: "Você cai em uma conversa acolhedora. Conta seu nome e o tema principal, escolhe o formato — e sua leitura começa a ser preparada." },
];