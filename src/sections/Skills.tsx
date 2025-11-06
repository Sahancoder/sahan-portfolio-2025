import Section from '../components/Section'
import { skills } from '../data/skills'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

export default function Skills(){
  return (
    <Section id="skills" title="Skills">
      {/* Desktop view - full cards with text */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((s, index) => (
          <motion.div
            key={s.name}
            className="bg-card border border-white/5 rounded-xl p-4 flex items-center gap-3 hover:border-white/20 transition"
            title={s.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="shrink-0 grid place-items-center w-12 h-12 rounded-lg bg-white/10 p-2">
              <Icon icon={s.icon} width="32" height="32" />
            </div>
            <div>
              <div className="font-medium">{s.name}</div>
              <div className="text-xs text-white/60">{s.level}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile view - icons only, compact grid */}
      <div className="grid grid-cols-4 gap-3 md:hidden">
        {skills.map((s, index) => (
          <motion.div
            key={s.name}
            className="bg-card border border-white/5 rounded-lg p-3 flex items-center justify-center hover:border-white/20 transition"
            title={`${s.name} - ${s.level}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
          >
            <div className="grid place-items-center w-10 h-10 rounded-lg bg-white/10 p-1.5">
              <Icon icon={s.icon} width="24" height="24" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
