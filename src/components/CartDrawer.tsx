"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { naira, site, waLink } from "@/lib/site";
import { useCart } from "./CartProvider";
import { ProductArt } from "./ProductArt";
import { CloseIcon, WhatsAppIcon } from "./Icons";

export function CartDrawer() {
  const { lines, total, open, setOpen, setQty, count } = useCart();
  const [city, setCity] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  const message = [
    "Hi Pleasure Plug 🔌 I'd like to order:",
    "",
    ...lines.map((l) => `• ${l.qty} × ${l.product.name} (${l.product.kind}) — ${naira(l.qty * l.product.price)}`),
    "",
    `Total: ${naira(total)}`,
    city ? `Deliver to: ${city}` : "Delivery location: ",
    "",
    "Please confirm availability & delivery fee 🙏",
  ].join("\n");

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-plum shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Your bag"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="font-serif text-lg italic text-mist">Your little secret</p>
            <h2 className="font-display text-2xl font-extrabold">Bag ({count})</h2>
          </div>
          <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-white/10" aria-label="Close bag">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <p className="font-display text-3xl font-bold">Empty… for now 👀</p>
            <p className="text-cream/60">Your bag is waiting for something that makes you blush.</p>
            <Link href="/shop" onClick={() => setOpen(false)} className="bg-heat mt-2 rounded-full px-6 py-3 font-bold text-white">
              Go shopping
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-6 py-5">
              {lines.map((l) => (
                <li key={l.slug} className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-3">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <ProductArt product={l.product} compact />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="font-display font-bold leading-tight">{l.product.name}</p>
                    <p className="text-xs text-cream/50">{l.product.kind}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-white/15">
                        <button onClick={() => setQty(l.slug, l.qty - 1)} className="h-8 w-8 text-lg" aria-label="Less">−</button>
                        <span className="w-6 text-center text-sm font-bold">{l.qty}</span>
                        <button onClick={() => setQty(l.slug, l.qty + 1)} className="h-8 w-8 text-lg" aria-label="More">+</button>
                      </div>
                      <span className="font-bold">{naira(l.qty * l.product.price)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-4 border-t border-white/10 px-6 py-5">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-cream/50">Where should we deliver?</span>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-cream outline-none focus:border-hot"
                >
                  <option value="">Choose your city</option>
                  {site.cities.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                  <option>Elsewhere in Nigeria</option>
                  <option>Outside Nigeria</option>
                </select>
              </label>
              <div className="flex items-end justify-between">
                <span className="text-cream/60">Subtotal</span>
                <span className="font-display text-3xl font-extrabold">{naira(total)}</span>
              </div>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-display text-lg font-bold text-ink transition hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Send order on WhatsApp
              </a>
              <p className="text-center text-xs text-cream/50">
                We confirm stock, delivery fee & payment in chat. Plain packaging, always. 🤐
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
