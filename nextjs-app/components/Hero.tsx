import { BUSINESS } from "@/lib/business";
import { Hibiscus } from "./art";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Welcome"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      {/* Ambient warm glow — pure CSS, no images */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="drift absolute -top-1/4 left-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(232,80,30,0.35), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/4 h-[70vmin] w-[70vmin] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(233,180,76,0.22), transparent 70%)",
          }}
        />
        <Hibiscus className="spin-slow absolute -right-24 top-16 h-[420px] w-[420px] text-gold/25 sm:-right-12" />
        <Hibiscus className="absolute -bottom-40 -left-32 h-[480px] w-[480px] rotate-12 text-ember/20" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream-soft">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-mango"
          />
          {BUSINESS.category} · Union, NJ
        </p>

        <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-cream sm:text-7xl lg:text-8xl">
          The taste of Haiti,
          <br />
          <span className="bg-gradient-to-r from-mango via-gold to-mango bg-clip-text text-transparent">
            close to home.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-soft sm:text-xl">
          Authentic Haitian &amp; Caribbean cooking on Stuyvesant Avenue —
          griot, legume, soup joumou and more, for dine-in, takeout and
          delivery.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`tel:${BUSINESS.phone.tel}`}
            className="rounded-full bg-mango px-7 py-4 text-base font-semibold text-espresso shadow-[0_8px_30px_rgba(255,138,61,0.35)] transition-transform hover:scale-105"
          >
            Call {BUSINESS.phone.display}
          </a>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/25 px-7 py-4 text-base font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
          >
            Get Directions ↗
          </a>
        </div>

        <p className="mt-10 text-sm text-cream-soft/80">
          Tue–Sat 11 AM–10 PM · Sun 11 AM–8 PM · Closed Mondays
        </p>
      </div>
    </section>
  );
}
