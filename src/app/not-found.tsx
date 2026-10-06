import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-32 text-center">
      <p className="font-display text-[10rem] font-extrabold leading-none text-heat">404</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold">Oops, this one&apos;s not plugged in.</h1>
      <p className="mt-3 font-serif text-2xl italic text-cream/70">The page you&apos;re looking for slipped away. It happens to the best of us.</p>
      <Link href="/shop" className="bg-heat mt-8 rounded-full px-7 py-4 font-display text-lg font-bold text-white">
        Back to the toys
      </Link>
    </section>
  );
}
