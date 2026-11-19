import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { nav, site } from '../data/site.js'
export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(([, id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  const link = (id) => `link-u block w-fit py-2 text-sm font-medium transition-colors ${active === id ? 'text-accent' : 'text-ink/70 hover:text-ink'}`
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur">
      <nav className="wrap flex h-20 items-center justify-between" aria-label="Main">
        <a href="#home" className="group flex items-center gap-3 font-display text-lg font-semibold">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/40 text-sm transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 group-hover:border-lime group-hover:bg-lime group-hover:text-black">{site.name[0]}</span><span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">{site.name}</span>
        </a>
        <ul className="hidden gap-7 lg:flex">
          {nav.filter(([, id]) => id !== 'home').map(([label, id]) => <li key={id}><a href={`#${id}`} className={link(id)} aria-current={active === id ? 'true' : undefined}>{label}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="btn btn-line hidden sm:inline-flex">Let's work together <ArrowUpRight size={16} /></a>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open && <ul className="wrap border-t border-line pb-3 lg:hidden">{nav.map(([label, id]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={link(id)}>{label}</a></li>)}</ul>}
    </header>
  )
}
