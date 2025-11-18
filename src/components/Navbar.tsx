import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certs', label: 'Certifications' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 backdrop-blur border-b border-white/5">
      <nav className="container flex items-center justify-between h-14 sm:h-16">
        <a href="#home" className="flex items-center transition-transform duration-300 hover:scale-105 shrink-0">
          <img src="/logo (2).png" alt="Logo" className="h-14 sm:h-16 md:h-20 w-auto" />
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}><a className="text-white/70 hover:text-accent transition" href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        {/* Desktop Hire Me Button */}
        <a href="#contact" className="hidden md:block rounded-md bg-accent px-4 py-2 text-sm font-medium">Hire Me</a>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/70 hover:text-accent transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-bg/95 backdrop-blur">
          <ul className="container py-4 space-y-3">
            {links.map(l => (
              <li key={l.href}>
                <a 
                  className="block text-white/70 hover:text-accent transition py-2" 
                  href={l.href}
                  onClick={handleLinkClick}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a 
                href="#contact" 
                className="block text-center rounded-md bg-accent px-4 py-2 text-sm font-medium"
                onClick={handleLinkClick}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
