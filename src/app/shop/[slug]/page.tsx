import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getProduct, products } from "@/lib/products";
import { naira } from "@/lib/site";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { BuyButtons } from "@/components/AddToCart";
import { SparkIcon } from "@/components/Icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? { title: `${p.name} — ${p.kind}`, description: p.hook } : {};
}

export default async function ProductPage({ params }: PageProps<"/shop/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const more = related.length ? related : products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <nav className="text-sm text-cream/50">
          <Link href="/shop" className="hover:text-cream">Shop</Link>
          <span className="mx-2">/</span>
          <Link href={`/category/${categories.find((c) => c.name === product.category)!.slug}`} className="hover:text-cream">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-cream">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10">
              <ProductArt product={product} />
              {product.badge && (
                <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold backdrop-blur">
                  {product.badge}
                </span>
              )}
            </div>
            {product.photo && (
              <p className="mt-3 text-xs text-cream/40">
                Lifestyle photo via{" "}
                <a href={product.photo} target="_blank" rel="noopener noreferrer" className="underline hover:text-cream">
                  Pexels
                </a>
                . Actual product may vary slightly in colour.
              </p>
            )}
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hot">{product.kind}</p>
            <h1 className="mt-2 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-8xl">{product.name}</h1>
            <p className="mt-6 font-serif text-3xl italic leading-snug text-cream/90">&ldquo;{product.hook}&rdquo;</p>
            <p className="mt-8 font-display text-5xl font-extrabold">{naira(product.price)}</p>
            <div className="mt-6">
              <BuyButtons product={product} />
            </div>
            <p className="mt-4 text-sm text-cream/50">🤐 Plain packaging · 🛵 Same-day in major cities · 💬 Questions? We reply fast</p>

            <div className="mt-12 space-y-5 text-lg leading-relaxed text-cream/80">
              {product.story.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-plum p-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40">What you get</h2>
                <ul className="mt-4 space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <SparkIcon className="h-3 w-3 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-plum p-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40">Perfect for</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.goodFor.map((g) => (
                    <span key={g} className="rounded-full border border-white/15 px-3 py-1.5 text-sm">{g}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-heat mt-4 rounded-3xl p-7 text-white">
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/80">Pro tip from the Plug 💡</p>
              <p className="mt-3 font-serif text-2xl italic leading-snug">{product.tip}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6">
        <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
          You might <span className="font-serif font-normal italic text-heat">also</span> like…
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {more.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
