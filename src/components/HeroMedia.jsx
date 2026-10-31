import { motion } from 'framer-motion'

// Full-height cinematic backdrop. Pass `image` or `video` (from content.js) to replace
// the placeholder silhouette. Edges always fade into the black page.
export default function HeroMedia({ image, video, style }) {
  return (
    <motion.div style={style} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {video || image ? (
        // On large screens the media sits right of the headline; on small screens it fills the hero behind a scrim.
        <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
          {video ? (
            <video className="h-full w-full object-cover object-center" src={video} autoPlay muted loop playsInline />
          ) : (
            <img className="h-full w-full object-cover object-center" src={image} alt="" />
          )}
          <div className="absolute inset-0 bg-black/45 lg:bg-black/10" />
        </div>
      ) : (
        <Placeholder />
      )}

      {/* Edge fades into #000 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_75%_at_60%_45%,transparent_30%,#000_85%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/60 to-transparent" />
    </motion.div>
  )
}

function Placeholder() {
  return (
    <div className="absolute inset-0">
      {/* Spotlight */}
      <div className="absolute left-1/2 top-[8%] h-[85%] w-[70%] -translate-x-[30%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.13),transparent_65%)] blur-2xl" />
      {/* Suited silhouette, centered slightly right of the headline */}
      <svg
        viewBox="0 0 600 800"
        className="absolute bottom-0 left-1/2 h-[92%] -translate-x-[30%] md:-translate-x-[20%]"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="suit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a2a2a" />
            <stop offset="1" stopColor="#050505" />
          </linearGradient>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="0.25" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.75" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.18" />
          </linearGradient>
          <radialGradient id="head" cx="0.45" cy="0.35" r="0.7">
            <stop offset="0" stopColor="#3a3a3a" />
            <stop offset="1" stopColor="#0c0c0c" />
          </radialGradient>
        </defs>
        {/* Shoulders and suit */}
        <path d="M60 800 C 70 620, 120 540, 230 505 L 270 490 L 300 560 L 330 490 L 370 505 C 480 540, 530 620, 540 800 Z" fill="url(#suit)" />
        <path d="M60 800 C 70 620, 120 540, 230 505 L 270 490 L 300 560 L 330 490 L 370 505 C 480 540, 530 620, 540 800 Z" fill="url(#rim)" />
        {/* Shirt and tie */}
        <path d="M270 490 L 300 560 L 330 490 L 318 480 L 300 500 L 282 480 Z" fill="#d9d9d9" fillOpacity="0.55" />
        <path d="M292 508 L 308 508 L 314 700 L 300 724 L 286 700 Z" fill="#0a0a0a" />
        {/* Lapels */}
        <path d="M230 505 L 270 490 L 300 620 L 255 560 Z" fill="#111111" />
        <path d="M370 505 L 330 490 L 300 620 L 345 560 Z" fill="#111111" />
        {/* Neck and head */}
        <path d="M270 400 L 330 400 L 332 488 L 300 500 L 268 488 Z" fill="#141414" />
        <ellipse cx="300" cy="330" rx="78" ry="98" fill="url(#head)" />
        <path d="M222 320 C 222 240, 270 222, 302 222 C 350 222, 382 250, 378 318 C 360 270, 330 262, 300 262 C 262 262, 236 280, 222 320 Z" fill="#070707" />
      </svg>
      <span className="absolute bottom-[26%] right-6 hidden font-mono text-[10px] tracking-[0.2em] text-white/25 md:block">
        [ HERO IMAGE / VIDEO PLACEHOLDER ]
      </span>
    </div>
  )
}
