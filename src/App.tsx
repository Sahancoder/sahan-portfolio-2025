import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Achievements from './sections/Achievements'
import About from './sections/About'
import Education from './sections/Education'
import ContactForm from './components/ContactForm'
import { motion } from 'framer-motion'

export default function App(){
  return (
    <>
      <Splash />
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <About />
        <Education />
        <section id="contact" className="container pb-20">
          <h2 className="text-3xl font-heading mb-6">Contact</h2>
          
          {/* Two-column layout: Form + Illustration */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
              <p className="text-sm text-white/60 mt-3">
                Or email directly: <a className="text-accent" href="mailto:sahanviranga18@gmail.com">sahanviranga18@gmail.com</a>
              </p>
            </motion.div>

            {/* Illustration Column */}
            <motion.div
              className="hidden md:flex justify-center items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img 
                src="/contact.svg" 
                alt="Contact illustration" 
                className="w-full max-w-md lg:max-w-lg"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="container py-10 text-white/50 text-sm">
        © {new Date().getFullYear()} Sahan Hettiarachchi
      </footer>
    </>
  )
}
