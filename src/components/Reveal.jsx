import { motion } from 'framer-motion'

/**
 * Declarative scroll-reveal. Fades + lifts children into view once.
 */
export default function Reveal({
  as = 'div',
  children,
  className,
  y = 36,
  delay = 0,
  duration = 0.8,
  ...rest
}) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
