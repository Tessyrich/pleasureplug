import Link from "next/link";
import { naira } from "@/lib/site";
import type { Product } from "@/lib/products";
import { ProductArt } from "./ProductArt";
import { AddToCartButton } from "./AddToCart";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-plum transition duration-500 hover:-translate-y-1 hover:border-white/25"
    >
      <div className="relative aspect-[4/5]">
        <ProductArt product={product} />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur">
            {product.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-cream px-3 py-1 font-display text-sm font-extrabold text-ink">
          {naira(product.price)}
        </span>
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <AddToCartButton slug={product.slug} className="w-full py-3 text-sm" />
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-hot">{product.kind}</p>
        <h3 className="mt-1 font-display text-2xl font-extrabold">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-cream/60">{product.hook}</p>
      </div>
    </Link>
  );
}
