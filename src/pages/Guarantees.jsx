import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import CTA from '../components/CTA'

const guarantees = [
  { n: '5', unit: 'років', title: 'Гарантія на роботи', text: 'Несемо відповідальність за будівельні роботи протягом 5 років після здачі.' },
  { n: '0', unit: 'прихованих', title: 'Без доплат «по факту»', text: 'Фіксований кошторис: усі позиції узгоджені до старту робіт.' },
  { n: '7', unit: 'днів', title: 'Реакція на звернення', text: 'Гарантійні звернення обробляємо протягом тижня.' },
  { n: '100', unit: '%', title: 'Офіційний договір', text: 'Працюємо за договором з чіткими строками, бюджетом і відповідальністю.' },
]

const certs = ['ISO 9001 — менеджмент якості', 'ДБН — відповідність нормам', 'Ліцензія на будівельні роботи', 'Сертифіковані матеріали']

export default function Guarantees() {
  return (
    <PageWrap>
      <Seo title="Гарантії" description="5 років гарантії на роботи, фіксований кошторис без прихованих доплат, офіційний договір." path="/guarantees" />
      <PageHero
        kicker="Гарантії"
        title="Відповідаємо за результат"
        text="Прозорі умови, офіційний договір і гарантія, яку можна перевірити."
        image="/img/hero-house.jpg"
        crumbs={[{ label: 'Гарантії' }]}
      />

      <section className="section">
        <div className="container">
          <ul className="guarantee-grid">
            {guarantees.map((g, i) => (
              <Reveal as="li" className="guarantee" key={g.title} delay={(i % 4) * 0.07}>
                <div className="guarantee__num">{g.n}<span className="guarantee__unit">{g.unit}</span></div>
                <h3 className="guarantee__title">{g.title}</h3>
                <p className="guarantee__text">{g.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker="Документи" title="Сертифікати та ліцензії" align="center" />
          <ul className="press">
            {certs.map((c, i) => (
              <Reveal as="li" className="press__item" key={c} delay={(i % 4) * 0.06}>{c}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </PageWrap>
  )
}
