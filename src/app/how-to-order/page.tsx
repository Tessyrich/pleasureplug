import type { Metadata } from "next";
import { site, waLink } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "How to order",
  description: "Order on WhatsApp in three steps. Discreet packaging, same-day delivery in major Nigerian cities, nationwide and international shipping.",
};

const steps = [
  {
    t: "Pick your pleasure",
    d: "Browse the shop and add what you like to your bag — or tap “Order on WhatsApp” on any toy to order just that one. Not sure what you want? Skip straight to step 2 and tell us what you're curious about. We'll match you.",
  },
  {
    t: "Send it to our WhatsApp",
    d: "Hit “Send order on WhatsApp” in your bag. Your order lands in our chat as a ready-made message with every item and the total. Add your delivery address and we'll reply fast.",
  },
  {
    t: "Confirm & pay",
    d: "We confirm the toy is in stock, tell you the delivery fee for your area and share payment details. Ask us about pay-on-delivery where available.",
  },
  {
    t: "Unbox in private",
    d: "Your order arrives in a plain package — no logo, no description, no clues. Within minutes to a few hours in major cities. The only one who'll know is you 😉",
  },
];

export default function HowToOrderPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
        <PageHero eyebrow="Easy like Sunday morning" title={<>How to <span className="text-heat">order.</span></>} glow="bg-[#25D366]/20">
          No accounts, no checkout forms, no card details on a website. Just you, us and a WhatsApp chat — the way you already shop.
        </PageHero>

        <ol className="mt-14 grid gap-5 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.t} className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-plum p-8 sm:p-10">
              <span className="text-outline absolute -right-2 -top-8 font-display text-[10rem] font-extrabold leading-none">{i + 1}</span>
              <h2 className="relative mt-16 font-display text-3xl font-extrabold sm:text-4xl">{s.t}</h2>
              <p className="relative mt-3 max-w-md leading-relaxed text-cream/75">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-plum p-8 text-cream lg:col-span-2 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/60">Delivery</p>
            <h2 className="mt-2 font-display text-4xl font-extrabold">Within minutes in</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.cities.map((c) => (
                <span key={c} className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-display text-lg font-extrabold">
                  <span className="h-2 w-2 rounded-full bg-hot" /> {c}
                </span>
              ))}
            </div>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-5">
                <dt className="font-display text-xl font-extrabold">Elsewhere in Nigeria 🚚</dt>
                <dd className="mt-1 text-cream/80">Nationwide delivery available. Ask us for the timing and fee to your state.</dd>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <dt className="font-display text-xl font-extrabold">Outside Nigeria ✈️</dt>
                <dd className="mt-1 text-cream/80">Yes, we ship abroad too. Message us with your country for a quote.</dd>
              </div>
            </dl>
          </div>
          <div className="bg-heat flex flex-col rounded-[1.75rem] p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Our promise</p>
            <ul className="mt-4 mb-8 space-y-4 font-display text-xl font-bold">
              <li>🤐 Plain packaging, always</li>
              <li>🙈 Your chats stay private</li>
              <li>🧼 Sealed, body-safe products</li>
              <li>💬 Real people, zero judgement</li>
            </ul>
            <a
              href={waLink("Hi Pleasure Plug 👋 I'd like to place an order")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-display text-lg font-bold text-cream transition hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Start an order
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pt-24 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/50">FAQ</p>
          <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.95]">
            Still <span className="font-serif font-normal italic text-heat">wondering?</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Can&apos;t find your answer? <a href={waLink()} target="_blank" rel="noopener noreferrer" className="font-bold text-hot underline">Just ask us.</a>
          </p>
        </div>
        <Faq />
      </section>
    </>
  );
}
