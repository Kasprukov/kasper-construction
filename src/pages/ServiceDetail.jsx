import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import SectionHead from '../components/SectionHead'
import ProjectCard from '../components/ProjectCard'
import { asset } from '../lib/asset'
import useLocale from '../hooks/useLocale'
import { getService, services } from '../data/services'
import { projects } from '../data/projects'

const packages = [
  { name: { uk: 'Базовий', en: 'Basic' }, note: { uk: 'Окремий етап', en: 'Single stage' }, features: [{ uk: 'Один напрям робіт', en: 'One type of work' }, { uk: 'Кошторис і графік', en: 'Estimate and schedule' }, { uk: 'Звітність', en: 'Reporting' }] },
  { name: { uk: 'Оптимальний', en: 'Standard' }, note: { uk: 'Найпопулярніший', en: 'Most popular' }, popular: true, features: [{ uk: 'Кілька напрямів', en: 'Several services' }, { uk: 'Управління проєктом', en: 'Project management' }, { uk: 'Технагляд', en: 'Supervision' }, { uk: 'Щотижневі звіти', en: 'Weekly reports' }] },
  { name: { uk: 'Преміум', en: 'Premium' }, note: { uk: 'Під ключ', en: 'Turnkey' }, features: [{ uk: 'Повний цикл', en: 'Full cycle' }, { uk: 'Дизайн + виробництво', en: 'Design + manufacturing' }, { uk: 'Авторський нагляд', en: 'Designer supervision' }, { uk: 'Гарантія 5 років', en: '5-year warranty' }] },
]

export default function ServiceDetail() {
  const { t } = useTranslation()
  const { loc } = useLocale()
  const { slug } = useParams()
  const raw = getService(slug)
  if (!raw) return <Navigate to="/services" replace />

  const service = loc(raw)
  const others = loc(services.filter((s) => s.slug !== slug).slice(0, 3))

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
        kicker={loc({ uk: 'Послуга', en: 'Service' })}
        title={service.title}
        text={service.excerpt}
        image={service.image}
        crumbs={[{ label: t('nav.services'), to: '/services' }, { label: service.title }]}
      />

      <section className="section">
        <div className="container detail">
          <div className="detail__main">
            <Reveal as="p" className="detail__lead">{service.intro}</Reveal>

            <Reveal as="h2" className="detail__subtitle" delay={0.05}>{t('labels.steps')}</Reveal>
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
                <>
                  <div className="detail__price">
                    <span className="detail__price-label">{loc({ uk: 'Вартість', en: 'Cost' })}</span>
                    <span className="detail__price-value">{service.priceFrom}</span>
                  </div>
                  <p className="detail__price-note">{loc({ uk: 'Ціни вказані для України. Для країн Європи вартість може бути вищою.', en: 'Prices are for Ukraine. For European countries the cost may be higher.' })}</p>
                </>
              )}
              <h3 className="detail__card-title">{t('labels.included')}</h3>
              <ul className="detail__list">
                {service.deliverables.map((d) => (
                  <li className="detail__list-item" key={d}>
                    <span className="detail__list-mark" aria-hidden="true">✦</span>{d}
                  </li>
                ))}
              </ul>
              <Link className="btn btn--accent btn--block" to="/contacts">{t('cta.order')}</Link>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Packages */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Пакети', en: 'Packages' })} title={loc({ uk: 'Оберіть формат', en: 'Pick a format' })} align="center" />
          <ul className="packages">
            {loc(packages).map((p, i) => (
              <Reveal as="li" className={`package${p.popular ? ' package--popular' : ''}`} key={p.name} delay={(i % 3) * 0.08}>
                {p.popular && <span className="package__badge">{loc({ uk: 'Популярний', en: 'Popular' })}</span>}
                <span className="package__note">{p.note}</span>
                <h3 className="package__name">{p.name}</h3>
                <ul className="package__list">
                  {p.features.map((f) => (
                    <li className="package__item" key={f}><span className="package__check" aria-hidden="true">✓</span>{f}</li>
                  ))}
                </ul>
                <Link className={`btn ${p.popular ? 'btn--accent' : 'btn--outline'} btn--block`} to="/contacts">{loc({ uk: 'Обрати', en: 'Choose' })}</Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Related projects */}
      <section className="section">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Реалізації', en: 'In practice' })} title={loc({ uk: 'Проєкти з цією послугою', en: 'Projects with this service' })} />
          <ul className="projects-grid">
            {loc(projects).slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="detail__related-title">{t('labels.otherServices')}</h2>
          <ul className="services-grid">
            {others.map((s, i) => (
              <Reveal as="li" className="service-card service-card--mini" key={s.slug} delay={i * 0.07}>
                <Link className="service-card__link" to={`/services/${s.slug}`}>
                  <div className="service-card__media">
                    <img className="service-card__img" src={asset(s.image)} alt={s.title} loading="lazy" />
                    <div className="service-card__shade" />
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">{s.title}</h3>
                    <span className="service-card__more">{t('cta.more')} <span className="service-card__arrow" aria-hidden="true">→</span></span>
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
