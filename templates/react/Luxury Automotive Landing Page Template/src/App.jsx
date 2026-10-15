import React, { useState } from 'react';
import { clsx } from 'clsx';

// --- MOCK DATA ---
const VEHICLES = [
  {
    id: 1,
    make: 'Porsche',
    model: '911 Carrera S',
    year: '2023',
    price: 'R$ 1.250.000',
    mileage: '5.000 km',
    category: 'Esportivo',
    image: 'https://images.unsplash.com/photo-1503376760366-501306eb8c04?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['Motor 3.0T', '0-100 3.7s', 'Pacote Sport Chrono']
  },
  {
    id: 2,
    make: 'BMW',
    model: 'M3 Competition',
    year: '2022',
    price: 'R$ 890.000',
    mileage: '12.000 km',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['510cv', 'Tração xDrive', 'Interior em Carbono']
  },
  {
    id: 3,
    make: 'Audi',
    model: 'RS Q8',
    year: '2023',
    price: 'R$ 1.100.000',
    mileage: '2.500 km',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['V8 Biturbo', 'Suspensão a Ar', 'Freios de Cerâmica']
  },
  {
    id: 4,
    make: 'Mercedes-Benz',
    model: 'AMG GT R',
    year: '2021',
    price: 'R$ 1.800.000',
    mileage: '8.000 km',
    category: 'Esportivo',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['V8 585cv', 'Eixo Traseiro Direcional', 'Magno Green']
  },
  {
    id: 5,
    make: 'Land Rover',
    model: 'Range Rover Sport',
    year: '2024',
    price: 'R$ 950.000',
    mileage: '0 km',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['Híbrido', 'Meridian Sound', 'Pano Teto']
  },
  {
    id: 6,
    make: 'Volvo',
    model: 'XC90 Recharge',
    year: '2023',
    price: 'R$ 580.000',
    mileage: '15.000 km',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1615887023516-9dcafad606ce?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['7 Lugares', 'Pilot Assist', 'Cristal Orrefors']
  }
];

const CATEGORIES = ['Todos', 'Esportivo', 'SUV', 'Sedan'];

// --- SHADCN-INSPIRED UI COMPONENTS ---

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90',
    outline: 'border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 text-zinc-900',
    ghost: 'hover:bg-zinc-100 hover:text-zinc-900 text-zinc-700',
  };
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  return (
    <button
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={clsx(
        'flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const Badge = ({ className, variant = 'default', ...props }) => {
  const variants = {
    default: 'border-transparent bg-zinc-900 text-zinc-50 hover:bg-zinc-900/80',
    secondary: 'border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80',
    outline: 'text-zinc-950 border-zinc-200',
  };
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

const Card = ({ className, ...props }) => (
  <div className={clsx('rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow-sm transition-all hover:shadow-md', className)} {...props} />
);

// --- SECTIONS ---

const Navbar = () => (
  <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-white">
          <iconify-icon icon="solar:steering-wheel-bold" width="20"></iconify-icon>
        </div>
        <span className="text-lg font-semibold tracking-tight">AutoPremium</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
        <a href="#estoque" className="hover:text-zinc-900 transition-colors">Estoque</a>
        <a href="#servicos" className="hover:text-zinc-900 transition-colors">Serviços</a>
        <a href="#sobre" className="hover:text-zinc-900 transition-colors">Sobre</a>
        <a href="#contato" className="hover:text-zinc-900 transition-colors">Contato</a>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
        </Button>
        <Button className="hidden md:inline-flex">Agendar Test Drive</Button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-zinc-50 pt-16 md:pt-24 pb-32">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200 via-transparent to-transparent opacity-50"></div>
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <Badge variant="secondary" className="w-fit">Novo Showroom São Paulo</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
            Descubra a <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">excelência</span> sobre rodas.
          </h1>
          <p className="text-lg text-zinc-600 max-w-[500px] leading-relaxed">
            Curadoria especializada em veículos esportivos e de luxo. Garantia de procedência, laudo cautelar aprovado e atendimento premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button size="lg" className="gap-2">
              Ver Estoque Completo
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </Button>
            <Button size="lg" variant="outline">Avaliar meu usado</Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8 mt-4 border-t border-zinc-200">
            <div>
              <p className="text-3xl font-bold tracking-tight">150+</p>
              <p className="text-sm text-zinc-500 font-medium">Veículos em estoque</p>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight">4.9</p>
              <div className="flex items-center gap-1 text-sm text-zinc-500 font-medium mt-1">
                <iconify-icon icon="solar:star-bold" className="text-zinc-900"></iconify-icon>
                Google Reviews
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-2xl blur-2xl opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200&h=800" 
            alt="Porsche na estrada" 
            className="relative rounded-2xl border border-zinc-200 shadow-xl object-cover aspect-[4/3] w-full"
          />
          
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-zinc-200 shadow-lg flex items-center gap-4">
             <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center">
               <iconify-icon icon="solar:shield-check-bold" className="text-zinc-900 text-xl"></iconify-icon>
             </div>
             <div>
               <p className="text-sm font-semibold text-zinc-900">Laudo Cautelar 100%</p>
               <p className="text-xs text-zinc-500">Todos os veículos aprovados</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InventorySection = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = VEHICLES.filter(car => {
    const matchesCategory = activeCategory === 'Todos' || car.category === activeCategory;
    const searchString = `${car.make} ${car.model} ${car.year}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="estoque" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Estoque Selecionado</h2>
            <p className="text-zinc-500 mt-2">Encontre o carro dos seus sonhos com procedência garantida.</p>
          </div>
          <div className="flex items-center relative w-full md:w-[300px]">
            <iconify-icon icon="solar:magnifer-linear" className="absolute left-3 text-zinc-400"></iconify-icon>
            <Input 
              placeholder="Buscar marca, modelo..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide">
          {CATEGORIES.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map(car => (
            <Card key={car.id} className="group overflow-hidden flex flex-col cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <img 
                  src={car.image} 
                  alt={`${car.make} ${car.model}`} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm border-none shadow-sm">{car.year}</Badge>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900 line-clamp-1">{car.make} {car.model}</h3>
                    <p className="text-sm text-zinc-500">{car.category}</p>
                  </div>
                  <span className="font-semibold text-zinc-900 whitespace-nowrap">{car.price}</span>
                </div>
                
                <div className="flex items-center gap-4 mt-4 mb-6 text-sm text-zinc-600">
                  <div className="flex items-center gap-1.5">
                    <iconify-icon icon="solar:routing-linear" className="text-zinc-400"></iconify-icon>
                    {car.mileage}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <iconify-icon icon="solar:gas-station-linear" className="text-zinc-400"></iconify-icon>
                    Gasolina
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                  {car.features.map(feature => (
                    <span key={feature} className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {filteredVehicles.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            <iconify-icon icon="solar:car-broken-linear" className="text-4xl mb-3 opacity-50"></iconify-icon>
            <p>Nenhum veículo encontrado com estes filtros.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: "solar:shield-check-linear",
      title: "Garantia Estendida",
      description: "Todos os veículos possuem no mínimo 1 ano de garantia total contra defeitos de motor e câmbio."
    },
    {
      icon: "solar:document-text-linear",
      title: "Laudo Cautelar 100%",
      description: "Trabalhamos apenas com veículos aprovados sem apontamentos estruturais ou leilão."
    },
    {
      icon: "solar:wallet-money-linear",
      title: "Financiamento Premium",
      description: "Taxas exclusivas a partir de 0.99% a.m em parceria com os maiores bancos do país."
    },
    {
      icon: "solar:routing-2-linear",
      title: "Entrega Nacional",
      description: "Entregamos seu novo carro em qualquer lugar do Brasil em caminhão plataforma fechado."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">O Padrão AutoPremium</h2>
          <p className="text-zinc-500 mt-4">Nossa missão é redefinir a experiência de compra de veículos seminovos de luxo, trazendo total transparência e segurança.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 rounded-lg bg-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
                <iconify-icon icon={feature.icon} className="text-2xl"></iconify-icon>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contato" className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="bg-zinc-900 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-50"></div>
        
        <div className="flex-1 relative z-10 text-zinc-50">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Pronto para o próximo nível?</h2>
          <p className="text-zinc-400 mb-8 max-w-md">Deixe seus dados e um de nossos consultores especializados entrará em contato em até 15 minutos.</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <iconify-icon icon="solar:map-point-linear" className="text-xl"></iconify-icon>
              Av. Europa, 1200 - Jardim Europa, São Paulo
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <iconify-icon icon="solar:phone-calling-linear" className="text-xl"></iconify-icon>
              (11) 99999-9999
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <iconify-icon icon="solar:letter-linear" className="text-xl"></iconify-icon>
              contato@autopremium.com.br
            </div>
          </div>
        </div>

        <div className="w-full max-w-md bg-white rounded-2xl p-6 md:p-8 relative z-10 shadow-2xl">
          <h3 className="text-xl font-semibold text-zinc-900 mb-6">Solicitar Contato</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-900">Nome Completo</label>
              <Input placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-900">WhatsApp</label>
              <Input placeholder="(00) 00000-0000" type="tel" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-900">Veículo de Interesse</label>
              <Input placeholder="Ex: Porsche 911" />
            </div>
            <Button className="w-full mt-2" size="lg">Enviar Mensagem</Button>
            <p className="text-xs text-center text-zinc-500 mt-4">Seus dados estão seguros. Não enviamos spam.</p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-zinc-200 py-12">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-white">
              <iconify-icon icon="solar:steering-wheel-bold" width="20"></iconify-icon>
            </div>
            <span className="text-lg font-semibold tracking-tight">AutoPremium</span>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs">A principal curadoria de veículos premium e esportivos do Brasil. Qualidade e transparência em primeiro lugar.</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-zinc-900 mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-zinc-900 transition-colors">Ver Estoque</a></li>
            <li><a href="#" className="hover:text-zinc-900 transition-colors">Financiamento</a></li>
            <li><a href="#" className="hover:text-zinc-900 transition-colors">Venda seu Carro</a></li>
            <li><a href="#" className="hover:text-zinc-900 transition-colors">Sobre Nós</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-zinc-900 mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-zinc-900 transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-zinc-900 transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-zinc-900 transition-colors">Garantia</a></li>
          </ul>
        </div>
        
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-semibold text-zinc-900 mb-4">Redes Sociais</h4>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 text-zinc-500">
              <iconify-icon icon="simple-icons:instagram" className="text-lg"></iconify-icon>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 text-zinc-500">
              <iconify-icon icon="simple-icons:youtube" className="text-lg"></iconify-icon>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 text-zinc-500">
              <iconify-icon icon="simple-icons:tiktok" className="text-lg"></iconify-icon>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-zinc-200 text-center text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} AutoPremium Motors. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InventorySection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}