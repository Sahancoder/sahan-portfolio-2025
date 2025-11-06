import Section from '../components/Section'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { useMemo, useState } from 'react'

const CATEGORIES = ['All','Development','ML','Creative','Game Dev'] as const
type Cat = typeof CATEGORIES[number]

export default function Projects(){
  const [cat, setCat] = useState<Cat>('All')
  const filtered = useMemo(
    () => projects.filter(p => cat === 'All' ? true : p.category === cat),
    [cat]
  )

  return (
    <Section id="projects" title="Projects">
      <div className="mb-6 flex flex-wrap gap-2">
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={()=>setCat(c)}
            className={`px-3 py-1.5 rounded-md text-sm border ${cat===c ? 'bg-accent text-white border-accent' : 'border-white/10 bg-white/0 hover:bg-white/[0.04]'}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, index) => <ProjectCard key={p.slug} {...p} index={index} />)}
      </div>
    </Section>
  )
}
