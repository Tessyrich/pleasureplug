export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display font-extrabold tracking-tight leading-none ${className}`}>
      <svg viewBox="0 0 40 40" className="h-[1.6em] w-[1.6em] shrink-0" aria-hidden>
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff8a3d" />
            <stop offset="0.6" stopColor="#ff2e7e" />
            <stop offset="1" stopColor="#c026d3" />
          </linearGradient>
        </defs>
        {/* Plug: prongs, body, cable curling into a heart-ish loop */}
        <rect x="13" y="3" width="3.2" height="9" rx="1.6" fill="#e9c46a" />
        <rect x="23.8" y="3" width="3.2" height="9" rx="1.6" fill="#e9c46a" />
        <path d="M9 11h22v7a11 11 0 0 1-22 0v-7Z" fill="url(#logo-g)" />
        <path d="M20 29v3c0 3 2.5 5 5.5 5" stroke="url(#logo-g)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="16" cy="18" r="1.6" fill="#0c0609" opacity=".35" />
      </svg>
      <span className="text-[1.05em]">
        <span className="text-heat">PLEASURE</span>
        <span className="text-cream">PLUG</span>
      </span>
    </span>
  );
}
