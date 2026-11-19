import { motion } from 'framer-motion'
// Scroll-reveal wrapper used sparingly (reduced motion handled by MotionConfig in main.jsx).
export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}
