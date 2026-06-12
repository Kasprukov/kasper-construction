import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'
import useLocale from '../hooks/useLocale'
import { contact } from '../data/site'

export default function Contacts() {
  const { loc } = useLocale()
  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Контакти', en: 'Contacts' })} description={loc({ uk: 'Звʼяжіться зі студією Kasper: телефон, email, адреса у Києві. Відповідаємо протягом дня.', en: 'Get in touch with Kasper: phone, email, address in Kyiv. We reply within a day.' })} path="/contacts" />
      <PageHero
        kicker={loc({ uk: 'Контакти', en: 'Contacts' })}
        title={loc({ uk: 'Поговорімо про ваш проєкт', en: 'Let’s talk about your project' })}
        text={loc({ uk: 'Залиште заявку або звʼяжіться напряму — відповімо протягом одного робочого дня.', en: 'Leave a request or reach us directly — we’ll reply within one business day.' })}
        image="/img/com-office1.jpg"
        crumbs={[{ label: loc({ uk: 'Контакти', en: 'Contacts' }) }]}
      />

      <section className="section">
        <div className="container contacts">
          <div className="contacts__info">
            <ul className="contacts__list">
              <li className="contacts__item">
                <span className="contacts__label">{loc({ uk: 'Телефон', en: 'Phone' })}</span>
                <a className="contacts__value" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </li>
              <li className="contacts__item">
                <span className="contacts__label">{loc({ uk: 'Пошта', en: 'Email' })}</span>
                <a className="contacts__value" href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li className="contacts__item">
                <span className="contacts__label">{loc({ uk: 'Адреса', en: 'Address' })}</span>
                <span className="contacts__value">{loc(contact.address)}</span>
              </li>
              <li className="contacts__item">
                <span className="contacts__label">{loc({ uk: 'Графік', en: 'Hours' })}</span>
                <span className="contacts__value">{loc(contact.hours)}</span>
              </li>
            </ul>

            <div className="contacts__socials">
              {contact.socials.map((s) => (
                <a key={s.label} className="contacts__social" href={s.href} aria-label={s.label}>{s.short}</a>
              ))}
            </div>

            <div className="contacts__map">
              <iframe
                className="contacts__map-frame"
                title={loc({ uk: 'Карта — офіс Kasper', en: 'Map — Kasper office' })}
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=30.508%2C50.415%2C30.532%2C50.428&layer=mapnik&marker=50.4214%2C30.5189"
              />
            </div>
          </div>

          <Reveal className="contacts__form-wrap" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </PageWrap>
  )
}
