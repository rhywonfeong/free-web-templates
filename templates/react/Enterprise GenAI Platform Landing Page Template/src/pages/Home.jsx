import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20 overflow-hidden">
      
      {/* 1. Hero / Main Banner */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 max-w-5xl mx-auto text-center animate-fade-in">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4862ff]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
          <iconify-icon icon="solar:stars-linear" className="text-[#4862ff]"></iconify-icon>
          <span>Serenity AI Hub 2.0 ya disponible</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Impulsa tu organización con <br className="hidden md:block"/>
          <span className="text-gradient">GenAI de última generación</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Descubre Serenity Star, el ecosistema empresarial que cierra la brecha entre la exploración y la producción real en IA generativa. Escala la inteligencia artificial con total seguridad, flexibilidad y control.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contacto" variant="primary" size="lg" icon="solar:arrow-right-linear">
            Solicita demo
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            Ver Precios
          </Button>
          <Button href="/contacto" variant="ghost" size="lg">
            Contacta
          </Button>
        </div>
      </section>

      {/* 2. ¿Qué es Serenity Star? & ¿Para quién es? */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            ¿Qué es Serenity Star?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Serenity Star es el ecosistema integral de IA generativa diseñado para todo tipo de organizaciones: desde startups hasta grandes industrias. Democratizamos la inteligencia artificial, permitiendo que equipos técnicos y de negocio creen, automaticen y gestionen procesos con agentes inteligentes, <strong>sin comprometer la seguridad ni la gobernanza.</strong>
          </p>
        </div>
        <Card className="bg-[#f4f6f8] border-none">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <iconify-icon icon="solar:target-linear" className="text-[#4862ff] text-2xl"></iconify-icon>
            ¿Para quién es?
          </h3>
          <ul className="space-y-4">
            {[
              "Empresas innovadoras que buscan productividad instantánea.",
              "Departamentos de tecnología, ventas, soporte, RRHH y compliance.",
              "Sectores regulados: salud, finanzas, sector público, retail y más."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#4862ff] mt-1 shrink-0"></iconify-icon>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* 3. El poder del Full-Spectrum GenAI */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              El poder del Full-Spectrum GenAI
            </h2>
            <p className="text-slate-600">
              Todas las herramientas que necesitas para construir, desplegar y escalar IA en un solo ecosistema unificado.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'solar:box-minimalistic-linear', title: 'Agentes preconfigurados', desc: 'Soluciones listas para usar en marketing, ventas, soporte, IT y operaciones.' },
              { icon: 'solar:magic-stick-3-linear', title: 'Builder No-Code', desc: 'Crea flujos de trabajo inteligentes usando lenguaje natural, ¡sin escribir código!' },
              { icon: 'solar:code-square-linear', title: 'Dev Platform', desc: 'SDKs, APIs y entornos profesionales para desplegar y personalizar cualquier agente.' },
              { icon: 'solar:diploma-linear', title: 'Formación de Expertos', desc: 'Entrena y ajusta tus propios modelos y agentes para casos empresariales avanzados.' }
            ].map((feature, i) => (
              <Card key={i} className="flex flex-col h-full bg-white">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-[#4862ff] border border-slate-100">
                  <iconify-icon icon={feature.icon} width="24"></iconify-icon>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Products Highlight (Hub & Chat) */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        <Card className="relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
            <iconify-icon icon="solar:server-square-linear" width="120" className="text-[#4862ff]"></iconify-icon>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight mb-4 pr-10">Serenity AI Hub</h3>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed max-w-sm">
            Tu centro de mando para orquestar, monitorizar y escalar todos tus agentes y modelos desde una única interfaz.
          </p>
          <ul className="space-y-3 mb-8">
            {['+350 modelos integrados', 'Despliegues SaaS, VPC, On-Prem, Edge', 'Gobierno total y seguridad avanzada'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                <iconify-icon icon="solar:check-read-linear" className="text-[#bdc7cc]"></iconify-icon>
                {item}
              </li>
            ))}
          </ul>
          <Link to="/platform" className="inline-flex items-center gap-2 text-sm font-medium text-[#4862ff] hover:text-[#364ce6]">
            Explorar AI Hub <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </Link>
        </Card>

        <Card className="relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <iconify-icon icon="solar:chat-round-check-linear" width="120" className="text-[#4862ff]"></iconify-icon>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight mb-4 pr-10">Serenity AI Chat</h3>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed max-w-sm">
            El chat de IA seguro para empleados. Potencia la productividad de cada departamento conectando tus sistemas internos.
          </p>
          <ul className="space-y-3 mb-8">
            {['Conversaciones 100% protegidas', 'Integración SSO corporativo', 'Shadow AI prevention activa'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                <iconify-icon icon="solar:check-read-linear" className="text-[#bdc7cc]"></iconify-icon>
                {item}
              </li>
            ))}
          </ul>
          <Link to="/platform" className="inline-flex items-center gap-2 text-sm font-medium text-[#4862ff] hover:text-[#364ce6]">
            Descubrir AI Chat <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </Link>
        </Card>
      </section>

      {/* 5. Trust Block (Problems) */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="border border-slate-200 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10"></div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-500 mb-6">
            <iconify-icon icon="solar:danger-triangle-linear" width="32"></iconify-icon>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            95% de los proyectos de IA fallan al escalar
          </h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            Serenity Star está diseñado desde cero para solucionar los desafíos críticos que enfrentan las empresas al implementar Inteligencia Artificial.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Agent Sprawl (Caos)', desc: 'Fragmentación y falta de control sobre múltiples micro-servicios de IA operando de forma aislada.' },
              { title: 'Costos Opacos', desc: 'Presupuestos descontrolados por falta de visibilidad en el consumo de tokens y recursos de infraestructura.' },
              { title: 'Shadow AI (Riesgo)', desc: 'Empleados usando herramientas externas no seguras, comprometiendo seriamente la IP de la empresa.' }
            ].map((problem, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-2">{problem.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Soluciones para cada desafío */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-10">Soluciones a tu medida</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#4862ff] mb-4">
              <iconify-icon icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
            </div>
            <h3 className="font-medium text-lg mb-2">Por Rol</h3>
            <p className="text-sm text-slate-500 mb-4">Herramientas específicas para Desarrolladores, CEO/CTO y equipos de Compliance.</p>
            <Link to="/soluciones" className="mt-auto text-sm font-medium text-[#4862ff] hover:underline">Ver roles</Link>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
              <iconify-icon icon="solar:city-linear" width="28"></iconify-icon>
            </div>
            <h3 className="font-medium text-lg mb-2">Por Industria</h3>
            <p className="text-sm text-slate-500 mb-4">Adaptado para Salud/Pharma, Retail, Sector Público y Finanzas.</p>
            <Link to="/soluciones" className="mt-auto text-sm font-medium text-[#4862ff] hover:underline">Ver industrias</Link>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
              <iconify-icon icon="solar:lightbulb-bolt-linear" width="28"></iconify-icon>
            </div>
            <h3 className="font-medium text-lg mb-2">Por Caso de Uso</h3>
            <p className="text-sm text-slate-500 mb-4">Optimización en automatización, soporte al cliente y ventas B2B/B2C.</p>
            <Link to="/soluciones" className="mt-auto text-sm font-medium text-[#4862ff] hover:underline">Ver casos</Link>
          </Card>
        </div>
      </section>

      {/* 7. Casos de Éxito */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Casos de éxito reales</h2>
              <p className="text-slate-400">Descubre cómo líderes de la industria transforman su operativa.</p>
            </div>
            <Button href="/casos-de-uso" variant="outline" className="hidden sm:inline-flex border-slate-700 text-white hover:bg-slate-800">
              Ver colección completa
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { client: 'Mahou San Miguel', metric: 'x20', label: 'Engagement en campañas' },
              { client: 'Hoteles Poseidón', metric: '25%', label: 'Menos consumo energético' },
              { client: 'Gobierno Bs. As.', metric: '100%', label: 'Procesos digitalizados' }
            ].map((study, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <p className="text-sm font-medium text-slate-400 mb-6">{study.client}</p>
                <div className="text-4xl font-semibold text-[#4862ff] mb-2">{study.metric}</div>
                <p className="text-sm text-slate-300 leading-relaxed">{study.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button href="/casos-de-uso" variant="outline" className="border-slate-700 text-white w-full justify-center">
              Ver colección completa
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Partners */}
      <section className="py-10 border-y border-slate-100 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Respaldados por el mejor ecosistema</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <iconify-icon icon="simple-icons:microsoft" width="40"></iconify-icon>
             <iconify-icon icon="simple-icons:ibm" width="40"></iconify-icon>
             <iconify-icon icon="simple-icons:amazonaws" width="40"></iconify-icon>
             <iconify-icon icon="simple-icons:alibaba" width="40"></iconify-icon>
             {/* Text fallbacks for specific named partners without simple-icons */}
             <span className="font-bold text-xl tracking-tight">ALTEN</span>
             <span className="font-bold text-xl tracking-tight">RICOH</span>
             <span className="font-bold text-xl tracking-tight">DEKRA</span>
          </div>
          <div className="mt-8">
            <Link to="/recursos" className="text-sm font-medium text-[#4862ff] hover:underline">Únete a nuestra red de partners →</Link>
          </div>
        </div>
      </section>

      {/* 9. Recursos & 10. Pricing Teaser */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Recursos y Comunidad</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Documentación', icon: 'solar:document-text-linear' },
              { title: 'Webinars', icon: 'solar:video-frame-linear' },
              { title: 'Blog', icon: 'solar:pen-new-square-linear' },
              { title: 'Discord Community', icon: 'simple-icons:discord' }
            ].map((res, i) => (
              <Link key={i} to="/recursos" className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-[#4862ff]/50 hover:bg-slate-50 transition-colors group">
                <div className="text-slate-400 group-hover:text-[#4862ff] transition-colors">
                  <iconify-icon icon={res.icon} width="24"></iconify-icon>
                </div>
                <span className="font-medium text-sm text-slate-700 group-hover:text-slate-900">{res.title}</span>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#4862ff]/5 to-[#4862ff]/10 rounded-2xl p-8 border border-[#4862ff]/20 flex flex-col justify-center items-start">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Precios 100% transparentes</h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Ahorra en costes por usuario frente a la competencia. Paga solo por lo que necesitas escalar.
          </p>
          <Button href="/pricing" variant="primary" size="sm" className="w-full justify-center">
            Ver planes y precios
          </Button>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
          ¿Listo para acelerar la transformación de tu empresa con GenAI?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contacto" variant="primary" size="lg">
            Solicita demo
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            Ver precios
          </Button>
        </div>
      </section>
      
    </div>
  );
}