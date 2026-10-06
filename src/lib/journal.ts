export type Block = { h?: string; p?: string; list?: string[]; quote?: string };

export type Post = {
  slug: string;
  title: string;
  dek: string;
  tag: string;
  minutes: number;
  colors: [string, string];
  image: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "first-toy-no-shame",
    title: "Your first toy? Start here. No shame, no stress.",
    dek: "Everyone was a beginner once. Here's how to pick something you'll actually love.",
    tag: "Beginners",
    minutes: 4,
    colors: ["#ff8a3d", "#ff2e7e"],
    image: "/lifestyle/woman-toy.jpg",
    body: [
      { p: "Let's get one thing out of the way: buying a toy doesn't mean something is missing in your life or your relationship. It means you're curious about your own body. That's not a scandal — that's growth." },
      { p: "Every week someone sends us a WhatsApp message that starts with 'Please don't laugh but…'. We never laugh. We've heard it all, and honestly, your question is probably the same as the last ten people's." },
      { h: "Step 1: Outside or inside?" },
      { p: "Most people with a vulva need clitoral stimulation to finish. Not 'some'. Most. So if you're starting from zero, start outside — a bullet vibe or a suction toy. If you already know you love penetration, go for a rabbit, which does both." },
      { h: "Step 2: Small and simple wins" },
      { p: "Don't buy the thing with 47 buttons and an app on day one. Get something small, rechargeable and waterproof. You want to learn what you like, not read a manual." },
      { h: "Step 3: Get lube. Yes, even if you 'don't need it'" },
      { p: "Lube makes everything smoother, safer and longer-lasting. Water-based works with every toy. Add it to the cart. Thank us later." },
      { quote: "The best toy is the one you actually use. Not the most expensive one. Not the one your friend has. Yours." },
      { h: "Our honest picks for first-timers" },
      { list: ["Pocket Rocket — tiny bullet, big attitude (₦8,000)", "Mary — suction + vibration, the 'oh wow' toy (₦35,000)", "The Plug Starter Kit — if you're doing this with a partner (₦25,000)"] },
      { p: "Still not sure? Message us on WhatsApp, tell us a little about what you like (or think you might like), and we'll point you to the right one. Real person, real advice, zero judgement." },
    ],
  },
  {
    slug: "lube-is-not-optional",
    title: "Lube is not optional. We need to talk.",
    dek: "Wetter is better. Here's which lube goes with what — and why you should never use Vaseline.",
    tag: "Essentials",
    minutes: 3,
    colors: ["#6ee7d8", "#3b82f6"],
    image: "/products/silky-lube.jpg",
    body: [
      { p: "Somewhere along the line, people started thinking that needing lube means you're 'not into it'. That is a lie. Bodies change with hormones, stress, medication, time of the month, even how much water you drank today." },
      { p: "Lube isn't a fix for a problem. It's an upgrade." },
      { h: "Water-based" },
      { p: "The all-rounder. Safe with every toy and every condom, washes off easily. If you only buy one, buy this. It can dry out, so just add more — or a drop of water." },
      { h: "Silicone-based" },
      { p: "Super slippery and lasts forever, great for shower fun and for anal. BUT don't use it with silicone toys — it can break down the surface over time." },
      { h: "Oil-based (and the kitchen cupboard)" },
      { p: "Coconut oil is popular for massage and solo play, but it breaks latex condoms and can mess with your vaginal pH. And please — no Vaseline, no body cream, no shea butter down there. Your body deserves better." },
      { quote: "If it's going in the butt, lube isn't a suggestion. It's the law." },
      { p: "Our Slide water-based lube is ₦6,000 and works with everything we sell. Wet Wednesday deals are a good time to stock up 😉" },
    ],
  },
  {
    slug: "bringing-toys-to-bed",
    title: "How to bring a toy into the bedroom (without it being awkward)",
    dek: "Your partner isn't being replaced. Here's how to say it so they hear it right.",
    tag: "Couples",
    minutes: 5,
    colors: ["#ff2e7e", "#b3123f"],
    image: "/lifestyle/couple-tender.jpg",
    body: [
      { p: "Here's the fear: you suggest a toy and your partner hears 'you're not enough'. Here's the truth: toys don't replace anybody. A vibrator can't cuddle you, laugh at your jokes or bring you suya at midnight." },
      { p: "Toys are like seasoning. The food is already good. This just makes it hit different." },
      { h: "Pick your moment" },
      { p: "Not in the middle of sex, and not right after an argument. Bring it up when you're both relaxed — lying around, a bit flirty, phones away." },
      { h: "Make it about 'us', not 'me'" },
      { p: "Try: 'I saw something I think we'd both have fun with' instead of 'I need something more'. Same idea, very different energy." },
      { h: "Start with a toy for two" },
      { list: ["A couples ring like Halo — it fits right into what you already do", "A remote egg like Secret Agent — they hold the power, literally", "A bullet you can slip between you during sex"] },
      { h: "Shop together" },
      { p: "Send them this website. Scroll together. Pick something together. Message us together if you want. When it's a shared choice, nobody feels left out." },
      { quote: "The sexiest thing you can bring to bed is honesty. The second sexiest is a good vibrator." },
    ],
  },
  {
    slug: "the-clitoris-deserves-better",
    title: "The clit deserves better (and other things school didn't teach you)",
    dek: "Around 10,000 nerve endings and still treated like an afterthought. Let's fix that.",
    tag: "Real Talk",
    minutes: 4,
    colors: ["#c026d3", "#7a1ccb"],
    image: "/lifestyle/grapefruit.jpg",
    body: [
      { p: "Pop quiz: what's the only organ in the human body whose only job is pleasure? Yes. The clitoris. And somehow it's the one most people know the least about." },
      { p: "Recent research counted around 10,000 nerve endings in it. What you can see is only the tip — the rest extends inside the body, wrapping around in a wishbone shape." },
      { h: "So what does that mean for you?" },
      { list: ["Most women don't orgasm from penetration alone — that's normal, not a problem", "Indirect touch is often better than direct, especially at the start", "Pressure, rhythm and patience matter more than speed", "Suction toys like Mary work so well because they stimulate without rubbing"] },
      { h: "For the partners reading this" },
      { p: "Ask. Then listen. Then ask again. Every body is different, and the person in it is the expert. 'Show me' is one of the sexiest things you can say." },
      { quote: "Orgasm gap? Not on our watch." },
    ],
  },
  {
    slug: "clean-your-toys",
    title: "Cleaning your toys: the boring part that actually matters",
    dek: "Two minutes after every use. Your body (and your toys) will thank you.",
    tag: "Toy Care",
    minutes: 2,
    colors: ["#a7f3d0", "#10b981"],
    image: "/products/toy-cleaner.jpg",
    body: [
      { p: "Would you use the same spoon for a month without washing it? Exactly. Toys need cleaning every single time — before and after." },
      { h: "The quick routine" },
      { list: ["Rinse with warm water", "Use mild unscented soap or a toy cleaner like Clean Slate", "Rinse again and pat dry with a clean towel", "Air dry fully before storing", "Keep the charging port dry if it's not waterproof"] },
      { h: "Storage" },
      { p: "Keep toys in a pouch or separate bags. Silicone touching silicone can make both sticky and ruined. Keep them out of direct sun and far from curious children and nosy visitors." },
      { h: "Sharing" },
      { p: "If a toy moves from the back to the front, wash it in between, or put a fresh condom on it. Non-negotiable." },
    ],
  },
  {
    slug: "butt-stuff-101",
    title: "Butt Stuff 101: go slow, use lube, always a base",
    dek: "Curious about anal play? Here are the three rules nobody should skip.",
    tag: "Butt Stuff",
    minutes: 3,
    colors: ["#e9c46a", "#b45309"],
    image: "/products/plug-trio.jpg",
    body: [
      { p: "Whether you're a man curious about the prostate or a woman who's been wondering, anal play is way more common than people admit. The trick is doing it right." },
      { h: "Rule 1: Lube. A lot." },
      { p: "The butt doesn't make its own lubrication. Whatever amount you're thinking, double it. Reapply often." },
      { h: "Rule 2: Slow is the speed" },
      { p: "Relax, breathe out, take your time. Start with a finger or the smallest plug. It should never hurt — discomfort means slow down or stop." },
      { h: "Rule 3: Flared base, every time" },
      { p: "Anything that goes in the butt must have a wide base so it can't slip in too far. This isn't a vibe, it's anatomy. Everything in our Butt Stuff collection is designed with that base." },
      { quote: "Go slow. Communicate. Have fun. In that order." },
      { p: "The Plug Trio (₦15,000) gives you three sizes to grow with. Message us on WhatsApp if you have questions — we've literally heard them all." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
