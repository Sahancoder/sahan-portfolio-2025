import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Section({ id, title, children }:{ id:string; title:string; children:ReactNode }){
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id={id} className="container py-16" ref={ref}>
      <motion.h2 
        className="text-3xl font-heading mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  )
}
