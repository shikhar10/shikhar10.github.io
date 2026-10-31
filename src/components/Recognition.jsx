import { recognition } from '../data/content.js'
import { Reveal, SectionHeading } from './ui.jsx'

export default function Recognition() {
  return (
    <section id="recognition" className="relative py-28 md:py-40">
      <div className="gutter mx-auto max-w-[1440px]">
        <SectionHeading index="04" label="RECOGNITION" title="Awards & education." />

        <ul className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {recognition.awards.map((a, i) => (
            <li key={a.title} className="bg-black">
              <Reveal delay={(i % 2) * 0.1} y={20} className="group flex h-full items-start gap-5 p-7 md:p-10">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-neon transition-colors duration-300 group-hover:border-neon">
                  ★
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neon">{a.org}</p>
                  <h3 className="mt-2 text-balance font-display text-xl font-bold tracking-tight md:text-2xl">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{a.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-5 grid gap-5 md:mt-6 md:grid-cols-2 md:gap-6">
          {recognition.education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.035] p-7 md:p-10">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-white/40">EDUCATION</p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">{e.school}</h3>
                  <p className="mt-2 text-white/60">{e.degree}</p>
                  {e.note && <p className="mt-3 text-sm text-white/45">{e.note}</p>}
                </div>
                <p className="font-display text-4xl font-extrabold tracking-tight text-outline md:text-5xl">{e.years}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
