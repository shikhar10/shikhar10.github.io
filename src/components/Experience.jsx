import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { experience } from '../data/content.js'
import { Pill, SectionHeading } from './ui.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Experience() {
  // Hover reveals details on desktop; tap toggles on touch screens.
  const [active, setActive] = useState(0)

  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="gutter mx-auto max-w-[1440px]">
        <SectionHeading index="04" label="EXPERIENCE" title="Where I've built and shipped." />

        <ol className="border-t border-white/10" onMouseLeave={() => setActive(0)}>
          {experience.map((job, i) => {
            const isOpen = active === i
            return (
              <motion.li
                key={job.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
                className="group border-b border-white/10"
                onMouseEnter={() => setActive(i)}
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-7 text-left md:gap-10 md:py-10"
                >
                  <span className={`font-mono text-xs transition-colors ${isOpen ? 'text-neon' : 'text-white/30'}`}>0{i + 1}</span>
                  <span className="min-w-0">
                    <span
                      className={`block font-display text-2xl font-bold uppercase leading-none tracking-tight transition-colors duration-300 sm:text-4xl lg:text-6xl ${
                        isOpen ? 'text-white' : 'text-white/35'
                      }`}
                    >
                      {job.role}
                    </span>
                    <span className="mt-3 block font-mono text-xs tracking-[0.18em] text-white/50">@ {job.company.toUpperCase()}</span>
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 md:h-12 md:w-12 ${
                      isOpen ? 'rotate-45 border-neon text-neon' : 'border-white/20 text-white/50'
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-10 pl-8 md:grid-cols-[220px_1fr] md:pl-[4.5rem]">
                        <p className="font-mono text-xs tracking-[0.18em] text-neon">{job.dates.toUpperCase()}</p>
                        <div className="space-y-5">
                          <p className="max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{job.summary}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.tags.map((t) => (
                              <Pill key={t}>{t}</Pill>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
