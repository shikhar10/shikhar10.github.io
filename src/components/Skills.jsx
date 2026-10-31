import { motion } from 'framer-motion'
import { skills } from '../data/content.js'
import { Reveal, SectionHeading } from './ui.jsx'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40">
      <div className="gutter mx-auto max-w-[1440px]">
        <SectionHeading index="03" label="SKILLS" title="The toolkit." />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {skills.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.1} className="bg-black p-7 md:p-10">
              <h3 className="mb-8 flex items-center justify-between font-mono text-xs tracking-[0.2em] text-white/50">
                {g.group.toUpperCase()}
                <span className="text-neon">{String(g.items.length).padStart(2, '0')}</span>
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <motion.li
                    key={s}
                    whileHover={{ y: -2 }}
                    className="cursor-default rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition-colors duration-300 hover:border-neon hover:text-neon"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
