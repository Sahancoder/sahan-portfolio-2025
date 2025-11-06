import Section from '../components/Section'
import AgileDiagram from '../components/AgileDiagram'

export default function About(){
  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            I'm an undergraduate UI/UX + frontend engineer who blends clean design with solid engineering.
            I care about fast, accessible, mobile-first experiences and clear case-study storytelling.
          </p>
          <p className="text-white/70 leading-relaxed">
            My approach combines creative problem-solving with technical precision. I follow Agile methodologies 
            to deliver high-quality projects that meet user needs and business goals.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <AgileDiagram />
        </div>
      </div>
    </Section>
  )
}
