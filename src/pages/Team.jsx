import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import TeamCard from '../components/TeamCard'
import Stats from '../components/Stats'
import Banner from '../components/Banner'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import useLocale from '../hooks/useLocale'
import { team } from '../data/team'

const culture = [
  { title: { uk: 'Майстерність', en: 'Craft' }, text: { uk: 'Ми пишаємось деталями, яких не видно, але які тримають якість.', en: 'We take pride in the details no one sees — the ones that hold the quality together.' } },
  { title: { uk: 'Чесність', en: 'Honesty' }, text: { uk: 'Прозорі бюджети та реальні строки — навіть коли це незручно.', en: 'Transparent budgets and realistic timelines — even when that’s inconvenient.' } },
  { title: { uk: 'Турбота', en: 'Care' }, text: { uk: 'Ставимось до обʼєкта клієнта так, ніби будуємо для себе.', en: 'We treat a client’s project as if we were building it for ourselves.' } },
  { title: { uk: 'Розвиток', en: 'Growth' }, text: { uk: 'Вчимось, тестуємо матеріали й технології, ростемо разом.', en: 'We learn, test materials and tech, and grow together.' } },
]

export default function Team() {
  const { loc } = useLocale()
  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Команда', en: 'Team' })} description={loc({ uk: 'Інженери, архітектори та менеджери, що ведуть ваш проєкт від ідеї до ключів.', en: 'Engineers, architects and managers who take your project from idea to keys.' })} path="/team" />
      <PageHero
        kicker={loc({ uk: 'Команда', en: 'Team' })}
        title={loc({ uk: 'Люди, які будують Kasper', en: 'The people who build Kasper' })}
        text={loc({ uk: 'Інженери, архітектори та менеджери, що ведуть ваш проєкт від ідеї до ключів.', en: 'Engineers, architects and managers who take your project from idea to keys.' })}
        image="/img/office-prohub.jpg"
        crumbs={[{ label: loc({ uk: 'Команда', en: 'Team' }) }]}
      />

      <section className="section">
        <div className="container">
          <ul className="team-grid">
            {loc(team).map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
          </ul>
        </div>
      </section>

      <Stats />

      {/* Culture / values */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Культура', en: 'Culture' })} title={loc({ uk: 'У що ми віримо', en: 'What we believe' })} align="center" />
          <ul className="values-grid">
            {culture.map((c, i) => (
              <Reveal as="li" className="value-card" key={c.title.uk} delay={(i % 4) * 0.07}>
                <span className="value-card__mark" aria-hidden="true">✦</span>
                <h3 className="value-card__title">{loc(c.title)}</h3>
                <p className="value-card__text">{loc(c.text)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Banner
        kicker={loc({ uk: 'Карʼєра', en: 'Careers' })}
        title={loc({ uk: 'Шукаємо тих, хто будує краще', en: 'We’re looking for people who build better' })}
        text={loc({ uk: 'Відкриті до інженерів, прорабів і дизайнерів, які люблять свою справу. Надішліть резюме — поспілкуємось.', en: 'Open to engineers, site managers and designers who love what they do. Send your CV — let’s talk.' })}
        btn={loc({ uk: 'Надіслати резюме', en: 'Send your CV' })}
        to="/contacts"
      />

      <CTA />
    </PageWrap>
  )
}
