import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, profile } from '../data/content.js'
import { NeonDot } from './ui.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [sound, setSound] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const resumeHref = profile.resume ?? '#contact'

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="gutter mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6">
        <a href="#top" className="shrink-0 leading-none" aria-label={`${profile.name}, back to top`}>
          <span className="block font-display text-lg font-bold tracking-tight md:text-xl">{profile.name}.</span>
          <span className="mt-1.5 block font-mono text-[10px] tracking-[0.2em] text-white/45">{profile.credential}</span>
        </a>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative block px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-white/60 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-neon transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href={resumeHref}
            target={profile.resume ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-white/30 px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] transition-all duration-300 hover:border-neon hover:bg-neon hover:text-black sm:inline-block"
          >
            RESUME ↗
          </a>
          <button
            type="button"
            onClick={() => setSound((s) => !s)}
            aria-pressed={sound}
            className="hidden items-center gap-2 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-white/60 transition-colors hover:text-white md:flex"
          >
            {sound ? <NeonDot /> : <span className="h-2 w-2 rounded-full bg-white/25" />}
            {sound ? 'SOUND ON' : 'SOUND OFF'}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 lg:hidden"
          >
            <span className={`absolute h-px w-4 bg-white transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-1'}`} />
            <span className={`absolute h-px w-4 bg-white transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-1'}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
            aria-label="Mobile"
          >
            <ul className="gutter flex flex-col pb-8 pt-2">
              {navLinks.map((l, i) => (
                <motion.li key={l.href} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-3xl font-bold tracking-tight"
                  >
                    <span className="font-mono text-xs text-neon">0{i + 1}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-6 flex items-center justify-between">
                <a href={resumeHref} target={profile.resume ? '_blank' : undefined} rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-2.5 font-mono text-[11px] tracking-[0.18em]">
                  RESUME ↗
                </a>
                <button type="button" onClick={() => setSound((s) => !s)} className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white/60">
                  {sound ? <NeonDot /> : <span className="h-2 w-2 rounded-full bg-white/25" />}
                  {sound ? 'SOUND ON' : 'SOUND OFF'}
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
