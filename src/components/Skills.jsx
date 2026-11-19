import { Code2, Film } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { devSkills, creativeSkills } from '../data/skills.js'
export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="wrap">
        <Reveal><p className="label">02 / Skills</p><h2 className="h2 mt-3">What I <span className="serif">work with.</span></h2></Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="card p-6">
            <h3 className="flex items-center gap-2 text-xl font-bold"><Code2 size={20} className="text-accent" /> Development</h3>
            <div className="mt-5 space-y-5">
              {devSkills.map((g) => (
                <div key={g.group}><p className="mb-2 text-sm text-mute">{g.group}</p>
                  <div className="flex flex-wrap gap-2">{g.items.map((i) => <span key={i} className="chip">{i}</span>)}</div></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-ink p-6 text-paper">
            <h3 className="flex items-center gap-2 text-xl font-bold"><Film size={20} /> Creative</h3>
            <ul className="mt-5 divide-y divide-paper/15">
              {creativeSkills.map(([t, d]) => <li key={t} className="py-3"><b className="font-display">{t}</b><p className="text-sm text-paper/60">{d}</p></li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
