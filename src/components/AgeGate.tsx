"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { photos } from "@/lib/photos";
import { Logo } from "./Logo";

const KEY = "pp-18";

export function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ok = false;
    try {
      ok = localStorage.getItem(KEY) === "yes";
    } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read consent from storage on mount
    if (!ok) setShow(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = show ? "hidden" : "";
  }, [show]);

  if (!show) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "yes");
    } catch {}
    setShow(false);
  };

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink/95 p-4 backdrop-blur-2xl" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <Image src={photos.satin.src} alt="" fill sizes="100vw" className="object-cover opacity-30" />
      <div className="animate-drift pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-hot/30 blur-[120px]" />
      <div className="animate-drift-slow pointer-events-none absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-flame/25 blur-[120px]" />

      <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-plum/80 p-8 text-center shadow-2xl sm:p-10">
        <Logo className="text-2xl" />
        <p className="mt-8 font-serif text-xl italic text-mist">Psst… before you come in.</p>
        <h2 id="age-title" className="mt-2 font-display text-4xl font-extrabold leading-[0.95] sm:text-5xl">
          Are you <span className="text-heat">18+</span>?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-cream/70">
          This site talks openly about sex, toys and pleasure. It&apos;s grown folks&apos; business only.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <button onClick={accept} className="bg-heat rounded-full px-6 py-4 font-display text-lg font-bold text-white transition hover:scale-[1.02]">
            Yes, I&apos;m 18+. Let me in 😏
          </button>
          <a href="https://www.google.com" className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-cream/70 transition hover:bg-white/5">
            No, take me back
          </a>
        </div>
      </div>
    </div>
  );
}
