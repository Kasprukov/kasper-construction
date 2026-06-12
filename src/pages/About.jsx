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

const values = [
  { title: 'Прозорість', text: 'Бюджет фіксуємо в договорі, щотижня шлемо звіт із фото. Ніяких «дорахуємо потім».' },
  { title: 'Якість', text: 'Перевіряємо не лише те, що видно. Прихована інженерія й вузли — теж під контролем.' },
  { title: 'Строки', text: 'Графік складаємо чесний, а не «щоб підписали». І тримаємось його.' },
  { title: 'Відповідальність', text: 'За весь обʼєкт відповідаємо ми. Не доведеться зʼясовувати, хто винен серед пʼяти бригад.' },
]

const process = [
  { step: '01', title: 'Знайомство', text: 'Зустрічаємось, дивимось ділянку чи квартиру, розбираємось, чого ви хочете.' },
  { step: '02', title: 'Проєкт і кошторис', text: 'Готуємо документацію й рахуємо вартість, яку потім не «перерахуємо по ходу».' },
  { step: '03', title: 'Будівництво', text: 'Будуємо поетапно, з технаглядом і звітами, щоб ви були в курсі.' },
  { step: '04', title: 'Здача під ключ', text: 'Передаємо обʼєкт з документами й лишаємось на звʼязку по гарантії.' },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <PageWrap>
      <Seo title="Про нас" description="13 років досвіду, 700+ завершених обʼєктів. Інженери, архітектори та будівельники Kasper." path="/about" />
      <PageHero
        kicker="Про студію"
        title="13 років, 700+ обʼєктів і жодного «ми за це не відповідаємо»"
        text="Команда інженерів, архітекторів і будівельників, яка доводить обʼєкт від першого ескізу до ключів."
        image="/img/hero-wide.jpg"
        crumbs={[{ label: 'Про нас' }]}
      />

      {/* Intro split */}
      <section className="section">
        <div className="container about-intro" ref={ref}>
          <div className="about-intro__media">
            <motion.img
              className="about-intro__img"
              style={{ y }}
              src={asset('/img/int-1.jpg')}
              alt="Інтерʼєр проєкту Kasper"
              loading="lazy"
            />
          </div>
          <div className="about-intro__content">
            <SectionHead kicker="Хто ми" title="Проєктувальники й будівельники під одним дахом" />
            <Reveal as="p" className="about-intro__text" delay={0.1}>
              Почали у 2012-му з ремонтів квартир. Швидко набридло, що проєктувальники кивають
              на будівельників, а ті — на постачальників, тож зібрали всіх під один дах. Так клієнту
              лишається один контакт, а нам — нікого звинувачувати, крім себе.
            </Reveal>
            <Reveal as="p" className="about-intro__text" delay={0.15}>
              Зараз будуємо приватні будинки й комерцію в Україні та за кордоном. Меблі робимо на
              власному виробництві, а на обʼєкт регулярно виїжджає той, хто його проєктував, —
              щоб на папері й у реальності було те саме.
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker="Цінності" title="Принципи, на яких будуємо" align="center" />
          <ul className="values-grid">
            {values.map((v, i) => (
              <Reveal as="li" className="value-card" key={v.title} delay={(i % 4) * 0.07}>
                <span className="value-card__mark" aria-hidden="true">✦</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__text">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHead kicker="Процес" title="Як ми працюємо" />
          <ol className="process">
            {process.map((p, i) => (
              <Reveal as="li" className="process__item" key={p.step} delay={(i % 4) * 0.06}>
                <span className="process__step">{p.step}</span>
                <h3 className="process__title">{p.title}</h3>
                <p className="process__text">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker="Історія" title="Шлях студії" />
          <ol className="timeline">
            {[
              { y: '2012', t: 'Заснування', d: 'Kasper починає з ремонтів квартир у Києві.' },
              { y: '2015', t: 'Перші обʼєкти під ключ', d: 'Переходимо до повного циклу будівництва.' },
              { y: '2018', t: 'Власне виробництво', d: 'Запускаємо цех корпусних і мʼяких меблів.' },
              { y: '2021', t: 'Комерційні простори', d: 'Офіси, готелі та шоуруми у портфоліо.' },
              { y: '2024', t: '700+ проєктів', d: 'Працюємо в Україні та Європі, команда 64 людини.' },
            ].map((m, i) => (
              <Reveal as="li" className="timeline__item" key={m.y} delay={(i % 5) * 0.05}>
                <span className="timeline__year">{m.y}</span>
                <div className="timeline__body">
                  <h3 className="timeline__title">{m.t}</h3>
                  <p className="timeline__text">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Press */}
      <section className="section">
        <div className="container">
          <SectionHead kicker="Преса" title="Про нас пишуть" align="center" />
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
