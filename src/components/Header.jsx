import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { brand, nav, contact } from '../data/site'
import LanguageToggle from './LanguageToggle'
import Magnetic from './Magnetic'
import useFocusTrap from '../hooks/useFocusTrap'

export default function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  useFocusTrap(navRef, open)

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${open ? ' header--open' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label={`${brand.name} — на головну`}>
          {brand.name}<span className="header__logo-dot">.</span>
        </Link>

        <nav ref={navRef} className={`header__nav${open ? ' header__nav--open' : ''}`} aria-label="Головна навігація">
          <ul className="header__list">
            {nav.map((item) => (
              <li key={item.to} className="header__item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `header__link${isActive ? ' header__link--active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </NavLink>
              </li>
            ))}
          </ul>
          <a className="header__nav-phone" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
            {contact.phone}
          </a>
        </nav>

        <div className="header__actions">
          <LanguageToggle className="header__lang" />
          <Magnetic>
            <Link className="btn btn--accent header__cta" to="/contacts">{t('cta.discuss')}</Link>
          </Magnetic>
          <button
            className={`burger${open ? ' burger--active' : ''}`}
            aria-label="Меню"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
