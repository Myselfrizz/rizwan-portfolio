import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { site } from '../data/site.js'
const list = [[Github, 'GitHub', site.github], [Linkedin, 'LinkedIn', site.linkedin], [Instagram, 'Instagram', site.instagram], [Mail, 'Email', `mailto:${site.email}`]]
export default function Socials() {
  return (
    <ul className="flex gap-3">
      {list.map(([Icon, label, href]) => (
        <li key={label}>
          <a href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full border border-line transition-all hover:-translate-y-1 hover:bg-ink hover:text-paper">
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}
