import CountUp from 'react-countup'

const items = [
  { value: 3, label: 'Years Learning & Freelance', suffix: '+' },
  { value: 20, label: 'Projects', suffix: '+' },
  { value: 10, label: 'Happy Clients', suffix: '+' }
]

export default function Stats(){
  return (
    <div className="container mt-10">
      <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/[0.04] p-4">
        {items.map(it=>(
          <div key={it.label} className="text-center">
            <div className="text-xl font-semibold text-accent">
              <CountUp 
                end={it.value} 
                duration={2.5} 
                suffix={it.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <div className="text-white/60 text-sm">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
