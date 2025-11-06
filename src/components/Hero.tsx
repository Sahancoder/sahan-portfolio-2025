import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Mail, PencilRuler } from 'lucide-react'
import { Icon } from '@iconify/react'
import { LINKS } from '../config/links'

export default function Hero(){
  return (
    <section id="home" className="container grid md:grid-cols-2 gap-8 pt-10 md:pt-20">
      <div className="flex flex-col gap-6">
        <p className="text-white/70">Hi, I am</p>
        <h1 className="text-4xl sm:text-5xl font-heading leading-tight">
          <span className="block font-semibold">Sahan Hettiarachchi</span>
          <span className="text-accent">
            <Typewriter words={['Full stack developer','Frontend Engineer','AI Enthusiast']} loop={0} cursor cursorStyle="|" typeSpeed={60} deleteSpeed={40} delaySpeed={1200}/>
          </span>
        </h1>
        <p className="text-white/70 max-w-prose">
          I craft responsive, performant experiences—focused on clean design, accessibility, and measurable impact.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="rounded-md bg-accent px-5 py-3 font-medium">Hire Me</a>
          <a href={LINKS.cv} download className="rounded-md border border-white/20 px-5 py-3 font-medium hover:border-white/40">Download CV</a>
        </div>
        <div className="flex gap-3 pt-2">
          <a aria-label="GitHub" className="p-2 rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300" href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <Github size={20}/>
          </a>
          <a aria-label="LinkedIn" className="p-2 rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={20}/>
          </a>
          <a aria-label="Behance" className="p-2 rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300" href={LINKS.behance} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa6-brands:behance" width="20" height="20" />
          </a>
          <a aria-label="Email" className="p-2 rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300" href={`mailto:${LINKS.email}`}>
            <Mail size={20}/>
          </a>
          <a aria-label="Figma" className="p-2 rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300" href={LINKS.figma} target="_blank" rel="noopener noreferrer">
            <PencilRuler size={20}/>
          </a>
        </div>
      </div>
      <div className="relative mx-auto max-w-sm">
        {/* PLACEHOLDER: Replace /pic.png with your actual portrait photo */}
        <div className="relative rounded-full border-8 border-white/5 overflow-hidden aspect-square bg-card">
          <img 
            src="/pic.png" 
            alt="Sahan portrait" 
            className="w-full h-full object-cover" 
            loading="lazy"
            onError={(e) => {
              // Fallback if image doesn't exist yet
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector('.placeholder-text')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'placeholder-text absolute inset-0 flex items-center justify-center text-white/40 text-sm text-center p-8';
                placeholder.innerHTML = 'Add your pic.png<br/>in the public folder';
                parent.appendChild(placeholder);
              }
            }}
          />
        </div>
      </div>
    </section>
  )
}
