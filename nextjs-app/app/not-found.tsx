import Link from "next/link";
import { Hibiscus } from "@/components/art";

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 text-center">
      <Hibiscus
        className="spin-slow absolute -right-24 top-24 h-[320px] w-[320px] text-gold/15"
        aria-hidden
      />
      <div className="stagger relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          404 — not on the menu
        </p>
        <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight text-cream sm:text-6xl">
          This page got eaten.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-cream-soft">
          The page you&apos;re looking for doesn&apos;t exist — but the kitchen
          is still open.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-mango px-7 py-4 font-semibold text-espresso transition-transform hover:scale-105"
          >
            Back to the table
          </Link>
          <Link
            href="/menu"
            className="rounded-full border border-cream/25 px-7 py-4 font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
          >
            See the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
