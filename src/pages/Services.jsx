import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import ServiceCard from '../components/ServiceCard'
import Stats from '../components/Stats'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import useLocale from '../hooks/useLocale'
import { services } from '../data/services'

const formats = [
  { n: '01', title: { uk: 'Окрема послуга', en: 'A single service' }, text: { uk: 'Беремо лише потрібний етап — наприклад, технагляд чи дизайн інтерʼєру.', en: 'We take just the stage you need — say, supervision or interior design.' } },
  { n: '02', title: { uk: 'Комплекс під ключ', en: 'Full turnkey' }, text: { uk: 'Повний цикл від проєкту до ключів з одним центром відповідальності.', en: 'The full cycle from project to keys, with one point of responsibility.' } },
  { n: '03', title: { uk: 'Супровід та сервіс', en: 'Support & service' }, text: { uk: 'Гарантійне обслуговування, доукомплектація та авторський нагляд.', en: 'Warranty service, finishing touches and designer supervision.' } },
]

export default function Services() {
  const { loc } = useLocale()
  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Послуги', en: 'Services' })} description={loc({ uk: 'Повний цикл — від ідеї до ключів: управління, будівництво, дизайн, інженерія, технагляд, меблі.', en: 'The full cycle — from idea to keys: management, construction, design, engineering, supervision, furniture.' })} path="/services" />
      <PageHero
        kicker={loc({ uk: 'Послуги', en: 'Services' })}
        title={loc({ uk: 'Повний цикл — від ідеї до ключів', en: 'The full cycle — from idea to keys' })}
        text={loc({ uk: 'Шість напрямів, які можна замовити окремо або як комплекс під ключ.', en: 'Six services you can order on their own or as a full turnkey package.' })}
        image="/img/hero-build.jpg"
        crumbs={[{ label: loc({ uk: 'Послуги', en: 'Services' }) }]}
      />

      <section className="section">
        <div className="container">
          <ul className="services-grid">
            {loc(services).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </ul>
        </div>
      </section>

      {/* Formats of cooperation */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Формати співпраці', en: 'Ways to work with us' })} title={loc({ uk: 'Як з нами працювати', en: 'How to work with us' })} />
          <ul className="formats">
            {formats.map((f, i) => (
              <Reveal as="li" className="format-card" key={f.n} delay={(i % 3) * 0.08}>
                <span className="format-card__num">{f.n}</span>
                <h3 className="format-card__title">{loc(f.title)}</h3>
                <p className="format-card__text">{loc(f.text)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Stats />
      <FAQ />
      <CTA />
    </PageWrap>
  )
}
