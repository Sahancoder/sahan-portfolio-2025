import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Splash() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1700)
    return () => clearTimeout(t)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-bg"
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}
        >
          <motion.h1
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="shine text-4xl sm:text-5xl md:text-6xl font-heading tracking-wide"
          >
            Sahan Hettiarachchi
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
