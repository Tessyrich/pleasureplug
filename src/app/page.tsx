import Image from "next/image";
import Link from "next/link";
import { categories, getProduct, products } from "@/lib/products";
import { posts } from "@/lib/journal";
import { photos } from "@/lib/photos";
import { naira, site, waLink } from "@/lib/site";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { Marquee } from "@/components/Marquee";
import { WeekStrip } from "@/components/WeekStrip";
import { Faq } from "@/components/Faq";
import { BuyButtons } from "@/components/AddToCart";
import { ArrowIcon, SparkIcon, WhatsAppIcon } from "@/components/Icons";
import { PostCard, SectionHead } from "@/components/Section";

export default function Home() {
  const spotlight = getProduct("mary-sucker-vibrator")!;
  const heroTrio = ["the-rabbit", "rose-sucker", "mary-sucker-vibrator"].map((s) => getProduct(s)!);
  const bestsellers = products.filter((p) => ["rose-sucker", "the-rabbit", "pocket-bullet", "bdsm-kit"].includes(p.slug));

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative -mt-[4.5rem] overflow-hidden pt-28 sm:pt-32">
        <div className="animate-drift pointer-events-none absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-hot/25 blur-[140px]" />
        <div className="animate-drift-slow pointer-events-none absolute -right-40 top-40 h-[30rem] w-[30rem] rounded-full bg-flame/25 blur-[140px]" />
        <div className="animate-drift pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet/25 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
              </span>
              Your plug is online · Delivering now
            </p>

            <h1 className="mt-6 font-display text-[3.4rem] font-extrabold leading-[0.88] tracking-tight sm:text-7xl lg:text-[6.5rem]">
              You can&apos;t please <span className="font-serif font-normal italic text-cream/70">everyone.</span>
              <br />
              <span className="text-heat">Please yourself.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75">
              Hey, we&apos;re Pleasure Plug 👋 We sell toys that make you forget your phone exists, and we talk about sex the way your friends
              should have — honestly, warmly and with zero shame.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="bg-heat group inline-flex items-center gap-2 rounded-full px-7 py-4 font-display text-lg font-bold text-white transition hover:scale-105">
                Shop the toys <ArrowIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <a
                href={waLink("Hi Pleasure Plug 👋 I need some recommendations…")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-display text-lg font-bold backdrop-blur transition hover:bg-white/10"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Ask us anything
              </a>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                ["9+", "cities, same day"],
                ["100%", "plain packaging"],
                ["0", "judgement. ever."],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-extrabold text-heat">{n}</dt>
                  <dd className="text-xs leading-snug text-cream/60">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Collage */}
          <div className="relative mx-auto h-[28rem] w-full max-w-md sm:h-[34rem] lg:max-w-none">
            {heroTrio.map((p, i) => {
              const pos = [
                "-left-2 top-16 w-[44%] [--r:-10deg]",
                "left-[28%] top-0 z-10 w-[46%] [--r:2deg]",
                "-right-2 top-32 w-[44%] [--r:10deg]",
              ][i];
              return (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className={`animate-float group absolute aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl shadow-black/60 ${pos}`}
                  style={{ animationDelay: `${i * -2}s`, rotate: "var(--r)" }}
                >
                  <ProductArt product={p} />
                  <span className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-ink/70 px-3 py-1.5 text-xs font-bold backdrop-blur">
                    {p.name} <span className="text-gold">{naira(p.price)}</span>
                  </span>
                </Link>
              );
            })}
            <span className="wiggle absolute bottom-16 left-2 z-20 rotate-[-6deg] rounded-full bg-gold px-4 py-2 font-display text-sm font-extrabold text-ink shadow-lg [--r:-6deg] sm:bottom-24">
              Delivered in minutes 🛵
            </span>
            <span className="wiggle absolute bottom-2 right-4 z-20 rotate-[5deg] rounded-full bg-cream px-4 py-2 font-display text-sm font-extrabold text-ink shadow-lg [--r:5deg] sm:bottom-10">
              Nobody will know 🤐
            </span>
          </div>
        </div>
      </section>

      {/* ───────── MARQUEE ───────── */}
      <div className="overflow-hidden py-6">
      <div className="relative z-10 -rotate-2 scale-105 border-y border-white/10">
        <Marquee
          className="bg-heat py-4 font-display text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl"
          items={["Discreet packaging", "Same-day delivery", "Body-safe toys", "Real talk, no shame", "Nationwide & abroad", "Order on WhatsApp"]}
        />
      </div>
      </div>

      {/* ───────── THIS WEEK ───────── */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <SectionHead
          eyebrow="Every day, something new"
          title={<>This week at <span className="text-heat">the Plug</span></>}
          aside={
            <>
              Each day on our WhatsApp status has its own flavour. Save <b className="text-cream">{site.phoneDisplay}</b> so you never miss a deal.
            </>
          }
        />
        <div className="mt-10">
          <WeekStrip />
        </div>
      </section>

      {/* ───────── MOOD INDEX ───────── */}
      <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6">
        <div className="rounded-[2.5rem] border border-white/10 bg-plum px-5 py-12 text-cream sm:px-12 sm:py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/60">Shop by mood</p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
                What are you <span className="font-serif font-normal italic">in the mood</span> for?
              </h2>
            </div>
            <Link href="/categories" className="inline-flex items-center gap-2 font-bold text-hot">
              All categories <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-10 border-t border-white/10">
            {categories.map((c, i) => {
              const cover = getProduct(c.cover);
              return (
                <li key={c.name}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="group relative flex items-center gap-4 overflow-hidden border-b border-white/10 py-5 sm:gap-8 sm:py-6"
                  >
                    <span
                      className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-x-100"
                      style={{ background: `linear-gradient(90deg, ${c.colors[0]}, ${c.colors[1]})` }}
                    />
                    <span className="relative hidden w-8 font-display text-sm font-bold text-cream/50 group-hover:text-white/70 sm:block">0{i + 1}</span>
                    {cover?.image && (
                      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20 sm:h-20 sm:w-20">
                        <Image src={cover.image} alt="" fill sizes="80px" className="object-cover transition duration-500 group-hover:scale-110" />
                      </span>
                    )}
                    <span className="relative flex-1 font-display text-3xl font-extrabold tracking-tight transition group-hover:translate-x-2 group-hover:text-white sm:text-6xl">
                      {c.name}
                    </span>
                    <span className="relative hidden max-w-xs text-sm text-cream/70 group-hover:text-white/90 md:block">{c.blurb}</span>
                    <ArrowIcon className="relative h-7 w-7 shrink-0 -rotate-45 transition group-hover:rotate-0 group-hover:text-white" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ───────── SPOTLIGHT ───────── */}
      <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6">
        <div className="relative grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-plum lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-auto">
            <ProductArt product={spotlight} />
            <svg viewBox="0 0 200 200" className="animate-spin-slow absolute right-6 top-6 h-28 w-28 sm:h-36 sm:w-36" aria-hidden>
              <defs>
                <path id="circ" d="M100 100 m -78 0 a 78 78 0 1 1 156 0 a 78 78 0 1 1 -156 0" />
              </defs>
              <text fill="#e9c46a" fontSize="19" fontWeight="800" letterSpacing="5" fontFamily="var(--font-bricolage)">
                <textPath href="#circ">MAGIC & MONEY MONDAY ✦ SPOTLIGHT ✦</textPath>
              </text>
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-gold">
              <SparkIcon className="h-4 w-4" /> This week&apos;s spotlight
            </p>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.9] sm:text-7xl">
              Meet <span className="text-heat">{spotlight.name}.</span>
            </h2>
            <p className="mt-2 font-serif text-2xl italic text-cream/70">{spotlight.kind}</p>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">{spotlight.hook}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {spotlight.features.slice(0, 4).map((f) => (
                <li key={f} className="rounded-full border border-white/15 px-3 py-1.5 text-sm">{f}</li>
              ))}
            </ul>
            <p className="mt-8 font-display text-4xl font-extrabold">{naira(spotlight.price)}</p>
            <div className="mt-6">
              <BuyButtons product={spotlight} />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── BEST SELLERS ───────── */}
      <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6">
        <SectionHead
          eyebrow="Fan favourites"
          title={<>The ones people <span className="font-serif font-normal italic">keep</span> coming back for</>}
          aside={
            <Link href="/shop" className="inline-flex items-center gap-2 font-bold text-hot">
              See all {products.length} toys <ArrowIcon className="h-4 w-4" />
            </Link>
          }
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* ───────── MANIFESTO (full-bleed photo) ───────── */}
      <section className="relative mt-32 overflow-hidden">
        <Image src={photos.coupleHands.src} alt={photos.coupleHands.alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-40">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/60">Real talk</p>
          <p className="mt-6 max-w-4xl font-serif text-3xl leading-[1.15] sm:text-5xl lg:text-6xl">
            We grew up being told pleasure was <span className="line-through decoration-hot decoration-4">something to hide</span>. Abeg. Your body is
            yours. Your pleasure is <span className="text-heat font-display font-extrabold not-italic">your business</span> — and we&apos;re here to make
            that business <em>very</em> good.
          </p>
          <p className="mt-8 max-w-xl text-lg text-cream/80">No shame, no lectures, just good toys and honest answers from people who actually get it.</p>
        </div>
      </section>

      {/* ───────── MOSAIC ───────── */}
      <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6">
        <SectionHead
          eyebrow="Intimacy, our way"
          title={<>Pleasure looks <span className="font-serif font-normal italic text-heat">good</span> on you</>}
          aside="Solo nights, date nights, lazy Sunday mornings. Whatever your kind of intimacy looks like — we're here for it."
        />
        <div className="mt-10 grid auto-rows-[12rem] grid-cols-2 gap-3 sm:auto-rows-[16rem] sm:gap-4 md:grid-cols-4">
          {[
            { p: photos.coupleWhite, c: "row-span-2" },
            { p: photos.womanBed, c: "" },
            { p: photos.coupleTender, c: "" },
            { p: photos.coupleLaugh, c: "row-span-2" },
            { p: photos.candles, c: "" },
            { p: photos.satin, c: "" },
          ].map(({ p, c }) => (
            <div key={p.src} className={`group relative overflow-hidden rounded-[1.5rem] ${c}`}>
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* ───────── HOW ───────── */}
      <section id="how" className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-28 sm:px-6">
        <SectionHead
          eyebrow="Easy like Sunday morning"
          title={<>How to get your <span className="text-heat">goodies</span></>}
          aside={
            <Link href="/how-to-order" className="inline-flex items-center gap-2 font-bold text-hot">
              Full ordering guide <ArrowIcon className="h-4 w-4" />
            </Link>
          }
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Pick your pleasure", "Browse, add to your bag, or just tap 'Order on WhatsApp' on any toy. Not sure? Ask us — we'll match you."],
            ["Slide into our DMs", "Your order lands in our WhatsApp as a ready-made message. We confirm stock, delivery fee and payment in chat."],
            ["Unbox in private", "Plain package, no labels, no clues. Delivered within minutes in major cities. The only one who'll know is you 😉"],
          ].map(([t, d], i) => (
            <li key={t} className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-plum p-8">
              <span className="text-outline absolute -right-2 -top-6 font-display text-[9rem] font-extrabold leading-none">{i + 1}</span>
              <h3 className="relative mt-16 font-display text-3xl font-extrabold">{t}</h3>
              <p className="relative mt-3 leading-relaxed text-cream/70">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────── CITIES ───────── */}
      <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-plum p-8 text-cream sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-hot/40 blur-[90px]" />
          <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-cream/60">Delivered within minutes in</p>
          <div className="relative mt-6 flex flex-wrap gap-3">
            {site.cities.map((c) => (
              <span key={c} className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-display text-xl font-extrabold sm:text-3xl">
                <span className="h-2.5 w-2.5 rounded-full bg-hot" /> {c}
              </span>
            ))}
          </div>
          <p className="relative mt-8 max-w-xl font-serif text-2xl italic">
            Not on the list? We deliver nationwide and outside Nigeria too ✈️ Just ask.
          </p>
        </div>
      </section>

      {/* ───────── JOURNAL ───────── */}
      <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6">
        <SectionHead
          eyebrow="The Real Talk journal"
          title={<>Things nobody <span className="font-serif font-normal italic">taught</span> you</>}
          aside={
            <Link href="/journal" className="inline-flex items-center gap-2 font-bold text-hot">
              Read all <ArrowIcon className="h-4 w-4" />
            </Link>
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" className="mx-auto grid max-w-7xl scroll-mt-24 gap-10 px-4 pt-28 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/40">FAQ</p>
          <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.95]">
            The questions you were <span className="font-serif font-normal italic text-heat">too shy</span> to ask
          </h2>
        </div>
        <Faq />
      </section>

      {/* ───────── CTA ───────── */}
      <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6">
        <a
          href={waLink("Hi Pleasure Plug 👋")}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-20"
        >
          <Image src={photos.coupleSilhouette.src} alt="" fill sizes="100vw" className="object-cover transition duration-1000 group-hover:scale-105" />
          <div className="bg-heat absolute inset-0 opacity-80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <p className="relative font-serif text-2xl italic text-white/90">Still thinking about it?</p>
          <p className="relative mt-2 font-display text-5xl font-extrabold leading-[0.9] text-white sm:text-8xl">
            Slide into
            <br />
            our DMs.
          </p>
          <span className="relative mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-display text-lg font-bold text-cream transition group-hover:scale-105">
            <WhatsAppIcon className="h-6 w-6 text-[#25D366]" /> {site.phoneDisplay}
          </span>
        </a>
      </section>
    </>
  );
}
