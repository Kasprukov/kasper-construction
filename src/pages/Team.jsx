import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import TeamCard from '../components/TeamCard'
import Stats from '../components/Stats'
import Banner from '../components/Banner'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { team } from '../data/team'

const culture = [
  { title: 'Майстерність', text: 'Ми пишаємось деталями, яких не видно, але які тримають якість.' },
  { title: 'Чесність', text: 'Прозорі бюджети та реальні строки — навіть коли це незручно.' },
  { title: 'Турбота', text: 'Ставимось до обʼєкта клієнта так, ніби будуємо для себе.' },
  { title: 'Розвиток', text: 'Вчимось, тестуємо матеріали й технології, ростемо разом.' },
]

export default function Team() {
  return (
    <PageWrap>
      <Seo title="Команда" description="Інженери, архітектори та менеджери, що ведуть ваш проєкт від ідеї до ключів." path="/team" />
      <PageHero
        kicker="Команда"
        title="Люди, які будують Kasper"
        text="Інженери, архітектори та менеджери, що ведуть ваш проєкт від ідеї до ключів."
        image="/img/office-prohub.jpg"
        crumbs={[{ label: 'Команда' }]}
      />

      <section className="section">
        <div className="container">
          <ul className="team-grid">
            {team.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
          </ul>
        </div>
      </section>

      <Stats />

      {/* Culture / values */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker="Культура" title="У що ми віримо" align="center" />
          <ul className="values-grid">
            {culture.map((c, i) => (
              <Reveal as="li" className="value-card" key={c.title} delay={(i % 4) * 0.07}>
                <span className="value-card__mark" aria-hidden="true">✦</span>
                <h3 className="value-card__title">{c.title}</h3>
                <p className="value-card__text">{c.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Banner
        kicker="Карʼєра"
        title="Шукаємо тих, хто будує краще"
        text="Відкриті до інженерів, прорабів і дизайнерів, які люблять свою справу. Надішліть резюме — поспілкуємось."
        btn="Надіслати резюме"
        to="/contacts"
      />

      <CTA />
    </PageWrap>
  )
}
