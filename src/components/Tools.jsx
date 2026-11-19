import { Smartphone, Code2, Flame, Github, Terminal, Film, Sparkles, Clapperboard, Wrench } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { tools } from '../data/skills.js'
// Generic icons are used to avoid bundling third-party brand logos.
// To use official logos, add SVG files to /public/icons and swap them in here.
const icons = { Flutter: Smartphone, Dart: Code2, Firebase: Flame, 'Android Studio': Wrench, GitHub: Github, 'VS Code': Terminal, 'Adobe Premiere Pro': Film, 'Adobe After Effects': Sparkles, 'Alight Motion': Clapperboard }
export default function Tools() {
  return (
    <section id="tools" className="section border-t border-line">
      <div className="wrap">
        <Reveal><p className="label">05 / Tools</p><h2 className="h2 mt-3">Tools I <span className="serif">use.</span></h2></Reveal>
        <div className="mt-10 space-y-8">
          {Object.entries(tools).map(([group, items]) => (
            <Reveal key={group}><h3 className="mb-3 text-sm text-mute">{group}</h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {items.map((t) => { const Icon = icons[t] || Wrench; return (
                  <li key={t} className="card flex flex-col items-center gap-2 p-4 text-center text-sm transition-colors hover:border-ink"><Icon className="text-accent" />{t}</li>) })}
              </ul></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
