import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionHead from './SectionHead'
import { faq } from '../data/faq'

export default function FAQ() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(0)

  return (
    <section className="section faq">
      <div className="container faq__wrap">
        <SectionHead kicker={t('sections.faqKicker')} title={t('sections.faqTitle')} />
        <ul className="faq__list">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <li className={`faq__item${isOpen ? ' faq__item--open' : ''}`} key={item.q}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq__a-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="faq__a">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
