import Section from '../components/Section'
import { motion } from 'framer-motion'

export default function Education(){
  const education = [
    {
      degree: 'BSc (Hons) Computing & Information Systems',
      institution: 'Sabaragamuwa University of Sri Lanka',
      period: 'Current',
      logo: '/Logo-SUSL.png',
      status: 'current'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'E-Soft Metro Campus',
      period: '2020 - 2022',
      logo: '/esoft.png',
      status: 'completed'
    },
    {
      degree: 'G.C.E Advanced Level',
      institution: "St. Joseph's College",
      period: 'Completed 2020',
      logo: '/school.png',
      status: 'completed'
    }
  ]

  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {education.map((edu, index) => (
          <motion.div 
            key={index} 
            className="bg-card rounded-xl p-5 border border-white/5 flex items-center gap-4 hover:border-white/20 transition group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ x: 5 }}
          >
            <div className="shrink-0 w-16 h-16 bg-white/65 rounded-lg p-2 flex items-center justify-center">
              <img 
                src={edu.logo} 
                alt={`${edu.institution} logo`} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-lg group-hover:text-accent transition">{edu.degree}</h3>
                {edu.status === 'current' && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10">
                    Current
                  </span>
                )}
              </div>
              <div className="text-sm text-white/70">{edu.institution}</div>
              <div className="text-xs text-white/50 mt-1">{edu.period}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
