import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform } from 'framer-motion'
import Magnetic from './Magnetic'
import Img from './Img'
import { home } from '../data/site'

const lineVariants = {
  hidden: { opacity: 0, y: '110%' },
  show: (i) => ({
    opacity: 1,
    y: '0%',
    transition: { duration: 1, delay: 0.2 + i * 0.14, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function HomeHero() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.2])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section className="home-hero" ref={ref}>
      <motion.div className="home-hero__media" style={{ y, scale }}>
        <Img className="home-hero__img" src={home.hero.image} alt="Сучасна архітектура" eager />
        <div className="home-hero__overlay" />
        <div className="home-hero__glow" aria-hidden="true" />
      </motion.div>

      <motion.div className="container home-hero__inner" style={{ opacity: fade }}>
        <motion.span
          className="home-hero__kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {home.hero.kicker}
        </motion.span>

        <h1 className="home-hero__title">
          {home.hero.title.map((line, i) => (
            <span className="home-hero__line" key={i}>
              <motion.span
                className="home-hero__line-inner"
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="show"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="home-hero__text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {home.hero.text}
        </motion.p>

        <motion.div
          className="home-hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <Magnetic>
            <Link className="btn btn--accent btn--lg" to="/contacts">{t('cta.start')}</Link>
          </Magnetic>
          <Magnetic>
            <Link className="btn btn--outline btn--lg" to="/projects">{t('cta.works')}</Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      <div className="home-hero__scroll" aria-hidden="true">
        <span className="home-hero__scroll-line" />
        {t('labels.scroll')}
      </div>
    </section>
  )
}
