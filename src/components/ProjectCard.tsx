import { motion } from 'framer-motion'
import { useState } from 'react'

type Props = { title:string; slug:string; cover:string; tags:string[]; repo?:string; demo?:string; desc:string; category?:string; index?:number; }
export default function ProjectCard(p:Props){
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.article 
      className="bg-card rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (p.index || 0) * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Image Container with Loading State */}
      <div className="aspect-video bg-white/5 relative overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm">
            Image unavailable
          </div>
        ) : (
          <img 
            src={p.cover} 
            alt={p.title} 
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold group-hover:text-accent transition">{p.title}</h3>
          {p.category && <span className="text-[11px] px-2 py-0.5 rounded bg-white/5">{p.category}</span>}
        </div>
        <p className="text-sm text-white/70 line-clamp-3">{p.desc}</p>
        <div className="flex flex-wrap gap-2">
          {p.tags.map(t=> <span key={t} className="text-xs px-2 py-1 rounded bg-white/5">{t}</span>)}
        </div>
        <div className="flex gap-3 pt-1">
          {p.demo && <a className="text-accent text-sm hover:underline" href={p.demo} target="_blank" rel="noopener noreferrer">Live</a>}
          {p.repo && <a className="text-accent text-sm hover:underline" href={p.repo} target="_blank" rel="noopener noreferrer">Code</a>}
        </div>
      </div>
    </motion.article>
  )
}
