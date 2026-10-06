import { SparkIcon } from "./Icons";

export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>{t}</span>
            <SparkIcon className="h-4 w-4 shrink-0 text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
