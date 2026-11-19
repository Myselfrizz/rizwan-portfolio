import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Play, Sparkles } from 'lucide-react'
import Socials from './Socials.jsx'

// Idle floating motion for each circle. d = seconds per cycle (higher = slower).
// Each property has its own timing so the hover scale doesn't reuse the slow looping float timing.
const float = (d) => ({ animate: { y: [0, -12, 0] }, transition: { y: { duration: d, repeat: Infinity, ease: 'easeInOut' }, scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } })

// One circle. depth = how far (px) it follows the cursor; different depths create a parallax feel.
const Dot = ({ pos, color, d, depth, sx, sy, children }) => {
  const x = useTransform(sx, (v) => v * depth)
  const y = useTransform(sy, (v) => v * depth)
  return (
    <motion.div className={`absolute ${pos}`} style={{ x, y }}>
      <motion.div className={`grid h-full w-full place-items-center rounded-full text-black ${color}`}
        whileHover={{ scale: 1.1 }} {...float(d)}>{children}</motion.div>
    </motion.div>
  )
}

const items = ['Flutter', 'Dart', 'Firebase', 'Motion Graphics', 'Cinematic Edits', 'Reels', 'Typography Animation']

export default function Hero() {
  const reduce = useReducedMotion()
  // Cursor position inside the orbit area: -0.5 (left/top) to 0.5 (right/bottom)
  const mx = useMotionValue(0), my = useMotionValue(0)
  // Springs with high damping = no bounce, just a smooth ease in and out.
  // Circles: lower stiffness = slower, lazier follow. Ring: even slower, so it trails behind.
  const dotSpring = { stiffness: 40, damping: 20, mass: 1.2 }
  const ringSpring = { stiffness: 22, damping: 18, mass: 1.5 }
  const sx = useSpring(mx, dotSpring), sy = useSpring(my, dotSpring)
  const rx = useSpring(mx, ringSpring), ry = useSpring(my, ringSpring)
  const ringRotate = useTransform(rx, (v) => -35 + v * 50)  // ring turns as the cursor moves sideways
  const ringX = useTransform(rx, (v) => v * -30)
  const ringY = useTransform(ry, (v) => v * -30)
  const move = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const leave = () => { mx.set(0); my.set(0) }
  const rise = (i) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } })
  return (
    <>
      <section id="home" className="section pb-16 pt-14 sm:pt-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <h1 className="text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
              <motion.span className="block" {...rise(0)}>Software Developer</motion.span>
              <motion.span className="serif block text-accent" {...rise(1)}>&amp; Creative Video Editor</motion.span>
            </h1>
            <p className="mt-8 font-display text-xl sm:text-2xl">Building digital experiences through code and creativity.</p>
            <p className="mt-4 max-w-xl text-lg text-mute">I work with Flutter and modern development technologies, and I create engaging visual content through video editing and motion graphics.</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a href="#projects" className="btn btn-solid !px-7 !py-4 text-base">Explore my work <ArrowDown size={18} /></a>
              <a href="#contact" className="inline-flex items-center gap-1 font-semibold hover:text-accent">Contact me <ArrowUpRight size={18} /></a>
            </div>
            <div className="mt-10"><Socials /></div>
          </div>
          <div className="group relative mx-auto hidden aspect-square w-full max-w-md lg:block" aria-hidden="true" onMouseMove={move} onMouseLeave={leave}>
            <motion.div className="absolute inset-x-[-10%] top-[30%] h-[42%] rounded-[50%] border-2 border-ink/25 transition-colors duration-300 group-hover:border-ink/60"
              style={{ rotate: ringRotate, x: ringX, y: ringY }} />
            <Dot sx={sx} sy={sy} depth={60} d={6} pos="left-[24%] top-[18%] h-[50%] w-[50%]" color="bg-sun"><Sparkles size={56} /></Dot>
            <Dot sx={sx} sy={sy} depth={140} d={5} pos="right-[6%] top-0 h-[24%] w-[24%]" color="bg-coral"><Play size={32} fill="currentColor" /></Dot>
            <Dot sx={sx} sy={sy} depth={110} d={7} pos="right-0 top-[56%] h-[30%] w-[30%]" color="bg-lav font-display text-3xl font-bold">&lt;/&gt;</Dot>
            <Dot sx={sx} sy={sy} depth={90} d={8} pos="bottom-0 left-[6%] h-[34%] w-[34%]" color="bg-[#f4f0e8]"><span className="h-6 w-6 rounded-full bg-black/70" /></Dot>
          </div>
        </div>
      </section>
      <div className="overflow-hidden bg-ink py-4 text-paper" aria-hidden="true">
        <div className="marquee flex w-max whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.2em]">
          {[...items, ...items].map((t, i) => <span key={i} className="mr-8">{t} <span className="ml-8 text-[#7a9a00]">✦</span></span>)}
        </div>
      </div>
    </>
  )
}
