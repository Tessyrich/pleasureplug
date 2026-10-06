import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-plum">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-hot/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="text-2xl" />
            <p className="mt-4 max-w-sm font-serif text-2xl italic leading-snug text-cream/80">
              You can&apos;t please everyone, but you can please yourself.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-ink transition hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" /> {site.phoneDisplay}
            </a>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40">Explore</h4>
            <ul className="mt-4 space-y-2 font-semibold">
              <li><Link href="/shop" className="hover:text-hot">Shop all toys</Link></li>
              <li><Link href="/categories" className="hover:text-hot">Categories</Link></li>
              <li><Link href="/category/bdsm-kits" className="hover:text-hot">BDSM kits</Link></li>
              <li><Link href="/this-week" className="hover:text-hot">This week at the Plug</Link></li>
              <li><Link href="/journal" className="hover:text-hot">Real Talk journal</Link></li>
              <li><Link href="/how-to-order" className="hover:text-hot">How to order & FAQ</Link></li>
              <li><Link href="/about" className="hover:text-hot">About us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40">We deliver to</h4>
            <p className="mt-4 leading-relaxed text-cream/70">{site.cities.join(" · ")}</p>
            <p className="mt-2 text-sm text-cream/50">+ nationwide & outside Nigeria ✈️</p>
          </div>
        </div>

        <p className="text-outline mt-16 select-none text-center font-display text-[17vw] font-extrabold leading-[0.8] tracking-tighter lg:text-[13rem]">
          PLEASURE
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>© Pleasure Plug. Strictly 18+.</p>
          <p>Discreet packaging · Plain billing · Zero judgement · <Link href="/credits" className="underline hover:text-cream">Photo credits</Link></p>
        </div>
      </div>
    </footer>
  );
}
