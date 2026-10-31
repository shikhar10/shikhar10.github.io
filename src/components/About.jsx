import { about } from '../data/content.js'
import { Reveal, SectionHeading } from './ui.jsx'

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="gutter mx-auto max-w-[1440px]">
        <SectionHeading index="01" label="ABOUT" title="Strategy, data and technology in one seat." />
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <Reveal>
            <p className="text-balance text-2xl leading-snug text-white/80 md:text-3xl">{about.statement}</p>
          </Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {about.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} y={20} className="bg-black p-6 md:p-8">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{s.value}</dd>
                <dd className="mt-2 text-sm text-white/50">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
