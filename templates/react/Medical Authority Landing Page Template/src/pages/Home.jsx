import React from 'react';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import clsx from 'clsx';

export default function Home() {
  const { t } = useLang();

  const scrollToNextSection = () => {
    const next = document.getElementById('reality-section');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex-1 w-full flex flex-col">
      
      {/* HERO */}
      <section className="flex flex-col lg:flex-row w-full border-b border-gray-200 min-h-[88vh] bg-white relative z-10">
        
        <div className="w-full lg:w-1/2 flex flex-col border-r border-gray-200 shrink-0 lg:shrink">
          <div className="h-[28vh] lg:h-[42%] w-full border-b border-gray-200 flex flex-col justify-center relative bg-white overflow-hidden">
            <div 
              className="absolute inset-0 opacity-40 pointer-events-none bg-grid-static" 
              style={{ clipPath: 'inset(20% 0 20% 0)' }}
            />
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.2em] text-center text-gray-900 relative z-10 transition-transform duration-700 hover:scale-[1.02] cursor-default">
              ECHO
              <sup className="text-lg sm:text-xl lg:text-2xl ml-1 tracking-normal align-top">™</sup>
            </h1>
          </div>

          <div 
            className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-end relative" 
            style={{ background: 'radial-gradient(circle at 30% 70%, #ffffff 0%, #f9fafb 100%)' }}
          >
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-6">{t.hero.eyebrow}</p>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-medium tracking-tighter leading-[0.98] text-gray-900">
                {t.hero.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mt-6 md:mt-8 max-w-md leading-relaxed font-medium">
                {t.hero.subtitle}
              </p>
              <p className="text-sm text-gray-500 mt-4 max-w-md leading-relaxed">
                {t.hero.paragraph}
              </p>
            </div>
            
            <div className="flex items-center gap-6 mt-12 md:mt-16">
              <Link 
                to="/engage"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white text-xs font-semibold tracking-widest uppercase hover:bg-black transition-colors outline-none"
              >
                {t.hero.cta}
                <iconify-icon icon="solar:arrow-right-up-linear" width="14" />
              </Link>
              <button 
                onClick={scrollToNextSection}
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-900 transition-colors group outline-none"
              >
                {t.hero.scroll}
                <iconify-icon icon="solar:alt-arrow-down-linear" className="transition-transform group-hover:translate-y-1 duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col h-[60vh] lg:h-auto">
          <div className="flex-1 relative overflow-hidden group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bacc4a0-99e3-4167-8620-7d28e052331b_1600w.webp" 
              alt="Abstract Composition" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="h-auto lg:h-[30%] flex flex-col sm:flex-row shrink-0 border-t border-gray-200">
            <Link to="/cases" className="w-full sm:w-1/2 p-8 lg:p-10 border-b sm:border-b-0 sm:border-r border-gray-200 flex flex-col justify-between bg-white hover:bg-gray-50 transition-colors group relative min-h-[200px] lg:min-h-0 outline-none">
              <div className="flex justify-end text-gray-300 group-hover:text-gray-900 transition-colors">
                <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 mb-2">{t.nav.cases}</h3>
                <p className="text-sm text-gray-500">Selected representative engagements</p>
              </div>
            </Link>

            <Link to="/engage" className="w-full sm:w-1/2 p-8 lg:p-10 flex flex-col justify-between bg-[#0a0a0a] hover:bg-black transition-colors group relative min-h-[200px] lg:min-h-0 text-white outline-none">
              <div className="flex justify-end text-gray-600 group-hover:text-white transition-colors">
                <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-medium tracking-tight mb-2">{t.nav.engage}</h3>
                <p className="text-sm text-gray-400">Confidential review</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* REALITY CHECK */}
      <section id="reality-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-24 md:pt-40 pb-24 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">{t.reality.eyebrow}</p>
          </div>
          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-medium tracking-tighter leading-[0.9] text-gray-900 mb-12">
              <RevealText text={t.reality.title} />
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16">
              <div className="lg:col-span-7">
                <p className="text-2xl md:text-3xl text-gray-900 font-medium tracking-tight leading-snug mb-8">
                  {t.reality.lead}
                </p>
                <p className="text-base text-gray-500 leading-relaxed font-medium max-w-2xl">
                  {t.reality.body}
                </p>
              </div>
              <div className="lg:col-span-5 lg:pl-8 lg:border-l border-gray-200 flex flex-col gap-6">
                {t.reality.points.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-[10px] font-bold text-gray-400 tracking-widest pt-1.5">0{i+1}</span>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium flex-1">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DEFINITION */}
      <section className="w-full bg-gray-900 text-white relative z-10 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-1 md:col-span-3">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{t.product.eyebrow}</p>
            </div>
            <div className="col-span-1 md:col-span-9">
              <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tighter leading-[0.95] text-white mb-12 max-w-5xl">
                <RevealText text={t.product.title} />
              </h2>
              <p className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-8">
                {t.product.lead}
              </p>
              <p className="text-base text-gray-400 leading-relaxed max-w-3xl mb-16">
                {t.product.body}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 border-t border-gray-800 pt-12">
                <div className="border border-gray-800 p-8 md:p-10 bg-gray-950/40">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold mb-6">{t.product.contrast.not}</p>
                  <ul className="flex flex-col gap-4">
                    {t.product.contrast.notList.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400">
                        <iconify-icon icon="solar:close-square-linear" className="text-gray-600" width="16" />
                        <span className="text-sm font-medium line-through decoration-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/30 p-8 md:p-10 bg-white text-gray-900">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold mb-6">{t.product.contrast.is}</p>
                  <ul className="flex flex-col gap-4">
                    {t.product.contrast.isList.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <iconify-icon icon="solar:check-square-linear" className="text-gray-900" width="16" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUE */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{t.value.eyebrow}</p>
          </div>
          <div className="col-span-1 md:col-span-9">
            <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.9] text-gray-900 mb-12">
              <RevealText text={t.value.title} />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mb-12 font-medium">
              {t.value.body}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm md:text-base font-medium tracking-tight text-gray-700 pt-8 border-t border-gray-200">
              {t.value.arrow.split('→').map((part, i, arr) => (
                <React.Fragment key={i}>
                  <span className="text-gray-900">{part.trim()}</span>
                  {i < arr.length - 1 && <iconify-icon icon="solar:arrow-right-linear" className="text-gray-300" width="16" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELIEF / DON'T HAVE TO */}
      <section className="w-full bg-[#f4f4f5] border-y border-gray-200 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16">
            <div className="col-span-1 md:col-span-3">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{t.relief.eyebrow}</p>
            </div>
            <div className="col-span-1 md:col-span-9">
              <h2 className="text-5xl sm:text-6xl lg:text-[5rem] font-medium tracking-tighter leading-[0.9] text-gray-900 mb-8">
                <RevealText text={t.relief.title} />
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-medium tracking-tight max-w-2xl">
                {t.relief.lead}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 border border-gray-300">
            {t.relief.points.map((p, i) => (
              <div key={i} className="bg-[#f4f4f5] p-8 md:p-10 hover:bg-white transition-colors duration-500 group">
                <div className="text-gray-300 group-hover:text-gray-900 transition-colors mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest">0{i+1}</span>
                  <iconify-icon icon="solar:check-circle-linear" width="24" />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16">
          <div className="col-span-1 md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{t.method.eyebrow}</p>
          </div>
          <div className="col-span-1 md:col-span-9">
            <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.9] text-gray-900">
              <RevealText text={t.method.title} />
            </h2>
          </div>
        </div>

        <div className="flex flex-col">
          {t.method.steps.map((step, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-gray-200 py-10 md:py-14 group hover:bg-white transition-colors duration-500 px-4 md:px-8 -mx-4 md:mx-0">
              <div className="md:col-span-2">
                <span className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-200 group-hover:text-gray-900 transition-colors duration-700">{step.n}</span>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-base text-gray-500 leading-relaxed font-medium">{step.body}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </section>

      {/* MECHANISM IMAGERY */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-24 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="hidden md:block col-span-2 border-t border-gray-200 pt-4 relative">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{t.mechanism.eyebrow}</p>
          </div>
          <div className="col-span-1 md:col-span-10 relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-gray-200 group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/890403d8-9a92-467c-974f-3ad4b2ebfac6_3840w.webp" 
              alt="Architectural facade" 
              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-3xl mb-6">
                {t.mechanism.title}
              </h3>
              <p className="text-base md:text-lg text-white/80 max-w-2xl font-medium leading-relaxed">
                {t.mechanism.body}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mt-px">
          {t.mechanism.chain.map((c, i) => (
            <div key={i} className="bg-white p-8 md:p-10">
              <div className="flex items-center justify-between mb-6 text-gray-300">
                <span className="text-xs font-bold tracking-widest text-gray-400">0{i+1}</span>
                {i < t.mechanism.chain.length - 1 && <iconify-icon icon="solar:arrow-right-linear" width="16" className="hidden md:block" />}
              </div>
              <h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3">{c.label}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="w-full bg-gray-900 text-white relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16">
            <div className="col-span-1 md:col-span-3">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{t.outcomes.eyebrow}</p>
            </div>
            <div className="col-span-1 md:col-span-9">
              <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.9] text-white mb-8">
                <RevealText text={t.outcomes.title} />
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-tight max-w-2xl">
                {t.outcomes.lead}
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            {t.outcomes.list.map((o, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-gray-800 py-8 md:py-10 group">
                <div className="md:col-span-1 text-xs font-bold text-gray-600 tracking-widest pt-2">0{i+1}</div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:translate-x-2 transition-transform duration-500">{o.metric}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base text-gray-400 leading-relaxed font-medium">{o.body}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-800" />
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16">
          <div className="col-span-1 md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{t.cases.eyebrow}</p>
          </div>
          <div className="col-span-1 md:col-span-9">
            <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tighter leading-[0.95] text-gray-900 mb-8">
              <RevealText text={t.cases.title} />
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium max-w-2xl">{t.cases.lead}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {t.cases.items.map((c) => (
            <article key={c.id} className="border border-gray-200 bg-white p-8 md:p-10 flex flex-col gap-8 hover:shadow-2xl hover:shadow-gray-200/50 hover:border-gray-400 transition-all duration-500 relative overflow-hidden group">
              <span className="absolute -top-4 -right-2 text-7xl font-bold text-gray-50 group-hover:text-gray-100 transition-colors duration-500 pointer-events-none select-none">{c.id}</span>
              
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-3">{t.cases.labels.profile}</p>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-3">{c.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{c.profile}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 border-t border-gray-100 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-4">{t.cases.labels.before}</p>
                  <ul className="flex flex-col gap-3">
                    {c.before.map((b, i) => (
                      <li key={i} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                        <span className="text-gray-300 shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-900 font-bold mb-4">{t.cases.labels.after}</p>
                  <ul className="flex flex-col gap-3">
                    {c.after.map((a, i) => (
                      <li key={i} className="text-sm text-gray-700 leading-relaxed font-medium flex gap-2">
                        <span className="text-gray-900 shrink-0">+</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative z-10 border-t border-gray-100 pt-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-900 font-bold mb-4">{t.cases.labels.outcome}</p>
                <ul className="flex flex-col gap-2">
                  {c.outcome.map((o, i) => (
                    <li key={i} className="text-sm text-gray-900 leading-relaxed font-medium flex gap-2">
                      <iconify-icon icon="solar:arrow-right-linear" className="text-gray-400 mt-1 shrink-0" width="14" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="w-full bg-[#f4f4f5] border-y border-gray-200 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16">
            <div className="col-span-1 md:col-span-3">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{t.infrastructure.eyebrow}</p>
            </div>
            <div className="col-span-1 md:col-span-9">
              <h2 className="text-5xl sm:text-6xl lg:text-[5rem] font-medium tracking-tighter leading-[0.9] text-gray-900 mb-8">
                <RevealText text={t.infrastructure.title} />
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-3xl font-medium">
                {t.infrastructure.body}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.infrastructure.pillars.map((p, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 md:p-10">
                <div className="w-10 h-10 border border-gray-300 flex items-center justify-center mb-8">
                  <iconify-icon icon={['solar:letter-linear','solar:global-linear','solar:routing-linear'][i]} width="18" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-3">0{i+1}</p>
                <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16">
          <div className="col-span-1 md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{t.pricing.eyebrow}</p>
          </div>
          <div className="col-span-1 md:col-span-9">
            <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.9] text-gray-900 mb-8">
              <RevealText text={t.pricing.title} />
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl font-medium">
              {t.pricing.lead}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.pricing.tiers.map((tier, i) => (
            <div 
              key={i} 
              className={clsx(
                "border p-8 md:p-10 flex flex-col relative overflow-hidden transition-all duration-500 group",
                tier.highlight 
                  ? "bg-gray-900 text-white border-gray-900 lg:scale-105 lg:-my-2" 
                  : "bg-white border-gray-200 hover:border-gray-400"
              )}
            >
              {tier.highlight && (
                <span className="absolute top-6 right-6 text-[9px] uppercase tracking-[0.25em] font-bold text-gray-900 bg-white px-2 py-1">
                  Most Selected
                </span>
              )}
              
              <div className={clsx("mb-8", tier.highlight ? "text-gray-500" : "text-gray-300")}>
                <span className="text-[10px] font-bold tracking-widest">0{i+1}</span>
              </div>

              <h3 className={clsx("text-2xl md:text-3xl font-medium tracking-tight mb-2", tier.highlight ? "text-white" : "text-gray-900")}>
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={clsx("text-4xl md:text-5xl font-medium tracking-tighter", tier.highlight ? "text-white" : "text-gray-900")}>
                  {tier.price}
                </span>
                <span className={clsx("text-sm", tier.highlight ? "text-gray-400" : "text-gray-500")}>{tier.period}</span>
              </div>

              <p className={clsx("text-sm leading-relaxed mb-8 font-medium", tier.highlight ? "text-gray-300" : "text-gray-500")}>
                {tier.desc}
              </p>

              <ul className={clsx("flex flex-col gap-3 mb-10 border-t pt-6 flex-1", tier.highlight ? "border-gray-800" : "border-gray-100")}>
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" width="16" className={clsx("mt-0.5 shrink-0", tier.highlight ? "text-white" : "text-gray-400")} />
                    <span className={clsx("text-sm font-medium", tier.highlight ? "text-gray-200" : "text-gray-700")}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/engage"
                className={clsx(
                  "inline-flex items-center justify-center gap-3 px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-colors outline-none",
                  tier.highlight 
                    ? "bg-white text-gray-900 hover:bg-gray-100" 
                    : "bg-gray-900 text-white hover:bg-black"
                )}
              >
                {t.pricing.cta}
                <iconify-icon icon="solar:arrow-right-up-linear" width="14" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* QUALIFICATION */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-24 md:pb-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16">
          <div className="col-span-1 md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{t.filter.eyebrow}</p>
          </div>
          <div className="col-span-1 md:col-span-9">
            <h2 className="text-5xl sm:text-6xl lg:text-[5rem] font-medium tracking-tighter leading-[0.9] text-gray-900">
              <RevealText text={t.filter.title} />
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-900 p-8 md:p-12 bg-white">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-900 font-bold mb-8">{t.filter.forTitle}</p>
            <ul className="flex flex-col gap-5">
              {t.filter.forList.map((item, i) => (
                <li key={i} className="flex items-start gap-4 border-b border-gray-100 pb-5 last:border-b-0 last:pb-0">
                  <iconify-icon icon="solar:check-square-linear" className="text-gray-900 mt-0.5 shrink-0" width="18" />
                  <span className="text-base text-gray-900 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 p-8 md:p-12 bg-gray-50">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-8">{t.filter.notForTitle}</p>
            <ul className="flex flex-col gap-5">
              {t.filter.notForList.map((item, i) => (
                <li key={i} className="flex items-start gap-4 border-b border-gray-200 pb-5 last:border-b-0 last:pb-0">
                  <iconify-icon icon="solar:close-square-linear" className="text-gray-300 mt-0.5 shrink-0" width="18" />
                  <span className="text-base text-gray-400 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CLOSE */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-24 md:pb-32 relative z-10">
        <Link to="/engage" className="block w-full bg-gray-900 text-white p-12 md:p-24 lg:p-32 group transition-colors duration-500 hover:bg-black outline-none relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none bg-grid-static" 
            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)' }}
          />
          <div className="relative z-10 flex flex-col items-start max-w-4xl">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-8">{t.close.eyebrow}</p>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tighter leading-[0.95] text-white mb-10 group-hover:translate-x-2 transition-transform duration-500">
              {t.close.title}
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed font-medium mb-12">
              {t.close.body}
            </p>
            <div className="inline-flex items-center gap-4 text-white border-b border-white pb-2 group-hover:border-gray-400 group-hover:text-gray-400 transition-colors">
              <span className="text-sm font-semibold tracking-widest uppercase">{t.close.cta}</span>
              <iconify-icon icon="solar:arrow-right-up-linear" width="20" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-500" />
            </div>
            <p className="text-xs text-gray-500 mt-8 italic">{t.close.note}</p>
          </div>
        </Link>
      </section>

    </main>
  );
}