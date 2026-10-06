import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/journal";

export function SectionHead({ eyebrow, title, aside }: { eyebrow: string; title: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/40">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">{title}</h2>
      </div>
      {aside && <div className="max-w-sm text-cream/60">{aside}</div>}
    </div>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/journal/${post.slug}`} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-plum transition hover:-translate-y-1 hover:border-white/25">
      <div className="relative flex aspect-[16/10] items-end overflow-hidden p-6">
        <Image src={post.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${post.colors[1]}e6, ${post.colors[0]}33 60%, transparent)` }} />
        <span className="absolute left-5 top-5 z-10 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">{post.tag}</span>
        <p className="relative font-serif text-3xl italic leading-tight text-white drop-shadow">&ldquo;{post.dek.split(".")[0]}.&rdquo;</p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-extrabold leading-tight group-hover:text-hot">{post.title}</h3>
        <p className="mt-auto pt-4 text-sm text-cream/50">{post.minutes} min read</p>
      </div>
    </Link>
  );
}
