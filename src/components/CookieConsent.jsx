import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { initAnalytics } from '../lib/analytics'

export default function CookieConsent() {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const choice = localStorage.getItem('cookie-consent')
    if (choice === 'accepted') initAnalytics()
    if (!choice) setShow(true)
  }, [])

  const decide = (accepted) => {
    localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'declined')
    if (accepted) initAnalytics()
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="cookie"
          role="dialog"
          aria-label="Cookies"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="cookie__text">
            {t('cookie.text')}{' '}
            <a className="cookie__more" href="/cookies">{t('cookie.more')}</a>
          </p>
          <div className="cookie__actions">
            <button className="btn btn--outline cookie__btn" onClick={() => decide(false)}>
              {t('cookie.decline')}
            </button>
            <button className="btn btn--accent cookie__btn" onClick={() => decide(true)}>
              {t('cookie.accept')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
