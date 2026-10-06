"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { lagosDayIndex, week } from "@/lib/schedule";
import { waLink } from "@/lib/site";

// Monday-first order for display
const order = [1, 2, 3, 4, 5, 6, 0];

export function WeekStrip({ large = false }: { large?: boolean }) {
  const [today, setToday] = useState(-1);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- today depends on client clock
  useEffect(() => setToday(lagosDayIndex()), []);

  return (
    <div className={large ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 [scrollbar-width:none]"}>
      {order.map((i) => {
        const d = week[i];
        const isToday = i === today;
        return (
          <article
            key={d.day}
            className={`relative flex shrink-0 snap-start flex-col overflow-hidden rounded-[1.75rem] border transition ${
              large ? "" : "w-[78vw] max-w-xs"
            } ${isToday ? "border-transparent text-ink" : "border-white/10 bg-plum"}`}
            style={isToday ? { background: `linear-gradient(140deg, ${d.colors[0]}, ${d.colors[1]})` } : undefined}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={d.image} alt="" fill sizes="(max-width: 768px) 80vw, 320px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-cream backdrop-blur">
                {d.day}
              </span>
              {isToday && <span className="absolute right-4 top-4 rounded-full bg-hot px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">Today</span>}
              <span className="absolute bottom-3 left-4 text-3xl drop-shadow">{d.emoji}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-3xl font-extrabold leading-[0.95]">{d.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${isToday ? "text-ink/80" : "text-cream/60"}`}>{d.vibe}</p>
              {isToday && (
                <a
                  href={waLink(`Hi Pleasure Plug! What's on for ${d.title} today? 👀`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 text-sm font-bold underline decoration-2 underline-offset-4"
                >
                  Ask what&apos;s on today →
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
