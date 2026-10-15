import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'

export default function EquipmentSection() {
  const categories = [
    {
      id: "01",
      icon: "solar:heart-pulse-bold",
      title: "Cardio",
      desc: "Equipamentos que respeitam articulações e maximizam capacidade aeróbica.",
      items: ["Esteiras profissionais", "SkiErg & Concept2", "Assault Bike"]
    },
    {
      id: "02",
      icon: "solar:bolt-bold",
      title: "Condicionamento",
      desc: "Estímulos variados para resistência, explosão e controle em alta intensidade.",
      items: ["Battle ropes", "Sleds", "Kettlebells pesados"]
    },
    {
      id: "03",
      icon: "solar:dumbbell-bold",
      title: "Força",
      desc: "Estrutura completa para levantamento olímpico e powerlifting.",
      items: ["Plataformas LPO", "Barras olímpicas", "Power Racks"]
    },
    {
      id: "04",
      icon: "solar:box-bold",
      title: "Pesos Livres",
      desc: "Amplitude total de carga para qualquer padrão de movimento.",
      items: ["Halteres até 60kg", "Bancos ajustáveis", "Zonas organizadas"]
    },
    {
      id: "05",
      icon: "solar:settings-bold",
      title: "Máquinas",
      desc: "Selecionadas por precisão biomecânica — não por aparência.",
      items: ["Polia funcional dupla", "Leg Press unilateral", "Smith Machine"]
    },
    {
      id: "06",
      icon: "solar:routing-2-bold",
      title: "Funcional",
      desc: "Zona dedicada ao movimento funcional — treinos para a vida real.",
      items: ["TRX & Anéis", "Barras pull-up", "Wallball targets"]
    }
  ]

  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <Eyebrow>Estrutura</Eyebrow>
            <h2 className="text-h2">
              Cada equipamento aqui tem um <span className="text-[#FF5A1A]">motivo</span> de existir.
            </h2>
            <p className="text-[#888888] mt-6 text-lg">
              Nossa seleção foi feita com critério. Nada de exibicionismo. Tudo que está aqui serve a um propósito de treinamento — e está impecável para ser usado.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex flex-shrink-0">
            Ver a academia ao vivo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-[#1A1A1A] border border-[#2E2E2E] p-8 hover:border-[#444444] transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-[#2E2E2E] flex items-center justify-center text-2xl text-[#F5F5F5] group-hover:text-[#FF5A1A] group-hover:bg-[#FF5A1A]/10 transition-colors">
                  <iconify-icon icon={cat.icon}></iconify-icon>
                </div>
                <span className="font-display text-2xl text-[#444444]">{cat.id}</span>
              </div>
              
              <h3 className="text-h3 mb-3 text-white text-[24px]">{cat.title}</h3>
              <p className="text-[#888888] text-sm mb-6 leading-relaxed min-h-[60px]">
                {cat.desc}
              </p>
              
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center text-[#F5F5F5] text-sm">
                    <iconify-icon icon="solar:check-square-linear" class="text-[#FF5A1A] mr-3"></iconify-icon>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
          <Button variant="outline" className="w-full">
            Ver a academia ao vivo
          </Button>
        </div>
      </div>
    </section>
  )
}