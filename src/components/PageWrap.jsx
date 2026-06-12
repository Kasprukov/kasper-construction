import { motion } from 'framer-motion'

// Page-level enter/exit transition used by every route.
export default function PageWrap({ children, className = '' }) {
  return (
    <motion.div
      className={`page ${className}`.trim()}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
