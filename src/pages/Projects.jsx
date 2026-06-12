import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import SectionHead from '../components/SectionHead'
import useLocale from '../hooks/useLocale'
import { projects, projectFilters } from '../data/projects'

const STEP = 6

export default function Projects() {
  const { loc } = useLocale()
  const [filter, setFilter] = useState('all')
  const [count, setCount] = useState(STEP)
  const filtered = projects.filter((p) => filter === 'all' || p.cat === filter)
  const visible = loc(filtered.slice(0, count))

  const changeFilter = (id) => { setFilter(id); setCount(STEP) }

  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Проєкти', en: 'Projects' })} description={loc({ uk: 'Приватні резиденції та комерційні обʼєкти в Україні та Європі — портфоліо студії Kasper.', en: 'Private residences and commercial spaces in Ukraine and Europe — the Kasper portfolio.' })} path="/projects" />
      <PageHero
        kicker={loc({ uk: 'Портфоліо', en: 'Portfolio' })}
        title={loc({ uk: 'Проєкти, якими пишаємось', en: 'Projects we’re proud of' })}
        text={loc({ uk: 'Приватні резиденції та комерційні обʼєкти в Україні та Європі.', en: 'Private residences and commercial spaces in Ukraine and Europe.' })}
        image="/img/hero-construction.jpg"
        crumbs={[{ label: loc({ uk: 'Проєкти', en: 'Projects' }) }]}
      />

      <section className="section">
        <div className="container">
          <div className="section__top">
            <SectionHead
              kicker={loc({ uk: '700+ обʼєктів', en: '700+ projects' })}
              title={loc({ uk: 'Кожен проєкт — окрема історія', en: 'Every project is its own story' })}
              lead={loc({ uk: 'Від приватних резиденцій до штаб-квартир: ми відповідаємо за результат на кожному метрі.', en: 'From private residences to headquarters: we’re accountable for every metre.' })}
            />
          </div>

          <div className="projects-bar">
            {loc(projectFilters).map((f) => (
              <button
                key={f.id}
                className={`projects-bar__filter${filter === f.id ? ' projects-bar__filter--active' : ''}`}
                onClick={() => changeFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.ul className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {visible.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </AnimatePresence>
          </motion.ul>

          {count < filtered.length && (
            <div className="load-more">
              <button className="btn btn--outline btn--lg" onClick={() => setCount((c) => c + STEP)}>
                {loc({ uk: 'Показати ще', en: 'Show more' })}
              </button>
            </div>
          )}
        </div>
      </section>

      <Stats />
      <CTA />
    </PageWrap>
  )
}
