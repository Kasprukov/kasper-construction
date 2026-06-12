import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import SectionHead from '../components/SectionHead'
import Lightbox from '../components/Lightbox'
import BeforeAfter from '../components/BeforeAfter'
import Img from '../components/Img'
import Share from '../components/Share'
import ProjectCard from '../components/ProjectCard'
import CTA from '../components/CTA'
import { getProject, projects, projectsByCat } from '../data/projects'

export default function ProjectDetail() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const [lb, setLb] = useState(null)
  const project = getProject(slug)
  if (!project) return <Navigate to="/projects" replace />

  const idx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(idx + 1) % projects.length]
  const related = projectsByCat(project.cat, project.slug).slice(0, 3)

  const facts = [
    { label: 'Локація', value: project.location },
    { label: 'Рік', value: project.year },
    { label: 'Площа', value: project.area },
    { label: 'Категорія', value: project.tag },
  ]

  return (
    <PageWrap>
      <Seo
        title={project.title}
        description={project.summary}
        path={`/projects/${project.slug}`}
        image={project.cover}
      />
      <PageHero
        kicker="Проєкт"
        title={project.title}
        text={project.summary}
        image={project.cover}
        crumbs={[{ label: t('nav.projects'), to: '/projects' }, { label: project.title }]}
      />

      <section className="section">
        <div className="container">
          <ul className="facts">
            {facts.map((f, i) => (
              <Reveal as="li" className="facts__item" key={f.label} delay={(i % 4) * 0.06}>
                <span className="facts__label">{f.label}</span>
                <span className="facts__value">{f.value}</span>
              </Reveal>
            ))}
          </ul>

          {/* Case narrative */}
          <div className="case">
            <div className="case__story">
              {project.challenge && (
                <Reveal className="case__block">
                  <span className="case__label">Задача</span>
                  <p className="case__text">{project.challenge}</p>
                </Reveal>
              )}
              {project.solution && (
                <Reveal className="case__block" delay={0.06}>
                  <span className="case__label">Рішення</span>
                  <p className="case__text">{project.solution}</p>
                </Reveal>
              )}
              {project.result && (
                <Reveal className="case__block" delay={0.12}>
                  <span className="case__label">Результат</span>
                  <p className="case__text">{project.result}</p>
                </Reveal>
              )}
            </div>
            {project.scope && (
              <Reveal className="case__scope" delay={0.08}>
                <h3 className="case__scope-title">Обсяг робіт</h3>
                <ul className="case__scope-list">
                  {project.scope.map((s) => (
                    <li className="case__scope-item" key={s}>
                      <span className="case__scope-mark" aria-hidden="true">✦</span>{s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          {project.quote && (
            <Reveal className="case-quote">
              <p className="case-quote__text">«{project.quote.text}»</p>
              <span className="case-quote__author">— {project.quote.author}</span>
            </Reveal>
          )}

          <Reveal><Share title={project.title} /></Reveal>{' '}

          {/* Before / after */}
          <Reveal className="ba-block">
            <span className="ba-block__label">До / Після</span>
            <BeforeAfter before={project.gallery[1]} after={project.gallery[0]} />
          </Reveal>

          {/* Gallery → click opens lightbox */}
          <div className="gallery">
            {project.gallery.map((src, i) => (
              <Reveal
                className={`gallery__item${i % 3 === 0 ? ' gallery__item--wide' : ''}`}
                key={src + i}
                delay={(i % 2) * 0.08}
              >
                <button className="gallery__btn" onClick={() => setLb(i)} aria-label={`Відкрити фото ${i + 1}`}>
                  <Img className="gallery__img" src={src} alt={`${project.title} — фото ${i + 1}`} sizes="(min-width:768px) 50vw, 100vw" />
                  <span className="gallery__zoom" aria-hidden="true">⤢</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox images={project.gallery} index={lb} onClose={() => setLb(null)} onIndex={setLb} />

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead kicker="Схожі роботи" title="Інші проєкти" />
            <ul className="projects-grid">
              {related.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </ul>
          </div>
        </section>
      )}

      <section className="section section--alt">
        <div className="container next-project">
          <span className="next-project__label">{t('labels.nextProject')}</span>
          <Link className="next-project__link" to={`/projects/${next.slug}`}>
            {next.title} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <CTA />
    </PageWrap>
  )
}
