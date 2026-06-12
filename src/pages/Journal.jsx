import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import CTA from '../components/CTA'
import Img from '../components/Img'
import { posts, journalCategories } from '../data/journal'

export default function Journal() {
  const { t } = useTranslation()
  const [cat, setCat] = useState('Усі')
  const visible = posts.filter((p) => cat === 'Усі' || p.category === cat)
  return (
    <PageWrap>
      <Seo title="Журнал" description="Думки та інсайти про будівництво, дизайн і управління проєктами від студії Kasper." path="/journal" />
      <PageHero
        kicker={t('sections.journalKicker')}
        title="Думки та інсайти"
        text="Як ми будуємо, проєктуємо та контролюємо якість — без води, по суті."
        image="/img/int-3.jpg"
        crumbs={[{ label: t('nav.journal') }]}
      />

      <section className="section">
        <div className="container">
          <div className="projects-bar">
            {journalCategories.map((c) => (
              <button
                key={c}
                className={`projects-bar__filter${cat === c ? ' projects-bar__filter--active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.ul className="journal-grid" layout>
            <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.li
                className="post-card"
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link className="post-card__link" to={`/journal/${p.slug}`}>
                  <div className="post-card__media">
                    <Img className="post-card__img" src={p.cover} alt={p.title} sizes="(min-width:1024px) 33vw, (min-width:480px) 50vw, 100vw" />
                  </div>
                  <div className="post-card__body">
                    <span className="post-card__meta">{p.category} · {p.read} {t('labels.minRead')}</span>
                    <h3 className="post-card__title">{p.title}</h3>
                    <p className="post-card__excerpt">{p.excerpt}</p>
                    <span className="post-card__more">{t('labels.readMore')} <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </motion.li>
            ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>

      <CTA />
    </PageWrap>
  )
}
