"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

type Sort = "featured" | "low" | "high";

export function ShopGrid() {
  const [sort, setSort] = useState<Sort>("featured");

  let list = products;
  if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          <span className="bg-heat shrink-0 rounded-full px-4 py-2 text-sm font-bold text-white">All ({products.length})</span>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-cream/70 transition hover:border-white/40 hover:text-cream"
            >
              {c.name}
            </Link>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-cream/60">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-white/15 bg-plum px-4 py-2 font-semibold text-cream outline-none focus:border-hot"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: low → high</option>
            <option value="high">Price: high → low</option>
          </select>
        </label>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
