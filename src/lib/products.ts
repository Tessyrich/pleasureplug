export type Shape =
  | "suction"
  | "rabbit"
  | "glass"
  | "bullet"
  | "wand"
  | "egg"
  | "ring"
  | "cuffs"
  | "plug"
  | "stroker"
  | "bottle"
  | "kit"
  | "prostate";

export type Category =
  | "For Her"
  | "For Him"
  | "Couples"
  | "Butt Stuff"
  | "Kink & Play"
  | "BDSM Kits"
  | "Essentials";

export type Product = {
  slug: string;
  name: string;
  kind: string;
  price: number;
  category: Category;
  shape: Shape;
  colors: [string, string];
  /** Product photo in /public/products. Without one, a stylised illustration is shown. */
  image?: string;
  /** "contain" shows the whole photo on white instead of cropping it to fill the card. */
  imageFit?: "cover" | "contain";
  /** Where a stock photo came from (shown on the credits page). Leave out for your own photos. */
  photo?: string;
  badge?: string;
  hook: string;
  story: string[];
  features: string[];
  tip: string;
  goodFor: string[];
};

export const categories: { name: Category; slug: string; blurb: string; cover: string; colors: [string, string] }[] = [
  { name: "For Her", slug: "for-her", cover: "rose-sucker", blurb: "Suction, rabbits, wands — the ones that make you skip the group chat.", colors: ["#ff2e7e", "#7a1ccb"] },
  { name: "For Him", slug: "for-him", cover: "stroker", blurb: "Strokers, rings & prostate play. Yes, men deserve nice things too.", colors: ["#ff6a1a", "#b3123f"] },
  { name: "Couples", slug: "couples", cover: "starter-kit", blurb: "Toys built for two. Remote control, shared buzz, zero awkwardness.", colors: ["#ff8a3d", "#ff2e7e"] },
  { name: "Butt Stuff", slug: "butt-stuff", cover: "plug-trio", blurb: "Plugs & beads for the curious. Start small, go slow, always a flared base.", colors: ["#e9c46a", "#ff6a1a"] },
  { name: "Kink & Play", slug: "kink-and-play", cover: "kitten-mask", blurb: "Floggers, masks & teasers. A little bit of naughty for any night.", colors: ["#ff2e7e", "#3b0a2a"] },
  { name: "BDSM Kits", slug: "bdsm-kits", cover: "bdsm-kit", blurb: "Everything in one box — cuffs, gags, blindfolds, whips. Pick your role, agree a safe word, play.", colors: ["#e9c46a", "#1a0b14"] },
  { name: "Essentials", slug: "essentials", cover: "silky-lube", blurb: "Lube, cleaner, massage oil. The unsexy stuff that makes everything sexier.", colors: ["#6ee7d8", "#3b82f6"] },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const products: Product[] = [
  {
    slug: "mary-sucker-vibrator",
    name: "Mary",
    kind: "Sucker & Vibrator",
    price: 35000,
    category: "For Her",
    shape: "suction",
    colors: ["#c026d3", "#7a1ccb"],
    image: "/products/mary-sucker-vibrator.jpg",
    photo: "https://www.pexels.com/photo/close-up-shot-of-a-pink-sex-toy-on-white-surface-11635276/",
    badge: "Monday Spotlight",
    hook: "This is not your regular toy. Mary does two things at once — and does both very, very well.",
    story: [
      "One end gently sucks on the clit with air pulses (no contact, just pressure waves that feel unreal). The other end curves inside to find your G-spot. Use one, use both, use her in the bath — she's waterproof.",
      "Ten suction modes, ten vibration modes. If you get bored with Mary, honestly, that's a you problem.",
    ],
    features: ["10 suction modes", "10 vibration modes", "Body-safe silicone", "Waterproof", "USB rechargeable", "Whisper-quiet"],
    tip: "Start on the lowest suction and hover — don't press. Let the air do the work. Add water-based lube for the inside end.",
    goodFor: ["Clit + G-spot", "Solo nights", "First 'serious' toy"],
  },
  {
    slug: "the-rabbit",
    name: "Bunny",
    kind: "Rabbit Vibrator",
    price: 22000,
    category: "For Her",
    shape: "rabbit",
    colors: ["#ff8a3d", "#ff2e7e"],
    image: "/products/bunny.jpg",
    photo: "https://www.pexels.com/photo/hand-holding-a-sex-toy-5187568/",
    badge: "Best seller",
    hook: "The classic for a reason. Inside and outside, at the same time, with ears that know exactly where to go.",
    story: [
      "Bunny's shaft rotates gently for G-spot love while the little ears flutter on your clit. It's the toy most people say finally 'got' them there.",
      "Soft-touch silicone, smooth curves, a gold base that looks expensive on your nightstand (put her away though, your mum visits).",
    ],
    features: ["Dual motors", "12 patterns", "Body-safe silicone", "Splash-proof", "USB rechargeable"],
    tip: "Try the ears on a slow pulse first, then switch the shaft on. Build it up — the rush is the point.",
    goodFor: ["Blended orgasms", "Solo", "Gifting"],
  },
  {
    slug: "crystal-wand",
    name: "Crystal",
    kind: "Glass Pleasure Wand",
    price: 18000,
    category: "For Her",
    shape: "glass",
    colors: ["#a5f3fc", "#c084fc"],
    image: "/products/crystal-wand.jpg",
    photo: "https://www.pexels.com/photo/glass-sex-toy-5187494/",
    hook: "Pretty enough to be art. Heavy enough to hit right. Run it under warm or cold water and thank us later.",
    story: [
      "Crystal is borosilicate glass — the same tough stuff in lab equipment — so it's non-porous, super hygienic and lasts forever.",
      "No batteries, no buzzing, just smooth, firm pressure. Warm it up for a cosy feel or chill it for a gasp.",
    ],
    features: ["Borosilicate glass", "Temperature play", "Non-porous & hygienic", "Works with any lube"],
    tip: "Test the temperature on your wrist first. Glass + silicone lube = super slick and safe.",
    goodFor: ["G-spot", "Temperature play", "Aesthetic girls"],
  },
  {
    slug: "pocket-bullet",
    name: "Pocket Rocket",
    kind: "Mini Bullet Vibe",
    price: 8000,
    category: "For Her",
    shape: "bullet",
    colors: ["#ff2e7e", "#ff6a1a"],
    image: "/products/pocket-bullet.jpg",
    photo: "https://www.pexels.com/photo/hands-holding-sex-toys-6763669/",
    badge: "Starter pick",
    hook: "Small enough for your handbag, strong enough to cancel your plans.",
    story: [
      "If you've never owned a toy, start here. It's a lipstick-sized bullet with surprising power, and it's dead simple to use.",
      "Use it alone, use it during sex, use it on nipples, inner thighs, wherever. It's small but it's not shy.",
    ],
    features: ["10 vibration modes", "Lipstick size", "Waterproof", "USB magnetic charging"],
    tip: "Tuck it between you and your partner during sex — hands-free buzz for both of you.",
    goodFor: ["Beginners", "Travel", "Couples"],
  },
  {
    slug: "big-wand",
    name: "The Boss",
    kind: "Wand Massager",
    price: 15000,
    category: "For Her",
    shape: "wand",
    colors: ["#f43f5e", "#9f1239"],
    image: "/products/big-wand.jpg",
    photo: "https://www.pexels.com/photo/hand-holding-a-sex-toy-5187562/",
    hook: "Officially a 'body massager'. Unofficially the most powerful thing in your house after NEPA.",
    story: [
      "Deep, rumbly vibrations that you feel everywhere. The flexible head moves with your body so you're never at a weird angle.",
      "Yes, it actually works on sore shoulders too. Nobody has to know what else it does.",
    ],
    features: ["Deep rumbly motor", "Flexible neck", "20 modes", "Cordless & rechargeable"],
    tip: "It's strong — put a layer of fabric (your panties are fine) between you and the head at first.",
    goodFor: ["Powerful orgasms", "Couples", "Muscle massage"],
  },
  {
    slug: "remote-egg",
    name: "Secret Agent",
    kind: "Remote Love Egg",
    price: 15000,
    category: "Couples",
    shape: "egg",
    colors: ["#e9c46a", "#ff2e7e"],
    image: "/products/remote-egg.jpg",
    photo: "https://www.pexels.com/photo/sex-toys-5187374/",
    badge: "Date night",
    hook: "You wear it. They hold the remote. Dinner just got a lot more interesting.",
    story: [
      "A soft egg that sits inside, with a little remote that sits in your partner's hand. Hand it to your partner and let them decide when.",
      "The anticipation is the whole game. Every buzz is a little secret just between you two.",
    ],
    features: ["Remote control", "10 modes", "Body-safe silicone", "Quiet motor", "Rechargeable"],
    tip: "Try it at home first so you know how strong level 1 really is before you take it out on a date.",
    goodFor: ["Teasing", "Long-distance vibes at home", "Date night"],
  },
  {
    slug: "couples-ring",
    name: "Halo",
    kind: "Vibrating Couples Ring",
    price: 10000,
    category: "Couples",
    shape: "ring",
    colors: ["#ff6a1a", "#e9c46a"],
    image: "/products/couples-ring.jpg",
    photo: "https://www.pexels.com/photo/a-blue-silicone-cock-ring-6763673/",
    hook: "He lasts longer. She gets a buzz exactly where it counts. Everyone wins.",
    story: [
      "Halo sits at the base of him, keeps things firm a little longer, and the little vibe sits right against her clit during sex.",
      "It's the easiest way to bring a toy into the bedroom because it doesn't change anything — it just makes it better.",
    ],
    features: ["Stretchy silicone", "Bullet vibe included", "Waterproof", "Reusable"],
    tip: "Put it on before he's fully hard — easier on, more comfortable. Never wear it longer than 30 minutes.",
    goodFor: ["Couples", "Stamina", "Clit stimulation during sex"],
  },
  {
    slug: "stroker",
    name: "Tight Situation",
    kind: "Textured Male Stroker",
    price: 12000,
    category: "For Him",
    shape: "stroker",
    colors: ["#ff6a1a", "#7c2d12"],
    image: "/products/stroker.jpg",
    photo: "https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-sex-toy-6763945/",
    hook: "Guys — your hand has done enough. Give it a day off.",
    story: [
      "Soft, stretchy sleeve with ridges and nubs inside that feel nothing like your palm. Discreet case so it doesn't look like what it is.",
      "Open-ended design means it's easy to clean. Lube up, take your time.",
    ],
    features: ["Textured inner sleeve", "Discreet case", "Easy to clean", "Phthalate-free"],
    tip: "Warm it in warm water for 2 minutes first. Water-based lube only — oil ruins the material.",
    goodFor: ["Solo play", "Couples foreplay", "Him"],
  },
  {
    slug: "prostate-massager",
    name: "The P-Spot",
    kind: "Prostate Massager",
    price: 25000,
    category: "For Him",
    shape: "prostate",
    colors: ["#b3123f", "#3b0a2a"],
    image: "/products/prostate-massager.jpg",
    photo: "https://www.pexels.com/photo/close-up-shot-of-a-person-holding-an-adult-toy-6768993/",
    hook: "Men have a G-spot too. It's called the prostate, and it's been waiting for you.",
    story: [
      "Curved to reach the prostate easily, with a perineum arm that massages from the outside at the same time.",
      "Many men say prostate orgasms are deeper and longer. Only one way to find out.",
    ],
    features: ["Curved head", "Perineum arm", "Remote control", "Flared, safe base", "Rechargeable"],
    tip: "Relax, breathe, use lots of lube and go slow. No rushing the back door — ever.",
    goodFor: ["Prostate play", "Curious guys", "Couples"],
  },
  {
    slug: "plug-trio",
    name: "The Plug Trio",
    kind: "Beginner Butt Plug Set",
    price: 15000,
    category: "Butt Stuff",
    shape: "plug",
    colors: ["#e9c46a", "#b45309"],
    image: "/products/plug-trio.jpg",
    photo: "https://www.pexels.com/photo/sex-toys-5187357/",
    badge: "On brand",
    hook: "We're literally called Pleasure Plug. Of course we have a plug set.",
    story: [
      "Three sizes — small, medium, 'okay wow'. Start with the little one and work your way up when you're ready (or never, that's fine too).",
      "Each one has a wide flared base, which is the most important thing about anything that goes in the butt.",
    ],
    features: ["3 sizes", "Flared safety base", "Smooth silicone", "Storage pouch"],
    tip: "Lube, lube, more lube. The butt doesn't make its own. Use water-based with silicone toys.",
    goodFor: ["Anal beginners", "Him or her", "Fullness during sex"],
  },
  {
    slug: "gold-cuffs",
    name: "First Timer",
    kind: "Cuffs & Blindfold Starter Kit",
    price: 12000,
    category: "BDSM Kits",
    shape: "cuffs",
    colors: ["#e9c46a", "#a16207"],
    image: "/products/gold-cuffs.jpg",
    photo: "https://www.pexels.com/photo/leather-sex-accessories-8587253/",
    hook: "A little bit of power play. Soft enough to be comfy, firm enough to feel it.",
    story: [
      "Padded leather cuffs with a clip-on chain, a soft blindfold and a feather tickler. Everything you need to find out if you like being in charge — or not being in charge.",
      "Agree on a safe word before you start. Something unsexy, like 'jollof'.",
    ],
    features: ["Padded leather wrist cuffs", "Satin blindfold", "Feather tickler", "Quick-release clips"],
    tip: "You should always be able to slip a finger between the cuff and the wrist. Check in with each other often.",
    goodFor: ["Light bondage", "Role play", "Couples"],
  },
  {
    slug: "silky-lube",
    name: "Slide",
    kind: "Water-Based Lubricant",
    price: 6000,
    category: "Essentials",
    shape: "bottle",
    colors: ["#6ee7d8", "#3b82f6"],
    image: "/products/silky-lube.jpg",
    photo: "https://www.pexels.com/photo/person-holding-yellow-banana-with-syrup-5915399/",
    hook: "Lube isn't a sign something's wrong. It's a sign you know what you're doing.",
    story: [
      "Silky, non-sticky, doesn't dry out in two minutes. Safe with every toy and with condoms.",
      "Add it to everything. Sex, toys, solo, massage. Wet is better, period.",
    ],
    features: ["Water-based", "Toy & condom safe", "Non-sticky", "Washes off easily"],
    tip: "Warm a little between your fingers before applying. Cold lube is a jump scare.",
    goodFor: ["Everything", "Everyone"],
  },
  {
    slug: "toy-cleaner",
    name: "Clean Slate",
    kind: "Toy Cleaner Spray",
    price: 5000,
    category: "Essentials",
    shape: "bottle",
    colors: ["#a7f3d0", "#10b981"],
    image: "/products/toy-cleaner.jpg",
    photo: "https://www.pexels.com/photo/a-person-holding-a-sex-toy-7109364/",
    hook: "Treat your toys like you treat your toothbrush. Clean them every time.",
    story: [
      "Gentle, antibacterial, no harsh smell. Spray, wipe, rinse, air dry.",
      "A clean toy is a safe toy, and a safe toy lasts years.",
    ],
    features: ["Antibacterial", "Gentle on silicone", "No harsh scent", "150ml"],
    tip: "Clean before AND after. Store toys separately so silicone doesn't touch silicone.",
    goodFor: ["Toy care", "Hygiene"],
  },
  {
    slug: "starter-kit",
    name: "The Plug Starter Kit",
    kind: "Gift bag: Bullet + Ring + Lube + Cleaner",
    price: 25000,
    category: "Couples",
    shape: "kit",
    colors: ["#ff6a1a", "#ff2e7e"],
    image: "/products/starter-kit.jpg",
    photo: "https://www.pexels.com/photo/different-kinds-of-vibrators-in-a-gift-bag-7107287/",
    badge: "Save ₦4,000",
    hook: "Don't know where to start? We packed it for you.",
    story: [
      "Pocket Rocket bullet, Halo couples ring, Slide lube and Clean Slate cleaner — all in one cute gift bag, packed discreetly.",
      "It's the 'we should try something new' conversation, already answered.",
    ],
    features: ["Pocket Rocket bullet", "Halo ring", "Slide lube", "Clean Slate spray", "Gift-ready box"],
    tip: "Open it together. Seriously. Half the fun is the unboxing.",
    goodFor: ["Couples", "Gifting", "First-timers"],
  },
  {
    slug: "rose-sucker",
    name: "The Rose",
    kind: "Rose Sucker with Vibrating Tail",
    price: 18000,
    category: "For Her",
    shape: "suction",
    colors: ["#e11d48", "#7f1d1d"],
    image: "/products/rose-sucker.jpg",
    photo: "https://www.pexels.com/photo/red-rose-shaped-silicone-adult-toy-in-hand-33524268/",
    badge: "Viral",
    hook: "The one that broke the internet. Looks like a flower, works like magic.",
    story: [
      "A tiny rose with a little opening that pulses air right on your clit. No rubbing, no guesswork — just waves of pressure that build and build. Most people say they finish in minutes. Some say seconds. We don't judge.",
      "This one comes with a vibrating tail on the other end, so you can have the rose outside and the egg inside at the same time. Double trouble.",
    ],
    features: ["Air-pulse suction", "Vibrating egg tail", "Multiple intensity modes", "Body-safe silicone", "Waterproof", "USB rechargeable"],
    tip: "Start on the lowest setting and hold the rose lightly — it should form a soft seal, not press hard. Water-based lube on the edge helps.",
    goodFor: ["Quick orgasms", "Clit lovers", "Gifting"],
  },
  {
    slug: "purple-dildo",
    name: "Purple Reign",
    kind: "Curved G-Spot Vibrator",
    price: 15000,
    category: "For Her",
    shape: "glass",
    colors: ["#a855f7", "#581c87"],
    image: "/products/purple-dildo.jpg",
    photo: "https://www.pexels.com/photo/hand-holding-a-vibrator-5187577/",
    hook: "Smooth, curved and built for one job: finding your G-spot and staying there.",
    story: [
      "The gentle curve tilts right where it needs to. Soft-touch silicone, a gold-trimmed handle and enough power to make you forget what day it is.",
      "Not too big, not too small. Perfect if you're ready to move on from a bullet to something you can feel inside.",
    ],
    features: ["G-spot curve", "10 vibration modes", "Soft-touch silicone", "Waterproof", "USB rechargeable"],
    tip: "Angle the tip towards your belly button — that's where the G-spot lives. Slow, rocking movements beat in-and-out.",
    goodFor: ["G-spot", "Solo nights", "Next step after a bullet"],
  },
  {
    slug: "anal-beads",
    name: "String Theory",
    kind: "Silicone Anal Beads",
    price: 8000,
    category: "Butt Stuff",
    shape: "plug",
    colors: ["#14b8a6", "#0f766e"],
    image: "/products/anal-beads.jpg",
    photo: "https://www.pexels.com/photo/photo-of-a-blue-dildo-6754656/",
    hook: "Small at the tip, bigger at the base. Pull them out slowly at the right moment and… you'll see.",
    story: [
      "Graduated silicone beads on one flexible stem, with a ring handle so nothing gets lost anywhere it shouldn't.",
      "The magic trick: slide them out slowly just as you're about to finish. People rave about it. Try it and report back.",
    ],
    features: ["Graduated bead sizes", "Flexible silicone stem", "Safety ring handle", "Easy to clean"],
    tip: "Lube every bead. Go in slowly, come out even slower. Ring handle stays outside — always.",
    goodFor: ["Anal beginners", "Him or her", "Intense finishes"],
  },
  {
    slug: "bdsm-kit",
    name: "The Full Story",
    kind: "10-Piece BDSM Kit",
    price: 18000,
    category: "BDSM Kits",
    shape: "cuffs",
    colors: ["#e9c46a", "#1a0b14"],
    image: "/products/bdsm-kit.jpg",
    photo: "https://www.pexels.com/photo/close-up-shot-of-leather-made-items-8587259/",
    badge: "Freaky Friday fave",
    hook: "Ten pieces. One bag. Endless ways to find out who's really in charge.",
    story: [
      "Wrist cuffs, ankle cuffs, ball gag, blindfold, flogger, collar with leash, nipple clamps, feather tickler, rope and a storage bag. Basically a whole weekend.",
      "Don't use everything at once (unless you're sure). Pick two or three pieces, talk about what you both want, and build from there.",
    ],
    features: ["Wrist & ankle cuffs", "Blindfold & ball gag", "Flogger & feather", "Collar & leash", "Nipple clamps & rope", "Storage bag"],
    tip: "Agree on a safe word AND a safe signal (for when there's a gag). Check in often. Aftercare — cuddles, water, sweet talk — is part of the play.",
    goodFor: ["Role play", "Couples", "Going further"],
  },
  {
    slug: "flogger",
    name: "Red Alert",
    kind: "Leather Flogger",
    price: 9000,
    category: "Kink & Play",
    shape: "cuffs",
    colors: ["#dc2626", "#111827"],
    image: "/products/flogger.jpg",
    photo: "https://www.pexels.com/photo/hand-holding-a-whip-5187590/",
    hook: "More thud than sting. More tease than pain. Exactly as intense as you both want.",
    story: [
      "Soft faux-leather tails on a comfortable handle. Drag it slowly across skin for a tease, or flick it for a sharper sensation.",
      "Great for beginners because it spreads the impact — you get the drama without the damage.",
    ],
    features: ["Soft faux-leather tails", "Easy-grip handle", "Wrist loop", "Beginner friendly"],
    tip: "Stick to fleshy areas — bum and thighs. Avoid the spine, kidneys, face and joints. Start soft and let them ask for more.",
    goodFor: ["Impact play", "Teasing", "Role play"],
  },
  {
    slug: "kitten-mask",
    name: "Purr",
    kind: "Leather Kitten Mask",
    price: 5000,
    category: "Kink & Play",
    shape: "cuffs",
    colors: ["#dc2626", "#1a0b14"],
    image: "/products/kitten-mask.jpg",
    photo: "https://www.pexels.com/photo/leather-cat-masks-5187492/",
    hook: "Put it on and become someone else for the night. Meow.",
    story: [
      "A faux-leather cat mask with an adjustable strap. Comes in black or red — ask on WhatsApp which colours are in stock.",
      "Masks make role play easier. It's not you being bold, it's her. You're just along for the ride.",
    ],
    features: ["Faux leather", "Adjustable strap", "Black or red", "One size"],
    tip: "Pair it with the flogger or cuffs for a full scene, or just wear it with nothing else. Your call.",
    goodFor: ["Role play", "Date night", "Photos for your partner"],
  },
  {
    slug: "massage-oil",
    name: "Warm Up",
    kind: "Sensual Massage Oil",
    price: 7000,
    category: "Essentials",
    shape: "bottle",
    colors: ["#b45309", "#78350f"],
    image: "/products/massage-oil.jpg",
    photo: "https://www.pexels.com/photo/a-person-holding-a-pump-bottle-with-massage-oil-6560283/",
    hook: "Foreplay starts long before the bedroom. Start it with your hands.",
    story: [
      "A silky, lightly scented oil that warms in your palms and glides across skin. Pump bottle so you're not fumbling mid-moment.",
      "Start with the shoulders, take your time, and let it go wherever it goes.",
    ],
    features: ["Silky glide", "Light scent", "Pump bottle", "Absorbs without stickiness"],
    tip: "Oil and latex condoms don't mix, and keep it away from silicone toys. Use it for massage — switch to Slide lube for the main event.",
    goodFor: ["Foreplay", "Couples", "Self-care nights"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
