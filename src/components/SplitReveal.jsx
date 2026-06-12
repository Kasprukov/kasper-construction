import { motion } from 'framer-motion'

/**
 * Word-by-word masked reveal for headings (premium "kinetic" feel).
 */
export default function SplitReveal({ text, as = 'h2', className, delay = 0 }) {
  const Tag = motion[as] || motion.h2
  const words = String(text).split(' ')

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span className="split__word" key={i} aria-hidden="true">
          <motion.span
            className="split__inner"
            variants={{
              hidden: { y: '110%' },
              show: { y: '0%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
