import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

const dictionaries = {
  en: {
    nav: {
      howItWorks: "How it works",
      features: "Features",
      privacy: "Privacy",
      login: "Log in",
      getForMac: "Get for macOS"
    },
    hero: {
      beta: "macOS Public Beta",
      title1: "Stop explaining context to AI.",
      title2: "Let it capture the moment.",
      subtitle: "Ask about what you see, hear, and need to understand — without manually copying text, taking screenshots, or rewinding audio.",
      download: "Download for Mac",
      demo: "View Demo",
      reqs: "Requires macOS 13.0 or later. Apple Silicon optimized."
    },
    mockup: {
      screenActive: "Screen Active",
      lastAudio: "Last 30s Audio",
      query: "What did the speaker just say about the numbers in this dashboard?",
      responsePrefix: "Based on the audio just captured, the speaker noted that the ",
      responseHighlight: "Q3 churn rate (visible in the top right chart)",
      responseSuffix: " is an anomaly due to legacy account migrations, not a trend. They mentioned ignoring the 12% spike for forecasting purposes.",
      copy: "Copy",
      retry: "Retry"
    },
    workflow: {
      title: "In the moment. Without the friction.",
      subtitle: "DARWIS operates entirely in the background until you need it. No switching apps, no copy-pasting required.",
      step1: "1. Press shortcut",
      step1Desc: "Hit ⌘ + Space (or your custom key) to invoke the overlay instantly over any app.",
      step2: "2. Ask your question",
      step2Desc: "Speak naturally. Ask what a document means, what someone just said in a meeting, or to explain a snippet of code.",
      step3: "3. Get contextual answers",
      step3Desc: "DARWIS analyzes your current screen and recent audio to provide a concise, actionable answer right where you are."
    },
    features: {
      title: "Designed for complex information flows.",
      f1Title: "See what you see",
      f1Desc: "Point it at dashboards, technical specs, codebases, or complex UI. DARWIS understands the visual context instantly, without you needing to explain the layout.",
      f2Title: "Hear what you hear",
      f2Desc: "Missed a detail in a zoom call or lecture video? Ask about what was just spoken.",
      f3Title: "Combined Intelligence",
      f3Desc: "DARWIS seamlessly links what's on your screen with the audio you just heard. Perfect for following along with tutorials or reviewing presentations where visual and spoken context matter equally.",
      f4Title: "Lightweight Overlay",
      f4Desc: "Not another window to manage. Answers appear in a minimalist, floating panel that gets out of your way as soon as you find what you need. Copy the result, or simply dismiss it."
    },
    privacy: {
      title: "Context built on explicit permission.",
      desc: "DARWIS is an interrupt tool, not a surveillance agent. It only captures context when you explicitly ask a question. Data is short-lived, and you control exactly what streams are available to the AI.",
      readMore: "Read our privacy commitment",
      sourcesTitle: "Context Sources",
      src1: "Screen Capture",
      src2: "Recent Audio",
      src2Sub: "Rolling 60s buffer",
      src3: "Clipboard Contents"
    },
    cta: {
      title: "Clarify your context instantly.",
      subtitle: "Join professionals using DARWIS to stay in the flow.",
      button: "Download DARWIS for macOS"
    },
    footer: {
      desc: "The macOS multimodal interrupt assistant.",
      twitter: "Twitter",
      changelog: "Changelog",
      privacy: "Privacy",
      terms: "Terms"
    }
  },
  ua: {
    nav: {
      howItWorks: "Як це працює",
      features: "Можливості",
      privacy: "Конфіденційність",
      login: "Увійти",
      getForMac: "Завантажити для macOS"
    },
    hero: {
      beta: "Публічна бета для macOS",
      title1: "Досить пояснювати контекст ШІ.",
      title2: "Нехай він фіксує момент.",
      subtitle: "Запитуйте про те, що бачите, чуєте та хочете зрозуміти — без ручного копіювання тексту, скріншотів чи перемотування аудіо.",
      download: "Завантажити для Mac",
      demo: "Дивитися демо",
      reqs: "Потрібна macOS 13.0 або новіша. Оптимізовано для Apple Silicon."
    },
    mockup: {
      screenActive: "Екран активний",
      lastAudio: "Останні 30с аудіо",
      query: "Що щойно сказав спікер про цифри на цьому дашборді?",
      responsePrefix: "Згідно з щойно записаним аудіо, спікер зазначив, що ",
      responseHighlight: "відтік клієнтів у 3 кварталі (на графіку праворуч зверху)",
      responseSuffix: " є аномалією через міграцію старих акаунтів, а не тенденцією. Було запропоновано ігнорувати цей стрибок у 12% для прогнозування.",
      copy: "Копіювати",
      retry: "Повторити"
    },
    workflow: {
      title: "У моменті. Без зайвих зусиль.",
      subtitle: "DARWIS працює повністю у фоновому режимі, поки не знадобиться. Не потрібно перемикати програми чи копіювати текст.",
      step1: "1. Натисніть шорткат",
      step1Desc: "Натисніть ⌘ + Пробіл (або власну комбінацію), щоб миттєво викликати оверлей поверх будь-якого вікна.",
      step2: "2. Поставте запитання",
      step2Desc: "Говоріть природно. Запитайте про зміст документа, про те, що щойно сказали на мітингу, або попросіть пояснити фрагмент коду.",
      step3: "3. Отримайте контекстні відповіді",
      step3Desc: "DARWIS аналізує ваш екран та нещодавнє аудіо, щоб надати коротку та корисну відповідь прямо там, де ви є."
    },
    features: {
      title: "Створено для складних інформаційних потоків.",
      f1Title: "Бачить те, що бачите ви",
      f1Desc: "Наводьте на дашборди, технічні специфікації, код чи складний UI. DARWIS миттєво розуміє візуальний контекст без необхідності пояснювати структуру екрана.",
      f2Title: "Чує те, що чуєте ви",
      f2Desc: "Пропустили деталь у Zoom-колі чи на відеолекції? Запитайте про те, що щойно обговорювалося.",
      f3Title: "Комбінований інтелект",
      f3Desc: "DARWIS безшовно поєднує те, що на екрані, зі звуком, який ви щойно почули. Ідеально для туторіалів або презентацій, де візуальний і голосовий контекст однаково важливі.",
      f4Title: "Легкий оверлей",
      f4Desc: "Це не ще одне вікно, яким треба керувати. Відповіді з'являються у мінімалістичній плаваючій панелі, яка зникає, щойно ви знаходите потрібне. Скопіюйте результат або просто закрийте її."
    },
    privacy: {
      title: "Контекст, побудований на чіткому дозволі.",
      desc: "DARWIS – це інструмент переривання, а не агент стеження. Він фіксує контекст лише тоді, коли ви ставите запитання. Дані швидко видаляються, і ви повністю контролюєте потоки, доступні ШІ.",
      readMore: "Прочитайте про наші зобов'язання щодо конфіденційності",
      sourcesTitle: "Джерела контексту",
      src1: "Захоплення екрана",
      src2: "Нещодавнє аудіо",
      src2Sub: "Зберігається лише останні 60с",
      src3: "Вміст буфера обміну"
    },
    cta: {
      title: "Миттєво прояснюйте свій контекст.",
      subtitle: "Приєднуйтесь до професіоналів, які використовують DARWIS, щоб залишатися в потоці.",
      button: "Завантажити DARWIS для macOS"
    },
    footer: {
      desc: "Мультимодальний асистент переривань для macOS.",
      twitter: "Twitter",
      changelog: "Оновлення",
      privacy: "Конфіденційність",
      terms: "Умови"
    }
  }
};

function Landing({ locale }) {
  const t = dictionaries[locale];
  const navigate = useNavigate();
  const [toggles, setToggles] = useState({
    screen: true,
    audio: true,
    clipboard: false
  });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const switchLanguage = (newLang) => {
    localStorage.setItem('lang', newLang);
    if (newLang === 'ua') {
      navigate('/ua');
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <div className="absolute inset-0 bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"></div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between pt-6 pb-4 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="tracking-tighter font-semibold text-lg text-neutral-900">DARWIS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200">{t.nav.howItWorks}</a>
          <a href="#features" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200">{t.nav.features}</a>
          <a href="#privacy" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200">{t.nav.privacy}</a>
        </nav>
        <div className="flex items-center">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm font-medium border-r border-neutral-200 pr-4 mr-4">
            <button 
              onClick={() => switchLanguage('en')} 
              className={`transition-colors ${locale === 'en' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600'}`}
            >
              EN
            </button>
            <span className="text-neutral-300">/</span>
            <button 
              onClick={() => switchLanguage('ua')} 
              className={`transition-colors ${locale === 'ua' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600'}`}
            >
              UA
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex items-center justify-center text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200">
              {t.nav.login}
            </button>
            <button className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-4 py-1.5 text-sm font-medium hover:bg-neutral-800 transition-colors duration-200 shadow-sm">
              {t.nav.getForMac}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm text-xs font-medium text-neutral-600 mb-8 shadow-sm">
            <iconify-icon icon="solar:apple-linear" width="14" height="14"></iconify-icon>
            <span>{t.hero.beta}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
            {t.hero.title1}<br className="hidden sm:block" /> {t.hero.title2}
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 font-normal">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors duration-200 gap-2 shadow-sm">
              <iconify-icon icon="solar:download-linear" width="18" height="18"></iconify-icon>
              {t.hero.download}
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-50 transition-colors duration-200 gap-2 shadow-sm">
              {t.hero.demo} <iconify-icon icon="solar:play-circle-linear" width="18" height="18" className="text-neutral-500"></iconify-icon>
            </button>
          </div>

          <p className="mt-4 text-xs text-neutral-400">{t.hero.reqs}</p>

          {/* Hero Product Visual Mockup */}
          <div className="mt-20 relative max-w-3xl mx-auto text-left">
            <div className="absolute -inset-1 bg-gradient-to-b from-neutral-200 to-transparent opacity-50 blur-2xl rounded-3xl"></div>
            
            <div className="relative glass rounded-2xl shadow-xl flex flex-col overflow-hidden bg-white/80">
              {/* Fake Top Bar */}
              <div className="h-10 border-b border-neutral-200 flex items-center px-4 bg-white/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                </div>
                <div className="mx-auto flex items-center gap-3 text-xs text-neutral-500 font-medium">
                  <span className="flex items-center gap-1.5"><iconify-icon icon="solar:monitor-linear"></iconify-icon> {t.mockup.screenActive}</span>
                  <span className="flex items-center gap-1.5"><iconify-icon icon="solar:record-circle-linear"></iconify-icon> {t.mockup.lastAudio}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* User Query */}
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200">
                    <iconify-icon icon="solar:user-linear" className="text-neutral-500"></iconify-icon>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-800 mt-1.5">"{t.mockup.query}"</p>
                  </div>
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center relative animate-pulse-ring">
                    <iconify-icon icon="solar:mic-linear" className="text-neutral-900" width="16"></iconify-icon>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 text-white font-medium tracking-tighter text-xs shadow-sm">
                    D
                  </div>
                  <div className="flex-1 bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {t.mockup.responsePrefix}<span className="text-neutral-900 font-medium">{t.mockup.responseHighlight}</span>{t.mockup.responseSuffix}
                    </p>
                    {/* Action bar */}
                    <div className="mt-4 flex items-center gap-3 pt-3 border-t border-neutral-100">
                      <button className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                        <iconify-icon icon="solar:copy-linear"></iconify-icon> {t.mockup.copy}
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                        <iconify-icon icon="solar:refresh-linear"></iconify-icon> {t.mockup.retry}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="how-it-works" className="py-24 relative border-t border-neutral-200 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-4">{t.workflow.title}</h2>
              <p className="text-neutral-500 text-sm md:text-base max-w-xl mx-auto">{t.workflow.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent z-0"></div>

              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-neutral-400 group-hover:shadow-md transition-all duration-300">
                  <iconify-icon icon="solar:keyboard-linear" width="28" className="text-neutral-900"></iconify-icon>
                </div>
                <h3 className="text-base font-medium text-neutral-900 mb-2">{t.workflow.step1}</h3>
                <p className="text-sm text-neutral-500 max-w-xs">{t.workflow.step1Desc}</p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-neutral-400 group-hover:shadow-md transition-all duration-300">
                  <iconify-icon icon="solar:mic-linear" width="28" className="text-neutral-900"></iconify-icon>
                </div>
                <h3 className="text-base font-medium text-neutral-900 mb-2">{t.workflow.step2}</h3>
                <p className="text-sm text-neutral-500 max-w-xs">{t.workflow.step2Desc}</p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-neutral-400 group-hover:shadow-md transition-all duration-300">
                  <iconify-icon icon="solar:lightbulb-bolt-linear" width="28" className="text-neutral-900"></iconify-icon>
                </div>
                <h3 className="text-base font-medium text-neutral-900 mb-2">{t.workflow.step3}</h3>
                <p className="text-sm text-neutral-500 max-w-xs">{t.workflow.step3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases / Bento Grid */}
        <section id="features" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-12">{t.features.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(200px,auto)]">
            
            <div className="md:col-span-4 bg-white border border-neutral-200 shadow-sm rounded-3xl p-8 flex flex-col md:flex-row gap-8 overflow-hidden relative group hover:shadow-md transition-all">
              <div className="flex-1 z-10">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mb-4 border border-neutral-200">
                  <iconify-icon icon="solar:eye-scan-linear" className="text-neutral-600" width="20"></iconify-icon>
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">{t.features.f1Title}</h3>
                <p className="text-sm text-neutral-500">{t.features.f1Desc}</p>
              </div>
              <div className="flex-1 relative flex items-center justify-center min-h-[150px]">
                <div className="w-full h-32 rounded-lg border border-neutral-200 bg-neutral-50 p-2 relative shadow-inner">
                  <div className="w-3/4 h-2 bg-neutral-200 rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-neutral-200 rounded mb-4"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-neutral-100 rounded border border-neutral-200"></div>
                    <div className="h-12 bg-neutral-100 rounded border border-neutral-200 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent via-neutral-900/10 to-transparent animate-[pulse_2s_ease-in-out_infinite] transform -translate-y-full group-hover:translate-y-full transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white border border-neutral-200 shadow-sm rounded-3xl p-8 overflow-hidden relative hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mb-4 border border-neutral-200">
                <iconify-icon icon="solar:volume-loud-linear" className="text-neutral-600" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">{t.features.f2Title}</h3>
              <p className="text-sm text-neutral-500 mb-6">{t.features.f2Desc}</p>
              <div className="flex items-end gap-1 h-12 opacity-50">
                <div className="w-full bg-neutral-300 rounded-t-sm h-[20%]"></div>
                <div className="w-full bg-neutral-300 rounded-t-sm h-[40%]"></div>
                <div className="w-full bg-neutral-300 rounded-t-sm h-[80%]"></div>
                <div className="w-full bg-neutral-400 rounded-t-sm h-[100%]"></div>
                <div className="w-full bg-neutral-400 rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-neutral-300 rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-neutral-300 rounded-t-sm h-[50%]"></div>
              </div>
            </div>

            <div className="md:col-span-3 bg-white border border-neutral-200 shadow-sm rounded-3xl p-8 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mb-4 border border-neutral-200">
                <iconify-icon icon="solar:layers-linear" className="text-neutral-600" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">{t.features.f3Title}</h3>
              <p className="text-sm text-neutral-500">{t.features.f3Desc}</p>
            </div>

            <div className="md:col-span-3 bg-white border border-neutral-200 shadow-sm rounded-3xl p-8 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mb-4 border border-neutral-200">
                <iconify-icon icon="solar:minimize-square-3-linear" className="text-neutral-600" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">{t.features.f4Title}</h3>
              <p className="text-sm text-neutral-500">{t.features.f4Desc}</p>
            </div>

          </div>
        </section>

        {/* Privacy Section */}
        <section id="privacy" className="py-24 border-t border-neutral-200 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 mb-6 shadow-sm">
                <iconify-icon icon="solar:shield-check-linear" width="24" className="text-neutral-900"></iconify-icon>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-4">{t.privacy.title}</h2>
              <p className="text-sm text-neutral-500 mb-6">{t.privacy.desc}</p>
              <a href="#" className="text-sm text-neutral-900 font-medium hover:underline inline-flex items-center gap-1">
                {t.privacy.readMore} <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>

            <div className="flex-1 w-full bg-neutral-50/50 border border-neutral-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">{t.privacy.sourcesTitle}</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:monitor-linear" className="text-neutral-500"></iconify-icon>
                    <span className="text-sm text-neutral-800">{t.privacy.src1}</span>
                  </div>
                  <div 
                    onClick={() => handleToggle('screen')}
                    className={`w-9 h-5 rounded-full relative cursor-pointer flex items-center p-0.5 transition-colors duration-200 ${toggles.screen ? 'bg-neutral-900' : 'bg-neutral-300'}`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${toggles.screen ? 'translate-x-4' : 'translate-x-0'}`}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:record-circle-linear" className="text-neutral-500"></iconify-icon>
                    <div className="flex flex-col text-left">
                      <span className="text-sm text-neutral-800">{t.privacy.src2}</span>
                      <span className="text-xs text-neutral-500">{t.privacy.src2Sub}</span>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleToggle('audio')}
                    className={`w-9 h-5 rounded-full relative cursor-pointer flex items-center p-0.5 transition-colors duration-200 ${toggles.audio ? 'bg-neutral-900' : 'bg-neutral-300'}`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${toggles.audio ? 'translate-x-4' : 'translate-x-0'}`}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:clipboard-text-linear" className="text-neutral-500"></iconify-icon>
                    <span className="text-sm text-neutral-800">{t.privacy.src3}</span>
                  </div>
                  <div 
                    onClick={() => handleToggle('clipboard')}
                    className={`w-9 h-5 rounded-full relative cursor-pointer flex items-center p-0.5 transition-colors duration-200 ${toggles.clipboard ? 'bg-neutral-900' : 'bg-neutral-300'}`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${toggles.clipboard ? 'translate-x-4' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">{t.cta.title}</h2>
          <p className="text-base text-neutral-500 mb-10">{t.cta.subtitle}</p>
          <button className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-8 py-4 text-sm font-medium hover:bg-neutral-800 transition-colors duration-200 gap-2 shadow-sm">
            {t.cta.button}
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 mt-auto bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="tracking-tighter font-semibold text-lg text-neutral-900">DARWIS</span>
            <p className="text-xs text-neutral-500">{t.footer.desc}</p>
          </div>
          
          <div className="flex gap-8 text-sm text-neutral-500">
            <a href="#" className="hover:text-neutral-900 transition-colors">{t.footer.twitter}</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">{t.footer.changelog}</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function LanguageRouter() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'ua') {
      navigate('/ua', { replace: true });
      return;
    } else if (savedLang === 'en') {
      return;
    }
    
    // Auto detect language if not explicitly set
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().startsWith('uk') || browserLang.toLowerCase().startsWith('ru')) {
      navigate('/ua', { replace: true });
    }
  }, [navigate]);

  return <Landing locale="en" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LanguageRouter />} />
      <Route path="/ua" element={<Landing locale="ua" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}