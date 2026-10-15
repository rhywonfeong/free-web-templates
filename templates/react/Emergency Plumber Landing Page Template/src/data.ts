export const PHONE_DISPLAY = '+40 720 423 076'
export const PHONE_RAW = '+40720423076'
export const PHONE_TEL = 'tel:+40720423076'
export const WHATSAPP_URL =
  'https://wa.me/40720423076?text=' +
  encodeURIComponent(
    'Bună ziua! Am nevoie de un instalator autorizat. Vă descriu problema:'
  )
export const EMAIL = 'instalatorultau24@gmail.com'
export const EMAIL_HREF =
  'mailto:instalatorultau24@gmail.com?subject=' +
  encodeURIComponent('Solicitare intervenție instalator 24/24')
export const FACEBOOK_URL = 'https://www.facebook.com/instalatorultau24'
export const TIKTOK_HANDLE = '@instalatorultau24'
export const TIKTOK_URL = 'https://www.tiktok.com/@instalatorultau24'

export type IconName =
  | 'drain'
  | 'pipe'
  | 'faucet'
  | 'shower'
  | 'toilet'
  | 'sink'
  | 'boiler'
  | 'leak'
  | 'blueprint'
  | 'emergency'
  | 'bolt'
  | 'medal'
  | 'clock'
  | 'tag'

export type Service = {
  id: string
  title: string
  description: string
  icon: IconName
  tag: string
}

export const SERVICES: Service[] = [
  {
    id: 'desfundari',
    title: 'Desfundări 24/24',
    description:
      'Desfundări canalizare, chiuvete, sifoane și coloane cu utilaje profesionale, fără spargeri inutile.',
    icon: 'drain',
    tag: 'Urgență',
  },
  {
    id: 'tevi',
    title: 'Reparații țevi apă',
    description:
      'Detectăm și reparăm țevi sparte sau fisurate, în pereți, pardoseală sau instalația de coloană.',
    icon: 'pipe',
    tag: 'Rapid',
  },
  {
    id: 'baterii',
    title: 'Înlocuire baterii sanitare',
    description:
      'Montaj și înlocuire baterii bucătărie, baie sau cadă, cu garanție pentru manoperă.',
    icon: 'faucet',
    tag: 'Montaj',
  },
  {
    id: 'cabine',
    title: 'Montaj cabine de duș',
    description:
      'Asamblare și montaj cabine de duș, cădițe și paravane, cu etanșare profesională.',
    icon: 'shower',
    tag: 'Montaj',
  },
  {
    id: 'wc',
    title: 'Montaj vase WC',
    description:
      'Montaj vase WC clasice sau suspendate, rezervoare îngropate și reglaj mecanisme.',
    icon: 'toilet',
    tag: 'Montaj',
  },
  {
    id: 'chiuvete',
    title: 'Montaj chiuvete',
    description:
      'Montaj chiuvete bucătărie și lavoare baie, sifoane, racorduri și verificare scurgere.',
    icon: 'sink',
    tag: 'Montaj',
  },
  {
    id: 'boilere',
    title: 'Montaj boilere',
    description:
      'Montaj și înlocuire boilere electrice, grupuri de siguranță și racorduri flexibile.',
    icon: 'boiler',
    tag: 'Instalare',
  },
  {
    id: 'scurgeri',
    title: 'Reparații scurgeri',
    description:
      'Oprim rapid scurgerile de la robineți, îmbinări, sifoane sau racorduri de mașini.',
    icon: 'leak',
    tag: 'Urgență',
  },
  {
    id: 'instalatii',
    title: 'Instalații sanitare complete',
    description:
      'Instalații sanitare la roșu și la alb pentru apartamente, case și spații comerciale.',
    icon: 'blueprint',
    tag: 'Proiect',
  },
  {
    id: 'urgente',
    title: 'Intervenții de urgență',
    description:
      'Intervenții urgente instalații sanitare, non-stop, inclusiv noaptea și în weekend.',
    icon: 'emergency',
    tag: 'Non-stop',
  },
]

export const REASONS: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Intervenție Rapidă',
    text: 'Ajungem în cel mai scurt timp posibil.',
    icon: 'bolt',
  },
  {
    title: 'Experiență',
    text: 'Peste 14 ani în domeniul instalațiilor.',
    icon: 'medal',
  },
  {
    title: 'Disponibilitate 24/24',
    text: 'Suntem disponibili inclusiv seara, noaptea și în weekend.',
    icon: 'clock',
  },
  {
    title: 'Preț Corect',
    text: 'Oferim soluții eficiente și transparente.',
    icon: 'tag',
  },
]

export const STEPS: { title: string; text: string }[] = [
  { title: 'Ne contactezi', text: 'Ne contactezi telefonic sau pe WhatsApp.' },
  { title: 'Estimare', text: 'Analizăm problema și oferim estimare.' },
  { title: 'Deplasare', text: 'Venim la locație.' },
  { title: 'Rezolvare', text: 'Rezolvăm problema rapid și profesionist.' },
  { title: 'Garanție', text: 'Primești garanție pentru lucrare.' },
]

export const REVIEWS: { text: string; author: string; initials: string; meta: string }[] = [
  {
    text: 'Am avut o țeavă spartă într-o duminică seară. A ajuns foarte repede și a rezolvat problema impecabil. Recomand cu încredere.',
    author: 'Dana M.',
    initials: 'DM',
    meta: 'Reparație țeavă spartă',
  },
  {
    text: 'Profesionalism, punctualitate și preț corect. Cu siguranță voi apela din nou.',
    author: 'Marius H.',
    initials: 'MH',
    meta: 'Desfundare canalizare',
  },
  {
    text: 'Montajul boilerului a fost realizat perfect. Foarte mulțumit de lucrare.',
    author: 'Andra C.',
    initials: 'AC',
    meta: 'Montaj boiler electric',
  },
]

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'Lucrați și în weekend?',
    a: 'Da, intervenim 24/24. Programul nostru acoperă sâmbăta, duminica și sărbătorile legale, la aceleași standarde de instalator autorizat.',
  },
  {
    q: 'Oferiți garanție?',
    a: 'Da, pentru lucrările efectuate. Fiecare intervenție sanitară beneficiază de garanție pentru manoperă și pentru piesele montate de noi.',
  },
  {
    q: 'Pot trimite poze pe WhatsApp?',
    a: 'Da, pentru evaluare rapidă. Trimite o fotografie cu problema pe WhatsApp și primești o estimare orientativă înainte de deplasare.',
  },
  {
    q: 'Cât durează intervenția?',
    a: 'În funcție de locație și complexitate. Majoritatea desfundărilor și reparațiilor uzuale se rezolvă în aceeași vizită, în 30–90 de minute.',
  },
]

export const SERVICE_OPTIONS = [
  'Desfundare canalizare',
  'Reparație țeavă spartă',
  'Înlocuire baterie sanitară',
  'Montaj cabină de duș',
  'Montaj vas WC',
  'Montaj chiuvetă / lavoar',
  'Montaj sau înlocuire boiler',
  'Reparație scurgere',
  'Instalație sanitară completă',
  'Urgență – nu știu exact',
]
