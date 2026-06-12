import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import Stats from '../components/Stats'
import Clients from '../components/Clients'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { asset } from '../lib/asset'
import useLocale from '../hooks/useLocale'

const values = [
  { title: { uk: 'Прозорість', en: 'Transparency' }, text: { uk: 'Бюджет фіксуємо в договорі, щотижня шлемо звіт із фото. Ніяких «дорахуємо потім».', en: 'We fix the budget in the contract and send a weekly report with photos. No “we’ll add it later”.' } },
  { title: { uk: 'Якість', en: 'Quality' }, text: { uk: 'Перевіряємо не лише те, що видно. Прихована інженерія й вузли — теж під контролем.', en: 'We check more than what’s visible. Hidden engineering and joints are controlled too.' } },
  { title: { uk: 'Строки', en: 'Timelines' }, text: { uk: 'Графік складаємо чесний, а не «щоб підписали». І тримаємось його.', en: 'We make an honest schedule, not one “just to get a signature”. And we keep to it.' } },
  { title: { uk: 'Відповідальність', en: 'Ownership' }, text: { uk: 'За весь обʼєкт відповідаємо ми. Не доведеться зʼясовувати, хто винен серед пʼяти бригад.', en: 'We’re responsible for the whole site. No figuring out who’s to blame among five crews.' } },
]

const process = [
  { step: '01', title: { uk: 'Знайомство', en: 'Getting to know you' }, text: { uk: 'Зустрічаємось, дивимось ділянку чи квартиру, розбираємось, чого ви хочете.', en: 'We meet, look at the site or flat, and work out what you actually want.' } },
  { step: '02', title: { uk: 'Проєкт і кошторис', en: 'Design & estimate' }, text: { uk: 'Готуємо документацію й рахуємо вартість, яку потім не «перерахуємо по ходу».', en: 'We prepare the documentation and a cost we won’t “recalculate as we go”.' } },
  { step: '03', title: { uk: 'Будівництво', en: 'Construction' }, text: { uk: 'Будуємо поетапно, з технаглядом і звітами, щоб ви були в курсі.', en: 'We build stage by stage, with supervision and reports, so you stay in the loop.' } },
  { step: '04', title: { uk: 'Здача під ключ', en: 'Turnkey handover' }, text: { uk: 'Передаємо обʼєкт з документами й лишаємось на звʼязку по гарантії.', en: 'We hand over the site with documents and stay in touch for the warranty.' } },
]

const timeline = [
  { y: '2012', t: { uk: 'Заснування', en: 'Founded' }, d: { uk: 'Kasper починає з ремонтів квартир у Києві.', en: 'Kasper starts out doing apartment renovations in Kyiv.' } },
  { y: '2015', t: { uk: 'Перші обʼєкти під ключ', en: 'First turnkey projects' }, d: { uk: 'Переходимо до повного циклу будівництва.', en: 'We move to full-cycle construction.' } },
  { y: '2018', t: { uk: 'Власне виробництво', en: 'Own workshop' }, d: { uk: 'Запускаємо цех корпусних і мʼяких меблів.', en: 'We open a workshop for cabinetry and upholstery.' } },
  { y: '2021', t: { uk: 'Комерційні простори', en: 'Commercial spaces' }, d: { uk: 'Офіси, готелі та шоуруми у портфоліо.', en: 'Offices, hotels and showrooms join the portfolio.' } },
  { y: '2024', t: { uk: '700+ проєктів', en: '700+ projects' }, d: { uk: 'Працюємо в Україні та Європі, команда 64 людини.', en: 'Working across Ukraine and Europe, a team of 64.' } },
]

export default function About() {
  const { loc } = useLocale()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Про нас', en: 'About' })} description={loc({ uk: '13 років досвіду, 700+ завершених обʼєктів. Інженери, архітектори та будівельники Kasper.', en: '13 years of experience, 700+ completed projects. The engineers, architects and builders of Kasper.' })} path="/about" />
      <PageHero
        kicker={loc({ uk: 'Про студію', en: 'About the studio' })}
        title={loc({ uk: '13 років, 700+ обʼєктів і жодного «ми за це не відповідаємо»', en: '13 years, 700+ projects and no “that’s not our problem”' })}
        text={loc({ uk: 'Команда інженерів, архітекторів і будівельників, яка доводить обʼєкт від першого ескізу до ключів.', en: 'A team of engineers, architects and builders who take a project from the first sketch to the keys.' })}
        image="/img/hero-wide.jpg"
        crumbs={[{ label: loc({ uk: 'Про нас', en: 'About' }) }]}
      />

      {/* Intro split */}
      <section className="section">
        <div className="container about-intro" ref={ref}>
          <div className="about-intro__media">
            <motion.img className="about-intro__img" style={{ y }} src={asset('/img/int-1.jpg')} alt={loc({ uk: 'Інтерʼєр проєкту Kasper', en: 'Kasper project interior' })} loading="lazy" />
          </div>
          <div className="about-intro__content">
            <SectionHead kicker={loc({ uk: 'Хто ми', en: 'Who we are' })} title={loc({ uk: 'Проєктувальники й будівельники під одним дахом', en: 'Designers and builders under one roof' })} />
            <Reveal as="p" className="about-intro__text" delay={0.1}>
              {loc({ uk: 'Почали у 2012-му з ремонтів квартир. Швидко набридло, що проєктувальники кивають на будівельників, а ті — на постачальників, тож зібрали всіх під один дах. Так клієнту лишається один контакт, а нам — нікого звинувачувати, крім себе.', en: 'We started in 2012 with apartment renovations. We quickly got tired of designers blaming builders and builders blaming suppliers, so we put everyone under one roof. That leaves the client with one contact — and us with no one to blame but ourselves.' })}
            </Reveal>
            <Reveal as="p" className="about-intro__text" delay={0.15}>
              {loc({ uk: 'Зараз будуємо приватні будинки й комерцію в Україні та за кордоном. Меблі робимо на власному виробництві, а на обʼєкт регулярно виїжджає той, хто його проєктував, — щоб на папері й у реальності було те саме.', en: 'Today we build private houses and commercial spaces in Ukraine and abroad. We make furniture in our own workshop, and whoever designed the project visits the site regularly — so paper and reality match.' })}
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Цінності', en: 'Values' })} title={loc({ uk: 'Принципи, на яких будуємо', en: 'What we build on' })} align="center" />
          <ul className="values-grid">
            {values.map((v, i) => (
              <Reveal as="li" className="value-card" key={v.title.uk} delay={(i % 4) * 0.07}>
                <span className="value-card__mark" aria-hidden="true">✦</span>
                <h3 className="value-card__title">{loc(v.title)}</h3>
                <p className="value-card__text">{loc(v.text)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Процес', en: 'Process' })} title={loc({ uk: 'Як ми працюємо', en: 'How we work' })} />
          <ol className="process">
            {process.map((p, i) => (
              <Reveal as="li" className="process__item" key={p.step} delay={(i % 4) * 0.06}>
                <span className="process__step">{p.step}</span>
                <h3 className="process__title">{loc(p.title)}</h3>
                <p className="process__text">{loc(p.text)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Історія', en: 'History' })} title={loc({ uk: 'Шлях студії', en: 'The studio’s path' })} />
          <ol className="timeline">
            {timeline.map((m, i) => (
              <Reveal as="li" className="timeline__item" key={m.y} delay={(i % 5) * 0.05}>
                <span className="timeline__year">{m.y}</span>
                <div className="timeline__body">
                  <h3 className="timeline__title">{loc(m.t)}</h3>
                  <p className="timeline__text">{loc(m.d)}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Press */}
      <section className="section">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Преса', en: 'Press' })} title={loc({ uk: 'Про нас пишуть', en: 'As featured in' })} align="center" />
          <ul className="press">
            {['DOM.RIA', 'Domus', 'AD Magazine', 'Building UA', 'Forbes'].map((p, i) => (
              <Reveal as="li" className="press__item" key={p} delay={(i % 5) * 0.05}>{p}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Clients />
      <CTA />
    </PageWrap>
  )
}
