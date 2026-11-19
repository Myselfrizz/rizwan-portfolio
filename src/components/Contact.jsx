import { useState } from 'react'
import { Copy, Send, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Socials from './Socials.jsx'
import { site } from '../data/site.js'
const empty = { name: '', email: '', subject: '', message: '' }
function validate(f) {
  const e = {}
  if (f.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address.'
  if (f.subject.trim().length < 3) e.subject = 'Enter a subject.'
  if (f.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  return e
}
export default function Contact() {
  const [f, setF] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [copied, setCopied] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  async function copy() {
    try { await navigator.clipboard.writeText(site.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* clipboard unavailable */ }
  }
  async function submit(ev) {
    ev.preventDefault()
    const er = validate(f); setErrors(er); setStatus(null)
    if (Object.keys(er).length) return
    if (!site.contactEndpoint) { setStatus('Form is valid, but sending is not set up yet. Add a form endpoint in src/data/site.js (see README).'); return }
    try {
      const r = await fetch(site.contactEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(f) })
      if (!r.ok) throw new Error()
      setStatus('Message sent. Thank you!'); setF(empty)
    } catch { setStatus('Message could not be sent. Try again or email me directly.') }
  }
  const field = (k, label, type = 'text') => (
    <div>
      <label htmlFor={k} className="mb-1 block text-sm font-semibold">{label}</label>
      {k === 'message'
        ? <textarea id={k} rows={5} value={f[k]} onChange={set(k)} aria-invalid={!!errors[k]} className="w-full rounded-xl border border-black/25 bg-black/5 p-3" />
        : <input id={k} type={type} value={f[k]} onChange={set(k)} aria-invalid={!!errors[k]} className="w-full rounded-xl border border-black/25 bg-black/5 p-3" />}
      {errors[k] && <p className="mt-1 text-sm font-medium text-red-800" role="alert">{errors[k]}</p>}
    </div>
  )
  return (
    <section id="contact" className="bg-lime py-20 text-black sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/70">06 / Contact</p>
          <h2 className="mt-3 text-4xl font-semibold leading-[1.02] sm:text-6xl">Have a project in mind? <span className="serif">Let's create something meaningful.</span></h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black">{site.email} <ArrowUpRight size={18} /></a>
            <button onClick={copy} className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black"><Copy size={16} /> {copied ? 'Copied' : 'Copy email'}</button>
          </div>
          <div className="mt-8"><Socials /></div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="space-y-4">
            {field('name', 'Name')}{field('email', 'Email', 'email')}{field('subject', 'Subject')}{field('message', 'Message')}
            <button className="btn bg-black text-white hover:bg-white hover:text-black" type="submit"><Send size={16} /> Send message</button>
            {status && <p role="status" className="text-sm font-medium">{status}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
