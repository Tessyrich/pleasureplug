import type { Metadata } from "next";
import { categories } from "@/lib/products";
import { CategoryTile } from "@/components/CategoryTile";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Categories",
  description: "Shop by mood: toys for her, for him, couples, butt stuff, kink & play, BDSM kits and essentials.",
};

export default function CategoriesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
      <PageHero eyebrow="Shop by mood" title={<>What&apos;s your <span className="font-serif font-normal italic">vibe</span> <span className="text-heat">tonight?</span></>}>
        Seven categories, zero judgement. Pick a mood and we&apos;ll show you everything that fits it.
      </PageHero>
      <div className="mt-14 grid auto-rows-[18rem] gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[20rem]">
        {categories.map((c, i) => (
          <CategoryTile key={c.slug} cat={c} className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""} />
        ))}
      </div>
    </section>
  );
}
