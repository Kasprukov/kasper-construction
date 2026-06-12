import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

/**
 * Reusable accent panel with a heading and a button (careers, promos, etc.).
 */
export default function Banner({ kicker, title, text, btn, to = '/contacts' }) {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__panel">
          <div className="cta__glow" aria-hidden="true" />
          <div className="cta__body">
            {kicker && <Reveal as="span" className="cta__kicker">{kicker}</Reveal>}
            <Reveal as="h2" className="cta__title" delay={0.05}>{title}</Reveal>
            {text && <Reveal as="p" className="cta__text" delay={0.1}>{text}</Reveal>}
          </div>
          <Reveal className="cta__actions" delay={0.15}>
            <Magnetic>
              <Link className="btn btn--accent btn--lg" to={to}>{btn}</Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
