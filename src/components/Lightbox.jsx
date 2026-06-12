import { useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useFocusTrap from '../hooks/useFocusTrap'
import { asset } from '../lib/asset'

/**
 * Fullscreen image viewer with keyboard + button navigation.
 * Controlled: `index` is null when closed.
 */
export default function Lightbox({ images, index, onClose, onIndex }) {
  const open = index !== null && index !== undefined
  const boxRef = useRef(null)
  useFocusTrap(boxRef, open)

  const prev = useCallback(
    (e) => { e?.stopPropagation(); onIndex((index - 1 + images.length) % images.length) },
    [index, images, onIndex],
  )
  const next = useCallback(
    (e) => { e?.stopPropagation(); onIndex((index + 1) % images.length) },
    [index, images, onIndex],
  )

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, prev, next])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          ref={boxRef}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
        >
          <button className="lightbox__close" onClick={onClose} aria-label="Закрити">✕</button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Попереднє">‹</button>
          <motion.img
            key={index}
            className="lightbox__img"
            src={asset(images[index])}
            alt=""
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Наступне">›</button>
          <span className="lightbox__count">{index + 1} / {images.length}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
