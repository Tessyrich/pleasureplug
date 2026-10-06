import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/journal";
import { waLink } from "@/lib/site";
import { PostCard } from "@/components/Section";
import { WhatsAppIcon } from "@/components/Icons";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const p = getPost((await params).slug);
  return p ? { title: p.title, description: p.dek } : {};
}

export default async function PostPage({ params }: PageProps<"/journal/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <header className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 -top-20 h-[28rem] opacity-40 blur-[100px]"
          style={{ background: `radial-gradient(50% 60% at 50% 30%, ${post.colors[0]}, transparent)` }}
        />
        <div className="relative mx-auto max-w-3xl px-4 pt-14 text-center sm:px-6">
          <Link href="/journal" className="text-sm font-bold uppercase tracking-[0.2em] text-cream/50 hover:text-cream">
            ← Real Talk · {post.tag}
          </Link>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-6 font-serif text-2xl italic text-cream/75">{post.dek}</p>
          <p className="mt-4 text-sm text-cream/40">{post.minutes} min read</p>
        </div>
      </header>

      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem]">
          <Image src={post.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
        </div>
      </div>

      <article className="mx-auto max-w-2xl px-4 pt-14 text-lg leading-[1.8] text-cream/85 sm:px-6">
        {post.body.map((b, i) => {
          if (b.h) return <h2 key={i} className="mt-12 font-display text-3xl font-extrabold leading-tight text-cream">{b.h}</h2>;
          if (b.quote)
            return (
              <blockquote key={i} className="my-12 border-l-4 border-hot pl-6 font-serif text-3xl italic leading-snug text-cream sm:text-4xl">
                {b.quote}
              </blockquote>
            );
          if (b.list)
            return (
              <ul key={i} className="mt-5 space-y-3">
                {b.list.map((li) => (
                  <li key={li} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-hot" /> {li}
                  </li>
                ))}
              </ul>
            );
          return <p key={i} className="mt-5">{b.p}</p>;
        })}

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-plum p-8 text-center">
          <p className="font-serif text-2xl italic">Got a question this didn&apos;t answer?</p>
          <p className="mt-2 text-base text-cream/60">Ask us. Anonymous questions might even become a Sunday Confession 🤫</p>
          <a
            href={waLink(`Hi Pleasure Plug, I just read "${post.title}" and I have a question…`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-ink transition hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" /> Ask on WhatsApp
          </a>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <h2 className="font-display text-4xl font-extrabold">Keep reading</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {others.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
