import { nav, site } from '../data/site.js'
const social = [['GitHub', site.github], ['LinkedIn', site.linkedin], ['Instagram', site.instagram], ['Email', `mailto:${site.email}`]]
export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-paper">
      <div className="wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="group flex w-fit items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-paper/40 font-display transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 group-hover:border-lime group-hover:bg-lime group-hover:text-black">{site.name[0]}</span>
          <div><p className="font-display text-lg font-semibold leading-tight transition-transform duration-300 group-hover:translate-x-1">{site.name}</p><p className="text-sm opacity-70">{site.role}</p></div></div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">{nav.map(([l, id]) => <li key={id}><a href={`#${id}`} className="link-u">{l}</a></li>)}</ul>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">{social.map(([l, h]) => <li key={l}><a href={h} target={l === 'Email' ? undefined : '_blank'} rel="noreferrer" className="link-u">{l}</a></li>)}</ul>
      </div>
      <p className="wrap mt-8 text-xs opacity-60">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  )
}
