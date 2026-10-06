import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopGrid } from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop toys",
  description: "Vibrators, suction toys, couples toys, plugs, kink kits and essentials. Order on WhatsApp, delivered discreetly.",
};

export default function ShopPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-hot/20 blur-[130px]" />
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/40">The toy box</p>
      <h1 className="mt-3 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-8xl">
        Go on, <span className="font-serif font-normal italic">have a</span> <span className="text-heat">look.</span>
      </h1>
      <p className="mt-5 max-w-xl text-lg text-cream/70">
        Everything here is body-safe, comes in plain packaging and can be at your door within minutes in major cities. Window shopping is allowed. Blushing is encouraged.
      </p>
      <div className="mt-12">
        <Suspense>
          <ShopGrid />
        </Suspense>
      </div>
    </section>
  );
}
