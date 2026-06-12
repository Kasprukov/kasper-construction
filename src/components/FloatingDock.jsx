import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollToTop } from '../hooks/useLenis'
import { contact } from '../data/site'

/**
 * Fixed quick-contact dock: phone + Telegram always visible; a scroll-to-top
 * button appears after scrolling down. Expands on hover/focus on desktop.
 */
export default function FloatingDock() {
  const [showTop, setShowTop] = useState(false)
  const tel = contact.phone.replace(/\s/g, '')

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="dock" aria-label="Швидкий звʼязок">
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="dock__btn dock__btn--top"
            onClick={() => scrollToTop(false)}
            aria-label="Догори"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <a className="dock__btn dock__btn--tg" href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
        <span className="dock__icon">✈</span>
      </a>
      <a className="dock__btn dock__btn--call" href={`tel:${tel}`} aria-label="Зателефонувати">
        <span className="dock__icon">☏</span>
        <span className="dock__pulse" aria-hidden="true" />
      </a>
    </div>
  )
}
