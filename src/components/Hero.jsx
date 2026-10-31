import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { hero, profile } from '../data/content.js'
import HeroMedia from './HeroMedia.jsx'
import { NeonDot } from './ui.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Scroll-linked motion: copy lifts and fades, backdrop slowly zooms and dims.
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-35%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const subOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.2])
  const barOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const bottomLinks = [
    { n: '01', label: 'RESUME', href: profile.resume ?? '#contact', external: Boolean(profile.resume) },
    { n: '02', label: 'CONTACT', href: '#contact' },
    { n: '03', label: 'LINKEDIN ↗', href: profile.linkedin, external: true },
  ]

  return (
    <section id="top" ref={ref} className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <HeroMedia image={hero.media.image} video={hero.media.video} style={{ scale: mediaScale, opacity: mediaOpacity }} />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="gutter relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center pb-28 pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
        >
          <NeonDot />
          <span className="font-mono text-[11px] tracking-[0.22em] text-white/80">{hero.badge}</span>
        </motion.div>

        <h1 className="font-display text-[11vw] font-extrabold uppercase leading-[0.88] tracking-[-0.04em] sm:text-[10vw] lg:text-[8.2vw] 2xl:text-[124px]">
          {[...hero.headline, hero.outlined].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className={`block ${i === hero.headline.length ? 'text-outline' : ''}`}
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.35 + i * 0.1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div style={{ opacity: subOpacity }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            {hero.subtext}
          </motion.p>
          {profile.resume && (
            <motion.a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05, ease }}
              className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/30 px-6 py-3 font-mono text-[11px] tracking-[0.18em] backdrop-blur-sm transition-all duration-300 hover:border-neon hover:bg-neon hover:text-black"
            >
              DOWNLOAD RESUME ↗
            </motion.a>
          )}
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div style={{ opacity: barOpacity }} className="absolute inset-x-0 bottom-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="gutter mx-auto flex w-full max-w-[1440px] items-end justify-between gap-6 pb-8"
      >
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {bottomLinks.map((l) => (
            <li key={l.n}>
              <a
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                className="group flex items-baseline gap-2 font-mono text-[11px] tracking-[0.18em] text-white/55 transition-colors hover:text-white"
              >
                <span className="text-white/30 transition-colors group-hover:text-neon">{l.n}</span>
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-neon transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a href="#about" className="hidden shrink-0 items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-white/55 hover:text-white sm:flex">
          SCROLL TO EXPLORE
          <span className="relative h-10 w-px overflow-hidden bg-white/15">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-scrollcue bg-neon" />
          </span>
        </a>
      </motion.div>
      </motion.div>
    </section>
  )
}
