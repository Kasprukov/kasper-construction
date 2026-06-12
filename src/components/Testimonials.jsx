import { useTranslation } from 'react-i18next'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import useLocale from '../hooks/useLocale'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const { t } = useTranslation()
  const { loc } = useLocale()
  return (
    <section className="section section--alt testimonials">
      <div className="container">
        <SectionHead kicker={t('sections.testimonialsKicker')} title={t('sections.testimonialsTitle')} align="center" />
        <ul className="testimonials__grid">
          {loc(testimonials).map((item, i) => (
            <Reveal as="li" className="testimonial" key={item.name} delay={(i % 3) * 0.08}>
              <span className="testimonial__quote-mark" aria-hidden="true">”</span>
              <p className="testimonial__text">{item.quote}</p>
              <div className="testimonial__author">
                <img className="testimonial__avatar" src={item.photo} alt={item.name} loading="lazy" />
                <div>
                  <span className="testimonial__name">{item.name}</span>
                  <span className="testimonial__role">{item.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
