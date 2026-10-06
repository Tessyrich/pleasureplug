import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/category/[slug]">): Promise<Metadata> {
  const c = getCategory((await params).slug);
  return c ? { title: c.name, description: c.blurb } : {};
}

export default async function CategoryPage({ params }: PageProps<"/category/[slug]">) {
  const cat = getCategory((await params).slug);
  if (!cat) notFound();
  const list = products.filter((p) => p.category === cat.name);

  return (
    <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
      <PageHero eyebrow={`Category · ${list.length} toys`} title={<span className="text-heat">{cat.name}</span>}>
        <p className="font-serif text-2xl italic leading-snug text-cream/85">{cat.blurb}</p>
      </PageHero>

      <div className="mt-10 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
              c.slug === cat.slug ? "bg-heat border-transparent text-white" : "border-white/15 text-cream/70 hover:border-white/40 hover:text-cream"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
