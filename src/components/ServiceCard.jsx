import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import Img from './Img'

export default function ServiceCard({ service, index = 0 }) {
  const { t } = useTranslation()
  return (
    <Reveal as="li" className="service-card" delay={(index % 3) * 0.08}>
      <Link className="service-card__link" to={`/services/${service.slug}`}>
        <div className="service-card__media">
          <Img className="service-card__img" src={service.image} alt={service.title} sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" />
          <div className="service-card__shade" />
        </div>
        <div className="service-card__body">
          <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__text">{service.excerpt}</p>
          <span className="service-card__more">
            {t('cta.more')} <span className="service-card__arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
