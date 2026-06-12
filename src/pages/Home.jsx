import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageWrap from '../components/PageWrap'
import HomeHero from '../components/HomeHero'
import SectionHead from '../components/SectionHead'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import Stats from '../components/Stats'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'
import Seo, { orgJsonLd } from '../components/Seo'
import { asset } from '../lib/asset'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { home } from '../data/site'

export default function Home() {
  const { t } = useTranslation()
  return (
    <PageWrap>
      <Seo
        description="Kasper — преміальна будівельна студія повного циклу. Організація, управління та нагляд за будівництвом житлових і комерційних обʼєктів."
        path="/"
        jsonLd={orgJsonLd}
      />
      <HomeHero />

      {/* Services preview */}
      <section className="section">
        <div className="container">
          <div className="section__top">
            <SectionHead kicker="Що ми робимо" title="Послуги повного циклу"
              lead="Шість напрямів, що закривають весь шлях обʼєкта — від ідеї до експлуатації." />
            <Reveal className="section__top-link">
              <Link className="link-arrow" to="/services">{t('cta.allServices')} <span aria-hidden="true">→</span></Link>
            </Reveal>
          </div>
          <ul className="services-grid">
            {services.slice(0, 6).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </ul>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__top">
            <SectionHead kicker="Портфоліо" title="Вибрані проєкти" />
            <Reveal className="section__top-link">
              <Link className="link-arrow" to="/projects">{t('cta.allProjects')} <span aria-hidden="true">→</span></Link>
            </Reveal>
          </div>
          <ul className="projects-grid">
            {projects.slice(0, 6).map((p) => <ProjectCard key={p.slug} project={p} />)}
          </ul>
        </div>
      </section>

      <Stats />

      {/* About teaser */}
      <section className="section">
        <div className="container about-teaser">
          <Reveal className="about-teaser__media">
            <img className="about-teaser__img" src={asset(home.aboutTeaser.image)} alt="Інтерʼєр проєкту Kasper" loading="lazy" />
          </Reveal>
          <div className="about-teaser__content">
            <SectionHead kicker={home.aboutTeaser.kicker} title={home.aboutTeaser.title} />
            <Reveal as="p" className="about-teaser__text" delay={0.1}>{home.aboutTeaser.text}</Reveal>
            <Reveal delay={0.15}>
              <Link className="btn btn--outline" to="/about">{t('cta.aboutStudio')}</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker="Процес" title="Чотири кроки до результату" />
          <ol className="process">
            {[
              { step: '01', title: 'Знайомство', text: 'Зустріч, бриф, аналіз ділянки та вхідних умов.' },
              { step: '02', title: 'Проєкт і кошторис', text: 'Концепція, документація, фіксована вартість.' },
              { step: '03', title: 'Будівництво', text: 'Поетапна реалізація під технічним наглядом.' },
              { step: '04', title: 'Здача під ключ', text: 'Передача обʼєкта, документації та гарантійний сервіс.' },
            ].map((p, i) => (
              <Reveal as="li" className="process__item" key={p.step} delay={(i % 4) * 0.06}>
                <span className="process__step">{p.step}</span>
                <h3 className="process__title">{p.title}</h3>
                <p className="process__text">{p.text}</p>
              </Reveal>
            ))}
          </ol>

          <div className="awards">
            {[
              { y: '2024', t: 'PinWin — Обʼєкт року' },
              { y: '2023', t: 'Ukrainian Design Awards' },
              { y: '2022', t: 'Best Office Interior' },
              { y: '2021', t: 'ISO 9001 — якість' },
            ].map((a, i) => (
              <Reveal as="div" className="award" key={a.t} delay={(i % 4) * 0.06}>
                <span className="award__year">{a.y}</span>
                <span className="award__title">{a.t}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Clients />
      <FAQ />
      <CTA />
    </PageWrap>
  )
}
