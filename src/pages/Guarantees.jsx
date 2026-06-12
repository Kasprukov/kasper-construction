import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import CTA from '../components/CTA'
import useLocale from '../hooks/useLocale'

const guarantees = [
  { n: '5', unit: { uk: 'років', en: 'years' }, title: { uk: 'Гарантія на роботи', en: 'Warranty on works' }, text: { uk: 'Несемо відповідальність за будівельні роботи протягом 5 років після здачі.', en: 'We stand behind our construction work for 5 years after handover.' } },
  { n: '0', unit: { uk: 'прихованих', en: 'hidden' }, title: { uk: 'Без доплат «по факту»', en: 'No surprise charges' }, text: { uk: 'Фіксований кошторис: усі позиції узгоджені до старту робіт.', en: 'A fixed estimate: every line agreed before work begins.' } },
  { n: '7', unit: { uk: 'днів', en: 'days' }, title: { uk: 'Реакція на звернення', en: 'Response time' }, text: { uk: 'Гарантійні звернення обробляємо протягом тижня.', en: 'We handle warranty requests within a week.' } },
  { n: '100', unit: '%', title: { uk: 'Офіційний договір', en: 'Formal contract' }, text: { uk: 'Працюємо за договором з чіткими строками, бюджетом і відповідальністю.', en: 'We work under a contract with clear deadlines, budget and responsibility.' } },
]

const certs = [
  { uk: 'ISO 9001 — менеджмент якості', en: 'ISO 9001 — quality management' },
  { uk: 'ДБН — відповідність нормам', en: 'DBN — code compliance' },
  { uk: 'Ліцензія на будівельні роботи', en: 'Construction licence' },
  { uk: 'Сертифіковані матеріали', en: 'Certified materials' },
]

export default function Guarantees() {
  const { loc } = useLocale()
  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Гарантії', en: 'Guarantees' })} description={loc({ uk: '5 років гарантії на роботи, фіксований кошторис без прихованих доплат, офіційний договір.', en: '5-year warranty on works, a fixed estimate with no hidden charges, a formal contract.' })} path="/guarantees" />
      <PageHero
        kicker={loc({ uk: 'Гарантії', en: 'Guarantees' })}
        title={loc({ uk: 'Відповідаємо за результат', en: 'We stand behind the result' })}
        text={loc({ uk: 'Прозорі умови, офіційний договір і гарантія, яку можна перевірити.', en: 'Clear terms, a formal contract and a warranty you can actually check.' })}
        image="/img/hero-house.jpg"
        crumbs={[{ label: loc({ uk: 'Гарантії', en: 'Guarantees' }) }]}
      />

      <section className="section">
        <div className="container">
          <ul className="guarantee-grid">
            {guarantees.map((g, i) => (
              <Reveal as="li" className="guarantee" key={g.n} delay={(i % 4) * 0.07}>
                <div className="guarantee__num">{g.n}<span className="guarantee__unit">{loc(g.unit)}</span></div>
                <h3 className="guarantee__title">{loc(g.title)}</h3>
                <p className="guarantee__text">{loc(g.text)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Документи', en: 'Documents' })} title={loc({ uk: 'Сертифікати та ліцензії', en: 'Certificates & licences' })} align="center" />
          <ul className="press">
            {certs.map((c, i) => (
              <Reveal as="li" className="press__item" key={c.uk} delay={(i % 4) * 0.06}>{loc(c)}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </PageWrap>
  )
}
