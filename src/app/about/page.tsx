import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/site";
import { photos } from "@/lib/photos";
import { PageHero } from "@/components/PageHero";
import { WhatsAppIcon, ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About us",
  description: "Pleasure Plug is Nigeria's plug for toys, tips and real talk about pleasure — discreet, body-safe and judgement-free.",
};

const values = [
  { e: "🤐", t: "Discreet, always", d: "Plain packaging, private chats, no clues. What happens in your bag stays in your bag." },
  { e: "🧪", t: "Body-safe only", d: "Silicone, glass and quality materials. If we wouldn't use it ourselves, it doesn't get on the shelf." },
  { e: "💬", t: "Real talk", d: "We answer the questions you were too shy to Google. Honestly, warmly, and without a lecture." },
  { e: "🫶", t: "For everybody", d: "Single, married, curious, experienced, him, her, them. Pleasure isn't a club with a dress code." },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
        <PageHero eyebrow="About Pleasure Plug" title={<>Your <span className="font-serif font-normal italic">friendly</span> <span className="text-heat">plug.</span></>} />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
            <Image src={photos.coupleWhite.src} alt={photos.coupleWhite.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-cream/85">
            <p className="font-serif text-3xl italic leading-snug text-cream">
              We started Pleasure Plug because buying a toy in Nigeria shouldn&apos;t feel like a secret mission.
            </p>
            <p>
              No awkward market stalls. No dodgy sellers. No guessing if what arrives is safe. Just good toys, delivered fast and discreetly, by people
              who will actually answer your questions.
            </p>
            <p>
              Most of our work happens on WhatsApp — that&apos;s where you ask, we recommend, and your order gets sorted in minutes. Every day on our status
              there&apos;s something new: spotlights, how-tos, deals and anonymous confessions.
            </p>
            <p>
              Because pleasure is part of wellness. Your body is yours. And knowing what you like isn&apos;t something to be ashamed of — it&apos;s
              something to celebrate.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/shop" className="bg-heat inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-bold text-white transition hover:scale-105">
                Shop the toys <ArrowIcon className="h-4 w-4" />
              </Link>
              <a
                href={waLink("Hi Pleasure Plug 👋")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-bold transition hover:bg-white/10"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Say hi
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <h2 className="font-display text-4xl font-extrabold sm:text-6xl">
          What we <span className="text-heat">stand for</span>
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="rounded-[1.75rem] border border-white/10 bg-plum p-8 text-cream">
              <span className="text-4xl">{v.e}</span>
              <h3 className="mt-4 font-display text-2xl font-extrabold">{v.t}</h3>
              <p className="mt-2 leading-relaxed text-cream/80">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
