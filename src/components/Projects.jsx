import { motion } from 'framer-motion'
import { Github, ExternalLink, Info } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { projects } from '../data/projects.js'
export default function Projects() {
  return (
    <section id="projects" className="section border-t border-line">
      <div className="wrap">
        <Reveal>
          <p className="label">03 / Selected projects</p>
          <h2 className="h2 mt-3 max-w-3xl">Development <span className="serif">projects.</span></h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article className="group" key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <div className="relative overflow-hidden rounded-3xl">
                <img src={p.thumb} alt={`${p.title} project thumbnail`} loading="lazy" className="aspect-[8/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-5 top-5 rounded-full bg-black/80 px-3 py-1 text-xs font-bold text-white">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-5 text-3xl font-semibold transition-colors group-hover:text-accent">{p.title}</h3>
              <p className="mt-2 text-mute">{p.description}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-mute">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.details && <a href={p.details} className="btn btn-solid !py-2"><Info size={16} /> View project</a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-line !py-2"><Github size={16} /> GitHub</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-line !py-2"><ExternalLink size={16} /> Live demo</a>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
