import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { brand, nav, contact } from '../data/site'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">{brand.name}<span>.</span></Link>
          <p className="footer__tagline">
            Будівництво та інтерʼєри під ключ.<br />Київ · з {brand.since} року.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Підвал">
          <span className="footer__col-title">{t('nav.home')}</span>
          <ul className="footer__list">
            <li><Link className="footer__link" to="/">{t('nav.home')}</Link></li>
            {nav.map((n) => (
              <li key={n.to}><Link className="footer__link" to={n.to}>{t(`nav.${n.key}`)}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="footer__contacts">
          <span className="footer__col-title">{t('nav.contacts')}</span>
          <a className="footer__contact" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
          <a className="footer__contact" href={`mailto:${contact.email}`}>{contact.email}</a>
          <span className="footer__contact footer__contact--muted">{contact.address}</span>
          <div className="footer__socials">
            {contact.socials.map((s) => (
              <a key={s.label} className="footer__social" href={s.href} aria-label={s.label}>{s.short}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {brand.name} Studio. Усі права захищені.</span>
        <nav className="footer__legal" aria-label={t('footer.legal')}>
          <Link className="footer__legal-link" to="/guarantees">{t('footer.guarantees')}</Link>
          <Link className="footer__legal-link" to="/privacy">{t('footer.privacy')}</Link>
          <Link className="footer__legal-link" to="/cookies">{t('footer.cookies')}</Link>
        </nav>
      </div>
    </footer>
  )
}
