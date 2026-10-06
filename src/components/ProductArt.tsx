import Image from "next/image";
import type { Product, Shape } from "@/lib/products";

/**
 * Stylised product illustration. Swap for a real photo by setting `image` on the product.
 */
export function ProductArt({ product, compact = false }: { product: Product; compact?: boolean }) {
  const [a, b] = product.colors;
  const id = `g-${product.slug}`;

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: `radial-gradient(120% 90% at 30% 20%, ${a}33 0%, transparent 60%), radial-gradient(100% 80% at 80% 100%, ${b}55 0%, transparent 60%), #160911` }}
    >
      {product.image ? (
        <Image
          src={product.image}
          alt={`${product.name} — ${product.kind}`}
          fill
          className={product.imageFit === "contain" ? "bg-white object-contain p-4" : "object-cover"}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" role="img" aria-label={`${product.name} illustration`}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={a} />
              <stop offset="1" stopColor={b} />
            </linearGradient>
            <linearGradient id={`${id}-u`} gradientUnits="userSpaceOnUse" x1="40" y1="30" x2="170" y2="180">
              <stop offset="0" stopColor={a} />
              <stop offset="1" stopColor={b} />
            </linearGradient>
            <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fff1c1" />
              <stop offset=".5" stopColor="#e9c46a" />
              <stop offset="1" stopColor="#a16207" />
            </linearGradient>
            <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>
          <circle cx="100" cy="105" r="55" fill={a} opacity=".45" filter={`url(#${id}-blur)`} />
          <g className={compact ? "" : "origin-center transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"}>
            {shapes[product.shape](id)}
          </g>
          {!compact && (
            <g fill="#fff">
              <path d="M40 40c.6 5 2.5 7 8 8-5.5 1-7.4 3-8 8-.6-5-2.5-7-8-8 5.5-1 7.4-3 8-8Z" opacity=".7" />
              <path d="M165 150c.4 3.5 1.8 5 5.5 5.5-3.7.7-5.1 2-5.5 5.5-.4-3.5-1.8-4.8-5.5-5.5 3.7-.5 5.1-2 5.5-5.5Z" opacity=".5" />
            </g>
          )}
        </svg>
      )}
    </div>
  );
}

const gloss = { stroke: "#fff", strokeOpacity: 0.35, strokeLinecap: "round" as const, fill: "none" };

const shapes: Record<Shape, (id: string) => React.ReactNode> = {
  suction: (id) => (
    <g>
      <path d="M62 58 C 56 130, 112 160, 150 108" stroke={`url(#${id}-u)`} strokeWidth="34" strokeLinecap="round" fill="none" />
      <circle cx="62" cy="56" r="9" fill="#160911" opacity=".55" />
      <circle cx="62" cy="56" r="4.5" fill="#000" opacity=".5" />
      <path d="M60 84 C 60 118, 92 140, 122 128" {...gloss} strokeWidth="5" />
      <circle cx="104" cy="122" r="3" fill="#fff" opacity=".6" />
      <circle cx="116" cy="118" r="3" fill="#fff" opacity=".6" />
    </g>
  ),
  rabbit: (id) => (
    <g>
      <rect x="84" y="150" width="32" height="26" rx="10" fill={`url(#${id}-gold)`} />
      <path d="M100 152 L 100 72" stroke={`url(#${id}-u)`} strokeWidth="32" strokeLinecap="round" />
      <path d="M108 140 C 128 136, 136 120, 138 104" stroke={`url(#${id}-u)`} strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M138 104 l -8 -16 M138 104 l 8 -14" stroke={`url(#${id}-u)`} strokeWidth="8" strokeLinecap="round" />
      <path d="M92 80 L 92 130" {...gloss} strokeWidth="5" />
      <path d="M86 92 h28 M86 104 h28" stroke="#000" strokeOpacity=".12" strokeWidth="3" />
    </g>
  ),
  glass: (id) => (
    <g transform="rotate(-28 100 100)">
      <path d="M100 30 C 112 30, 112 60, 104 75 C 116 82, 116 100, 104 108 C 116 116, 116 134, 104 140 L 104 172 C 104 178, 96 178, 96 172 L 96 140 C 84 134, 84 116, 96 108 C 84 100, 84 82, 96 75 C 88 60, 88 30, 100 30 Z" fill={`url(#${id})`} opacity=".55" stroke="#fff" strokeOpacity=".7" strokeWidth="1.5" />
      <path d="M95 40 C 92 50, 93 62, 96 70" {...gloss} strokeWidth="3" strokeOpacity=".8" />
      <path d="M92 86 C 90 92, 90 98, 93 102" {...gloss} strokeWidth="2.5" strokeOpacity=".7" />
    </g>
  ),
  bullet: (id) => (
    <g transform="rotate(-35 100 100)">
      <rect x="82" y="40" width="36" height="100" rx="18" fill={`url(#${id})`} />
      <rect x="82" y="128" width="36" height="34" rx="8" fill={`url(#${id}-gold)`} />
      <path d="M92 56 L 92 118" {...gloss} strokeWidth="5" />
      <circle cx="100" cy="146" r="4" fill="#160911" opacity=".4" />
    </g>
  ),
  wand: (id) => (
    <g transform="rotate(-20 100 100)">
      <rect x="88" y="78" width="24" height="98" rx="12" fill={`url(#${id})`} />
      <rect x="92" y="74" width="16" height="16" rx="4" fill={`url(#${id}-gold)`} />
      <circle cx="100" cy="52" r="30" fill={`url(#${id})`} />
      <path d="M82 40 a 22 22 0 0 1 16 -14" {...gloss} strokeWidth="5" />
      <circle cx="100" cy="128" r="4" fill="#fff" opacity=".5" />
      <circle cx="100" cy="142" r="4" fill="#fff" opacity=".5" />
    </g>
  ),
  egg: (id) => (
    <g>
      <ellipse cx="82" cy="104" rx="30" ry="40" fill={`url(#${id})`} />
      <path d="M68 86 a 18 22 0 0 1 12 -14" {...gloss} strokeWidth="5" />
      <path d="M82 144 C 86 160, 104 160, 112 150" stroke="#e9c46a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="124" y="104" width="34" height="56" rx="14" fill="#1f0f18" stroke={`url(#${id}-gold)`} strokeWidth="3" />
      <circle cx="141" cy="122" r="7" fill={`url(#${id}-gold)`} />
      <circle cx="141" cy="144" r="4" fill="#fff" opacity=".4" />
      <g stroke="#fff" strokeOpacity=".6" fill="none" strokeWidth="2.5" strokeLinecap="round">
        <path d="M128 84 a 16 16 0 0 1 26 0" />
        <path d="M120 74 a 28 28 0 0 1 42 0" opacity=".6" />
      </g>
    </g>
  ),
  ring: (id) => (
    <g>
      <circle cx="100" cy="112" r="40" fill="none" stroke={`url(#${id}-u)`} strokeWidth="18" />
      <rect x="82" y="50" width="36" height="34" rx="14" fill={`url(#${id}-gold)`} />
      <path d="M68 96 a 36 36 0 0 1 14 -18" {...gloss} strokeWidth="5" />
      <g stroke="#fff" strokeOpacity=".5" fill="none" strokeWidth="2.5" strokeLinecap="round">
        <path d="M74 50 q -6 8 0 16" />
        <path d="M126 50 q 6 8 0 16" />
      </g>
    </g>
  ),
  cuffs: (id) => (
    <g>
      <circle cx="68" cy="112" r="28" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="14" />
      <circle cx="136" cy="112" r="28" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="14" />
      <g fill="none" stroke={`url(#${id}-gold)`} strokeWidth="4">
        <ellipse cx="94" cy="90" rx="6" ry="4" />
        <ellipse cx="102" cy="88" rx="6" ry="4" />
        <ellipse cx="110" cy="90" rx="6" ry="4" />
      </g>
      <path d="M50 100 a 22 22 0 0 1 10 -12" {...gloss} strokeWidth="4" />
      <path d="M118 100 a 22 22 0 0 1 10 -12" {...gloss} strokeWidth="4" />
    </g>
  ),
  plug: (id) => (
    <g>
      {[
        { x: 55, s: 0.7 },
        { x: 100, s: 0.9 },
        { x: 148, s: 1.1 },
      ].map(({ x, s }) => (
        <g key={x} transform={`translate(${x} 160) scale(${s})`}>
          <ellipse cx="0" cy="0" rx="22" ry="6" fill={`url(#${id}-gold)`} />
          <rect x="-5" y="-16" width="10" height="16" fill={`url(#${id})`} />
          <path d="M0 -70 C 18 -50, 18 -24, 0 -16 C -18 -24, -18 -50, 0 -70 Z" fill={`url(#${id})`} />
          <path d="M-8 -50 C -10 -40, -8 -30, -4 -26" {...gloss} strokeWidth="3" />
        </g>
      ))}
    </g>
  ),
  stroker: (id) => (
    <g transform="rotate(-15 100 100)">
      <rect x="70" y="40" width="60" height="120" rx="26" fill={`url(#${id})`} />
      <ellipse cx="100" cy="44" rx="22" ry="8" fill="#160911" opacity=".6" />
      <ellipse cx="100" cy="44" rx="10" ry="3.5" fill="#000" opacity=".6" />
      {[70, 88, 106, 124].map((y) => (
        <path key={y} d={`M72 ${y} q 28 8 56 0`} stroke="#000" strokeOpacity=".15" strokeWidth="3" fill="none" />
      ))}
      <path d="M80 60 L 80 140" {...gloss} strokeWidth="5" />
    </g>
  ),
  bottle: (id) => (
    <g>
      <rect x="92" y="34" width="16" height="14" rx="3" fill={`url(#${id}-gold)`} />
      <rect x="104" y="36" width="22" height="6" rx="3" fill={`url(#${id}-gold)`} />
      <rect x="88" y="46" width="24" height="16" rx="4" fill="#f7ede4" opacity=".9" />
      <rect x="66" y="60" width="68" height="112" rx="22" fill={`url(#${id})`} opacity=".9" />
      <rect x="76" y="100" width="48" height="38" rx="6" fill="#fff" opacity=".9" />
      <text x="100" y="124" textAnchor="middle" fontSize="11" fontWeight="800" fill="#160911" fontFamily="system-ui">PP</text>
      <path d="M76 74 L 76 160" {...gloss} strokeWidth="5" />
    </g>
  ),
  kit: (id) => (
    <g>
      <rect x="48" y="78" width="104" height="86" rx="10" fill={`url(#${id})`} />
      <rect x="40" y="62" width="120" height="26" rx="8" fill={`url(#${id})`} />
      <rect x="40" y="62" width="120" height="26" rx="8" fill="#fff" opacity=".12" />
      <rect x="93" y="62" width="14" height="102" fill={`url(#${id}-gold)`} />
      <path d="M100 62 C 80 30, 60 48, 100 62 C 140 48, 120 30, 100 62 Z" fill={`url(#${id}-gold)`} />
      <path d="M58 100 L 58 150" {...gloss} strokeWidth="5" />
    </g>
  ),
  prostate: (id) => (
    <g>
      <path d="M86 40 C 70 70, 76 110, 98 132 C 112 146, 132 150, 150 140" stroke={`url(#${id}-u)`} strokeWidth="26" strokeLinecap="round" fill="none" />
      <path d="M98 132 C 96 150, 82 162, 64 160" stroke={`url(#${id}-u)`} strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="86" cy="40" r="16" fill={`url(#${id})`} />
      <path d="M78 64 C 74 86, 78 104, 90 118" {...gloss} strokeWidth="5" />
    </g>
  ),
};
