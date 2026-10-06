const faqs = [
  {
    q: "Will anyone know what's in the package?",
    a: "Nope. Plain packaging, no logos, no 'adult' anything on the outside. Your gateman, your landlady, your nosy neighbour — none of them will know. It's between you and us.",
  },
  {
    q: "How fast is delivery?",
    a: "Within minutes to a few hours in Lagos, Abuja, Benin, PH, Awka, Enugu, Kwara, Ibadan & Delta. Elsewhere in Nigeria usually takes 1–3 days, and yes, we ship outside Nigeria too. Ask on WhatsApp for your exact area.",
  },
  {
    q: "How do I pay?",
    a: "Send your order on WhatsApp, we confirm stock and delivery fee, then share payment details. Ask us about pay-on-delivery for your area.",
  },
  {
    q: "Are the toys body-safe?",
    a: "We stock body-safe silicone, glass and ABS toys. If something isn't body-safe, it doesn't get on our shelf. Ask us about any product's material and we'll tell you straight.",
  },
  {
    q: "I'm shy. Can I just ask a question without buying?",
    a: "Please do! Half our WhatsApp messages are questions. We've heard everything, nothing shocks us, and we will never judge you. Promise.",
  },
  {
    q: "Can I return a toy?",
    a: "For hygiene reasons, opened intimate products can't be returned. But if something arrives faulty, message us within 48 hours and we'll sort you out.",
  },
];

export function Faq() {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map((f) => (
        <details key={f.q} className="group py-2">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 font-display text-xl font-bold sm:text-2xl">
            {f.q}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-xl transition group-open:rotate-45 group-open:bg-hot group-open:text-ink">
              +
            </span>
          </summary>
          <p className="max-w-2xl pb-5 leading-relaxed text-cream/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
