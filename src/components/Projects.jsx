import { motion } from 'framer-motion'
import { projects } from '../data/content.js'
import { Pill, SectionHeading } from './ui.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-40">
      <div className="gutter mx-auto max-w-[1440px]">
        <SectionHeading index="02" label="PROJECTS" title="Selected work, measured." />
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const { title, company, description, metrics, tags, featured } = project
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.12, ease }}
      className={featured ? 'md:col-span-2' : ''}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-colors duration-500 hover:border-white/25 md:p-10"
      >
        {/* Neon glow on hover */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-neon/0 blur-3xl transition-colors duration-700 group-hover:bg-neon/10" />

        <div className="flex items-center justify-between gap-4 font-mono text-[11px] tracking-[0.18em] text-white/40">
          <span>
            <span className="text-neon">P.0{index + 1}</span> — {company.toUpperCase()}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 group-hover:border-neon group-hover:bg-neon group-hover:text-black">
            ↗
          </span>
        </div>

        <div className={`mt-10 grid gap-8 ${featured ? 'lg:grid-cols-[1.4fr_1fr] lg:items-end' : ''}`}>
          <div>
            <h3 className="text-balance font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl lg:text-5xl">{title}</h3>
            <p className="mt-5 max-w-xl leading-relaxed text-white/55">{description}</p>
          </div>
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {metrics.map((m) => (
              <div key={m.label}>
                <dd className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{m.value}</dd>
                <dt className="mt-1 text-sm text-white/45">{m.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-10">
          {tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </motion.div>
    </motion.article>
  )
}
