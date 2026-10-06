import type { Metadata } from "next";
import { site, waLink } from "@/lib/site";
import { WeekStrip } from "@/components/WeekStrip";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "This week at the Plug",
  description: "Magic & Money Mondays, Toy Talk Tuesdays, Self-Love Saturdays and more — what's happening on Pleasure Plug every day.",
};

export default function ThisWeekPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6">
      <div className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-flame/20 blur-[130px]" />
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/40">Seven days, seven moods</p>
      <h1 className="mt-3 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-8xl">
        This week <span className="font-serif font-normal italic">at the</span> <span className="text-heat">Plug.</span>
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-cream/70">
        Every day on our WhatsApp status has a theme — spotlights, how-tos, deals, confessions. Save our number so it shows up on your status feed, and
        catch the drops before they sell out.
      </p>
      <a
        href={waLink("Hi Pleasure Plug! Add me to your status updates 🔔")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-ink transition hover:scale-105"
      >
        <WhatsAppIcon className="h-5 w-5" /> Save {site.phoneDisplay}
      </a>
      <div className="mt-14">
        <WeekStrip large />
      </div>
    </section>
  );
}
