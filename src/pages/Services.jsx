import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import ServiceCard from '../components/ServiceCard'
import Stats from '../components/Stats'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { services } from '../data/services'

const formats = [
  { n: '01', title: 'Окрема послуга', text: 'Беремо лише потрібний етап — наприклад, технагляд чи дизайн інтерʼєру.' },
  { n: '02', title: 'Комплекс під ключ', text: 'Повний цикл від проєкту до ключів з одним центром відповідальності.' },
  { n: '03', title: 'Супровід та сервіс', text: 'Гарантійне обслуговування, доукомплектація та авторський нагляд.' },
]

export default function Services() {
  return (
    <PageWrap>
      <Seo title="Послуги" description="Повний цикл — від ідеї до ключів: управління, будівництво, дизайн, інженерія, технагляд, меблі." path="/services" />
      <PageHero
        kicker="Послуги"
        title="Повний цикл — від ідеї до ключів"
        text="Шість напрямів, які можна замовити окремо або як комплекс під ключ."
        image="/img/hero-build.jpg"
        crumbs={[{ label: 'Послуги' }]}
      />

      <section className="section">
        <div className="container">
          <ul className="services-grid">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </ul>
        </div>
      </section>

      {/* Formats of cooperation */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker="Формати співпраці" title="Як з нами працювати" />
          <ul className="formats">
            {formats.map((f, i) => (
              <Reveal as="li" className="format-card" key={f.n} delay={(i % 3) * 0.08}>
                <span className="format-card__num">{f.n}</span>
                <h3 className="format-card__title">{f.title}</h3>
                <p className="format-card__text">{f.text}</p>
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
