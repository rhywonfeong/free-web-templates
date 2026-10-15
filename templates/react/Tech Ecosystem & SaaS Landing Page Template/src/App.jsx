import React, { useState } from "react";
import "iconify-icon";

const Ic = ({ n, s = 20, c = "" }) => <iconify-icon icon={n} width={s} height={s} className={c}></iconify-icon>;

const NAV = [
  { i: "solar:home-2-linear", t: "Главная", active: true },
  { i: "solar:users-group-rounded-linear", t: "Комьюнити" },
  { i: "solar:ticket-sale-linear", t: "Налоговые льготы" },
  { i: "solar:star-linear", t: "Программы" },
  { i: "solar:shop-linear", t: "Hub Market", sub: ["Вакансии", "Технологические задачи", "Услуги и товары"] },
  { i: "solar:calendar-linear", t: "Мероприятия" },
  { i: "solar:play-circle-linear", t: "Онлайн курсы" },
  { i: "solar:code-square-linear", t: "Tech Orda" },
  { i: "solar:headphones-round-linear", t: "Customer Support" },
  { i: "solar:question-circle-linear", t: "FAQ" },
];

const ROLES = [
  { img: "startup-icon.png", t: "Стартап", d: "Вы основатель стартапа" },
  { img: "developed-icon.png", t: "Корпорация", d: "Вы топ-менеджер корпорации" },
  { img: "innovator-icon.png", t: "Инноватор", d: "Вы ученый, профессор или недропользователь" },
  { img: "tech-icon.png", t: "Tech Community", d: "Вы IT-специалист или энтузиаст" },
];

const STATS = [
  { v: "+1800 компаний", c: "резидентов Astana Hub" },
  { v: "₸864 млрд.", c: "совокупный доход участников" },
  { v: "$630 млн.", c: "привлеченных инвестиций" },
  { v: "$612 млн.", c: "объем экспорта IT-услуг" },
];

const PROGRAMS = [
  { g: "linear-gradient(135deg,#101736,#2b3a8f)", logo: "TECH ORDA", t: "Tech Orda 2026", d: "Государственная программа обучения IT-профессиям с грантовым покрытием стоимости обучения в частных IT-школах Казахстана." },
  { g: "linear-gradient(135deg,#0c2e1c,#1aa958)", logo: "AI'PRENEURS", t: "AI'preneurs Bootcamp", d: "Интенсивная программа для предпринимателей, внедряющих искусственный интеллект в продукты и бизнес-процессы." },
  { g: "linear-gradient(135deg,#231036,#7b3fe4)", logo: "SILKWAY", t: "Silkway Accelerator", d: "Акселерационная программа для стартапов Центральной Азии с менторами из Кремниевой долины и инвестициями." },
];

const NEWS_SMALL = [
  { g: "linear-gradient(135deg,#0f3d23,#1aa958)", t: "Astana Innovations Accelerator: открыт набор стартапов", m: "10 Июн, 12:30 · Новости" },
  { g: "linear-gradient(135deg,#5a2d0c,#e0883a)", t: "AI'preneurs: как прошёл демо-день третьего потока", m: "09 Июн, 18:00 · Новости" },
];

const EVENTS = [
  { d: "11 Июн, 17:00", p: "Онлайн", g: "linear-gradient(135deg,#102a43,#2f6fb3)", t: "Вебинар: налоговые льготы для участников Astana Hub", desc: "Разбираем условия получения статуса участника и пакет налоговых преференций для IT-компаний." },
  { d: "14 Июн, 10:00", p: "Astana Hub", g: "linear-gradient(135deg,#231036,#9555e1)", t: "IT Quest: финал городского технологического квеста", desc: "Финальные испытания, призы от партнеров и нетворкинг для молодых разработчиков." },
  { d: "18 Июн, 19:00", p: "Онлайн", g: "linear-gradient(135deg,#0c2e1c,#16af38)", t: "Startup Grind: вечер питчей резидентов", desc: "Открытые питчи стартапов перед инвесторами и экспертами экосистемы Astana Hub." },
];

const CHIPS = [
  ["Управление продуктом", "12,4 тыс."],
  ["Управление проектами", "9,8 тыс."],
  ["Подкаст", "7,1 тыс."],
  ["Startup", "15,2 тыс."],
  ["GameDev", "5,6 тыс."],
];

const POSTS = [
  { g: "linear-gradient(135deg,#0f3d23,#1aa958)", tag: "Маркетинг", t: "Как стартапу выстроить контент-маркетинг без бюджета", a: "Айгерим Сапарова", time: "22 часа назад", l: 124, c: 18, v: "2,3 тыс." },
  { g: "linear-gradient(135deg,#102a43,#2f6fb3)", tag: "Инвестиции", t: "Венчурные сделки Казахстана: итоги первого полугодия", a: "Данияр Ахметов", time: "23 часа назад", l: 98, c: 12, v: "1,8 тыс." },
  { g: "linear-gradient(135deg,#231036,#7b3fe4)", tag: "Участники Astana Hub", t: "Резидент Astana Hub вышел на рынок Юго-Восточной Азии", a: "Astana Hub", time: "23 часа назад", l: 211, c: 34, v: "4,1 тыс." },
];

const FOOTER_COLS = [
  ["Направления", ["Стартапы", "Корпорации", "Инвесторам", "Инноваторам"]],
  ["Модули", ["Комьюнити", "Программы", "Мероприятия", "Hub Market"]],
  ["Технопарк", ["О нас", "Новости", "Резиденты", "Контакты"]],
  ["Компания", ["Стать участником", "Вакансии", "F.A.Q.", "Документы"]],
];

const PillBtn = ({ children }) => (
  <button className="mx-auto block rounded-full border border-[#e5e7eb] bg-white px-6 py-2.5 text-sm font-medium text-[#252525] shadow-sm transition hover:bg-[#f5f5f5]">{children}</button>
);

const CardIcons = () => (
  <div className="flex items-center gap-2 text-[#9b9b9b]">
    <button className="hover:text-[#16AF38]" aria-label="В избранное"><Ic n="solar:heart-linear" s={18} /></button>
    <button className="hover:text-[#16AF38]" aria-label="Поделиться"><Ic n="solar:share-linear" s={18} /></button>
  </div>
);

const H2 = ({ t, s }) => (
  <div className="mb-6">
    <h2 className="text-[26px] font-bold text-[#252525]">{t}</h2>
    {s && <p className="mt-1 text-sm text-[#777]">{s}</p>}
  </div>
);

export default function App() {
  const [cookies, setCookies] = useState(true);
  const [hub, setHub] = useState(true);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#252525]">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-[#ececec] bg-white">
        <div className="mx-auto flex max-w-[1392px] items-center justify-between gap-4 px-4 py-3">
          <div className="flex flex-1 items-center gap-10">
            <a href="#" className="flex w-[240px] items-center gap-2">
              <img src="https://cdn.astanahub.com/static/img_v2/logo-mobile.svg" alt="Astanahub Logo" className="h-9 w-9" />
              <span className="text-lg font-bold tracking-tight">astana hub</span>
            </a>
            <form className="flex w-full max-w-[420px] items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-3 py-2">
              <img src="https://cdn.astanahub.com/static/img_v2/search-normal.svg" alt="" className="h-5 w-5" />
              <input type="search" placeholder="Поиск по порталу" className="w-full bg-transparent text-sm outline-none placeholder:text-[#9b9b9b]" />
            </form>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="btn-green">Присоединиться</a>
            <a href="#" className="rounded-lg border border-[#e5e7eb] px-4 py-2 text-sm font-medium text-[#252525] hover:bg-[#f5f5f5]">Войти</a>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1392px] gap-6 px-4 py-6">
        {/* Sidebar */}
        <nav className="hidden w-[240px] shrink-0 xl:block">
          <div className="sticky top-[84px] space-y-1">
            {NAV.map((n) => (
              <div key={n.t}>
                <a href="#" onClick={n.sub ? (e) => { e.preventDefault(); setHub(!hub); } : undefined}
                  className={`flex items-center gap-2 rounded-lg border p-2 text-sm font-medium transition ${n.active ? "border-[#cdeed6] bg-[rgba(29,126,78,0.05)] text-[#1D7E4E]" : "border-transparent text-[#252525] hover:bg-[#f3f3f3]"}`}>
                  <span className={n.active ? "text-[#1D7E4E]" : "text-[#777]"}><Ic n={n.i} /></span>
                  <span className="px-1">{n.t}</span>
                  {n.sub && <span className="ml-auto text-[#777]"><Ic n={hub ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"} s={14} /></span>}
                </a>
                {n.sub && hub && (
                  <div className="ml-5 flex flex-col gap-1 border-l border-[#ececec] pl-2 pt-1">
                    {n.sub.map((s) => (
                      <a key={s} href="#" className="rounded-lg p-2 text-sm text-[#252525] hover:bg-[#f3f3f3]">{s}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 pt-4">
              <button className="flex items-center gap-1 rounded-full border border-[#e5e7eb] bg-white px-3 py-1.5 text-sm font-medium">Русский <Ic n="solar:alt-arrow-down-linear" s={12} c="text-[#777]" /></button>
              <button className="flex items-center gap-1 rounded-full border border-[#e5e7eb] bg-white px-3 py-1.5 text-[#777]"><Ic n="solar:sun-linear" s={16} /><Ic n="solar:alt-arrow-down-linear" s={12} /></button>
            </div>
            <div className="flex flex-col gap-1 pt-2 text-xs text-[#777]">
              <a href="#" className="hover:text-[#252525]">Связаться с нами</a>
              <a href="#" className="hover:text-[#252525]">Дополнительно</a>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main className="flex w-full flex-1 flex-col gap-14">
          {/* Hero */}
          <section className="overflow-hidden rounded-2xl p-10 mob:p-6" style={{ backgroundImage: "url('https://cdn.astanahub.com/static/img_v2/home-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="flex flex-col gap-10">
              <div className="mx-auto flex flex-col items-center gap-5 text-center">
                <h1 className="text-5xl font-bold tracking-[-1.9px] text-white md:text-6xl">Join the Unicorn Game</h1>
                <p className="max-w-[560px] text-sm leading-[22px] text-white/80">Astana Hub — место, где встречаются идеи, технологии и люди.<br />Выберите свою роль и откройте новые возможности</p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {ROLES.map((r) => (
                  <a key={r.t} href="#" className="glass flex flex-col items-center gap-4 rounded-xl p-4 text-center">
                    <img loading="lazy" src={`https://cdn.astanahub.com/static/img_v2/${r.img}`} alt="icon" className="h-[72px] w-[72px]" />
                    <div className="flex flex-1 flex-col gap-1">
                      <h2 className="text-base font-semibold text-white">{r.t}</h2>
                      <p className="text-sm leading-[22px] text-white/75">{r.d}</p>
                    </div>
                    <span className="w-full rounded-lg bg-white/10 p-2 text-center text-sm font-medium text-white transition hover:bg-white/20">Выбрать</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.v}>
                <div className="text-xl font-bold text-[#252525]">{s.v}</div>
                <div className="mt-1 text-sm text-[#777]">{s.c}</div>
              </div>
            ))}
          </section>

          {/* E-lab banner + cookies */}
          <section className="relative">
            <div className="flex items-center justify-between overflow-hidden rounded-2xl px-8 py-7" style={{ background: "linear-gradient(100deg,#0b3550,#1273a8 55%,#23a7c9)" }}>
              <div className="text-lg font-semibold text-white">E-lab — инфраструктура для тестирования и разработки ваших продуктов</div>
              <span className="hidden text-white/70 md:block"><Ic n="solar:test-tube-linear" s={44} /></span>
            </div>
            {cookies && (
              <div className="relative z-10 -mt-6 ml-auto mr-6 flex max-w-[720px] flex-wrap items-center gap-4 rounded-xl border border-[#ececec] bg-white p-4 shadow-lg">
                <p className="flex-1 text-sm text-[#252525] min-w-[220px]">Мы используем файлы cookie, чтобы улучшить работу портала. Продолжая использовать сайт, вы соглашаетесь с нашей политикой. <a href="#" className="font-medium text-[#16AF38]">Подробнее</a></p>
                <button onClick={() => setCookies(false)} className="btn-green">Принять все</button>
              </div>
            )}
          </section>

          {/* Programs */}
          <section>
            <H2 t="Популярные программы" s="Акселерация, инкубация и обучение для каждого этапа вашего роста" />
            <div className="grid gap-6 md:grid-cols-3">
              {PROGRAMS.map((p) => (
                <article key={p.t} className="card flex flex-col gap-3 p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[rgba(22,175,56,0.08)] px-2.5 py-1 text-xs font-medium text-[#16AF38]">Идёт прием заявок</span>
                    <CardIcons />
                  </div>
                  <div className="flex h-[150px] items-center justify-center rounded-lg text-lg font-bold tracking-widest text-white/90" style={{ background: p.g }}>{p.logo}</div>
                  <h3 className="text-base font-semibold">{p.t}</h3>
                  <p className="line-clamp-3 text-sm text-[#777]">{p.d}</p>
                </article>
              ))}
            </div>
            <div className="mt-6"><PillBtn>Все программы</PillBtn></div>
          </section>

          {/* News */}
          <section>
            <H2 t="Последние новости" />
            <article className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl p-8" style={{ background: "linear-gradient(120deg,#1c1033,#3a1a6e 60%,#9555e1)" }}>
              <span className="absolute right-8 top-8 text-white/30"><Ic n="solar:smartphone-linear" s={120} /></span>
              <div className="text-sm text-white/70">11 Июн, 09:00 · Новости</div>
              <h3 className="mt-2 max-w-[640px] text-3xl font-bold text-white">IT Quest: стартовал городской технологический квест для школьников и студентов</h3>
            </article>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {NEWS_SMALL.map((n) => (
                <article key={n.t} className="relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-2xl p-6" style={{ background: n.g }}>
                  <div className="text-xs text-white/70">{n.m}</div>
                  <h3 className="mt-2 text-lg font-bold text-white">{n.t}</h3>
                </article>
              ))}
            </div>
            <div className="mt-6"><PillBtn>Все новости</PillBtn></div>
          </section>

          {/* Events */}
          <section>
            <H2 t="Предстоящие мероприятия" />
            <div className="grid gap-6 md:grid-cols-3">
              {EVENTS.map((e) => (
                <article key={e.t} className="card flex flex-col gap-3 p-4">
                  <div className="flex items-center justify-between text-xs text-[#777]">
                    <span className="flex items-center gap-1.5"><Ic n="solar:calendar-linear" s={14} /> {e.d} <span className="rounded-full bg-[#f3f3f3] px-2 py-0.5">{e.p}</span></span>
                    <CardIcons />
                  </div>
                  <div className="h-[140px] rounded-lg" style={{ background: e.g }} />
                  <h3 className="text-base font-semibold">{e.t}</h3>
                  <p className="line-clamp-2 text-sm text-[#777]">{e.desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-6"><PillBtn>Все мероприятия</PillBtn></div>
          </section>

          {/* Community */}
          <section>
            <H2 t="Комьюнити и знания Astana Hub" s="Подписывайтесь на сообщества и читайте материалы участников" />
            <div className="flex flex-wrap gap-3">
              {CHIPS.map(([t, f]) => (
                <button key={t} className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-2 text-sm font-medium hover:bg-[#f5f5f5]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(22,175,56,0.1)] text-[#16AF38]"><Ic n="solar:users-group-rounded-linear" s={15} /></span>
                  {t} <span className="text-xs font-normal text-[#777]">{f}</span>
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-5">
              {POSTS.map((p) => (
                <article key={p.t} className="card flex flex-col gap-4 p-4 md:flex-row">
                  <div className="h-[160px] w-full shrink-0 rounded-lg md:w-[340px]" style={{ background: p.g }} />
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between">
                      <span className="rounded-full bg-[rgba(22,175,56,0.08)] px-2.5 py-1 text-xs font-medium text-[#16AF38]">{p.tag}</span>
                      <button className="text-[#9b9b9b] hover:text-[#252525]" aria-label="Меню"><Ic n="solar:menu-dots-linear" s={18} /></button>
                    </div>
                    <h3 className="text-lg font-semibold">{p.t}</h3>
                    <div className="flex items-center gap-4 text-sm text-[#777]">
                      <span className="flex items-center gap-1"><Ic n="solar:heart-linear" s={15} />{p.l}</span>
                      <span className="flex items-center gap-1"><Ic n="solar:chat-round-linear" s={15} />{p.c}</span>
                      <span className="flex items-center gap-1"><Ic n="solar:eye-linear" s={15} />{p.v}</span>
                    </div>
                    <div className="mt-auto flex items-center gap-2 text-sm">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f0f0] text-[#777]"><Ic n="solar:user-circle-linear" s={18} /></span>
                      <span className="font-medium">{p.a}</span>
                      <span className="text-[#9b9b9b]">· {p.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6"><PillBtn>Смотреть все</PillBtn></div>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden rounded-2xl p-10" style={{ background: "linear-gradient(110deg,#04130a,#0c3a1f 55%,#13522c)" }}>
            <div className="relative z-10 max-w-[520px]">
              <h2 className="text-3xl font-bold text-white md:text-4xl">Развивайте нетворкинг вместе с Astana Hub</h2>
              <a href="#" className="btn-green mt-6 inline-block">Присоединиться</a>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-8 hidden flex-col justify-center gap-4 text-right text-xl font-bold tracking-wide text-white/15 md:flex">
              <span>playrix</span><span>MYTONA</span><span>arbuzz</span><span>inDrive</span>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] text-white">
        <div className="mx-auto max-w-[1392px] px-4 py-12">
          <div className="flex flex-wrap items-start justify-between gap-8 border-b border-white/10 pb-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src="https://cdn.astanahub.com/static/img_v2/logo-mobile.svg" alt="Astanahub Logo" className="h-9 w-9 rounded-full bg-white p-0.5" />
                <span className="text-lg font-bold">astana hub</span>
                <span className="border-l border-white/20 pl-3 text-[10px] font-semibold uppercase tracking-wider text-white/60">AI &amp; Digital<br />Ministry</span>
              </div>
              <div className="text-sm text-white/70">Телефон: <span className="font-semibold text-white">1818</span></div>
              <div className="text-sm text-white/70">info@astanahub.com</div>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4 lg:max-w-[640px]">
              {FOOTER_COLS.map(([h, links]) => (
                <div key={h}>
                  <div className="mb-3 text-sm font-semibold">{h}</div>
                  <ul className="space-y-2 text-sm text-white/60">
                    {links.map((l) => (
                      <li key={l}><a href="#" className={l === "Стать участником" ? "text-[#E0AA28] hover:underline" : "hover:text-white"}>{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-[#16AF38] p-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white text-[#1C1C1C]"><Ic n="solar:qr-code-linear" s={56} /></div>
              <div className="text-sm font-semibold leading-5">Мобильное<br />приложение<br /><span className="font-normal text-white/85">Join the Unicorn Game</span></div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-xs text-white/50">
            <div>© 2026, Автономный кластерный фонд «Астана Хаб»</div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Пользовательское соглашение</a>
              <a href="#" className="hover:text-white">F.A.Q.</a>
              <a href="#" className="hover:text-white">Политика Cookie</a>
              <button className="flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white">Русский <Ic n="solar:alt-arrow-down-linear" s={12} /></button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}