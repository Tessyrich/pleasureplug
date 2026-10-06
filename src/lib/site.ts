export const site = {
  name: "Pleasure Plug",
  tagline: "Toys, tips & real talk — delivered discreetly.",
  whatsapp: "2347035249441",
  phoneDisplay: "+234 703 524 9441",
  cities: [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Benin",
    "Ibadan",
    "Enugu",
    "Awka",
    "Kwara",
    "Delta",
  ],
};

export function waLink(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function naira(amount: number) {
  return "₦" + amount.toLocaleString("en-NG");
}
