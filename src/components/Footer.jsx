import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="gutter mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.18em] text-white/40">
        <span>© 2026 {profile.name.toUpperCase()}</span>
        <span>{profile.credential}</span>
        <a href="#top" className="transition-colors hover:text-neon">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  )
}
