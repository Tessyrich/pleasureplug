export type Day = {
  day: string;
  short: string;
  title: string;
  vibe: string;
  emoji: string;
  colors: [string, string];
  image: string;
};

// Index 0 = Sunday, to match Date.getDay().
export const week: Day[] = [
  {
    day: "Sunday",
    short: "Sun",
    title: "Sunday Confessions",
    vibe: "Your anonymous stories & questions. No names, no judgement — we answer everything.",
    emoji: "🤫",
    colors: ["#7a1ccb", "#3b0a2a"],
    image: "/lifestyle/woman-mask.jpg",
  },
  {
    day: "Monday",
    short: "Mon",
    title: "Magic & Money Mondays",
    vibe: "Deep product spotlights, tips & deals. One toy, everything you need to know, and a price that makes sense.",
    emoji: "💸",
    colors: ["#e9c46a", "#ff6a1a"],
    image: "/products/starter-kit.jpg",
  },
  {
    day: "Tuesday",
    short: "Tue",
    title: "Toy Talk Tuesday",
    vibe: "How-tos and myth-busting. How it works, where it goes, and why you've been doing it wrong.",
    emoji: "🎙️",
    colors: ["#ff8a3d", "#ff2e7e"],
    image: "/products/bunny.jpg",
  },
  {
    day: "Wednesday",
    short: "Wed",
    title: "Wet Wednesday",
    vibe: "Lube, essentials & toy care. The midweek reminder that wetter is always better.",
    emoji: "💦",
    colors: ["#6ee7d8", "#3b82f6"],
    image: "/products/silky-lube.jpg",
  },
  {
    day: "Thursday",
    short: "Thu",
    title: "Thirsty Thursday",
    vibe: "Couples night ideas, foreplay games and things to try with your person this weekend.",
    emoji: "🥵",
    colors: ["#ff2e7e", "#b3123f"],
    image: "/lifestyle/couple-kiss.jpg",
  },
  {
    day: "Friday",
    short: "Fri",
    title: "Freaky Friday",
    vibe: "Kink, play & weekend bundles. Cuffs out, phones down.",
    emoji: "⛓️",
    colors: ["#b3123f", "#1a0b14"],
    image: "/products/bdsm-kit.jpg",
  },
  {
    day: "Saturday",
    short: "Sat",
    title: "Self-Love Saturday",
    vibe: "You can't please everyone, but you can please yourself. Solo pleasure, zero apologies.",
    emoji: "💖",
    colors: ["#ff2e7e", "#7a1ccb"],
    image: "/lifestyle/woman-bed.jpg",
  },
];

/** Day of week in Lagos time, so the highlight matches Nigeria regardless of visitor. */
export function lagosDayIndex(date = new Date()) {
  const name = new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "Africa/Lagos" }).format(date);
  return week.findIndex((d) => d.day === name);
}
