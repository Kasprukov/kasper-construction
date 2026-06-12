import { useParams, Link, Navigate } from 'react-router-dom'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import SectionHead from '../components/SectionHead'
import ProjectCard from '../components/ProjectCard'
import { getService, services } from '../data/services'
import { projects } from '../data/projects'

const packages = [
  { name: 'Базовий', note: 'Окремий етап', features: ['Один напрям робіт', 'Кошторис і графік', 'Звітність'] },
  { name: 'Оптимальний', note: 'Найпопулярніший', popular: true, features: ['Кілька напрямів', 'Управління проєктом', 'Технагляд', 'Щотижневі звіти'] },
  { name: 'Преміум', note: 'Під ключ', features: ['Повний цикл', 'Дизайн + виробництво', 'Авторський нагляд', 'Гарантія 5 років'] },
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <PageWrap>
      <Seo
        title={service.title}
        description={service.excerpt}
        path={`/services/${service.slug}`}
        image={service.image}
        jsonLd={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.excerpt, provider: { '@type': 'Organization', name: 'Kasper' } }}
      />
      <PageHero
        kicker="Послуга"
        title={service.title}
        text={service.excerpt}
        image={service.image}
        crumbs={[{ label: 'Послуги', to: '/services' }, { label: service.title }]}
      />

      <section className="section">
        <div className="container detail">
          <div className="detail__main">
            <Reveal as="p" className="detail__lead">{service.intro}</Reveal>

            <Reveal as="h2" className="detail__subtitle" delay={0.05}>Етапи роботи</Reveal>
            <ol className="steps">
              {service.process.map((p, i) => (
                <Reveal as="li" className="steps__item" key={p.step} delay={(i % 4) * 0.06}>
                  <span className="steps__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="steps__title">{p.step}</h3>
                    <p className="steps__text">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <aside className="detail__aside">
            <Reveal className="detail__card">
              {service.priceFrom && (
                <div className="detail__price">
                  <span className="detail__price-label">Вартість</span>
                  <span className="detail__price-value">{service.priceFrom}</span>
                </div>
              )}
              <h3 className="detail__card-title">Що входить</h3>
              <ul className="detail__list">
                {service.deliverables.map((d) => (
                  <li className="detail__list-item" key={d}>
                    <span className="detail__list-mark" aria-hidden="true">✦</span>{d}
                  </li>
                ))}
              </ul>
              <Link className="btn btn--accent btn--block" to="/contacts">Замовити послугу</Link>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Packages */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker="Пакети" title="Оберіть формат" align="center" />
          <ul className="packages">
            {packages.map((p, i) => (
              <Reveal as="li" className={`package${p.popular ? ' package--popular' : ''}`} key={p.name} delay={(i % 3) * 0.08}>
                {p.popular && <span className="package__badge">Популярний</span>}
                <span className="package__note">{p.note}</span>
                <h3 className="package__name">{p.name}</h3>
                <ul className="package__list">
                  {p.features.map((f) => (
                    <li className="package__item" key={f}><span className="package__check" aria-hidden="true">✓</span>{f}</li>
                  ))}
                </ul>
                <Link className={`btn ${p.popular ? 'btn--accent' : 'btn--outline'} btn--block`} to="/contacts">Обрати</Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Related projects */}
      <section className="section">
        <div className="container">
          <SectionHead kicker="Реалізації" title="Проєкти з цією послугою" />
          <ul className="projects-grid">
            {projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="detail__related-title">Інші послуги</h2>
          <ul className="services-grid">
            {others.map((s, i) => (
              <Reveal as="li" className="service-card service-card--mini" key={s.slug} delay={i * 0.07}>
                <Link className="service-card__link" to={`/services/${s.slug}`}>
                  <div className="service-card__media">
                    <img className="service-card__img" src={s.image} alt={s.title} loading="lazy" />
                    <div className="service-card__shade" />
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">{s.title}</h3>
                    <span className="service-card__more">Детальніше <span className="service-card__arrow" aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </PageWrap>
  )
}
