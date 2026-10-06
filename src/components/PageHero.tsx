export function PageHero({ eyebrow, title, children, glow = "bg-hot/25" }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode; glow?: string }) {
  return (
    <div className="relative">
      <div className={`pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full blur-[130px] ${glow}`} />
      <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-cream/50">{eyebrow}</p>
      <h1 className="relative mt-3 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-8xl">{title}</h1>
      {children && <div className="relative mt-5 max-w-2xl text-lg text-cream/75">{children}</div>}
    </div>
  );
}
