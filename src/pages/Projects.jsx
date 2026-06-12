import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import SectionHead from '../components/SectionHead'
import { projects, projectFilters } from '../data/projects'

const STEP = 6

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [count, setCount] = useState(STEP)
  const filtered = projects.filter((p) => filter === 'all' || p.cat === filter)
  const visible = filtered.slice(0, count)

  const changeFilter = (id) => { setFilter(id); setCount(STEP) }

  return (
    <PageWrap>
      <Seo title="Проєкти" description="Приватні резиденції та комерційні обʼєкти в Україні та Європі — портфоліо студії Kasper." path="/projects" />
      <PageHero
        kicker="Портфоліо"
        title="Проєкти, якими пишаємось"
        text="Приватні резиденції та комерційні обʼєкти в Україні та Європі."
        image="/img/hero-construction.jpg"
        crumbs={[{ label: 'Проєкти' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section__top">
            <SectionHead
              kicker="700+ обʼєктів"
              title="Кожен проєкт — окрема історія"
              lead="Від приватних резиденцій до штаб-квартир: ми відповідаємо за результат на кожному метрі."
            />
          </div>

          <div className="projects-bar">
            {projectFilters.map((f) => (
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
                Показати ще
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
