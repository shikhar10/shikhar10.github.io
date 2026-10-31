import { useState } from 'react'
import { profile } from '../data/content.js'
import { NeonDot, Reveal } from './ui.jsx'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="gutter mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2">
            <NeonDot />
            <span className="font-mono text-[11px] tracking-[0.22em] text-white/80">OPEN TO CONVERSATIONS</span>
          </div>
          <h2 className="font-display text-[12vw] font-extrabold uppercase leading-[0.88] tracking-[-0.04em] md:text-[8vw] 2xl:text-[120px]">
            Let's build
            <br />
            <span className="text-outline">something.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          <ContactRow label="EMAIL" value={profile.email} href={`mailto:${profile.email}`} copy />
          <ContactRow label="LINKEDIN" value="Shikhar Maheshwari ↗" href={profile.linkedin} external />
        </Reveal>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href, external, copy }) {
  const [copied, setCopied] = useState(false)
  const onCopy = () => {
    navigator.clipboard
      ?.writeText(value)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      })
      .catch(() => {})
  }
  return (
    <div className="flex min-w-0 items-center justify-between gap-4 bg-black p-6 md:p-8">
      <div className="min-w-0">
        <p className="font-mono text-[10px] tracking-[0.2em] text-white/40">{label}</p>
        {href ? (
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener' : undefined}
            className="mt-2 block break-all text-lg transition-colors hover:text-neon"
          >
            {value}
          </a>
        ) : (
          <p className="mt-2 select-all break-all text-lg">{value}</p>
        )}
      </div>
      {copy && (
        <button
          type="button"
          onClick={onCopy}
          className={`shrink-0 rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] transition-colors ${
            copied ? 'border-neon text-neon' : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white'
          }`}
        >
          {copied ? 'COPIED' : 'COPY'}
        </button>
      )}
    </div>
  )
}
