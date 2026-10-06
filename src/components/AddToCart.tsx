"use client";

import { naira, waLink } from "@/lib/site";
import type { Product } from "@/lib/products";
import { useCart } from "./CartProvider";
import { BagIcon, WhatsAppIcon } from "./Icons";

export function AddToCartButton({ slug, className = "" }: { slug: string; className?: string }) {
  const { add } = useCart();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        add(slug);
      }}
      className={`flex items-center justify-center gap-2 rounded-full bg-cream font-bold text-ink transition hover:scale-105 hover:bg-white ${className}`}
    >
      <BagIcon className="h-4 w-4" />
      Add to bag
    </button>
  );
}

export function BuyButtons({ product }: { product: Product }) {
  const msg = `Hi Pleasure Plug 🔌 I want the ${product.name} (${product.kind}) — ${naira(product.price)}. Is it available? I'm in: `;
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <AddToCartButton slug={product.slug} className="flex-1 px-6 py-4 text-lg" />
      <a
        href={waLink(msg)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-lg font-bold text-ink transition hover:scale-105"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Order on WhatsApp
      </a>
    </div>
  );
}
