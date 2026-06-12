import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'
import { contact } from '../data/site'

export default function Contacts() {
  return (
    <PageWrap>
      <Seo title="Контакти" description="Звʼяжіться зі студією Kasper: телефон, email, адреса у Києві. Відповідаємо протягом дня." path="/contacts" />
      <PageHero
        kicker="Контакти"
        title="Поговорімо про ваш проєкт"
        text="Залиште заявку або звʼяжіться напряму — відповімо протягом одного робочого дня."
        image="/img/com-office1.jpg"
        crumbs={[{ label: 'Контакти' }]}
      />

      <section className="section">
        <div className="container contacts">
          <div className="contacts__info">
            <ul className="contacts__list">
              <li className="contacts__item">
                <span className="contacts__label">Телефон</span>
                <a className="contacts__value" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </li>
              <li className="contacts__item">
                <span className="contacts__label">Email</span>
                <a className="contacts__value" href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li className="contacts__item">
                <span className="contacts__label">Адреса</span>
                <span className="contacts__value">{contact.address}</span>
              </li>
              <li className="contacts__item">
                <span className="contacts__label">Графік</span>
                <span className="contacts__value">{contact.hours}</span>
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
                title="Карта — офіс Kasper"
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
