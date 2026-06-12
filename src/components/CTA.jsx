import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import { cta } from '../data/site'

export default function CTA() {
  const { t } = useTranslation()
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__panel">
          <div className="cta__glow" aria-hidden="true" />
          <div className="cta__body">
            <Reveal as="span" className="cta__kicker">{cta.kicker}</Reveal>
            <Reveal as="h2" className="cta__title" delay={0.05}>{cta.title}</Reveal>
            <Reveal as="p" className="cta__text" delay={0.1}>{cta.text}</Reveal>
          </div>
          <Reveal className="cta__actions" delay={0.15}>
            <Magnetic>
              <Link className="btn btn--accent btn--lg" to="/contacts">{t('cta.leaveRequest')}</Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
