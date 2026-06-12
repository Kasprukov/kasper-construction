import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

/**
 * Brand intro reveal — shown once per browser session.
 */
export default function Loader() {
  const { t } = useTranslation()
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const seen = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('intro')
  const [show, setShow] = useState(!seen && !reduced)

  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'
    const tmr = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('intro', '1')
    }, 1800)
    return () => {
      clearTimeout(tmr)
      document.body.style.overflow = ''
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader__inner">
            <motion.span
              className="loader__brand"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Kasper<span className="loader__dot">.</span>
            </motion.span>
            <motion.span
              className="loader__tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('loaderTagline')}
            </motion.span>
            <span className="loader__bar"><span className="loader__bar-fill" /></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
