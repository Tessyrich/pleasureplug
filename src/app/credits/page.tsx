import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { photos } from "@/lib/photos";

export const metadata: Metadata = { title: "Photo credits" };

export default function CreditsPage() {
  const credited = products.filter((p) => p.photo);
  return (
    <section className="mx-auto max-w-3xl px-4 pt-14 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold">Photo credits</h1>
      <p className="mt-4 text-cream/70">
        All product and lifestyle photos are free stock photos from Pexels, used under the{" "}
        <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer" className="underline hover:text-cream">
          Pexels licence
        </a>
        . Thank you to the photographers. The products we deliver may differ slightly in colour or shape.
      </p>
      <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {credited.map((p) => (
          <li key={p.slug} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
            <Link href={`/shop/${p.slug}`} className="font-bold hover:text-hot">
              {p.name} <span className="font-normal text-cream/50">— {p.kind}</span>
            </Link>
            <a href={p.photo} target="_blank" rel="noopener noreferrer" className="text-sm text-cream/60 underline hover:text-cream">
              Original photo on Pexels
            </a>
          </li>
        ))}
      </ul>
      <h2 className="mt-14 font-display text-3xl font-extrabold">Lifestyle photos</h2>
      <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {Object.values(photos).map((p) => (
          <li key={p.src} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-6">
            <span className="text-cream/80">{p.alt}</span>
            <a href={p.source} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm text-cream/60 underline hover:text-cream">
              Original photo on Pexels
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
