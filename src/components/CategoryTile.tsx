import Image from "next/image";
import Link from "next/link";
import { categories, getProduct, products } from "@/lib/products";
import { ArrowIcon } from "./Icons";

type Cat = (typeof categories)[number];

export function CategoryTile({ cat, className = "" }: { cat: Cat; className?: string }) {
  const cover = getProduct(cat.cover);
  const count = products.filter((p) => p.category === cat.name).length;
  return (
    <Link href={`/category/${cat.slug}`} className={`group relative block overflow-hidden rounded-[1.75rem] ${className}`}>
      {cover?.image && (
        <Image src={cover.image} alt={cat.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{count} toys</p>
          <h3 className="mt-1 font-display text-3xl font-extrabold text-white sm:text-4xl">{cat.name}</h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-ink transition group-hover:bg-hot group-hover:text-white">
          <ArrowIcon className="h-5 w-5 -rotate-45 transition group-hover:rotate-0" />
        </span>
      </div>
    </Link>
  );
}
