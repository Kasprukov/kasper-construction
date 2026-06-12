import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import CTA from '../components/CTA'
import Img from '../components/Img'
import useLocale from '../hooks/useLocale'
import { posts, journalCategories } from '../data/journal'

export default function Journal() {
  const { t } = useTranslation()
  const { loc } = useLocale()
  const [cat, setCat] = useState('all')
  const visible = loc(posts.filter((p) => cat === 'all' || p.cat === cat))

  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Журнал', en: 'Journal' })} description={loc({ uk: 'Думки та інсайти про будівництво, дизайн і управління проєктами від студії Kasper.', en: 'Thoughts and insights on construction, design and project management from Kasper.' })} path="/journal" />
      <PageHero
        kicker={t('sections.journalKicker')}
        title={loc({ uk: 'Думки та інсайти', en: 'Thoughts & insights' })}
        text={loc({ uk: 'Як ми будуємо, проєктуємо та контролюємо якість — без води, по суті.', en: 'How we build, design and control quality — no fluff, straight to the point.' })}
        image="/img/int-3.jpg"
        crumbs={[{ label: t('nav.journal') }]}
      />

      <section className="section">
        <div className="container">
          <div className="projects-bar">
            {loc(journalCategories).map((c) => (
              <button
                key={c.id}
                className={`projects-bar__filter${cat === c.id ? ' projects-bar__filter--active' : ''}`}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <motion.ul className="journal-grid" layout>
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
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
