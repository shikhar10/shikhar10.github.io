import { motion } from 'framer-motion'

// Small shared building blocks.

export function NeonDot({ className = '', pulse = true }) {
  return (
    <span className={`relative inline-flex h-2 w-2 ${className}`}>
      {pulse && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />}
      <span className="relative inline-flex h-2 w-2 rounded-full bg-neon shadow-neon" />
    </span>
  )
}

export function Pill({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/70 transition-colors duration-300 group-hover:border-neon/40 ${className}`}
    >
      {children}
    </span>
  )
}

export function Reveal({ children, delay = 0, y = 32, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ index, label, title }) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-white/50">
        <span className="text-neon">{index}</span>
        <span className="h-px w-10 bg-white/20" />
        <span>{label}</span>
      </div>
      <h2 className="max-w-4xl text-balance font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        {title}
      </h2>
    </Reveal>
  )
}
