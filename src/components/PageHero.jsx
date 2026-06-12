import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Img from './Img'

/**
 * Cinematic inner-page header: dark image, glow, kicker + serif title + crumbs.
 */
export default function PageHero({ kicker, title, text, image, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <Img className="page-hero__img" src={image} alt="" eager />
        <div className="page-hero__overlay" />
        <div className="page-hero__glow" aria-hidden="true" />
      </div>

      <div className="container page-hero__inner">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Хлібні крихти">
            <Link className="crumbs__link" to="/">Головна</Link>
            {crumbs.map((c) => (
              <span className="crumbs__part" key={c.label}>
                <span className="crumbs__sep">/</span>
                {c.to ? <Link className="crumbs__link" to={c.to}>{c.label}</Link>
                      : <span className="crumbs__current">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}

        {kicker && (
          <motion.span
            className="page-hero__kicker"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {kicker}
          </motion.span>
        )}

        <motion.h1
          className="page-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>

        {text && (
          <motion.p
            className="page-hero__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  )
}
