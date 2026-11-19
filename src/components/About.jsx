import Reveal from './Reveal.jsx'
import { site } from '../data/site.js'
const traits = [['Curious learner', 'I like understanding how things work, then building with them.'], ['Problem solver', 'I break big problems into small, testable steps.'], ['Creative thinker', 'I bring visual storytelling into technical work.'], ['Technology enthusiast', 'I enjoy trying new tools and techniques.']]
export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          {/* Replace this block with your photo: <img src="/images/profile.jpg" alt="Rizwan" className="rounded-3xl" /> */}
          <div className="card relative grid aspect-[4/5] place-items-center overflow-hidden">
            <span className="absolute -bottom-6 left-4 font-display text-[12rem] font-bold leading-none text-ink/5">{site.name[0]}</span>
            <div className="grid h-64 w-64 place-items-center rounded-full bg-lime font-display text-8xl font-bold text-black">{site.name[0]}</div>
            <div className="absolute bottom-6 right-6 grid h-28 w-28 -rotate-6 place-items-center rounded-full bg-lav p-3 text-center font-display text-sm font-bold uppercase leading-tight text-black">Code +<br />Create</div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label">01 / About</p>
          <h2 className="h2 mt-3">Technical thinking, <span className="serif">creative execution.</span></h2>
          <p className="mt-6 text-lg">I'm interested in software development, technology, visual storytelling and creative problem-solving.</p>
          <p className="mt-4 text-mute">I enjoy building mobile applications, exploring new technologies and developing practical solutions, and I experiment with video editing and motion graphics.</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {traits.map(([t, d]) => <div key={t} className="card p-5"><dt className="font-display font-semibold">{t}</dt><dd className="mt-1 text-sm text-mute">{d}</dd></div>)}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
