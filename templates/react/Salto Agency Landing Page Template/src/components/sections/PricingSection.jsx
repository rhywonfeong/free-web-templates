import React from 'react';
import { motion } from 'motion/react';
import BlurText from '../BlurText';

const plans = [
  {
    name: 'Esencial',
    intro: 'Para empezar a estar online.',
    setup: '490 €',
    monthly: '15 €/mes',
    cta: 'Empezar con Esencial',
    highlighted: false,
    features: [
      'Web de una página (landing)',
      'Formulario de contacto',
      'Integración con Google Maps',
      'Hosting y dominio incluidos',
      '3 cambios al mes',
      'Soporte por email (respuesta en 48 h)',
    ],
  },
  {
    name: 'Profesional',
    badge: 'MÁS ELEGIDO',
    intro: 'Para que tu web te traiga clientes.',
    setup: '990 €',
    monthly: '25 €/mes',
    cta: 'Empezar con Profesional',
    highlighted: true,
    featuresIntro: 'Incluye todo lo del Esencial, y además:',
    features: [
      'Web multipágina (hasta 6 páginas)',
      'SEO local (Google + Maps)',
      'Ficha de Google Business + gestión de reseñas',
      'Botón directo a WhatsApp y a llamada',
      'Cambios ilimitados',
      'Soporte por WhatsApp (respuesta en 24 h)',
      'Informe mensual de visitas y clics',
    ],
  },
  {
    name: 'A medida',
    intro: 'Para negocios con necesidades específicas.',
    setup: 'desde 1.990 €',
    monthly: 'desde 30 €/mes',
    cta: 'Hablemos',
    highlighted: false,
    featuresIntro: 'Incluye todo lo del Profesional, y además:',
    features: [
      'E-commerce o sistema de reservas',
      'Multi-idioma',
      'Integraciones a medida (CRM, calendario, ERP…)',
      'Páginas ilimitadas',
      'Soporte prioritario (respuesta el mismo día)',
      'Sesión estratégica trimestral',
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="precios"
      className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-36 scroll-mt-28"
      aria-labelledby="pricing-heading"
    >
      <div className="absolute inset-x-0 top-24 mx-auto h-72 w-[80%] rounded-full bg-[#8fb2d7]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-full px-4 py-1.5 mb-6"
        >
          <span className="text-white text-xs font-medium font-body uppercase tracking-wider">
            PRECIOS
          </span>
        </motion.div>

        <BlurText
          text="Planes claros. Sin sorpresas."
          className="section-heading text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] justify-center text-white"
        />

        <motion.p
          id="pricing-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 text-white/60 font-body font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Una cuota fija al mes y cambios incluidos. Permanencia de 12 meses,
          después cancelas cuando quieras.
        </motion.p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-stretch">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.12, duration: 0.65 }}
            className={[
              'relative rounded-[2rem] p-7 md:p-8 flex flex-col overflow-hidden transition-all duration-300',
              plan.highlighted
                ? 'lg:-mt-6 lg:mb-0 min-h-[640px] border border-[#b8d4ff]/50 bg-[#8fb2d7]/15 shadow-[0_24px_90px_rgba(143,178,215,0.24)] hover:shadow-[0_28px_110px_rgba(143,178,215,0.32)]'
                : 'lg:mt-8 min-h-[590px] liquid-glass hover:-translate-y-1',
            ].join(' ')}
          >
            {plan.highlighted && (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.24),transparent_34%),linear-gradient(180deg,rgba(143,178,215,0.22),rgba(255,255,255,0.03))] pointer-events-none"></div>
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl pointer-events-none"></div>
              </>
            )}

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="pricing-card-title text-3xl md:text-4xl font-heading italic tracking-tight text-white leading-none">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-white/60 font-body font-light text-sm leading-relaxed">
                    {plan.intro}
                  </p>
                </div>

                {plan.badge && (
                  <span className="shrink-0 rounded-full bg-white text-black px-3 py-1 text-[10px] font-semibold tracking-wider uppercase shadow-lg">
                    {plan.badge}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-7">
                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
                  <p className="text-white/45 font-body text-xs uppercase tracking-widest mb-2">
                    Setup
                  </p>
                  <p className="text-white text-2xl font-body font-medium tracking-tight">
                    {plan.setup}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
                  <p className="text-white/45 font-body text-xs uppercase tracking-widest mb-2">
                    Después
                  </p>
                  <p className="text-white text-2xl font-body font-medium tracking-tight">
                    {plan.monthly}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-white/80 font-body font-medium text-sm mb-4">
                  {plan.featuresIntro || 'Incluye:'}
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-left">
                      <span
                        className={[
                          'mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0',
                          plan.highlighted ? 'bg-white text-black' : 'bg-white/10 text-white',
                        ].join(' ')}
                        aria-hidden="true"
                      >
                        <iconify-icon icon="solar:check-circle-bold" width="15" height="15"></iconify-icon>
                      </span>
                      <span className="text-white/62 font-body font-light text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={[
                  'mt-auto w-full rounded-full px-6 py-3.5 font-body font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black',
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-white/90 hover:scale-[1.02] shadow-[0_12px_36px_rgba(255,255,255,0.18)]'
                    : 'border border-white/20 text-white hover:bg-white/10 hover:border-white/35',
                ].join(' ')}
                aria-label={plan.cta}
              >
                {plan.cta}
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}