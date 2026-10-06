import type { Metadata } from "next";
import { posts } from "@/lib/journal";
import { PostCard } from "@/components/Section";

export const metadata: Metadata = {
  title: "Real Talk",
  description: "Honest, shame-free guides on toys, intimacy, couples, lube and pleasure.",
};

export default function JournalPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6">
      <div className="pointer-events-none absolute -top-40 left-0 h-96 w-96 rounded-full bg-violet/25 blur-[130px]" />
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/40">The journal</p>
      <h1 className="mt-3 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-8xl">
        Real <span className="text-heat">talk.</span>
      </h1>
      <p className="mt-5 max-w-xl font-serif text-2xl italic leading-snug text-cream/80">
        The sex-ed you should have gotten — written like a friend who knows things, not a textbook.
      </p>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
