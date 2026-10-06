"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useCart } from "./CartProvider";
import { BagIcon, CloseIcon } from "./Icons";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/categories", label: "Categories" },
  { href: "/this-week", label: "This Week" },
  { href: "/journal", label: "Real Talk" },
  { href: "/how-to-order", label: "How to Order" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close mobile menu on navigation
    setMenu(false);
  }, [path]);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled ? "mx-3 border border-white/10 bg-ink/70 backdrop-blur-xl sm:mx-6 xl:mx-auto" : "mx-3 sm:mx-6 xl:mx-auto"
        }`}
      >
        <Link href="/" className="text-lg sm:text-xl" aria-label="Pleasure Plug home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition hover:bg-white/10 ${
                path === l.href || path.startsWith(l.href + "/") ? "text-hot" : "text-cream/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="relative flex h-10 items-center gap-2 rounded-full bg-cream px-4 text-sm font-bold text-ink transition hover:scale-105"
            aria-label={`Open bag, ${count} items`}
          >
            <BagIcon className="h-4.5 w-4.5" />
            <span className="hidden sm:inline">Bag</span>
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-hot px-1 text-[11px] text-white">{count}</span>
          </button>
          <button
            onClick={() => setMenu((m) => !m)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
            aria-label="Menu"
            aria-expanded={menu}
          >
            {menu ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-cream" />
                <span className="block h-0.5 w-3.5 bg-hot" />
              </span>
            )}
          </button>
        </div>
      </div>

      {menu && (
        <nav className="mx-3 mt-2 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-plum/95 p-3 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-2xl px-4 py-3 font-display text-2xl font-bold hover:bg-white/5">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
