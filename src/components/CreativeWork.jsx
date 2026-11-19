import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { videos, categories } from '../data/videos.js'
function Modal({ video, onClose }) {
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4" onClick={onClose}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={video.title}>
      <motion.div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()} initial={{ scale: 0.96, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96 }}>
        <div className="mb-3 flex items-center justify-between text-white">
          <h3 className="text-lg font-bold">{video.title}</h3>
          <button onClick={onClose} aria-label="Close video"><X /></button>
        </div>
        {failed ? (
          <div className="grid aspect-video place-items-center rounded-xl bg-paper p-6 text-center text-sm">
            <p>No video file found at <code className="font-mono">{video.src}</code>.<br />Add the file to <code className="font-mono">public/videos</code> to play it here.</p>
          </div>
        ) : (
          <video src={video.src} controls autoPlay playsInline onError={() => setFailed(true)} className="aspect-video w-full rounded-xl bg-black" />
        )}
      </motion.div>
    </motion.div>
  )
}
export default function CreativeWork() {
  const [cat, setCat] = useState('All')
  const [current, setCurrent] = useState(null)
  const shown = cat === 'All' ? videos : videos.filter((v) => v.category === cat)
  return (
    <section id="creative" className="section border-t border-line">
      <div className="wrap">
        <Reveal><p className="label">04 / Creative work</p><h2 className="h2 mt-3">Stories in <span className="serif">motion.</span></h2><p className="mt-4 max-w-xl text-mute">A showreel of edits, motion pieces and short-form videos.</p></Reveal>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Video categories">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${cat === c ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink'}`}>{c}</button>
          ))}
        </div>
        {shown.length === 0 && <p className="mt-10 text-mute">No videos in this category yet. Add one in src/data/videos.js.</p>}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((v) => (
            <motion.button layout key={v.id} onClick={() => setCurrent(v)} className="card group overflow-hidden text-left" aria-label={`Play ${v.title}`}>
              <div className="relative overflow-hidden">
                <img src={v.poster} alt={`${v.title} thumbnail`} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 grid place-items-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-paper text-ink transition-colors group-hover:bg-accent group-hover:text-paper"><Play size={22} fill="currentColor" /></span></span>
              </div>
              <div className="p-4"><span className="chip">{v.category}</span><h3 className="mt-3 text-lg font-bold">{v.title}</h3><p className="mt-1 text-sm text-mute">{v.description}</p></div>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>{current && <Modal video={current} onClose={() => setCurrent(null)} />}</AnimatePresence>
    </section>
  )
}
